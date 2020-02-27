<template>
    <div>
        <!-- 顶部 nav-bar -->
        <van-nav-bar title="购物街" :fixed="true" :border="false" />
        <scroll class="scroll" @scroll="scroll" :probeType="3" ref="scrollRef">
            <!-- 轮播图 -->
            <home-swiper :banner="banner"></home-swiper>
            <!-- 推荐 -->
            <recommend :recommend="recommend"></recommend>
            <!-- 推荐下面的介绍 -->
            <feature-view @featerImgLoad="featerImgLoad"></feature-view>
            <!-- 导航吸顶 -->
            <van-sticky :offset-top="100">
                <!-- tabControl导航 -->
                <tab-control :title="['流行','新款','精选']" @titleChange="titleChange"></tab-control>
            </van-sticky>
        <!-- tabControl下面的商品 -->
        <goods-list :goods="goods[currentType].list"></goods-list>
        </scroll>
        <!-- 返回顶部按钮 -->
        <!-- <ReturnTop></ReturnTop> -->
    </div>
</template>
<script>
//网络请求 js 模块
import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

//home子组件
import HomeSwiper from "./childComps/HomeSwiper.vue"; //轮播图
import Recommend from "./childComps/Recommend.vue"; // 推荐
import FeatureView from "./childComps/FeatureView.vue"; //本周流行

//公共组件
import TabControl from "@/components/content/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue"
export default {
    name: "Home",
    data() {
        return {
            banner: [],
            recommend: [],
            goods: {
                pop: { page: 0, list: [] },
                new: { page: 0, list: [] },
                sell: { page: 0, list: [] }
            },
            currentType: "pop" //页面默认渲染当前类型
        };
    },
    mounted() {
        getHomeMultidata().then(res => {
            console.log(res);
            //获取轮播图数据
            this.banner = res.data.banner.list;
            //获取轮播图下面的推荐数据;
            this.recommend = res.data.recommend.list;
        });
        this.getHomeGoods("pop");
        this.getHomeGoods('new');
        this.getHomeGoods('sell');

        //图片自定义事件 当图片加载后就会触发这个自定义事件
         this.$bus.$on("itemImgLoad",()=>{
            // console.log("a")
            this.$refs.scrollRef.refresh()
        })
        
    },
    methods: {
        getHomeGoods(type) {
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.list);
                // this.goods[type].list = res.data.list 不能这样写，不然永远只有三十条数据
                this.goods[type].page++;
                console.log(this.goods[type].list);
            });
            this.$refs.scrollRef.refresh();
            // console.log(this.$refs.scrollRef)
        },
        //点击tabControll切换
        titleChange(index){
            switch(index){
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
            }
            console.log(index)
        },
        // 监听滚动的位置
        scroll(position) {
            console.log(position)
        },

        featerImgLoad() {
            this.$refs.scrollRef.refresh();
        }
    },
    
    components: {
        HomeSwiper,
        Recommend,
        FeatureView,
        GoodsList,
        TabControl,
        Scroll,
    }
};
</script>
<style lang="less" scoped>
.van-nav-bar {
    background-color: #ff8a9d;
}
.van-nav-bar__title {
    color: #fff;
}

</style>