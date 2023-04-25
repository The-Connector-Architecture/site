<script lang="ts">
  import type { Parent, Link, Text } from "mdast";
  import type { Counter } from "$lib/util";
  import TocList from "./TocList.svelte";
  import "./toc.css";
  export let toc: Parent | Link | Text;
  export let base: string;
  export let counter: Counter;

  $: newCounter = {
    start: counter.start,
    root: toc.type === "list" ? false : counter.root,
  };
  $: ty = toc ? toc["type"] : "";
  $: style = counter.root ? `counter-reset: item ${counter.start} ;` : "";
  $: text = toc.type === "text" ? (toc as Text).value : "";
  $: url = toc.type === "link" ? (toc as Link).url : "";
  $: parentToc = <Parent>toc;
</script>

{#if ty === "text"}
  {text}
{:else if ty === "link"}
  <a href={base + url}> <TocList toc={parentToc} {base} {newCounter} /> </a>
{:else if ty === "listItem"}
  <li>
    <TocList toc={parentToc} {base} {newCounter} />
  </li>
{:else if ty === "list"}
  <ol {style}>
    <TocList toc={parentToc} {base} {newCounter} />
  </ol>
{:else}
  <TocList toc={parentToc} {base} {newCounter} />
{/if}
