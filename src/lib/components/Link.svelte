<script lang="ts">
  export let href: string
</script>

<a class="text-blue-600 visited:text-purple-600 hover:underline" {href}>
  <slot />
</a>
