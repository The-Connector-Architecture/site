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

  import "$lib/static/prism/prism.css"
  import "$lib/static/prism/prism.js"
  import "$lib/static/smui.css";
  import mermaid from "mermaid";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  mermaid.initialize({ startOnLoad: false });

  let loaded = false;
  onMount(() => {
    loaded = true;
    console.log("Onmount!");
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

<TopAppBar bind:this={topAppBar} variant="fixed">
  <Row>
    <Section>
      <Title on:click={() => goto(base + "/")} style="cursor: pointer;"
        >Connector Architecture</Title
      >
    </Section>
    <Section align="start" toolbar>
      <Button on:click={() => goto(base+"/docs/1_Home")}><Label>Docs</Label></Button>
      <Button on:click={() => goto(base+"/about")}><Label>About</Label></Button>
      <Button on:click={() => goto(base+"/getting-started")}><Label>Getting Started</Label></Button>
    </Section>
  </Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
  <div class="main">
    <slot />
  </div>
</AutoAdjust>

<style>
  .main {
    position: relative;
    /* max-width: 1400px; */
    /* width: calc(100% - 1000px); */
    /* min-width: 800px; */
    margin: auto;
  }
</style>
