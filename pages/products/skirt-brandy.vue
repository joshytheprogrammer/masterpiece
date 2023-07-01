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
      title: 'Skirt Brandy | Masterpiece Quality Taste',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Skirt Brandy retains its old tradition of high quality and is blended with flavour.'
        }
      ]
    }
  },
  data() {
    return {
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663254784/masterpiece/yellow-gradient_e6qyth.png",
      name: "Skirt Blended Brandy",
      pitch: "The Masters Choice, quality taste brandy that brings the excellence of our land to your table.",
      description: "Skirt Blended Brandy is the pinnacle of choice for those seeking a brandy that embodies the mastery of craftsmanship. Made with treated water, ethanol, brandy flavor, and caramel, this blend showcases the finest spirits aged in oak butts. With its refreshing blend of brandy flavor and caramel, it offers a sharp and invigorating taste that delights the senses. Skirt Blended Brandy is a true testament to the excellence of the land, bringing a quality taste experience to your table. Indulge in its richness, elegance, and remarkable flavors.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985746/masterpiece/skirt-blended-brandy_t7f603.png",
      features: {
        ingredients: 'Treated Water, Ethanol, Brandy Flavour and Caramel',
        aroma: 'Skirt Blended Brandy with fine spirits and oak butts',
        flavour: 'A refreshing blend of Brandy Flavour and Caramel for a sharp and refreshing taste',
        palate: 'Quality tasting blended brandy',
        abv: '40%',
        app: 'Radiant, golden amber hue, exuding an air of warmth and sophistication'
      }
    }
  },
}
</script>
