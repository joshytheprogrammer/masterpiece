<template>
  <div class="home">
    <Hero />
    <Product />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero.vue"
import Product from "../components/Home/Skirt.vue"

export default {
  components: {
    Hero,
    Product
  }
}
</script>

<style lang="scss" scoped>

</style>
