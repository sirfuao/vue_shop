<template>
    <div class="goods_list_item" @click="itemDetail">
        <img v-lazy="showImg" @load="imgLoad"/>
        <p>{{ goodsItem.title }}</p>
        <div class="price">
            <p class="price_goods">{{ goodsItem.price }}</p>
            <p><van-icon name="star" />{{ goodsItem.cfav }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsItem:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    methods:{
        itemDetail() {
            this.$router.push(`/detail/${this.goodsItem.iid}`)
        },
        imgLoad() {
            // console.log("a")
            this.$bus.$emit("itemImgLoad")
        },
    },
    computed: {
        showImg() {
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
}
</script>
<style lang="less" scoped>
    .goods_list_item{
        display: flex;
        width: 46vw;
        flex-direction: column;
        padding: 0 2vw;
        img{
            width: 100%;
            border-radius: 0.1rem;
        }
        p{
            display: -webkit-box;  //超出文字部分用... 表示
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            font-size: 0.24rem;
            padding:0 0.08rem;
            margin-top: 0.1rem;
        }
        .price{
            display: flex;
            justify-content: center;
            margin: -0.1rem 0rem 0.1rem 0rem;
            .price_goods{
                color: #EF232F;
            }
        }
    }
</style>