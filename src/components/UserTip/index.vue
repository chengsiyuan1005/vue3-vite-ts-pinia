<template>
  <el-affix :offset="10">
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix>
</template>

<script setup lang="ts">
  import {getCookie} from '@/utils/cookie'
  import { userInfo } from '@/api/user';

  onMounted(() => {
		// 获取用户信息
		getUserInfo()
	})

  const getUserInfo = async () => {
		let res = await userInfo(getCookie('userId'))
		console.log(res)
	}
</script>
