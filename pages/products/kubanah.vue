<template>
  <div class="kubanah">
    <PHero :bgImg="bgImg" :name="name" :pitch="pitch" :image="image" />
    <AHero :features="features" />
  </div>
</template>

<script>
import PHero from "../../components/Products/P-Hero.vue"
import AHero from "../../components/Products/A-Hero.vue"

export default {
  components: {
    PHero,
    AHero
  },
  head() {
    return {
      title: 'Kubanah Whisky | Masterpiece Flavoured Spirit Drink.',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'A blend of grain spirits and scotch malts for exquisite smoothness. Masterpiece Flavoured Spirit Drink'
        }
      ]
    }
  },
  data() {
    return {
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663079069/masterpiece/gradient-1_njsgde.png",
      name: "Kubanah Whisky",
      pitch: "A longstanding customer favorite, Kubanah Whisky is a special blended whisky with a fresh oak aroma.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985594/masterpiece/kubana-transparent_1_peuioc.png",
      features: {
        ingredients: 'Treated Water, Ethanol, Caramel, Malt Flavour and Whisky Flavour',
        aroma: 'Kubanah blended whisky with fresh oak aroma.',
        flavour: 'A refreshing blend of grain spirits and scotch malts for exquisite smoothness.',
        palate: 'A Flavoured spirit drink.',
        abv: '42%',
        app: 'A pure amber colored whiskey.'
      }
    }
  },
}
</script>
