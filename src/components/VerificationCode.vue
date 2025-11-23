<script setup>
import { ref } from 'vue'
import logo from '@/assets/website_logo.svg' 

const code = ref('')
const email = "berkaykucuk1598@gmail.com" 
</script>

<template>
  <div class="verify-wrapper">
    <div class="verify-card">
      
      <div class="logo-area">
        <img :src="logo" alt="SpeedCubeShop" width="180" />
      </div>

      <h1>Kodu girin</h1>
      <p class="info-text">
        <span class="email">{{ email }}</span> adresine gönderildi
      </p>

      <div class="input-group">
        <input 
          type="text" 
          v-model="code" 
          placeholder="6 haneli kod" 
          maxlength="6"
          class="code-input"
        />
      </div>

      <button class="submit-btn">Gönder</button>

      <a href="#" class="back-link">Farklı bir e-postayla giriş yapın</a>

    </div>
  </div>
</template>

<style scoped>
.verify-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.verify-card {
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border : 2px solid #ffffff37;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.logo-area {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #000;
}

.info-text {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.email {
  font-weight: 500;
  color: #333;
}

.code-input {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #2962ff; 
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background-color: #ff6d00; 
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 20px;
}

.submit-btn:hover {
  background-color: #e65100;
}

.back-link {
  display: inline-block;
  color: #2962ff;
  text-decoration: none;
  font-size: 0.95rem;
}

.back-link:hover {
  text-decoration: underline;
}
</style>