<template>
    <div class="goodsListItem" v-if="goodListt.length!=0" @click="clickImg">
                <img v-lazy="goodListt.show.img" alt="" @load="loadImg"/>
                <div class="content-text">
                        <p class="text">{{goodListt.title | filterr}}</p>           
                        <span class="price">￥{{goodListt.price}}</span>
                        <span class="cavf">{{goodListt.cfav}}</span>
                </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    data() {
        return {
            // iid: goodListt
        }
    },
    // created(){
    //     console.log(this.goodListt.cfav)
    // },
    props: {
        goodListt: {
            type: Object,
            default() {
                return []
            },
            required: true
        }
    },
    filters: {
        filterr(data) {
            if(!data) return;
            // console.log(data)
            if(data.length >20) {
                return data.substring(0, 20) + '......'
            }
        }
    },
    methods: {
        loadImg() {
        this.$bus.$emit('load')
        },
        clickImg() {
            // console.log(123)
            this.$router.push({
                name: 'detail',
                params: {
                    iid: this.goodListt.iid
                }
            })
        }
    }
    
}
</script>

<style scoped>
    .goodsListItem {
        width:48%;
        font-size: 12px;
        text-align: center;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: 800;
    }
    .goodsListItem img {
        width: 95%;
        border-radius: 10px;
        margin-left: 12px;
        height: 75%;
        margin-top: -10px;
    }
    
    .content-text p{
        line-height: 20px;
        margin-left: 12px;
        padding-top: 8px;
        
        box-sizing: border-box;
        text-align: left;
    }
    .price,
    .cavf {
        line-height: 40px;
    }
    .price {
        color: pink;
    }
    .cavf {
            margin-left: 25px;
    }
    .cavf::before {
        content: '';
        display: inline-block;
            background: url(/img/collect.eb1f91fb.svg) 0 0/14px 20px;
        /* background-position: 0 15px; */
            width: 15px;
            height: 16px;
    }
</style>