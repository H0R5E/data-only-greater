<script context="module">
  import a from "../elements/a.svelte";
  import blockquote from "../elements/blockquote.svelte";
  import h2 from "../elements/h2.svelte";
  import h3 from "../elements/h3.svelte";
  import h4 from "../elements/h4.svelte";
  import h5 from "../elements/h5.svelte";
  import h6 from "../elements/h6.svelte";
  import img from "../elements/img.svelte";
  import p from "../elements/p.svelte";
  export { a, blockquote, h2, h3, h4, h5, h6, img, p };
</script>

<slot />

<style>
  :global(pre.shiki) {
    overflow: auto;
    margin-left: 0.375rem; /* 6px */
    margin-right: 0.375rem; /* 6px */
    padding: 4px;
    padding-left: 8px;
    border-radius: 0.25rem;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem;
  }
</style>
