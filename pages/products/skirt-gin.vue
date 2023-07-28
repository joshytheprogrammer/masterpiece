<template>
  <div class="kubanah">
    <PHero :bgImg="bgImg" :name="name" :pitch="pitch" :image="image" />
    <AHero :socials="socials"  :features="features" :name="name" :desc="description" />
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
      title: 'Skirt Dry Gin | Masterpiece Quality Taste',
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
      name: "Skirt Dry Gin",
      pitch: "Gin is a master piece, blended with the finest quality ingredients.",
      description: "Skirt Dry Gin is a masterpiece crafted with the utmost care using the finest quality ingredients. With a 40% ABV, this gin presents a captivating aroma filled with juniper, citrus, and floral nuances. On the palate, it offers a well-balanced experience, blending the crispness of juniper with bright citrus, herbal undertones, and a delicate sweetness. Its light and refreshing character, combined with a clean and lingering finish, make Skirt Dry Gin a delightful choice for gin enthusiasts seeking a harmonious and top-quality spirit.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662987025/masterpiece/MODO7490-transformed_i2ef7m.png",
      features: {
        ingredients: 'Juniper berries, Coriander seeds, Angelica root, Citrus peels, Orris root, Cardamom, Various botanicals and herbs',
        aroma: 'Herbal and floral hints from the botanical blen',
        flavour: 'Crisp and aromatic with prominent juniper notes',
        palate: 'Light to medium-bodied with a refreshing mouthfeel',
        abv: '40%',
        app: 'Crystal-like brilliance'
      },
      socials: {
        fb: 'https://www.facebook.com/theskirtbrands',
        ig: 'theskirtbrands',
        x: 'theskirtbrands'
      }
    }
  },
}
</script>
