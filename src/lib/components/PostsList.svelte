<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";

  interface Post {
    slug: string;
    coverImage: string;
    coverWidth: string;
    coverHeight: string;
    title: string;
    excerpt: string;
  }
  export let posts: Post[] = [];
</script>

<div class="flex max-w-[640px] flex-col gap-2">
  {#each posts as post}
    <Card.Root class="">
      <Card.Header>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.excerpt}</Card.Description>
      </Card.Header>
      <Card.Content>
        <a href="/blog/{post.slug}">
          <img src={post.coverImage} alt="" />
        </a>
      </Card.Content>
    </Card.Root>
  {/each}
</div>
