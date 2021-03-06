export default {
  target: 'static',

  head: {
    title: 'fedyya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'fedyya is a portfolio site of AKANE AKAGI.' },
      { hid: 'author', name: 'author', content: 'AKANE AKAGI (akaregi)' },
      { hid: 'theme-color', name: 'theme-color', content: '#02020e' },

      // OGP
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'fedyya LUNARIS' },

      // Twitter OGP
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@akgmoegi' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@akgmoegi' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  css: [
    'normalize.css',
    '~/assets/main.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build'
  ],

  modules: [
    '@nuxt/content'
  ],

  content: {},

  build: {}
}
