<template>
  <div class="mission">
    <div class="_img">
      <img src="https://images.unsplash.com/photo-1522756890800-ac12d130a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="our-mission-about-image">
    </div>
    <div class="copy">
      <h2>Our Mission</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dignissimos harum sequi esse autem, nam reiciendis commodi! Ad, omnis quod esse dolore mollitia earum. Ex quo repudiandae quidem nostrum autem!</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.mission {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 2.5rem 1rem;

  .copy {
    padding: 1rem;

    h2 {
      font-size: 48px;
      font-weight: 700;
      padding: 1rem 0;
      color: $d-secondary;
    }

    p {
      font-size: 20px;
      line-height: 1.5;
    }
  }

  ._img {
    max-width: 50%;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: $medium){
    flex-direction: column-reverse;
    padding: 2.5rem 0;

    .copy {
      padding-bottom: 2.5rem;
    }

    .copy h2 {
      padding-top: 0;
      font-size: 40px;
    }

    .copy p {
      font-size: 16px;
    }

    ._img {
      max-width: 100%;
    }
  }
}
</style>
