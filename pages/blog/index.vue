<template>
  <div>
    <BlogHero />
    <div v-for="post in posts" :key="post._id" class="content">
      <BlogCard :post="post" />
      <!-- <SanityContent :blocks="post.body" /> -->
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "post"]{ _id, mainImage, slug, title, _createdAt}`

export default {
  async asyncData({ $sanity }) {
    try {
      const posts = await $sanity.fetch(query)
      return { posts }
    } catch (error) {
      console.error('Error fetching posts:', error)
      return { posts: [] }
    }
  },
}

</script>

<style lang="scss" scoped>
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
