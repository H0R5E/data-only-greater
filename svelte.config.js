import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { mdsvex, escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatexSvelte from "rehype-katex-svelte";
import rehypeSlug from "rehype-slug";
import wikiLinkPlugin from "remark-wiki-link";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const theme = "github-dark";
const highlighter = await createHighlighter({
  themes: [theme],
  langs: [
    "css",
    "bash",
    "python",
    "javascript",
    "matlab",
    "svelte",
    "typescript",
  ],
});

const tocOptions = {
  skip: "references",
};

const pageResolver = (name) => {
  const fixed = name
    .replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, "") // Remove HTML character entities
    .replace(/[^a-zA-Z0-9 ]/g, "") // Remove non alpha numeric character
    .replace(/ +(?= )/g, "") // Remove multiple spaces
    .replace(/ /g, "-") // Replace single space with dash
    .toLowerCase();
  return [fixed];
};
const hrefTemplate = (permalink) => `/blog/post/${permalink}`;
const wikiLinkOptions = {
  pageResolver,
  hrefTemplate,
};

const path_to_layout = join(
  __dirname,
  "./src/lib/components/mdsvex/layouts/default.svelte",
);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
  extensions: [".svelte", ".md"],

  preprocess: [
    mdsvex({
      // The default mdsvex extension is .svx; this overrides that.
      extensions: [".md"],
      highlight: {
        highlighter: async (code, lang = "text") => {
          const html = escapeSvelte(
            highlighter.codeToHtml(code, { lang, theme }),
          );
          return `{@html \`${html}\` }`;
        },
      },
      layout: path_to_layout,

      // Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeKatexSvelte],
      remarkPlugins: [
        remarkMath,
        [remarkToc, tocOptions],
        [wikiLinkPlugin, wikiLinkOptions],
      ],
    }),
    vitePreprocess(),
  ],

  kit: {
    adapter: adapter({ fallback: "404.html" }),
    prerender: {
      entries: [
        "/api/posts.json/",
        "/api/posts/count/",
        "/api/rss.xml/",
        "/blog/",
        "/blog/category/",
        "/blog/page",
        "/blog/post",
      ],
      handleMissingId: "warn",
      handleUnseenRoutes: "warn",
    },
  },
};

export default config;
