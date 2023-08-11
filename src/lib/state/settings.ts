import { writable, derived, type Writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

export const pat: Writable<string> = writable(isBrowser && localStorage.getItem("PAT") || "");
export const authHeaders = derived(pat, (value: string) => {
  if (value) {
    return {
      Authorization: `Bearer ${value}`
    };
  } else {
    return <HeadersInit>{}
  }
})

pat.subscribe(pat => {
  isBrowser && localStorage.setItem("PAT", pat);
});

authHeaders.subscribe(x => console.log("headers", x));
