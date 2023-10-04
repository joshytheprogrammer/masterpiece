<template>
  <div class="kubanah">
    <!-- <KHero /> -->
    <PHero :bgImg="bgImg" :name="name" :pitch="pitch" :image="image" />
    <KTVC />
    <AHero :socials="socials" :features="features" :name="name" :desc="description" />
    <KDESC v-for="item in about" :key="Math.random(0, 1000)" :dark="item.dark">
      <template #title>
        {{ item.title }}
      </template>
      <template #content>
        <span v-html="item.content"></span>
      </template>
    </KDESC>
  </div>
</template>

<script>
import KHero from "../../components/Products/K-Hero.vue"
import PHero from "../../components/Products/P-Hero.vue"
import AHero from "../../components/Products/A-Hero.vue"
import KTVC from "../../components/Products/KTVC.vue"
import KDESC from "../../components/Products/KDESC.vue"

export default {
  components: {
    KHero,
    PHero,
    AHero,
    KTVC,
    KDESC
  },
  head() {
    return {
      title: 'Kubanah Whisky | Masterpiece Flavoured Spirit Drink.',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'A blend of grain spirits and scotch malts for exquisite smoothness. Masterpiece Flavoured Spirit Drink'
        }
      ]
    }
  },
  data() {
    return {
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663255493/masterpiece/black-gradient_ja5vzs.png",
      name: "Kubanah Whisky",
      pitch: "The Premium Quality Taste that keeps connecting you to your friends.",
      about: [
        {
          title: 'The Kubanah Whisky Legacy',
          content: "For generations, Kubanah Whisky has been a symbol of excellence in the world of whisky. Rooted in tradition, our whisky embodies a fresh oak aroma that captivates from the very first pour. We have become a favorite in the market due to our unwavering commitment to quality and relentless innovation. Whether you're an experienced whisky enthusiast or a novice, Kubanah Whisky has something exceptional to offer.",
          dark: 0,
        },
        {
          title: 'A Symphony of Flavors',
          content: "What truly distinguishes Kubanah Whisky is our dedication to crafting a whisky that not only boasts exceptional smoothness but is also bursting with flavor. Our Masterpiece Flavoured Spirit Drink promises a sensory journey like no other. From the moment it touches your lips, you'll savor the harmonious blend of rich, smoky notes from the scotch malts, complemented by the subtle sweetness of grain spirits. It's a masterpiece of balance and complexity that lingers on the palate, leaving you yearning for more.",
          dark: 1,
        },
        {
          title: 'The Kubanah Whisky Experience',
          content: `
          <p>
            <b>Soft Finish</b>: One of the hallmarks of Kubanah Whisky is its remarkably soft finish. Each sip is not just a drink; it's a moment of sheer indulgence. The smoothness is a testament to the craftsmanship in every bottle.
          </p>

          <p>
            <b>Classic Bottle Design</b>: A timeless classic deserves an iconic bottle. Our bottle exudes sophistication and elegance, making it more than just a vessel for a spirit; it's a piece of art.
          </p>

          <p>
            <b>Pure Amber Color</b>: The rich amber hue of Kubanah Whisky is a visual delight. It mirrors the depth and complexity of the liquid inside, promising a sensory journey that will tantalize your senses.
          </p>
          `,
          dark: 0,
        },
        {
          title: 'The Kubanah Whisky Philosophy',
          content: "In a world of constant change, we cherish simplicity and authenticity. At Kubanah Whisky, we believe in following your heart and pursuing dreams with unwavering courage. Our Masterpiece Flavoured Spirit Drink embodies these values, representing authenticity and the pursuit of excellence in every sip.",
          dark: 1,

        },
        {
          title: 'Enjoy Kubanah Whisky Responsibly',
          content: "We are dedicated to responsible drinking. Kubanah Whisky products are NOT intended for individuals aged 18. We encourage our customers to enjoy our products in moderation, savoring the experience responsibly.",
          dark: 0,
        },
        // {
        //   title: '',
        //   content: ""
        // },

      ],
      description:
      `Kubanah Whisky flavoured spirit drink is a longstanding Whisky, with fresh oak aroma. Proven to be a market hot sale, customers find it very compatible with other mixtures. Customers like its soft finish, the classic bottle shape and the pure amber color. Being classic always means being simple. In a changing world it is simple and worthwhile to follow your heart and bravely go for your dream.

      <p style="padding-top:12px;" >Kubanah Whiskey has a volume of 70 centiliters (cl) and an alcohol by volume (ABV) of 42%.</p>

      `,
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985594/masterpiece/kubana-transparent_1_peuioc.png",
      features: {
        ingredients: 'Treated Water, Ethanol, Caramel, Malt Flavour and Whisky Flavour',
        aroma: 'Kubanah blended whisky with fresh oak aroma.',
        flavour: 'A refreshing blend of grain spirits and scotch malts for exquisite smoothness.',
        palate: 'A Flavoured spirit drink.',
        abv: '42%',
        app: 'A pure amber colored whiskey.'
      },
      socials: {
        fb: 'https://www.facebook.com/kubanahwhisky',
        ig: 'kubanahwhisky',
        x: 'kubanahwhisky'
      }
    }
  },
}
</script>
