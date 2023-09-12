import { createApp } from 'vue'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// elements-plus/icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './style.css'
import App from './App.vue'


// routes
import router from './router/index'

// pinia
import {createPinia} from 'pinia'
const pinia = createPinia

// echarts
import echarts from './utils/echarts'

const app = createApp(App)

app.config.globalProperties.$echarts = echarts // 挂载echarts

// 挂载IMG常量 - 头像
app.config.globalProperties.$AVATAR_BASE_URL = 'https://bms.i-hc.cn/wxapp/upload/'
// 挂载IMG常量 - 图片资源
app.config.globalProperties.$IMG_BASE_URL = 'https://bms.i-hc.cn/wxapp'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')


