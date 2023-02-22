import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {auth} from '@/helpers/auth/index.js'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(null)
  const refreshToken = ref(null)
  const userID = ref(null)
  const isAuthenticated = computed(() => !!accessToken.value)

  async function login(email, password) {
    const response = await auth.login(email, password)
    accessToken.value = response.access
    refreshToken.value = response.refresh
    let responseAuth = await auth.me(accessToken.value)
    userID.value = responseAuth.id
    console.log(accessToken.value, refreshToken.value, userID.value);
  }
  async function register(email,username,password,first_name,last_name){
    const response = await auth.register(email,username,password,first_name,last_name)
    return response;
    }


  async function logout() {
    accessToken.value = null
    refreshToken.value = null
    userID.value = null
  }

  return {
    accessToken,
    userID,
    isAuthenticated,
    login,
    register,
    // refresh,
    logout,
  }
})