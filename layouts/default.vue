<template>
  <div class="app">
    <div class="body">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app {
  background: $dark;

  .body {
    overflow-x: hidden;
    margin-top: 100px;
    min-height: 100vh;
  }
}
</style>
