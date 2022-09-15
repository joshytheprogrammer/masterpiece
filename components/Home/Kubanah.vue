<template>
  <div class="kubanah">
    <div class="product">
      <div class="_img">
        <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662546173/masterpiece/MODO7446-transformed_mae3nd.png" alt="Kubanah Whiskey">
      </div>
      <div class="_first">
        <h2>Kubanah Whisky</h2>
        <p>Kubanah Whisky flavoured spirit drink is a longstanding Whisky, with fresh oak aroma. Proven to be a market hot sale, customers find it very compatible with other mixtures. Customers like its soft finish, the classic bottle shape and the pure amber color.</p>
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
  background-image: radial-gradient(at center center, $secondary 0%, $secondary 100%);

  .product {
    display: flex;
    justify-content: space-around;
    align-items: center;

    ._img {
      padding: 1rem;

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
      color: $dark;

      h2, p, a {
        padding-bottom: 24px;
      }

      h2 {
        font-weight: 900;
        font-size: 60px;

        color: $light;
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
        max-width: 100%;

        img {
          height: 428px;
          object-fit: contain;
        }
      }

      ._first {
        width: 100%;
      }
    }
  }
}
</style>
