import { makeAnchor } from "$lib/assets/ts/utils";

interface Link {
  title: string;
  href: string;
}

const titles = ["About", "Skills", "Achievements", "Contact"];
const links: Link[] = titles.map((x) => {
  return { title: x, href: makeAnchor(x) };
});

export function load() {
  return {
    links,
  };
}
