<template>
  <div class="our-company">
    <div class="copy">
      <h2>Our Company</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dignissimos harum sequi esse autem, nam reiciendis commodi! Ad, omnis quod esse dolore mollitia earum. Ex quo repudiandae quidem nostrum autem!</p>
    </div>
    <div class="_img">
      <img src="https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="our-company-about-image">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.our-company {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 1rem;

  .copy {
    padding: 1rem;

    h2 {
      font-size: 40px;
      font-weight: 700;
      color: $d-secondary;
    }

    p {
      font-size: 20px;
      line-height: 1.24;
    }
  }
}
</style>
