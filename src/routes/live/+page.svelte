<script lang="ts">
  import { load } from "$lib/acHelpers";
  import SourceList from "$lib/components/SourceList.svelte";
  import type { Proc } from "$lib/pipeline/processor";
  import Processor from "$lib/components/Processor.svelte";
  import { generateGraph } from "$lib/graph";
  import { State } from "$lib/helpers/sourceState";
  import { keyAction } from "$lib/utilBrowser";
  import PipelineGraph, { type DataType } from "$lib/components/PipelineGraph.svelte";

  export const updateQuads = debounce(_updateQuads, 200);
  const  state = new State();
  state.add("https://github.com/ajuvercr/mumo-pipeline/tree/main")
  const current = state.current;

  let procs: Proc[] = [];
  current.subscribe(updateQuads);

  let data: DataType = {
    nodes: [],
    edges: [],
    width: 0,
    height: 0,
  };

  function debounce(fn: () => any, ms = 300): () => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fn, ms);
    };
  }

  async function _updateQuads() {
    const loaded = new Set<string>();
    console.log("updating quads");
    const files = state.files();
    const quads = [];

    for(let x of files) {
      if(!x.enabled) continue;

      const new_quads = await load(
        x.url, loaded, state.store, x => state.add_external(x)
      );

      quads.push(...new_quads);
    }

    const [dgraph, p] = generateGraph(quads);
    procs = p;
    data = dgraph.calculate();
  }

  let right: number = 750;
  let up1: number = 400;
  let up2: number = 400;

  let moving = {hor: false, up1: false, up2: false};

  let loc = {x: 0, y: 0};
  let maxWidth = 0;
  let maxHeight = 0;

  $:console.log("width, height", maxWidth, maxHeight)

  function move(e: MouseEvent) {
    if(moving.hor) {
      right += loc.x - e.x;
    }
    if(moving.up1) {
      up1 += loc.y - e.y;
    }
    if(moving.up2) {
      up2 += loc.y - e.y;
    }
    loc = {x: e.x, y: e.y};
  }
</script>

<main on:mousemove={move} on:mouseup={() => moving = {up1: false, up2: false, hor: false}} bind:clientWidth={maxWidth} bind:clientHeight={maxHeight} >
  <div class="hor">
    <div class="vert interactions" style="width: {maxWidth - right - 8}px">

      <section id="graph" style="height: {maxHeight - up1 - 8}px">
        <PipelineGraph {data} />
      </section>
      <div class="hordiv div" 
         on:mousedown={() => moving.up1 = true}>
      </div>
      <section id="input" style="height: {up1}px;">
        <textarea
          class="area"
          placeholder="Drop in your pipeline config"
          bind:value={$current}
        />
      </section>
    </div>

      <div class="vertdiv div" 
         on:mousedown={() => moving.hor = true}>
      </div>

    <div class="vert lists" style="width: {right}px;">
      <section id="components" style="height: {maxHeight - up2 - 8}px">
        <div>
          {#each procs as proc}
            <Processor {proc} />
          {/each}
        </div>
      </section>

      <div class="hordiv div" 
         on:mousedown={() => moving.up2 = true}>
      </div>

      <section id="list" style="height: {up2}px;">
        <SourceList on:update={() => updateQuads()} {state} />
      </section>
    </div>
  </div>
</main>

<style>
  main {
    font-family: sans-serif;
    min-height: calc(100vh - 64px);
    max-height: calc(100vh - 64px);
    overflow: hidden;
  }


  .div {
    background-color: #333;
    cursor: pointer;
  }

  .vertdiv {
    min-height: calc(100vh - 64px);
    height: 100%;
    width: 8px;
  }

  .hordiv {
    height: 8px;
    width: 100%;
  }

  .vert, .hor {
    min-height: calc(100vh - 64px);
    display: flex;
  }

  .vert {
    flex-direction: column;
    height: 100%;
  }

  .hor {
    width: 100%;
    height: 100%;
    flex-direction: row;
  }

  #graph, #list, #components {
    overflow: auto;
  }

  textarea {
    width: calc(100% - 5px);
    height: 100%;
  }
</style>
