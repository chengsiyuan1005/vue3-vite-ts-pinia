import { createApp } from 'vue'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style.css'
import App from './App.vue'

// routes
import router from './router/index'

// pinia
import {createPinia} from 'pinia'
const pinia = createPinia

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
