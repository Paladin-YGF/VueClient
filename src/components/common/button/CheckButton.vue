<template>
    <div class="check" :class="{active: checked}">
        <img src="../../../assets/img/cart/tick.svg"/>
    </div>
</template>
<script>
export default {
    name:'CheckButton',
    props:{
        checked: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        console.log(this.checked)
    }
}
</script>

<style scoped>
.check {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.check img{
   background: #fff;
   border: 1px solid rgb(75, 73, 73);
   border-radius: 50%;
}
.active img {
    background: red;
    border: 1px solid red;
}
</style>