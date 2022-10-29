<template>
  <div class="tvc">
    <div class="header">
      <h2>KUBANAH TVC</h2>
    </div>
    <div class="under">
      <div class="bgVid">
        <div class="transcript">
        <p></p>
      </div>
      <video class="ktvc" width="100%" playsinline controls poster="https://res.cloudinary.com/dsgvwxygr/image/upload/v1667051210/masterpiece/127A9835_r0thml.jpg">
          <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1663245060/masterpiece/Kubanah_Whisky_Advert_with_first_ending.MP4_3_zjfx0e.webm" type="video/webm">
          <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1663245060/masterpiece/Kubanah_Whisky_Advert_with_first_ending.MP4_3_zjfx0e.mp4" type="video/mp4">
        </video>
      </div>
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
  background: $light;

  .header {
    width: 100%;
    padding: 40px 1rem;
    color: $secondary;
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

  .under {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    .bgvid {

      video {

      }
    }
  }
}
</style>
