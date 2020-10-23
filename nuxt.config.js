export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Шлях, ціною в життя',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@100;200;400;700&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/menu',
    '@/assets/scss/fact',
    '@/assets/scss/landing',
    '@/assets/scss/callback',
    '@/assets/scss/blockquote',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vue-touch', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', 'nuxt-mail'],

  styleResources: {
    scss: ['@/assets/scss/variables.scss', '@/assets/scss/global.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  mail: {
    smtp: {
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        username: 'dimasoltusyuk@gmail.com',
        password: 'PCI7135gotview',
      },
    },
  },
}
