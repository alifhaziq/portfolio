<template>
  <section id="home" class="hero-section" aria-labelledby="hero-title">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-one" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-two" aria-hidden="true"></div>

    <div class="hero-inner">
      <div class="hero-copy">
        <p class="eyebrow hero-eyebrow scroll-reveal">
          <span class="availability-dot"></span>
          FULL STACK DEVELOPER <span class="eyebrow-divider">/</span> PUCHONG, MALAYSIA
        </p>

        <h1 id="hero-title" class="hero-title scroll-reveal delay-100">
          Muhammad<br />
          <span class="hero-title-accent">Alif Haziq</span><br />
          <span class="hero-title-outline">builds the web.</span>
        </h1>

        <p class="hero-description scroll-reveal delay-200">
          4+ years crafting beautiful, scalable web applications with modern
          technologies &mdash; from enterprise-grade backends in C# and ASP.NET Core
          to responsive interfaces in Vue.js and React.
        </p>

        <div class="hero-actions scroll-reveal delay-300">
          <a href="#projects" class="button button-lime">
            View projects
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a href="/Muhd_Alif_Haziq_CV.pdf" class="button button-outline" download>Download resume</a>
        </div>

        <dl class="hero-facts scroll-reveal delay-400">
          <div><dt>Location</dt><dd>Puchong, Malaysia</dd></div>
          <div><dt>Experience</dt><dd>4+ Years</dd></div>
          <div><dt>Contact</dt><dd><a href="tel:+60184650914">018-4650914</a></dd></div>
        </dl>
      </div>

      <div class="hero-visual scroll-reveal delay-200" role="img" aria-label="AH monogram surrounded by core technologies">
        <div class="orbit orbit-outer"></div>
        <div class="orbit orbit-inner"></div>
        <div class="hero-monogram">AH<span>.</span></div>
        <div class="floating-note note-top">
          <span class="note-icon note-code">C#</span>
          <span>ASP.NET Core<br />Web API</span>
        </div>
        <div class="floating-note note-bottom">
          <span class="note-icon note-code">&lt;/&gt;</span>
          <span>Vue.js · React<br />Nuxt.js</span>
        </div>
        <div class="visual-caption">
          <span class="caption-line"></span>
          <span>BACKEND TO FRONTEND</span>
        </div>
      </div>
    </div>

    <a class="scroll-cue" href="#about" aria-label="Scroll to about section">
      <span>SCROLL</span>
      <span class="scroll-cue-line"></span>
    </a>
  </section>
</template>
