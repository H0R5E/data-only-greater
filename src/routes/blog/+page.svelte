<script lang="ts">
  import { siteDescription, siteTitle } from "$lib/config";
  import { makeID } from "$lib/assets/ts/utils";
  import PostsList from "$lib/components/PostsList.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Blog - {siteTitle}</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<div class="flex w-full flex-col p-4">
  <span
    id={makeID("Blog")}
    class="font-script scroll-mt-16 self-center pb-2 text-center text-4xl leading-11.25"
    >Blog</span>
  <PostsList posts={data.posts} />
</div>
