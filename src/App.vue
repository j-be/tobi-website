<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main>
    <Navigation />
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </main>
</template>

<style>
@import './assets/base.css';
</style>
