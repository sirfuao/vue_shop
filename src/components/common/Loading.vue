<template>
    <div class="loading">
        <van-loading type="spinner" color="#1989fa" />
    </div>
</template>

<script>
export default {
    name:'loading',
    data() {
        return {

        }
    }
}
</script>

<style lang="less">
    .loading{
        position: relative;
        z-index: 999;
    }
</style>