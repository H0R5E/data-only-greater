<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="rounded bg-slate-100 px-4 py-2">
  {@render children?.()}
</div>
