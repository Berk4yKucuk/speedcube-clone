<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="navbar-showcase">
    <Navbar />

    <router-link to="/" class="back-link">
      Ana Menü
    </router-link>

  </div>
</template>

<style scoped>
.back-link {
    color: #3498db;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    font-family: sans-serif;
    min-height: 200vh;
}
</style>