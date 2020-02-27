<template>
    <div class="pay">
        <van-submit-bar :price="totalPay*100" :button-text="goodsTotal" @submit="onSubmit">
            <van-checkbox v-model="isCheckAll" @click="checkChangeAll">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>
<script>
export default {
    name:'cartPay',
    data() {
        return {
        }
    },
    methods:{
        onSubmit() {

        }
    },
     computed: {
        totalPay() {
           return this.$store.state.cartList.filter((item,index)=>{
               return item.isCheck
           }).reduce((total,item2)=>{
               return total + item2.price*item2.count;
           },0);
        },
        goodsTotal() {
            return "提交订单" + "(" +this.$store.state.cartList.length +")"
        },
        //判断商品是否为全选
        isCheckAll() {
           if(this.$store.state.cartList.length==0){
               return false
           }else{
                return this.$store.state.cartList.every((item)=>{
               return item.isCheck === true
            });
           }
        },
    },
    methods:{
        onSubmit() {

        },
        //切换全选
        checkChangeAll() {
            if(this.isCheckAll){
                //如果是全选的状态下，点击就变为 全部取消
                this.$store.state.cartList.forEach((item)=>{
                   return item.isCheck = false
                });
            }else{
                //如果有部分没选中，这时，就全部选中
                this.$store.state.cartList.forEach((item)=>{
                   return item.isCheck = true;
                });
            }
        }
    }
};
</script>
<style lang="less" scoped>
    .van-submit-bar{
        margin-bottom: 50px;
    }
    .van-submit-bar{
        border-top: 1px solid #f9f9f9;
    }
</style>