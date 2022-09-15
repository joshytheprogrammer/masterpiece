<template>
  <div class="kubanah">
    <KHero />
    <!-- <PHero :bgImg="bgImg" :name="name" :pitch="pitch" :image="image" /> -->
    <AHero :features="features" :name="name" :desc="description" />
  </div>
</template>

<script>
import KHero from "../../components/Products/K-Hero.vue"
import PHero from "../../components/Products/P-Hero.vue"
import AHero from "../../components/Products/A-Hero.vue"

export default {
  components: {
    KHero,
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
      bgImg: "https://img.izismile.com/img/img6/20130214/1000/beautiful_animations_part_10_10.gif",
      name: "Kubanah Whisky",
      pitch: "A longstanding customer favorite, Kubanah Whisky is a special blended whisky with a fresh oak aroma.",
      description: "Kubanah Whisky flavoured spirit drink is a longstanding Whisky, with fresh oak aroma. Proven to be a market hot sale, customers find it very compatible with other mixtures. Customers like its soft finish, the classic bottle shape and the pure amber color. Being classic always means being simple. In a changing world it is simple and worthwhile to follow your heart and bravely go for your dream.",
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
