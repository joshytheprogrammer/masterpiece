<template>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="_first">
        <h2> {{product.title}} </h2>
        <p> {{product.desc}} </p>
        <NuxtLink :to="'/products'+product.slug">Learn More</NuxtLink>
      </div>
      <div class="_img">
        <img width="586px" :src="product.thumbnail" :alt="product.title">
      </div>
      <div class="_links">
        <NuxtLink to="/products">See all our products</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 0,
          title: 'Skirt Rum',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quidem ipsa cum, vel veniam totam! Iusto officia dolorum quisquam quam?',
          thumbnail: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662462418/masterpiece/MODO7480-transformed_p30qym.png',
          slug: '/skirt-rum'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  display: block;
  padding: 0 1rem;

  .product {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ._first {
      width: 400px;
      font-size: 20px;
      text-align: center;

      h2, p, a {
        padding-bottom: 24px;
      }

      h2 {
        font-weight: 900;
        font-size: 60px;

        color: $secondary;
        text-shadow: 1px 1px $light;
      }

      p {
        font-weight: 300;
        line-height: 24px;
      }

      a {
        display: block;
        color: $light;
        background: $secondary;
        width: 200px;
        height: 50px;
        padding: 0.9rem;
        margin: auto;
        text-decoration: none;
      }
    }

    ._links {
      a {
        font-size: 20px;
        color: $light;
      }
    }
  }
}
</style>
