import { createRouter, createWebHistory } from 'vue-router'
import Usuario from '../views/Usuario.vue'

const routes = [
  {
    path: '/usuario',
    name: 'Usuario',
    component: Usuario
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
