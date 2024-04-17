import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { mdsvex, escapeSvelte } from "mdsvex";
import { getHighlighter } from "shiki";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatexSvelte from "rehype-katex-svelte";
import rehypeSlug from "rehype-slug";
import wikiLinkPlugin from "remark-wiki-link";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";

const tocOptions = {
  skip: "references",
};

const pageResolver = (name) => {
  const fixed = name
    .replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/ /g, "-")
    .toLowerCase();
  return [fixed];
};
const hrefTemplate = (permalink) => `/blog/${permalink}`;
const wikiLinkOptions = {
  pageResolver,
  hrefTemplate,
};

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
          const highlighter = await getHighlighter({
            themes: ["github-dark"],
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
          await highlighter.loadLanguage(
            "css",
            "bash",
            "python",
            "javascript",
            "matlab",
            "svelte",
            "typescript",
          );
          const html = escapeSvelte(
            highlighter.codeToHtml(code, {
              lang,
              theme: "github-dark",
            }),
          );
          return html;
        },
      },
      layout: "src/lib/components/mdsvex/layouts/default.svelte",

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
    adapter: adapter(),
    prerender: {
      handleMissingId: "warn",
      entries: [
        "/blog/",
        "/blog/page",
        "/blog/category/",
        "/api/posts.json/",
        "/api/posts/nav/[slug]",
        "/api/posts/count/",
        "/api/posts/page/[page]/",
        "/api/rss.xml/",
      ],
    },
  },
};

export default config;
