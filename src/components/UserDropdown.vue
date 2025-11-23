<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const user = {
  name: 'Berkay KÜÇÜK',
  email: 'berkaykucuk1598@gmail.com',
}
</script>

<template>
  <div class="user-menu-wrapper">
    
    <div class="trigger-btn" @click="toggleMenu">
      
      <div class="icon-wrapper">
        <svg viewBox="0 0 24 24" fill="currentColor" class="user-icon">
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      </div>

      <span class="arrow-icon" :class="{ rotated: isOpen }">⌄</span>
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="dropdown-card">
        
        <div class="user-header">
           <div class="icon-wrapper large">
            <svg viewBox="0 0 24 24" fill="currentColor" class="user-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>

          <div class="user-info">
            <div class="name">{{ user.name }}</div>
            <div class="email">{{ user.email }}</div>
          </div>
        </div>

        <ul class="menu-list">
          <li><a href="#">Profil</a></li>
          <li class="divider"></li>
          <li><a href="#">Fırsatlar</a></li>
          <li><a href="#">Değerlendirmelerim</a></li>
          <li><a href="#">Kuponlarım</a></li>
          <li class="divider"></li>
          <li><a href="#">Sepetim</a></li>
          <li><a href="#">Beğendiklerim</a></li>
          <li><a href="#">Siparişlerim</a></li>
          <li class="divider"></li>
          <li><a href="#">Ayarlar</a></li>
          <li><a href="#" class="logout">Çıkış yap</a></li>
        </ul>
      </div>
    </transition>

  </div>
</template>

<style scoped>
.user-menu-wrapper {
  position: relative;
  display: inline-block;
  font-family: 'Inter', sans-serif;
}

.trigger-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 5px;
  border-radius: 20px;
  transition: background 0.2s;
}
.trigger-btn:hover { background-color: #f0f0f0; }

.icon-wrapper {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

.user-icon {
  width: 100%;
  height: 100%;
}

.icon-wrapper.large {
  width: 50px;
  height: 50px;
  color: #555;
}

.arrow-icon {
  font-size: 1.2rem;
  color: #666;
  transition: transform .3s;
}
.arrow-icon.rotated { transform: rotate(180deg); }

.dropdown-card {
  position: absolute;
  top: 120%;
  right: 0;
  width: 280px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  border: 1px solid #eee;
  padding: 10px 0;
  z-index: 100;
}

.user-header {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px 20px 20px;
}

.user-info .name { font-weight: bold; color: #333; font-size: 1rem; }
.user-info .email { color: #666; font-size: 0.85rem; }

.menu-list { list-style: none; padding: 0; margin: 0; }
.menu-list li a { display: block; padding: 10px 20px; color: #333; text-decoration: none; font-size: 0.95rem; transition: background 0.2s; }
.menu-list li a:hover { background-color: #f9f9f9; }
.menu-list li a.logout { color: #d32f2f; }
.divider { height: 1px; background-color: #eee; margin: 8px 0; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-10px); }
</style>