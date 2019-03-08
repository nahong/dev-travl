<template>
 <div>
     <div class="list">
         <div class="list-title border-bottom" 
         v-for="(item,index) of list"
         :key="index"
         >
             <span class="icon iconfont iconpiaowu list-content"></span>
             {{item.title}}
             <!-- vue中递归组件的用法实现二级，三级目录 -->
             <div v-if="item.people">
             <detail-list :list="item.people"></detail-list>
         </div>
         </div>
         
     </div>
 </div>
</template>

<script>
 export default {
   name : 'DetailList',
   props: {
       list : Array
   }
 }
</script>

<style lang="stylus" scoped>
.list-title
    line-height : 2rem
    padding 0 .6rem
    font-size : .8rem
    .list-content
        height : 1rem
        width : 1rem
        position : relative
        top : .1rem
        left : 0
        font-size : 1rem
        color : blue
        

 
</style>
