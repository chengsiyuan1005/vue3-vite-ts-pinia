import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import { getCookie } from '@/utils/cookie';
import { ElMessage } from 'element-plus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Login/register.vue')
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: () => import('../views/Login/forgetPassword.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine/index.vue')
  },
  {
    path: '/sit',
    name: 'sit',
    component: () => import('../views/Sit/index.vue')
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../views/More/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 前置路由
router.beforeEach((to: RouterTo, from: RouterFrom, next:any) => {
  const token = getCookie('token') || ''
  if (to.name !== 'login' && !token) {
    ElMessage({
			showClose: true,
			message: 'token expire or no token, needs login',
			center: true,
		});
    next({name: 'login'})
  } else next()
})

// 后置守卫
router.afterEach((to: RouterTo, from: RouterFrom) => {
  //设置跳转路由后页面的标题
  document.title = to.name
})


export default router