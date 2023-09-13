import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { type Cache, filterImports, type QuadString } from "$lib/acHelpers";
import { authHeaders } from "$lib/state/settings";
import { safeFetch, safeParse } from "$lib/utilBrowser";
import type { Quad } from "@rdfjs/types";
import { get, type Readable, type Writable, writable } from "svelte/store";

const EXTERNAL: string = "External Sources";

function parseDeselected(inp: string): string[] {
  const deselecteds = inp.split(",");
  return deselecteds.map(decodeURIComponent);
}

function parseSource(inp: string): { name: string; deselected: string[] } {
  const [name, deselected] = inp.split("#", 2);

  return {
    name: decodeURIComponent(name),
    deselected: parseDeselected(deselected),
  };
}

///
class QueryTarget {
  _params: URLSearchParams;

  sources: { name: string; deselected: string[] }[] = [];
  external: { deselected: string[] } = { deselected: [] };

  constructor() {
    const query = new URLSearchParams(get(page).url.search);

    const sources = [];
    const sourcesInp = query.get("sources");
    if (sourcesInp && sourcesInp.length) {
      const decoded = decodeURIComponent(sourcesInp);
      sources.push(...decoded.split("&").map(parseSource));
    }

    const deselected = [];
    const externalInp = query.get("external");
    if (externalInp && externalInp.length) {
      const decoded = decodeURIComponent(externalInp);
      deselected.push(...parseDeselected(decoded));
    }

    this._params = query;
    this.sources = sources;
    this.external = { deselected };
  }

  delete(location: string) {
    this.sources = this.sources.filter((x) => x.name !== location);
    this.updateUrl();
  }

  private params(): URLSearchParams {
    this._params.delete("external");
    this._params.delete("sources");
    if (this.external.deselected.length) {
      const externalString = this.external.deselected
        .map(encodeURIComponent)
        .join(",");
      console.log("external ", externalString);
      this._params.set("external", encodeURIComponent(externalString));
    }
    if (this.sources.length) {
      const sourceString = this.sources
        .map(
          ({ name, deselected }) =>
            `${encodeURIComponent(name)}#${deselected
              .map(encodeURIComponent)
              .join(",")}`,
        )
        .join("&");

      console.log("sources ", sourceString);
      this._params.set("sources", encodeURIComponent(sourceString));
    }
    return this._params;
  }

  sourceList(): string[] {
    return this.sources.map((x) => x.name);
  }

  addSource(source: string) {
    if (source === EXTERNAL) return;
    if (!this.sources.some((x) => x.name !== source)) {
      this.sources.push({ name: source, deselected: [] });
      this.updateUrl();
    }
  }

  isSelected(source: string, file: string): boolean {
    const target =
      source == EXTERNAL
        ? this.external
        : this.sources.find((x) => x.name === source);
    if (target) {
      return !target.deselected.some((x) => x === file);
    }
    return true;
  }

  toggleSelected(source: string, file: string) {
    const target =
      source == EXTERNAL
        ? this.external
        : this.sources.find((x) => x.name === source);

    if (!target) {
      this.sources.push({ name: source, deselected: [file] });
    } else {
      let wasDeselected = false;
      target.deselected = target.deselected.filter((x) => {
        if (x === file) {
          wasDeselected = true;
          return false;
        }
        return true;
      });

      if (!wasDeselected) target.deselected.push(file);
    }

    this.updateUrl();
  }

  private updateUrl() {
    goto(`?${this.params().toString()}`);
  }
}

export interface Selectable {
  selected(): Readable<number>;
  select(child: Child): void;
  set(location: string, value: string): void;
}

type Node = {
  path: string;
  type: "blob" | "tree";
  size: number;
  url: string;
};

async function contents(
  user: string,
  repo: string,
  branch = "master",
): Promise<Node[]> {
  const url = `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=2`;
  console.log("fetching url ", url);

  const resp = await fetch(url, {
    headers: get(authHeaders),
  });
  const { tree }: { tree: Node[] } = await resp.json();

  return tree.filter((x) => x.type === "blob");
}
async function turtles(
  user: string,
  repo: string,
  branch = "master",
): Promise<
  {
    path: string;
    content: string;
    url: string;
  }[]
