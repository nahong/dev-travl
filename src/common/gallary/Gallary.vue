<template>
 <div class="container" @click="handleClickGallary">
     <!-- 设置轮播 -->
     <div class="wrapper">
         <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) of imgs"
                :key="index"
                >
                <img class="gallary-img" :src="item" >
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
     </div>
 </div>
</template>

<script>
 export default {
   name : 'BannerGallary',
   props: {
       imgs: {
            type:Array,
            default () {
            return []
        }
       }
       
   },
   data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                // observe和observeParents功能是swiper插件只要监听到observe或者observeParents发生dom结构变化时，会自动的自我刷新一次
                observer:true,
                observeParents:true,
            }
        }
    },
    methods : {
        handleClickGallary () {
            this.$emit('close')
        }
    }
 }
</script>

<style lang="stylus" scoped>
.container >>> .swiper-pagination
    overflow :inherit
.container
    display : flex
    flex-direction : column
    justify-content : center
    position : fixed
    top : 0
    left : 0
    right : 0
    bottom : 0
    z-index : 88
    background : #000
    .wrapper
        width : 100%
        height : 0
        padding-bottom : 100%
        .gallary-img
            width : 100%
        .swiper-pagination
            color : #fff
            bottom : .3rem
 
</style>
