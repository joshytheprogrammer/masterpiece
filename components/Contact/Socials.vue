<template>
  <div class="socials">
    <h2>We are Online!</h2>
    <p>Feel free to say Hi on social media. Got questions or need support? We are always available for you! Connect with us 24/7</p>
    <div class="icons">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.socials {
  padding: 2rem 1rem;
  height: 500px;
  color: $light;
  background-image: url('https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: $dark;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    padding: 1rem 0;
    font-size: 48px;
    font-weight: 500;
    color: $secondary;
    text-shadow: 2px 3px 1px $dark;
  }

  p {
    padding: 1rem 0;
    font-size: 20px;
    width: 480px;
    font-weight: 400;
    line-height: 25px;
  }

  @media screen and (max-width: $m-large){
    background-image: url('https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80');
  }

  @media screen and (max-width: $medium){
    height: 300px;
    background-image: url('https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80');

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
      padding: 0 1rem;
      width: 100%;
    }
  }
}
</style>
