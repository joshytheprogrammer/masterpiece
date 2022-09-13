<template>
  <div class="about">
    <Hero />
    <Company />
    <Brewing />
    <Mission />
    <Lineup />
  </div>
</template>

<script>
import Hero from "../components/About/Hero.vue"
import Company from "../components/About/Company.vue"
import Brewing from "../components/About/Brewing.vue"
import Mission from "../components/About/Mission.vue"
import Lineup from "../components/About/Lineup.vue"

export default {
  components: {
    Hero,
    Company,
    Brewing,
    Mission,
    Lineup
  }
}
</script>

<style>

</style>
