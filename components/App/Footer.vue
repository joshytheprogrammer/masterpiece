<template>
  <footer>
    <div class="finisher">
      <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662566313/masterpiece/cleaned-bg-mp-logo_xwvneu.png" alt="">
      <NuxtLink to="/#"><h2>M.P Masterpiece</h2></NuxtLink>
      <p>These products are not suitable for persons younger than 18. Please enjoy responsibly.</p>
      <p style="display: none;">This website was created by <a href="https://www.joshytheprogrammer.com">joshytheprogrammer</a></p>
    </div>
    <div class="links">
      <hr>
      <NuxtLink to="/#">Home</NuxtLink>
      <hr>
      <NuxtLink to="/about">About</NuxtLink>
      <hr>
      <NuxtLink to="/products">Products</NuxtLink>
      <hr>
      <NuxtLink to="/gallery">Gallery</NuxtLink>
      <hr>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <hr>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <hr>
    </div>
    <div class="links p">
      <NuxtLink to="/products/kubanah">Kubanah Whisky</NuxtLink>
      <NuxtLink to="/products/skirt-rum">Skirt Cafe Rum</NuxtLink>
      <NuxtLink to="/products/skirt-brandy">Skirt Blended Brandey</NuxtLink>
      <NuxtLink to="/products/skirt-gin">Skirt Dry Gin</NuxtLink>
      <NuxtLink to="/products/rocklas">Rocklas Blended Whisky</NuxtLink>
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

  hr {
    display: none;
  }

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
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 2rem;

    .links {
      width: 40%;

      a {
        padding: 8px 0;
        width: 100%;
        text-align: left;
      }
    }

    .links.p {

      a {
        text-align: right;
      }
      width: 60%;
    }

    .finisher {
      width: 100%;
      text-align: center;
      padding: 18px 1rem;
    }
  }
}
</style>
