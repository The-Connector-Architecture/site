
import { pred, BasicLens, type Cont, invPred, BasicLensM, predTriple } from "rdf-lens";
import { DC, RDF, SHACL, createUriAndTermNamespace } from "@treecg/types";

export const CONN = createUriAndTermNamespace("https://w3id.org/conn#", "install", "build", "GitInstall", "LocalInstall", "url", "procFile", "path");
export const JS = createUriAndTermNamespace("https://w3id.org/conn/js#", "JsProcess");

export type Field = { name: string, prop: string };

function fieldLens(): BasicLensM<Cont, Field> {
  const fieldName = pred(SHACL.terms.name).one().map(x => ({ name: x.id.value }));
  const fieldProp = pred(SHACL.terms.path).one().map(x => ({ prop: x.id.value }));
  const fieldL = fieldName.and(fieldProp).map(([{ name }, { prop }]) => ({ name, prop }));

  return invPred(SHACL.terms.targetClass).thenFlat(pred(SHACL.terms.property)).thenAll(fieldL);
}

export type Proc = {
  id: string,
  title: string,
  // description: string | undefined,
  fields: Field[],
}

export function procLens(): BasicLens<Cont, Proc> {
  const isProc = predTriple(RDF.terms.type).one().map(x => {
    if (x.id.object.value === "https://w3id.org/conn/js#JsProcess") {
      console.error("a jsprocess!");
      return x.id.subject.value;
    } else {
      throw "Not a JsProcessor";
    }
  });

  const p = isProc.map((id) => ({ id }));
  const nameL = pred(DC.terms.title).one().map(name => ({ name: name?.id.value }));
  const descL = pred(DC.terms.description).one().map(desc => ({ desc: desc?.id.value || "" }));
  const fieldsL = fieldLens().map(fields => ({ fields }))

  return new BasicLens((c: Cont) => {
    return p.and(nameL, descL, fieldsL)
      .map(([{ id }, { name }, { desc }, { fields }]) => ({ id, desc, fields, title: name || id }))
      .execute(c);
  });
}

