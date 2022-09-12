<template>
  <div class="gallery">
    <figure v-for="item in images" :key="item.id">
      <img :src="item.link" :alt="item.alt">
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      rawImages: [
        {
          id: 0,
          alt: 'img-1',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662190088/masterpiece/MODO7364_hn0pra.jpg'
        },
        {
          id: 1,
          alt: 'img-2',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662457782/masterpiece/MODO7289_zxypmq.jpg'
        },
        {
          id: 2,
          alt: 'img-3',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662543202/masterpiece/MODO7289_qqhhe6_1f1e80.jpg'
        },
        {
          id: 3,
          alt: 'img-4',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662987910/masterpiece/bg-img-3_wigjxc.jpg'
        },
      ]
    }
  },
  mounted() {
    this.shuffle()
  },
  methods: {
    shuffle() {
      let array = this.rawImages

      let currentIndex = array.length,  randomIndex

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
      }

      this.images = array
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  columns: 4 200px;
  column-gap: 1.5rem;
  padding: 1rem;
  margin: 1rem auto;

  figure {
    width: 150px;
    margin: 0 1.5rem 1.5rem 0;
    display: inline-block;
    width: 100%;
    border: solid 2px $dark;
    padding: 5px;
    box-shadow: 5px 5px 5px $trans-dark;
    border-radius: 5px;
    transition: all .25s ease-in-out;

    &:hover img {
      filter: grayscale(0);
    }

    &:hover {
      border-color: $secondary;
    }

    img {
      width: 100%;
      filter: grayscale(100%);
      border-radius: 5px;
      transition: all .25s ease-in-out;
    }
  }
}
</style>
