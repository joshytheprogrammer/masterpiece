export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Welcome to the world of masterpeice | Masterpiece',
    prefix:"og: https://ogp.me/ns#",
    script: [
      {
        src: '/script.js',
        async: true
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GXWG91EZTV',
        async: true
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'From the makers of Kubanah Whisky, Skirt and Rocklas | Masterpiece' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: "Masterpiece"},
      { hid: 'og:title', property: 'og:title', content: 'Welcome to the world of masterpeice | Masterpiece'},
      { hid: 'og:description', property: 'og:description', content: 'From the makers of Kubanah Whisky, Skirt and Rocklas | Masterpiece'},
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662566313/masterpiece/cleaned-bg-mp-logo_xwvneu.png'},
      { hid: 'og:url', property: 'og:url', content: 'https://www.masterpiece.com'},
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-animejs',
    '@nuxtjs/sanity/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/app.scss',
      '@/assets/scss/mixins.scss'
    ],
    hoistUseStatements:  true,
  },

  sanity: {
    minimal: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Add global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  }
}
