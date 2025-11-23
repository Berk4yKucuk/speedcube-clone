<script setup>
import ProductSlider from '../components/ProductSlider.vue'
</script>

<template>
  <div class="back-link">
    <router-link to="/">Ana Menü</router-link>
  </div>
  <div class="slider-view">
    <ProductSlider />

  </div>
</template>

<style scoped>
.slider-view {
  background-color: white;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
}

.back-link {
    color: #3498db;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    min-height: 50px;
    font-family: sans-serif;
}
</style>