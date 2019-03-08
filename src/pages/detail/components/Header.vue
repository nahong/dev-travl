<template>
 <div>
    <router-link 
    class="header-back" 
    to="/"
    v-show="showBack"
    >
        <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
     <div class="header-fixed" 
        v-show="!showBack"
        :style="styleOpacity"
        >
         <router-link to="/" class="title">
            <div class="iconfont header-font-back">&#xe624;</div>
            景点详情
        </router-link>
     </div>
 </div>
</template>

<script>
 export default {
     name : 'DetailHeader',
   data () {
     return {
        showBack : true,
        styleOpacity : {
            opacity : 0
        }
     }
     
   },
   methods : {
       ListenScrollElement () {
           const top = document.documentElement.scrollTop
           if (top > 34) {
               let opacity = top /120
               opacity = opacity > 1 ? 1 : opacity
               this.styleOpacity = { opacity }
               this.showBack = false
           } else {
               this.showBack = true
           }
       }
   },
//  当我们用到keep-alive这个组件时产生activated这个生命周期函数
   activated () {
       console.log()
       window.addEventListener('scroll',this.ListenScrollElement)
   },
//    全局事件解绑，在页面被隐藏或者切换刷新到其他页面时执行deactivated
   deactivated () {
       window.removeEventListener('scroll',this.ListenScrollElement)
   }
 }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header-back
    position : absolute
    top : .2rem
    left : .3rem
    height : 2rem
    width : 2rem
    border-radius : 50%
    text-align : center
    background : rgba(0,0,0,.8)
    .back-icon
        color :#fff
        margin-top : .4rem
        margin-right .2rem
 .header-fixed
    position : fixed
    top : 0
    left : 0
    height : 2.8rem
    text-align : center
    color : #fff
    line-height : 2.8rem
    background : $bgColor
    width : 100%
    z-index : 108
    .header-font-back
        position : absolute
        top : 0
        left : 0
        padding-left : .3rem
        color : #fff
    .title
        text-decoration: none
        color : #fff
 
</style>
