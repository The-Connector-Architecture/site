
<script lang="ts">
  import MdCheckBoxOutlineBlank from "svelte-icons/md/MdCheckBoxOutlineBlank.svelte";
  import MdCheckBox from "svelte-icons/md/MdCheckBox.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import type { Writable } from "svelte/store";
    import type { Turtle } from "./Source.svelte";

  export let file: Turtle;
  console.log("file", file);
  export let selected: Writable<{ id: number; i: number }>;
  const key: number = 0;

  let ourSelect: number | undefined = undefined;
  selected.subscribe((x) => {
    console.log("x", x, "key", key)
    if (x.id === key) ourSelect = x.i;
    else ourSelect = undefined;
  });

  const dispatch = createEventDispatcher();

  onMount(() => dispatch("select", file.content))

  function selectThis(i: number) {
    selected.set({ id: key, i });
    dispatch("select", file.content);
  }

</script>

<section>
        <span
          class:selected={ourSelect === 0}
          on:click={() => selectThis(0)}
          on:keydown={() => selectThis(0)}>"Local Source"</span
        >
        <div on:click={() => (file.enabled = !file.enabled)}
          on:keydown={() => (file.enabled = !file.enabled)}
        >
          {#if file.enabled}
            <MdCheckBox />
          {:else}
            <MdCheckBoxOutlineBlank />
          {/if}
        </div>
</section>

<style>
  .selected {
    color: pink;
  }
  section {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  section div {
    color: #333;
    width: 32px;
    height: 32px;
  }

</style>
