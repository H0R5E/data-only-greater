<script lang="ts">
  export let title: string;

  function makeID(x: string): string {
    return x.replace(/\s+/g, "-").toLowerCase();
  }
</script>

<div class="flex min-h-screen w-full flex-col items-center py-4 pb-32">
  <span id={makeID(title)} class="font-script scroll-mt-16 py-4 text-4xl"
    >{title}</span>
  <div class="flex w-full justify-center bg-stone-200 py-4">
    <div class="flex max-w-[768px] flex-col gap-2 px-4 pb-4">
      <slot />
    </div>
  </div>
</div>
