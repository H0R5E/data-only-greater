# Data Only Greater Website

This is the SvelteKit source code for
[dataonlygreater.com](https://www.dataonlygreater.com/). It was developed from
Josh Collinsworth's excellent [SvelteKit static blog
starter](https://github.com/josh-collinsworth/sveltekit-blog-starter) and uses
the [shadcn-svelte](https://www.shadcn-svelte.com/) UI library for some of the
components.

## Development

Clone or download
[this repo](https://github.com/H0R5E/data-only-greater), then
install the dependencies and run the dev server:

```
cd data-only-greater
npm install
npm run dev -- --open
```

That should get a dev server up and running (assuming you have npm and Node
installed already). Any saved changes to components and styles should
auto-refresh blazingly fast.

## Building

The build command (from package.json) is simply:

```
npm run build
```

Use `npm run preview` _after_ a build to preview the built site locally.

## Customization

Be sure to update `src/lib/config.js` to reflect your site's domain,
preferences, etc. This is also where the nav menu can be updated.

**It's very important to update this file with the specific details of your
site.** Info from this file is used in your RSS feed and SEO meta tags, so don't
launch without updating it.

## Adding new posts

Adding new posts is as simple as dropping a new `.md` file into `src/lib/posts`.
New posts will automatically show up on the site, be added to the posts API, and
any category pages.

A few demo Markdown posts are included, and highlight some of the features of
this starter. These demo posts can be updated or removed, but it may be best to
use one as a starting point, just for the frontmatter properties.

If you want to use other frontmatter properties in the template (or just modify
the layout), make changes in `src/routes/blog/post/[post]/+page.svelte`.

⚠️ **Note: posts should have a `date` and an `excerpt` defined in the
frontmatter.** They're sorted by `date`, and use `excerpt` in page meta tags
(for SEO, social sharing, etc.) There are also other frontmatter properties used
to enhance the site experience, like the `coverWidth` and `coverHeight`, which
are used in the template to reserve space for the image, minimizing cumulative
layout shift.

The starter will still work without `date` properties in your posts, but the
sorting won't be right. Similarly, you can have posts without an `excerpt`, but
your SEO/social previews will be sub-optimal.

Also: while there's no link to it by default, `/blog/category` exists as an
archive of all your post categories.

### Pagination

Pagination automatically kicks in once you have more posts than the
`postsPerPage` option in `src/lib/config.js`. This means you won't see the
pagination right away unless you either change `postsPerPage` to a very low
number, or add several more Markdown files to the `src/lib/posts` folder.

**Note:** both the normal `/blog` feed _and_ the category feeds at
`/category/[category]` are automatically paginated.

### RSS

This starter also includes a basic RSS feed. It's very minimal, so you may want
to tweak it depending on your XML feed needs, but it _does_ work out of the box.

Update the `config` details in `src/lib/config.js` to get your site's unique
info correct. (You could also pull this info in other places, or add to it, to
keep things consistent, but that's up to you.)

## Static files

Things that should just live in the site root of the finished site (like a
`robots.txt` file, favicon, or maybe images) should go in the `static` folder.
If you link to them, use the root path (e.g., `/images/my.png`, not
`../static/images/my.png`).

(Placeholder images credit [Unsplash](https://unsplash.com); photographer names
are in the file names.)
