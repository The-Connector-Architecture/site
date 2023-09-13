<script lang="ts">
  import MdDelete from "svelte-icons/md/MdDelete.svelte";

  import type { Children } from "$lib/helpers/sourceState";
  import { keyAction } from "$lib/utilBrowser";
  import SourceItem from "./SourceItem.svelte";
    import { createEventDispatcher } from "svelte";

  export let child: Children;

  const dispatch = createEventDispatcher();

  function doDelete() {
    child.delete();
  }

  const cs = child.children;
  child.children.subscribe(() => dispatch("update"));
</script>

<section>
  <header>
    <span>
      {child.location}
    </span>
    {#if child.deletable}
    <div on:keydown={keyAction("enter", doDelete)} on:click={doDelete}>
      <MdDelete />
    </div>
{/if}
  </header>

  <div>
    {#each $cs as c}
    {#if !c.hidden}
    <SourceItem on:update child={c} parent={child} />
    {/if}
    {/each}
  </div>
</section>

<style>
  header {
    margin-top: 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header div {
    color: #333;
    width: 32px;
    height: 32px;
  }
</style>
