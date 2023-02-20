import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()  =>  import('@/views/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: ()  =>  import('@/views/About.vue')
    },{
      path: '/login',
      name: 'login',
      component: ()  =>  import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()  =>  import('@/views/Register.vue')
    }
    
  ]
})

export default router
