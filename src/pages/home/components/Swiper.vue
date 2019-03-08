<template>
    <div class="swraper">
        <!-- 当我们请求数据时，还没等到数据过来swiper就会立即加载页面，所以每次刷新都是最后一张轮播图，解决办法，在swiper加if判断 -->
        <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
            <swiper-slide v-for="item of List" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"
                alt="">
            </swiper-slide>
            

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
export default {
    name: 'HomeSwiper',
    props : {
        List : Array
    },
    data () {
        return {
            swiperOption: {
                // 设置轮播切换出现的小圆圈
                pagination: '.swiper-pagination',
                // 设置轮播图片一直循环
                loop : true
            }
        }
    },
    computed : {
        showSwiper () {
           return this.List.length
        }
    }
}
</script>

<style lang="stylus" scoped>
// 设置小圆圈的背景色，这里在div标签下进行样式穿透找到swiper自带设置小圆圈的类进行设置
.swraper >>> .swiper-pagination-bullet-active
    background-color : #fff !important 
.swraper
    width : 100%
    height : 0
    overflow : hidden
    padding-bottom : 30%
    background-color : #ccc
    .swiper-img
        width: 100%
</style>

