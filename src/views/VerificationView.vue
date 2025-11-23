<script setup>
import VerificationCode from '../components/VerificationCode.vue'
</script>

<template>
  <div class="verification-view">
    
    <router-link to="/" class="back-link">Ana Menü</router-link>
    
    <VerificationCode />
    
  </div>
</template>

<style scoped>

.verification-view {
  min-height: 100vh;
  background-color: white; 
  padding: 20px;
}

.back-link {
    color: #3498db;
    padding: 10px;
    font-family: sans-serif;
}
</style>