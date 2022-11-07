<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import PageHeader from './components/Header.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import PageFooter from './components/Footer.vue'
</script>

<template>
  <main>
    <Navigation />
    <PageHeader />
    <Projects />
    <Contact />
    <PageFooter />
  </main>
</template>

<style lang="scss">
@import './assets/base.css';
@import './assets/startbootstrap-grayscale-customized.scss';
@import './assets/workarounds.scss';
</style>
