import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import "element-plus/theme-chalk/index.css"
import 'element-plus/theme-chalk/display.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(VueSweetalert2).use(ElementPlus).use(store).use(router).mount('#app')
