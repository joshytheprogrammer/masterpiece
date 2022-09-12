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
        {
          id: 4,
          alt: 'img-5',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995051/masterpiece/MODO6257_envthv.jpg'
        },
        {
          id: 5,
          alt: 'img-6',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995052/masterpiece/MODO6333_nzytbt.jpg'
        },
        {
          id: 6,
          alt: 'img-7',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995051/masterpiece/MODO6285_emtchk.jpg'
        },
        {
          id: 7,
          alt: 'img-8',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995052/masterpiece/MODO6261_el9exe.jpg'
        },
        {
          id: 8,
          alt: 'img-9',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995052/masterpiece/MODO6292_qgmz5y.jpg'
        },
        {
          id: 9,
          alt: 'img-10',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995052/masterpiece/MODO6363_iyaiwh.jpg'
        },
        {
          id: 10,
          alt: 'img-11',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995052/masterpiece/MODO6382_ulwgib.jpg'
        },
        {
          id: 11,
          alt: 'img-12',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995052/masterpiece/MODO6404_jpndzn.jpg'
        },
        {
          id: 12,
          alt: 'img-13',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995052/masterpiece/MODO6385_amh0ar.jpg'
        },
        {
          id: 13,
          alt: 'img-14',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995052/masterpiece/MODO6464_wlw1sf.jpg'
        },
        {
          id: 14,
          alt: 'img-15',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995053/masterpiece/MODO6477_twchpy.jpg'
        },
        {
          id: 15,
          alt: 'img-16',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996191/masterpiece/MODO6726_clx2sd.jpg'
        },
        {
          id: 16,
          alt: 'img-17',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996191/masterpiece/MODO6730_ppsl35.jpg'
        },
        {
          id: 17,
          alt: 'img-18',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996191/masterpiece/MODO6745_ajnod2.jpg'
        },
        {
          id: 18,
          alt: 'img-19',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996191/masterpiece/MODO6767_bki49q.jpg'
        },
        {
          id: 19,
          alt: 'img-20',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996191/masterpiece/MODO6788_i1g5si.jpg'
        },
        {
          id: 20,
          alt: 'img-21',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996191/masterpiece/MODO6771_qfuybl.jpg'
        },
        {
          id: 21,
          alt: 'img-22',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996191/masterpiece/MODO6796_ul77nv.jpg'
        },
        {
          id: 22,
          alt: 'img-23',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996192/masterpiece/MODO6790_xmgtdg.jpg'
        },
        {
          id: 23,
          alt: 'img-24',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996192/masterpiece/MODO6821_py8o08.jpg'
        },
        {
          id: 24,
          alt: 'img-25',
          link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662996192/masterpiece/MODO6831_rezljj.jpg'
        },
        {
          id: 25,
          alt: 'img-26',
          link: ''
        },
        {
          id: 26,
          alt: 'img-27',
          link: ''
        },
        {
          id: 27,
          alt: 'img-28',
          link: ''
        },
        {
          id: 28,
          alt: 'img-29',
          link: ''
        },
        {
          id: 29,
          alt: 'img-30',
          link: ''
        },
        {
          id: 30,
          alt: 'img-31',
          link: ''
        },
        {
          id: 31,
          alt: 'img-32',
          link: ''
        },
        {
          id: 32,
          alt: 'img-33',
          link: ''
        },
        {
          id: 34,
          alt: 'img-35',
          link: ''
        },
        {
          id: 35,
          alt: 'img-36',
          link: ''
        }
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
