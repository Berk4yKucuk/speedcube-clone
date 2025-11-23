<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
    <router-link to="/" class="back-link">Ana Menü</router-link>
    <Footer />
</template>

<style scoped>

.back-link {
    color: #3498db;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    font-family: sans-serif;
}
</style>