import fetchPosts from "$lib/assets/js/fetchPosts.js";
import getPostIndex from "$lib/assets/js/getPostIndex.js";
import { json } from "@sveltejs/kit";

export const prerender = true;

export const GET = async ({ params, url }) => {
  const postIndex = await getPostIndex(params);
  const totalRes = await fetch(`${url.origin}/api/posts/count`);
  const total = await totalRes.json();

  let offset;
  let limit;
  let next = null;
  let previous = null;

  if (postIndex === 0) {
    offset = 1;
    limit = 1;
  } else if (postIndex + 1 === total) {
    offset = postIndex - 1;
    limit = 1;
  } else {
    offset = postIndex - 1;
    limit = 3;
  }

  const options = {
    offset,
    limit,
  };

  const { posts } = await fetchPosts(options);

  if (postIndex === 0) {
    next = posts[0].slug;
  } else if (postIndex + 1 === total) {
    previous = posts[0].slug;
  } else {
    previous = posts[0].slug;
    next = posts[2].slug;
  }

  const nav = {
    previous,
    next,
  };

  return json(nav);
};
