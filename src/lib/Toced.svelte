<script lang="ts">
  import Toc from "$lib/Toc.svelte";
  import type { Post } from "./util";

  import Button, { Label } from "@smui/button";
  import IconButton from "@smui/icon-button";
  import Drawer, { Content, Header, Title as DTitle } from "@smui/drawer";

  let openState: boolean | undefined;
  let width = 0;
  export let posts: Post[];

  $: list = posts
    .filter((x) => !!x.toc && !!x.toc.map)
    .map((x, i) => {
      return {
        toc: x.toc!.map!,
        slug: x.slug,
        counter: { root: true, start: i },
      };
    });

  $: small = width < 1200;
  $: open = openState !== undefined ? openState : !small;
  $: margin = open && small ? 500 : 0;
</script>

<svelte:window bind:innerWidth={width} />

<div>
  <Drawer
    variant="dismissible"
    bind:open
    style="width: 500px; position: fixed; max-height: calc(100vh - 64px); overflow-y: auto;"
  >
    <Header style="position: relative;">
      <DTitle>Table of Centents</DTitle>
      <div
        class="margins"
        style="transform: translateY(-50%); position: absolute; top: 50%; right: 8px; border-radius: 50%;"
      >
        <IconButton
          class="material-icons"
          on:click={() => (openState = !open)}
          touch>close</IconButton
        >
      </div>
    </Header>
    <Content>
      {#each list as post}
        <Toc
          toc={post.toc}
          counter={post.counter}
          base={"/docs/" + post.slug}
        />
      {/each}
    </Content>
  </Drawer>

  <Button on:click={() => (openState = !open)}
    ><Label>Toggle navigation bar</Label></Button
  >

  <div style="margin-left: {margin}px" class="margined">
    <slot />
  </div>
</div>

<style>
  .margined {
    transition: all 700ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
