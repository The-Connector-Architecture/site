<script lang="ts">
  import { keyAction } from "$lib/utilBrowser";
  import Source from "./Source.svelte";
  import MdSend from "svelte-icons/md/MdSend.svelte";
    import type { State } from "$lib/helpers/sourceState";
    import SourceItem from "./SourceItem.svelte";

  export let state: State;

  let search: string = "";
  const cs = state.children;
  const externals = state.external;

  function add() {
    if (!search) return;
    state.add(search);
  }
</script>

<header>
  <input on:keydown={keyAction("enter", add)} type="text" bind:value={search} />
  <div on:keydown={keyAction("enter", add)} on:click={() => add()}>
    <MdSend />
  </div>
</header>

<SourceItem child={state.local} parent={state} />

{#each $cs as child}
<Source on:update {child} />
{/each}

  <Source on:update child={externals} />


<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  header input {
    flex-grow: 1;
  }

  header div {
    color: #333;
    width: 32px;
    height: 32px;
  }
</style>
