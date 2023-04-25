import type { Result } from "mdast-util-toc";
import { parse } from "path";
type GlobEntry = {
  metadata: Post;
  default: unknown;
};

export type Counter = {
  start: number,
  root: boolean,
}

export interface Post {
  toc: Result,
  slug: string
}

export function loadPosts(): Post[] {
  const posts = Object.entries(
    import.meta.glob<GlobEntry>("/src/lib/posts/docs/*.md", { eager: true })
  )
    .map(([filepath, globEntry]) => {
      return {
        ...globEntry.metadata,
        slug: parse(filepath).name,
      };
    });
  posts.sort((a, b) => a.slug < b.slug ? -1 : 1);
  return posts;
}

