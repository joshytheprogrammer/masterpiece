<template>
  <div class="p-hero" :style="'background-image: url('+bgImg+');'" >
    <div class="_pitch">
      <h1>{{name}}</h1>
      <p>{{pitch}}</p>
    </div>
    <div class="_img">
      <img :src="image" :alt="'Masterpiece - '+ name">
    </div>
  </div>
</template>

<script>
export default {
  props: ["bgImg", "name", "pitch", "image"]
}
</script>

<style lang="scss" scoped>
.p-hero {
  padding: 1rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: $dark;
  height: 900px;
  max-width: 100%;

  display: flex;
  justify-content: space-around;
  

  ._pitch {

  }

  ._img {

  }
}
</style>
