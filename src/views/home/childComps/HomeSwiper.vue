<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                <img :src="item.image"/>
            </van-swipe-item>
        </van-swipe>
     
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
        banner:{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .van-swipe{
        margin-top: 46px;
        width: 100vw;
        height: 3.9rem;
        .van-swipe-item{
            width: 100%;
            height: 100%;
            img{
                width:100%;
                height: 100%;
            }
        }
    }
</style>
