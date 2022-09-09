<template>
  <div class="hero">
    <h1>We are a <span>Masterpiece</span></h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
  height: 400px;
  background-color: $dark;
  color: $light;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    padding: 1rem;
    font-size: 48px;
    font-weight: 400;
    text-shadow: 2px 3px 1px $dark;

    span {
      color: $secondary;
      text-shadow: 2px 3px 1px $dark;
    }
  }

  @media screen and (max-width: $medium){
    height: 500px;
  }

}
</style>
