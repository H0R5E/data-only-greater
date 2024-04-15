const getPostIndex = async ({ slug } = {}) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/lib/posts/*.md")).map(
      async ([path, resolver]) => {
        const { metadata } = await resolver();
        const slug = path.split("/").pop().slice(0, -3);
        return { ...metadata, slug };
      },
    ),
  );

  let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const postSlugs = posts.map((x) => x.slug);

  return postSlugs.indexOf(slug);
};

export default getPostIndex;
