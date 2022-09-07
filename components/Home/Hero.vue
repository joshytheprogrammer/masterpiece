<template>
  <div class="hero">
    <div class="content" :style="'background-image: url('+backgroundImage+');'">
      <div class="_pitch">
        <h1>Enjoy our <span>Masterpiece</span></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      backgroundImage: "",
      currentNo: 0
    }
  },
  mounted() {
    this.loadImages()
    window.addEventListener("resize", this.loadImages);

    setInterval(() => {
      this.doSlideShow()
    }, 5000)
  },
  methods: {
    doSlideShow() {
      if(this.currentNo > (this.images.length - 1)) { this.currentNo = 0}

      this.backgroundImage = this.images[this.currentNo]

      this.currentNo++
    },
    loadImages() {
      this.images = []

      let desktopImages = [
        "https://res.cloudinary.com/dsgvwxygr/image/upload/c_crop,h_968/v1662190088/masterpiece/MODO7364_hn0pra.jpg", "https://res.cloudinary.com/dsgvwxygr/image/upload/c_fill,h_1025/v1662457782/masterpiece/MODO7289_zxypmq.jpg"
      ]

      let mobileImages = [
        "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662543202/masterpiece/MODO7289_qqhhe6_1f1e80.jpg",
      ]

      this.testMobile() ? this.images = desktopImages : this.images = mobileImages
    },
    testMobile() {
      return window.innerWidth > 768
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.loadImages);
  },
}
</script>

<style lang="scss" scoped>
.hero {
  .content {
    padding: 1rem;
    // background-color: transparent;
    // background-image: radial-gradient(at center center, $secondary 0%, $d-secondary 100%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: $dark;
    object-fit: fill;
    height: 900px;
    max-width: 100%;
    color: $light;

    display: flex;
    flex-direction: column;
    justify-content: center;

    ._pitch {
      display: flex;
      flex-direction: column;
      justify-content: center;

      text-align: center;


      h1 {
        font-size: 5.125em;
        font-weight: bold;

        span {
          color: $secondary;

          text-shadow: 2px 3px 1px $dark;
        }
      }
    }
  }

  @media screen and (max-width: $m-large) {
    .content {
      ._pitch {
        height: 100%;

        h1 {
          font-size: 56px;
        }
      }
    }

  }

  @media screen and (max-width: $medium) {
    .content {
      display: block;

      ._img {
        display: none;
      }

      ._pitch {
        h1 {
          font-size: 48px;
        }
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
