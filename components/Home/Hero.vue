<template>
  <div class="hero">
    <div class="content" :style="'background-image: url('+backgroundImage+');'" @click="doSlideShow">
      <div class="_pitch">
        <h1>Experience the <span>Masterpiece</span></h1>
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
      currentNo: 0,
      width: 720,
    }
  },
  mounted() {
    this.loadImages()
    this.doSlideShow()

    setInterval(() => {
      this.doSlideShow()
    }, 10000)

    window.addEventListener("resize", this.loadImages);
  },
  methods: {
    doSlideShow() {
      if(this.currentNo > (this.images.length - 1)) { this.currentNo = 0 }

      this.backgroundImage = this.images[this.currentNo]

      this.currentNo++
    },
    nextImage() {
      this.currentNo++
    },
    loadImages() {
      // Call functions
      this.checkMobileWidth()

      this.images = []

      let desktopImages = [
        "https://res.cloudinary.com/dsgvwxygr/image/upload/c_fill,h_1220/v1662190088/masterpiece/MODO7364_hn0pra.jpg",
        "https://res.cloudinary.com/dsgvwxygr/image/upload/c_fill,h_1220/v1662457782/masterpiece/MODO7289_zxypmq.jpg",
        "https://res.cloudinary.com/dsgvwxygr/image/upload/c_fill,h_1220/v1667056438/masterpiece/bg-img-3_go8spm.jpg",
      ]

      let mobileImages = [
        'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,w_'+this.width+'/v1662996191/masterpiece/MODO6730_ppsl35.jpg',
        'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,w_'+this.width+'/v1662998045/masterpiece/127A0034_b3bwv2.jpg',
        'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,w_'+this.width+'/v1662995053/masterpiece/MODO6477_twchpy.jpg',
        'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,w_'+this.width+'/v1663252359/masterpiece/127A0078_bxzowj.jpg',
        'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,w_'+this.width+'/v1662995052/masterpiece/MODO6404_jpndzn.jpg',
        'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,w_'+this.width+'/v1662995052/masterpiece/MODO6333_nzytbt.jpg',
        'https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,w_'+this.width+'/v1662997496/masterpiece/MODO6694_emtcne.jpg'
      ]

      this.testMobile() ? this.images = desktopImages : this.images = mobileImages
    },
    testMobile() {
      return window.innerWidth > 768
    },
    checkMobileWidth() {
      this.width = window.innerWidth + 10
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
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: $dark;
    // background-position: center;
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
        font-size: 5vw;
        font-weight: 900;
        text-shadow: 2px 3px 1px $dark;

        span {
          color: $secondary;

          text-shadow: 2px 3px 1px $dark;
        }
      }
    }
  }

  @media screen and (max-width: $m-large) {
    .content {
      height: 570px;

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
          color: $light;

          text-shadow: 2px 3px 1px $dark;
          font-size: 46px;
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
