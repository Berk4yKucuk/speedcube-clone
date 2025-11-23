<script setup>
import ShoppingCart from '../components/ShoppingCart.vue'
</script>

<template>
  <div class="cart-showcase">
    <ShoppingCart />
    <router-link to="/" class="back-link">Ana Menü</router-link>
  </div>
</template>

<style scoped>
.cart-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  background-color: #f5f5f5;
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