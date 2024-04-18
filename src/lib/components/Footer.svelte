<script lang="ts">
  let innerWidth = 0;
  const year = new Date().getFullYear();

  $: isxs = innerWidth <= 640;
</script>

<svelte:window bind:innerWidth />

<div class="mb-4 mt-8 w-full max-w-[736px] px-2">
  <div
    class="flex items-center justify-between rounded-full border border-slate-600 bg-stone-200 px-6">
    <div class="flex py-2">
      <div class="my-1 flex flex-col items-center justify-between gap-2">
        <span>Business</span>
        <!-- <hr class="w-20 border-black bg-black" /> -->
        <div class="mx-2 mb-2 flex gap-2">
          <a href="https://ie.linkedin.com/company/data-only-greater">
            <i class="fa-brands fa-linkedin fa-2xl mb-4"></i>
          </a>
          <a href="https://github.com/Data-Only-Greater">
            <i class="fa-brands fa-github fa-2xl mb-4"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCmmcror7BUEozS9TQtnmjPQ">
            <i class="fa-brands fa-youtube fa-2xl mb-4"></i>
          </a>
        </div>
      </div>
      <div
        class="inline-block h-20 min-h-[1em] w-[1px] grow self-stretch bg-black">
      </div>
      <div class="my-1 flex flex-col items-center justify-between gap-2">
        <span>Personal</span>
        <!-- <hr class="w-20 border-black bg-black" /> -->
        <div class="mx-2 mb-2 flex gap-2">
          <a href="https://www.linkedin.com/in/mathew-topper-53151235">
            <i class="fa-brands fa-linkedin fa-2xl mb-4"></i>
          </a>
          <a href="https://github.com/H0R5E">
            <i class="fa-brands fa-github fa-2xl mb-4"></i>
          </a>
          <a href="https://scholar.google.co.uk/citations?user=di-ePxIAAAAJ">
            <i class="fa-brands fa-google-scholar fa-2xl mb-4"></i>
          </a>
        </div>
      </div>
    </div>
    {#if !isxs}
      <div class="flex gap-1 pl-2">
        <span>&copy; {year}</span>
        <span>Mathew Topper</span>
      </div>
    {:else}
      <span class="flex-shrink-0">&copy; {year}</span>
    {/if}
  </div>
</div>
