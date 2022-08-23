import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home.index',

      component: () => import('../views/HomeView.vue')
    },
    
    {
      path: '/personal',
      name: 'personal.index',

      component: () => import('../views/PersonalView.vue')
    },

    {
      path: '/skill',
      name: 'skil.index',

      component: () => import('../views/SkillView.vue')
    }

  ]
})

export default router
