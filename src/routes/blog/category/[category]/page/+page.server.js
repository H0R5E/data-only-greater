import { redirect } from "@sveltejs/kit";
import { underscoreToSpace } from "$lib/assets/ts/utils.js";

export const load = async ({ params }) => {
  const category = underscoreToSpace(params.category);
  redirect(301, `/blog/category/${category}/`);
};
