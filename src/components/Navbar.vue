<script setup>
import { ref } from 'vue'

// MENÜ VERİSİ
// Dropdown yapmak istediğin maddenin içine 'altLinkler' eklemen yeterli.
const menuOgeleri = ref([
  { ad: 'Yeni', link: '#', altLinkler: ['Son Eklenenler', 'Yakında Gelecekler'] },
  { ad: 'Çok Satanlar', link: '#', altLinkler: ['3x3 Küpler', '4x4 Küpler'] },
  { ad: 'Tatil', link: '#', ozellestirme: '🎃' }, 
  { ad: 'Küpler', link: '#', altLinkler: ['Standart', 'Manyetik', 'Şekil Değiştiren'] },
  { ad: 'Markalar', link: '#', altLinkler: ['GAN', 'MoYu', 'YJ'] },
  { ad: 'Aksesuarlar', link: '#' },
  { ad: 'Oyunlar ve Oyuncaklar', link: '#' },
  { ad: 'Yaşam Tarzı', link: '#' },
  { ad: 'İndirimler', link: '#', ozellestirme: '🔥' }
])
</script>

<template>
  <header class="navbar-container">
    
    <div class="top-bar">
      <div class="logo">
        <span class="logo-white">speedcube</span>
        <span class="logo-orange">shop</span>
        <small class="since">ben yaptım (place holder)</small>
      </div>

      <div class="search-box">
        <input type="text" placeholder="Search" />
        <button class="search-btn">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>

      <div class="user-actions">
        <div class="free-shipping">
          <span class="orange">0.00$ HARCAMAYA</span> HER YERE ÜCRETSİZ KARGO (İÇİMDEN GELDİ)
        </div>
        <div class="icon-btn">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <div class="account-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Hesabım</span>
        </div>
        <div class="cart-btn">
          <span class="flag">us USD ▾</span>
          <button class="cart-display">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff9800" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>Cart 0</span>
          </button>
        </div>
      </div>
    </div>

    <nav class="bottom-bar">
      <ul class="nav-links">
        <li v-for="(oge, index) in menuOgeleri" :key="index" class="nav-item">
          
          <a :href="oge.link" class="main-link">
            <span v-if="oge.ozellestirme" class="icon">{{ oge.ozellestirme }}</span>
            {{ oge.ad }}
            <span v-if="oge.altLinkler" class="arrow">▾</span>
          </a>

          <ul v-if="oge.altLinkler" class="dropdown-menu">
            <li v-for="(altLink, i) in oge.altLinkler" :key="i">
              <a href="#">{{ altLink }}</a>
            </li>
          </ul>

        </li>
      </ul>
    </nav>

  </header>
</template>

<style scoped>
.navbar-container { background-color: #1c1c1c; color: white; font-family: sans-serif; display: flex; flex-direction: column; }
.top-bar { display: flex; align-items: center; justify-content: space-between; padding: 15px 30px; gap: 20px; }
.logo { display: flex; flex-direction: column; font-weight: bold; font-size: 1.5rem; line-height: 1; }
.logo-white { color: white; letter-spacing: -1px;}
.logo-orange { color: #ff9800; letter-spacing: -1px;}
.since { font-size: 0.7rem; color: #ccc; font-weight: normal; margin-top: 2px;}
.search-box { flex: 1; max-width: 600px; display: flex; }
.search-box input { width: 100%; padding: 10px 15px; border: none; border-radius: 4px 0 0 4px; outline: none; }
.search-btn { background-color: #ff9800; border: none; padding: 0 15px; border-radius: 0 4px 4px 0; cursor: pointer; color: black; display: flex; align-items: center; }
.user-actions { display: flex; align-items: center; gap: 20px; font-size: 0.9rem; }
.free-shipping { font-size: 0.75rem; font-weight: bold; text-transform: uppercase; }
.orange { color: #ff9800; }
.icon-btn, .account-link { display: flex; align-items: center; gap: 5px; cursor: pointer; }
.account-link { font-weight: bold; }
.cart-btn { display: flex; align-items: center; background-color: #333; border-radius: 4px; padding: 5px 10px; gap: 10px; }
.flag { font-size: 0.8rem; border-right: 1px solid #555; padding-right: 10px; cursor: pointer;}
.cart-display { background: none; border: none; color: white; font-weight: bold; display: flex; align-items: center; gap: 5px; cursor: pointer; }



.bottom-bar {
  border-top: 1px solid #333;
  padding: 0 30px;
  display: flex;
  justify-content: center; 
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px; 
  font-size: 0.9rem;
  font-weight: 600;
  height: 50px; 
  align-items: center;
}

/* Menü Öğesi (Parent) */
.nav-item {
  position: relative; 
  height: 100%;
  display: flex;
  align-items: center;
}

.main-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
  height: 100%;
}

.nav-item:hover .main-link {
  color: #ff9800;
}

.arrow {
  font-size: 0.7rem;
  color: #888;
}

/* --- DROPDOWN (AÇILIR KUTU) STİLLERİ --- */
.dropdown-menu {
  display: none; /* Başlangıçta gizli */
  position: absolute;
  top: 100%; /* Tam altına yapış */
  left: 50%;
  transform: translateX(-50%); /* Ortala */
  background-color: white;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border-radius: 0 0 4px 4px;
  padding: 10px 0;
  list-style: none;
  z-index: 100; /* Her şeyin üstünde olsun */
  border-top: 3px solid #ff9800; /* Üstüne turuncu çizgi */
}

/* Hover olunca göster */
.nav-item:hover .dropdown-menu {
  display: block;
  animation: fadeIn 0.2s ease-in-out;
}

/* Dropdown Linkleri */
.dropdown-menu li a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  font-size: 0.85rem;
  transition: background 0.2s;
}

.dropdown-menu li a:hover {
  background-color: #f4f4f4;
  color: #ff9800;
}

/* Minik bir animasyon */
@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}
</style>