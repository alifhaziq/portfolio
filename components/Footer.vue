<template>
  <footer class="site-footer">
    <a class="brand-mark footer-brand" href="#home" aria-label="Back to top">AH<span>.</span></a>
    <p>Designed and Built by Muhammad Alif Haziq.</p>
    <p>© {{ currentYear }} <span>·</span> Made in Malaysia</p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
