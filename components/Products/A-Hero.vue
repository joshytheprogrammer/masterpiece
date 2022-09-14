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
  grid-template-columns: 1.5fr 2fr;

  .notes {
    padding: 1rem;
    background: $trans-dark;
    text-align: center;


    h2 {
      padding: 1rem 0;
      font-size: 40px;
      font-weight: 400;
      color: $secondary;
    }
  }
}
</style>
