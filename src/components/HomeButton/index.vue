<template>
	<div class="home-button" @click="toHome">
		<el-icon size="2rem" color="#ccc">
			<HomeFilled />
		</el-icon>
	</div>
</template>

<script setup lang="ts">
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const toHome = () => {
		router.push('/home');
	};
</script>

<style lang="scss" scoped>
	.home-button {
		width: 3.6rem;
		height: 3.6rem;
		border-radius: 1.8rem;
		box-shadow: 0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.25);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.home-button:hover {
		background-color: #eee;
	}
</style>
