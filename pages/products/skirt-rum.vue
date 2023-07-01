<template>
  <div class="kubanah">
    <PHero :bgImg="bgImg" :name="name" :pitch="pitch" :image="image" />
    <AHero :features="features" :name="name" :desc="description" />
  </div>
</template>

<script>
import PHero from "../../components/Products/P-Hero.vue"
import AHero from "../../components/Products/A-Hero.vue"
export default {
  components: {
    PHero,
    AHero
  },
  head() {
    return {
      title: 'Skirt Rum | Masterpiece Flavoured Spirit Drink.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  data() {
    return {
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663254896/masterpiece/light-gradient_p8uix7.png",
      name: "Skirt Cafe Rum",
      pitch: "The brand that gives you the coffee and rum taste that is uniquely blended.",
      description: "Skirt Cafe Rum is a captivating blend that tantalizes the senses with its unique fusion of coffee and rum. Crafted with care, this exquisite spirit offers a rich and robust coffee aroma that seamlessly mingles with the smooth and sweet notes of rum. With a 40% ABV, Skirt Cafe Rum delivers a delightful taste experience, marrying the distinct flavors of coffee and rum in a harmonious and indulgent libation.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662651185/masterpiece/MODO7480-transformed_p30qym.png",
      features: {
        ingredients: 'Rum, Coffee, Sugar Water, Cinnamon, Nutmeg, Vanilla Caramel',
        aroma: 'Rich coffee aroma with hints of roasted beans',
        flavour: 'Smooth and balanced combination of coffee and rum',
        palate: 'Well-rounded and harmonious flavors',
        abv: '42%',
        app: 'Deep, dark brown color resembling strong coffee'
      }
    }
  },
}
</script>
