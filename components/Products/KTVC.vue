<template>
  <div class="tvc">
    <div class="header">
      <h2>KUBANAH TVC</h2>
    </div>
    <video class="ktvc" playsinline controls poster="https://res.cloudinary.com/dsgvwxygr/image/upload/v1667051210/masterpiece/127A9835_r0thml.jpg">
      <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1663245060/masterpiece/Kubanah_Whisky_Advert_with_first_ending.MP4_3_zjfx0e.webm" type="video/webm">
      <source src="https://res.cloudinary.com/dsgvwxygr/video/upload/v1663245060/masterpiece/Kubanah_Whisky_Advert_with_first_ending.MP4_3_zjfx0e.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tvc {
  display: block;
  margin: 2rem 0;

  .header {
    width: 100%;
    padding: 20px 1rem;
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

  video {
    margin: 1rem 0;
    display: block;
    margin: auto;
    width: 720px;
  }
}
</style>
