import type { GraphEdge } from "dagre";
import type { Node } from "dagre";
import { subjects, unique } from "rdf-lens";
import { type PipelineStep, sizedStep, StepLens } from "$lib/pipeline/pipeline";
import { type Proc, procLens } from "$lib/pipeline/processor";
import type { Quad } from "@rdfjs/types";

import pkg from 'dagre';
const { graphlib, layout } = pkg;

export interface Sized {
  width: number;
  height: number;
}

let i = 0;

export class DGraph<T extends Sized, E extends {}> {
  g: graphlib.Graph<T>;
  nodes: Set<string>;

  constructor() {
    this.g = new graphlib.Graph();
    this.g.setGraph({
      marginx: 20,
      marginy: 20,
    });
    this.g.setDefaultEdgeLabel(function () {
      return {};
    });

    layout(this.g);
    this.nodes = new Set();
  }

  addNode(id: string, node: T) {
    if (this.nodes.has(id)) return;
    this.g.setNode(id, node);
    this.nodes.add(id);
  }

  addEdge(start: string, end: string, e: E) {
    this.g.setEdge(start, end, e);
    i += 1;
  }

  calculate(): {
    nodes: Node<T>[];
    edges: (GraphEdge & E)[];
    width: number;
    height: number;
  } {
    layout(this.g);
    const nodes = this.g.nodes().map((id) => this.g.node(id));
    const edges = this.g.edges().map((id) => <GraphEdge & E> this.g.edge(id));
    const { width, height } = this.g.graph();
    return { nodes, edges, width: width!, height: height! };
  }
}

export type Port = {
  id: string;
  ty: "input" | "output";
  width: number;
  height: number;
};
let portCount = 0;

function genPort(ty: Port["ty"]): Port {
  portCount += 1;
  return { id: "port-" + portCount, ty, width: 40, height: 40 };
}

export function generateGraph(
  quads: Quad[],
): [DGraph<(Port | PipelineStep) & Sized, {}>, Proc[]] {
  const subsL = subjects().then(unique()).asMulti();
  const stepsStart = performance.now();
  const steps = subsL.thenAll(StepLens()).execute(quads);
  const stepsEnd = performance.now();

  const procsStart = performance.now();
  const procs = subsL.thenAll(procLens()).execute(quads);
  const procsEnd = performance.now();

  console.log("steps", stepsEnd - stepsStart, "ms", steps);
  console.log("procs", procsEnd - procsStart, "ms", procs);

  const readers: { [id: string]: string } = {};
  const writers: { [id: string]: string } = {};
  const total: Set<string> = new Set();
  const dgraph = new DGraph<(PipelineStep & Sized) | (Port & Sized), {}>();

  for (let step of steps) {
    dgraph.addNode(step.id, sizedStep(step));
    for (let reader of step.readers) {
      readers[reader.value] = step.id;
      total.add(reader.value);
    }

    for (let writer of step.writers) {
      writers[writer.value] = step.id;
      total.add(writer.value);
    }
  }

  for (let channel of total.keys()) {
    const reader: string | undefined = readers[channel];
    const writer: string | undefined = writers[channel];
    if (reader && writer) {
      dgraph.addEdge(writer, reader, {});
    } else {
      if (reader) {
        const port = genPort("input");
        dgraph.addNode(port.id, port);
        dgraph.addEdge(port.id, reader, {});
      }
      if (writer) {
        const port = genPort("output");
        dgraph.addNode(port.id, port);
        dgraph.addEdge(writer, port.id, {});
      }
    }
  }

  return [dgraph, procs];
}
