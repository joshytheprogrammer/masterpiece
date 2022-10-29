<template>
  <div class="our-company">
    <div class="copy">
      <h2>Our Company</h2>
      <p>M.P. Master Piece Ltd. was registered in Nigeria in the year 2012. Is one of the leading company that produces Alcoholic Beverages, as well-known brand such as Skirt Brandy, Kubanah Whisky and Many More. As a company, we wish to become the leading Nigerian alcoholic beverage producer and providing to our end consumers with an excellent result. Through consistency and quality in the products and services we offer we will strive to exceed customers expectations and thereby increase profitability. This is our vision as a company, we will do it justice. JOIN US!!!</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.our-company {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 0;

  .copy {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;

    h2 {
      font-size: 48px;
      font-weight: 700;
      padding: 1rem 0;
      color: $secondary;
    }

    p {
      font-size: 20px;
      line-height: 1.5;
    }
  }

  ._img {
    max-width: 50%;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: $medium){
    flex-direction: column-reverse;
    padding: 2.5rem 0;

    .copy h2 {
      padding-top: 0;
      font-size: 40px;
    }

    .copy p {
      font-size: 16px;
    }

    ._img {
      padding-bottom: 1rem;
      max-width: 100%;
    }
  }
}
</style>
