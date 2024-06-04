<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";

  interface Post {
    slug: string;
    coverImage: string;
    coverWidth: string;
    coverHeight: string;
    title: string;
    excerpt: string;
    date: string;
  }
  export let posts: Post[] = [];
</script>

<div class="flex w-full flex-col gap-3">
  {#each posts as post}
    <div class="flex justify-center">
      <Card.Root
        class="mx-2 min-w-[300px] max-w-[600px] flex-1 border border-black bg-stone-200">
        <Card.Header>
          <Card.Title
            ><a href="/blog/post/{post.slug}">{post.title}</a></Card.Title>
          {#if post.excerpt}
            <Card.Description class="text-black"
              >{post.excerpt}</Card.Description>
          {/if}
        </Card.Header>
        <Card.Content>
          <a href="/blog/post/{post.slug}">
            <img
              class="mx-auto rounded border border-stone-500"
              src={post.coverImage}
              alt="" />
          </a>
        </Card.Content>
        <Card.Footer>
          <div
            class="flex gap-2 self-center rounded-full border border-stone-500 bg-white px-4 py-1 text-xs text-muted-foreground">
            Post date: {post.date}
          </div>
        </Card.Footer>
      </Card.Root>
    </div>
  {/each}
</div>
