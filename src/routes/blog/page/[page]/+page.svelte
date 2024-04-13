<!-- This file handles any /blog/page/x route for pagination -->
<script>
  import PostsList from "$lib/components/PostsList.svelte";
  import { postsPerPage, siteDescription } from "$lib/config";

  export let data;
  const { page, totalPosts, posts } = data;

  $: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
  $: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
  <title>Blog - page {page}</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->

<div class="flex w-full flex-col items-center py-4 pb-32">
  {#if posts.length}
    <span class="scroll-mt-16 pb-8 pt-4 font-script text-4xl"
      >Posts {lowerBound}–{upperBound} of {totalPosts}</span>
    <PostsList {posts} />
  {:else}
    <h1>Oops!</h1>

    <p>Sorry, no posts to show here.</p>

    <a href="/blog">Back to blog</a>
  {/if}
</div>
