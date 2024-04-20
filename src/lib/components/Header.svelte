<script lang="ts">
  import TopNav from "./TopNav.svelte";
  import SecondaryNav from "./SecondaryNav.svelte";

  interface Link {
    title: string;
    href: string;
  }

  export let base: string;
  export let links: Link[];
</script>

<header
  class="absolute sticky -top-[70px] z-10 mb-8 flex w-full min-w-[320px] flex-col items-center gap-2 p-2 pb-4">
  <TopNav />
  <SecondaryNav {base} {links} />
</header>
