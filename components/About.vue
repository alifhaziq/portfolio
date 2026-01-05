<template>
  <section id="about" class="bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
    <div class="section-container">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 scroll-reveal inline-block hover:scale-105 transition-transform">
          About Me <span class="text-4xl animate-bounce-subtle inline-block">👨‍💻</span>
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
      </div>
      
      <div class="max-w-6xl mx-auto">
        <!-- Stats Cards with Fun Hover -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div class="group bg-white rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-3 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200">
            <div class="text-6xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform">⚡</div>
            <div class="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">4+</div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>
          
          <div class="group bg-white rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-3 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200">
            <div class="text-6xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform">🛠️</div>
            <div class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">10+</div>
            <div class="text-gray-600 font-medium">Technologies</div>
          </div>
          
          <div class="group bg-white rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-3 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-200">
            <div class="text-6xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform">🚀</div>
            <div class="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">5+</div>
            <div class="text-gray-600 font-medium">Major Projects</div>
          </div>
        </div>
        
        <!-- Professional Summary -->
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-8 scroll-reveal delay-400 hover:shadow-xl transition-shadow">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-3xl">💼</span>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
              Professional Summary
            </h3>
          </div>
          
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            <span class="font-bold text-purple-600 hover:text-pink-600 transition-colors cursor-pointer">Full Stack Developer</span> with 4 years of hands-on experience delivering enterprise-grade web applications. Proven track record in designing scalable backend systems, optimizing database performance, and building responsive user interfaces.
          </p>
          
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-600">
            <p class="text-gray-900 font-semibold mb-2 flex items-center gap-2">
              <span>🎯</span> Core Expertise:
            </p>
            <p class="text-gray-700">
              C#, ASP.NET Core, MVC, Web API, Repository Pattern, Clean Architecture, React, Vue.js, SQL/NoSQL databases, CI/CD pipelines, Azure DevOps
            </p>
          </div>
        </div>
        
        <!-- Key Strengths -->
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg scroll-reveal delay-500 hover:shadow-xl transition-shadow">
          <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span class="text-2xl">✨</span> Key Strengths
          </h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="group flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <span class="text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform">💪</span>
              <span class="text-gray-700 font-medium">Full-stack development (Backend & Frontend)</span>
            </div>
            
            <div class="group flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <span class="text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🏗️</span>
              <span class="text-gray-700 font-medium">Clean Architecture & Design Patterns</span>
            </div>
            
            <div class="group flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <span class="text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform">💾</span>
              <span class="text-gray-700 font-medium">Database design & optimization</span>
            </div>
            
            <div class="group flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <span class="text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🔄</span>
              <span class="text-gray-700 font-medium">CI/CD & Agile methodologies</span>
            </div>
            
            <div class="group flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <span class="text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform">✅</span>
              <span class="text-gray-700 font-medium">Code review & quality assurance</span>
            </div>
            
            <div class="group flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <span class="text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🤝</span>
              <span class="text-gray-700 font-medium">Team collaboration & mentoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
