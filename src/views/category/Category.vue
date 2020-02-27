<template>
    <div class="category">
        <category-tab></category-tab>
        <category-content :categoryList="categoryList"></category-content>
    </div>
</template>
<script>

//网络请求js模块
import {getCategory} from '@/network/category.js'

//组件
import categoryTab from './childComps/cartgoryTab.vue' //顶部标题栏
import categoryContent from './childComps/categoryContent.vue' //分类页主要区域
export default {
    name:'Category',
    data() {
        return{
            categoryList:[],
        }
    },
    created() { 
        getCategory().then((res)=>{
            const {list} = res.data.category;
            // console.log(data)
            // console.log(list)
            this.categoryList = list;
        });
    },
    components:{
        categoryTab,
        categoryContent
    }
}
</script>
<style lang="less" scoped>
.category{
    .category-content{
        margin-bottom: 1rem;
    }
}
</style>