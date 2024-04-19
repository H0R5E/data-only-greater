<script lang="ts">
  import { makeID } from "$lib/assets/ts/utils";
  export let title: string;
</script>

<div
  id={makeID(title)}
  class="-mt-6 flex min-h-screen w-full scroll-mt-16 flex-col items-center justify-center py-4 pb-32">
  <span class="font-script text-4xl">{title}</span>
  <div class="my-8 flex w-full items-center justify-center bg-stone-200 py-16">
    <div class="flex w-full flex-col gap-2 px-4 pb-4">
      <slot />
    </div>
  </div>
</div>
