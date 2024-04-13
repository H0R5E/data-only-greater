import { postsPerPage } from "$lib/config";
import fetchPosts from "$lib/assets/js/fetchPosts";
import { redirect } from "@sveltejs/kit";

export const load = async ({ url, params, fetch }) => {
  const page = parseInt(params.page) || 1;

  // Keeps from duplicationg the blog index route as page 1
  if (page <= 1) {
    redirect(301, "/blog");
  }

  let offset = page * postsPerPage - postsPerPage;

  const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
  const total = await totalPostsRes.json();
  const { posts } = await fetchPosts({ offset, page });

  const pagesAvailable = Math.ceil(total / postsPerPage);

  const links = [
    {
      title: "Newer",
      href: `/blog/page/${page - 1}`,
    },
    {
      title: "Latest",
      href: "/blog",
    },
  ];

  if (pagesAvailable > page) {
    links.push({
      title: "Older",
      href: `/blog/page/${page + 1}`,
    });
  }

  return {
    links,
    posts,
    page,
    totalPosts: total,
  };
};
