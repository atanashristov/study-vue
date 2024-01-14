// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: {
       // Default theme (same as single string)
        default: 'min-light',
        // Theme used if `html.dark`
        dark: 'min-dark',
      }
    }
  },
  colorMode: {
    classSuffix: ''
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
