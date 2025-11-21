<script setup>
import { ref } from 'vue'

//jpg importları
import kapak1 from '@/assets/zeka-kupu.jpg' 
import kapak2 from '@/assets/rubik-kupu.jpg'

//mouse üstünde mi
const hover = ref(false) 
//istek listesinde mi
const istek = ref(false) 

</script>

<template>
  <div class="card">
    <div class="image_box" 
         @mouseenter="hover = true" 
         @mouseleave="hover = false">

      <span class="badge">YENİ</span>
      <span class="icon-heart" :class="{ 'aktif': istek }" @click="istek = !istek">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </span>
      

      <img v-show="!hover" :src="kapak1" class="product-img" />
      
      <img v-show="hover" :src="kapak2" class="product-img" />

    </div>
    
    <div class="details">
      <div class="tag">
        POPÜLER ÜRÜN
      </div>

      <h3 class="title">KARANLIKTA PARLAYAN ZEKA KÜPÜ KAÇMAZ FIRSAT</h3>
      
      <div class="price">25.50 TL</div>
    </div>

    <button class="add-btn">SEPETE EKLE</button>
  </div>
</template>

<style scoped>

/* kartın iskeleti */
.card {
  width: 300px;
  border: 1px solid #e5e5e5;
  padding: 15px;
  border-radius: 4px;
  font-family: 'Arial', sans-serif;
  background: white;
  position: relative;
}

/* resimi oturtacak çerçeve */
.image_box {
  position: relative; 
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin-bottom: 15px;
}

.product-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* etiketler */
.badge {
  position: absolute;
  top: 10px;
  left: 0;
  background-color: #ff9800;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 4px 10px;
  text-transform: uppercase;
  z-index: 2;
}

.icon-heart {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ccc;
  cursor: pointer;
}


.tag {
  color: #d32f2f;
  font-weight: bold;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.title {
  font-size: 1rem;
  color: #333;
  font-weight: normal;
  line-height: 1.4;
  margin-bottom: 15px;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;
}

.add-btn {
  width: 100%;
  background-color: #125b17; 
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.add-btn:hover {
  background-color: #16541a;
}

/* Kalp aktif olduğunda (tıklandığında) çalışır */
.icon-heart.aktif {
  color: #e91e63; 
}

/* SVG'nin içini de doldurmak için */
.icon-heart.aktif svg {
  fill: currentColor; 
}
</style>

