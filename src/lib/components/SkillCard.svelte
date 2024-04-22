<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  export let title: string;

  let innerWidth = 0;
  $: islg = innerWidth <= 768;
</script>

<svelte:window bind:innerWidth />

<Carousel.Item>
  <div class="h-full p-1">
    <Card.Root class="h-full">
      <Card.Content class="flex flex-col gap-8 overflow-hidden p-6">
        <span class="self-center text-center text-2xl font-semibold sm:text-4xl"
          >{title}</span>
        <div class="flex justify-between gap-8 overflow-hidden">
          <div class="sm:text-justify lg:text-lg">
            <slot name="text" />
          </div>
          {#if !islg}
            <div
              class="static mt-2 h-[200px] w-[200px] shrink-0 overflow-clip rounded-lg border border-black">
              <slot name="img" />
            </div>
          {/if}
        </div>
      </Card.Content>
    </Card.Root>
  </div>
</Carousel.Item>
