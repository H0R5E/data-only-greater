<script lang="ts">
  import GithubSlugger from "github-slugger";

  let data: HTMLHeadElement;
  const slugger = new GithubSlugger();
</script>

<h6 id={slugger.slug(data?.innerText)} bind:this={data} class="font-semibold">
  <slot />
</h6>
