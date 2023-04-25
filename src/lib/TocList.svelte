<script lang="ts">
  import type { Parent } from "mdast";
  import type { Counter } from "$lib/util";
  import Toc from "./Toc.svelte";
  export let toc: Parent;
  export let base: string;
  export let newCounter: Counter;

  $: children = <Parent[]>toc.children;
</script>

{#each children as toc}
  <Toc {toc} {base} counter={newCounter} />
{/each}
