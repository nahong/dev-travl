<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot"
                        :key="item.id"
                        @click="handleClickCity(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
                v-for="(item,key) of cities" 
                :key="key"
                :ref="key"
                >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                         @click="handleClickCity(innerItem.name)"
                        >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll"
import { mapState ,mapActions} from "vuex"
 export default {
    name : 'CityList',
    props : {
        cities : Object,
        hot : Array,
    },
    computed: {
        ...mapState(['city'])

    },
    methods : {
        handleClickCity (city) {
            // this.$store.dispatch("changeCity", city)
            this.changeCity(city)
            this.$router.push("/")
        },
        ...mapActions(['changeCity'])
    },
    mounted () {
        // 添加scroll，但是之前必须让整个页面不动，设置position:absolute
        this.scroll = new Bscroll(this.$refs.wrapper)
        this.$bus.$on('change',target => {
            if (target) {
                const element = this.$refs[target][0]//拿到每个字母，如果后面不加[0],拿到的是数组
                this.scroll.scrollToElement(element)//当我们点击哪个字母，就会展示自动展示哪个字母对应的数据
            }
        })
    }
    // 通过这个方法拿到标签的dom
 }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.border-topbottom
    &:before
        border-color : #ccc
    &:after
        border-color : #ccc
.border-bottom
    &:before
        border-color : #ccc
.list
    position : absolute
    overflow : hidden
    top: 5rem
    left : 0
    right : 0
    bottom : 0
    .title
        line-height : 1.4rem
        padding-left : .4rem
        background : #eee
        color : #666
        font-size : .46rem
    .button-list
        overflow : hidden
        padding : .3rem
        .button-wrapper
            float : left
            width : 30.3%
            .button
                text-align : center
                border : .02rem solid #ccc
                margin : .3rem
                padding : .3rem
                font-size : .46rem
    .item-list
        .item
            line-height : 1.5rem
            padding-left .46rem
            font-size : .46rem

</style>
