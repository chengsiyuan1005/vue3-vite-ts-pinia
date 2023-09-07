<template>
	<div class="mine-tip">
		<mine-tip></mine-tip>
	</div>
	<div class="home">
		<el-button type="primary">Home</el-button>
		<el-button @click="btnToLogin()">to login</el-button>
	</div>
</template>

<script lang="ts" setup>
	import { useRouter } from 'vue-router';
	import MineTip from '@/components/UserTip/index.vue'
	
	const router = useRouter();

	const btnToLogin = () => {
		router.push({
			name: 'login',
		});
	};
	
</script>

