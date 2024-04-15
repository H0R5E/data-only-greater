<script lang="ts">
  import { goto } from "$app/navigation";
  import logo from "$lib/assets/images/dog_solo_nav.png";
</script>

<div
  class="flex w-full max-w-[640px] justify-between rounded-full border border-slate-600 bg-stone-200 p-1">
  <button class="flex items-center gap-2" on:click={() => goto("/")}>
    <div
      class="h-12 w-12 overflow-hidden rounded-full border border-black bg-white">
      <img alt="The data only greater logo" src={logo} />
    </div>
    <span class="pt-2 font-script text-2xl font-normal">Data Only Greater</span>
  </button>
  <div class="grow" />
  <nav aria-label="Main navigation" class="flex items-center gap-3 pb-1 pr-5">
    <a href="/" class="text-xl">Home</a>
    <a href="/blog" class="text-xl">Blog</a>
  </nav>
</div>
