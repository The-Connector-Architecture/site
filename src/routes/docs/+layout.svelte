<script lang="ts">
  import type { PageServerData } from "./$types";
  import Toced from "$lib/Toced.svelte";

  export let data: PageServerData;
</script>

<Toced posts={data.posts}>
  <slot />
</Toced>
