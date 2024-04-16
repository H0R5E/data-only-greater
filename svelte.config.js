import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex, escapeSvelte } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { getHighlighter } from "shiki";

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
            langs: ["css", "python", "javascript", "svelte", "typescript"],
          });
          await highlighter.loadLanguage(
            "css",
            "python",
            "javascript",
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
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
    vitePreprocess(),
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      entries: [
        "*",
        "/api/posts/page/*",
        "/blog/category/*/page/",
        "/blog/category/*/page/*",
        "/blog/category/page/",
        "/blog/category/page/*",
        "/blog/page/",
        "/blog/page/*",
      ],
    },
  },
};

export default config;
