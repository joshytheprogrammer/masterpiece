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
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663080559/masterpiece/gradient-4_talend.png",
      name: "Skirt Blended Brandy",
      pitch: "Skirt Blended Brandy us distilled with fine spirits and aged by traditional skirt system in the oak butts.",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quo odit commodi dolor quae cumque nesciunt magnam aspernatur? Eius error ratione ea? A at facilis deserunt! Ipsum quia quam impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quo odit commodi dolor quae cumque nesciunt magnam aspernatur? Eius error ratione ea? A at facilis deserunt! Ipsum quia quam impedit.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985746/masterpiece/skirt-blended-brandy_t7f603.png",
      features: {
        ingredients: '',
        flavour: '',
        palate: '',
        abv: '40%',
        app: ''
      }
    }
  },
}
</script>
