<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white">
    <!-- Subtle floating dots -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce-subtle"></div>
      <div class="absolute top-40 right-20 w-2 h-2 bg-pink-400 rounded-full animate-bounce-subtle" style="animation-delay: 0.5s"></div>
      <div class="absolute bottom-40 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce-subtle" style="animation-delay: 1s"></div>
      <div class="absolute bottom-20 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce-subtle" style="animation-delay: 1.5s"></div>
    </div>
    
    <div class="section-container relative z-10">
      <div class="max-w-5xl mx-auto">
        
        <!-- Clean Typography with Color Accent -->
        <h1 class="text-6xl md:text-8xl font-bold mb-6 leading-tight scroll-reveal delay-100">
          <span class="text-gray-900 inline-block hover:text-purple-600 transition-colors">Hi, I'm</span>
          <br/>
          <span class="relative inline-block group cursor-pointer">
            <span class="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 inline-block transition-transform">
              Muhammad Alif Haziq
            </span>
            <span class="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
        </h1>
        
        <!-- Subtitle with Emoji -->
        <p class="text-2xl md:text-3xl text-gray-700 font-semibold mb-6 scroll-reveal delay-200">
          <span class="inline-block hover:scale-110 transition-transform">💻</span>
          <span> Full Stack Developer</span>
        </p>
        
        <!-- Clean Description -->
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed scroll-reveal delay-300">
          I craft <span class="text-purple-600 font-semibold hover:text-pink-600 transition-colors cursor-pointer">beautiful</span> and 
          <span class="text-blue-600 font-semibold hover:text-cyan-600 transition-colors cursor-pointer"> scalable</span> web applications with 
          <span class="text-green-600 font-semibold hover:text-emerald-600 transition-colors cursor-pointer">modern</span> technologies.
        </p>
        
        <!-- Playful Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 scroll-reveal delay-400">
          <div class="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200">
            <div class="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform">📍</div>
            <p class="text-sm text-gray-500 font-medium">Location</p>
            <p class="text-gray-900 font-bold">Puchong, Malaysia</p>
          </div>
          
          <div class="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200">
            <div class="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform">⚡</div>
            <p class="text-sm text-gray-500 font-medium">Experience</p>
            <p class="text-gray-900 font-bold">4+ Years</p>
          </div>
          
          <div class="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-200">
            <div class="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform">📞</div>
            <p class="text-sm text-gray-500 font-medium">Contact</p>
            <p class="text-gray-900 font-bold">018-4650914</p>
          </div>
        </div>
        
        <!-- Fun CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 scroll-reveal delay-500">
          <a 
            href="#contact" 
            class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span class="relative flex items-center justify-center gap-2">
              <span class="group-hover:rotate-12 inline-block transition-transform">✉️</span>
              Get In Touch
            </span>
          </a>
          <a 
            href="https://www.linkedin.com/in/haziqrosli96" 
            target="_blank"
            class="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <span class="flex items-center justify-center gap-2">
              <span class="group-hover:rotate-12 inline-block transition-transform">💼</span>
              LinkedIn
            </span>
          </a>
          <a 
            href="#projects" 
            class="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-green-600 hover:text-green-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <span class="flex items-center justify-center gap-2">
              <span class="group-hover:rotate-12 inline-block transition-transform">🚀</span>
              View Projects
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}
</style>

