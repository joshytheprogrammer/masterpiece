<template>
  <div>
    <BlogHero />
    <div class="loading" v-show="!posts.length">
      <AppLoader />
    </div>
    <div v-for="post in posts" :key="post._id" class="content">
      <BlogCard :post="post" />
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "post"]{ _id, mainImage, slug, title, _createdAt}`

export default {
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    try {
      const postsO = await this.$sanity.fetch(query)
      this.posts = postsO
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  },
}

</script>

<style lang="scss" scoped>
.loading {
  margin: 2rem auto;
}
.content {
  width: 90%;
  margin: 1rem auto;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3,1fr);

  @media screen and (max-width: $medium) {
    width: 100%;
    padding: 0.9rem;
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (max-width: $s-medium) {
    display: block;
  }
}
</style>
