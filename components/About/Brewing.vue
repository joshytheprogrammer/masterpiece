<template>
  <div class="brewing">
    <h2>Brewing made perfect</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro delectus saepe recusandae assumenda reprehenderit natus animi nobis perferendis repellendus fuga fugit minima nemo magni provident sint, dolores nam, tenetur quia!</p>
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
