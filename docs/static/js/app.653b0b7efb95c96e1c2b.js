webpackJsonp([1],{"/hcf":function(t,e){},"3eiX":function(t,e){},4949:function(t,e){},"9n10":function(t,e){},AaeA:function(t,e){},C2wA:function(t,e){},JqlJ:function(t,e){},K3b3:function(t,e){},Lsx0:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("C2wA")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v(this._s(this.$store.state.city)+"\n            "),e("span",{staticClass:"iconfont"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n        输入城市/景点/游玩主题\n    ")])}]};var u=i("VU/8")({name:"HomeHeader"},l,!1,function(t){i("Lsx0")},"data-v-7a31fe0f",null).exports,d={name:"HomeSwiper",props:{List:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.List.length}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swraper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.List,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var p=i("VU/8")(d,h,!1,function(t){i("4949")},"data-v-a19938a0",null).exports,f={name:"HomeIcons",props:{List:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.List.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icons-img-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var m=i("VU/8")(f,v,!1,function(t){i("AaeA")},"data-v-51e13477",null).exports,_={name:"HomeRecommend",props:{List:Array}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"reommend-title"},[t._v(" 热销推荐")]),t._v(" "),i("ul",t._l(t.List,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-btn"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var y=i("VU/8")(_,C,!1,function(t){i("yniW")},"data-v-45f01e0b",null).exports,w={name:"HomeWeekend",props:{List:Array}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v(" 周末去哪儿")]),t._v(" "),i("ul",t._l(t.List,function(e){return i("li",{key:e.id,staticClass:"border-bottom"},[i("div",{staticClass:"item-img-url"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var b=i("VU/8")(w,g,!1,function(t){i("3eiX")},"data-v-4380768e",null).exports,k=i("mtWM"),L=i.n(k),$=i("NYxO"),x={name:"Home",components:{HomeHeader:u,HomeSwiper:p,HomeIcons:m,HomeRecommend:y,HomeWeekend:b},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},computed:c()({},Object($.d)(["city"])),methods:{getHomeInfo:function(){L.a.get("./api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{List:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{List:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{List:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{List:t.weekendList}})],1)},staticRenderFns:[]};var E=i("VU/8")(x,S,!1,function(t){i("gyhR")},null,null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"city-header"},[this._v("\n         城市选择\n       "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)])},staticRenderFns:[]};var H=i("VU/8")({name:"CityHeader"},I,!1,function(t){i("opPS")},"data-v-3010d95c",null).exports,T=i("GQaK"),N={name:"CitySearch",props:{cities:Object},data:function(){return{keyWorld:"",lists:[],timer:null}},methods:c()({handleClickCity:function(t){this.changeCity(t),this.$router.push("/")}},Object($.c)(["changeCity"])),watch:{keyWorld:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyWorld?setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyWorld)>-1||i.name.indexOf(t.keyWorld)>-1)&&e.push(i)});t.lists=e},100):this.lists=[]}},mounted:function(){this.scroll=new T.a(this.$refs.search)},computed:{hasNoData:function(){return!this.lists.length}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWorld,expression:"keyWorld"}],staticClass:"search-city",attrs:{type:"text",placeholder:"请输入城市名字"},domProps:{value:t.keyWorld},on:{input:function(e){e.target.composing||(t.keyWorld=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyWorld,expression:"keyWorld"}],ref:"search",staticClass:"search-content"},[i("ul",t._l(t.lists,function(e){return i("li",{key:e.id,staticClass:"search-keyworld border-bottom",on:{click:function(i){return t.handleClickCity(e.name)}}},[t._v(t._s(e.name))])}),0),t._v(" "),i("ul",[i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-keyworld border-bottom"},[t._v("没有找到匹配项")])])])])},staticRenderFns:[]};var O=i("VU/8")(N,F,!1,function(t){i("ttJs")},"data-v-7f2c5df8",null).exports,R={name:"CityList",props:{cities:Object,hot:Array},computed:c()({},Object($.d)(["city"])),methods:c()({handleClickCity:function(t){this.changeCity(t),this.$router.push("/")}},Object($.c)(["changeCity"])),mounted:function(){var t=this;this.scroll=new T.a(this.$refs.wrapper),this.$bus.$on("change",function(e){if(e){var i=t.$refs[e][0];t.scroll.scrollToElement(i)}})}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleClickCity(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleClickCity(e.name)}}},[t._v("\n                    "+t._s(e.name)+"\n                ")])}),0)])})],2)])},staticRenderFns:[]};var A=i("VU/8")(R,U,!1,function(t){i("xHiH")},"data-v-7e0a9528",null).exports,V={name:"CityAlphabet",props:{cities:Object},computed:{options:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:""}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$bus.$emit("change",t.target.innerText);t.target.innerText},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-15,s=Math.floor((i-e.startY)/17);s>=0&&s<=e.options.length&&e.$bus.$emit("change",e.options[s])},15))},handleTouchEnd:function(){this.touchStatus=!1}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"list"},t._l(t.options,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchmove:t.handleTouchMove,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n           "+t._s(e)+"\n       ")])}),0)])},staticRenderFns:[]};var W={name:"City",data:function(){return{cities:{},hotCities:[]}},components:{CityHeader:H,CitySearch:O,CityList:A,CityAlphabet:i("VU/8")(V,D,!1,function(t){i("h8N1")},"data-v-994df18c",null).exports},methods:{getCityInfo:function(){L.a.get("/api/city.json?").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}}},mounted:function(){this.getCityInfo()}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("city-header"),this._v(" "),e("city-search",{attrs:{cities:this.cities}}),this._v(" "),e("city-list",{attrs:{cities:this.cities,hot:this.hotCities}}),this._v(" "),e("city-alphabet",{attrs:{cities:this.cities}})],1)},staticRenderFns:[]};var B=i("VU/8")(W,j,!1,function(t){i("/hcf")},"data-v-0a80cb60",null).exports,M={name:"BannerGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{handleClickGallary:function(){this.$emit("close")}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleClickGallary}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var G=i("VU/8")(M,P,!1,function(t){i("rZIq")},"data-v-4c44c9fa",null).exports,J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",[this._t("default")],2)],1)},staticRenderFns:[]};var q=i("VU/8")({name:"FadeAnimation"},J,!1,function(t){i("K3b3")},"data-v-4ef8a150",null).exports,Y={name:"DetailBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{imgshow:!1,imgs:[]}},components:{BannerGallary:G,FadeAnimation:q},methods:{handleImg:function(){this.imgshow=!0},closeGallary:function(t){this.imgshow=!1}}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleImg}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),t._m(0)])]),t._v(" "),i("fade-animation",[i("banner-gallary",{directives:[{name:"show",rawName:"v-show",value:t.imgshow,expression:"imgshow"}],attrs:{imgs:t.bannerImgs},on:{close:t.closeGallary}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n               33\n           ")])}]};var K=i("VU/8")(Y,z,!1,function(t){i("JqlJ")},"data-v-29939aee",null).exports,Z={name:"DetailHeader",data:function(){return{showBack:!0,styleOpacity:{opacity:0}}},methods:{ListenScrollElement:function(){var t=document.documentElement.scrollTop;if(t>34){var e=t/120;e=e>1?1:e,this.styleOpacity={opacity:e},this.showBack=!1}else this.showBack=!0}},activated:function(){console.log(),window.addEventListener("scroll",this.ListenScrollElement)},deactivated:function(){window.removeEventListener("scroll",this.ListenScrollElement)}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showBack,expression:"showBack"}],staticClass:"header-back",attrs:{to:"/"}},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showBack,expression:"!showBack"}],staticClass:"header-fixed",style:this.styleOpacity},[e("router-link",{staticClass:"title",attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-font-back"},[this._v("")]),this._v("\n           景点详情\n       ")])],1)],1)},staticRenderFns:[]};var Q=i("VU/8")(Z,X,!1,function(t){i("Zafr")},"data-v-41956859",null).exports,tt={name:"DetailList",props:{list:Array}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"list"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"list-title border-bottom"},[i("span",{staticClass:"icon iconfont iconpiaowu list-content"}),t._v("\n            "+t._s(e.title)+"\n            "),t._v(" "),e.people?i("div",[i("detail-list",{attrs:{list:e.people}})],1):t._e()])}),0)])},staticRenderFns:[]};var it={name:"Detail",components:{DetailBanner:K,DetailHeader:Q,DetailList:i("VU/8")(tt,et,!1,function(t){i("dwTg")},"data-v-0cde76dc",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],dataList:[]}},methods:{getDataInfo:function(){L.a.get("/api/detail.json",{params:this.$route.params.id}).then(this.getHandleDataSucc)},getHandleDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.dataList=e.categoryList}}},mounted:function(){this.getDataInfo()}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("detail-list",{attrs:{list:this.dataList}})],1)},staticRenderFns:[]};var nt=i("VU/8")(it,st,!1,function(t){i("dsPC")},"data-v-21ed3fe9",null).exports;s.a.use(r.a);var at=new r.a({routes:[{path:"/",name:"Home",component:E},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:nt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),rt=i("fC7K"),ot="北京";try{localStorage.city&&(ot=localStorage.city)}catch(t){}var ct={city:ot},lt={changeListCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use($.b);var ut=new $.a({state:ct,actions:{changeCity:function(t,e){t.commit("changeListCity",e)}},mutations:lt}),dt=i("F3EI"),ht=i.n(dt),pt=(i("9n10"),i("M6Sr"),i("v5o6")),ft=i.n(pt);i("TzC8"),i("v2ns");s.a.config.productionTip=!1,ft.a.attach(document.body),s.a.use(ht.a),s.a.use(rt.a),new s.a({el:"#app",router:at,store:ut,components:{App:a},template:"<App/>"})},TzC8:function(t,e){},Zafr:function(t,e){},dsPC:function(t,e){},dwTg:function(t,e){},gyhR:function(t,e){},h8N1:function(t,e){},opPS:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},rZIq:function(t,e){},ttJs:function(t,e){},v2ns:function(t,e){},xHiH:function(t,e){},yniW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.653b0b7efb95c96e1c2b.js.map