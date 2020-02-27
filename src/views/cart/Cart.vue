<template>
    <div class="cart">
        <!-- 顶部标题栏 -->
        <van-nav-bar title="购物车" left-arrow @click-left="aaa()" fixed />
        <!-- 当购物车不为空时  展示商品信息 -->
           <div v-if="$store.state.cartList.length>0">
                <div class="cart_list" v-for="(item,index) in cartList"  :key="index"> 
                    <van-checkbox v-model="item.isCheck">
                    </van-checkbox>
                    <van-card
                    :num="item.count"
                    :price="item.price"
                    :desc="item.desc"
                    :title="item.title"
                    :thumb="item.img"
                    >
                    </van-card>
                </div>
           </div>
           <!-- 当购物车为空时 -->
           <div v-if="$store.state.cartList.length==0" class="img">
                <img :src="img" /> 
                <div></div>
           </div>
        <!-- 底部支付组件 -->
        <cart-pay></cart-pay>
    </div>
</template>
<script>
import cartPay from "./childComps/cartPay.vue"; //底部支付组件
export default {
    name: "cart",
    data() {
        return {
            //购物车中的商品数据
            cartList: this.$store.state.cartList,
            //当购物车为空时的图片展示
            img:require('../../assets/img/gouwuc.jpg')
        };
    },
    methods: {
        aaa() {
            this.$router.go(-1);
        }
    },
    components: {
        cartPay
    },
    created() {
        // console.log(this.cartList)
    }
};
</script>
<style lang="less" scoped>
.cart {
    height:calc(100vh - 160px);
    background-color:#f2f2f2;
    padding: 50px 0;
}
.van-nav-bar {
    background-color: #ff8e97;
}
.van-nav-bar__title {
    color: white;
    font-size: 16px;
}
.van-icon-arrow-left::before {
    color: white;
    font-size: 20px;
}
.van-card__title {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-height: 32px;
    font-size: 16px;
    font-weight: bold;
    margin: -8px 0 6px 0px;
}
.van-card__price {
    color: #f30600;
    font-weight: bold;
}
.cart_list{
    display: flex;
    justify-content: space-between;
    justify-items: center;
    width: 100vw;
    background-color: #FAFAFA;
    margin-top: 0.16rem;
    .van-checkbox{
        margin-left: 0.32rem;
    }
    .van-card{
        width: 90vw;
        right: 0;
        padding: 0.16rem 0.32rem 0.16rem 0.06rem;
        margin:0px;
    }
}
.img{
    height:calc(100% - 96px);
    background-color: #F2F2F2;
    img{
    width:100%;
    }
    div{
        width:100%;
        height:3rem;
        background-color: #f2f2f2;
    }
}
</style>