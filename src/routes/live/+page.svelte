<script lang="ts">
  import G6Graph from "$lib/components/G6Graph.svelte";
  import { load_text } from "$lib/acHelpers";
  // import { Store } from "n3";

  let value = ``;

  // async function getData(value: string) {
  //   if (value) {
  //     const store = new Store();
  //     await load_text(value, store);
  //   }
  // }
  //
  // $: getData(value);

  const registerFn = async (G6: any) => {
    G6.registerNode(
      "flow-rect",
      {
        shapeType: "flow-rect",
        draw(cfg: { label: string; size: [number, number] }, group: any) {
          console.log(cfg, group);
          const { label } = cfg;

          const grey = "#CED4D9";
          const rectConfig = {
            width: cfg.size[0],
            height: cfg.size[1],
            lineWidth: 1,
            fontSize: 12,
            fill: "#fff",
            radius: 4,
            stroke: grey,
            opacity: 1,
          };

          const nodeOrigin = {
            // x: -rectConfig.width / 2,
            // y: -rectConfig.height / 2,
            x: 0,
            y: 0,
          };

          const textConfig = {
            textAlign: "left",
            textBaseline: "bottom",
          };

          const rect = group.addShape("rect", {
            attrs: {
              x: nodeOrigin.x,
              y: nodeOrigin.y,
              ...rectConfig,
            },
          });

          const name = label;

          console.log(nodeOrigin);
          // label title
          group.addShape("text", {
            attrs: {
              ...textConfig,
              x: 4 + nodeOrigin.x,
              y: 16 + nodeOrigin.y,
              text: name.length,
              fontSize: 12,
              opacity: 0.85,
              fill: "#000",
              cursor: "pointer",
            },
            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
            name: "name-shape",
          });

          return rect;
        },
      },
      "rect"
    );
  };
  const options = {
    container: "mountNode",
    fitView: true,
    // fitCenter: true,
    workerEnabled: false,
    // padding: [50, 50],
    // defaultLevel: 3,
    // defaultZoom: 0.8,
    modes: { default: ["zoom-canvas", "drag-canvas"] },
    defaultNode: {
      size: [30, 20],
      type: "rect",
      style: {
        lineWidth: 2,
        stroke: "#5B8FF9",
        fill: "#C6E5FF",
      },
    },
    layout: {
      type: "dagre",
      rankdir: "LR",
      align: "UL",
      controlPoints: true,
      nodesepFunc: () => 1,
      ranksepFunc: () => 1,
    },
    defaultEdge: {
      type: "polyline",
      size: 1,
      color: "#e2e2e2",
      style: {
        endArrow: {
          path: "M 0,0 L 8,4 L 8,-4 Z",
          fill: "#e2e2e2",
        },
        radius: 620,
      },
    },
  };
  const data = {
    nodes: [
      {
        id: "0",
        label: "Test",
      },
      {
        id: "1",
        label: "1",
      },
      {
        id: "2",
        label: "2",
      },
      {
        id: "3",
        label: "3",
      },
      {
        id: "4",
        label: "4",
      },
      {
        id: "5",
        label: "5",
      },
      {
        id: "6",
        label: "6",
      },
      {
        id: "7",
        label: "7",
      },
      {
        id: "8",
        label: "8",
      },
      {
        id: "9",
        label: "9",
      },
    ],
    edges: [
      {
        source: "0",
        target: "1",
      },
      {
        source: "0",
        target: "2",
      },
      {
        source: "1",
        target: "4",
      },
      {
        source: "0",
        target: "3",
      },
      {
        source: "3",
        target: "4",
      },
      {
        source: "4",
        target: "5",
      },
      {
        source: "4",
        target: "6",
      },
      {
        source: "5",
        target: "7",
      },
      {
        source: "5",
        target: "8",
      },
      {
        source: "8",
        target: "9",
      },
      {
        source: "2",
        target: "9",
      },
      {
        source: "3",
        target: "9",
      },
    ],
  };
</script>

<main>
  <h1>Hello Svelte-g6</h1>
  <G6Graph style="border: black 1px solid" {options} {data} init={registerFn} />

  <textarea class="area" placeholder="Drop in your pipeline config" {value} />
</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }

  textarea {
    width: 80%;
    min-height: 200px;
  }
</style>
