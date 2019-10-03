<template>
    <div id="cart"> 
        <HomeNav></HomeNav>
         <TabControl :list = "['流行', '新款', '精选']" @clickIndex = 'clickIndex' ref="control2" class="control2" v-show="flag2"></TabControl>
        <BScroll class="wrapper" ref="wrapperr" @TopScroll="TopScroll" :Type="3" :upload="true" @pullingUp = 'pullingUp'>
            <HomeSwiper :swiperList = "swiperList" @Imgload = 'Imgload'></HomeSwiper>
            <HomeInfo :recommends = "recommends"></HomeInfo>
            <HomeImg id="lo"></HomeImg>
            <TabControl :list = "['流行', '新款', '精选']" @clickIndex = 'clickIndex' ref="control1"></TabControl>
            <GoodList :goodList = "this.goodsList[currentIndex].list"></GoodList>
        </BScroll>
        <BackTop  @click.native="clickButton" v-show="flag" class="trans"></BackTop>
    </div>
</template>

<script>
import HomeNav from './HomeNav'

import {getHomeInfo, getGoods} from '../../network/home.js'

// import {Swiper, SwiperItem} from '../../components/common/swiper/index'
import HomeSwiper from './HomeSwiper'
import HomeInfo from './HomeInfo'
import HomeImg from './HomeImg'


import TabControl from '../../components/common/tabcontrol/TabControl'
import GoodList from '../../components/content/goods/GoodsList'
import BScroll from '../../components/content/scroll/BScroll'
import BackTop from '../../components/common/backTop/BackTop.vue'
import {debounce} from '../../util/util'
export default {
    name: 'Home',
      meta:{
        keepAlive: true
    },
    components: {
        HomeNav,
        // Swiper,
        // SwiperItem
        HomeSwiper,
        HomeInfo,
        HomeImg,
        TabControl,
        GoodList,
        BScroll,
        BackTop
    },
    data() {
        return {
            swiperList: [],
            recommends: [],
            goodsList: {
                'pop': {
                    page: 0,
                    list: []
                },
                'new': {
                    page: 0,
                    list: []
                },
                'sell': {
                    page: 0,
                    list: []
                }
            },
            currentIndex: 'pop',
            flag: false,
            flag2: false,
            saveY: ''
        }
    },
     created() {
        this.getInfo()
        this.getGoods('pop')
        this.getGoods('new')
        this.getGoods('sell')
        console.log(6666)
    },
    activated() {
        console.log(this.$refs.wrapperr.refresh())
    },
    mounted(){
        this.$bus.$on('load', () => {
            // console.log(this.$refs.wrapperr)
           debounce(this.$refs.wrapperr.refresh, 200)
        })
    },
    methods:{
        getInfo(){
            getHomeInfo().then(res => {
                    // console.log(res.data.data)
                    this.swiperList = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                }).catch(err => {
                    console.log(err)
                })
        },
        getGoods(type){
            let _page = this.goodsList[type].page + 1
            getGoods(type, _page).then(res => {
                this.goodsList[type].page = _page;
                this.goodsList[type].list.push(...res.data.data.list)
                
                //完成加载更多
                this.$refs.wrapperr.finshed()
            }).catch(err => {
                console.log(err)
            })
        },
        clickIndex(index) {
            console.log(index)
            switch(index){
                case 0 : this.currentIndex = 'pop';
                    break;
                case 1 : this.currentIndex = 'new';
                     break;
                case 2 : this.currentIndex = 'sell';
                     break;
            }
            this.$refs.control1.currentIndex = index
            this.$refs.control2.currentIndex = index
        },
        clickButton(){
            // console.log(this.$refs.wrapperr.Bscoll.scrollTo)
            this.$refs.wrapperr.ScrollTo(0, 0, 2500)
        },
        TopScroll(offsetY){
            // console.log(offsetY)
            if(offsetY > this.$refs.control1.$el.offsetTop) {
                this.flag2 = true
            }else {
                 this.flag2 = false
            }
            if(offsetY > 1000) {
                this.flag = true
            }else {
                this.flag = false
            }
        },
        pullingUp(){
            console.log('ok--')
            this.getGoods(this.currentIndex)
        },
        Imgload() {
            let tabControlTop = this.$refs.control1.$el.offsetTop
            console.log(tabControlTop)
        }
    },
    activated() {
        this.$nextTick(()=>{
            this.$refs.wrapperr.refresh()
            this.$refs.wrapperr.ScrollTo(0, this.saveY, 0)
            })
    },
    deactivated(){
        this.$nextTick(()=>{
            this.saveY = this.$refs.wrapperr.Bscoll.y
        console.log(this.saveY)
        })
    }
}
</script>

<style scoped>
  #cart {
      padding-top: 44px;
      /* padding-bottom: 25px; */
      /* position: relative; */
      height: 100vh;
  }
   .wrapper {
        /* position: absolute;
        top: 44px;
        bottom: 30px;
        left: 0;
        right: 0; */
        height: calc(100% - 49px);
        overflow-y: hidden;
        /* margin-top: 44px; */
        /* z-index: 9999; */
    }
    .wrapper .content {
        height: 100%;
    }
    .trans {
        transition: all 0.5s ease;
    }
    .control2 {
        position: absolute;
        left: 0;
        top: 44px;
        right: 0;
        z-index: 9999;
    }
</style>