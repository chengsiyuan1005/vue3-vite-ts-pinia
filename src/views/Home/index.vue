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
	.mine-tip {
		position: fixed;
		top: 0;
		left: 0;
	}
</style>
