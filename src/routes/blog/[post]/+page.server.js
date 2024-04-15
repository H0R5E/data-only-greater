export const load = async ({ url, fetch, params }) => {
  const req = await fetch(`${url.origin}/api/posts/nav/${params.post}`);
  const nav = await req.json();
  return { nav };
};
