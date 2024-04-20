<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  export let title: string;
  export let backgrounds: string[];
  export let titleMinWidth: string | null = null;
</script>

<Carousel.Item>
  <div class="h-full p-1">
    <Card.Root
      class="h-full bg-center bg-no-repeat"
      style="background-image: {backgrounds.toString()};">
      <Card.Content class="flex h-full gap-4 overflow-hidden p-4">
        <div class="flex w-full flex-col gap-4 md:flex-row">
          <div
            class="
              w-full
              rounded
              bg-blue-50/60
              p-4
              text-center
              text-4xl
              font-bold
              backdrop-blur
              md:h-full
              {titleMinWidth ? `min-w-[${titleMinWidth}]` : ''}">
            {title}
          </div>
          <div
            class="
              flex
              h-full
              flex-col
              justify-center
              gap-2
              rounded
              bg-blue-50/60
              px-4
              py-2
              backdrop-blur
              sm:text-justify
              lg:text-lg">
            <slot />
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  </div>
</Carousel.Item>
