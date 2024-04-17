<script lang="ts">
  import GithubSlugger from "github-slugger";

  let data: HTMLHeadElement;
  const slugger = new GithubSlugger();
</script>

<h3
  id={slugger.slug(data?.innerText)}
  bind:this={data}
  class="text-2xl font-semibold">
  <slot />
</h3>
