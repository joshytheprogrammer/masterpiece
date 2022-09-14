<template>
  <div class="kubanah">
    <PHero :bgImg="bgImg" :name="name" :pitch="pitch" :image="image" />
  </div>
</template>

<script>
import PHero from "../../components/Products/P-Hero.vue"
export default {
  components: {
    PHero
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
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985746/masterpiece/skirt-blended-brandy_t7f603.png"
    }
  },
}
</script>
