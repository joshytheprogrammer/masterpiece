<template>
  <div class="contact">
    <Hero />
    <Form />
    <Maps />
  </div>
</template>

<script>
import Hero from "../components/Contact/Hero.vue"
import Form from "../components/Contact/Form.vue"
import Maps from "../components/Contact/Maps.vue"

export default {
  components : {
    Hero,
    Form,
    Maps
  }
}
</script>

