<template>
<!-- 详情页开发 -->
    <div class="container">
        <detail-banner 
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="dataList"></detail-list>
    </div>
</template>

<script>
import DetailBanner from "./components/Banner"
import DetailHeader from "./components/Header"
import DetailList from "./components/List"
import axios from "axios";
 export default {
   name:'Detail',
   components: {
       DetailBanner,
       DetailHeader,
       DetailList
   },
   data () {
       return {
           sightName : "",
           bannerImg : "",
           gallaryImgs : [],
           dataList : []
       }
   },
   methods : {
       getDataInfo () {
        //    有两种方式去获取id
        //    axios.get("/api/detail.json?id=" + this.$route.params.id)
        axios.get('/api/detail.json',{
            params : this.$route.params.id
        }).then(this.getHandleDataSucc)
       },
       getHandleDataSucc (res) {
           res = res.data
           if (res.ret && res.data) {
               const data = res.data
               this.sightName = data.sightName
               this.bannerImg = data.bannerImg
               this.gallaryImgs = data.gallaryImgs
               this.dataList = data.categoryList
           }
       }
   },
   mounted () {
       this.getDataInfo()
   }
 }
 
</script>

<style lang="stylus" scoped>
.container
    height : 80rem
 
</style>
