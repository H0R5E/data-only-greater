<script lang="ts">
  import TopNav from "./TopNav.svelte";
  import PageNav from "./PageNav.svelte";

  export let base: string;
  export let sections: string[];
</script>

<header
  class="absolute sticky -top-[70px] flex w-full flex-col items-center gap-2 p-2 pb-4">
  <TopNav />
  <PageNav {base} {sections} />
</header>
