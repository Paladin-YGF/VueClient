<template>
    <div class="Top">
        <img src="@/assets/img/common/top.png"/>
    </div>
</template>

<script>
export default {
    name: 'BackTop'
}
</script>

<style scoped>
    .Top img {
        position: fixed;
        bottom: 60px;
        right: 15px;
        width: 40px;
        height: 40px;
        z-index: 9999;
    }
</style>