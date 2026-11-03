<template>
  <section id="experience" class="content-section section-soft" aria-labelledby="experience-title">
    <div class="section-container">
      <div class="section-intro">
        <p class="eyebrow scroll-reveal">EXPERIENCE & EDUCATION</p>
        <h2 id="experience-title" class="section-title scroll-reveal">Where I've<br /><span>been building.</span></h2>
      </div>

      <ol class="timeline">
        <li v-for="(job, index) in jobs" :key="job.company" class="timeline-item scroll-reveal" :class="`delay-${index * 100}`">
          <time class="timeline-date">{{ job.period }}</time>
          <div class="timeline-content">
            <h3>{{ job.role }}</h3>
            <p class="timeline-company">{{ job.company }}</p>
          </div>
        </li>
        <li class="timeline-item scroll-reveal delay-200">
          <time class="timeline-date">2018 – 2021</time>
          <div class="timeline-content">
            <h3>Diploma in Computer Engineering</h3>
            <p class="timeline-company">Politeknik Tuanku Syed Sirajuddin (PTSS)</p>
            <ul class="timeline-points">
              <li>Strong foundation in algorithms, data structures, and software engineering</li>
              <li>Specialized in web development and database management</li>
              <li>Completed final year project on enterprise web application development</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const jobs = [
  { role: 'Software Engineer', company: 'FGV Prodata System Sdn Bhd', period: 'Jan 2024 – Present' },
  { role: 'Backend Software Engineer', company: 'Cloud Connect Sdn Bhd', period: 'Jan 2022 – Jan 2024' },
]
</script>
