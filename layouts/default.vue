<template>
  <div class="app">
    <Nav />
    <div class="body">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/App/Nav.vue"
import Footer from "~/components/App/Footer.vue"
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss">
.app {
  background: $light;
  color: $dark;

  .body {
    overflow-x: hidden;
    min-height: 100vh;
  }
}
</style>
