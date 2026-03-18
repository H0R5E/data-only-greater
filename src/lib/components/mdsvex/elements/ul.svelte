<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<ul class="ml-6 list-disc [&>li]:mt-2">
  {@render children?.()}
</ul>
