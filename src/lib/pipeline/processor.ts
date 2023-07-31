
import { pred, BasicLens, type Cont } from "rdf-lens";
import { createUriAndTermNamespace } from "@treecg/types";
import { DC } from "@treecg/types";

export const CONN = createUriAndTermNamespace("https://w3id.org/conn#", "install", "build", "GitInstall", "LocalInstall", "url", "procFile", "path");
export const JS = createUriAndTermNamespace("https://w3id.org/conn/js#", "JsProcess");

export type Field = string;


export type Proc = {
  id: string,
  title: string,
  description: string | undefined,
  fields: Field[],
}

export function procLens(): BasicLens<Cont, Proc> {
  const titleL = pred(DC.terms.title).one().map(x => x.id.value);
  const descriptionL = pred(DC.terms.description).expectOne(false, undefined).map(x => x?.id.value || "");

  return new BasicLens((c: Cont) => {
    const title = titleL.execute(c);
    const description = descriptionL.execute(c);

    return {
      id: c.id.value,
      title, description,
      fields: []
    };
  });
}



