<template>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 0,
          name: 'guiness1',
          img: 'https://www.guinness.com/media/1576/originalbottle_bg1_resized_1600-h.jpg?quality=75&format=webp&width=1920&upscale=false'
        },
        {
          id: 1,
          name: 'guiness2',
          img: 'https://www.guinness.com/media/1536/guinesssmooth2_spritz2_resized_1600-h.jpg?quality=75&format=webp&width=1920&upscale=false'
        },
        {
          id: 2,
          name: 'guiness3',
          img: 'https://www.guinness.com/media/1530/africaspecial_resized_1600-h.jpg?quality=75&format=webp&width=1920&upscale=false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  background: $dark;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
</style>
