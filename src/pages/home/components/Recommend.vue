<template>
 <div>
   <div class="reommend-title"> 热销推荐</div>
    <ul>
        <!-- router-link这个标签在路由跳转时会默认a标签属性改变样式，解决方式，把<li>标签删了，在router-link 增加属性tag="li"就可以 -->
        <router-link class="item border-bottom"
            tag="li"
            v-for="item of List" 
            :key="item.id"
            :to="'/detail/'+item.id"
         >
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-btn">查看详情</button>
            </div>
        </router-link>
        
    </ul>
   
 </div>
</template>

<script>
 export default {
    name : 'HomeRecommend',
    props : {
        List : Array
    }
   
 }
</script>

<style lang="stylus" scoped>
@import "~styles/mixinis.styl";
// 这里引入一个输入文字超范围出现.....的方法，但是要在.item-info里设置最小宽度才起作用
    .reommend-title
        line-height : 1.6rem
        background : #eee
        margin-top : .2rem
        padding-left : .4rem
        font-size : .6rem
    .item
        overflow : hidden
        display : flex
        height : 6.5rem
    .item-img
        width : 6rem
        height : 5.6rem
        padding : .45rem
    .item-info
        flex : 1
        padding : .6rem
        min-width : 0
        .item-title
            line-height : .8rem
            font-size : .8rem
            padding-top : .1rem
            ellipsis()
        .item-desc
            line-height : 1.2rem
            color : #ccc
            font-size : 1rem
            margin-top : .5rem
            ellipsis()
        .item-btn
            margin-top : 1.1rem
            background : #ff9300
            border-radius : .03rem
            color : #fff
</style>
