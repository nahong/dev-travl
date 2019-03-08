<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
             <div class="header-right">{{this.$store.state.city}}
                <span class="iconfont">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    // ~@符号作为src根路径
    .header
        line-height : 2.4rem
        display : flex
        background-color : $bgColor
        color : #fff
        .header-left
            width : 2.1rem
            float : left
            .back-icon
                text-align : center
        .header-input 
            flex : 1
            height : 1.8rem
            line-height : 1.8rem
            margin-top : .3rem
            padding-left : .4rem
            background-color : #fff
            border-radius : .5rem
            margin-left : .6rem
            color : #ccc
        .header-right
            min-width : 4rem
            float : right 
            text-align : center
            font-size :.46rem
            padding : 0 .2rem
            color : #fff
</style>

