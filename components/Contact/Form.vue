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
        <button type="submit">Send Message</button>
      </form>

    </div>
    <div class="hub">
      <div class="item">
        <p class="key">Head Office:</p>
        <p class="value">110 Ijesha Rd, Surulere 102215, Lagos</p>
      </div>
      <div class="item">
        <p class="key">Call us:</p>
        <p class="value">0800-600-0000</p>
        <p class="value">0700-825-586-6275</p>
      </div>
      <div class="item">
        <p class="key">Email: </p>
        <p class="value">masterpiece@gmail.com</p>
      </div>
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
      font-weight: 400;
      color: $d-secondary;
      // text-shadow: 1px 1px $d-secondary;
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
        transition: border .5s ease;

        font: {
          size: 16px;
          weight: 300;
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
        margin-bottom: 1rem;
      }

      button {
        padding: 1rem 2rem;
        background: radial-gradient(at center center, $secondary 0%, $d-secondary 100%);
        cursor: pointer;
        border: none;
        color: $light;
        font-size: 16px;
        font-weight: 500;
        transition: background .5s ease;

        &:hover {
          background: radial-gradient(at center center, $d-secondary 0%, $d-secondary 100%);
        }
      }
    }
  }

  .hub {
    width: 500px;
    height: 700px;
    padding: 1rem;
    background-image: radial-gradient(at center center, $d-secondary 0%, $secondary 100%);

    color: $light;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .item {
      padding: 1rem 0;

      .key {
        font: {
          size: 24px;
          weight: 700;
        }

        padding-bottom: 0.5rem;
      }

      .value {
        font: {
          size: 18px;
          weight: 400;
        }
      }
    }

  }

  @media screen and (max-width: $large){
    .form {
      max-width: 500px;
    }
  }

  @media screen and (max-width: $m-large){
    .form {
      max-width: 400px;
    }

    .hub {
      width: 300px;
    }
  }

  @media screen and (max-width: $medium){
    .form {
      width: 100%;
      padding: 2rem 1rem;

      h2 {
        font-size: 40px;
      }

      p {
        font-size: 14px;
      }
    }

    .hub {
      width: 100%;
    }
  }
}
</style>
