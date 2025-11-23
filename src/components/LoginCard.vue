<script setup>
import { ref } from 'vue'
import logo from '@/assets/website_logo.svg'

const email = ref('')
</script>

<template>

  <div class="login-wrapper">
    <div class="login-card">
      
      <div class="logo-area">
        <img :src="logo" alt="SpeedCubeShop Logo" class="main-logo" />
      </div>

      <h1>Giriş yapın</h1>
      <p class="subtitle">İstediğiniz giriş yapma yöntemini seçin</p>

      <button class="shop-btn">
        <span class="shop-text">shop</span> ile giriş yapın
      </button>

      <div class="divider">
        <span>veya</span>
      </div>

      <div class="form-group">
        <input type="email" v-model="email" placeholder="E-posta" class="email-input" />
      </div>

      <button class="continue-btn">Devam et</button>

    </div>
  </div>
</template>

<style scoped>
/* Kartın dış kapsayıcısı (Ortalamak için opsiyonel) */
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-card {
  background: white;
  width: 400px;
  padding: 40px;
  border-radius: 8px;
  border: 2px solid #e5e5e5; /*çerçeve*/
  text-align: left; 
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}

.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.main-logo {
  width: 150px; 
  height: auto; 
  object-fit: contain;
}



.subtitle {
  color: #666;
  font-size: 0.95rem;
  margin: 0 0 30px 0;
}

button, input {
  width: 100%;
  box-sizing: border-box; 
  border-radius: 5px;
  font-size: 1rem;
}

.shop-btn {
  background-color: #5b31f4dd; 
  color: white;
  border: none;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.shop-btn:hover { background-color: #4820d4; }
.shop-text { font-family: sans-serif; font-weight: 900; letter-spacing: -1px;}

.divider {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  color: #666;
  font-size: 0.9rem;
}
.divider::before, .divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
}
.divider span {
  padding: 0 10px;
}

.email-input {
  padding: 12px 15px;
  border: 1px solid #2962ff; 
  margin-bottom: 15px;
  color: #333;
}

.continue-btn {
  background-color: #f5f5f5; /* Açık gri */
  color: #757575; /* Koyu gri yazı */
  border: none;
  padding: 12px;
  cursor: pointer;
  font-weight: 500;
}
.continue-btn:hover { background-color: #e0e0e0; }

</style>