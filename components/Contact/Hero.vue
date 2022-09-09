<template>
  <div class="hero">
    <h1>Contact <span>Masterpiece</span></h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
  @include normal-hero-styles;

  background-image: url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80&h=500');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: $dark;
}
</style>
