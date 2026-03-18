<!-- Renders any page at /blog/category/* -->
<script lang="ts">
  import { underscoreToSpace } from "$lib/assets/ts/utils";
  import PostsList from "$lib/components/PostsList.svelte";
  let { data } = $props();

  const { posts, category } = data;
</script>

<svelte:head>
  <title>Category: {category}</title>
</svelte:head>

<div class="flex w-full flex-col items-center p-4 pb-32">
  <span class="font-script scroll-mt-16 pt-4 pb-8 text-4xl"
    >Category: {underscoreToSpace(category)}</span>
  <PostsList {posts} />
</div>
