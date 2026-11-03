<template>
  <section id="skills" class="content-section" aria-labelledby="skills-title">
    <div class="section-container">
      <div class="section-intro">
        <p class="eyebrow scroll-reveal">TECHNICAL SKILLS</p>
        <h2 id="skills-title" class="section-title scroll-reveal">The stack<br /><span>I build with.</span></h2>
      </div>

      <div class="skill-groups">
        <article
          v-for="(group, index) in groups"
          :key="group.title"
          class="skill-group scroll-reveal"
          :class="`delay-${(index % 2) * 100}`"
        >
          <div class="skill-group-heading">
            <span class="skill-number">0{{ index + 1 }}</span>
            <h3>{{ group.title }}</h3>
          </div>
          <ul class="skill-list">
            <li v-for="skill in group.items" :key="skill">{{ skill }}</li>
          </ul>
        </article>
      </div>

      <div class="soft-skills scroll-reveal">
        <h3 class="eyebrow">SOFT SKILLS</h3>
        <dl>
          <div v-for="skill in softSkills" :key="skill.name">
            <dt>{{ skill.name }}</dt>
            <dd>{{ skill.detail }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const groups = [
  { title: 'Backend', items: ['C#', 'ASP.NET Core', '.NET MVC', 'Web API'] },
  { title: 'Frontend', items: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML/CSS'] },
  { title: 'Database', items: ['SQL Server', 'MySQL', 'MongoDB'] },
  { title: 'Tools & DevOps', items: ['Git', 'Azure DevOps', 'Docker', 'CI/CD'] },
]

const softSkills = [
  { name: 'Problem Solving', detail: 'Analytical thinking & debugging' },
  { name: 'Team Collaboration', detail: 'Agile, code reviews & mentoring' },
  { name: 'Communication', detail: 'Clear documentation & presentations' },
  { name: 'Time Management', detail: 'Meeting deadlines & prioritization' },
  { name: 'Continuous Learning', detail: 'Staying updated with tech trends' },
  { name: 'Attention to Detail', detail: 'Code quality & user experience' },
]
</script>
