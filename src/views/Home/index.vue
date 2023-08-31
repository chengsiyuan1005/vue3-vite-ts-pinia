<template>
	<div class="home">
		<button>home</button>
		<button @click="btnToLogin()">to login</button>
	</div>
</template>

<script lang="ts" setup>
	import {} from '../../request/api';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const btnToLogin = () => {
		router.push({
			name: 'login',
		});
	};
</script>
