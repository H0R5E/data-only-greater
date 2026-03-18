import { postsPerPage } from "$lib/config";
import fetchPosts from "$lib/assets/js/fetchPosts";
import { underscoreToSpace } from "$lib/assets/ts/utils.js";

export const load = async ({ params }) => {
  const category = underscoreToSpace(params.category);
  const page = params.page || 1;
  const options = { category, limit: -1 };
  const { posts: allPosts } = await fetchPosts(options);
  const { posts } = await fetchPosts({ category, limit: postsPerPage });

  const total = allPosts.length;
  const pagesAvailable = Math.ceil(total / postsPerPage);

  const links = [
    {
      title: "All",
      href: "/blog",
    },
  ];

  if (pagesAvailable > 1) {
    links.push({
      title: "Older",
      href: `/blog/category/${category}/page/2`,
    });
  }

  return {
    posts,
    category,
    links,
    page,
    total: total,
  };
};
