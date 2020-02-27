<template>
    <div class="params_info" v-if="Object.keys(paramsInfo).length !== 0">
        <div class="explain">{{ paramsInfo.rule.key }}</div>
        <table class="rule">
            <tr v-for="(item1,index1) in paramsInfo.rule.tables[0]" :key="index1">
                <td align="right" v-for="(item2,index2) in item1" :key="index2">{{ item2 }}</td>
            </tr>
        </table>
        <div class="explain">{{ paramsInfo.info.key }}</div>
        <table class="info">
            <tr v-for="(item,index) in paramsInfo.info.set" :key="index">
                <td class="left">{{ item.key }}</td>
                <td class="right">{{ item.value }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'DetailParamsInfo',
    props:{
        paramsInfo:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    
}
</script>
<style lang="less" scoped>
    .params_info{
        .explain{
            font-size: 0.36rem;
            margin: 0  0 0.3rem 0.3rem ;
        }
        .rule{
            border-top: 0.06rem solid #ebebeb;
            padding:0.3rem;
            width: 100vw;
            font-size: 0.32rem;
            tr{
                display: flex;
                justify-content: space-between;
                // align-items: center;
                border-bottom: 1px solid #EBEBEB;
                line-height: 0.88rem;
            }
        }
        .info{
            border-top: 0.06rem solid #ebebeb;
            font-size: 0.32rem;
            padding: 0 0.3rem; 
            tr{
                display: flex;
                align-items: center;
                border-bottom: 1px solid #EBEBEB;
                padding: 0.3rem 0;
                .left{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    height: 20px;
                    flex: 3;
                    // border: 1px solid red;
                }
                .right{
                    font-size: 0.26rem;
                    // margin-left: 0.6rem; 
                    color: #F02430;
                    flex: 7;
            }
            }
        }
    }
</style>