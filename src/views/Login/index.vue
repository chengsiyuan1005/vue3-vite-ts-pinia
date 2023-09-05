<template>
	<div class="login">
		<div class="username"><span>用户名</span><input type="text" /></div>
		<div class="password"><span>密码</span><input type="text" /></div>
		<el-button type="primary" @click="toLogin()">Login</el-button>
		<button @click="toHome()">home</button>
		<button @click="getCaptcha()">captcha</button>
	</div>
</template>

<script lang="ts" setup>
	import {login, captcha} from '../../api/login';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	// const toLogin = async () => {
	// 	let res = await login({ account: 'admin', password: '123456' });
	// 	console.log('login', res);
	// };

	const toHome = () => {
		router.push({ name: 'home' });
	};

	const toLogin = async () => {
		let res = await login();
		console.log('login', res);
	};

	const getCaptcha = async () => {
		let res = await captcha()
		console.log('captcha', res)
	}

</script>