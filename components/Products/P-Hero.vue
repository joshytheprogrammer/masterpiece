<template>
  <div class="p-hero" :style="'background-image: url('+bgImg+');'" >

  </div>
</template>

<script>
export default {
  props: ["bgImg"]
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


}
</style>
