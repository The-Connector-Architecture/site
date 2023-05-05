<script lang="ts">
  import type { PageServerData } from "./$types";
  import Toc from "$lib/Toc.svelte";

  export let data: PageServerData;
  $: list = data.posts
    .filter((x) => !!x.toc && !!x.toc.map)
    .map((x, i) => {
      return {
        toc: x.toc!.map!,
        slug: x.slug,
        counter: { root: true, start: i },
      };
    });
</script>

<h1>Docs docs docccccsss!!</h1>

{#each list as post}
  <Toc toc={post.toc} counter={post.counter} base={"/docs/" + post.slug} />
{/each}
