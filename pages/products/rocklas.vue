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
      title: 'Rocklas | Masterpiece Finest Quality Brandy',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
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
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985129/masterpiece/Rocklas-trans_richha.png"
    }
  },
}
</script>
