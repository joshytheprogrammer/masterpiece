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
      title: 'Rocklas | Masterpiece Finest Quality Brandy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  data() {
    return {
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663079498/masterpiece/gradient-2_utipr2.png",
      name: "Rocklas Blended Whisky",
      pitch: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit necessitatibus exercitationem.",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quo odit commodi dolor quae cumque nesciunt magnam aspernatur? Eius error ratione ea? A at facilis deserunt! Ipsum quia quam impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quo odit commodi dolor quae cumque nesciunt magnam aspernatur? Eius error ratione ea? A at facilis deserunt! Ipsum quia quam impedit.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985129/masterpiece/Rocklas-trans_richha.png",
      features: {
        ingredients: ' ',
        aroma: ' ',
        flavour: ' ',
        palate: ' ',
        abv: '42%',
        app: ' '
      }
    }
  },
}
</script>
