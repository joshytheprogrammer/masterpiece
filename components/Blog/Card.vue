<template>
  <div class="card">
    <SanityImage
      :asset-id="post.mainImage.asset._ref"
      class="_img"
      auto="format"
      bg="000"
      w="1980"
      h="1080"
    />
    <div class="_body">
      <h5 class="_title"><NuxtLink :to="'/blog/'+post.slug.current">{{post.title}}</NuxtLink></h5>
      <p class="pubDate">Published: <span>{{ formattedPublishDate }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    formattedPublishDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(this.post._createdAt).toLocaleString(undefined, options);
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: block;
  margin-bottom: 12px;
  border: 1px solid $dark;
  border-radius: 8px;

  ._img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  ._body {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.5rem 0 0.5rem;
    transition: all 0.5s ease;

    ._title {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;

      a {
        text-decoration: none;
        color: $dark;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .pubDate {
      font-size: 12px;
      font-weight: 400;
      margin: 0.8rem 0;

      span {
        font-style: italic;
        font-weight: 400;
      }
    }
  }
}
</style>
