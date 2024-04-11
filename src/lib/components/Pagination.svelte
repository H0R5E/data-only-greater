<script lang="ts">
  import { postsPerPage } from "$lib/config";

  export let currentPage: number;
  export let totalPosts: number;
  export let path = "/blog/page";

  let pagesAvailable: number;
  $: pagesAvailable = Math.ceil(totalPosts / postsPerPage);

  const isCurrentPage = (page: number) => page == currentPage;
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
  {#if pagesAvailable > 1}
    <nav aria-label="Pagination navigation">
      <ul>
        {#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page}
          <li>
            <a href="{path}/{page}" aria-current={isCurrentPage(page)}>
              <span>
                {#if isCurrentPage(page)}
                  Current page:
                {:else}
                  Go to page
                {/if}
              </span>
              {page}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
{/key}
