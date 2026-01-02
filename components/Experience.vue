<template>
  <section id="experience" class="bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
    <div class="section-container relative z-10">
      <h2 class="section-title text-center">
        <span class="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
          Work Experience
          <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
        </span>
      </h2>
      
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Current Position -->
        <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-l-8 border-green-500 transform hover:-translate-y-2 hover:scale-[1.02] scroll-reveal">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Software Developer</h3>
              <p class="text-lg text-gray-700 font-semibold">FGV Prodata System Sdn. Bhd</p>
              <p class="text-gray-600">Kuala Lumpur, Malaysia</p>
            </div>
            <span class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full text-sm mt-2 md:mt-0 shadow-lg shadow-green-500/30">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Jan 2024 - Present
            </span>
          </div>
          
          <div class="space-y-4 mb-6">
            <h4 class="font-semibold text-gray-900">Key Responsibilities & Achievements:</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span>Led deployments and maintenance of MyInvois application, ensuring stable releases and resolving critical application issues</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span>Reviewed PR requests in Azure DevOps to maintain code quality and best practices</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span>Developed backend APIs with .NET Core Web API and built responsive frontend components using React</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span>Built MyInvois Feedback Form (Helpdesk System) - a .NET MVC application with email workflows and data validation</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <span>Supported CI/CD automation and Agile workflows for timely feature delivery</span>
              </li>
            </ul>
          </div>
          
          <div class="pt-4 border-t border-gray-200">
            <p class="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in currentJobTechnologies" :key="tech" class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Previous Position -->
        <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-l-8 border-blue-500 transform hover:-translate-y-2 hover:scale-[1.02] scroll-reveal delay-200">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Back End Developer</h3>
              <p class="text-lg text-gray-700 font-semibold">Cloud Connect Sdn. Bhd</p>
              <p class="text-gray-600">Shah Alam, Selangor</p>
            </div>
            <span class="inline-block px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded text-sm mt-2 md:mt-0">
              Jan 2022 - Jan 2024
            </span>
          </div>
          
          <div class="space-y-4 mb-6">
            <h4 class="font-semibold text-gray-900">Key Responsibilities & Achievements:</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-600 mr-2">•</span>
                <span>Developed backend services using ASP.NET Core MVC and Web API (.NET 5) for Aset Alih Management System</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-2">•</span>
                <span>Designed hybrid database architecture using PostgreSQL and MongoDB for optimal performance</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-2">•</span>
                <span>Applied Repository Pattern and Onion Architecture for maintainable, scalable codebase</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-2">•</span>
                <span>Built frontend features with Vue.js/Nuxt.js and automated background tasks using Hangfire</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-2">•</span>
                <span>Conducted hands-on IT training for government staff on modern development practices and best coding standards</span>
              </li>
            </ul>
          </div>
          
          <div class="pt-4 border-t border-gray-200">
            <p class="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in previousJobTechnologies" :key="tech" class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const currentJobTechnologies = [
  'C#', '.NET Core Web API', 'MVC', 'React', 'JavaScript', 
  'Azure DevOps', 'Azure Portal'
]

const previousJobTechnologies = [
  '.NET 5', 'EF Core', 'PostgreSQL', 'MongoDB', 'Vue.js', 
  'Nuxt.js', 'Hangfire', 'Git'
]
</script>

