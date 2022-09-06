<template>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="_first">
        <h2> {{product.title}} </h2>
        <p> {{product.desc}} </p>
        <NuxtLink :to="'/products'+product.slug">Learn More</NuxtLink>
      </div>
      <div class="_img">
        <img width="400px" :src="product.thumbnail" :alt="product.title">
      </div>
      <div class="_links">
        <NuxtLink to="/products">See all our products</NuxtLink>
      </div>
      {{product}}
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

<style>

</style>
