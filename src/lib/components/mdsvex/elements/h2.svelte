<script lang="ts">
  import GithubSlugger from "github-slugger";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let data: HTMLHeadElement = $state();
  const slugger = new GithubSlugger();
</script>

<h2
  id={slugger.slug(data?.innerText)}
  bind:this={data}
  class="mt-4 text-3xl font-semibold">
  {@render children?.()}
</h2>
