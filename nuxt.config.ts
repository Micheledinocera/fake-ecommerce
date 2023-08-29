const path = require('path');
let development = process.env.NODE_ENV !== 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/main.sass"'
        },
      },
    },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/docs')
    }
  },
  app: {
    baseURL: "/fake-ecommerce/"
    // baseURL: development? "/" : "/fake-ecommerce/"
  },
  generate: {
    fallback: "404.html"
  }
})
