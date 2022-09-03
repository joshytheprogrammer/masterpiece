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
  background: $dark;

  .body {
    overflow-x: hidden;
    margin-top: 100px;
    min-height: 100vh;
  }
}
</style>
