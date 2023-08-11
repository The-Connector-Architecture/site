<script lang="ts">
  import type { Node as DNode } from "dagre";
  import { load_text, load_strings } from "$lib/acHelpers";
  import { Quad, Store } from "n3";
  import SourceList from "$lib/components/SourceList.svelte";
  import type { Turtle } from "$lib/components/Source.svelte";
  import { subjects, unique } from "rdf-lens";
  import {
    StepLens,
    type PipelineStep,
    sizedStep,
  } from "$lib/pipeline/pipeline";
  import { procLens, type Proc } from "$lib/pipeline/processor";
  import Processor from "$lib/components/Processor.svelte";
  import { DGraph } from "$lib/graph";
  import type { Sized } from "$lib/graph";
  import Step from "$lib/components/Step.svelte";
  import type { GraphEdge } from "dagre";
  import { get, writable } from "svelte/store";

  type Port = {
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

  type S = { location: string; files: Turtle[]; key: number }[];
  let value = ``;
  let sources: S = [
    {
      location: "https://github.com/ajuvercr/mumo-pipeline/tree/main",
      files: [],
      key: 0,
    },
  ];

  let procs: Proc[] = [];

  let thisQuads: Quad[] = [];
  let quads: Quad[] = [];
  let w = 0;
  let h = 0;

  let data: {
    nodes: DNode<PipelineStep | Port>[];
    edges: GraphEdge[];
    width: number;
    height: number;
  } = {
    nodes: [],
    edges: [],
    width: 0,
    height: 0,
  };

  async function updateQuads(start: Quad[], sources: S) {
    const qs = await Promise.all(
      sources
        .flatMap((x) =>
          x.files.map(({ content, path, enabled }) => ({
            content,
            path,
            base: x.location,
            enabled,
          }))
        )
        .filter((x) => x.enabled)
        .map((x) => load_strings(get(x.content), x.base + "/" + x.path))
    );

    quads = [...start, ...qs.flat()];

    const subsL = subjects().then(unique()).asMulti();
    const stepsStart = performance.now();
    const steps = subsL.thenSome(StepLens(), true).execute(quads);
    const stepsEnd = performance.now();

    const procsStart = performance.now();
    procs = subsL.thenSome(procLens(), true).execute(quads);
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

    data = dgraph.calculate();

    w = data.width;
    h = data.height;
  }

  $: updateQuads(thisQuads, sources);

  async function getData(value: string) {
    if (value) {
      const store = new Store();
      await load_text(value, store);
      thisQuads = store.getQuads(null, null, null, null);
    }
  }

  function getArrowLine(points: { x: number; y: number }[]): string {
    if (points.length < 3) {
      const [start, end] = points;
      return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
    }

    const [start, first, ...next] = points;
    let o = `M ${start.x} ${start.y} L ${first.x} ${first.y}`;

    for (let n of next) {
      o += ` L ${n.x} ${n.y}`;
    }

    return o;
  }
  function isPort(x: Port | PipelineStep): x is Port {
    return !("proc" in x);
  }

  let current = writable("");
  $: getData(value);
</script>

<main>
  <section id="graph">
    <div class="wrap" style="width: {w}px; height: {h}px;">
      <svg
        width={w + "px"}
        height={h + "px"}
        style="width: {w}px; height: {h}px"
      >
        <defs>
          <marker
            id="head"
            viewBox="0 0 10 10"
            refX="0"
            refY="5"
            markerUnits="strokeWidth"
            markerWidth="4"
            markerHeight="3"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>

        {#each data.edges as { points }}
          <path
            d={getArrowLine(points)}
            marker-mid="url(#head)"
            stroke-width="4"
            stroke="black"
          />
        {/each}
      </svg>
      {#each data.nodes as step}
        <div
          class="testing"
          style="width: {step.width}px; height: {step.height}px; top: {step.y -
            step.height * 0.5}px; left: {step.x - step.width * 0.5}px;"
        >
          {#if isPort(step)}
            <div class={"port " + step.ty}>{step.ty}</div>
          {:else}
            <Step {step} />
          {/if}
        </div>
      {/each}
    </div>
  </section>
  <section id="components">
    {#each procs as proc}
      <Processor {proc} />
    {/each}
  </section>
  <section id="input">
    <textarea
      class="area"
      placeholder="Drop in your pipeline config"
      bind:value={$current}
    />
  </section>
  <section id="list">
    <SourceList bind:items={sources} on:select2={(x) => (current = x.detail)} />
  </section>
</main>

<style>
  main {
    font-family: sans-serif;
    min-height: calc(100vh - 64px);
    max-height: calc(100vh - 64px);
    display: grid;
    grid-template-columns: minmax(0, 1fr) 600px;
    grid-template-rows: minmax(0, 1fr) 300px;
    grid-template-areas:
      "graph comps"
      "text sources";
    gap: 16px;
    overflow: hidden;
  }

  .testing {
    border: 2px solid black;
    display: inline;
    position: absolute;
  }

  main section {
    place-self: stretch stretch;
    width: 100%;
    height: 100%;
  }

  #input {
    grid-area: text;
  }
  #list {
    grid-area: sources;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  #components {
    grid-area: comps;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: auto;
  }

  #graph {
    overflow: auto;
  }

  .wrap {
    position: relative;
    margin: auto;
  }

  #graph div svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  textarea {
    width: 100%;
    height: 100%;
  }
</style>
