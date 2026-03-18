<script lang="ts">
  interface Props {
    href: string;
    children?: import('svelte').Snippet;
  }

  let { href, children }: Props = $props();
</script>

<a class="text-blue-600 visited:text-purple-600 hover:underline" {href}>
  {@render children?.()}
</a>
