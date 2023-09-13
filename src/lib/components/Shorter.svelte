<script lang="ts">
  export let text: string;
  export let length: number = 24;

  $: toLong = text.length > length;
  $: short = text.substring(0, length) + "....";

  let hover = false;
</script>

{#if toLong}
  <span
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
    class:hover
    class="tolong"
    style="max-width: {length};"
  >
    {#if hover}
      {text}
    {:else}
      {short}
    {/if}
  </span>
{:else}
  <span>{text}</span>
{/if}

<style>
  .tolong {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .hover {
    z-index: 4;
    padding: 3px;
    overflow: visible;
    background-color: #ddd;
  }
</style>
