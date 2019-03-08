<template>
 <div>
     <div class="search">
         <input v-model="keyWorld" class="search-city" type="text" placeholder="请输入城市名字"> 
     </div>
     <div class="search-content" ref="search" v-show="keyWorld">
        <ul>
            <li class="search-keyworld border-bottom" 
            v-for="item of lists" 
            :key="item.id"
            @click="handleClickCity(item.name)"
            >{{item.name}}</li>
        </ul>
        <ul>
            <li class="search-keyworld border-bottom" v-show="hasNoData">没有找到匹配项</li>
        </ul>
    </div>
 </div>
</template>

<script>
import Bscroll from "better-scroll"
import {mapActions} from "vuex"
 export default {
    name : 'CitySearch',
    props: {
        cities : Object
    },
    data () {
        return {
            keyWorld : '',
            lists : [],
            timer : null
        }
    },
    methods: {
        handleClickCity (city) {
            // this.$store.dispatch("changeCity", city)
            this.changeCity(city)
            this.$router.push("/")
        },
        ...mapActions(['changeCity'])
    },
    watch : {
        keyWorld () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyWorld) {
                this.lists = []
                return
            }
            setTimeout(() => {
                const dataWorld = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyWorld) > -1 || value.name.indexOf(this.keyWorld) > -1) {
                            dataWorld.push(value)
                        }
                    });
                }
                this.lists = dataWorld
            },100)
        }   
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    },
    computed : {
        hasNoData () {
            return !this.lists.length
        }
    }
 }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
    height : 2rem
    padding : 0 .8rem
    padding-bottom : .2rem
    padding-right 1rem
    background : $bgColor
    .search-city
        -moz-box-sizing :border-box
        float : left
        width : 100%
        height : 1.5rem
        text-align : center
        margin-right : .5rem
        line-height : 1.5rem
        border-radius : .3rem
        color : #666
.search-content
    overflow : hidden
    z-index : 1
    position : absolute
    top : 4.8rem
    left : 0
    right : 0
    bottom : 0
    background : #eee
    .search-keyworld
        line-height : 1.3rem
        padding-left : .5rem
        background : #fff
        color : #666

    
</style>
