<template>
  <div class="hero">
    <div class="content">
      <div class="_img">
        <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662190088/masterpiece/MODO7364_hn0pra.jpg" alt="hero-img">
      </div>
      <div class="_pitch">
        <h1>Masterpiece</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id cum numquam nulla commodi quisquam maxime quis, dignissimos nesciunt eius est non fugiat, nam laboriosam, qui ipsa quaerat repellendus vel voluptatum?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
  .content {
    // border: 1px solid $light;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 1rem;

    ._img {
      display: block;

      img {
        max-width: 100%;
        object-fit: contain;
        // border: 1px solid $light;
      }
    }

    ._pitch {
      display: flex;
      flex-direction: column;
      justify-content: center;

      text-align: center;

      padding: 1rem;

      h1, p {
        padding: 1rem 0;
      }

      h1 {
        font-size: 60px;
        font-weight: bold;
      }

      p {
        font-size: 20px;
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: $m-large) {
    .content {
      ._pitch {
        height: 100%;

        h1 {
          font-size: 48px;
        }

        p {
          font-size: 16px;
        }
      }
    }

  }

  @media screen and (max-width: $medium) {
    .content {
      display: block;
      background-color: $light;
      background-image: url('https://res.cloudinary.com/dsgvwxygr/image/upload/c_fill,h_600,w_1080/v1662190088/masterpiece/MODO7364_hn0pra.jpg');
      background-attachment: fixed;
      background-repeat: no-repeat;
      object-fit: contain;
      height: 500px;

      ._img {
        display: none;
      }
    }
  }

  @media screen and (max-width: $small) {
    .content {
      background-image: url('https://res.cloudinary.com/dsgvwxygr/image/upload/c_fill,h_900,w_500/v1662190815/masterpiece/MODO7289_qqhhe6.webp');
    }
  }
}
</style>
