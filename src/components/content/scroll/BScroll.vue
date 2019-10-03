<template>
    <div class="wrapper" ref="wrapper" >
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'BScroll',
    data(){
        return {
            Bscoll: null
        }
    },
    props: {
        Type:{
            type: Number,
            default: 0
        },
        upload: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        ScrollTo(x, y, time = 1000) {
             this.Bscoll&&this.Bscoll.scrollTo(x, y, time)
        },
        refresh() {
            this.Bscoll&&this.Bscoll.refresh()
        },
        finshed() {
            this.Bscoll&& this.Bscoll.finishPullUp()
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.Bscoll = new BScroll(this.$refs.wrapper, {
            click: true,
            //配置实时监听 3
            probeType: this.Type,
            //配置上拉加载更多
            pullUpLoad: this.upload,
            startY: false
        })
            if(this.Type == 2 || this.Type == 3){
            this.Bscoll.on('scroll', position => {
                    // console.log(position)
                    // console.log(this.Bscoll)
                    this.$emit('TopScroll', (-position.y))
                })
        }
            if(this.upload){
                    this.Bscoll.on('pullingUp', () => {
                    console.log('ok')
                    this.$emit('pullingUp')
                })
            }
        })
        //   console.log(this.Bscoll)
    
    }
}
</script>

<style scoped>
   
</style>