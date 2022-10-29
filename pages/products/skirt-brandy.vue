<template>
  <div class="kubanah">
    <PHero :bgImg="bgImg" :name="name" :pitch="pitch" :image="image" />
    <AHero :features="features" :name="name" :desc="description" />
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
      title: 'Skirt Brandy | Masterpiece Quality Taste',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Skirt Brandy retains its old tradition of high quality and is blended with flavour.'
        }
      ]
    }
  },
  data() {
    return {
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663254784/masterpiece/yellow-gradient_e6qyth.png",
      name: "Skirt Blended Brandy",
      pitch: "The Masters Choice, quality taste brandy that brings the excellence of our land to your table.",
      description: "Skirt Brandy is distilled with fine spirits and aged by the traditional Skirt system in the oak butts. It retains its old tradition of high quality and is blended with flavour. It is a drink for all occasions whether on rocks, straight or mixed.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985746/masterpiece/skirt-blended-brandy_t7f603.png",
      features: {
        ingredients: 'Treated Water, Ethanol, Brandy Flavour and Caramel',
        aroma: 'Skirt Blended Brandy with fine spirits and oak butts',
        flavour: 'A refreshing blend of Brandy Flavour and Caramel for a sharp and refreshing taste',
        palate: 'Quality tasting blended brandy',
        abv: '40%',
        app: ''
      }
    }
  },
}
</script>
