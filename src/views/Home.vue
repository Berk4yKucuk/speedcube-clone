<template>
  <div class="main-menu-container">
    <h1>Ana Menü</h1>
    <router-link 
      v-for="i in 10" 
      :key="i" 
      :to="`/sayfa/${i}`" 
      class="menu-button"
    >
      {{ i }}. Sayfaya Git
    </router-link>
  </div>
</template>

<style scoped>
.main-menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  font-family: sans-serif;
}
.menu-button {
  display: block;
  width: 250px;
  padding: 10px;
  margin: 8px 0;
  text-align: center;
  background-color: #3498db; /* Mavi Buton */
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}
</style>