export default defineNuxtPlugin(() => {
  if (process.client) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    // Wait for DOM to be ready
    const initScrollReveal = () => {
      const revealElements = document.querySelectorAll('.scroll-reveal')
      revealElements.forEach((el) => observer.observe(el))
    }

    // Run on mount
    setTimeout(initScrollReveal, 100)

    // Also run when navigating between pages
    window.addEventListener('load', initScrollReveal)
  }
})

