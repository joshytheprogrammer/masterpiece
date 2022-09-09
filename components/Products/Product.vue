<template>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <img :src="product.img" :alt="product.name">
      <NuxtLink :to="product.slug"><h2>{{product.name}}</h2></NuxtLink>
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
          name: 'Kubanah Whiskey',
          img: 'https://www.guinness.com/media/1576/originalbottle_bg1_resized_1600-h.jpg?quality=75&format=webp&width=1920&upscale=false',
          slug: '/products/kubanah'
        },
        {
          id: 1,
          name: 'Rocklas Blended Whisky',
          img: 'https://www.guinness.com/media/1536/guinesssmooth2_spritz2_resized_1600-h.jpg?quality=75&format=webp&width=1920&upscale=false',
          slug: '/products/rocklas'
        },
        {
          id: 2,
          name: 'Skirt Cafe Rum',
          img: 'https://www.guinness.com/media/1530/africaspecial_resized_1600-h.jpg?quality=75&format=webp&width=1920&upscale=false',
          slug: '/products/skirt#rum'
        },
        {
          id: 3,
          name: 'Skirt Blended Brandy',
          img: 'https://www.guinness.com/media/1576/originalbottle_bg1_resized_1600-h.jpg?quality=75&format=webp&width=1920&upscale=false',
          slug: '/products/skirt#brandy'
        },
        {
          id: 4,
          name: 'Skirt Dry Gin',
          img: 'https://www.guinness.com/media/1536/guinesssmooth2_spritz2_resized_1600-h.jpg?quality=75&format=webp&width=1920&upscale=false',
          slug: '/products/skirt#gin'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  background: $dark;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  .product {
    padding: 1rem 0;

    img {
      width: 100%;
      height: 628px;
      object-fit: cover;
      transition: scale 0.5s ease;

      &:hover {
        scale: 1.1;
      }
    }

    a {
      text-decoration: none;
      color: $light;

      h2 {
        color: inherit;
        text-align: center;
        text-transform: uppercase;
        padding: 2rem 0;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: $medium) {
    display: block;

    .product {
      img {
        height: 100%;
      }
    }
  }
}
</style>
