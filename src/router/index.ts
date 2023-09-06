import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Login/index.vue')
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
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import('../views/Login/resetPassword.vue')
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router