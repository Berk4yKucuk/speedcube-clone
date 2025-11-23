<script setup>
import { ref } from 'vue'

//önce resimler
import img1 from '@/assets/product_page_cube1.avif' 
import img2 from '@/assets/product_page_cube2.avif'
import img3 from '@/assets/product_page_cube3.avif'
import img4 from '@/assets/product_page_cube4.avif'

//img listesi
const images = [img1, img2, img3, img4] 
const activeImage = ref(img1) 

//yan sayfa durumları
const selectedVersion = ref('Pro') // Hangi kutu seçili?
const activeTab = ref('DESCRIPTION') // Hangi sekme açık?

//versiyon Seçenekleri
const versions = [
  'Special Edition, Leap, UV', 
  'Leap, UV', 
  'Leap', 
  'Pro', 
  'Special Edition, Air', 
  'Air'
]

//resme tıklayarak değiştirmek
function changeImage(img) {
  activeImage.value = img
}

//slider ile değiştirmek
function nextImage() {
  let currentIndex = images.indexOf(activeImage.value)
  let nextIndex = (currentIndex + 1) % images.length
  activeImage.value = images[nextIndex]
}

function prevImage() {
  let currentIndex = images.indexOf(activeImage.value)
  let prevIndex = (currentIndex - 1 + images.length) % images.length
  activeImage.value = images[prevIndex]
}
</script>

<template>

  <div class="product-page">  
    <div class="main-section">
      <div class="gallery-col">
        
        <div class="main-image-box">
          <img :src="activeImage" class="big-img" />
        </div>
        
        <div class="thumbnails">
          <button class="arrow-btn" @click="prevImage">‹</button>
          
          <div class="thumb-list">
            <img 
              v-for="(img, index) in images" 
              :key="index" 
              :src="img" 
              @click="changeImage(img)"
              :class="{ 'active-thumb': activeImage === img }"
            />
          </div>
          
          <button class="arrow-btn" @click="nextImage">›</button>
        </div>
        
      </div>

      <div>
        <h1>GAN 251 2x2 Pro (Magnetic, Core Magnets)</h1>
        
        <div class="reviews">
          <span class="stars">★★★★★</span>
          <span class="review-count"> 999 reviews</span>
        </div>
        
        <div class="stock-status">Ready to ship!</div>
        
        <div class="price">$ 32.95</div>

        <div class="protection-plan">
          <input type="checkbox" id="protection"> 
          <label for="protection">Damage Protection +$ 1.70 <a href="#">Learn more</a></label>
        </div>

        <button class="add-to-cart-btn">ADD TO CART</button>

        <div>
          
          <div>
            <h3><span class="step-circle">1</span> Version</h3>
            <div class="version-buttons">
              <button 
                v-for="ver in versions" 
                :key="ver"
                :class="{ 'selected': selectedVersion === ver }"
                @click="selectedVersion = ver"
              >
                {{ ver }}
              </button>
            </div>
          </div>

          <div>
            <h3><span class="step-circle">2</span> Customize This Item</h3>
          </div>

          <div>
            <h3><span class="step-circle">3</span> Add Ons</h3>
              <label>
                <input type="checkbox" v-model="addOnChecked"> 
                Add Martian Lubricant to your order
              </label>
          </div>

        </div>
      </div>
    </div>

    <div class="bottom-tabs">
      <div class="tab-headers">
        <span :class="{ active: activeTab === 'DESCRIPTION' }" @click="activeTab = 'DESCRIPTION'">DESCRIPTION</span>
        <span :class="{ active: activeTab === 'REVIEWS' }" @click="activeTab = 'REVIEWS'">REVIEWS</span>
        <span :class="{ active: activeTab === 'DETAILS' }" @click="activeTab = 'DETAILS'">DETAILS</span>
        <span :class="{ active: activeTab === 'RETURNS' }" @click="activeTab = 'RETURNS'">90 DAY RETURNS</span>
      </div>
      <div class="tab-content">
        <p v-if="activeTab === 'DESCRIPTION'">
          açıklama yazacak  
        </p>
        <p v-if="activeTab === 'REVIEWS'">
          oylamalar yazacak
        </p>
        <p v-if="activeTab === 'DETAILS'">
          ürün detayları
        </p>
        <p v-if="activeTab === 'RETURNS'">
          iade koşulları
        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background: white;
}

.main-section {
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
}

/* resim galerisi */
.gallery-col { flex: 1; }

.main-image-box {
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.big-img { width: 110%; max-width: 500px; height: auto; }

.thumbnails { display: flex; align-items: center; justify-content: center; gap: 10px; }
.thumb-list { display: flex; gap: 10px; }
.thumb-list img {
  width: 60px; height: 60px; border: 1px solid #ddd; cursor: pointer; object-fit: contain;
}
.thumb-list img.active-thumb { border: 2px solid #ff9800; }
.arrow-btn { border: 1px solid #ddd; background: white; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; }


/* detaylar */
.reviews { margin-bottom: 10px; font-size: 0.9rem; }
.stars { color: #ffc107; margin-right: 5px; }
.stock-status { color: #2e7d32; font-size: 0.9rem; margin-bottom: 15px; }
.price { font-size: 1.8rem; font-weight: bold; margin-bottom: 15px; }
.protection-plan { margin-bottom: 20px; font-size: 0.9rem; display: flex; align-items: center; gap: 5px; }
.protection-plan a { color: #2962ff; text-decoration: none; font-weight: bold; }

.add-to-cart-btn {
  width: 100%; background-color: #1e6b23; color: white;
  padding: 15px; font-weight: bold; border: none; font-size: 1rem;
  cursor: pointer; margin-bottom: 30px;
  transition: background 0.2s;
}
.add-to-cart-btn:hover { background-color: #16541a; }

/* seçenekler */
.step-circle {
  background: black; color: white; border-radius: 50%;
  width: 20px; height: 20px; display: inline-flex;
  align-items: center; justify-content: center; font-size: 0.8rem; margin-right: 5px;
}
h3 { font-size: 1rem; margin-bottom: 15px; display: flex; align-items: center; }

.version-buttons { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
.version-buttons button {
  padding: 10px 15px; background: white; border: 1px solid #ccc;
  border-radius: 4px; cursor: pointer; font-weight: bold; color: #555;
}
/* seçili buton kenarlık */
.version-buttons button.selected {
  border: 2px solid #ff9800; color: black;
}

.addon-info select { margin-top: 5px; padding: 5px; width: 100%; border: 1px solid #ccc; }

/* aşağıdaki bilgi menüleri */
.bottom-tabs { border-top: 1px solid #eee; margin-top: 20px; }
.tab-headers { display: flex; border-bottom: 1px solid #eee; }
.tab-headers span {
  padding: 15px 30px; cursor: pointer; font-weight: bold; font-size: 0.9rem; color: #555;
  border-bottom: 3px solid transparent;
}
.tab-headers span.active {
  border-bottom: 3px solid black; color: black;
}
.tab-content { padding: 20px 0; line-height: 1.6; color: #444; }

</style>