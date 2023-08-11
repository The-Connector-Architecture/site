<script lang="ts">
  import type { Proc } from "$lib/pipeline/processor";

  export let proc: Proc;
</script>

<section>
  <header>
    {proc.title}
  </header>
  <hr />

  <ul>
    {#each proc.fields as field}
      <li>
        <span>{field.name}</span>
        <span>{field.prop}</span>
      </li>
    {/each}
  </ul>
</section>

<style>
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
