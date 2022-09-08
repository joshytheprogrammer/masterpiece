<template>
  <div class="hero">
    <h1>Contact <span>Masterpiece</span></h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80&h=500');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: $dark;
  color: $light;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    padding: 1rem;
    font-size: 5.125em;
    font-weight: 400;
    text-shadow: 2px 3px 1px $dark;

    span {
      color: $secondary;
      text-shadow: 2px 3px 1px $dark;
    }
  }

  @media screen and (max-width: $medium){
    height: 500px;

    h1 {
      font-size: 48px;
    }
  }

}
</style>
