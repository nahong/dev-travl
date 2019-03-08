<template>
 <div>
     <div class="city-header">
          城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
     </div>
 </div>
</template>

<script>
 export default {
    name : 'CityHeader',
 }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
    .city-header
        position : relative
        overflow : hidden
        height : 2.8rem
        text-align : center
        color : #fff
        line-height : 2.8rem
        background : $bgColor
        .header-back
            position : absolute
            top : 0
            left : 0
            padding-left : .3rem
            color : #fff
</style>
