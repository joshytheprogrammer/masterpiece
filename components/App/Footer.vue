<template>
  <footer>
    <div class="finisher">
      <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662566313/masterpiece/cleaned-bg-mp-logo_xwvneu.png" alt="">
      <NuxtLink to="/"><h2>Masterpiece</h2></NuxtLink>
      <p>These products are not suitable for persons younger than 18. Please enjoy responsibly.</p>
      <p style="display: none;">This website was created by <a href="https://www.joshytheprogrammer.com">joshytheprogrammer</a></p>
    </div>
    <div class="links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/gallery">Gallery</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <!-- <NuxtLink to="/find-us">Our locations</NuxtLink> -->
    </div>
    <div class="links">
      <NuxtLink to="/products/kubanah">Kubanah Whisky</NuxtLink>
      <NuxtLink to="/products/skirt/#rum">Skirt Cafe Rum</NuxtLink>
      <NuxtLink to="/products/skirt/#brandey">Skirt Blended Brandey</NuxtLink>
      <NuxtLink to="/products/skirt/#gin">Skirt Dry Gin</NuxtLink>
      <NuxtLink to="/products/rocklas">Rocklas Blended Whiskey</NuxtLink>
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
  justify-content: space-around;
  align-items: flex-end;

  .links {
    padding: 18px 0;

    a {
      padding: 8px 0;
      width: 100%;
      text-align: left;
      color: $light;
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
    align-items: center;
    text-align: center;
    color: $light;

    img {
      width: 80px;
      height: 80px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: inherit;

      h2 {
        padding: 1rem 0;
        font-size: 28px;
      }
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
      width: 100%;
      text-align: center;
      padding: 18px 0;
    }
  }
}
</style>
