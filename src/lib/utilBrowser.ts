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
export function keyAction(key: string, action: (e: KeyboardEvent) => any) {
  return (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === key) {
      action(e);
    }
  }
}
