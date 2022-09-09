<template>
  <div class="hero">
    <h1>About this <span>Masterpiece</span></h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
  height: 400px;
  background: radial-gradient(at center center, $trans-dark 0%, $dark 100%);

  color: $light;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    padding: 1rem;
    font-size: 48px;
    font-weight: 400;
    text-shadow: 2px 3px 1px $trans-dark;

    span {
      color: $secondary;
      text-shadow: 2px 3px 1px $trans-dark;
    }
  }

  @media screen and (max-width: $medium){
    height: 500px;
  }

}
</style>
