<!-- Renders any page at /blog/category/* -->
<script>
  import PostsList from "$lib/components/PostsList.svelte";
  export let data;

  const { posts, category } = data;
</script>

<svelte:head>
  <title>Category: {category}</title>
</svelte:head>

<div class="flex w-full flex-col items-center p-4 pb-32">
  <span class="scroll-mt-16 pb-8 pt-4 font-script text-4xl"
    >Category: {category}</span>
  <PostsList {posts} />
</div>
