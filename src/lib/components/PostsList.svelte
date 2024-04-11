<script lang="ts">
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

<ul>
  {#each posts as post}
    <li>
      <article>
        <a href="/blog/{post.slug}">
          <img
            src={post.coverImage}
            alt=""
            width={post.coverWidth}
            height={post.coverHeight}
            style="ratio: {post.coverWidth} / {post.coverHeight}" />
          <h2>
            {post.title}
          </h2>
        </a>
      </article>

      <p>{post.excerpt}</p>
    </li>
  {/each}
</ul>
