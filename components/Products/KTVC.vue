<template>
  <div class="tvc">
    <div class="header">
      <h2>KUBANAH TVC</h2>
    </div>
    <div class="bgVid">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tvc {
  display: block;

  .header {
    width: 100%;
    padding: 40px 1rem;
    background: $light;
    color: $secondary;
    border-bottom: 1px solid $dark;
    text-align: center;

    h2 {
      font-size: 3.75rem;
      font-weight: 500;
    }

    @media screen and (max-width: $medium) {
      h2 {
        font-size: 28px;
      }
    }

    @media screen and (max-width: $small) {
      h2 {
        font-size: 24px;
      }
    }
  }
}
</style>
