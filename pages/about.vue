<template>
  <div class="about">
    <Hero />
    <Company />
    <Brewing />
    <Mission />
  </div>
</template>

<script>
import Hero from "../components/About/Hero.vue"
import Company from "../components/About/Company.vue"
import Brewing from "../components/About/Brewing.vue"
import Mission from "../components/About/Mission.vue"

export default {
  components: {
    Hero,
    Company,
    Brewing,
    Mission
  }
}
</script>

<style>

</style>
