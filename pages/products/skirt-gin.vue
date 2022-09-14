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
      title: 'Skirt Dry Gin | Masterpiece Quality Taste',
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
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1980/v1663079973/masterpiece/gradient-5_k1oya8.png",
      name: "Skirt Dry Gin",
      pitch: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, facilis qui. Eius impedit sit suscipit fugiat, sunt perspiciatis necessitatibus praesentium.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662987025/masterpiece/MODO7490-transformed_i2ef7m.png"
    }
  },
}
</script>
