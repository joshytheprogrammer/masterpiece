<template>
  <footer>
    <div class="links">
      <NuxtLink to="/home">Home</NuxtLink>
      <NuxtLink to="/find-us">Our locations</NuxtLink>
      <NuxtLink to="/products/kubanah">Kubanah Whiskey</NuxtLink>
      <NuxtLink to="/products/skirt/#rum">Skirt Cafe Rum</NuxtLink>
      <NuxtLink to="/products/skirt/#brandey">Skirt Blended Brandey</NuxtLink>
      <NuxtLink to="/products/skirt/#gin">Skirt Dry Gin</NuxtLink>
      <NuxtLink to="/products/rocklas">Rocklas Blended Whiskey</NuxtLink>
    </div>
    <div class="finisher">
      <h2>Masterpiece</h2>
      <p>These products are not suitable for persons younger than 18. Please enjoy responsibly.</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background: $dark;
  padding: 1rem;

  display: flex;
  justify-content: space-between;

  .links {
    padding: 18px 0;

    a {
      width: fit-content;
      color: $light;
      padding: 6px 0;
      display: block;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .finisher {
    padding: 18px 1rem;
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: $light;

    h2 {
      padding: 1rem 0;
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: $medium) {
    display: block;

    .links {
      a {
        padding: 15px 0;
        width: 100%;
        text-align: center;
      }
    }

    .finisher {
      text-align: center;
      padding: 18px 0;
    }
  }
}
</style>
