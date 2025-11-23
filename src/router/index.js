import { createRouter, createWebHistory } from 'vue-router'
import ProductCardView from '../views/ProductCardView.vue'
import NavbarView from '../views/NavbarView.vue'
import FooterView from '../views/FooterView.vue'
import LoginView from '../views/LoginView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
import Home from '../views/Home.vue'


const routes = [
  //ana menü
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/sayfa/1',
    name: 'Sayfa1',
    component: ProductCardView 
  },
  
  {
    path: '/sayfa/2',
    name: 'Sayfa2',
    component: NavbarView 
  },

  {
    path: '/sayfa/3',
    name: 'Sayfa3',
    component: FooterView
  },
  {
  path: '/sayfa/4',
  name: 'Sayfa4',
  component: LoginView
  },
  {
  path: '/sayfa/5',
  name: 'Sayfa5',
  component: ShoppingCartView
  },
  //idle sayfalar
  { path: '/sayfa/6', name: 'Sayfa6', component: { template: '<h2>Sayfa 6 İçeriği Burada Olacak</h2>' } },
  { path: '/sayfa/7', name: 'Sayfa7', component: { template: '<h2>Sayfa 7 İçeriği Burada Olacak</h2>' } },
  { path: '/sayfa/8', name: 'Sayfa8', component: { template: '<h2>Sayfa 8 İçeriği Burada Olacak</h2>' } },
  { path: '/sayfa/9', name: 'Sayfa9', component: { template: '<h2>Sayfa 9 İçeriği Burada Olacak</h2>' } },
  { path: '/sayfa/10', name: 'Sayfa10', component: { template: '<h2>Sayfa 10 İçeriği Burada Olacak</h2>' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router