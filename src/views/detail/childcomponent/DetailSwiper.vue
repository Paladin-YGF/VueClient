<template>
         <Swiper class="detail-swiper">
            <SwiperItem v-for="(item,index) in swiperList" :key="index">
                    <img :src="item" alt="item.title" />
            </SwiperItem>
        </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'

export default {
    name: 'DetailSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props:{
        swiperList: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .detail-swiper{
        height: 250px;
        overflow: hidden;
    }
    .detail-swiper img {
        height: 252px !important;
    }
</style>