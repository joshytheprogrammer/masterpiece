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
      title: 'Rocklas | Masterpiece Finest Quality Brandy',
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
      bgImg: "https://res.cloudinary.com/dsgvwxygr/image/upload/c_scale,h_900,w_1920/v1663254784/masterpiece/yellow-gradient_e6qyth.png",
      name: "Rocklas Blended Whisky",
      pitch: "Finest Quality blended whisky",
      description: "Rocklas Blended Whisky is a testament to the finest craftsmanship, blending together exceptional malted barley and grain whiskies. With a 40% ABV, this premium blend delivers a captivating aroma of caramel, oak, and subtle vanilla, paving the way for a flavor experience that combines smoothness with delightful notes of toffee, spices, and a touch of smoke. Its creamy palate, medium-bodied texture, and long-lasting finish make Rocklas Blended Whisky a remarkable choice for those seeking the epitome of quality in their whisky enjoyment.",
      image: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1662985129/masterpiece/Rocklas-trans_richha.png",
      features: {
        ingredients: 'Malted barley, Grain whisky, Yeast, Water, Oak casks',
        aroma: 'Rich and inviting aroma with hints of caramel and oak',
        flavour: 'Smooth and well-balanced blend of malt and grain whiskies',
        palate: 'Medium-bodied with a silky texture',
        abv: '40%',
        app: 'Golden amber color with hints of copper'
      }
    }
  },
}
</script>
