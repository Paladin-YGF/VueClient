<template>
    <div class="goodsparams" ref="ko">
        <table ref="koo">
            <tr>
                 <th class="th" colspan="2">
                      产品参数
                 </th>
            </tr>   
            <tr v-for="(item,index) in goodsParams.infos" :key="index">
                <td>
                    {{item.key}}
                </td>
                 <td>
                    {{item.value}}
                </td>
            </tr>
        </table>
        <table class="tables2">
            <tr>
                 <th colspan="5">
                      尺码说明
                 </th>
            </tr>
            <tr v-for="(item,index) in goodsParams.sizes" :key="index">
                <td v-for="(item,index) in item" :key="index">
                            {{item}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'GoodsParams',
    props: {
        goodsParams: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    mounted(){
        this.$nextTick(()=>{
            console.log(this.$refs.ko.offsetTop)
            console.log(this.$refs.koo.offsetTop)
        })
    }
}
</script>

<style scoped>
    .goodsparams {
        width: 100%;
        text-align: center;
        /* border: 1px solid pink; */
    }
    .goodsparams table {
        width: 100%;
        border-collapse:collapse;
        border: 1px solid pink;
    }
    .goodsparams table td,
    .goodsparams table th {
        border: 1px solid pink;
        width: 20%;
        height: 25px;
        line-height: 25px;
        padding: 8px;
        
        
    }
    .tables2{
        width: 100%;
    }
    .tables2 td{
        width: 50%;
    }
</style>