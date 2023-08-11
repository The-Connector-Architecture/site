import type { GraphEdge } from "dagre";
import type { Node } from "dagre";
import { graphlib, layout } from "dagre";

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
    this.g.setDefaultEdgeLabel(function() { return {}; });

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

  calculate(): { nodes: Node<T>[], edges: (GraphEdge & E)[], width: number, height: number } {
    layout(this.g);
    const nodes = this.g.nodes().map(id => this.g.node(id));
    const edges = this.g.edges().map(id => <GraphEdge & E>this.g.edge(id));
    const { width, height } = this.g.graph();
    return { nodes, edges, width: width!, height: height! };
  }
}
