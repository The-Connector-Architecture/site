import type { Channel, PipelineStep } from "./pipeline";
import type { Proc } from "./processor";

const fittingString = (G6: any, str: string, maxWidth: number, fontSize: number) => {
  const ellipsis = "...";
  const ellipsisLength = G6.Util.getTextSize(ellipsis, fontSize)[0];
  let currentWidth = 0;
  let res = str;
  const pattern = new RegExp("[\u4E00-\u9FA5]+"); // distinguish the Chinese charactors and letters
  str.split("").forEach((letter, i) => {
    if (currentWidth > maxWidth - ellipsisLength) return;
    if (pattern.test(letter)) {
      // Chinese charactors
      currentWidth += fontSize;
    } else {
      // get the width of single letter according to the fontSize
      currentWidth += G6.Util.getLetterWidth(letter, fontSize);
    }
    if (currentWidth > maxWidth - ellipsisLength) {
      res = `${str.substr(0, i)}${ellipsis}`;
    }
  });
  return res;
};

type Field = {
  name: string,
  prop: string,
  value: string
};

export type NodeTy = "channel" | "proc";
export type Node = {
  id: string,
  ty: "proc",
  type: "proc-rect",
  width: number,
  height: number,
  fields: Field[],
  name: string,
  title?: string
};

export type ChannelNode = {
  id: string,
  ty: "channel",
  type: "channel-rect",
  name: string,
  width: number,
  height: number,
};

function findName(proc: Proc, prop: string): string {
  const f = proc.fields.find(x => x.prop === prop);
  if (f) {
    return f.name;
  }
  return prop;
}

const WIDTH = 600;
const BASE = 40;
const FIELD_HEIGHT = 20;

const C_WIDTH = 600;
const C_HEIGHT = 32;

const fillColor = "#f6e9d7";
const channelFillColor = "#00D2FF";
const fontColor = "#ff7900";
const channelFontColor = "#007B96";
const padding = 7;

export function toProcNode(step: PipelineStep): Node {
  const fields = step.fields.map(({ value, prop }) => ({
    value, prop, name: findName(step.proc, prop)
  }));

  const width = WIDTH;
  const height = BASE + step.fields.length * FIELD_HEIGHT;

  return { type: "proc-rect", ty: "proc", fields, id: step.id, name: step.proc.id, title: step.proc.title, width, height };
}
export function toChannelNode(ch: Channel): ChannelNode {
  return {
    id: ch.value,
    ty: "channel",
    type: "channel-rect",
    name: ch.type,
    width: C_WIDTH,
    height: C_HEIGHT,
  }
}

export const registerFn = async (G6: any) => {
  G6.registerNode(
    "proc-rect",
    {
      shapeType: "proc-rect",
      draw(cfg: Node, group: any) {
        console.log("cfg", cfg);

        const nodeWidth = cfg.size[0];
        const nodeHeight = cfg.size[1];

        const rect = group.addShape("rect", {
          attrs: {
            x: 0,
            y: 0,
            height: nodeHeight,
            width: nodeWidth,
            fill: fillColor,
            stroke: fontColor,
            lineWidth: 2,
            radius: 5
          }
        });

        const topGroup = group.addGroup({
          name: "top-group"
        });

        topGroup.addShape("rect", {
          attrs: {
            fill: "#fff",
            stroke: "#c7d0d1",
            x: padding,
            y: padding,
            width: nodeWidth - padding * 2,
            height: BASE - padding * 2,
            lineWidth: 1.5,
            radius: 4
          }
        });

        topGroup.addShape("text", {
          attrs: {
            text: fittingString(G6, `${cfg.id}: ${cfg.title || cfg.name}`, nodeWidth - padding * 2 - 10, 14),
            x: 0.5 * nodeWidth,
            y: (BASE + padding) * 0.5,
            fontSize: 14,
            textAlign: "center",
            textBaseline: "center",
            shadowColor: fontColor,
            fill: fontColor
          },
          name: "top-text"
        });

        const bottomGroup = group.addGroup({
          name: "bottom-group"
        });

        let delta_y = 0;

        for (let field of cfg.fields) {
          bottomGroup.addShape("text", {
            attrs: {
              text: fittingString(G6, `${field.name}: ${field.prop}`, nodeWidth - 10, 14),
              x: padding,
              y: delta_y + BASE + padding * 0.5,
              fontSize: 14,
              textAlign: "left",
              textBaseline: "top",
              shadowColor: fontColor,
              fill: fontColor
            },
            name: "bottom-text"
          });

          delta_y += FIELD_HEIGHT;
        }

        return rect;
      },
    },
    "rect"
  );


  G6.registerNode(
    "channel-rect",
    {
      shapeType: "channel-rect",
      draw(cfg: ChannelNode, group: any) {
        console.log("cfg", cfg);

        const nodeWidth = C_WIDTH;
        const nodeHeight = C_HEIGHT;

        const rect = group.addShape("rect", {
          attrs: {
            x: 0,
            y: 0,
            height: nodeHeight,
            width: nodeWidth,
            fill: channelFillColor,
            stroke: channelFontColor,
            lineWidth: 2,
            radius: 5
          }
        });

        group.addShape("text", {
          attrs: {
            text: fittingString(G6, `${cfg.name}: ${cfg.ty}`, nodeWidth - padding * 2 - 10, 14),
            x: 0.5 * nodeWidth,
            y: 0.5 * nodeHeight,
            fontSize: 14,
            textAlign: "center",
            textBaseline: "middle",
            shadowColor: channelFontColor,
            fill: channelFontColor
          },
          name: "top-text"
        });

        return rect;
      },
    },
    "rect"
  );
};

