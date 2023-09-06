<!-- login view 切换按钮 -->
<template>
  <div>
    <el-button type="primary" @click="toLogin()">Login</el-button>
    <el-button type="primary" @click="toRegister()">Register</el-button>
    <el-button type="primary" @click="toForgetPassword()">ForgetPassword</el-button>
  </div>
</template>

<script setup lang="ts">
  import { login, register } from '../../api/login';
	import { useRouter } from 'vue-router';
	import { setCookie } from '../../utils/cookie';

  const props = defineProps({
    msg: {
      type: string,
      default: ''
    }
  })

  onMounted(() => {
    console.log('onMounted', props)
  })

  const router = useRouter()

  // 当前path
  // const currentPath = router.currentRoute.value

  const loginData = ref<ReqLogin>({
		username: '',
		password: '',
	});

  // to 登录
	const toLogin = async () => {
		console.log(router.currentRoute.value)
		let res = await login({ account: loginData.value.username, password: loginData.value.password });
		if (res.status === 200) {
			router.push({ name: 'home' });
			setCookie('token', res.data.accessToken, 7);
		}
	};

	// to 注册
	const toRegister = () => router.push({name: 'register'})

  // to 忘记密码

  
</script>