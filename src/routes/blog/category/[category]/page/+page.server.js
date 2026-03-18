import { redirect } from "@sveltejs/kit";
import { underscoreToSpace } from "$lib/assets/ts/utils.js";

export const load = async ({ params }) => {
  redirect(301, `/blog/category/${params.category}/`);
};
