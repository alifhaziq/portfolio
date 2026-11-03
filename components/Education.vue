<template>
  <section id="highlights" class="education-section" aria-labelledby="highlights-title">
    <div class="section-container education-inner">
      <p class="eyebrow scroll-reveal">CAREER HIGHLIGHTS</p>
      <h2 id="highlights-title" class="education-quote scroll-reveal">
        Proof is in<br /><span>the delivery.</span>
      </h2>

      <ul class="highlight-grid">
        <li v-for="(item, index) in highlights" :key="item.value" class="scroll-reveal" :class="`delay-${index * 100}`">
          <span class="highlight-value">{{ item.value }}</span>
          <span class="highlight-label">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
// Every highlight below is taken from facts already stated in the portfolio.
const highlights = [
  { value: '4+ yrs', label: 'Delivering enterprise-grade web applications' },
  { value: '5+', label: 'Major projects, including MyInvois e-invoicing' },
  { value: 'Gov.', label: 'Trained government officers on modern .NET development' },
  { value: 'FYP', label: 'Final year project on enterprise web application development' },
]
</script>
