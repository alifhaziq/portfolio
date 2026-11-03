<template>
  <section id="projects" class="content-section section-dark" aria-labelledby="projects-title">
    <div class="section-container">
      <div class="section-intro projects-intro">
        <div>
          <p class="eyebrow scroll-reveal">FEATURED PROJECTS</p>
          <h2 id="projects-title" class="section-title scroll-reveal">Selected work,<br /><span>built to be used.</span></h2>
        </div>
        <a class="button button-outline scroll-reveal" href="https://github.com/alifhaziq" target="_blank" rel="noopener noreferrer">
          More on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="project-list">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card scroll-reveal"
          :class="{ 'project-featured': index === 0 }"
        >
          <header class="project-head">
            <span class="project-index">{{ String(index + 1).padStart(2, '0') }}<span> / {{ String(projects.length).padStart(2, '0') }}</span></span>
            <h3>{{ project.title }}</h3>
          </header>

          <div class="project-body">
            <p class="project-label">Objective</p>
            <p class="project-description">{{ project.description }}</p>

            <p class="project-label">Contributions</p>
            <ul class="project-highlights">
              <li v-for="item in project.responsibilities" :key="item">{{ item }}</li>
            </ul>
          </div>

          <footer class="project-foot">
            <ul class="project-tags" aria-label="Technologies used">
              <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
            </ul>
            <div v-if="project.github || project.demo" class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer">
                GitHub <span aria-hidden="true">↗</span><span class="sr-only"> repository for {{ project.title }}</span>
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer">
                Live demo <span aria-hidden="true">↗</span><span class="sr-only"> of {{ project.title }}</span>
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  technologies: string[]
  responsibilities: string[]
  github?: string
  demo?: string
}

// Add `github` / `demo` URLs to a project and its link appears automatically.
const projects: Project[] = [
  {
    title: 'MyInvois',
    description: 'A comprehensive web application system enabling seamless electronic invoicing for businesses. Features role-based access and complete invoice lifecycle management.',
    technologies: ['C#', 'ASP.NET Core', 'React.js', 'SQL Server', 'Azure'],
    responsibilities: [
      'Developed RESTful APIs with ASP.NET Core for invoice processing',
      'Implemented role-based authentication system',
      'Built responsive UI with Vue.js and Vuetify',
      'Optimized database queries for faster data retrieval',
    ],
  },
  {
    title: 'Aset Alih Management System',
    description: 'Asset transfer management system streamlining the tracking and approval workflow of organizational asset movements.',
    technologies: ['C#', 'ASP.NET MVC', 'SQL Server', 'jQuery'],
    responsibilities: [
      'Built asset tracking module with approval workflow',
      'Implemented barcode scanning integration with ASP.NET Core',
      'Created reporting system for asset movement history with Nuxt.js',
      'Developed notification system for pending approvals with ASP.NET Core',
    ],
  },
  {
    title: 'Modern IT Training (Government)',
    description: "Delivered training sessions for government officers on modern .NET development, improving participants' coding standards and productivity.",
    technologies: ['.NET Core', 'ASP.NET MVC', 'Web API', 'Frontend Frameworks'],
    responsibilities: [
      'Conducted hands-on workshops for .NET Core, MVC, and Web API',
      'Delivered training sessions on frontend frameworks',
      "Improved participants' coding standards and productivity",
      'Created comprehensive training materials and documentation',
    ],
  },
  {
    title: 'MyInvois Feedback Form',
    description: 'User-friendly feedback collection system for MyInvois platform, streamlining user input gathering and analysis.',
    technologies: ['C#', 'ASP.NET MVC', 'email integration'],
    responsibilities: [
      'Designed feedback form with ASP.NET MVC',
      'Implemented email integration for feedback submission',
      'Created admin dashboard for feedback analysis',
    ],
  },
  {
    title: 'ProInvois',
    description: 'Middleware solution bridging businesses and MyInvois platform, automating invoice submission and validation for seamless e-invoicing integration.',
    technologies: ['C#', 'Nuxt.js', 'Tailwind CSS', 'MySQL'],
    responsibilities: [
      'Created middleware for MyInvois API integration',
      'Built invoice validation and transformation logic',
      'Developed dashboard with Nuxt.js and Tailwind CSS',
      'Implemented automated retry mechanisms for failed submissions',
    ],
  },
]
</script>
