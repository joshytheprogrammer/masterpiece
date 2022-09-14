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
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  ._pitch {
    max-width: 33.3%;
    color: $light;

    h1 {
      margin-bottom: 1.875rem;
      font-size: 3.75rem;
      line-height: 4.375rem;
      letter-spacing: .0375rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.8;
    }
  }

  ._img {

    img {
      width: 100%;
      height: 598px;
      object-fit: contain;
    }
  }

  @media screen and (max-width: $medium){
    height: 600px;
    flex-direction: column-reverse;

    ._pitch {
      display: none;
      max-width: 100%;
    }

    ._img img {
      height: 428px;
    }
  }
}
</style>
