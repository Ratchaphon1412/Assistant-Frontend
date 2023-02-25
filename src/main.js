import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'flowbite';
import 'flowbite/dist/flowbite.css'
import  'flowbite/dist/flowbite'
import VueKinesis from "vue-kinesis";
import 'atropos/css'
import { TroisJSVuePlugin } from 'troisjs'; // import the plugin Trois Three.js

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueKinesis)
app.use(router)
app.use(TroisJSVuePlugin) // use the plugin Trois Three.js

app.mount('#app')
