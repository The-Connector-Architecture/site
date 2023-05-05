import { loadPosts } from '$lib/util';
import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async () => {
  const posts = loadPosts();
  return {
    posts, // make posts available on the client
  };
};
// Get all posts and add metadata
