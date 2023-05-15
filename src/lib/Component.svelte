<script lang="ts">
  import type { Processor, Kind, Channel, Runner } from "./acHelpers";
  import Tooltip from "./helpers/Tooltip.svelte";
  import Param from "./Param.svelte";
  import TocList from "./TocList.svelte";

  export let data:
    | { inner: Processor; type: "Processor" }
    | { inner: Channel; type: "Channel" }
    | { inner: Runner; type: "Runner" };

  const { title, id, description, parameters, location } = data.inner;

  const inputs = parameters.filter((x) => x.type === "ReaderChannel");
  const outputs = parameters.filter((x) => x.type === "WriterChannel");
  const rows = [...Array(Math.max(inputs.length, outputs.length))].map(
    (_, id) => {
      return { input: inputs[id], output: outputs[id] };
    }
  );

  const fields = parameters.filter(
    (x) => x.type !== "ReaderChannel" && x.type !== "WriterChannel"
  );
</script>

<div class="mdc-elevation--z2 proc">
  <h5><Tooltip tooltip={id}>{title}</Tooltip></h5>
  <div style="flex: 1 0 auto;">
    <p>
      {#if description}
        {description}
      {/if}
    </p>
    {#if data.type === "Processor"}
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
    {/if}
    {#if fields.length > 0}
      <strong>Fields</strong>
      <ul>
        {#each fields as data}
          <li>
            <Param {data} />
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  {#if data.type === "Runner"}
    <strong>Usable chanels</strong>
    <ul>
      {#each data.inner.channels as channel}
        <li>
          <Tooltip tooltip={channel.id}>{channel.title}</Tooltip>
        </li>
      {/each}
    </ul>
  {/if}

  {#if data.type === "Processor"}
    <p>
      Runnable with {data.inner.type}.
    </p>
  {/if}

  {#if data.type === "Channel"}
    <Tooltip tooltip={data.inner.reader.id}><strong>Reader description</strong></Tooltip>
    <ul>
      {#each data.inner.reader.parameters as reader}
        <li>
          <Param data={reader} />
        </li>
      {/each}
    </ul>

    <Tooltip tooltip={data.inner.writer.id}><strong>Writer description</strong></Tooltip>
    <ul>
      {#each data.inner.writer.parameters as writer}
        <li>
          <Param data={writer} />
        </li>
      {/each}
    </ul>
  {/if}

  <a target="_blank" href={location}> Location </a>
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
