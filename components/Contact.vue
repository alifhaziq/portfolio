<template>
  <section id="contact" class="bg-gradient-to-br from-pink-50 to-purple-50">
    <div class="section-container">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 scroll-reveal inline-block hover:scale-105 transition-transform">
          Get In Touch <span class="text-4xl animate-bounce-subtle inline-block">✉️</span>
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        <p class="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new opportunities.
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <!-- Email -->
        <a 
          href="mailto:alifhaziq79@gmail.com" 
          class="group bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-reveal border-2 border-transparent hover:border-pink-200 flex items-center gap-6"
        >
          <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform">
            📧
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-500 mb-1">Email</p>
            <p class="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">alifhaziq79@gmail.com</p>
          </div>
        </a>
        
        <!-- Phone -->
        <a 
          href="whatsapp:+60184650914" 
          target="_blank"
          class="group bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-reveal delay-100 border-2 border-transparent hover:border-green-200 flex items-center gap-6"
        >
          <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform">
            📱
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-500 mb-1">Phone</p>
            <p class="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">018-4650914</p>
          </div>
        </a>
        
        <!-- LinkedIn -->
        <a 
          href="https://www.linkedin.com/in/haziqrosli96" 
          target="_blank"
          class="group bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-reveal delay-200 border-2 border-transparent hover:border-blue-200 flex items-center gap-6"
        >
          <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform">
            💼
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-500 mb-1">LinkedIn</p>
            <p class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">haziqrosli96</p>
          </div>
        </a>
        
        <!-- GitHub -->
        <a 
          href="https://github.com/alifhaziq" 
          target="_blank"
          class="group bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scroll-reveal delay-300 border-2 border-transparent hover:border-purple-200 flex items-center gap-6"
        >
          <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform">
            💻
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-500 mb-1">GitHub</p>
            <p class="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">haziqrosli</p>
          </div>
        </a>
      </div>
      
      <!-- CTA Button -->
      <div class="text-center mt-12 scroll-reveal delay-400">
        <a 
          href="mailto:alifhaziq79@gmail.com" 
          class="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          <span class="group-hover:rotate-12 inline-block transition-transform text-2xl">✉️</span>
          <span>Send Me an Email</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
