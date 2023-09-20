<template>
  <div class="baidu-sit">
    <div id="container" style="width: 800px;height: 500px"></div>
  </div>
</template>

<script setup >
  import {ref} from 'vue'
  
  onMounted(() => {
    var map = new BMap.Map('container')
    var point = new BMap.Point(116.404, 39.915)
    map.centerAndZoom(point, 15)
    map.enableScrollWheelZoom(true)
  })
  
</script>

<style lang="scss" scoped>
  #container {
    width: 500px;
    height: 300px;
  }
</style>e