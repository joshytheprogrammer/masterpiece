<template>
  <div class="products">
    <div class="product" style="background-image: url('https://res.cloudinary.com/dsgvwxygr/image/upload/v1663079069/masterpiece/gradient-1_njsgde.png');" v-for="product in products" :key="product.id">
      <NuxtLink :to="product.slug">
        <img :src="product.img" :alt="product.name">
        <h2>{{product.name}}</h2>
      </NuxtLink>
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
          name: 'Kubanah Whisky',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985594/masterpiece/kubana-transparent_1_peuioc.png',
          bgImg: '',
          slug: '/products/kubanah'
        },
        {
          id: 1,
          name: 'Rocklas Blended Whisky',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985129/masterpiece/Rocklas-trans_richha.png',
          bgImg: '',
          slug: '/products/rocklas'
        },
        {
          id: 2,
          name: 'Skirt Cafe Rum',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662651185/masterpiece/MODO7480-transformed_p30qym.png',
          bgImg: '',
          slug: '/products/skirt#rum'
        },
        {
          id: 3,
          name: 'Skirt Blended Brandy',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985746/masterpiece/skirt-blended-brandy_t7f603.png',
          bgImg: '',
          slug: '/products/skirt#brandy'
        },
        {
          id: 4,
          name: 'Skirt Dry Gin',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662987025/masterpiece/MODO7490-transformed_i2ef7m.png',
          bgImg: '',
          slug: '/products/skirt#gin'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  background: $light;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  max-width: 120rem;

  .product {
    width: 33.3%;
    padding: 1rem 0;

    a {
      text-decoration: none;
      color: $dark;

      h2 {
        color: inherit;
        text-align: center;
        text-transform: uppercase;
        padding: 2rem 0;
        cursor: pointer;
      }

      img {
        width: 100%;
        height: 496px;
        object-fit: contain;
        transition: scale 0.5s ease;
      }
    }
  }

  @media screen and (max-width: $m-large) {
    .product {
      width: 50%;
    }

  }

  @media screen and (max-width: $medium) {
    flex-direction: column;
    justify-content: center;

    .product {
      width: 100%;

      a {
        img {
          height: 428px;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
