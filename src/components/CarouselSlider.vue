<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

import slide1 from '@/assets/slide1.jpg'
import slide2 from '@/assets/slide2.jpg'
import slide3 from '@/assets/slide3.webp'
import slide4 from '@/assets/slide4.webp'
import slide5 from '@/assets/slide5.webp'
const originalSlides = [slide1, slide2, slide3, slide4, slide5]

//sonsuz döngü için klonlu liste
const slides = ref([...originalSlides, originalSlides[0]])

const currentIndex = ref(0)
const isTransitioning = ref(true)
let autoPlayInterval = null

//geçişler
const nextSlide = () => {
  if (!isTransitioning.value) return

  isTransitioning.value = true
  currentIndex.value++

  if (currentIndex.value === slides.value.length - 1) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = 0
      nextTick(() => {
        setTimeout(() => { isTransitioning.value = true }, 50) 
      })
    }, 600)
  }
}

const prevSlide = () => {
  if (currentIndex.value === 0) {
    isTransitioning.value = false
    currentIndex.value = slides.value.length - 1
    
    setTimeout(() => {
      isTransitioning.value = true
      currentIndex.value--
    }, 50)
  } else {
    isTransitioning.value = true
    currentIndex.value--
  }
}

//otomatik oynatma
const startAutoPlay = () => {
  if (autoPlayInterval) return 
  autoPlayInterval = setInterval(nextSlide, 4000)
}

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval)
  autoPlayInterval = null
}

onMounted(startAutoPlay)
onUnmounted(stopAutoPlay)
</script>

<template>
  <div class="carousel-wrapper" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    
    <button class="nav-btn prev" @click="prevSlide">‹</button>

    <div class="slides-container">
      <div 
        class="slides-track" 
        :style="{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
        }"
      >
        <div v-for="(img, index) in slides" :key="index" class="slide">
          <img :src="img" class="slide-bg" alt="Slide" />
        </div>
      </div>
    </div>

    <button class="nav-btn next" @click="nextSlide">›</button>

    <div class="dots">
      <span 
        v-for="(item, index) in originalSlides" 
        :key="index" 
        class="dot" 
        :class="{ active: (currentIndex % originalSlides.length) === index }"
        @click="currentIndex = index; isTransitioning = true"
      ></span>
    </div>

  </div>
</template>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: #000;
}

.slides-container { width: 100%; height: 100%; }

.slides-track {
  display: flex;
  height: 100%;
}

.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.slide-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.nav-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3); 
  color: white; border: none;
  width: 60px; height: 60px; border-radius: 50%; font-size: 3rem;
  cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center;
  transition: 0.3s;
}

.nav-btn:hover { background: rgba(0, 0, 0, 0.6); }

.prev { left: 20px; }
.next { right: 20px; }


.dots {
  position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 12px; z-index: 10;
}
.dot {
  width: 10px; height: 10px; 
  background: rgba(255,255,255,0.4);
  border-radius: 50%; cursor: pointer;
  transition: 0.3s;
}
.dot.active { 
  background: white; 
  transform: scale(1.3);
}
</style>