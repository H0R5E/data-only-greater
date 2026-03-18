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
  interface Props {
    posts?: Post[];
  }

  let { posts = [] }: Props = $props();
</script>

<div class="flex w-full flex-col gap-3">
  {#each posts as post}
    <div class="flex justify-center">
      <Card.Root
        class="mx-2 max-w-150 min-w-75 flex-1 border border-black bg-stone-200">
        <Card.Header>
          <Card.Title
            ><a href="/blog/post/{post.slug}">{post.title}</a></Card.Title>
          {#if post.excerpt}
            <Card.Description class="text-black"
              >{post.excerpt}</Card.Description>
          {/if}
        </Card.Header>
        {#if post.coverImage}
          <Card.Content>
            <a href="/blog/post/{post.slug}">
              <img
                class="mx-auto rounded border border-stone-500"
                src={post.coverImage}
                alt="" />
            </a>
          </Card.Content>
        {/if}
        <Card.Footer>
          <div
            class="text-muted-foreground flex gap-2 self-center rounded-full border border-stone-500 bg-white px-4 py-1 text-xs">
            Post date: {post.date}
          </div>
        </Card.Footer>
      </Card.Root>
    </div>
  {/each}
</div>
