<template>
  <div class="contact">
    <div class="form">
      <h2>Reach out!</h2>
      <p>We’d love to hear from you and answer any questions you might have. Your feedback is very important to us. Please leave us a message with all your inquiries, observations, suggestions, or complaints.</p>

      <form>
        <input type="text" class="form-control h" placeholder="First Name">
        <input type="text" class="form-control h" placeholder="Last Name">
        <input type="text" class="form-control h" placeholder="Email">
        <input type="text" class="form-control h" placeholder="Phone">
        <input type="text" class="form-control f" placeholder="Subject">
        <textarea class="form-control text f" placeholder="Message"></textarea>
        <button>Send Message</button>
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
    }

    p {
      font-size: 16px;
      line-height: 1.3;
    }

    form {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .form-control {
        margin: 0.5rem 0;
        background: transparent;
        border: none;
        height: 40px;
        padding: 2px 4px;
        border-bottom: 1px solid $d-secondary;

        font: {
          size: 16px;
          weight: 400;
        }

        &::placeholder {
          font: {
            size: 16px;
            weight: 300;
          }
        }

        &:focus {
          outline: none;
          border-bottom-color: $secondary;
        }

        &.h {
          width: 49%;
        }

        &.f {
          width: 100%;
        }
      }

      textarea.text {
        height: 120px;
      }
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
