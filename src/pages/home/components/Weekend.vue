<template>
 <div>
   <div class="title"> 周末去哪儿</div>
    <ul>
        <li class="border-bottom" v-for="items of List" :key="items.id">
            <div class="item-img-url">
                <img class="item-img" :src="items.imgUrl" alt="">
            </div>
            <div class="item-info">
                <p class="item-title">{{items.title}}</p>
                <p class="item-desc">{{items.desc}}</p>
            </div>
        </li>
    </ul>
   
 </div>
</template>

<script>
 export default {
    name : 'HomeWeekend',
    props : {
        List : Array
    },
 }
</script>

<style lang="stylus" scoped>
@import "~styles/mixinis.styl";
    .title
        line-height : 1.6rem
        background : #eee
        padding-left : .4rem
        font-size : .8rem
        padding : .6rem
    .item-img-url
        overflow : hidden
        height : 0
        padding-bottom : 35%
        .item-img
            width : 100%
    .item-info
        padding : .6rem
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
</style>
