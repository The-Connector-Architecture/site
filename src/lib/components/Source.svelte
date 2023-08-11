<script lang="ts" context="module">
  export type Turtle = {
    path: string;
    content: Writable<string>;
    enabled: boolean;
  };
</script>

<script lang="ts">
  import MdDelete from "svelte-icons/md/MdDelete.svelte";
  import MdCheckBoxOutlineBlank from "svelte-icons/md/MdCheckBoxOutlineBlank.svelte";
  import MdCheckBox from "svelte-icons/md/MdCheckBox.svelte";
  import { createEventDispatcher } from "svelte";
  import { authHeaders } from "$lib/state/settings";
  import { get, writable, type Writable } from "svelte/store";

  export let location: string;
  export let files: Turtle[] = [];

  export let selected: Writable<{ id: number; i: number }>;
  export let key: number;

  let ourSelect: number | undefined = undefined;
  selected.subscribe((x) => {
    if (x.id === key) ourSelect = x.i;
    else ourSelect = undefined;
  });

  const dispatch = createEventDispatcher();

  type Node = {
    path: string;
    type: "blob" | "tree";
    size: number;
    url: string;
  };

  async function contents(
    user: string,
    repo: string,
    branch = "master"
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
    branch = "master"
  ): Promise<Turtle[]> {
    let tree;
    try {
      tree = (await contents(user, repo, branch)).filter((x) =>
        x.path.endsWith("ttl")
      );
    } catch (ex: any) {
      tree = [
        {
          path: "bucketizeStrategy.ttl",
          mode: "100644",
          type: "blob",
          sha: "01fcd527408d50b217295da6b7c048caa72e21c4",
          size: 329,
          url: "https://api.github.com/repos/ajuvercr/mumo-pipeline/git/blobs/01fcd527408d50b217295da6b7c048caa72e21c4",
        },
        {
          path: "metadataIn.ttl",
          mode: "100644",
          type: "blob",
          sha: "d97c2a2e1336437b996fa5b25329949d37de0625",
          size: 1099,
          url: "https://api.github.com/repos/ajuvercr/mumo-pipeline/git/blobs/d97c2a2e1336437b996fa5b25329949d37de0625",
        },
        {
          path: "pipeline.ttl",
          mode: "100644",
          type: "blob",
          sha: "f9cbbec0079ac06fc5466004bb45d82f07fafb10",
          size: 2934,
          url: "https://api.github.com/repos/ajuvercr/mumo-pipeline/git/blobs/f9cbbec0079ac06fc5466004bb45d82f07fafb10",
        },
        {
          path: "proc/fetch.ttl",
          mode: "100644",
          type: "blob",
          sha: "e7a21ef92ece4d0a200501723618ec123a1c14f7",
          size: 1744,
          url: "https://api.github.com/repos/ajuvercr/mumo-pipeline/git/blobs/e7a21ef92ece4d0a200501723618ec123a1c14f7",
        },
        {
          path: "proc/mumo_mapper.ttl",
          mode: "100644",
          type: "blob",
          sha: "975e62daf8a06939c5a7af8a1339ffd61a7d36b1",
          size: 1165,
          url: "https://api.github.com/repos/ajuvercr/mumo-pipeline/git/blobs/975e62daf8a06939c5a7af8a1339ffd61a7d36b1",
        },
        {
          path: "fetch.ttl",
          mode: "100644",
          type: "blob",
          sha: "e7a21ef92ece4d0a200501723618ec123a1c14f7",
          size: 1744,
          url: "https://api.github.com/repos/ajuvercr/mumo-pipeline/git/blobs/e7a21ef92ece4d0a200501723618ec123a1c14f7",
        },
        {
          path: "mumo_mapper.ttl",
          mode: "100644",
          type: "blob",
          sha: "975e62daf8a06939c5a7af8a1339ffd61a7d36b1",
          size: 1165,
          url: "https://api.github.com/repos/ajuvercr/mumo-pipeline/git/blobs/975e62daf8a06939c5a7af8a1339ffd61a7d36b1",
        },
      ];
    }
    console.log("tree", tree);
    const outs = [];

    // https://raw.githubusercontent.com/ajuvercr/jsonld-lsp/main/Cargo.lock
    for (let t of tree) {
      const url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${t.path}`;
      const r = await fetch(url);
      if (r.status < 300 && r.status >= 200) {
        const text = await r.text();
        outs.push({
          path: t.path,
          content: writable(text),
          enabled: true,
        });
      } else {
        console.log("failed to add file", t.path);
      }
    }

    return outs;
  }

  // https://github.com/ajuvercr/mumo-pipeline/blob/main/pipeline.ttl
  // https://github.com/ajuvercr/mumo-pipeline/tree/main
  async function parseUrl(url: string) {
    const [_ig, rest] = url.split("github.com/");
    if (!rest) return;

    const [user, repo, _ig2, branch] = rest.split("/");
    if (!user || !repo || !branch) return;

    const ttls = await turtles(user, repo, branch);
    dispatch("loaded", ttls);
    console.log("ttls", ttls);
    files = ttls;
  }

  function doDelete() {
    console.log("Should delete now");
    dispatch("delete");
  }

  function selectThis(i: number) {
    selected.set({ id: key, i });
    dispatch("select", files[i].content);
  }

  $: parseUrl(location);

  $: console.log("update files", files);
</script>

<section>
  <header>
    <span>
      {location}
    </span>
    <div on:click={doDelete}>
      <MdDelete />
    </div>
  </header>

  <ul>
    {#each files as { path, enabled }, i}
      <li>
        <span
          class:selected={ourSelect === i}
          on:click={() => selectThis(i)}>{path}</span
        >
        <div on:click={() => (files[i].enabled = !files[i].enabled)}>
          {#if enabled}
            <MdCheckBox />
          {:else}
            <MdCheckBoxOutlineBlank />
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  .selected {
    color: pink;
  }
  ul li {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul li div {
    color: #333;
    width: 32px;
    height: 32px;
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header div {
    color: #333;
    width: 32px;
    height: 32px;
  }
</style>
