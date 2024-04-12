<script lang="ts">
  export let sections: string[];
  function makeID(x: string): string {
    return "#" + x.replace(/\s+/g, "-").toLowerCase();
  }
</script>

<nav
  aria-label="Page navigation"
  class="static flex max-w-[640px] gap-3 rounded-full border border-slate-600 bg-stone-200 px-5 py-2">
  {#if sections}
    {#each sections as section}
      <a href={makeID(section)} class="text-lg">{section}</a>
    {/each}
  {/if}
  <div
    class="absolute bottom-0 left-1/2 flex h-6 w-6 -translate-x-3 justify-center rounded-full border border-black bg-white align-middle">
    <a href="/">
      <i class="fa-solid fa-jet-fighter-up"></i>
    </a>
    <div></div>
  </div>
</nav>
