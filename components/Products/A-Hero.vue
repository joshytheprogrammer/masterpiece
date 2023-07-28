<template>
  <div class="after-hero">
    <!-- <div class="notes">
      <h2>Some Interesting Notes</h2>
      <div class="features">
        <span class="key">Ingredients: </span> <span class="value">{{features.ingredients}}</span>
        <span class="key">Aroma: </span> <span class="value"> {{features.aroma}} </span>
        <span class="key">Flavour: </span> <span class="value"> {{features.flavour}} </span>
        <span class="key">Palate: </span> <span class="value"> {{features.palate}} </span>
        <span class="key">ABV: </span> <span class="value"> {{features.abv}} </span>
        <span class="key">Appearance: </span> <span class="value"> {{features.app}} </span>
      </div>
    </div> -->
    <div class="notes" data-v-6de2c6f8>
      <h2 data-v-6de2c6f8>Connect with us on</h2>
      <div class="features" data-v-6de2c6f8>
        <span class="key" data-v-6de2c6f8>Facebook: </span>
        <a href="https://www.facebook.com/kubanahwhisky" class="value" data-v-6de2c6f8 style="text-decoration: none; color:white;" target="_blank">https://www.facebook.com/kubanahwhisky</a>
        <span class="key" data-v-6de2c6f8>Instagram: </span>
        <a href="https://www.instagram.com/kubanahwhisky" class="value" style="text-decoration: none; color:white;" data-v-6de2c6f8 target="_blank"> @kubanahwhisky </a>
        <span class="key" data-v-6de2c6f8>Twitter: </span>
        <a href="https://www.twitter.com/kubanahwhisky" class="value" data-v-6de2c6f8 style="text-decoration: none; color:white;" target="_blank"> @kubanahwhisky </a>
      </div>
    </div>
    <div class="about">
      <h2>About {{name}} </h2>
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["features", "name", "desc"]
  // props: ["name", "desc"]
}
</script>

<style lang="scss" scoped>
.after-hero {
  display: grid;
  gap: 2rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  .notes {
    width: 100%;
    padding: 5rem;
    background: $dark;

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
        color: $secondary;
        font-weight: 500;
        text-transform: uppercase;
      }

      .value {
        display: block;
        padding-bottom: 1rem;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
      }
    }
  }

  .about {
    padding: 3rem;

    h2 {
      padding: 1rem 0;
      font-size: 48px;
      font-weight: 500;
      color: $secondary;
    }

    p {
      padding: 0.6rem 0;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
    }
  }

  @media screen and (max-width: $medium){
    display: block;
    // text-align: center;

    .notes {
      padding: 1rem;
    }

    .about {
      padding: 1rem;

      h2 {
        font-size: 36px;
      }
    }

  }
}
</style>
