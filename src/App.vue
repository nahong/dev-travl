<template>
  <div id="app">
    <!-- 利用keepalive实现对json数据的缓存，当我们在发送请求的时候会直接到缓存取数据而不是从新发送请求 -->
    <keep-alive exclude="Detail">
      <!-- 利用exclude这个属性解决keep-alive中的缓存问题，这样每次点击一个详情页都会发一个请求 -->
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
