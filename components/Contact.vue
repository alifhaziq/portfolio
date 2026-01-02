<template>
  <section id="contact" class="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
    </div>
    <div class="section-container relative z-10">
      <h2 class="section-title text-center">
        <span class="inline-block text-white relative">
          Get In Touch
          <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
        </span>
      </h2>
      
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            I'm currently open to new opportunities. Feel free to reach out for full-time positions, contract work, or collaborations.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <!-- Email -->
          <a 
            href="https://mail.google.com/mail/?view=cm&to=alifhaziq79@gmail.com" 
            target="_blank"
            class="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 transform hover:-translate-y-2 hover:scale-105 scroll-reveal delay-100"
          >
            <div class="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow">📧</div>
            <h3 class="text-xl font-bold text-white mb-2">Email</h3>
            <p class="text-blue-200 text-sm break-all">alifhaziq79@gmail.com</p>
          </a>
          
          <!-- WhatsApp -->
          <a 
            href="https://wa.me/60184650914" 
            target="_blank"
            class="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 transform hover:-translate-y-2 hover:scale-105 scroll-reveal delay-200"
          >
            <div class="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow" style="animation-delay: 0.2s">📱</div>
            <h3 class="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p class="text-green-200 text-sm">018-4650914</p>
          </a>
          
          <!-- LinkedIn -->
          <a 
            href="https://www.linkedin.com/in/haziqrosli96" 
            target="_blank"
            class="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 transform hover:-translate-y-2 hover:scale-105 scroll-reveal delay-300"
          >
            <div class="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow" style="animation-delay: 0.4s">💼</div>
            <h3 class="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p class="text-purple-200 text-sm">Connect with me</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(20px) translateX(-10px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}
</style>

