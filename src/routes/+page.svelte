<script lang="ts">
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";

  import { browser } from "$app/environment";

  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import FrontSection from "$lib/components/FrontSection.svelte";
  import SkillCard from "$lib/components/SkillCard.svelte";
  import AchievementCard from "$lib/components/AchievementCard.svelte";
  import Link from "$lib/components/Link.svelte";

  import { siteTitle } from "$lib/config";
  import my_face from "$lib/assets/images/mathew.jpg";
  import lcoe from "$lib/assets/images/lcoe_density_raw.png";
  import dtocean from "$lib/assets/images/capex-pie.png";
  import pattern from "$lib/assets/images/test_pattern.png";
  import money from "$lib/assets/images/money.jpg";
  import bluebox from "$lib/assets/images/bluebox.png?url";
  import dtocean2 from "$lib/assets/images/dtocean2.png?url";
  import forecoast from "$lib/assets/images/forecoast.png?url";
  import dog from "$lib/assets/images/dog.png";

  import type { PageData } from "./$types.js";
  import ContactForm from "./contact-form.svelte";
  export let data: PageData;

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

  function isTouchDevice(): boolean {
    if (!browser) return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  const touchDevice = isTouchDevice();
  $: console.log(touchDevice);

  let innerWidth = 0;
  $: isxs = innerWidth <= 640;
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<svelte:window bind:innerWidth />

<FrontSection title="About">
  <div
    class="
      flex
      max-w-[768px]
      flex-col
      gap-4
      self-center
      md:flex-row-reverse
      md:gap-8
      lg:max-w-[900px]">
    <div class="flex shrink-0 justify-center md:items-center">
      <div class="w-[250px] overflow-clip rounded-full border border-black">
        <img
          width="250"
          height="250"
          alt="Mathew Topper's face"
          src={my_face} />
      </div>
    </div>
    <div class="flex grow flex-col gap-2 text-justify lg:text-lg">
      <p>
        Hi, my name is Mathew Topper and <i>Data Only Greater</i> is my consultancy
        business. I have a degree in mathematics from the University of Southampton
        and a PhD from the University of Edinburgh. I have worked for universities,
        consultancies, not-for-profits and, most recently, for myself. My roles typically
        involve research and development, particularly for ocean energy, and software
        development.
      </p>
      <p>
        I have significant experience in technology transfer, turning complex
        ideas into concrete products. I have developed products for desktop and
        web, from design to deployment. I have helped my teams adopt modern
        technologies, allowing them to develop new and existing products more
        efficiently.
      </p>
    </div>
  </div>
</FrontSection>
<FrontSection title="Skills">
  <div class="flex justify-center">
    <Carousel.Root
      class="w-full {touchDevice
        ? 'min-w-[300px] max-w-[320px] sm:max-w-[580px] md:max-w-[720px] lg:max-w-[800px]'
        : 'min-w-[200px] max-w-[min(300px,calc(100%-60px))] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[800px]'}"
      opts={{
        watchDrag: touchDevice,
      }}>
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
              alt="LCOE joint probability chart"
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
              alt="DTOcean interface"
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
            <img width="500" height="282" alt="A test card" src={pattern} />
          </div>
        </SkillCard>
        <SkillCard title="Business Development">
          <p slot="text">
            My experience on the cutting edge of research software development,
            combined with my ability to grasp complex subjects quickly, has
            given me the skills to develop ambitious, yet achievable, project
            proposals. Building a strong team is also vital to success and I
            have nurtured a wide network of contacts across academia and
            industry, particularly in the field of ocean renewable energy.
          </p>
          <div
            class="relative -left-[50px] -top-[0px] inline-block w-[400px]"
            slot="img">
            <img width="288" height="400" alt="Funding" src={money} />
          </div>
        </SkillCard>
      </Carousel.Content>
      <Carousel.Previous
        class={touchDevice ? "hidden" : isxs ? "-left-9" : undefined} />
      <Carousel.Next
        class={touchDevice ? "hidden" : isxs ? "-right-9" : undefined} />
    </Carousel.Root>
  </div>
