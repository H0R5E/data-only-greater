<script lang="ts">
  import { currentPage, isMenuOpen } from "../assets/js/store";

  export let href: string;

  $: isCurrentPage = $currentPage.startsWith(href);

  const maybeCloseMenu = () => {
    if (href != $currentPage) {
      isMenuOpen.set(false);
    }
  };
</script>

<li>
  <a
    {href}
    on:click={maybeCloseMenu}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? "page" : false}>
    <slot />
  </a>
</li>
