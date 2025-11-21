<script setup>
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <div class="product-card-view">
    <div class="card-display">
      <ProductCard />
    </div>
    
    <router-link to="/" class="back-link">
      Ana Menü
    </router-link>
  </div>
</template>

<style scoped>
.product-card-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  font-family: sans-serif;
  min-height: 100vh;
}
.card-display {
  margin: 30px 0;
}
.back-link {
    margin-top: 20px;
    color: #3498db;
    text-decoration: none;
}
</style>