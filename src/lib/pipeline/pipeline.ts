import { pred, BasicLens, type Cont, BasicLensM, predTriple, invPred } from "rdf-lens";
import { procLens, type Proc } from "./processor";
import { RDF } from "@treecg/types";
import { CONN } from "$lib/acHelpers";
import type { Quad, Term } from "@rdfjs/types";
import type { Sized } from "$lib/graph";


export type Field = { value: string, prop: string };
export type Channel = { value: string, prop: string, type: string };

export type PipelineStep = {
  id: string,
  proc: Proc,
  fields: Field[],
  readers: Channel[],
  writers: Channel[],
};

export function sizedStep(pipeline: PipelineStep): Sized & PipelineStep {
  const width = 700;
  const height = 24 + 12 + 16 + pipeline.fields.length * 28;

  return Object.assign({ width, height }, pipeline);
}


function fieldL(): BasicLensM<Cont, Field> {
  return predTriple().mapAll(({ id }) => ({ value: id.object.value, prop: id.predicate.value }));
}

function channelL(predTerm: Term): BasicLensM<Cont, Channel> {
  const invReader = new BasicLens<Cont<Quad>, Channel>(({ id, quads }) => {
    const typed = pred(RDF.terms.type).one().execute({ id: id.object, quads });
    const target = invPred(predTerm).one().execute({ id: id.object, quads });
    if (!target) {
      throw "nah";
    }

    return { prop: id.predicate.value, value: target.id.value, type: typed.id.value };
  });

  return predTriple().thenAll(invReader)
}

export function StepLens(): BasicLens<Cont, PipelineStep> {
  const idL = new BasicLens<Cont, { id: string }>(({ id }) => ({ id: id.value }));
  const procL = pred(RDF.terms.type).one().then(procLens());
  const pl = procL.map(proc => ({ proc }));
  const fieldsL = fieldL().map(fields => ({ fields }));
  const readersL = channelL(CONN.terms.reader).map(readers => ({ readers }));
  const writersL = channelL(CONN.terms.writer).map(writers => ({ writers }));

  return new BasicLens(c => {
    let o = pl.and(fieldsL, readersL, writersL, idL)
      .map(([{ proc }, { fields }, { readers }, { writers }, { id }]) => ({ proc, fields, readers, writers, id }))
      .execute(c);
    return o;
  });
}
