<script setup>
import { ref, computed } from 'vue'

import cube1 from '@/assets/cube1.avif'
import cube2 from '@/assets/cube2.avif'
import cube3 from '@/assets/cube3.avif'

const sepetUrunleri = ref([
  { 
    id: 1, 
    ad: 'YuXin Little Magic 2x2', 
    fiyat: 5.95, 
    adet: 1, 
    resim: cube1 
  },
  { 
    id: 2, 
    ad: 'GAN 251 2x2 Pro', 
    fiyat: 32.95, 
    adet: 1, 
    resim: cube2 
  },
  { 
    id: 3, 
    ad: 'MoYu RS3 M 2020', 
    fiyat: 8.95, 
    adet: 1, 
    resim: cube3 
  }
])

//fiyat hesaplaması
const toplamFiyat = computed(() => {
  return sepetUrunleri.value.reduce((toplam, urun) => {
    return toplam + (urun.fiyat * urun.adet)
  }, 0).toFixed(2)
})

const toplamAdet = computed(() => {
  return sepetUrunleri.value.reduce((toplam, urun) => toplam + urun.adet, 0)
})

function adetArtir(urun) {
  urun.adet++
}

function adetAzalt(urun) {
  if (urun.adet > 1) urun.adet--
}

// --- BURAYI EKLE ---
// Progress Bar Yüzdesi (Max 100'de sabitlenir)
const dolulukYuzdesi = computed(() => {
  const mevcut = parseFloat(toplamFiyat.value)
  const hedef = 200
  let yuzde = (mevcut / hedef) * 100
  return yuzde > 100 ? 100 : yuzde
})

// Kalan Tutar Hesabı
const kalanTutar = computed(() => {
  const kalan = 200 - parseFloat(toplamFiyat.value)
  return kalan > 0 ? kalan.toFixed(2) : 0
})
// -------------------

</script>


<template>


  <div class="cart-container">
    <div class="cart-header">
      <h2>Shopping Cart</h2>
      <span class="close-btn">x</span>
    </div>
    <div class="item-count">{{ toplamAdet }} items</div>
    
    
    <div class="shipping-progress">
      <div class="progress-bg">
        <div class="progress-fill" :style="{ width: dolulukYuzdesi + '%' }"></div>
      </div>
      
      <p v-if="dolulukYuzdesi < 100" class="shipping-msg">
        Only <span class="red">$ {{ kalanTutar }}</span> away from FREE Shipping
      </p>
      <p v-else class="shipping-msg success">
        🎉 You got FREE Shipping!
      </p>
    </div>
    
    <div class="cart-items">
      <div v-for="urun in sepetUrunleri" :key="urun.id" class="cart-item">
        
        <div class="item-image">
          <img :src="urun.resim" alt="Ürün Resmi" />
        </div>

        <div class="item-details">
          <h3>{{ urun.ad }}</h3>
          <p class="price">$ {{ urun.fiyat }}</p>

          <div class="quantity-box">
            <button @click="adetAzalt(urun)">−</button>
            <span>{{ urun.adet }}</span>
            <button @click="adetArtir(urun)">+</button>
          </div>
        </div>

        <div class="remove-btn" >×</div>
      </div>
    </div>



    <div class="cart-footer">
      <span class="total-label">Total</span>
      <span class="total-price">$ {{ toplamFiyat }}</span>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  width: 400px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  font-family: sans-serif;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-header h2 { margin: 0; font-size: 1.2rem; }
.close-btn { font-size: 1.5rem; cursor: pointer; color: #666; }
.item-count { font-size: 0.9rem; color: #666; margin-bottom: 20px; margin-top: 5px;}

.cart-item {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  position: relative;
}

.item-image img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 4px;
}

.item-details {
  margin-left: 15px;
  flex: 1;
}

.item-details h3 { font-size: 0.95rem; margin: 0 0 5px 0; color: #333; }
.price { font-weight: bold; margin: 0 0 10px 0; }

.shipping-progress {
  margin-bottom: 20px;
  text-align: center;
}

.progress-bg {
  width: 100%;
  height: 10px;
  background-color: #333; 
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background-color: #ff9800; /* Turuncu Doluluk */
  transition: width 0.4s ease-out; /* Yumuşak geçiş */
}

.shipping-msg {
  font-size: 0.9rem;
  color: #555;
  margin: 0;
}

.red { color: #d32f2f; font-weight: bold; }
.success { color: #2e7d32; font-weight: bold; }

.quantity-box {
  display: inline-flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}
.quantity-box button {
  background: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  color: #555;
}
.quantity-box button:hover { background: #f9f9f9; }
.quantity-box span {
  padding: 5px 10px;
  min-width: 20px;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.remove-btn {
  position: absolute;
  right: 0;
  top: 40%;
  font-size: 2.5rem;
  color: #999;
  cursor: pointer;
}
.remove-btn:hover { color: #d32f2f; }

.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #f0f0f0;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>