<script setup>
import UserDropdown from '../components/UserDropdown.vue'
</script>

<template>
  <div class="dropdown-showcase">
    
    <router-link to="/">Ana Menü</router-link>
    
    <div class="fake-navbar">
      <span class="brand">dummy navbar</span>
      <UserDropdown />
    </div>

  </div>
</template>

<style scoped>
.dropdown-showcase {
  background-color: #f4f4f4;
  min-height: 100vh;
  padding: 20px;
  font-family: sans-serif;
}
.top-nav a { text-decoration: none; color: #333; font-weight: bold; }

.fake-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-top: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.brand { font-weight: bold; font-size: 1.2rem; }
</style>