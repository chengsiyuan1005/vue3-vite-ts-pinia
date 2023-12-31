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
    redirect: '/home/charts',
    component: () => import('../views/Home/index.vue'),
    children: [
      {
        path: 'charts',
        name: 'charts',
        component: () => import('../views/Home/charts.vue')
      },
      {
        path: 'aSit',
        name: 'aSit',
        component: () => import('../views/Home/sit.vue')
      },
      {
        path: 'bSit',
        name: 'bSit',
        component: () => import('../views/Home/baiduSit.vue')
      },
      {
        path: 'more',
        name: 'more',
        component: () => import('../views/Home/more.vue')
      },
    ]
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine/index.vue')
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