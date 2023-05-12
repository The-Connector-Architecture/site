<script lang="ts">
  import type { PageServerData } from "./$types";
  import JsProcessor from "$lib/JsProcessor.svelte";

  export let data: PageServerData;
</script>

<div class="grid">
  <!-- <LayoutGrid innerGrid$style="  grid-auto-rows: 1fr;"> -->
  {#each data.procs as item}
    <JsProcessor data={item} />
  {/each}
</div>

<style>
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    margin: 32px;
  }
</style>
