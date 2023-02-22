import axios from 'axios';
import {useAuthStore} from "@/stores/authStore.js";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

axios.interceptors.response.use(
    (response) => response,async error =>{
        const originalRequest = error.config;
        if(error.response.status === 401){
           const {status,data} = await axiosInstance.post('auth/jwt/refresh/', {"refresh": useAuthStore().refreshToken},{
            withCredentials: true,
           });
           if(status === 200){
               useAuthStore().accessToken = data.access;
               console.log(data.access);
               axiosInstance.defaults.headers.common['Authorization'] = `JWT ${data.access}`;
               return axiosInstance(originalRequest);
           }
        }
    }
);

export const auth = {
    async login(email, password) {
        let data = JSON.stringify({ "email":email, "password": password });
        const response = await axiosInstance.post('auth/jwt/create/', data);
        return response.data;
    },
    async me(accessToken){
        axiosInstance.defaults.headers.common['Authorization'] = `JWT ${accessToken}`;
        const response = await axiosInstance.get('auth/users/me/');
        return response.data;
    },
    async verify(accessToken){
        const response = await axiosInstance.post('auth/jwt/verify/');
        return response;
    },
    async register(email,username,password,first_name,last_name){
        let data = JSON.stringify({ "email":email, "username": username, "password": password, "first_name": first_name, "last_name": last_name });
        const response = await axiosInstance.post('auth/users/', data);
        return response;
    }

    
   

}

