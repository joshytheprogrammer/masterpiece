<template>
  <div class="contact">
    <div class="form">
      <h2>Reach out!</h2>
      <p>We’d love to hear from you and answer any questions you might have. Your feedback is very important to us. Please leave us a message with all your inquiries, observations, suggestions, or complaints.</p>

      <form>

      </form>
    </div>
    <div class="hub">
      a
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .form {
    padding: 0.4rem 1rem;
    max-width: 600px;

    h2, p {
      padding-bottom: 1rem;
    }

    h2 {
      font-size: 48px;
      font-weight: 500;
      color: $d-secondary;
      text-shadow: 1px 1px $secondary;
    }

    p {
      font-size: 18px;
      line-height: 1.3;
    }
  }

  .hub {
    width: 500px;
    height: 800px;
    background-color: transparent;
    background-image: radial-gradient(at center center, $secondary 0%, $d-secondary 100%);

  }
}
</style>
