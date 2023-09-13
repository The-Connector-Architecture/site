<script lang="ts">
  import type { PipelineStep } from "$lib/pipeline/pipeline";
  import Shorter from "./Shorter.svelte";
  import Tooltip from "./Tooltip.svelte";

  export let step: PipelineStep;

  $: fs = step.fields.map(({ prop, value }) => ({
    name: step.proc.fields.find((x) => x.prop === prop)?.name,
    prop,
    value,
  }));
</script>

<section>
  <header>
    {step.id}: <Shorter text={step.proc.title} length={50} />
  </header>

  <div class="fields">
    {#each fs as field}
      <div class="name">
        {#if field.name}
          <Tooltip content={field.prop}>
            <Shorter length={30} text={field.name} />
          </Tooltip>
        {:else}
          <div style="position: relative">
            <Shorter length={30} text={field.prop} />
          </div>
        {/if}
      </div>
      <div class="value">
        <Shorter length={40} text={field.value} />
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    padding: 8px;
  }
  header {
  font-weight: bold;
    font-size: 20px;
    margin-bottom: 12px;
  }
  .fields {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    align-items: center;
    gap: 4px;
  }
  .value {
    text-align: right;
    justify-self: end;
  }
</style>
