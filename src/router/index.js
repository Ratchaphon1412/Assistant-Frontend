import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js'

const authStore = useAuthStore();
function guardMyroute(to, from, next) {
 
    if(authStore.isAuthenticated.value){
      next();
    }
    else{
      next('/login');
    }
  
  
}


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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter : guardMyroute,
      component: ()  =>  import('@/views/Dashboard.vue')
    }
    
  ]
})

export default router
