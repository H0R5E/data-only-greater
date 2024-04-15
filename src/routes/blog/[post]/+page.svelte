<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
  import { badgeVariants } from "$lib/components/ui/badge";

  export let data;

  const {
    title,
    excerpt,
    date,
    updated,
    coverImage,
    coverWidth,
    coverHeight,
    categories,
  } = data.meta;
  const { PostContent } = data;
</script>

<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <title>{title}</title>
  <meta data-key="description" name="description" content={excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta name="twitter:description" content={excerpt} />
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
  <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} />
  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="flex max-w-[640px] flex-col gap-2 self-center">
  <!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->

  <h1 class="scroll-mt-16 self-center pb-2 pt-4 font-script text-4xl">
    {title}
  </h1>

  <div
    class="flex gap-2 self-center rounded-full border px-4 py-1 text-xs text-muted-foreground">
    <div>
      <span class="font-semibold italic">Published:</span>
      {date}
    </div>
    <div>&ndash;</div>
    <div>
      <span class="font-semibold italic">Updated:</span>
      {updated}
    </div>
  </div>

  <img class="m-3 border border-black p-1" src={coverImage} alt="" />

  <svelte:component this={PostContent} />

  {#if categories}
    <div class="mt-4 flex gap-1">
      {#each categories as category}
        <a href="/blog/category/{category}/" class={badgeVariants()}
          >{category}</a>
      {/each}
    </div>
  {/if}
</article>
