<script lang="ts">
    import type { Child, Children, Selectable, State } from "$lib/helpers/sourceState";
    import { keyAction } from "$lib/utilBrowser";
    import { createEventDispatcher } from "svelte";
    import MdCheckBox from "svelte-icons/md/MdCheckBox.svelte";
    import MdCheckBoxOutlineBlank from "svelte-icons/md/MdCheckBoxOutlineBlank.svelte";

  export let child: Child;
  export let parent: Selectable;

  const dispatch = createEventDispatcher();

  const s = parent.selected();

    const toggle = () => {
      child.enabled = !child.enabled;
      dispatch("update");
    }
</script>

<div>
  <span
    class:selected={child.key === $s}
    on:click={() => parent.select(child)}
    on:keydown={() => keyAction("enter", () => parent.select(child))}>{child.path}</span
  >
  <div on:click={toggle}
    on:keydown={keyAction("enter", toggle)}
  >
    {#if child.enabled}
      <MdCheckBox />
    {:else}
      <MdCheckBoxOutlineBlank />
    {/if}
  </div>
</div>

<style>
  span {
    color: #555;
  }
  .selected {
    border-bottom: 2px solid pink;
  }
  div {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
  }
  div div {
    color: #333;
    width: 32px;
    height: 32px;
  }
</style>
