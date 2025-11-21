import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Yeni oluşturduğumuz router dosyasını içe aktar

const app = createApp(App)

app.use(router) // Router'ı uygulamaya dahil et

app.mount('#app')