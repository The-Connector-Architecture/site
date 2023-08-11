<script lang="ts">
  import { keyAction } from "$lib/utilBrowser";
  import { writable } from "svelte/store";
  import type { Turtle } from "./Source.svelte";
  import Source from "./Source.svelte";
  import MdSend from "svelte-icons/md/MdSend.svelte";
  import { createEventDispatcher } from "svelte";

  export let items: { location: string; files: Turtle[]; key: number }[] = [
    {
      location: "https://github.com/ajuvercr/mumo-pipeline/tree/main",
      files: [],
      key: 0,
    },
  ];

  let number = 1;
  let search: string = "";

  let selected = writable({ id: 0, i: 0 });

  function add() {
    if (!location) return;
    items = [{ location: search, files: [], key: number }, ...items];
    number += 1;
    search = "";
  }

  const dispatch = createEventDispatcher();

  function deleteItem(i: number) {
    items.splice(i, 1);
    items = items;
  }
</script>

<header>
  <input on:keydown={keyAction("enter", add)} type="text" bind:value={search} />
  <div on:keydown={keyAction("enter", add)} on:click={() => add()}>
    <MdSend />
  </div>
</header>
{#each items as { location, files, key }, i (key)}
  <Source
    on:select={(x) => dispatch("select2", x.detail)}
    on:loaded={() => console.log("loaded", i)}
    on:delete={() => deleteItem(i)}
    {location}
    {selected}
    {key}
    bind:files
  />
{/each}

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
