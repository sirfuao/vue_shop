<template>
  <div id="app">
    <router-view/>
    <tab-footer></tab-footer>
  </div>
</template>

<script>
import TabFooter from '@/components/common/TabFooter.vue'
export default {
    name:'App',
    components:{
        TabFooter
    }
}
</script>

<style lang="less">
// @import "./assets/css/base.css";
    
</style>
