<script lang="ts">
  export let tooltip: string;
</script>

<div class="wrapper">
  <slot />
  <div class="tooltip">
    <slot name="tooltip">
      {tooltip}
    </slot>
  </div>
</div>

<style>
  .wrapper {
    pointer-events: all;
    display: inline;
    position: relative;
  }
  .tooltip {
    display: block;
    opacity: 0;
    pointer-events: all;
    position: absolute;
    padding: 4px;
    margin-top: 2px;
    border: black 1px solid;
    background-color: white;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    width: max-content;
    z-index: 1;
    transition: opacity 0.2s;
    pointer-events: none;
  }

  .wrapper:hover .tooltip,
  .tooltip:hover {
    pointer-events: auto;
    opacity: 1;
  }
</style>
