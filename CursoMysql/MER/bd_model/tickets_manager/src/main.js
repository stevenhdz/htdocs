import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import "element-plus/theme-chalk/index.css"
import 'element-plus/theme-chalk/display.css'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')