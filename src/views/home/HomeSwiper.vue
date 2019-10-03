<template>
         <Swiper>
            <SwiperItem v-for="item in swiperList" :key="item.acm">
                <a :href="item.link">
                    <img :src="item.image" alt="item.title" @load="Imgload"/>
                </a>
            </SwiperItem>
        </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../components/common/swiper/index'
export default {
    name: 'HomeSwiper',
    props:{
        swiperList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            flag: false
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods: {
        Imgload() {
           if(!this.flag) {
               this.flag = true
               this.$emit('Imgload')
           }
        }
    }
}
</script>

<style scoped>

</style>