<template>
  <section id="projects" class="bg-white">
    <div class="section-container">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 scroll-reveal inline-block hover:scale-105 transition-transform">
          Projects <span class="text-4xl animate-bounce-subtle inline-block">🚀</span>
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
      </div>
      
      <!-- Slider Container -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Navigation Buttons -->
        <button 
          @click="prevSlide" 
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white border-2 border-gray-200 hover:border-purple-600 -translate-x-6"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          :disabled="currentIndex === 0"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextSlide" 
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white border-2 border-gray-200 hover:border-purple-600 translate-x-6"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= projects.length - 1 }"
          :disabled="currentIndex >= projects.length - 1"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Slides -->
        <div class="overflow-hidden px-4">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <!-- Project Cards -->
            <div 
              v-for="(project, index) in projects" 
              :key="project.title" 
              class="w-full flex-shrink-0 px-4"
            >
              <div class="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 h-full">
                <!-- Project Number -->
                <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  {{ String(index + 1).padStart(2, '0') }}
                </div>
                
                <!-- Title -->
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {{ project.title }}
                </h3>
                
                <!-- Description -->
                <p class="text-gray-700 mb-6 leading-relaxed text-lg">
                  {{ project.description }}
                </p>
                
                <!-- Technologies -->
                <div class="mb-6">
                  <p class="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                    <span class="text-lg">🛠️</span> Tech Stack
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-3 py-1.5 bg-white text-purple-600 rounded-lg text-sm font-semibold border border-purple-200 hover:bg-purple-600 hover:text-white hover:scale-110 transition-all cursor-pointer"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <!-- Responsibilities -->
                <div>
                  <p class="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                    <span class="text-lg">✨</span> Key Features
                  </p>
                  <ul class="space-y-2">
                    <li 
                      v-for="(responsibility, idx) in project.responsibilities" 
                      :key="idx"
                      class="flex items-start gap-2 text-gray-700 text-sm hover:text-gray-900 transition-colors"
                    >
                      <span class="text-purple-500 mt-0.5 group-hover:scale-125 transition-transform">•</span>
                      <span>{{ responsibility }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(project, index) in projects"
            :key="index"
            @click="currentIndex = index"
            class="transition-all duration-300"
            :class="[
              currentIndex === index 
                ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full' 
                : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-purple-400'
            ]"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentIndex = ref(0);

const projects = ref([
  {
    title: 'Aset Alih Management System',
    description: 'Asset transfer management system streamlining the tracking and approval workflow of organizational asset movements.',
    technologies: ['C#', 'ASP.NET MVC', 'SQL Server', 'jQuery'],
    responsibilities: [
      'Built asset tracking module with approval workflow',
      'Implemented barcode scanning integration with ASP.NET Core',
      'Created reporting system for asset movement history with Nuxt.js',
      'Developed notification system for pending approvals with ASP.NET Core'
    ]
  },
  {
    title: 'Modern IT Training (Government)',
    description: 'Delivered training sessions for government officers on modern .NET development, improving participants\' coding standards and productivity.',
    technologies: ['.NET Core', 'ASP.NET MVC', 'Web API', 'Frontend Frameworks'],
    responsibilities: [
      'Conducted hands-on workshops for .NET Core, MVC, and Web API',
      'Delivered training sessions on frontend frameworks',
      'Improved participants\' coding standards and productivity',
      'Created comprehensive training materials and documentation'
    ]
  },
  {
    title: 'MyInvois',
    description: 'A comprehensive web application system enabling seamless electronic invoicing for businesses. Features role-based access and complete invoice lifecycle management.',
    technologies: ['C#', 'ASP.NET Core', 'React.js', 'SQL Server', 'Azure'],
    responsibilities: [
      'Developed RESTful APIs with ASP.NET Core for invoice processing',
      'Implemented role-based authentication system',
      'Built responsive UI with Vue.js and Vuetify',
      'Optimized database queries for faster data retrieval'
    ]
  },
  {
    title: 'MyInvois Feedback Form',
    description: 'User-friendly feedback collection system for MyInvois platform, streamlining user input gathering and analysis.',
    technologies: ['C#', 'ASP.NET MVC', 'email integration'],
    responsibilities: [
      'Designed feedback form with ASP.NET MVC',
      'Implemented email integration for feedback submission',
      'Created admin dashboard for feedback analysis'
    ]
  },
  {
    title: 'ProInvois',
    description: 'Middleware solution bridging businesses and MyInvois platform, automating invoice submission and validation for seamless e-invoicing integration.',
    technologies: ['C#', 'Nuxt.js', 'Tailwind CSS', 'MySQL'],
    responsibilities: [
      'Created middleware for MyInvois API integration',
      'Built invoice validation and transformation logic',
      'Developed dashboard with Nuxt.js and Tailwind CSS',
      'Implemented automated retry mechanisms for failed submissions'
    ]
  },
]);

const nextSlide = () => {
  if (currentIndex.value < projects.value.length - 1) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
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
