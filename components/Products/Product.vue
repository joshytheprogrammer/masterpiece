<template>
  <div class="products">
    <div class="product" :style="'background-image: url('+product.bgImg+');'" v-for="product in products" :key="product.id">
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
          bgImg: 'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_700/v1663079069/masterpiece/gradient-1_njsgde.png',
          slug: '/products/kubanah'
        },
        {
          id: 1,
          name: 'Skirt Cafe Rum',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662651185/masterpiece/MODO7480-transformed_p30qym.png',
          bgImg: 'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_700/v1663079665/masterpiece/gradient-3_jyvdtn.png',
          slug: '/products/skirt#rum'
        },
        {
          id: 2,
          name: 'Rocklas Blended Whisky',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985129/masterpiece/Rocklas-trans_richha.png',
          bgImg: 'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_700/v1663079498/masterpiece/gradient-2_utipr2.png',
          slug: '/products/rocklas'
        },
        {
          id: 3,
          name: 'Skirt Blended Brandy',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985746/masterpiece/skirt-blended-brandy_t7f603.png',
          bgImg: 'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_700/v1663079763/masterpiece/gradient-4_u24fup.png',
          slug: '/products/skirt#brandy'
        },
        {
          id: 4,
          name: 'Skirt Dry Gin',
          img: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662987025/masterpiece/MODO7490-transformed_i2ef7m.png',
          bgImg: 'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_700/v1663079973/masterpiece/gradient-5_k1oya8.png',
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
    background-repeat: no-repeat;

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
