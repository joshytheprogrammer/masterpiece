<template>
  <div class="tvc">
    <div class="header">
      <h2>KUBANAH TVC</h2>
    </div>
    <div class="bgVid">
      <!-- <video class="ktvc" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4">
      </video> -->
      <video class="ktvc" width="100%" height="700px" playsinline muted controls>
        <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1663245060/masterpiece/Kubanah_Whisky_Advert_with_first_ending.MP4_3_zjfx0e.webm" type="video/webm">
        <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1663245060/masterpiece/Kubanah_Whisky_Advert_with_first_ending.MP4_3_zjfx0e.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tvc {
  display: block;

  .header {
    width: 100%;
    padding: 40px 1rem;
    background: $light;
    color: $secondary;
    border-bottom: 1px solid $dark;
    text-align: center;

    h2 {
      font-size: 3.75rem;
      font-weight: 500;
    }

    @media screen and (max-width: $medium) {
      h2 {
        font-size: 28px;
      }
    }

    @media screen and (max-width: $small) {
      h2 {
        font-size: 24px;
      }
    }
  }

  .bgvid {
    .ktvc {
      width: 100%;
    }
  }
}
</style>
