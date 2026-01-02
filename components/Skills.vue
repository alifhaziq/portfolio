<template>
  <section id="skills" class="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
    </div>
    <div class="section-container relative z-10">
      <h2 class="section-title text-center">
        <span class="inline-block text-white relative">
          Technical Skills
          <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
        </span>
      </h2>
      
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Backend / Programming -->
        <div class="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 border border-blue-400 scroll-reveal delay-100 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div class="relative z-10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                <span class="text-2xl">⚙️</span>
              </div>
              <h3 class="text-xl font-bold text-white">Backend / Programming</h3>
            </div>
          </div>
          <div class="relative z-10">
          <ul class="space-y-2">
            <li v-for="skill in backendSkills" :key="skill" class="text-blue-50 flex items-center">
              <span class="text-blue-200 mr-2">✓</span>{{ skill }}
            </li>
          </ul>
        </div>
        </div>
        
        <!-- Architecture & Patterns -->
        <div class="group relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 border border-purple-400 scroll-reveal delay-200 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div class="relative z-10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                <span class="text-2xl">🏗️</span>
              </div>
              <h3 class="text-xl font-bold text-white">Architecture & Patterns</h3>
            </div>
          </div>
          <div class="relative z-10">
          <ul class="space-y-2">
            <li v-for="skill in architectureSkills" :key="skill" class="text-purple-50 flex items-center">
              <span class="text-purple-200 mr-2">✓</span>{{ skill }}
            </li>
          </ul>
        </div>
        </div>
        
        <!-- Databases -->
        <div class="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 border border-green-400 scroll-reveal delay-300 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div class="relative z-10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                <span class="text-2xl">💾</span>
              </div>
              <h3 class="text-xl font-bold text-white">Databases</h3>
            </div>
          </div>
          <div class="relative z-10">
          <ul class="space-y-2">
            <li v-for="skill in databaseSkills" :key="skill" class="text-green-50 flex items-center">
              <span class="text-green-200 mr-2">✓</span>{{ skill }}
            </li>
          </ul>
        </div>
        </div>
        
        <!-- Frontend -->
        <div class="group relative bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 border border-indigo-400 scroll-reveal delay-400 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div class="relative z-10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                <span class="text-2xl">🎨</span>
              </div>
              <h3 class="text-xl font-bold text-white">Frontend</h3>
            </div>
          </div>
          <div class="relative z-10">
          <ul class="space-y-2">
            <li v-for="skill in frontendSkills" :key="skill" class="text-indigo-50 flex items-center">
              <span class="text-indigo-200 mr-2">✓</span>{{ skill }}
            </li>
          </ul>
        </div>
        </div>
        
        <!-- Tools & DevOps -->
        <div class="group relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 border border-orange-400 scroll-reveal delay-500 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div class="relative z-10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                <span class="text-2xl">🛠️</span>
              </div>
              <h3 class="text-xl font-bold text-white">Tools & DevOps</h3>
            </div>
          </div>
          <div class="relative z-10">
          <ul class="space-y-2">
            <li v-for="skill in toolsSkills" :key="skill" class="text-orange-50 flex items-center">
              <span class="text-orange-200 mr-2">✓</span>{{ skill }}
            </li>
          </ul>
        </div>
        </div>
        
        <!-- Soft Skills -->
        <div class="group relative bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 border border-pink-400 scroll-reveal delay-600 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div class="relative z-10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-white">Soft Skills</h3>
            </div>
          </div>
          <div class="relative z-10">
          <ul class="space-y-2">
            <li v-for="skill in softSkills" :key="skill" class="text-pink-50 flex items-center">
              <span class="text-pink-200 mr-2">✓</span>{{ skill }}
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const backendSkills = [
  'C#, ASP.NET Core',
  '.NET 5–8',
  'MVC, Web API, Blazor',
  'Entity Framework Core, LINQ'
]

const architectureSkills = [
  'RESTful API',
  'Repository Pattern',
  'Onion Architecture',
  '.NET Identity',
  'SOLID Principles'
]

const databaseSkills = [
  'MSSQL, PostgreSQL',
  'MongoDB, CosmosDB'
]

const frontendSkills = [
  'Vue.js, Nuxt.js, React',
  'JavaScript, TypeScript',
  'Bootstrap 4/5',
  'HTML/CSS'
]

const toolsSkills = [
  'GitHub / GitLab',
  'CI/CD pipelines',
  'Hangfire',
  'Docker',
  'Azure DevOps, Azure Portal'
]

const softSkills = [
  'Fast learner, teamwork',
  'Communication',
  'Requirement analysis',
  'Problem-solving'
]
</script>

