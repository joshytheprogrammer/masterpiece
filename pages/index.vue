<template>
  <div class="home">
    <Hero />
    <Product />
    <Kubanah />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero.vue"
import Product from "../components/Home/Skirt.vue"
import Kubanah from "../components/Home/Kubanah.vue"

export default {
  components: {
    Hero,
    Product,
    Kubanah
  }
}
</script>

<style lang="scss" scoped>

</style>
