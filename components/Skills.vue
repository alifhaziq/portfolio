<template>
  <section id="skills" class="bg-gradient-to-br from-blue-50 to-cyan-50">
    <div class="section-container">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 scroll-reveal inline-block hover:scale-105 transition-transform">
          Skills <span class="text-4xl animate-bounce-subtle inline-block">🛠️</span>
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full"></div>
      </div>
      
      <div class="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        <!-- Technical Skills -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all scroll-reveal">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span class="text-3xl">💻</span>
            <span>Technical Skills</span>
          </h3>
          
          <div class="space-y-6">
            <!-- Backend -->
            <div>
              <p class="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <span class="text-lg">⚙️</span> Backend
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="group px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg font-semibold text-sm hover:scale-110 hover:rotate-3 hover:shadow-md transition-all cursor-pointer">
                  C#
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg font-semibold text-sm hover:scale-110 hover:rotate-3 hover:shadow-md transition-all cursor-pointer">
                  ASP.NET Core
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg font-semibold text-sm hover:scale-110 hover:rotate-3 hover:shadow-md transition-all cursor-pointer">
                  .NET MVC
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-lg font-semibold text-sm hover:scale-110 hover:rotate-3 hover:shadow-md transition-all cursor-pointer">
                  Web API
                </span>
              </div>
            </div>
            
            <!-- Frontend -->
            <div>
              <p class="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <span class="text-lg">🎨</span> Frontend
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="group px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  React
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  Vue.js
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  JavaScript
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  TypeScript
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  HTML/CSS
                </span>
              </div>
            </div>
            
            <!-- Database -->
            <div>
              <p class="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <span class="text-lg">💾</span> Database
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="group px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-lg font-semibold text-sm hover:scale-110 hover:rotate-3 hover:shadow-md transition-all cursor-pointer">
                  SQL Server
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg font-semibold text-sm hover:scale-110 hover:rotate-3 hover:shadow-md transition-all cursor-pointer">
                  MySQL
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg font-semibold text-sm hover:scale-110 hover:rotate-3 hover:shadow-md transition-all cursor-pointer">
                  MongoDB
                </span>
              </div>
            </div>
            
            <!-- Tools & Others -->
            <div>
              <p class="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <span class="text-lg">🔧</span> Tools & DevOps
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="group px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  Git
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  Azure DevOps
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  Docker
                </span>
                <span class="group px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-lg font-semibold text-sm hover:scale-110 hover:-rotate-3 hover:shadow-md transition-all cursor-pointer">
                  CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Soft Skills -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all scroll-reveal delay-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span class="text-3xl">🤝</span>
            <span>Soft Skills</span>
          </h3>
          
          <div class="space-y-4">
            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div class="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🎯</div>
              <div>
                <p class="font-bold text-gray-900">Problem Solving</p>
                <p class="text-sm text-gray-600">Analytical thinking & debugging</p>
              </div>
            </div>
            
            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div class="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform">👥</div>
              <div>
                <p class="font-bold text-gray-900">Team Collaboration</p>
                <p class="text-sm text-gray-600">Agile, code reviews & mentoring</p>
              </div>
            </div>
            
            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div class="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform">💬</div>
              <div>
                <p class="font-bold text-gray-900">Communication</p>
                <p class="text-sm text-gray-600">Clear documentation & presentations</p>
              </div>
            </div>
            
            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div class="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform">⏰</div>
              <div>
                <p class="font-bold text-gray-900">Time Management</p>
                <p class="text-sm text-gray-600">Meeting deadlines & prioritization</p>
              </div>
            </div>
            
            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div class="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform">📚</div>
              <div>
                <p class="font-bold text-gray-900">Continuous Learning</p>
                <p class="text-sm text-gray-600">Staying updated with tech trends</p>
              </div>
            </div>
            
            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div class="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🎨</div>
              <div>
                <p class="font-bold text-gray-900">Attention to Detail</p>
                <p class="text-sm text-gray-600">Code quality & user experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
