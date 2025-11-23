<script setup>
import { ref } from 'vue'

const footerSutunlari = ref([
  {
    baslik: 'ABOUT',
    linkler: ['Our Story', 'Reviews', 'Showroom', 'Gift Cards', 'Wallpapers & Logos']
  },
  {
    baslik: 'SUPPORT',
    linkler: ['Help Center', 'Contact Us', 'Order Editing', 'Wishlist', 'Rewards']
  },
  {
    baslik: 'LEARN',
    linkler: ['Getting Started', 'Rubik\'s Cube Tutorial', 'Parents', 'Get Faster', 'Lubrication', 'Community', 'Blog Posts']
  },
  {
    baslik: 'INFORMATION',
    linkler: ['Return & Refund Policy', 'Shipping Policy', 'Privacy Policy', 'Privacy Choices', 'Terms of Service', 'Messaging Terms & Conditions', 'Messaging Service Privacy Policy']
  }
])
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      
      <div v-for="(sutun, index) in footerSutunlari" :key="index" class="footer-col">
        <h3>{{ sutun.baslik }}</h3>
        <ul>
          <li v-for="link in sutun.linkler" :key="link">
            <a href="#">{{ link }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-col social-col">
        <h3>STAY CONNECTED</h3>
        <h3>(sosyal medya ikonları)</h3>
        
        <h3>GET SALES, NEW RELEASES, TIPS, AND NEWS</h3>
        
        <div class="newsletter-form">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>

.footer-container { background-color: #1c1c1c; color: white; padding: 60px 40px; font-family: 'Arial', sans-serif; border-top: 1px solid #333; }
.footer-content { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(5, 1fr); gap: 40px; }
h3 { font-size: 0.9rem; font-weight: bold; margin-bottom: 20px; letter-spacing: 0.5px; text-transform: uppercase; }
ul { list-style: none; padding: 0; margin: 0; }
li { margin-bottom: 12px; }


a {
  color: #ccc; /*noırmal renk*/
  text-decoration: none;
  font-size: 0.85rem;
}

/* Üzerine gelince turucun*/
a:hover {
  color: #ff9800;
}

.newsletter-form { display: flex; gap: 5px; }
input { flex: 1; padding: 10px; border: none; border-radius: 2px; outline: none; }
button { background-color: #ff9800; border: none; color: black; font-weight: bold; padding: 10px 15px; border-radius: 2px; cursor: pointer; transition: background 0.2s; }
button:hover { background-color: #e68900; }

</style>