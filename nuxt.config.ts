// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/content',
  ],
  runtimeConfig: {
    public: {
      omdbApiKey: process.env.OMDB_API_KEY,
    },
  },
  content: {
    database: {
      type: 'd1',
      binding: 'iptv',
    },
  },
});
