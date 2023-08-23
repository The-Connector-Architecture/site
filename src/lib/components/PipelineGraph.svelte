<script context="module" lang="ts">
  export interface DataType  {
    nodes: DNode<PipelineStep | Port>[];
    edges: GraphEdge[];
    width: number;
    height: number;
  }
</script>

<script lang="ts">
  import type { Node as DNode, GraphEdge } from "dagre";
  import type { Port } from "$lib/graph";
  import type { PipelineStep } from "$lib/pipeline/pipeline";
  import Step from "$lib/components/Step.svelte";

  export let data: DataType;

  $:w = data.width;
  $:h = data.height;

  function isPort(x: Port | PipelineStep): x is Port {
    return !("proc" in x);
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

</script>

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

  <style>

  .testing {
    border: 2px solid black;
    display: inline;
    position: absolute;
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
</style>
