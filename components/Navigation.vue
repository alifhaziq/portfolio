<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <a href="#home" class="group text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
          <span class="inline-block group-hover:scale-105 transition-transform">haziqcodes</span>
        </a>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.href" 
            :href="item.href"
            @click="setActive(item.href)"
            :class="[
              'relative py-2 px-1 transition-all duration-300 group',
              activeSection === item.href 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-700 hover:text-blue-600'
            ]"
          >
            {{ item.label }}
            <span 
              :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300',
                activeSection === item.href 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              ]"
            ></span>
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div 
          v-if="mobileMenuOpen"
          class="md:hidden py-4 space-y-1 border-t border-gray-100 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
        >
          <a 
            v-for="item in navItems" 
            :key="item.href" 
            :href="item.href"
            @click="setActive(item.href); mobileMenuOpen = false"
            :class="[
              'block py-3 px-4 rounded-lg transition-all duration-300',
              activeSection === item.href
                ? 'text-blue-600 font-bold bg-white shadow-sm'
                : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
            ]"
          >
            {{ item.label }}
          </a>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
const activeSection = ref('#about')

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const setActive = (href: string) => {
  activeSection.value = href
}

// Auto-detect active section on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) {
            activeSection.value = `#${id}`
          }
        }
      })
    },
    { threshold: 0.5 }
  )

  // Observe all sections
  const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact']
  sections.forEach((id) => {
    const element = document.getElementById(id)
    if (element) observer.observe(element)
  })
})
</script>

