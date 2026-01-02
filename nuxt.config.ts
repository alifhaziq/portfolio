// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/portfolio/',
    head: {
      title: 'Muhammad Alif Haziq - Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Full Stack Developer with 4 years of experience in C#, ASP.NET Core, Vue.js, and modern web technologies.' 
        }
      ],
      link: [
        { rel: 'icon', href: 'data:,' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})

