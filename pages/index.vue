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
  },
  head() {
    return {
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "whiskey stores in Lagos, whiskey shop Lekki Lagos, beer store Lagos, alcohol store Lagos, spirit drink delivery Lagos, Kubanah Whisky store Lagos, wine shop Lagos, beer store Lagos, alcohol store Lagos, whisky prices Nigeria, whiskey drink delivery lagos Nigeria,spirit drink shop Lagos, whisky store Lagos, whisky shop Lagos, Kubanah Whisky store Lagos, whiskey shop Lagos Kubanah Whisky delivery Lagos, alcohol delivery Lagos, online whisky delivery Lagos, Kubanah whisky store near me Kubanah Whisky store Lagos, Kubanah Whisky shop Lagos, beer store Lagos, alcohol store Lagos, beer prices Nigeria Kubanah Whisky store Lagos, wine shop Lagos, beer store Lagos, alcohol store Lagos, Kubanah Whisky store near me Kubanah Whisky Nigeria, Kubanah Whisky price, Kubanah Whisky Lagos, Kubanah Whisky price in Nigeria, Kubanah Whiskey price in Lagos, Whiskey price in Ogun, Price of Whiskey in Imo whiskey shop Lagos, beer store Lagos, alcohol store Lagos, whisky prices Nigeria",
        },
        // Other meta tags as needed
      ],
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
