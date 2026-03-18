<script lang="ts">
  import GithubSlugger from "github-slugger";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let data: HTMLHeadElement = $state();
  const slugger = new GithubSlugger();
</script>

<h4
  id={slugger.slug(data?.innerText)}
  bind:this={data}
  class="text-xl font-semibold">
  {@render children?.()}
</h4>
