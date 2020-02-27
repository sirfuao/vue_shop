<template>
    <div class="detail_info" v-if="Object.keys(detailInfo).length !== 0">
        <div class="title">
            <div class="start">
                <div class="spot"></div>
                <div class="line"></div>
            </div>
            <div class="desc">{{ detailInfo.desc }}</div>
            <div class="end">
                <div class="spot"></div>
                <div class="line"></div>
            </div>
            <div class="look">{{ detailInfo.detailImage[0].listkey }}</div>
        </div>
        <div class="img">
            <img :src="item" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailImgaeInfo",
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {};
            }
        },
    },
    mounted() {
    }
};
</script>
<style lang="less" scoped>
.detail_info {
    margin-top: 0.3rem;
    .title {
        display: flex;
        flex-direction: column;
        padding: 0.3rem;
        .start {
            .spot {
                width: 0.04rem;
                height: 0.04rem;
                border: 1px solid #000000;
                background-color: #000000;
            }
            .line {
                width: 1rem;
                height: 1px;
                background-color: #d5d5d5;
            }
        }
        .desc{
            margin: 0.3rem 0;
            font-size: 0.26rem;
        }
        .end{
            align-self: flex-end;
            display:flex;
            flex-direction: column;
            right: 0px;
            width:1rem;
            .spot{
                align-self: flex-end;
                width: 0.04rem;
                height: 0.04rem;
                background-color: #000000;
                border: 1px solid #000000;
            }
            .line{
                width: 1rem;
                height: 1px;
                text-align: right;
                background-color: #d5d5d5;
            }
        }
        .look{
            font-size: 0.3rem;
        }
    }
    .img{
        img{
            width: 100vw;
            // height: 10.24rem;
        }
    }
}
</style>