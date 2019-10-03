<template>
    <div class="detail">
            <navv class="nav">
                <div slot="left" @click="back">
                    <img src="../../assets/img/common/back.svg"/>
                </div>
                <div slot="center" v-for="(item,index) in list" :key="index" class="center" 
                 @click="clickIndex(index)" :class="{active: current == index}">
                        {{item}}
                 </div>
            </navv>
            <BScroll ref="wrappert" :Type = "3" @TopScroll="TopScroll">
                    <DetailSwiper :swiperList = 'swiperList'></DetailSwiper>
                    <DetailList :goods="goods"></DetailList>
                    <DetailShop :shops="shops"/>
                    <GoodsInfo :GoodsDetaill="GoodsDetaill" @ImgLoad="ImgLoad"></GoodsInfo>
                    <GoodsParamss :goodsParams='goodsParams' ref='goodsparamss'/>
                    <Comment :commentInfo = "commentInfo" ref="comment"></Comment>
                    <Detail-recommend-info :recommendList="recommendList" ref="recommend"/>
            </BScroll>
           <DetailBottom @addToCart="addToCart"></DetailBottom>
           <BackTop  @click.native="clickButton" v-show="flag"></BackTop>
    </div>
</template>

<script>
import navv from '../../components/common/navbar/NavBar'
import {getDtail,Goods,Shop,GoodsParams,getRecommend} from '../../network/detail'

import DetailSwiper from './childcomponent/DetailSwiper'
import DetailList from './childcomponent/DetailList'
import DetailShop from './childcomponent/DetailShop'
import GoodsInfo from './childcomponent/GoodsInfo'
import GoodsParamss from './childcomponent/GoodsParams'
import Comment from './childcomponent/Comment'
import DetailRecommendInfo from './childcomponent/DetailRecommendInfo'
import DetailBottom from './childcomponent/DetailBottomBar'
import BackTop from '../../components/common/backTop/BackTop'

import BScroll from '../../components/content/scroll/BScroll'
export default {
    name: 'Detail',
    data() {
        return {
            iid: this.$route.params.iid,
            list: ['商品', '参数', '评论', '推荐'],
            current: 0,
            swiperList: [],
            goods: {},
            shops: {},
            GoodsDetaill: {},
            goodsParams: {},
            commentInfo: {},
            recommendList: [],
            controlNav: [0],
            flag: false
        }
       
    },
    components: {
        navv,
        DetailSwiper,
        DetailList,
        DetailShop,
        BScroll,
        GoodsInfo,
        GoodsParamss,
        Comment,
        DetailRecommendInfo,
        DetailBottom,
        BackTop
    },
    created(){
        this.getDtail();
        this.getRecommend()
        // console.log( this.GoodsDetaill)
    },
    mounted(){
        //  console.log( this.GoodsDetaill.detailImage)
               
    },
    methods: {
        clickIndex(index) {
            this.current = index
            this.$refs.wrappert.ScrollTo(0, -this.controlNav[index], 1000)
              console.log(this.controlNav)
        },
        back() {
            this.$router.back()
        },
        getDtail() {
            //  console.log('cretaed')
            getDtail(this.$route.params.iid).then(res => {
                // console.log(res.data)
                const data = res.data.result
                this.GoodsDetaill = data.detailInfo
                this.swiperList =data.itemInfo.topImages
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                this.shops = new Shop(data.shopInfo)
               this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
                this.commentInfo = data.rate.list[0]
                 console.log( data.rate.list[0])
            }).catch(err => {
                console.log(err)
            })
        },
        ImgLoad() {
                 this.$refs.wrappert.refresh()
                   this.controlNav.push(this.$refs.goodsparamss.$refs.ko.offsetTop - 0)
                   this.controlNav.push(this.$refs.comment.$el.offsetTop - 0)
                   this.controlNav.push(this.$refs.recommend.$el.offsetTop - 0)
                   console.log(this.$refs.goodsparamss.$refs.ko.offsetTop)     
        },
        TopScroll(Y){
            if(Y>1000) {
                this.flag = true
            }else {
                this.flag =false
            }
            if(Y>=this.controlNav[1] && Y<this.controlNav[2]){
                this.current = 1
            }else if(Y>=this.controlNav[2] && Y<this.controlNav[3]){
                this.current = 2
            }else if(Y>=this.controlNav[3]){
                this.current = 3
            }else {
                this.current = 0
            }
        },
       getRecommend() {
        getRecommend().then((res) => {
          this.recommendList = res.data.data.list
          console.log(this.recommendList)
        })
      },
       clickButton(){
            // console.log(this.$refs.wrapperr.Bscoll.scrollTo)
            this.$refs.wrappert.ScrollTo(0, 0, 2500)
        },
        addToCart() {
            const cartItem = {}
            cartItem.desc = this.goods.desc
            cartItem.title = this.goods.title
            cartItem.iid = this.$route.params.iid
            cartItem.image = this.swiperList[0]
            cartItem.price = this.goods.realPrice
            console.log(cartItem)
            // this.$store.commit('addToCart', cartItem)
            this.$store.dispatch('addToCart', cartItem)
        }
    }
}
</script>

<style scoped>
    .nav {
        position: relative;
        z-index: 9999;
        background: #fff;
    }
    .detail {
        background: #fff;
         position: relative;
        z-index: 999;
        height: 100vh;
    }
    .detail img{
        padding: 8px;
    }
     .detail .center {
         font-size: 14px;
     }
     .active {
          color: pink;
          font-size: 800;
     }

     .wrapper {
         height: calc(100% - 93px);
         overflow: hidden;
     }
</style>