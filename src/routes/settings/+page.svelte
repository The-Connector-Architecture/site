<script lang="ts">
  import { pat } from "$lib/state/settings";
  import { get } from "svelte/store";

  let _pat = get(pat);

  function save() {
    pat.set(_pat);
  }
</script>

<main>
  <div>
    <span>Github Personal Access Token: </span><input bind:value={_pat} />
  </div>

  <button on:click={save}>Save</button>
</main>

<style>
  main {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  main div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  input {
    flex-grow: 1;
  }
  button {
    margin-top: 16px;
  }

  main {
    max-width: 1400px;
    margin: auto;
  }
</style>
