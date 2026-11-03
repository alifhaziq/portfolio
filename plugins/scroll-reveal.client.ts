export default defineNuxtPlugin((nuxtApp) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  )

  const observeAll = () => {
    document.querySelectorAll('.scroll-reveal:not(.active)').forEach((el) => observer.observe(el))
  }

  // Hydration timing differs between dev and production, so observe on every
  // lifecycle point where new .scroll-reveal nodes may have appeared.
  nuxtApp.hook('app:mounted', observeAll)
  nuxtApp.hook('app:suspense:resolve', observeAll)
  nuxtApp.hook('page:finish', observeAll)
  requestAnimationFrame(() => requestAnimationFrame(observeAll))
})
