<template>
 <div>
    <ul class="list">
        <li class="item" 
        v-for="item of options" 
        :key="item"
        :ref="item"
        @touchmove="handleTouchMove"
        @touchstart.prevent="handleTouchStart"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >
        <!-- 在真机测试中我们加.prevent为了阻止这个行为 -->
            {{item}}
        </li>
    </ul>
 </div>
</template>

<script>
 export default {
    name : 'CityAlphabet',
    props : {
        cities : Object
    },
    computed : {
        // 用一个方法去去到数组并返回
        options : function () {
            const options = []
            for (let i in this.cities) {
                options.push(i)
            }
            return options
        }
    },
    data () {
        return {
            touchStatus : false,
            startY : 0,
            timer : ""
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods : {
        handleLetterClick (e) {
            this.$bus.$emit("change",e.target.innerText)
            const message = e.target.innerText
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 15 //
                    const index =Math.floor((touchY - this.startY) / 17)  //17为每个字母的高度
                    if (index >= 0 && index <= this.options.length) {
                        this.$bus.$emit("change",this.options[index])
                    }
                },15)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
    // gaile
 }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.list
    display : flex
    flex-direction : column
    justify-content : center
    position : absolute
    top : .5rem
    right : .2rem
    bottom : 0
    width : .8rem
    .item
        line-height 1.1rem
        text-align : center
        color : $bgColor
        font-size : .4rem
    
</style>
