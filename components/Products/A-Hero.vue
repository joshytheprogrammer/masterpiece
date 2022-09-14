<template>
  <div class="after-hero">
    <div class="notes">
      <h2>Some Interesting Notes</h2>

      <div class="features">
        <span class="key">Ingredients: </span> <span class="value">Treated Water, Ethanol, Caramel, Malt Flavour and Whisky Flavour</span>
        <span class="key">Aroma: </span> <span class="value">Guinness roast character subtly blended with African ginger, lemongrass and chilli.</span>
        <span class="key">Flavour: </span> <span class="value"> A refreshing blend of natural African Herbs and Spices; ginger, lemongrass, vanilla, cola nut and chilli extracts.</span>
        <span class="key">Palate: </span> <span class="value">Full rounded with the perfect balance of sweet leading to a spicy/ slight bitter finish.</span>
        <span class="key">ABV: </span> <span class="value">40%</span>
        <span class="key">Appearance: </span> <span class="value">A crisp black carbonated beer</span>
      </div>
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
