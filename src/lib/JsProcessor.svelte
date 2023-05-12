<script lang="ts">
  import type { Processor } from "./acHelpers";
  import Param from "./Param.svelte";

  export let data: Processor;

  const inputs = data.parameters.filter((x) => x.type === "ReaderChannel");
  const outputs = data.parameters.filter((x) => x.type === "WriterChannel");
  const rows = [...Array(Math.max(inputs.length, outputs.length))].map(
    (_, id) => {
      console.log("id", id);
      return { input: inputs[id], output: outputs[id] };
    }
  );

  const fields = data.parameters.filter(
    (x) => x.type !== "ReaderChannel" && x.type !== "WriterChannel"
  );
</script>

<div class="mdc-elevation--z2 proc">
  <h5>{data.title}</h5>
  <div style="flex: 1 0 auto;">
    <p>
      {#if data.description}
        {data.description}
      {/if}
    </p>
    <div class="channels">
      <div class="row">
        <div><strong>Input</strong></div>
        <div><strong>Output</strong></div>
      </div>

      {#each rows as row}
        {#if row}
          <div class="row">
            <div>
              {#if row.input}
                <Param data={row.input} />
              {/if}
            </div>
            <div>
              {#if row.output}
                <Param data={row.output} before={false} />
              {/if}
            </div>
          </div>
        {/if}
      {/each}
    </div>
    <strong>Fields</strong>
    <ul>
      {#each fields as data}
        <li>
          <Param {data} />
        </li>
      {/each}
    </ul>
  </div>
  <a target="_blank" href={data.location}> Location </a>
</div>

<style>
  .proc {
    display: flex;
    flex-direction: column;
    width: 440px;
    padding: 1em 2em;
  }
  .channels {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
    padding-bottom: 20px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .row * {
    width: 45%;
  }

  ul {
    list-style-type: none;
  }
</style>
