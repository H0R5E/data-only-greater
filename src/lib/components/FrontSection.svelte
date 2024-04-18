<script lang="ts">
  import { makeID } from "$lib/assets/ts/utils";
  export let title: string;
</script>

<div class="flex min-h-screen w-full flex-col items-center py-4 pb-32">
  <span id={makeID(title)} class="scroll-mt-16 py-4 font-script text-4xl"
    >{title}</span>
  <div class="flex w-full justify-center bg-stone-200 py-4">
    <div class="flex w-full flex-col gap-2 px-4 pb-4">
      <slot />
    </div>
  </div>
</div>
