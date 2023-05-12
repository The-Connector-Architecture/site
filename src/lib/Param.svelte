<script lang="ts">
  import type { Parameter } from "./acHelpers";
  import Tooltip from "./helpers/Tooltip.svelte";
  export let data: Parameter;
  export let before = true;

  $: icon =
    data.type === "ReaderChannel"
      ? "login"
      : data.type === "WriterChannel"
      ? "logout"
      : data.optional
      ? "radio_button_unchecked"
      : "check_circle_outline";
</script>

<div class="wrapper" class:end="{!before}">
  {#if before}
    <span class="material-icons"> {icon} </span>
  {/if}
  <Tooltip tooltip={data.path}>
    <em>{data.name}</em>
  </Tooltip>
  {#if !before}
    <span class="material-icons"> {icon} </span>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: start;
  }
  .wrapper.end {
    justify-content: end;
  }
</style>
