import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {auth} from '@/helpers/auth/index.js'

export const useAuthStore = defineStore('auth', () => {
 
  const userID = ref(null)
  const isAuthenticated = computed(() => !!localStorage.getItem('access'))
  // const isAuthenticated = computed(() => !!userID.value)

  async function login(email, password) {
    const response = await auth.login(email, password)

    localStorage.setItem( 'access', response.access);
    localStorage.setItem( 'refresh', response.refresh);
   
    let responseAuth = await auth.me(localStorage.getItem('access'))
    userID.value = responseAuth.id
    console.log(userID.value,localStorage.getItem('access'),localStorage.getItem('refresh'));
  }
  async function register(email,username,password,first_name,last_name){
    const response = await auth.register(email,username,password,first_name,last_name)
    return response;
    }


  async function logout() {

    userID.value = null
  }

  return {
    userID,
    isAuthenticated,
    login,
    register,
    logout,
  }
})