> {
  let tree: { path: string; type: string; url: string }[];
  try {
    tree = (await contents(user, repo, branch)).filter((x) =>
      x.path.endsWith("ttl"),
    );
  } catch (ex: any) {
    tree = [];
  }
  const outs = [];

  for (let t of tree) {
    const url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${t.path}`;

    const r = await fetch(url);
    if (r.status < 300 && r.status >= 200) {
      const text = await r.text();
      outs.push({
        path: t.path,
        content: text,
        url,
      });
    } else {
      console.log("failed to add file", t.path);
    }
  }

  return outs;
}

async function parseUrl(url: string) {
  const [_ig, rest] = url.split("github.com/");
  if (!rest) return;

  const [user, repo, _ig2, branch] = rest.split("/");
  if (!user || !repo || !branch) return;

  const ttls = await turtles(user, repo, branch);
  return ttls;
}

export type Child = {
  path: string;
  content: string;
  enabled: boolean;
  toggle: () => void;
  key: number;
  url: string;
  hidden: boolean;
};

export class Children implements Selectable {
  location: string;
  public children: Writable<Child[]> = writable([]);
  state: State;
  deletable = true;

  public static async source(
    location: string,
    state: State,
  ): Promise<Children> {
    const out = new Children(location, state);

    const turtles = await parseUrl(location);
    if (turtles) {
      await Promise.all(turtles.map((x) => out.addChild(x)));
    }

    return out;
  }

  protected constructor(location: string, state: State) {
    this.location = location;
    this.state = state;
  }

  set(location: string, value: string): void {
    this.state.set(location, value);
  }

  delete() {
    this.state.delete(this.location);
  }

  select(child: Child) {
    this.state.select(child);
  }

  selected(): Readable<number> {
    return this.state.selected();
  }

  protected async addChild(
    {
      path,
      content,
      url,
    }: {
      path: string;
      content: string;
      url: string;
    },
    hidden = false,
  ): Promise<void> {
    const quads = safeParse(content, url);
    this.state.set(url, content, quads);
    this.children.update((x) => {
      x.push({
        path,
        content,
        url,
        enabled: this.state.query.isSelected(this.location, path),
        toggle: () => this.state.query.toggleSelected(this.location, path),
        key: id_count,
        hidden,
      });
      id_count += 1;
      return x;
    });

    const other_imports = filterImports(quads, url);
    await Promise.all(other_imports.map((x) => this.state.add_external(x)));
  }
}

export class ExternalChildren extends Children {
  deletable = false;
  added: Set<string> = new Set();

  constructor(location: string, state: State) {
    super(location, state);
  }

  async add_external(location: string, i: number = 1) {
    if (this.added.has(location)) return;
    this.added.add(location);

    console.log("add external depth", i, location);

    const text = await safeFetch(location, {});
    this.addChild(
      {
        path: location,
        content: text,
        url: location,
      },
      text.length === 0,
    );
  }
}

let id_count = 1;

export class State implements Selectable {
  public store: Cache<QuadString> = {};
  private undo_select: undefined | (() => void) = undefined;
  public current = writable("");
  private selected_store = writable(0);
  public local: Child;
  public children: Writable<Children[]> = writable([]);
  public external: ExternalChildren;

  public query!: QueryTarget;

  constructor() {

    this.local = {
      path: "Local",
      content: "",
      enabled: true,
      toggle: () => {},
      key: 0,
      url: "test.com",
      hidden: false,
    };

    this.store["test.com"] = {
      dirty: true,
      quads: [],
      value: "",
      baseIRI: "test.com",
    };

    this.external = new ExternalChildren(EXTERNAL, this);
  }

  selected() {
    return this.selected_store;
  }

  public add_external(location: string): Promise<void> {
    return this.external.add_external(location);
  }

  public init() {
    this.query = new QueryTarget();
    const sources = this.query.sourceList();
    if (sources.length) {
      for (let source of sources) {
        console.log("Adding source", source);
        Children.source(source, this).then((x) => {
          this.children.update((ar) => {
            ar.push(x);
            return ar;
          });
        });
      }
    } else {
      this.add("https://github.com/ajuvercr/mumo-pipeline/tree/main");
    }
  }

  public add(location: string) {
    this.query.addSource(location);
    Children.source(location, this).then((x) => {
      this.children.update((ar) => {
        ar.push(x);
        return ar;
      });
    });

    console.log("added!");
  }

  public delete(location: string) {
    this.children.update((ar) => {
      return ar.filter((x) => x.location !== location);
    });
    this.query.delete(location);
  }

  public select(child: Child) {
    // Don't update value after new selected
    if (this.undo_select) this.undo_select();

    // Set the current selected
    this.selected_store.set(child.key);
    // Set the text field
    this.current.set(child.content);
    // Don't update value after new selected
    this.undo_select = this.current.subscribe((x) => {
      child.content = x;
      this.store[child.url].dirty = true;
      this.store[child.url].value = x;
    });
  }

  public set(location: string, value: string, quads?: Quad[]) {
    const dirty = quads === undefined;
    this.store[location] = {
      dirty,
      value,
      baseIRI: location,
      quads: quads || [],
    };
  }

  public files(): Child[] {
    // iew
    const out = [];
    for (let child of get(this.children)) {
      out.push(...get(child.children).filter((x) => x.enabled));
    }
    out.push(...get(this.external.children).filter((x) => x.enabled));
    out.push(this.local);
    return out;
  }
}
