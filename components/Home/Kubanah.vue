<template>
  <div class="kubanah">
    <div class="product">
      <div class="_vid">
        <video playsinline autoplay muted controls id="vbg">
          <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1663245060/masterpiece/Kubanah_Whisky_Advert_with_first_ending.MP4_3_zjfx0e.webm" type="video/webm">
          <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1663245060/masterpiece/Kubanah_Whisky_Advert_with_first_ending.MP4_3_zjfx0e.mp4" type="video/mp4">
        </video>
      </div>
      <div class="_img">
        <!-- <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662546173/masterpiece/MODO7446-transformed_mae3nd.png" alt="Kubanah Whiskey"> -->
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
    // display: flex;
    // justify-content: space-around;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;

    ._vid {
      #vbg {
        width: 100%;
      }
    }

    ._img {
      display: none;
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
      // width: 500px;
      padding: 0 1rem;
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
      display: block;

      ._vid {
        display: flex;
        justify-content: center;

        #vbg {
          width: 90%;
        }
      }

      ._first {
        width: 100%;
        padding-top: 2rem;
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

      ._vid {
        #vbg {
          width: 100%;
        }
      }

      ._img {
        max-width: 100%;

        img {
          height: 428px;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
