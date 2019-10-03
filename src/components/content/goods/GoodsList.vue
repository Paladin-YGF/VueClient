<template>
    <div class="goodsList">
        <goodsItem v-for="(item,index) in goodList" :key="index" :goodListt = "item">
        </goodsItem>
    </div>
</template>

<script>
import goodsItem from './GoodsListItem'
export default {
    name: 'GoodsList',
    props: {
        goodList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        goodsItem
    }
}
</script>

<style scoped>
    .goodsList {
        display: flex;
        flex-wrap: wrap;
    }
</style>