<template>
    <div class="goods">
        <goods-list-item class="goods_item" v-for="(item,index) in goods" :key="index" :goodsItem="item">
        </goods-list-item>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
    name:'GoodsList',
    props:{
       goods:{
           type:Array,
           default() {
               return []
           }
       }
    },
    updated() {
        console.log(this.goods instanceof Object)
        console.log(this.goods)
    },
     components:{
        GoodsListItem
    }
}
</script>
<style lang="less" scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
    }
</style>