<template>
  <div class="products">
    <Hero />
    <Products />
  </div>
</template>

<script>
import Hero from "../components/Products/Hero.vue"
import Products from "../components/Products/Product.vue"

export default {
  components : {
    Hero,
    Products
  }
}
</script>

<style lang="scss" scoped>

</style>
