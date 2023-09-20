<template>
  <div>
    <el-button @click="btnClick1()">防抖</el-button>
    <el-button @click="btnClick2()">节流</el-button>
  </div>
</template>

<script setup lang="ts">
  import {throttle, debounce} from '@/utils/throttle'

  const btnClick1 = debounce((e) => {
    console.log('防抖')
  })

  const btnClick2 = throttle((e) => {
    console.log('节流')
  })


</script>