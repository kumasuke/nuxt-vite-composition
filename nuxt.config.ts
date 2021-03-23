import { NuxtConfig } from '@nuxt/types'
import { defineNuxtConfig } from '@nuxtjs/composition-api'

const nuxtConfig: NuxtConfig = {
  target: 'static',
  ssr: true,
  srcDir: './src',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/axios'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt/vite
    'nuxt-vite',
    // Doc: https://github.com/windicss/nuxt-windicss-module
    'nuxt-windicss',
    // Doc: https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api',
  ],
  /**
   * Generate
   */
  generate: {
    // choose to suit your project
    interval: 2000,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
  /*
   ** Vite module configuration
   ** See https://vite.nuxtjs.org/
   */
  vite: {
    /* options for vite */
    vue: {
      /* options for vite-plugin-vue2 */
    },
    optimizeDeps: {
      // Uncaught SyntaxError: The requested module ... does not provide an export named 'default'
      // See https://github.com/nuxt/vite/blob/b3c15636502feadcbb2f4995a9b246b935747e1a/docs/content/en/3.misc/4.common-issues.md#uncaught-syntaxerror-the-requested-module--does-not-provide-an-export-named-default
      exclude: ['vuex-module-decorators'],
    },
  },
}

export default defineNuxtConfig(nuxtConfig)
