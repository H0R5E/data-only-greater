<script lang="ts">
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";

  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import SkillCard from "$lib/components/SkillCard.svelte";
  import FrontSection from "$lib/components/FrontSection.svelte";

  import { siteTitle } from "$lib/config";
  import my_face from "$lib/assets/images/mathew.jpg";
  import lcoe from "$lib/assets/images/lcoe_density_raw.png";
  import dtocean from "$lib/assets/images/capex-pie.png";
  import pattern from "$lib/assets/images/test_pattern.png";
  import money from "$lib/assets/images/money.jpg";

  let api: CarouselAPI;
  let count = 0;
  let current = 0;

  $: if (api) {
    count = api.scrollSnapList().length;
    current = api.selectedScrollSnap() + 1;
    api.on("select", () => {
      current = api.selectedScrollSnap() + 1;
    });
  }

  let innerWidth = 0;
  $: isxs = innerWidth <= 640;
  $: ismd = innerWidth <= 768;
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<svelte:window bind:innerWidth />

<FrontSection title="About">
  <div
    class={ismd
      ? "flex max-w-[768px] flex-col gap-4 self-center"
      : "flex max-w-[768px] flex-row-reverse gap-8 self-center"}>
    <div
      class={ismd
        ? "flex shrink-0 justify-center"
        : "flex shrink-0 items-center"}>
      <div class="w-[250px] overflow-clip rounded-full border border-black">
        <img
          width="250"
          height="250"
          alt="Mathew Topper's face"
          src={my_face} />
      </div>
    </div>
    <div class="flex grow flex-col gap-2 text-justify">
      <p>
        Hi, my name is Mathew Topper and I consult as <span class="italic"
          >Data Only Greater</span
        >. I have a mathematics degree from the University of Southampton and a
        PhD from the University of Edinburgh. I have worked for universities,
        consultancies, not-for-profits and, most recently, for myself. My roles
        typically involve research and development, particularly for ocean
        energy, and software development.
      </p>
      <p>
        I have significant experience in technology transfer, turning complex
        ideas into concrete products. I have developed products for desktop and
        web, from design to deployment. I have helped my teams adopt modern
        technologies, allowing them to more efficiently develop new and existing
        products.
      </p>
    </div>
  </div>
</FrontSection>
<FrontSection title="Skills">
  <div class="flex justify-center">
    <Carousel.Root
      class="w-full max-w-[280px] md:max-w-[500px] lg:max-w-[640px]">
      <Carousel.Content>
        <SkillCard title="Research">
          <p slot="text">
            I have conducted research on a wide selection of topics including
            tidal energy converter hydrodynamics, numerical wave tanks, wave
            energy resource modelling, offshore mission planning, levelised cost
            of energy assessment, submarine cables, verification and validation
            and software needs assessment. This research has resulted in over
            150 citations to my published outputs.
          </p>
          <div
            class="relative -left-[175px] -top-[50px] inline-block h-[373px] w-[652px]"
            slot="img">
            <img
              width="652"
              height="373"
              alt="Mathew Topper's face"
              src={lcoe} />
          </div>
        </SkillCard>
        <SkillCard title="Software">
          <p slot="text">
            I am proficient in multiple programming languages, including Python,
            MATLAB, Typescript and Fortran. I have experience of building
            applications in the cloud, using contemporary techniques such as
            serverless and infrastructure as code. I have contributed to
            multiple open source projects and also maintain many. I am
            continuously adopting new techniques and technology in order to
            produce maintainable, error free code.
          </p>
          <div
            class="relative -top-[-25px] left-[25px] inline-block w-[400px]"
            slot="img">
            <img
              width="1107"
              height="722"
              alt="Mathew Topper's face"
              src={dtocean} />
          </div>
        </SkillCard>
        <SkillCard title="Communications">
          <p slot="text">
            Beyond my written publications, I am also a skilled public speaker
            and content creator. I have presented my work at multiple academic
            and industrial conferences. I have recorded (and edited) popular
            instructional videos which are published on the Data Only Greater
            YouTube channel. I also have experience of teaching at undergraduate
            level.
          </p>
          <div
            class="relative -left-[140px] -top-[25px] inline-block w-[500px]"
            slot="img">
            <img
              width="500"
              height="282"
              alt="Mathew Topper's face"
              src={pattern} />
          </div>
        </SkillCard>
        <SkillCard title="Business Development">
          <p slot="text">
            My experience on the cutting edge of research software development,
            combined with my ability to grasp complex subjects quickly, has
            given me the skills to develop ambitious, yet achievable, project
            proposals. Building a strong team is also vital to success and I
            have developed a wide network of contacts across academia and
            industry, particularly in the field of ocean renewable energy.
          </p>
          <div
            class="relative -left-[50px] -top-[0px] inline-block w-[400px]"
            slot="img">
            <img
              width="288"
              height="400"
              alt="Mathew Topper's face"
              src={money} />
          </div>
        </SkillCard>
      </Carousel.Content>
      <Carousel.Previous class={isxs ? "-left-9" : undefined} />
      <Carousel.Next class={isxs ? "-right-9" : undefined} />
    </Carousel.Root>
  </div>
</FrontSection>
<FrontSection title="Achievements">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
    sodales eros, et pellentesque diam. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Suspendisse
    vulputate lacinia venenatis. Sed non orci metus. Vivamus luctus mauris ut
    auctor euismod. Curabitur consequat justo sed neque ornare, quis elementum
    magna scelerisque. In bibendum risus nisi, non maximus magna gravida non.
    Nullam et facilisis metus. Praesent a facilisis nunc, sit amet fringilla
    metus. Donec dolor lectus, mattis eget eros et, eleifend condimentum neque.
  </p>
</FrontSection>
