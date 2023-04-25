<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
  import type { PageServerData } from "./$types";
  export let data: PageServerData;
</script>

<article class="post">
  <svelte:component this={data.PostContent} />
</article>
