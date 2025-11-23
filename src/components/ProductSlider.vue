<script setup>
import { ref, computed } from 'vue'

//resimler
import img1 from '@/assets/cube1.avif'
import img2 from '@/assets/cube2.avif'
import img3 from '@/assets/cube3.avif'
import ben from '@/assets/ben.jpeg'

//ürünler
const products = ref([
  { id: 1, name: 'Ürün 1', star: 2, price: 10.15, oldPrice: 20.30, discount: '-50%', reviews: 16, img: img1 },
  { id: 2, name: 'Ürün 2', star: 4, price: 15.00, label: 'New', reviews: 1, img: img2 },
  { id: 3, name: 'Ürün 3', star: 5, price: 4.22, oldPrice: 8.44, discount: '-50%', reviews: 48, img: img3 },
  { id: 4, name: 'Ürün 4', star: 1, price: 1.01, oldPrice: 100.10, discount: '-99%', reviews: 4, img: img1 },
  //2. sayfa
  { id: 5, name: 'Ürün 5', star: 0, price: 64.95, label: 'Hot', reviews: 120, img: img2 },
  { id: 6, name: 'Ürün 6', star: 1, price: 9.99, oldPrice: 10.01, discount: '-1%', reviews: 300, img: img3 },
  { id: 7, name: 'Ürün 7', star: 4, price: 32.99, reviews: 55, img: img1 },
  { id: 8, name: 'proje sahibi', star: 5, price: 999999.99, reviews: 999, img: ben },
])

//slider
const currentPage = ref(0) // 0: İlk 4lü, 1: İkinci 4lü

// toplam sayfa sayısı (8 ürün / 4 = 2 sayfa)
const maxPage = Math.ceil(products.value.length / 4) - 1

function nextPage() {
  if (currentPage.value < maxPage) {
    currentPage.value++
  } else {
    currentPage.value = 0 // başa sar
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--
  } else {
    currentPage.value = maxPage // sona git
  }
}
</script>

<template>
  <div class="slider-container">
    
    <button class="nav-btn prev" @click="prevPage">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
    </button>

    <div class="slider-window">
      <div class="slider-track" :style="{ transform: `translateX(-${currentPage * 100}%)` }">
        
        <div v-for="product in products" :key="product.id" class="slide-item">
          <div class="product-card">
            
            <div class="image-box">
              <img :src="product.img" alt="Product" />
              <span v-if="product.discount" class="badge discount">{{ product.discount }}</span>
              <span v-if="product.label" class="badge label">{{ product.label }}</span>
              <span class="heart-icon">♡</span>
            </div>

            <div class="info-box">
              <div class="rating">
                <span class="stars">
                  {{ '⭐'.repeat(product.star) + '☆'.repeat(5 - product.star) }}
                </span>
                
                <span class="review-text">{{ product.reviews }} reviews</span>
              </div>

              <h3 class="p-title">{{ product.name }}</h3>
              
              <div class="price-box">
                <span v-if="product.oldPrice" class="old-price">$ {{ product.oldPrice }}</span>
                <span class="current-price" :class="{'red-text': product.discount}">$ {{ product.price }}</span>
              </div>
            </div>

            <button class="add-btn">ADD TO CART</button>

          </div>
        </div>

      </div>
    </div>

    <button class="nav-btn next" @click="nextPage">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </button>

  </div>
</template>

<style scoped>
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; /* oklar ile slider arası boşluk */
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
}


.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  flex-shrink: 0; 
}
.nav-btn:hover {
  border-color: black;
  background-color: #f9f9f9;
}

/* slider penceresi */
.slider-window {
  width: 100%;
  overflow: hidden; /* diğer sayfaları gizle */
}

/* tren */
.slider-track {
  display: flex;
  width: 100%;
  /* geçiş animasyonu */
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); 
}

/* ürün kartları */
.slide-item {
  min-width: 25%; /* ekrana tam 4 tane sığması için %25 */
  box-sizing: border-box;
  padding: 0 10px; /*kartlar arası boşluk */
}

.product-card {
  background: white;
  border: 1px solid transparent;
  padding-bottom: 10px;
  transition: 0.3s;
}
.product-card:hover { border-color: #eee; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }

.image-box {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.image-box img { max-width: 100%; max-height: 100%; }

/* etiketler */
.badge {
  position: absolute; top: 0; left: 0;
  color: white; font-weight: bold; font-size: 0.8rem; padding: 3px 8px;
}
.discount { background-color: #d32f2f; }  
.label { background-color: #ff9800; }     
.heart-icon {
  position: absolute; top: 0; right: 0;
  font-size: 1.5rem; color: #ccc; cursor: pointer;
}

/* bilgiler */
.rating { font-size: 0.8rem; color: #ffc107; margin-bottom: 5px; }
.review-text { color: #666; margin-left: 5px; }

.p-title {
  font-size: 1rem; color: #333; height: 40px; 
  overflow: hidden; margin-bottom: 10px;
}

.price-box { margin-bottom: 15px; }
.old-price { text-decoration: line-through; color: #777; font-size: 0.9rem; margin-right: 8px; }
.current-price { font-weight: bold; font-size: 1.1rem; }
.red-text { color: #d32f2f; }

.add-btn {
  width: 100%;
  background-color: #1e6b23;
  color: white;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
}
.add-btn:hover { background-color: #16541a; }
</style>

