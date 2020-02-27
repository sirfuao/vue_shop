<template>
    <div class="detail_footer_bar">
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="shop-o" text="店铺" info="" />
            <van-goods-action-icon icon="star-o" text="收藏" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    name: "DetailFooterBar",
    methods:{
        addToCart() {
            // console.log("点击添加到购物车")
            this.$emit('addCart')
        }
    }
};
</script>
<style lang="less" scoped>
    .van-goods-action{
        border-top: 1px solid #FBFBFB;
    }
</style>