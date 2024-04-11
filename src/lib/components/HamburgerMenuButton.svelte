<script>
  import { isMenuOpen } from "../assets/js/store";
  import HamburgerSVG from "./svg/HamburgerSVG.svelte";
  import XSVG from "./svg/XSVG.svelte";

  export let closeOnly = false;

  const toggleIsMenuOpen = () => {
    isMenuOpen.set(!$isMenuOpen);
  };
</script>

<button
  on:click={toggleIsMenuOpen}
  aria-pressed={$isMenuOpen}
  tabindex={$isMenuOpen || !closeOnly ? 0 : -1}>
  <span>Toggle hamburger menu</span>
</button>
