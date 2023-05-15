<script lang="ts">
  import type { PageServerData } from "./$types";
  import Component from "$lib/Component.svelte";

  export let data: PageServerData;

  const Processor: "Processor" = "Processor";
  const procs = data.procs.map((inner) => {
    return { inner, type: Processor };
  });
  const Channel: "Channel" = "Channel";
  const channels = data.channels.map((inner) => {
    return { inner, type: Channel };
  });

  const Runner: "Runner" = "Runner";
  const runners = data.runners.map((inner) => {
    return { inner, type: Runner };
  });
</script>

<div class="breaker">
  <h3>Channels</h3>
</div>
<div class="grid">
  {#each channels as data}
    <Component {data} />
  {/each}
</div>

<div class="breaker">
  <h3>Runners</h3>
</div>
<div class="grid">
  {#each runners as data}
    <Component {data} />
  {/each}
</div>

<div class="breaker">
  <h3>Processors</h3>
</div>
<div class="grid">
  {#each procs as data}
    <Component {data} />
  {/each}
</div>

<style>
  .breaker {
    display: flex;
    justify-content: center;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    margin: 32px;
  }
</style>
