<template>
	<div class="user">
    <div class="right-line">
      <home-button />
    </div>
	</div>
</template>

<script setup lang="ts">
	import HomeButton from '@/components/HomeButton/index.vue';
</script>

<style lang="scss" scoped>
  .user {
    background-color: #fff;
    width: 100vw;
    height: 100vh;
  }

  .right-line {
    position: fixed;
    height: 40vh;
    top: 30vh;
    width: 10vw;
    right: 0;
    align-items: center;
  }
</style>
