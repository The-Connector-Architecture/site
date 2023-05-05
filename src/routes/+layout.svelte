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

  import "$lib/prism.js";
  import mermaid from "mermaid";
  import { page } from "$app/stores";
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
  <link rel="stylesheet" href="/prism/prism.css" data-noprefix />
  <link
    rel="stylesheet"
    href="/smui.css"
    media="(prefers-color-scheme: light)"
  />
  <link
    rel="stylesheet"
    href="/smui-dark.css"
    media="screen and (prefers-color-scheme: dark)"
  />
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="fixed">
  <Row>
    <Section>
      <Title on:click={() => goto("/")} style="cursor: pointer;"
        >Connector Architecture</Title
      >
    </Section>
    <Section align="start" toolbar>
      <Button on:click={() => goto("/docs/1_Home")}><Label>Docs</Label></Button>
      <Button on:click={() => goto("/about")}><Label>About</Label></Button>
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
    max-width: 1400px;
    width: calc(100% - 1000px);
    min-width: 800px;
    margin: auto;
  }
</style>
