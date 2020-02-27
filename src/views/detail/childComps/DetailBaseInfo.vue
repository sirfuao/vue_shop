<template>
    <div class="detail_info">
        <h5 class="title">{{ goodsInfo.title }}</h5>
        <div class="price">
            <span class="new_price">{{ goodsInfo.newPrice }}</span>
            <span class="odl_price">{{ goodsInfo.oldPrice }}</span>
            <span class="discount">{{ goodsInfo.discount }}</span>
        </div>
        <div class="columns">
            <span v-for="(item,index) in goodsInfo.columns" :key="index">{{ item }}</span>
        </div>
        <div class="services">
            <div class="services_item" v-for="(item,index) in goodsInfo.services" :key="index">
                <img :src="item.icon"/>
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailBaseInfo",
    props: {
        goodsInfo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
.detail_info {
    padding: 0 0.2rem;
    .title {
        font-size: 0.26rem;
        margin: 0.2rem 0;
    }
    .price{
        display: flex;
        align-items: center;
        margin: 0.3rem 0;
        .new_price{
            font-size: 0.6rem;
            color: #F02430;
        }
        .odl_price{
            font-size: 0.3rem;
            color: gray;
            margin: 0 10px;
            align-self: flex-end;
            text-decoration: line-through;
        }
        .discount{
            font-size: 0.3rem;
            color: white;
            padding: 0.08rem;
            background-image: linear-gradient(to right, #F02430, #F9615E);
            border-radius: 0.1rem;
        }
    }
    .columns{
        display: flex;
        justify-content: space-between;
        span{
            line-height: 0.6rem;
            color: gray;
            font-size: 0.28rem;
        }
    }
    .services{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #F3F5F4;
        height: 1rem;
        .services_item{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 0.24rem;
                height: 0.24rem;
            }
            span{
                font-size: 0.22rem;
            }
        }
    }
}
</style>