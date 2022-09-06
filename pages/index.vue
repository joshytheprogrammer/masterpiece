<template>
  <div class="home">
    <Hero />
    <Products />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero.vue"
import Products from "../components/Home/Products.vue"

export default {
  components: {
    Hero,
    Products
  }
}
</script>

<style lang="scss" scoped>

</style>
