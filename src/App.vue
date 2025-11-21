<script setup>
import ProductCard from './components/ProductCard.vue'
</script>

<template>
  <div class="center-screen">
    <ProductCard />
  </div>
</template>

<style>
/* Sayfayı ortalamak için basit stil */
body {
  margin: 0;
  background-color: #e3deded8;
}
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>