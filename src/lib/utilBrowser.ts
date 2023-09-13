import type { Quad } from "@rdfjs/types";
import { Parser } from "n3";
import { writable } from "svelte/store";

export type RecordOf<TKey extends any[], TValue> = Record<TKey[number], TValue>;
export type ToolTipContent = { content: string; hovered: boolean };
export const toolTipContent = writable({
  content: "",
  hovered: false,
  x: 0,
  y: 0,
  height: 0,
  width: 0,
});
export function keyAction(
  key: string,
  action: (e: KeyboardEvent) => any,
  opts?: { shift: boolean },
) {
  return (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === key && (!opts || (opts.shift && e.shiftKey))) {
      action(e);
    }
  };
}

export async function safeFetch<D = string>(
  url: string,
  init?: RequestInit,
  def?: D,
): Promise<string | D> {
  const r = await fetch(url, init);
  if (r.status < 300 && r.status >= 200) {
    const text = await r.text();
    return text;
  }
  return def || <D> "";
}

export function safeParse(turtle: string, baseIRI?: string): Quad[] {
  try {
    const quads = new Parser({ baseIRI }).parse(turtle);
    return quads;
  } catch (ex: any) {
    return [];
  }
}
