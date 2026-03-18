import fetchPosts from "$lib/assets/js/fetchPosts";
import { underscoreToSpace } from "$lib/assets/ts/utils.js";

export const load = async ({ params }) => {
  const category = underscoreToSpace(params.category);
  const page = params.page || 1;
  const options = { category, limit: -1 };
  const { posts } = await fetchPosts(options);

  return {
    posts,
    category,
    page,
    total: posts.length,
  };
};
