<script>
  import { siteDescription } from "$lib/config";
  import { makeID } from "$lib/assets/ts/utils";
  import PostsList from "$lib/components/PostsList.svelte";

  export let data;
</script>

<svelte:head>
  <title>Blog</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<div class="flex w-full flex-col p-4">
  <span
    id={makeID("Blog")}
    class="mx-auto scroll-mt-16 pb-8 pt-4 font-script text-4xl">Blog</span>
  <PostsList posts={data.posts} />
</div>
