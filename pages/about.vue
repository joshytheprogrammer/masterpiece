<template>
  <div class="about">
    <Hero />
    <Company />
    <Brewing />
  </div>
</template>

<script>
import Hero from "../components/About/Hero.vue"
import Company from "../components/About/Company.vue"
import Brewing from "../components/About/Brewing.vue"

export default {
  components: {
    Hero,
    Company,
    Brewing
  }
}
</script>

<style>

</style>
