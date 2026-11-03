// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Muhammad Alif Haziq - Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#171a15' },
        { name: 'author', content: 'Muhammad Alif Haziq Bin Rosli' },
        { 
          name: 'description', 
          content: 'Full Stack Developer with 4 years of experience in C#, ASP.NET Core, Vue.js, and modern web technologies.' 
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Muhammad Alif Haziq - Full Stack Developer' },
        { property: 'og:description', content: 'Full Stack Developer with 4 years of experience in C#, ASP.NET Core, Vue.js, and modern web technologies.' },
        { property: 'og:image', content: '/icon.png' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' },
        { rel: 'apple-touch-icon', href: '/icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@500&display=swap'
        }
      ],
      script: [
        {
          // Runs before first paint so the saved or system theme never flashes.
          innerHTML: "try{var t=localStorage.getItem('theme');if(t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark')}catch(e){}",
          tagPosition: 'head'
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Muhammad Alif Haziq Bin Rosli',
            jobTitle: 'Full Stack Developer',
            address: { '@type': 'PostalAddress', addressLocality: 'Puchong', addressCountry: 'MY' },
            email: 'mailto:alifhaziq79@gmail.com',
            sameAs: ['https://www.linkedin.com/in/haziqrosli96', 'https://github.com/alifhaziq']
          })
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'cloudflare_pages',
    cloudflare: { deployConfig: false, nodeCompat: true }
  }
})