</FrontSection>
<FrontSection title="Achievements">
  <div class="flex justify-center">
    <Carousel.Root
      class="w-full {touchDevice
        ? 'min-w-[300px] max-w-[320px] sm:max-w-[580px] md:max-w-[720px] lg:max-w-[800px]'
        : 'min-w-[200px] max-w-[min(300px,calc(100%-60px))] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[800px]'}"
      opts={{
        watchDrag: touchDevice,
      }}>
      <Carousel.Content>
        <AchievementCard
          title="BlueBox"
          backgrounds={[
            `url(${bluebox})`,
            "linear-gradient(#a5f3fc, #38bdf8)",
          ]}>
          <p class="">
            <i>BlueBox</i> was a 2 year, sustainable energy authority of Ireland
            funded, R&amp;D project, with the goal of developing an IoT system for
            renewably powered offshore sensing platforms. The internet and Iridium
            satellite network are used to allow communication from any location.
          </p>
          <div>
            <p class="">
              My role in the project was to develop a cloud based
              web-application for:
            </p>
            <ul class="my-2 ml-6 list-disc">
              <li>managing users, tenants and devices;</li>
              <li>sending and receiving messages;</li>
              <li>storing data and visualizing results.</li>
            </ul>
          </div>
          <p class="">
            I implemented the system using a serverless architecture, deployed
            to AWS, and managed with the Pulumi infrastructure-as-code service.
            Standard IoT protocols, such as MQTT, were also utilised.
          </p>
          <p class="">
            The BlueBox software will be released soon, under an open-source
            license.
          </p>
        </AchievementCard>
        <AchievementCard title="DTOcean" backgrounds={[`url(${dtocean2})`]}>
          <p>
            <i>DTOcean</i> is a desktop application for techno-economic modelling
            of ocean energy arrays. It was initially developed as part of €10 million,
            3-year EU project with over 10 partners, and subsequently enhanced by
            myself in collaboration with Sandia National Laboratories.
          </p>
          <div>
            <p>Highlights of my contribution to the project are:</p>
            <ul class="my-2 ml-6 list-disc">
              <li>the data model and execution pipeline;</li>
              <li>the desktop interface and installer;</li>
              <li>the global optimisation functions.</li>
            </ul>
          </div>
          <p>
            Using DTOcean, I published three journal articles and one conference
            paper (as first author), in collaboration with my colleagues. I also
            created documentation and instructional videos for using the
            software.
          </p>
          <p>
            DTOcean is written in python and postgreSQL and is available under
            the GPL license from its <a
              class="text-blue-600 visited:text-purple-600 hover:underline"
              href="https://github.com/DTOcean">GitHub organisation</a
            >.
          </p>
        </AchievementCard>
        <AchievementCard
          title="ForeCoast® Marine"
          backgrounds={[`url(${forecoast})`]}>
          <p>
            <i>ForeCoast® Marine</i> is an online decision support tool for offshore
            operations developed by JBA Consulting. The Control Desk module provides
            detailed weather window and vessel routing predictions based on simulations
            powered by ensemble weather and metocean forecasts.
          </p>
          <p>
            Working with the UK Met Office, I developed simulation pipelines to
            convert the ensemble forecasts into initial conditions for numerical
            models (such as SWAN). I also automated the execution of the
            simulations and processed the results to create statistical
            predictions for local conditions within a site of interest.
          </p>
          <p>
            For further information on ForeCoast® Marine, please visit the
            <Link
              href="https://www.jbaconsulting.com/forecoast-marine-control-desk/"
              >JBA Consulting website</Link
            >.
          </p>
        </AchievementCard>
        <AchievementCard
          title="Data Only Greater"
          backgrounds={[`url(${dog})`]}
          titleMinWidth="200px">
          <p>
            <i>Data Only Greater</i> (/ˈdeɪtə ˈəʊnli ˈɡreɪtə/) started as the name
            of my blog after it came to me in a dream. I always thought it would
            make a snazzy business name and, after moving to Ireland in 2017, and
            accepting an offer to subcontract for Sandia National Labs, I registered
            Data Only Greater as my trading name.
          </p>
          <p>
            I've been in business for over five years now and had the
            opportunity to work with Sandia on DTOcean and other cool projects
            such as <Link href="https://github.com/sandialabs/WecOptTool"
              >WecOptTool</Link
            >, <Link href="https://github.com/WEC-Sim/WEC-Sim">WEC-Sim</Link> and
            <Link href="https://software.primre.org/">PRIMRE</Link>. For the
            last two years, I've also been working part time with <Link
              href="https://www.wave-venture.com/">Wave Venture</Link> on BlueBox.
          </p>
          <p>
            This website has also been created from scratch by me, using the
            <Link href="https://kit.svelte.dev/">SvelteKit</Link> javascript framework.
            If you would like me to make you a website or help you achieve your goals,
            then I'm always looking for new opportunities to expand my business.
            Get in touch using the form below!
          </p>
        </AchievementCard>
      </Carousel.Content>
      <Carousel.Previous
        class={touchDevice ? "hidden" : isxs ? "-left-9" : undefined} />
      <Carousel.Next
        class={touchDevice ? "hidden" : isxs ? "-right-9" : undefined} />
    </Carousel.Root>
  </div>
</FrontSection>
<FrontSection title="Contact">
  <ContactForm data={data.form} />
</FrontSection>
