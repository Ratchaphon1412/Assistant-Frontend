import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'flowbite';
import 'flowbite/dist/flowbite.css'
import  'flowbite/dist/flowbite'

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
