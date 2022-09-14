<template>
  <div class="after-hero">
    <div class="notes">
      <h2>Some Interesting Notes</h2>

      <div class="features">
        <span class="key">Ingredients: </span> <span class="value">{{ingredients}}</span>
        <span class="key">Aroma: </span> <span class="value"> {{aroma}} </span>
        <span class="key">Flavour: </span> <span class="value"> {{flavour}} </span>
        <span class="key">Palate: </span> <span class="value"> {{palate}} </span>
        <span class="key">ABV: </span> <span class="value"> {{abv}} </span>
        <span class="key">Appearance: </span> <span class="value"> {{appearance}} </span>
      </div>
    </div>
    <div class="about">

    </div>
  </div>
</template>

<script>
export default {
  props: ["ingredients", "aroma", "flavour", "palate", "abv", "appearance"]
}
</script>

<style lang="scss" scoped>
.after-hero {
  display: grid;
  grid-template-columns: 1.5fr 2fr;

  .notes {
    padding: 2rem 1rem;
    background: $trans-dark;

    h2 {
      padding: 1rem 0;
      font-size: 32px;
      font-weight: 500;
      color: $secondary;
    }

    .features {
      padding: 1rem 0;
      color: $light;

      .key {
        display: block;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
      }

      .value {
        display: block;
        padding: 0.6rem 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
      }
    }
  }
}
</style>
