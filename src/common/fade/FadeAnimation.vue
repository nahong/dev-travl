<template>
 <div>
     <transition>
         <!-- 在detail->banner中实现动画插槽效果 -->
        <slot></slot>
     </transition>
 </div>
</template>

<script>
 export default {
   name : "FadeAnimation"
 }
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to 
    opacity : 0
.v-enter-active, .v-leave-active
    transition : opacity .5s
 
</style>
