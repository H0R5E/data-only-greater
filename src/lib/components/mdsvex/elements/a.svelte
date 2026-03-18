<script lang="ts">
  interface Props {
    href: string;
    children?: import('svelte').Snippet;
  }

  let { href, children }: Props = $props();
  let data: HTMLAnchorElement = $state();
  let getDownload = $derived(() => {
    if (!href.startsWith("data:application/octet-stream")) return;
    return data?.innerText;
  });
</script>

<a
  class="text-blue-600 visited:text-purple-600 hover:underline"
  {href}
  bind:this={data}
  download={getDownload()}>
  {@render children?.()}
</a>
