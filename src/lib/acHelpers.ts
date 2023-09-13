import {
  createUriAndTermNamespace,
  DC,
  OWL,
  RDF as RDFT,
  SHACL,
  XSD,
} from "@treecg/types";
import type * as RDF from "@rdfjs/types";
import { DataFactory, type Quad_Object, Store } from "n3";
import { subjects, unique } from "rdf-lens";
import { procLens } from "./pipeline/processor";
import { safeFetch, safeParse } from "./utilBrowser";
import type { Quad } from "@rdfjs/types";

const { namedNode } = DataFactory;
export const JS = createUriAndTermNamespace(
  "https://w3id.org/conn/js#",
  "file",
  "function",
  "location",
  "mapping",
  "JsProcess",
);
export const CONN = createUriAndTermNamespace(
  "https://w3id.org/conn#",
  "ReaderChannel",
  "WriterChannel",
  "supportsChannel",
  "ProcessClass",
  "Channel",
  "reader",
  "writer",
);

export type Kind = "Processor" | "Channel" | "Runner";
export type ParameterType =
  | "ReaderChannel"
  | "WriterChannel"
  | "String"
  | "integer"
  | "float"
  | "unknown";

interface Base {
  id: string;
  title: string;
  location: string;
  description?: string;

  parameters: Parameter[];
}

export interface Parameter {
  name?: string;
  type: ParameterType;
  path: string;
  optional: boolean;
}

export interface Processor extends Base {
  type: string;
}

export interface ChannelRef {
  title: string;
  id: string;
}
export interface Runner extends Base {
  channels: ChannelRef[];
}

export interface ChannelHalf {
  id: string;
  parameters: Parameter[];
}

export interface Channel extends Base {
  reader: ChannelHalf;
  writer: ChannelHalf;
}

function isOptional(minCount: RDF.Term | undefined): boolean {
  if (!minCount) return true;
  return parseInt(minCount.value) < 1;
}

function extractParameter(shProperty: RDF.Term, store: Store): Parameter {
  const name = getObj(shProperty, SHACL.terms.name, store);

  const classProp = getObj(shProperty, SHACL.terms.custom("class"), store);
  const dataType = getObj(shProperty, SHACL.terms.datatype, store);
  const path = getObj(shProperty, SHACL.terms.path, store);
  if (!path) {
    throw "Path not defined";
  }

  const optional = isOptional(getObj(shProperty, SHACL.terms.minCount, store));

  let type: ParameterType = "unknown";

  if (classProp) {
    if (classProp.equals(CONN.terms.ReaderChannel)) type = "ReaderChannel";
    if (classProp.equals(CONN.terms.WriterChannel)) type = "WriterChannel";
  }

  if (dataType) {
    if (dataType.equals(XSD.terms.string)) type = "String";
    if (dataType.equals(XSD.terms.integer)) type = "integer";
  }

  const pathSt = path?.value;
  const nameSt = name?.value;

  return {
    name: nameSt,
    type,
    path: pathSt,
    optional,
  };
}

function getObj(
  subj: RDF.Term,
  pred: RDF.Term,
  store: Store,
): RDF.Term | undefined {
  const options = store.getObjects(subj, pred, null);
  if (options.length > 0) {
    return options[0];
  }
}

function extractProperties(subj: RDF.Term, store: Store): Parameter[] {
  const shShape = store.getSubjects(SHACL.terms.targetClass, subj, null)[0];

  if (shShape) {
    return store.getObjects(shShape, SHACL.terms.property, null).flatMap(
      (x) => {
        try {
          const parameter = extractParameter(x, store);
          return [parameter];
        } catch (ex) {
          return [];
        }
      },
    );
  }

  return [];
}

function extractBase(subj: RDF.Term, store: Store, location: string): Base {
  const id = subj.value;
  const title = getObj(subj, DC.terms.title, store)?.value || subj.value;
  const description = getObj(subj, DC.terms.description, store)?.value;

  const parameters = extractProperties(subj, store);

  return {
    id,
    title,
    description,
    parameters,
    location,
  };
}

export function extractProcessor(
  subj: RDF.Term,
  store: Store,
  loc: string,
): Processor {
  const type = getObj(subj, RDFT.terms.type, store)?.value;
  if (!type) {
    throw "No type found!";
  }

  const { id, title, description, parameters, location } = extractBase(
    subj,
    store,
    loc,
  );

  return {
    id,
    title,
    description,
    parameters,
    type,
    location,
  };
}

export function extractRunner(
  subj: RDF.Term,
  store: Store,
  loc: string,
  declared_channels: Channel[],
): Runner {
  const { id, title, description, parameters, location } = extractBase(
    subj,
    store,
    loc,
  );

  const channels = store.getObjects(subj, CONN.terms.supportsChannel, null).map(
    (x) => {
      const c = declared_channels.find((c) => c.id === x.value);
      if (c) {
        return {
          title: c.title,
          id: c.id,
        };
      } else {
        return {
          title: x.value,
          id: x.value,
        };
      }
    },
  );

  return {
    id,
    title,
    description,
    parameters,
    location,
    channels,
  };
}

