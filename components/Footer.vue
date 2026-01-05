<template>
  <footer class="bg-gray-900 text-white relative overflow-hidden">
    <!-- Subtle decoration -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div class="text-center md:text-left">
          <p class="text-gray-400 text-sm">
            Building amazing web experiences with passion and precision. ✨
          </p>
        </div>
        
        <!-- Quick Links -->
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4 flex items-center justify-center gap-2">
            <span>🔗</span> Quick Links
          </h3>
          <div class="space-y-2">
            <a href="#home" class="block text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Home</a>
            <a href="#about" class="block text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">About</a>
            <a href="#experience" class="block text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Experience</a>
            <a href="#projects" class="block text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Projects</a>
            <a href="#contact" class="block text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">Contact</a>
          </div>
        </div>
        
        <!-- Social Links -->
        <div class="text-center md:text-right">
          <h3 class="text-lg font-bold mb-4 flex items-center justify-center md:justify-end gap-2">
            <span>🌐</span> Connect
          </h3>
          <div class="flex justify-center md:justify-end gap-4">
            <a 
              href="https://www.linkedin.com/in/haziqrosli96" 
              target="_blank"
              class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xl hover:bg-blue-600 hover:scale-110 hover:rotate-12 transition-all"
              title="LinkedIn"
            >
              💼
            </a>
            <a 
              href="https://github.com/haziqrosli" 
              target="_blank"
              class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xl hover:bg-purple-600 hover:scale-110 hover:rotate-12 transition-all"
              title="GitHub"
            >
              💻
            </a>
            <a 
              href="mailto:haziqrosli@outlook.com"
              class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xl hover:bg-pink-600 hover:scale-110 hover:rotate-12 transition-all"
              title="Email"
            >
              📧
            </a>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          Made with <span class="text-red-500 animate-pulse">❤️</span> by <span class="font-semibold text-white hover:text-purple-400 transition-colors">Muhammad Alif Haziq</span>
        </p>
        <p class="text-gray-500 text-xs mt-2">
          © {{ new Date().getFullYear() }} All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
