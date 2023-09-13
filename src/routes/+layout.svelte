<script lang="ts">
  import { goto } from "$app/navigation";
  import TopAppBar, {
    AutoAdjust,
    Row,
    Section,
    Title,
  } from "@smui/top-app-bar";
  import Button, { Label } from "@smui/button";
  import "./root.css";
  import { onMount } from "svelte";
  let topAppBar: TopAppBar;

  import "$lib/static/prism/prism.css";
  import "$lib/static/prism/prism.js";
  import "$lib/static/smui.css";
  import mermaid from "mermaid";
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  import { toolTipContent } from "$lib/utilBrowser";

  let m = { x: 0, y: 0, w: 0, h: 0 };
  let localHover = false;

  // toolTipContent.subscribe(() => (localHover = true));

  // function mouseEnter() {
  //   console.log("localHover", localHover);
  //   localHover = true;
  // }
  //
  // function mouseOver() {
  //   if (!localHover) {
  //     console.log("localHover", localHover);
  //     localHover = true;
  //   }
  // }
  //
  // function mouseLeave() {
  //   console.log("localHover leave", localHover);
  //   localHover = false;
  // }

  function handleMousemove(event: MouseEvent) {
    m.x = event.pageX;
    m.y = event.pageY;
  }
  mermaid.initialize({ startOnLoad: false });

  let loaded = false;
  onMount(() => {
    loaded = true;
    mermaid.init(undefined, "code.language-undefined");
  });

  page.subscribe(() => {
    if (loaded) {
      mermaid.run({ querySelector: "code.language-undefined" });
    }
  });
</script>

<svelte:head>
  <title>Connector Architecture</title>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
</svelte:head>

<div class="flexy" on:mousemove={handleMousemove}>
  {#if $toolTipContent.hovered || localHover}
    <div
      class="tooltip"
      style="top: {$toolTipContent.y + $toolTipContent.height - 1}px;
      left: {Math.max($toolTipContent.x, 0)}px;"
    >
      <div>
        {@html $toolTipContent.content}
      </div>
    </div>
  {/if}
  <TopAppBar bind:this={topAppBar} variant="fixed">
    <Row>
      <Section>
        <Title on:click={() => goto(base + "/")} style="cursor: pointer;"
          >Connector Architecture</Title
        >
      </Section>
      <Section align="start" toolbar>
        <Button on:click={() => goto(base + "/docs/1_Home")}
          ><Label>Docs</Label></Button
        >
        <Button on:click={() => goto(base + "/getting-started")}
          ><Label>Getting Started</Label></Button
        >
        <Button on:click={() => goto(base + "/components")}
          ><Label>Components</Label></Button
        >
        <Button on:click={() => goto(base + "/live")}
          ><Label>Live</Label></Button
        >
        <Button on:click={() => goto(base + "/settings")}
          ><Label>Settings</Label></Button
        >
      </Section>
    </Row>
  </TopAppBar>

  <AutoAdjust {topAppBar}>
    <div class="main">
      <slot />
    </div>
  </AutoAdjust>
</div>

<style>
  .flexy {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .tooltip {
    pointer-events: none;
    position: absolute;
    display: inline-block;
    z-index: 10;
    padding: 8px;
    position: absolute;
    transform: translateY(-10px);
  }

  .tooltip div {
    padding: 4px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 1px #ddd;
    background: white;
    border-radius: 4px;
    overflow: visible !important;
    white-space: normal !important;
    max-width: 750px;
  }

  .main {
    position: relative;
    margin: auto;
  }
</style>
