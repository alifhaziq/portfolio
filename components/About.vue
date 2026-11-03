<template>
  <section id="about" class="content-section" aria-labelledby="about-title">
    <div class="section-container">
      <div class="section-intro">
        <p class="eyebrow scroll-reveal">ABOUT ME</p>
        <h2 id="about-title" class="section-title scroll-reveal">Enterprise-grade<br /><span>web applications.</span></h2>
      </div>

      <div class="about-layout">
        <div class="about-copy scroll-reveal">
          <p class="about-lead">
            Full Stack Developer with 4 years of hands-on experience delivering
            enterprise-grade web applications.
          </p>
          <p>
            Proven track record in designing scalable backend systems, optimizing
            database performance, and building responsive user interfaces.
          </p>
          <p class="core-expertise">
            <strong>Core expertise</strong>
            C#, ASP.NET Core, MVC, Web API, Repository Pattern, Clean Architecture,
            React, Vue.js, SQL/NoSQL databases, CI/CD pipelines, Azure DevOps.
          </p>
          <a class="text-link" href="#contact">Work with me <span aria-hidden="true">↗</span></a>
        </div>

        <div class="about-stats">
          <article class="stat-card scroll-reveal">
            <span class="stat-number">4<span>+</span></span>
            <span class="stat-label">Years experience</span>
          </article>
          <article class="stat-card scroll-reveal delay-100">
            <span class="stat-number">10<span>+</span></span>
            <span class="stat-label">Technologies</span>
          </article>
          <article class="stat-card scroll-reveal delay-200">
            <span class="stat-number">5<span>+</span></span>
            <span class="stat-label">Major projects</span>
          </article>
        </div>
      </div>

      <div class="strengths scroll-reveal">
        <h3 class="eyebrow">KEY STRENGTHS</h3>
        <ul>
          <li v-for="strength in strengths" :key="strength">{{ strength }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const strengths = [
  'Full-stack development (Backend & Frontend)',
  'Clean Architecture & Design Patterns',
  'Database design & optimization',
  'CI/CD & Agile methodologies',
  'Code review & quality assurance',
  'Team collaboration & mentoring',
]
</script>
