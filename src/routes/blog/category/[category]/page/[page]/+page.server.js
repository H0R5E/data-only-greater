import { postsPerPage } from "$lib/config";
import fetchPosts from "$lib/assets/js/fetchPosts";
import { redirect } from "@sveltejs/kit";
import { underscoreToSpace } from "$lib/assets/ts/utils.js";

export const load = async ({ url, params, fetch }) => {
  const category = params.category;
  const page = parseInt(params.page) || 1;

  // Keeps from duplicating the blog index route as page 1
  if (page <= 1) {
    redirect(301, `/blog/category/${category}/`);
  }

  let offset = page * postsPerPage - postsPerPage;

  const totalPostsRes = await fetchPosts({
    category: underscoreToSpace(category),
    limit: -1,
  });
  const total = totalPostsRes.posts.length;
  const { posts } = await fetchPosts({ offset, page, category });

  const pagesAvailable = Math.ceil(total / postsPerPage);

  const links = [
    {
      title: "Newer",
      href: `/blog/category/${category}/page/${page - 1}`,
    },
    {
      title: "Latest",
      href: `/blog/category/${category}`,
    },
  ];

  if (pagesAvailable > page) {
    links.push({
      title: "Older",
      href: `/blog/category/${category}/page/${page + 1}`,
    });
  }

  return {
    category,
    links,
    posts,
    page,
    totalPosts: total,
  };
};
