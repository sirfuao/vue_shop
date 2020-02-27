<template>
    <div class="detail_shop_info">
        <div class="shop">
            <img :src="shopInfo.logo"/>
            <div class="name">{{ shopInfo.name }}</div>
        </div>
        <div class="describe">
            <div class="left">
                <div class="num">
                    <div class="top">{{ shopInfo.sells }}</div>
                    <p>总数量</p>
                </div>
                <div class="baby">
                    <div class="top">{{ shopInfo.fans }}</div>
                    <p>全部宝贝</p>
                </div>
            </div>
            <div class="right">
                <div class="item_info" v-for="(item,index) in shopInfo.score" :key="index">
                    <span>{{ item.name }}</span>
                    <span class="branch" :class="{better_color:item.isBetter}">{{ item.score }}</span>
                    <span class="evaluate" :class="{better_bg:item.isBetter}">{{ item.isBetter?'高':'低' }}</span>
                </div>
            </div>
        </div>
        <div class="btn">
            <button>进店逛逛</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailShopInfo",
    props: {
        shopInfo: {
            type: Object,
            default() {
                return {};
            }
        }
    }
};
</script>

<style lang="less" scoped>
    .detail_shop_info{
        display: flex;
        flex-direction: column;
        border-top: 0.06rem solid #F5F4F7;
        .shop{
            display: flex;
            align-items: center;
            padding-top: 0.24rem;
            // border: 1px solid red;
            img{
                border-radius: 100%;
                border: 1px solid #F5F4F7;
                width: 1.5rem;
                height: 1.5rem;
                margin: 0 0.2rem;
            }
            .name{
                font-size: 0.32rem;
                color: #989898;
            }
        }
        .describe{
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            margin-left: 0.4rem;
            .left{
                display: flex;
                justify-content: space-between;
                    .top{
                        font-weight: bold;
                        font-size: 0.32rem;
                    }
                    p{
                        font-size: 0.28rem;
                        margin-top: 0.1rem;
                    }
                .baby{
                    padding: 0 0.4rem;
                    border-right: 2px solid #F4F4F4;
                }
            }
            .right{
                display: flex;
                justify-content: space-between;
                width:3.2rem; 
                height: 1.5rem;
                // border: 1px solid red;
                font-size: 0.28rem;
                flex-direction: column;
                margin-right:0.3rem; 
                .item_info{
                    display: flex;
                    justify-content: space-between;
                    .branch{
                        color: red;
                    }
                    .better_color{
                        color: #67914B;
                    }
                    .better_bg{
                        background-color: #67914B !important;
                    }
                    .evaluate{
                        background-color: red;
                        color: white;
                        padding: 0 3px;
                    }
                }
            }
        }
        .btn{
            width: 100vw;
            height: 2rem;
            text-align: center;
            border-bottom: 0.06rem solid #f8f8f8;
            button{
                align-self: center;
                width: 3rem;
                height: 1rem;
                font-size: 0.4rem;
                border: none;
                border-radius: 10px;
                color: #85868B;
                background-color: #F1F5FB;
                margin: 0.4rem 0;
            }
        }
    }
</style>