<script setup>
import LoginCard from '../components/LoginCard.vue'
</script>

<template>
  <div class="login-showcase">
    
    <LoginCard />

    <router-link to="/" class="back-link">Ana Menü</router-link>
  </div>
</template>

<style scoped>
.login-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  min-height: 100vh;
  font-family: sans-serif;
}
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