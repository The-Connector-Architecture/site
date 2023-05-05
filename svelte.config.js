import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'; // 👈 import mdsvex 
import preprocess from 'svelte-preprocess'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
// import rehypeToc from '@jsdevtools/rehype-toc'

import remarkTocMatter from 'remark-toc-matter';
import remarkToc from 'remark-toc';
import containers from "remark-containers";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex({
    extensions: ['.md'],
    remarkPlugins: [
      containers,remarkTocMatter
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
  })],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // pages: 'build',
      // assets: 'build',
      base: process.env.NODE_ENV === "production" ? "/site" : "",
      fallback: null
    }),
    prerender: {
      entries: [
        '*',
      ]
    }
  }
};

export default config;
