<template>
	<div class="home">
		<el-button type="primary">Home</el-button>
		<el-button @click="btnToLogin()">to login</el-button>
		<el-button @click="getNewsList()">news</el-button>
	</div>
</template>

<script lang="ts" setup>
	import { useRouter } from 'vue-router';
	import service from '../../api/index';

	const router = useRouter();

	const btnToLogin = () => {
		router.push({
			name: 'login',
		});
	};

	const getNewsList = async () => {
		let res = await service.newsList({
			pagenum: 1,
			pagesize: 20,
			sort: 'addtime',
			appkey: '96bc7fa736341beb',
		});
		console.log('newsList', res);
	};
</script>