import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/base2.css'
import Vconsole from 'vconsole'
//引入 vant ui
import './pluginunit/vant.js'
//图片懒加载 
import VueLazyLoad from 'vue-lazyload'
//移动端适配处理
import './common/rem.js'
//引入fastclick (移动端300毫秒延迟处理)
import FastClick from 'fastclick'
//添加事件总线
Vue.prototype.$bus = new Vue();

//解决移动端300毫秒延迟
FastClick.attach(document.body);

if(process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'){
    const vConsole = new Vconsole();
}

//图片懒加载
Vue.use(VueLazyLoad);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
