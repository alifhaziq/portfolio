<template>
  <header class="site-header">
    <nav class="site-nav" aria-label="Main navigation">
      <a class="brand-mark" href="#home" aria-label="Alif Haziq home">AH<span>.</span></a>

      <div id="primary-navigation" class="nav-links" :class="{ 'nav-links-open': mobileMenuOpen }">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="{ 'nav-link-active': activeSection === item.href }"
          @click="setActive(item.href)"
        >{{ item.label }}</a>
        <a class="nav-contact" href="#contact" @click="setActive('#contact')">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="nav-actions">
        <button
          class="theme-toggle"
          type="button"
          aria-label="Dark mode"
          :aria-pressed="isDark"
          @click="toggle"
        >
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
          </svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
          </svg>
        </button>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="mobileMenuOpen"
          aria-controls="primary-navigation"
          :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <span class="scroll-progress" aria-hidden="true" :style="{ transform: `scaleX(${progress})` }"></span>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const mobileMenuOpen = ref(false)
const activeSection = ref('#home')
const progress = ref(0)
const { isDark, init: initTheme, toggle } = useTheme()
let sectionObserver: IntersectionObserver | undefined
let frame = 0

const updateProgress = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
  })
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

const setActive = (href: string) => {
  activeSection.value = href
  mobileMenuOpen.value = false
}

onMounted(() => {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = `#${entry.target.id}`
      })
    },
    { rootMargin: '-30% 0px -60% 0px' },
  )

  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver?.observe(section))
})

onMounted(() => {
  initTheme()
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
  window.removeEventListener('scroll', updateProgress)
  cancelAnimationFrame(frame)
})
</script>
