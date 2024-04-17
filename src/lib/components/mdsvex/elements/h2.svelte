<script lang="ts">
  import GithubSlugger from "github-slugger";

  let data: HTMLHeadElement;
  const slugger = new GithubSlugger();
</script>

<h2
  id={slugger.slug(data?.innerText)}
  bind:this={data}
  class="mt-4 text-3xl font-semibold">
  <slot />
</h2>
