<template>
  <section class="page">
    <div class="loading" v-show="article.length <= 0">
      <AppLoader />
    </div>
    <SanityImage
      v-if="article.mainImage"
      :asset-id="article.mainImage?.asset._ref"
      class="_img"
      auto="format"
      bg="000"
      w="2860"
      h="1080"
    />
    <article class="article">
      <h1 class="head">{{ article.title }}</h1>
      <SanityContent :blocks="article.body" />
      <NuxtLink class="blog go-back-btn" to="/blog">Go Back</NuxtLink>
    </article>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "post" && slug.current == $slug]{ _id, mainImage, title, body}[0]`

export default {
  data() {
    return {
      article: {}
    }
  },
  mounted(){
    this.$fetch()
  },
  async fetch() {
    try {
      const article = await this.$sanity.fetch(query, { slug: this.$route.params.slug });
      this.article = article;
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  },
}
</script>

<style lang="scss">
.page {
  .loading {
    margin: 5rem auto;
  }
  ._img {
    width: 100%;
    max-height: 500px;
  }

  .article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
    font-size: 1.125rem;
    line-height: 1.7777778;

    .head {
      font-size: 2.1428571em;
      line-height: 1.2;
      font-weight: 800;
      margin: 0 auto 0.8em;
      max-width: 65ch;
    }

    .desc {
      font-style: italic;
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.1rem;
      margin: 1.5rem 0;
    }

    a {
      color: $dark;
      transition: color 0.2s ease-in;
    }

    p code {
      background-color: $grey;
      border-radius: 3px;
      padding: 4px 6px;
    }

    pre {
      font-size: .99rem;
      font-weight: 400;
      color: #35495e;
      letter-spacing: 0;
      padding: 10px;
      border: 1px solid #dbdfe1;
      border-radius: 4px;
      background-color: #fcfcfc;
    }

    pre, code, samp {
      font-family: 'Roboto Mono';
    }

    ul {
      padding: 2rem;

      li {
        font-size: 1rem;
      }
    }

    ol {
      padding: 2rem;

      li {
        font-size: 1rem;
      }
    }

    img {
      width: 100%;
      max-height: 900px;
      border-radius: 4px;
    }

    .blog.go-back-btn {
      text-decoration: none;
      padding: 1rem 2rem;
      background: $secondary;
      color: $light;
      width: fit-content;
    }
  }
}
</style>
