<script setup>
import ProductPage from '../components/ProductPage.vue'
</script>

<template>
  <div class="product-page-view">
    <router-link to="/" class = "back-link">
         Ana Menü
    </router-link>
    <ProductPage />
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
.product-page-view {
  background-color: #f9f9f9;
  min-height: 100vh;
  padding-bottom: 50px;
}
</style>