<script>
  import { siteDescription } from "$lib/config";
  import { makeID } from "$lib/assets/ts/utils";

  import PostsList from "$lib/components/PostsList.svelte";
  import Pagination from "$lib/components/Pagination.svelte";

  export let data;
</script>

<svelte:head>
  <title>Blog</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<div class="flex w-full flex-col items-center py-4 pb-32">
  <span id={makeID("Blog")} class="scroll-mt-16 py-4 font-script text-4xl"
    >Blog</span>
  <PostsList posts={data.posts} />
  <Pagination currentPage={1} totalPosts={data.total} />
</div>
