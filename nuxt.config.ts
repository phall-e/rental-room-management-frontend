// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/icon',
  ],
  css: [
    '~/assets/css/element-override.css'
  ],
  googleFonts: {
    families: {
      Nokora: true,
    }
  },
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          Nokora: ['"Nokora"'],
        }
      }
    }
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', language: 'en-US' },
      { code: 'km', file: 'km.json', language: 'KH' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',     // folder name
    strategy: 'no_prefix',   // /page (no /en/page)
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  },
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //     },
  //   },
  // },
  // vite: {
  //   server: {
  //     allowedHosts: ['http://localhost:3000'],
  //   },
  // },
})