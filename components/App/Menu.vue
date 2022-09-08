<template>
  <div class="links">
    <!-- Make sure to use css to differentiate between mobile and  -->
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/products">Products</NuxtLink>
    <NuxtLink to="/gallery">Gallery</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.links {

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: $light;
    cursor: pointer;

    font-weight: 400;
    font-size: 16px;
    transition: font .5s ease-in-out;

    &:hover {
      text-decoration: underline;
      text-decoration-color: $secondary;
      text-underline-offset: 9px;
    }

    &.nuxt-link-exact-active {
      text-decoration: underline;
      text-decoration-color: $secondary;
      text-underline-offset: 9px;
      color: $secondary;
      font-weight: 500;
    }
  }

  @media screen and (min-width: $medium) {
    a {
      padding: 0 12px;
    }
  }

  @media screen and (max-width: $medium) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;

    a {
      padding: 15px 0;
    }
  }
}
</style>
