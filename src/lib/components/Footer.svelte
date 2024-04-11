<script>
  import { siteAuthor } from "$lib/config";
  import NavItems from "./NavItems.svelte";
</script>

<footer class="flex justify-between bg-orange-400">
  <nav>
    <ul>
      <li>
        <a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
      </li>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </nav>
  <nav>
    <NavItems />
  </nav>

  <p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>
