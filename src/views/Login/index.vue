<template>
	<div class="login">
		<div class="username"><span>用户名</span><input type="text" /></div>
		<div class="password"><span>密码</span><input type="text" /></div>
		<el-button type="primary" @click="toLogin()">Login</el-button>
		<button @click="toHome()">home</button>
	</div>
</template>

<script lang="ts" setup>
	import service from '../../http/index';
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
		let res = await service.login({ username: 'admin', password: '123' });
		console.log('login', res);
	};
</script>
