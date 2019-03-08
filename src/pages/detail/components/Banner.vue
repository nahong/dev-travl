<template>
 <div>
     <div class="banner" @click="handleImg">
         <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
            <div class="banner-title">{{sightName}}</div>
            <div class="banner-number">
                <span class="iconfont">&#xe692;</span>
                33
            </div>
        </div>
     </div>
     <!-- 利用插槽实现动画渐变效果 -->
     <fade-animation>
        <banner-gallary 
            :imgs="bannerImgs" 
            v-show="imgshow" 
            @close="closeGallary">
        </banner-gallary>
     </fade-animation>
   
 </div>
</template>
<script>
import BannerGallary from 'common/gallary/Gallary'
import FadeAnimation from "common/fade/FadeAnimation"
 export default {
   name: "DetailBanner",
   props : {
       sightName : String,
       bannerImg : String,
       bannerImgs : Array 

   },
   data () {
       return {
           imgshow: false,
           imgs : []
       }
   },
   components: {
       BannerGallary,
       FadeAnimation
   },
   methods : {
       handleImg () {
           this.imgshow = true
       },
       closeGallary (y) {
           this.imgshow = false
       }
   }
 }
</script>

<style lang="stylus" scoped>
.banner
    position : relative
    overflow : hidden
    height : 0
    padding-bottom : 55%
    .banner-img
        width : 100%
    .banner-info
        display : flex
        position : absolute 
        left : 0
        right : 0
        bottom : 0
        line-height : 1rem
        background-image : linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
        .banner-title
            padding : 0 .4rem
            flex : 1
            color : #ffffff
        .banner-number
            height : 1.3rem
            line-height : 1.3rem
            border-radius : .3rem
            color : #fff
            padding : 0 .5rem
            margin-bottom : .3rem
            margin-right : .2rem
            font-size : .3rem
            background : rgba(0, 0, 0,.8)


 
</style>
