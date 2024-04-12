<script lang="ts">
  function scrollIntoView({ target }: { target: HTMLLinkElement }) {
    const href = target.getAttribute("href");
    if (!href) return;
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
</script>

<div
  class="top-0 flex max-w-[640px] gap-3 rounded-full border border-slate-600 bg-stone-200 px-5 py-2">
  <a href="#about" class="text-lg">About</a>
  <a href="#skills" class="text-lg">Skills</a>
  <a href="#achievements" class="text-lg">Achievements</a>
  <a href="#contact" class="text-lg">Contact</a>
</div>
