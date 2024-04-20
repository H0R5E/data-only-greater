import type { PageLoad } from "./$types.js";

import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { contactFormSchema } from "$lib/assets/ts/contactFormSchema";
import { makeAnchor } from "$lib/assets/ts/utils";

interface Link {
  title: string;
  href: string;
}

const titles = ["About", "Skills", "Achievements", "Contact"];
const links: Link[] = titles.map((x) => {
  return { title: x, href: makeAnchor(x) };
});

export const load: PageLoad = async () => {
  return {
    form: await superValidate(zod(contactFormSchema)),
    links,
  };
};
