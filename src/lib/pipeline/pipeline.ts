import { pred, BasicLens, type Cont, objects } from "rdf-lens";
import { procLens, type Proc } from "./processor";
import { RDF } from "@treecg/types";


export type Field = string;
export type PipelineStep = {
  proc: Proc,
  fields: Field[],
};

export function StepLens(): BasicLens<Cont, PipelineStep> {
  const procL = pred(RDF.terms.type).one().then(procLens());

  return new BasicLens(c => {
    const proc = procL.execute(c);
    const fields = objects().mapAll(({id}) => id.value).execute(c);

    return {proc, fields};
  });
}
