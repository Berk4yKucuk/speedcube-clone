 <script setup>
// Logo resmi varsa import edebilirsin, yoksa yazıyla hallettik.
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
          <span class="flag">🇺🇸 USD ▾</span>
          <button class="cart-display">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff9800" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>Cart 0</span>
          </button>
        </div>
      </div>
    </div>

    <nav class="bottom-bar">
      <ul class="nav-links">
        <li>Our Story</li>
        <li>Halloween</li>
        <li>SALE</li>
        <li>New</li>
        <li>Cubes & Puzzles</li>
        <li>Collabs</li>
        <li>Lubricant</li>
        <li>Accessories</li>
        <li>Gift Cards</li>
        <li>Lifestyle</li>
        <li>Toys & Games</li>
        <li>Learn</li>
      </ul>
    </nav>

  </header>
</template>

<style scoped>

/* GENEL YAPILANDIRMA */
.navbar-container {
  background-color: #1c1c1c; /*zemin */
  color: white;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}

/*ÜST SATIR*/
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  gap: 20px;
}

/* Logo */
.logo {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1;
}
.logo-white { color: white; letter-spacing: -1px;}
.logo-orange { color: #ff9800; letter-spacing: -1px;}
.since { font-size: 0.7rem; color: #ccc; font-weight: normal; margin-top: 2px;}

/* Arama Kutusu */
.search-box {
  flex: 1; 
  max-width: 600px;
  display: flex;
}
.search-box input {
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-btn {
  background-color: #ff9800;
  border: none;
  padding: 0 15px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  color: black;
  display: flex;
  align-items: center;
}

/* Sağ Taraf Aksiyonlar */
.user-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 0.9rem;
}
.free-shipping { font-size: 0.75rem; font-weight: bold; text-transform: uppercase; }
.orange { color: #ff9800; }

.icon-btn, .account-link {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.account-link { font-weight: bold; }

.cart-btn {
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 4px;
  padding: 5px 10px;
  gap: 10px;
}
.flag { font-size: 0.8rem; border-right: 1px solid #555; padding-right: 10px; cursor: pointer;}
.cart-display {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

/* ALT SATIR*/
.bottom-bar {
  border-top: 1px solid #333333;
  padding: 10px 30px;
}
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  flex-wrap: wrap;
}
.nav-links li {
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
}
.nav-links li:hover { color: #ff9800; }
.highlight { display: flex; align-items: center; }

</style>