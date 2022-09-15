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
      title: 'Skirt Rum | Masterpiece Flavoured Spirit Drink.',
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
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663254896/masterpiece/light-gradient_p8uix7.png",
      name: "Skirt Cafe Rum",
      pitch: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit necessitatibus exercitationem.",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quo odit commodi dolor quae cumque nesciunt magnam aspernatur? Eius error ratione ea? A at facilis deserunt! Ipsum quia quam impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quo odit commodi dolor quae cumque nesciunt magnam aspernatur? Eius error ratione ea? A at facilis deserunt! Ipsum quia quam impedit.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662651185/masterpiece/MODO7480-transformed_p30qym.png",
      features: {
        ingredients: '',
        flavour: '',
        palate: '',
        abv: '42%',
        app: ''
      }
    }
  },
}
</script>
