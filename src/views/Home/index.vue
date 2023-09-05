<template>
	<div class="home">
		<el-button type="primary">Home</el-button>
		<el-button @click="btnToLogin()">to login</el-button>
		<el-button @click="getRouterList()">RouterList</el-button>
	</div>
</template>

<script lang="ts" setup>
	import { useRouter } from 'vue-router';
	import {routes} from '../../api/home';

	const router = useRouter();

	const btnToLogin = () => {
		router.push({
			name: 'login',
		});
	};

	const getRouterList = async () => {
		let res = await routes()
		console.log(res)
	}
	
</script>