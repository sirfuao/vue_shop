<template>
    <div class="title">
        <span :class="{active:contorlIndex===index}" v-for="(item,index) in title" :key="index" @click="contorlChange(index)">{{ item }}</span>
    </div>
</template>
<script>
export default {
    name: "TabControl",
    props: {
        title: {
            type: Array,
            detafult() {
                return [];
            }
        }
    },
    data() {
        return {
            contorlIndex:0
        }
    },
    methods:{
        contorlChange(index) {
            this.contorlIndex = index;
            this.$emit('titleChange',index);    //触发父组件的自定义事件
        }
    }
};
</script>
<style lang="less" scoped>
    .title{
        height: 1rem;
        font-size: 0.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #ffffff;
        // border: 1px solid red;
        .active{
            color: #EF232F;
            border-bottom: 3px solid #EF232F;
            line-height: 32px;
        }
    }
</style>