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

<div class="flex max-w-[600px] flex-col gap-3">
  {#each posts as post}
    <Card.Root class="">
      <Card.Header>
        <Card.Title><a href="/blog/{post.slug}">{post.title}</a></Card.Title>
        <Card.Description>{post.excerpt}</Card.Description>
      </Card.Header>
      <Card.Content>
        <a href="/blog/{post.slug}">
          <img class="rounded-lg" src={post.coverImage} alt="" />
        </a>
      </Card.Content>
      <Card.Footer>
        <div
          class="flex gap-2 self-center rounded-full border px-4 py-1 text-xs text-muted-foreground">
          Post date: {post.date}
        </div>
      </Card.Footer>
    </Card.Root>
  {/each}
</div>
