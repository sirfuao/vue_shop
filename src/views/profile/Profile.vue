<template>
    <div class="my">
        <div class="header">
            <div class="title">我的信息</div>
            <div class="info">
                <img src="../../assets/img/profile/avatar.svg">
                <div class="center">
                    <p class="login">登录/注册</p>
                    <p class="iphone"><van-icon name="graphic" />暂无绑定的手机号</p>
                </div>
                <div class="i">
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <div class="detail">
            <div>
                <p><span>0.00</span>&nbsp;元</p>
                <p>我的余额</p>
            </div>
            <div class="center">
                <p><span>0</span>&nbsp;个</p>
                <p>我的优惠</p>
            </div>
            <div>
                <p><span>0</span>&nbsp;分</p>
                <p>我的积分</p>
            </div>
        </div>
        <div class="news">
            <div>
                <img src="@/assets/img/profile/message.svg">
                <span>我的消息</span>
            </div>
            <div class="shop">
                <img src="../../assets\/img/profile/pointer.svg">
                <p>我的商城</p>
            </div>
            <div>
                <img src="../../assets/img/profile/vip.svg">
                <p>会员卡</p>
            </div>
        </div>
        <div class="cart">
            <div>
                <img src="../../assets/img/profile/cart.svg">
                <span>我的购物车</span>
            </div>
            <div>
                <img src="../../assets/img/profile/shopping.svg">
                <p class="app">下载购物APP</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .my{
        .header{
            padding: 0.2rem 0.2rem 0.4rem 0.2rem;
            height: 2rem;
            background-color: #FF8E96;
            .title{
                color: white;
                font-size: 0.4rem;
                width: 1.6rem;
                line-height: 0.66rem;
                margin: 0 auto;
                text-align: center;
            }
            .info{
                display: flex;
                align-items: center;
                justify-content:space-between;
                color: white;
                margin-top: 0.1rem;
                img{
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .center{
                    margin-left: -1.5rem;
                    .login{
                        font-size: 0.4rem;
                    }
                    .iphone{
                        display: flex;
                        align-items: center;
                        font-size: 0.32rem;
                    }
                }
                .i{
                    font-size: 0.5rem;
                }
            }
        }
        .detail{
            display: flex;
            height: 1.8rem;
            border-bottom: 0.12rem solid #F2F2F2;
            .center{
                border-left: 1px solid #FAFAFA;
                border-right: 1px solid #FAFAFA;
            }
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
                font-size: 0.32rem;
                p{
                    span{
                        color: #E67962;
                        font-weight: bold;
                    }
                }
            }
        }
        .news{
            display: flex;
            flex-direction: column;
            height: 3.2rem;
            padding: 0 0.3rem;
            border-bottom: 0.12rem solid #F2F2F2;
            .shop{
                p{  
                    display: flex;
                    align-items: center;
                    width: calc(100% - 0.6rem);
                    height: 100%;
                    border-top: 1px solid #f2f2f2;
                    border-bottom: 1px solid #f2f2f2;
                }
            }
            div{
                flex: 1;
                display: flex;
                align-items: center;
                font-size: 0.32rem;
                img{
                    margin-right: 0.2rem;
                    width: 0.6rem;
                    height: 0.6rem;
                }
            }
        }
        .cart{
            padding: 0 0.2rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: 2.1rem;
            div{
                flex: 1;
                display: flex;
                align-items: center;
                font-size: 0.32rem;
                img{
                    width: 0.6rem;
                    height: 0.6rem;
                }
                .app{
                    display: flex;
                    align-items: center;
                     width: calc(100% - 0.6rem);
                     height: 100%;
                     border-top: 1px solid #f2f2f2;
                }
            }
        }
    }
</style>