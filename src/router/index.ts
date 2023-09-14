import { createRouter, createWebHistory } from 'vue-router'
import main from '../components/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: main
    },

    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/MoreDetail.vue')
    },

    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesPhotos.vue')
    }
  ]
})

export default router
