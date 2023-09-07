<!-- login view 切换按钮 -->
<template>
  <div class="login-btn">
    <el-link type="primary" @click="toLogin()" v-if="currentPath !== '/login'">Login</el-link>
    <el-link type="primary" @click="toRegister()" v-if="currentPath !== '/register'">Register</el-link>
    <el-link type="primary" @click="toForgetPassword()" v-if="currentPath !== '/forgetPassword'">ForgetPassword</el-link>
  </div>
</template>

<script setup lang="ts">
	import { useRouter } from 'vue-router';

  const router = useRouter()

  // 当前path
  const currentPath = router.currentRoute.value.path

  // to 登录
  const toLogin = () => router.push({name: 'login'})
  
	// to 注册
	const toRegister = () => router.push({name: 'register'})

  // to 忘记密码
  const toForgetPassword = () => router.push({name: 'forgetPassword'})
  
</script>

<style lang="scss" scoped>
  .login-btn {
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 24rem;
  }
</style>

