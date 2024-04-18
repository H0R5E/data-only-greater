<script lang="ts">
  export let href: string;
  let data: HTMLAnchorElement;
  $: getDownload = () => {
    if (!href.startsWith("data:application/octet-stream")) return;
    return data?.innerText;
  };
</script>

<a
  class="text-blue-600 visited:text-purple-600 hover:underline"
  {href}
  bind:this={data}
  download={getDownload()}>
  <slot />
</a>
