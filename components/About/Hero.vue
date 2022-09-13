<template>
  <div class="hero">
    <h1>The making of a <span>Masterpiece</span></h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
  @include normal-hero-styles;
  background: radial-gradient(at center center, $trans-dark 0%, $dark 100%);

  h1 {
    text-shadow: 2px 3px 1px $trans-dark;

    span {
      text-shadow: 2px 3px 1px $trans-dark;
    }
  }
}
</style>
