<script lang="ts">
  export let sections: string[];
  function makeID(x: string): string {
    return "#" + x.replace(/\s+/g, "-").toLowerCase();
  }
</script>

<div
  class="top-0 flex max-w-[640px] gap-3 rounded-full border border-slate-600 bg-stone-200 px-5 py-2">
  {#if sections}
    {#each sections as section}
      <a href={makeID(section)} class="text-lg">{section}</a>
    {/each}
  {/if}
</div>
