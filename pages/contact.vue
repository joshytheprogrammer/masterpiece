<template>
  <div class="contact">
    <Hero />
    <Form />
    <Maps />
    <Socials />
  </div>
</template>

<script>
import Hero from "../components/Contact/Hero.vue"
import Form from "../components/Contact/Form.vue"
import Maps from "../components/Contact/Maps.vue"
import Socials from "../components/Contact/Socials.vue"

export default {
  components : {
    Hero,
    Form,
    Maps,
    Socials
  }
}
</script>