export function extractChannel(
  subj: RDF.Term,
  store: Store,
  loc: string,
): Channel {
  const { id, title, description, location } = extractBase(subj, store, loc);

  const readerId = getObj(subj, CONN.terms.reader, store);
  const writerId = getObj(subj, CONN.terms.writer, store);

  if (!(readerId && writerId)) {
    throw "Reader and writer have to be defined";
  }

  const toHalf = (id: RDF.Term) => {
    const parameters = extractProperties(id, store);
    return {
      id: id.value,
      parameters,
    };
  };

  return {
    id,
    title,
    description,
    location,
    parameters: [],
    writer: toHalf(writerId),
    reader: toHalf(readerId),
  };
}

export async function extractLocations(locations: string[]): Promise<{
  procs: Processor[];
  channels: Channel[];
  runners: Runner[];
}> {
  const stores = await Promise.all(
    locations.map(async (loc) => {
      return { store: await fetchStore(loc), loc };
    }),
  );

  for (let st of stores) {
    const quads = st.store.getQuads(null, null, null, null);
    const procs = subjects().then(unique()).asMulti().thenSome(procLens())
      .execute(quads);

    console.log("found procs", procs);
  }

  const runners: Runner[] = [];
  const channels: Channel[] = [];

  for (let store of stores) {
    const channelIds = store.store.getSubjects(
      RDFT.terms.type,
      CONN.terms.Channel,
      null,
    );
    channels.push(
      ...channelIds.map((x) => extractChannel(x, store.store, store.loc)),
    );
  }

  for (let store of stores) {
    const runnerIds = store.store.getSubjects(
      RDFT.terms.type,
      CONN.terms.ProcessClass,
      null,
    );
    runners.push(
      ...runnerIds.map((x) =>
        extractRunner(x, store.store, store.loc, channels)
      ),
    );
  }

  const procs: Processor[] = [];

  for (let store of stores) {
    for (let runner of runners) {
      const t = namedNode(runner.id);
      const procIds = store.store.getSubjects(RDFT.terms.type, t, null);
      procs.push(
        ...procIds.map((x) => extractProcessor(x, store.store, store.loc)),
      );
    }
  }
  return { procs, channels, runners };
}

export function extractProcessors(store: Store, location: string): Processor[] {
  return store.getSubjects(RDFT.terms.type, JS.terms.JsProcess, null).map((x) =>
    extractProcessor(x, store, location)
  );
}

export async function fetchStore(url: string): Promise<Store> {
  const data = await safeFetch(url);
  const quads = safeParse(data);
  return new Store(quads);
}

export async function load_quads(location: string, baseIRI?: string) {
  const data = await safeFetch(location);
  return safeParse(data, baseIRI || location);
}

export type QuadString = {
  value: string;
  quads: RDF.Quad[];
  dirty: boolean;
  baseIRI: string;
};

export async function getQuads(
  obj: QuadString,
  external?: (ex: string) => PromiseLike<any>,
) {
  if (obj.dirty) {
    console.log("resolving dirty quads", obj.baseIRI);
    obj.quads = safeParse(obj.value, obj.baseIRI);
    obj.dirty = false;

    if (external) {
      const other_imports = filterImports(obj.quads, obj.baseIRI);
      for (let other of other_imports) {
        await external(other);
      }
    }
  }

  return obj.quads;
}

export type Cache<T = string> = { [iri: string]: T };

export function filterImports(quads: Quad[], location: string): string[] {
  return quads.filter((x) =>
    // x.subject.equals(namedNode(location)) &&
    x.predicate.equals(OWL.terms.imports)
  ).map((x) => x.object.value);
}

export async function load(
  location: string,
  loaded: Set<string>,
  store: Cache<QuadString>,
  external?: (ex: string) => PromiseLike<any>,
  process?: (quads: RDF.Quad[], baseIRI: string) => PromiseLike<RDF.Quad[]>,
): Promise<RDF.Quad[]> {
  const _process = process || ((q: RDF.Quad[]) => q);
  if (loaded.has(location)) return [];
  loaded.add(location);

  if (!store[location]) {
    store[location] = {
      dirty: true,
      quads: [],
      value: await safeFetch(location),
      baseIRI: location,
    };
    console.log("Not in store! Getting", location);
  }

  const qs = await getQuads(store[location], external);
  const quads = await _process(qs.slice(), location);

  if (external) {
    const other_imports = filterImports(quads, location);
    for (let other of other_imports) {
      await external(other);
    }
  }

  return quads;
}
