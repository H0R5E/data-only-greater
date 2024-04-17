<script lang="ts">
  import GithubSlugger from "github-slugger";

  let data: HTMLHeadElement;
  const slugger = new GithubSlugger();
</script>

<h4
  id={slugger.slug(data?.innerText)}
  bind:this={data}
  class="text-xl font-semibold">
  <slot />
</h4>
