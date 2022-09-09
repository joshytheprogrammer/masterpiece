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
  @include normal-hero-styles;

  background: radial-gradient(at center center, $light 0%, $dark 100%);
}
</style>
