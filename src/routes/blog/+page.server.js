import { postsPerPage } from "$lib/config";

export const load = async ({ url, fetch }) => {
  const postRes = await fetch(`${url.origin}/api/posts.json`);
  const posts = await postRes.json();

  const totalRes = await fetch(`${url.origin}/api/posts/count`);
  const total = await totalRes.json();

  const pagesAvailable = Math.ceil(total / postsPerPage);

  const links = [
    {
      title: "Latest",
      href: "",
    },
  ];

  if (pagesAvailable > 1) {
    links.push({
      title: "Older",
      href: "page/2",
    });
  }

  return { links, posts, total };
};
