<template>
 <div>
     <city-header></city-header>
     <city-search :cities="cities"></city-search>
     <city-list :cities="cities" :hot="hotCities"></city-list>
     <!-- 创建字母表 -->
     <city-alphabet :cities="cities"></city-alphabet>
    <!-- 改动le  -->
 </div>
</template>

<script>
import axios from "axios"
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"

 export default {
    name : 'City',
    data () {
        return {
            cities : {},
            hotCities : []
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods : {
        getCityInfo () {
            axios.get('/api/city.json?')
                .then(this.handleGetCityInfoSucc)
        },
       handleGetCityInfoSucc (res) {
            res = res.data
        //判断是否有数据
           if (res.ret && res.data) {
               const data = res.data
               this.cities = data.cities
               this.hotCities  = data.hotCities
           }
       } 
    },
    mounted () {
        this.getCityInfo()
    },
    
 }
</script>

<style lang="stylus" scoped>

 
</style>
