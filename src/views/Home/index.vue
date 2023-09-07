<template>
	<div class="home">
		<el-button type="primary">Home</el-button>
		<el-button @click="btnToLogin()">to login</el-button>
	</div>
</template>

<script lang="ts" setup>
	import { useRouter } from 'vue-router';
	import {userInfo} from '@/api/user'
	import {getCookie} from '@/utils/cookie'

	onMounted(() => {
		// 获取用户信息
		getUserInfo()
	})

	const router = useRouter();

	const btnToLogin = () => {
		router.push({
			name: 'login',
		});
	};

	const getUserInfo = async () => {
		let res = await userInfo(getCookie('userId'))
		console.log(res)
	}

	
	
	
</script>

