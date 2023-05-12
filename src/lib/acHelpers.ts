import { DC, FNO, SHACL, createUriAndTermNamespace, RDF as RDFT, XSD } from "@treecg/types";
import type * as RDF from "@rdfjs/types";
import { Parser, Store } from "n3";

export const JS = createUriAndTermNamespace("https://w3id.org/conn/js#", "file", "function", "location", "mapping", "JsProcess");
export const CONN = createUriAndTermNamespace("https://w3id.org/conn#", "ReaderChannel", "WriterChannel");

export type ParameterType =
  "ReaderChannel" |
  "WriterChannel" |
  "String" |
  "integer" |
  "float" | "unknown";


export interface Parameter {
  name?: string;
  type: ParameterType;
  path: string;
  optional: boolean,
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
    name: nameSt, type, path: pathSt, optional
  };
}

export interface Processor {
  title: string;
  location: string;
  description?: string;
  type: string;

  parameters: Parameter[],
}

function getObj(subj: RDF.Term, pred: RDF.Term, store: Store): RDF.Term | undefined {
  const options = store.getObjects(subj, pred, null);
  if (options.length > 0) {
    return options[0];
  }
}

export function extractJsProcessor(subj: RDF.Term, store: Store, location: string): Processor {
  const type = getObj(subj, RDFT.terms.type, store);
  if (!type) {
    throw "No type found!";
  }

  const title = getObj(subj, DC.terms.title, store)?.value || subj.value;
  const description = getObj(subj, DC.terms.description, store)?.value;

  const mapping = getObj(subj, JS.terms.mapping, store);
  if (!mapping) {
    throw "No mapping found!";
  }

  const shShape = store.getSubjects(SHACL.terms.targetClass, subj, null)[0];
  if (!shShape) {
    throw "No SHACL shape found!";
  }

  const parameters = store.getObjects(shShape, SHACL.terms.property, null).flatMap(x => {
    try {
      const parameter = extractParameter(x, store);
      return [parameter];
    } catch (ex) {
      return [];
    }
  });

  return {
    title, description, parameters, type: JS.JsProcess, location,
  }
}

export function extractProcessors(store: Store, location: string): Processor[] {
  return store.getSubjects(RDFT.terms.type, JS.terms.JsProcess, null).map(x => extractJsProcessor(x, store, location));
}

export async function fetchStore(url: string): Promise<Store> {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const quads = new Parser().parse(data);

    return new Store(quads);

  } catch (e: any) {
    console.log("fetch failed", url);
    console.log(e);
    throw e;
  }
}

