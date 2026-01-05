<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-16 relative">
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.href" 
            :href="item.href"
            @click="setActive(item.href)"
             :class="[
                'relative py-2 px-4 transition-all duration-200 group font-semibold rounded-lg',
                activeSection === item.href 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              ]"
            >
              <span class="group-hover:scale-110 inline-block transition-transform">{{ item.label }}</span>
              <span 
                v-if="activeSection === item.href"
                class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-purple-600 rounded-full"
              ></span>
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 absolute right-4"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          class="md:hidden py-4 space-y-1 border-t border-gray-200 bg-gray-50"
        >
          <a 
            v-for="item in navItems" 
            :key="item.href" 
            :href="item.href"
            @click="setActive(item.href); mobileMenuOpen = false"
            :class="[
              'block py-3 px-4 rounded-lg transition-all duration-200 font-medium',
              activeSection === item.href
                ? 'text-blue-600 bg-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
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
  { label: 'Projects', href: '#projects' },
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
  const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
  sections.forEach((id) => {
    const element = document.getElementById(id)
    if (element) observer.observe(element)
  })
})
</script>

