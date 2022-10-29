<template>
  <div class="brewing">
    <h2>Brewing made perfect</h2>
    <p>Here at Masterpiece, our drinks our brewed to perfection. We work hard to ensure we are using the best quality ingredients to bring you a taste of heaven. There is a reason we are called Masterpiece and it is because all of our products are a Masterpiece. </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.brewing {
  background-image: url('https://images.unsplash.com/photo-1587582816472-81e94768469a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&h=700&q=80');
  height: 600px;
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: $light;

  h2 {
    font-size: 48px;
    font-weight: 700;
    padding: 1rem 0;
    text-shadow: 1px 1px $dark;
  }

  p {
    max-width: 50%;
    font-size: 20px;
    line-height: 1.5;
  }

  @media screen and (max-width: $medium){

    h2 {
      padding-top: 0;
      font-size: 40px;
    }

    p {
      max-width: 100%;
      font-size: 16px;
    }
  }
}
</style>
