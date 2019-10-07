<template>
    <div class="cart-buttom">
        <div class="cart-left">
            <checkbutton class="top" @click.native="clickSum2" :checked="clickSum"></checkbutton>
            <span>全选</span>
        </div>
        <div class="cart-center">
            <p>
                <span>合计:</span>
                <span>{{SumPrice}}</span>
            </p>
        </div>
        <div class="cart-right">
            <p>去计算：{{SumLength}}</p>
        </div>
    </div>
</template>

<script>
import checkbutton from '../../../components/common/button/CheckButton'
export default {
    name: 'CartButton',
    components:{
        checkbutton
    },
    data(){
        return{
            checked: false
        }
    },
    computed: {
        SumPrice() {
             const sum = this.$store.getters.getCartList.filter(item => {
                return item.checked 
            }).reduce((total, item) => {
                return total + item.count * item.price
            },0)
            return sum.toFixed(3)
        },
        SumLength() {
            // return this.$store.getters.getCartList.filter(item => {
            //     return item.checked == true
            // }).reduce((total, item) => {
            //     return total + item.count
            // },0)
            return this.$store.getters.getCartList.filter(item => {
                return item.checked == true
            }).length
        },
        clickSum() {
            const flag = this.$store.getters.getCartList.length > 0 && this.$store.getters.getCartList.filter(item => {
                return item.checked == false
            })
            if(flag.length == 0){
                this.checked = true
            }else {
                this.checked = false
            }
            console.log(this.checked )
            return  this.checked
        }
    },
    methods: {
        clickSum2() {
            const cartList =  this.$store.getters.getCartList
           if(this.checked){       
              cartList.forEach(item => item.checked = false)
               window.localStorage.setItem('cartList', JSON.stringify(cartList))
           }else {
               cartList.forEach(item => item.checked = true)
                window.localStorage.setItem('cartList', JSON.stringify(cartList))
           }
        }
    }
}
</script>

<style scoped>
    .cart-buttom {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 49px;
        background: #eee;
        height: 44px;
        display: flex;
         align-items: center;
         justify-content: center;
    }
    .cart-left {
        display: flex;
        width: 25%;
        /* background: red; */
        padding: 0px 8px 0 20px;
        justify-content: space-around;
        flex:1
    }
    .cart-center,
    .cart-right{
        flex: 1;
        height: 100%;
    }
    .cart-center p,
    .cart-right p{
        height: 100%;
        text-align: center;
        line-height: 44px;
        border-left: 1px solid rgb(100, 94, 94, 0.5);
    }
    .cart-right p {
        background: rgb(253, 169, 13, 0.8);
         border: none;
    }
</style>