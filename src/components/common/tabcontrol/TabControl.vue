<template>
    <div class="tab-control">
        <div v-for="(item, index) in list" :key="index"
        class="control-item" :class="{active: index === currentIndex}"
        @click="currentIndexx(index)">
            <span>{{item}}</span>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        currentIndexx(index) {
            this.currentIndex = index
            this.$emit('clickIndex', index)
        }
    }
}
</script>

<style scoped>
    .tab-control {
        display: flex;
        height: 40px;
        line-height: 40px;
        background-color: #ffffff;
        text-align: center;
        font-size: 12px;
        /* 移动端实现吸附效果 */
        position: sticky;
        top: 44px;
        
    }
    .tab-control .control-item {
        flex: 1;
        
    }
    .control-item span {
        padding: 8px;
        cursor: pointer;
    }
    .tab-control .active span{
        color: deeppink;
        font-weight: 800;
        border-bottom: 2px solid pink;
    }
</style>