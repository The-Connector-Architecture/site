import { error } from '@sveltejs/kit'

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	try {	
		const post = await import(`../../../lib/posts/docs/${params.post}.md`)

    const out = 
		 {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post } 
		};

    return out;
	} catch(err: any) {
    console.log("errored")
		throw error(404, err)
	}
}
