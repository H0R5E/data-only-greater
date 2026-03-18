import fetchPosts from "$lib/assets/js/fetchPosts.js";

export const load = async ({ url, fetch }) => {
  const res = await fetch(`${url.origin}/api/posts.json`);
  const { posts } = await fetchPosts({ limit: -1 });

  let uniqueCategories = {};

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      if (uniqueCategories.hasOwnProperty(category)) {
        uniqueCategories[category].count += 1;
      } else {
        uniqueCategories[category] = {
          title: category,
          count: 1,
        };
      }
    });
  });

  const sortedUniqueCategories = Object.values(uniqueCategories).sort(
    (a, b) => b.count - a.count,
  );

  const links = [
    {
      title: "List",
      href: "/blog",
    },
  ];

  return {
    links,
    uniqueCategories: sortedUniqueCategories,
  };
};
