<template>
 <div class="icons">
     <swiper :options="swiperOption">
         <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl" alt="">
                </div>
                <p class="icons-img-desc" >{{item.desc}}</p>
            </div>
         </swiper-slide>
     </swiper>
 </div>
</template>

<script>
 export default {
    name : 'HomeIcons',
    props : {
        List : Array
    },
    data () {
        return {
            swiperOption : {
                autoplay : false//防止自动滚动效果
            }
        }
    },
    computed : {
        pages () {
            const pages = []
            this.List.forEach((item,index) => {
                //计算轮播图展示在第几页
                const page = Math.floor(index / 8)//对应取整
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
 }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixinis.styl"
.icons >>> swiper-container
    height : 0
    padding-bottom : 38%
.icons
    margin-top : .2rem
    .icon
        float : left 
        position : relative
        width : 25%
        padding-bottom : 19%
        height : 0
        .icon-img
            position : absolute
            top : 0
            left : 0
            right : 0
            bottom : 1.2rem
            box-sizing : border-box
            .icon-img-content
                height : 100%
                display : block
                margin : 0 auto
        .icons-img-desc
            position : absolute
            left : 0
            right : 0
            bottom : .25rem
            text-align : center
            color : $textDesc
            font-size : .5rem
            ellipsis()
</style>

