<script lang="ts">
  interface Link {
    title: string;
    href: string;
  }

  export let base: string = "/";
  export let links: Link[];
</script>

{#if links}
  <nav
    aria-label="Page navigation"
    class="static flex max-w-[640px] gap-3 rounded-full border border-slate-600 bg-stone-200 px-5 py-2">
    {#each links as link}
      <a href={link.href} class="text-lg">{link.title}</a>
    {/each}
    <div
      class="absolute bottom-0 left-1/2 flex h-6 w-6 -translate-x-3 items-center justify-center rounded-full border border-black bg-white">
      <a href={base} title="Top">
        <i class="fa-solid fa-arrow-up pb-1"></i>
      </a>
    </div>
  </nav>
{:else}
  <nav
    aria-label="Page navigation"
    class="flex h-6 w-6 items-center justify-center rounded-full border border-black bg-white">
    <a href={base} title="Top">
      <i class="fa-solid fa-arrow-up pb-1"></i>
    </a>
  </nav>
{/if}
