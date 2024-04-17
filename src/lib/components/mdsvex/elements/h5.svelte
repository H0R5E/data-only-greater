<script lang="ts">
  import GithubSlugger from "github-slugger";

  let data: HTMLHeadElement;
  const slugger = new GithubSlugger();
</script>

<h5
  id={slugger.slug(data?.innerText)}
  bind:this={data}
  class="text-lg font-semibold">
  <slot />
</h5>
