<script lang="ts">
  import { siteTitle } from "$lib/config";
  import { spaceToUnderscore } from "$lib/assets/ts/utils";
  import { badgeVariants } from "$lib/components/ui/badge";

  let { data } = $props();
  const { uniqueCategories } = data;
</script>

<svelte:head>
  <title>Blog: Categories - {siteTitle}</title>
</svelte:head>

<div class="flex w-full flex-col items-center p-4 pb-32">
  <span class="font-script scroll-mt-16 pt-4 pb-8 text-4xl"
    >All Blog Categories</span>
  <div
    class="mt-4 mb-2 flex max-w-160 min-w-75 flex-wrap items-center justify-center gap-1 px-1">
    {#each uniqueCategories as category}
      <a
        href="/blog/category/{spaceToUnderscore(category.title)}/"
        class={badgeVariants()}>{category.title}</a>
    {/each}
  </div>
</div>
