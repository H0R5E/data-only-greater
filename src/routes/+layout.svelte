<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script lang="ts">
  import "../app.postcss";
  import "@fortawesome/fontawesome-free/css/fontawesome.css";
  import "@fortawesome/fontawesome-free/css/brands.css";
  import "@fortawesome/fontawesome-free/css/solid.css";

  import { Toaster } from "$lib/components/ui/sonner";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { siteTitle, siteURL } from "$lib/config.js";
  import { currentPage, isMenuOpen } from "$lib/assets/js/store.js";

  import { preloadCode } from "$app/navigation";
  import { page } from "$app/stores";

  import { onMount } from "svelte";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { fade } from "svelte/transition";

  export let data;

  const transitionIn = { delay: 150, duration: 150 };
  const transitionOut = { duration: 100 };

  let scroll_behaviour: string;
  $: base = $page.data.path;

  beforeNavigate(({ to }) => {
    if (to && to.url.pathname === base) return;

    scroll_behaviour = getComputedStyle(
      document.documentElement,
    ).scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
  });

  afterNavigate(() => {
    if (scroll_behaviour) {
      document.documentElement.style.scrollBehavior = scroll_behaviour;
    }
  });

  /**
   * Updates the global store with the current path. (Used for highlighting
   * the current page in the nav, but could be useful for other purposes.)
   **/
  $: currentPage.set(data.path);

  /**
   * This pre-fetches all top-level routes on the site in the background for faster loading.
   * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
   *
   * Any route added in src/lib/config.js will be preloaded automatically. You can add your
   * own preloadData() calls here, too.
   **/
  const routes: string[] = [];
  onMount(() => {
    for (const route of routes) {
      preloadCode(route);
    }
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
    rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
    crossorigin="anonymous" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title={siteTitle}
    href="http://{siteURL}/api/rss.xml" />
</svelte:head>

<Toaster />

<!--
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div
  class="static flex min-h-screen flex-col items-center"
  class:open={$isMenuOpen}>
  <Header {base} links={$page.data.links} />
  {#key data.path}
    <main
      id="main"
      class="flex w-full grow flex-col gap-4"
      tabindex="-1"
      in:fade|global={transitionIn}
      out:fade|global={transitionOut}>
      <slot />
    </main>
  {/key}
  <Footer />
</div>
