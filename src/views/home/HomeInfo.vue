<template>
    <div class="info">
        <div v-for="item in recommends" :key="item.acm" class="div">
            <a :href="item.link">
                 <img :src="item.image" alt=""/>
                 <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeInfo',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .info {
        display: flex;
        text-align: center;
        font-size: 1rem;
        padding: 10px 0;
        border-bottom: 10px solid #eee;
        width: 100%;
    }
    .div {
        flex: 1;

    }
    .info img {
        width: 5rem;
        height: 5rem;
        vertical-align: middle;
        margin: 0 -10px;
        margin-bottom: 10px;
      
    }
    .info p{
        padding-bottom: 10px;
    }
</style>