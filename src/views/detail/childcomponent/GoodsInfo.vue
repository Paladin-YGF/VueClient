<template>
    <div class="goodsInfo" v-if="ImgLength>0">
        <div class="goodsInfo-top">
             <p>{{GoodsDetaill.desc}}</p>
             <p>{{GoodsDetaill.detailImage[0].key}}</p>
        </div>
        <div class="goodsInfo-img" v-for="(item, index) in GoodsDetaill.detailImage[0].list" :key="index">
            <img :src="item" alt="" @load="imgLoad"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsInfo',
    props: {
        GoodsDetaill: {
            type: Object
        }
    },
    data() {
        return {
            count: 0,
            ImgLength: 0
        }
    },
    created(){
        // console.log(this.GoodsDetaill.detailImage)
    },
    methods: {
        imgLoad() {
            this.count += 1
            if( this.count == this.ImgLength){
                // console.log(this.count)
                this.$emit('ImgLoad')
            }
        }
    },
    watch: {
        GoodsDetaill() {
            this.ImgLength = this.GoodsDetaill.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
    .goodsInfo {
        width: 100%;
    }
    .goodsInfo .goodsInfo-top {
        margin-top: 20px;
        line-height: 30px;
        border-top: 1px solid pink;
    }
     .goodsInfo .goodsInfo-top p{
         padding: 5px;
     }
    .goodsInfo .goodsInfo-top p:last-child {
        border-top: 1px solid pink;
    }
    .goodsInfo img {
        width: 100%;
    }
</style>