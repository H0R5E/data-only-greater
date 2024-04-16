<script context="module">
  import a from "../elements/a.svelte";
  import blockquote from "../elements/blockquote.svelte";
  import h2 from "../elements/h2.svelte";
  import h3 from "../elements/h3.svelte";
  import h4 from "../elements/h4.svelte";
  import h5 from "../elements/h5.svelte";
  import h6 from "../elements/h6.svelte";
  import p from "../elements/p.svelte";
  export { a, blockquote, h2, h3, h4, h5, h6, p };
</script>

<div
  id="hidden"
  class="overflow-auto rounded p-2 px-4 w-fit"
  style="display: none;" />
<slot />
