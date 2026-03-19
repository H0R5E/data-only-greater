<script lang="ts">
  let innerWidth = $state(0);
  const year = new Date().getFullYear();

  let isxs = $derived(innerWidth <= 640);
  let is2xs = $derived(innerWidth <= 370);
</script>

<svelte:window bind:innerWidth />

<div class="mt-8 mb-4 w-full max-w-184 min-w-82.5 px-2">
  <div
    class="flex items-center justify-between rounded-full border border-slate-600 bg-stone-200 px-6">
    <div class="flex py-2">
      <div class="my-1 flex flex-col items-center justify-between gap-1">
        <span>Business</span>
        <!-- <hr class="w-20 border-black bg-black" /> -->
        <div class="mr-1 mb-1 flex gap-1">
          <a
            title="Data Only Greater's LinkedIn"
            href="https://ie.linkedin.com/company/data-only-greater">
            <i class="fa-brands fa-linkedin fa-2xl mb-4"></i>
          </a>
          <a
            title="Data Only Greater's GitHub"
            href="https://github.com/Data-Only-Greater">
            <i class="fa-brands fa-github fa-2xl mb-4"></i>
          </a>
          <a
            title="Data Only Greater's YouTube"
            href="https://www.youtube.com/channel/UCmmcror7BUEozS9TQtnmjPQ">
            <i class="fa-brands fa-youtube fa-2xl mb-4"></i>
          </a>
        </div>
      </div>
      <div
        class="inline-block h-20 min-h-[1em] w-px grow self-stretch bg-black">
      </div>
      <div class="my-1 flex flex-col items-center justify-between gap-1">
        <span>Personal</span>
        <!-- <hr class="w-20 border-black bg-black" /> -->
        <div class="mb-1 ml-1 flex gap-1">
          <a
            title="Mathew Topper's LinkedIn"
            href="https://www.linkedin.com/in/mathew-topper-53151235">
            <i class="fa-brands fa-linkedin fa-2xl mb-4"></i>
          </a>
          <a title="Mathew Topper's GitHub" href="https://github.com/H0R5E">
            <i class="fa-brands fa-github fa-2xl mb-4"></i>
          </a>
          <a
            title="Mathew Topper's Google Scholar"
            href="https://scholar.google.co.uk/citations?user=di-ePxIAAAAJ">
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
      <span class="shrink-0">&copy;{is2xs ? "" : ` ${year}`}</span>
    {/if}
  </div>
</div>
