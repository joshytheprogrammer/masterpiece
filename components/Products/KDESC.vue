<template>
  <div :class="dark ? 'dark': ''" class="container" >
    <h2 class="title">
        <slot name="title"></slot>
      </h2>
      <p class="content">
        <slot name="content"></slot>
      </p>
  </div>
</template>

<script>
  export default {
    props: ["dark"]
  }
</script>

<style lang="scss" scoped>
.container {
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    font-size: 48px;
    font-weight: 500;
    padding: 1rem 0;
    color: $secondary;
  }

  &.dark {
    background: $dark;
    .content {
      color: $light;
    }
  }

  .content {
    font-size: 18px;
    max-width: 70%;
    line-height: 1.5;
  }

  @media screen and (max-width: $medium){

    .title {
      padding-top: 0;
      font-size: 40px;
    }

    .content {
      max-width: 90%;
      font-size: 16px;
    }
  }
}
</style>
