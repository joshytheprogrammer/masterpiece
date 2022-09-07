<template>
  <div class="kubanah">
    <div class="product">
      <div data-aos="fade-right" class="_img">
        <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662546173/masterpiece/MODO7446-transformed_mae3nd.png" alt="Kubanah Whiskey">
      </div>
      <div data-aos="fade-up-left" class="_first">
        <h2>Kubanah Whiskey</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit perspiciatis atque. Expedita, pariatur excepturi. Repellat, ducimus fuga cupiditate vero ullam, soluta deleniti saepe quae suscipit esse laborum nisi libero!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.kubanah {
  padding: 2rem 1rem;
  background-color: transparent;
  background-image: radial-gradient(at center center, $secondary 0%, $d-secondary 100%);

  .product {
    display: flex;
    justify-content: space-around;
    align-items: center;

    ._img {

      img {
        width: 100%;
        height: 628px;
        object-fit: cover;
        transition: scale 0.5s ease;

        &:hover {
          scale: 1.1;
        }
      }
    }

    ._first {
      width: 500px;
      font-size: 20px;
      text-align: center;
      color: $light;

      h2, p, a {
        padding-bottom: 24px;
      }

      h2 {
        font-weight: 900;
        font-size: 60px;

        color: inherit;
        text-shadow: 1px 1px $dark;
      }

      p {
        font-weight: 400;
        color: inherit;
      }
    }
  }

@media screen and (max-width: $m-large) {
    .product {
      ._first {
        font-size: 18px;

        h2 {
          font-size: 56px;
        }
      }

      ._img {
        max-width: 386px;
      }
    }
  }

  @media screen and (max-width: $medium){
    .product {
      flex-direction: column;

      ._img {
        img {
          height: 450px;
          object-fit: fill;
        }
      }

      ._first {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: $small){
    .product {
      ._img {
        img {
          height: auto;
        }
      }
    }
  }
}
</style>
