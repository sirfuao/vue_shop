<template>
    <div class="detail">
        <!-- 导航栏 -->
        <van-nav-bar class="detail_nav" title="标题" left-arrow  @click-left="onClickLeft" fixed>
            <div slot="title" class="title">
                <span :class="{active:contIndex===index}" v-for="(item,index) in title" :key="index" @click="changeIndex(index)">{{ item }}</span>
            </div>
        </van-nav-bar>
      
        <!-- 轮播图组件 -->
        <detail-swiper :detailSwiper="this.detailSwiper"></detail-swiper>
        <!-- 基本信息组件 -->
        <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
        <!-- 店铺信息 -->
        <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
        <!-- 商品图片详细信息 -->
        <detail-image-info :detailInfo="detailInfo"></detail-image-info>
        <!-- 商品参数信息 -->
        <detail-params-info ref="paramsRef" :paramsInfo="paramsInfo"></detail-params-info>
        <!-- 商品评论信息 -->
        <detail-comment-info ref="commentRef" :commentInfo="commentInfo"></detail-comment-info>
        <!-- 商品推荐 -->
        <goods-list ref="recommendRef" :goods="recommend"></goods-list>

        <!-- 底部商品导航 -->
        <detail-footer-bar class="footer_bar" @addCart="addCart"></detail-footer-bar>
    </div>
</template>
<script>
//js网络请求模块
import {getDetail,Goods,Shop,getRecommend} from '@/network/detail.js'

import Scroll from '@/components/common/scroll/Scroll.vue' //引入滚动组件

import DetailSwiper from './childComps/DetailSwiper.vue' //轮播图组件
import DetailBaseInfo from './childComps/DetailBaseInfo.vue' //商品基本信息组件
import DetailShopInfo from './childComps/DetailShopInfo.vue' //店铺信息组件
import DetailImageInfo from './childComps/DetailImageInfo.vue' //商品图片详细信息
import DetailParamsInfo from './childComps/DetailParamsInfo.vue' //商品参数信息组件
import DetailCommentInfo from './childComps/DetailCommentInfo.vue' //商品的评论信息
import GoodsList from "@/components/content/goods/GoodsList.vue";  
import DetailFooterBar from "./childComps/DetailFooterBar.vue"  //底部商品导航

export default {
    name: "Detail",
    data() {
        return {
            title: ["商品", "参数", "评论", "推荐"],
            contIndex:0,
            iid:null,
            detailSwiper:[], //商品轮播的图片信息
            goodsInfo:{}, //保存基本的商品信息对象
            shopInfo:{}, //保存店铺信息对象
            detailInfo:{}, //商品详情信息
            paramsInfo:{}, //商品参数信息
            commentInfo:{}, //商品评论信息
            recommend:{},  //商品推荐数据
            themeTopYs:[],  //联动的元素 距离顶部的距离 组成的数组
        };
    },
    components:{
        Scroll,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailImageInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        GoodsList,
        DetailFooterBar
    },
    created() {
        //获取iid
        this.iid = this.$route.params.iid;
        getDetail(this.iid).then((res)=>{
            // console.log(res)
            const {result} = res;
            //轮播如数据
            this.detailSwiper = result.itemInfo.topImages;
            // console.log(result)

            //es6 语法中的创建一个实例对象 记住，一定要加new;
            //创建商品信息数据对象
            this.goodsInfo = new Goods(result.itemInfo,result.columns,result.shopInfo.services)
            // console.log(this.goodsInfo)

            //创建店铺信息数据对象
            this.shopInfo = new Shop(result.shopInfo);
            // console.log(this.shopInfo);

            //取出商品详情信息
            this.detailInfo = result.detailInfo;
            // console.log(this.detailInfo);

            //取出参数的信息
            this.paramsInfo = result.itemParams
            // console.log(result.itemParams)

            //取出商品的评论信息
            if(result.rate.cRate !==0 ){   //因为有的商品没有评论信息，所以这里要做一个判断
                this.commentInfo = result.rate.list[0];
            }
        });

        //商品推荐接口请求
         getRecommend().then((res)=>{
            const {list} = res.data;
            // this.recommend = list;
            // console.log(this.recommend)
            let temp = [];
            for(let i in list){
                temp.push(list[i])
            }
            this.recommend = temp;
        });
    //      this.$nextTick(()=>{
        
    //    });
    //    setTimeout(()=>{
    //            // 将商品、推荐、参数、评论距离顶部的距离分别放在一个数组中
    //     this.themeTopYs.push(0);  //商品距离顶部的距离是0
    //     this.themeTopYs.push(this.$refs.paramsRef.$el.offsetTop); //$el 是拿到对应的元素节点
    //     this.themeTopYs.push(this.$refs.commentRef.$el.offsetTop)
    //     this.themeTopYs.push(this.$refs.recommendRef.$el.offsetTop)
    //     console.log(this.themeTopYs)
    //     console.log(this.$refs.commentRef.$el)
    //    },200);
    },
    methods: {
        //返回到home页面
        onClickLeft() {
            this.$router.go(-1)
        },
    // 点击切换标题栏
    changeIndex(i) {
        this.contIndex = i;
        console.log(this.contIndex)
        this.$refs.swiper.scrollTo(0,-1000,300)
    },
    //1、点击商品添加到购物车
    addCart() {
        // console.log("a");
        let product = {} //用来保存添加到购物车中的商品 需要展示的信息; 
        product.img = this.detailSwiper[0];   //用来保存一张商品的图片
        product.title = this.goodsInfo.title; //商品标题
        product.desc = this.goodsInfo.desc;   //商品描述
        product.price = this.goodsInfo.realPrice; //商品的价格
        product.iid = this.iid; //商品的id
        // product.count = 1;  //计算商品的数量，默认是1
    //2、将商品添加到购物车中
    this.$store.dispatch('addProduct',product);
    this.$toast.setDefaultOptions({ duration: 1000 });  //把默认的弹框时间设置为1秒;
    this.$toast("添加商品成功");
    },
  },
};
</script>
<style lang="less" scoped>
    .detail{
        padding-bottom: 1rem;
    }
    .van-icon::before{
        color: gray;
    }
    .title{
        display: flex;
        justify-content: space-around;
        color: gray;
        font-size: 0.28rem;
    }
    .active{
        color: #EF232F;
    }
    .footer_bar{
        position: relative;
        z-index: 999;
    }
</style>