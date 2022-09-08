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
  background-image: url('https://www.nbplc.com/storage/2021/10/glass-cold-beer-macro-photography-min-scaled.jpg');
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

  @media screen and (max-width: $medium){
    p {
      padding: 0 1rem;
      width: 100%;
    }
  }
}
</style>
