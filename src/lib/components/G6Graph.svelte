<script lang="ts">
  import type G6T from "@antv/g6";
  import type { Graph } from "@antv/g6";
  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let options = {};
  export let data = {};
  export let events = {};
  export let className = "";
  export let style = "";
  export let init: (G6: typeof G6T) => Promise<void> | undefined;

  let wrapper: HTMLElement;
  let container: HTMLElement;
  let graph: Graph;
  let prevEvents = {};
  let prevData = {};
  let isDataEmpty: Boolean;

  const animateCfg = { duration: 200, easing: "easeCubic" };
  $: isDataEmpty = !!data;
  function onKeyDown(e: KeyboardEvent) {
    console.log(e.key, e.ctrlKey);
    if (e.key === "r" && e.ctrlKey) {
      if (graph && container) {
        console.log("fit center");
        graph.fitCenter(true, animateCfg);
      }
    }
  }

  function resizeGraph() {
    if (graph && container) {
      const bbox = window.getComputedStyle(wrapper);
      const width = Number(bbox.width.replace("px", ""));
      const height = Number(bbox.height.replace("px", ""));

      graph.changeSize(width, height);

      graph.fitView(20, undefined, true, animateCfg);
    }
  }

  onMount(async () => {
    const G6: typeof G6T = <typeof G6T>await import("@antv/g6");
    await init(G6);

    if (graph) {
      graph.destroy();
    }

    const bbox = window.getComputedStyle(wrapper);
    const width = Number(bbox.width.replace("px", ""));
    const height = Number(bbox.height.replace("px", ""));

    graph = new G6.Graph({
      ...options,
      container,
      width,
      height,
    });

    graph.on("afterrender", () => console.log("rendered"));

    setTimeout(resizeGraph, 200);

    if (!isDataEmpty) {
      graph.data(data);
      graph.render();
    }

    return () => {
      graph.destroy();
    };
  });

  $: {
    if (graph && prevData !== data) {
      graph.changeData(data);
      prevData = data;
    }
  }

  $: {
    if (graph) {
      Object.entries(prevEvents).forEach(([name, cb]) => {
        graph.off(name, cb);
      });
      Object.entries(events).forEach(([name, cb]) => {
        graph.on(name, cb);
      });
      prevEvents = events;
    }
  }
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<div
  bind:this={wrapper}
  class="g6-wrapper"
  class:className
  {style}
  on:resize={resizeGraph}
>
  <div bind:this={container} class="g6-container" />
</div>

<style>
  .g6-container,
  .g6-container {
    width: 100%;
    height: 100%;
    min-height: 500px;
  }
</style>
