<template>
    <div class="detailList">
        <div class="title">
            {{goods.title}}
        </div>
        <div class="center">
            <span class="nowPrice">￥{{goods.realPrice}}</span>
            <del class="oldPrice">{{goods.oldPrice}}</del>
            <span class="realPrice">{{goods.discount}}</span>
        </div>
        <div class="columns">
            <div v-for="(item, index) in goods.columns" :key="index">
                {{item}}
            </div>
        </div>
        <div class="services">
                <div v-for="(item,index) in goods.services" :key="index" class="div">
                   <!-- <div> -->
                        <img :src="item.icon"/>
                        <span>{{item.name}}</span>
                   <!-- </div> -->
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
       goods:{
            type: Object,
            default() {
                return {}
            }
       }
    }
}
</script>

<style scoped>
    .detailList {
            width: 100%;
            line-height: 25px;
            box-sizing: border-box;
            padding: 5px;
            text-align: left;
            text-indent: 10px;
            font-size: 18px;
            font-weight: 800;
            color: #000;
    }
    .center {
        position: relative;
        margin: 10px 0;
    }
    .center .nowPrice {
        color: red;
        font-size: 25px;
        margin-right: 12px;
    }
    .center del {
        font-size: 10px;
       color: rgb(29, 25, 25);
    }
    .center .realPrice {
        text-indent: 0;
        position: absolute;
        top: -10px;
        left: 185px;
        font-size: 8px;
        color: #fff;
        background: red;
        padding: 1px 8px;
        border-radius: 15px;
    }
    .services{
        border: none;
        color: #000;
         border-bottom: 1px solid rgba(151, 130, 130, 0.6)
    }
    .columns,
    .services {
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        color: darkgrey;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        padding: 0 5px;
        box-sizing: border-box;
        flex-wrap: wrap;
    }
    .columns div
    .services .div{
        flex: 1;
        display: flex;
    }
    .services div {
       margin: 8px 0;
    }
    .services img {
        height: 15px;
        width: 15px;
        vertical-align: middle;
    }
    .services .div span ,
    .services .div img {
        flex: 1;
        font-size: 10px;
    }
</style>