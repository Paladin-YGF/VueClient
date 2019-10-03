<template>
    <div class="DetailShop">
        <div class="Top">
            <img :src="shops.logo"/>
            <span>{{shops.name}}</span>
        </div>
        <div class="center">
            <div class="left">
                <div class="left-L">
                     <p>总销量</p>
                     <p>{{shops.sells | filterr}}</p>
                </div>
                 <div class="left-R">
                     <p>全部宝贝</p>
                     <p>{{shops.goodsCount}}</p>
                </div>
            </div>
            <div class="right">
                <p v-for="(item,index) in shops.goodsScore" :key="index">
                        <span>{{item.name}}</span>
                        <span :style="{color: item.score > 4.5 ? 'red' : 'green'}">{{item.score}}</span>
                        <span :class="{active: item.isBetter }">{{item.isBetter ? '高' : '低'}}</span>
                </p>
            </div>
            
        </div>
        <p class="bottom">
            <span>进店逛逛</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'DetailShop',
    props: {
        shops: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        filterr(data) {
            if(data > 10000) return (data/10000).toFixed(1) + '万'
            return data
        }
    }
}
</script>

<style scoped>
    .DetailShop {
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 999;
         background: #fff;
        /* margin-bottom: 49px; */
    }
    .DetailShop img {
            width: 20%;
            height: 80px;
            margin-left: 40px;
            margin-top: 10px;
    }
    .Top {
        display: flex;
    }
    .Top span {
        display: block;
        height: 112px;
        line-height: 112px;
        text-align: center;
         width: 70%;
    }
    .center {
        display: flex;
         text-align: center;
         line-height: 25px;
    }
    .center .left,
    .center .right {
        flex: 1
    }
    .right p{
         color: black;
        text-align: left;
        position: relative;
        margin-bottom: 4px;
    }
     .right span:nth-child(2){
         margin-left: 20px;
         /* text-align: center; */
     }
     .right span:last-child {
         /* text-align: right; */
         position: absolute;
         top: 0;
         right: 15px;
         border-radius: 5px;
        
         background: rgba(0, 255, 0, 0.6)
     }
    .left {
        display: flex;
       
        box-sizing: border-box;
        padding: 8px;
    }
    .left-L,
    .left-R {
        flex: 1;
    }
    .left-R {
         border-right: 2px solid #eee;
    }
    .left-L p,
    .left-R p {
        margin-top: 8px;
    }
    .right span:last-child.active {
        background: rgba(255, 0, 0,0.6)
    }
    .bottom {
        line-height: 25px;
        text-align: center;
        margin-top: 15px;
    }
    .bottom span {
        background: rgb(136, 123, 123,0.5);
        color: #000;
        padding: 10px;
        
        border-radius: 10px;
    }
</style>