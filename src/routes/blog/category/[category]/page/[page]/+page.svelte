<!-- This file handles any /blog/page/x route for pagination -->
<script lang="ts">
  import PostsList from "$lib/components/PostsList.svelte";
  import { postsPerPage, siteDescription } from "$lib/config";

  let { data } = $props();
  const { category, page, totalPosts, posts } = data;

  console.log(page, totalPosts);
  let lowerBound = $derived(page * postsPerPage - (postsPerPage - 1) || 1);
  let upperBound = $derived(Math.min(page * postsPerPage, totalPosts));
</script>

<svelte:head>
  <title
    >Category: {category} (posts {lowerBound}–{upperBound} of {totalPosts})</title>
</svelte:head>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->

<div class="flex w-full flex-col py-4 pb-32">
  {#if posts.length}
    <span class="font-script mx-auto scroll-mt-16 pt-4 pb-8 text-4xl"
      >Category: {category} (posts {lowerBound}–{upperBound} of {totalPosts})</span>
    <PostsList {posts} />
  {:else}
    <h1>Oops!</h1>

    <p>Sorry, no posts to show here.</p>

    <a href="/blog">Back to blog</a>
  {/if}
</div>
