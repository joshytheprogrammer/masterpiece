<template>
  <div class="gallery">
    <figure>
      <!-- <img src="../../assets/img/_DSC8878.png" alt=""> -->
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  figure {
    display: block;
    max-width: 400px;

    img {
      width: 300px;
    }
  }
}
</style>
