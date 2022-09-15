<template>
  <div class="k-hero">
    <video playsinline autoplay muted loop poster="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996191/masterpiece/MODO6771_qfuybl.jpg" id="vbg">
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
.k-hero {
  // margin-top: 100px;

  #vbg {
    width: 100vw;
    object-fit: cover;
    height: 900px;
  }

  @media screen and (max-width: $medium){

  }
}
</style>
