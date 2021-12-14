export default {
  head: {
    title: 'foodsoul',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/styles/main.scss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    [
      '@nuxtjs/dotenv',
      {
        filename: `.env.${process.env.NODE_ENV}`,
      },
    ],
  ],

  styleResources: {
    scss: ['~/assets/styles/variables.scss'],
  },

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  axios: {
    baseURL: '/',
  },
}
