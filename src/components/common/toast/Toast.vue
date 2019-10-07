<template>
    <div class="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'Toast',
    data(){
        return {
            isShow: false,
            message: ''
        }
    },
    methods: {
        show(mess, time = 1000) {
           
            this.message = mess
            this.isShow = true
             console.log(this.message,mess)
            setTimeout(() => {
                this.isShow = false
                 console.log(this.message,mess)
            }, time)
        }
    }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        left: 50%;
        top: 50%;
        text-align: center;
        min-width: 120px;
        transform: translate(-50%,-50%);
        z-index: 99999;
        padding: 5px 10px;
        line-height: 45px;
        font-size: 18px;
        font-weight: 800;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        color: #fff;
    }
</style>