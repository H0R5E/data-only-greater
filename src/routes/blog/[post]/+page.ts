import { error } from "@sveltejs/kit";

export const load = async ({ data, params }) => {
  interface Link {
    title: string;
    href: string;
  }
  let links: Link[] = [];

  if (data.nav.previous) {
    links.push({
      title: "Previous",
      href: `/blog/${data.nav.previous}`,
    });
  }

  links.push({
    title: "List",
    href: `/blog`,
  });

  if (data.nav.next) {
    links.push({
      title: "Next",
      href: `/blog/${data.nav.next}`,
    });
  }

  try {
    const post = await import(`../../../lib/posts/${params.post}.md`);
    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post },
      links,
    };
  } catch (err: any) {
    error(404, err);
  }
};
