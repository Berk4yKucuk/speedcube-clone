<script setup>
  import CarouselSlider from '../components/CarouselSlider.vue'
</script>

<template>
  <div>
    <div style="padding: 20px;">
      <router-link to="/" class="back-link">Ana Menü</router-link>
    </div>
    
    <CarouselSlider />
    
  </div>
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