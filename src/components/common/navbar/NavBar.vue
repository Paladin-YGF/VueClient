<template>
    <div class="nav">
            <slot name="left"></slot>
            <slot name="center"></slot>
            <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .nav {
        display: flex;
        height: 44px;
        text-align: center;
    }
     .left,
    .right {
        width: 40px;
        /* background: deeppink; */
    }
    .center {
        flex: 1;
       
        line-height: 44px;
    }
</style>