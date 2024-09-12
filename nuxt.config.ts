// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare-pages",
    experimental: {
      database: true
    },
    database: {
      myDatabase: {
        connector: "cloudflare-d1",
        options: {
          bindingName: "dbLink"
        }
      }
    }
  }
})
