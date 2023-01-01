import { createRouter, createWebHistory } from 'vue-router'
import Characters from '../views/Characters.vue'
import Character from '../views/Character.vue'
import Home from '../views/Home.vue'


const routes = [
  { path: '/', component: Home },

  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
