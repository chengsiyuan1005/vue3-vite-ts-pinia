<template>
  <div class="charts">
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import { cellVolHis, cellTempHis,socHis } from '@/api/charts';

  onMounted(() => {
    console.log('this is charts')
    getCellHis()
  })

  const getCellHis = async () => {
    let resVol = await cellVolHis('000016')
    let resTemp = await cellTempHis('000016')
    console.log('cell', resVol, resTemp)
  }
</script>