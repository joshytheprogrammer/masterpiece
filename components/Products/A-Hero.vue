<template>
  <div class="after-hero">
    <div class="notes">
      <h2>Some Interesting Notes</h2>
    </div>
    <div class="about">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.after-hero {
  display: grid;
  grid-template-columns: 2fr 1fr;

  .notes {
    padding: 1rem;
    background: $trans-dark;


    h2 {
      padding: 1rem 0;
      font-size: 48px;
      font-weight: 400;
      color: $secondary;
    }
  }
}
</style>
