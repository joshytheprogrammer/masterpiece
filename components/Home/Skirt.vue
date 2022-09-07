<template>
  <div class="skirt">
    <div class="product">
      <div data-aos="fade-right" class="_first">
        <h2> Skirt Rum </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quidem ipsa cum, vel veniam totam! Iusto officia dolorum quisquam quam? </p>
        <NuxtLink to="/products/skirt-rum">Learn More</NuxtLink>
      </div>
      <div class="_img">
        <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662544504/masterpiece/MODO7480-transformed_p30qym.png" alt="Skirt Rum">
      </div>
      <div data-aos="fade-left" class="_links">
        <NuxtLink to="/products">See all our products</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.skirt {
  display: block;
  padding: 2rem 1rem;

  .product {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ._first {
      width: 400px;
      font-size: 20px;
      text-align: center;

      h2, p, a {
        padding-bottom: 24px;
      }

      h2 {
        font-weight: 900;
        font-size: 60px;

        color: $secondary;
        text-shadow: 1px 1px $dark;
      }

      p {
        font-weight: 300;
      }

      a {
        display: block;
        color: $light;
        background: $secondary;
        width: fit-content;
        padding: 0.9rem 1.4rem;
        margin: auto;
        text-decoration: none;
      }
    }

    ._img {
      max-width: 528px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: scale 0.5s ease;

        &:hover {
          scale: 1.1;
        }
      }
    }

    ._links {
      padding: 1rem;
      font-weight: 700;
      font-size: 18px;

      a {
        display: block;
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (max-width: $m-large) {
    .product {
      ._first {
        width: 100%;
        font-size: 18px;

        h2 {
          font-size: 56px;
        }
      }

      ._img {
        max-width: 386px;
      }

      ._links {
        display: none;
      }
    }
  }

  @media screen and (max-width: $medium){
    .product {
      flex-direction: column-reverse;

      ._first {
        padding-bottom: 5rem;
      }

      ._img {
        img {
          height: 450px;
          object-fit: fill;
        }
      }
    }
  }
}
</style>
