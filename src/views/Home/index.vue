<template>
	<div class="mine-tip">
		<mine-tip></mine-tip>
	</div>
	<div class="home">
		<router-view></router-view>
	</div>
</template>

<script lang="ts" setup>
	import MineTip from '@/components/UserTip/index.vue';
</script>

<style lang="scss" scoped>
	.home {
		width: 100vw;
		height: calc(100vh - 64px);
	}
</style>
