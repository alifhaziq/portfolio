<template>
  <section id="about" class="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
    <div class="section-container relative z-10">
      <h2 class="section-title text-center">
        <span class="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
          About Me
          <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
        </span>
      </h2>
      
      <div class="max-w-4xl mx-auto">
        <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 mb-8 border border-blue-100/50 hover:border-blue-200 scroll-reveal">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center">
            <span class="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></span>
            Professional Summary
          </h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            <span class="font-semibold text-blue-600">Full Stack Developer</span> with 4 years of hands-on experience delivering enterprise-grade web applications. Proven track record in designing scalable backend systems, optimizing database performance, and building responsive user interfaces.
          </p>
          
          <p class="text-gray-700 leading-relaxed">
            <strong>Core Expertise:</strong> C#, ASP.NET Core, MVC, Web API, Repository Pattern, Clean Architecture, React, Vue.js, SQL/NoSQL databases, CI/CD pipelines, Azure DevOps
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 class="font-semibold text-gray-900 mb-3">Key Strengths:</h4>
          <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <span>Full-stack development (Backend & Frontend)</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <span>Clean Architecture & Design Patterns</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <span>Database design & optimization</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <span>CI/CD & Agile methodologies</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <span>Code review & quality assurance</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">✓</span>
              <span>Team collaboration & mentoring</span>
            </li>
          </ul>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-blue-400 scroll-reveal delay-100 overflow-hidden">
            <div class="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            <div class="relative z-10">
              <div class="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform animate-bounce-slow">4+</div>
              <div class="text-blue-100 font-semibold text-lg">Years Experience</div>
            </div>
          </div>
          
          <div class="group relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-purple-400 scroll-reveal delay-200 overflow-hidden">
            <div class="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            <div class="relative z-10">
              <div class="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform animate-bounce-slow" style="animation-delay: 0.2s">10+</div>
              <div class="text-purple-100 font-semibold text-lg">Technologies</div>
            </div>
          </div>
          
          <div class="group relative bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-pink-400 scroll-reveal delay-300 overflow-hidden">
            <div class="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            <div class="relative z-10">
              <div class="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform animate-bounce-slow" style="animation-delay: 0.4s">5+</div>
              <div class="text-pink-100 font-semibold text-lg">Major Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

