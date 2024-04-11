<script>
  import MainNav from "./MainNav.svelte";
  import HamburgerMenuButton from "./HamburgerMenuButton.svelte";
  import { siteTitle } from "$lib/config";

  const focusMain = () => {
    const main = document.querySelector("main");
    if (!main) return;
    main.focus();
  };
</script>

<header class="static flex flex-col bg-slate-800 text-center">
  <a
    on:click|preventDefault={focusMain}
    class="absolute
    left-0 top-0
    h-12
    text-white"
    href="#main">
    Skip to main content
  </a>

  <a href="/" class="text-2xl text-white">
    {siteTitle}
  </a>

  <HamburgerMenuButton />
  <MainNav />
</header>
