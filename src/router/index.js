import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        name:'Home',
        path:'/home',
        component: ()=> import('@/views/home/Home.vue')
    },
    {
        name:'Category',
        path:'/category',
        component: ()=> import('@/views/category/Category.vue')
    },
    {
        name:'Cart',
        path:'/cart',
        component: ()=>import('@/views/cart/Cart.vue')
    },
    {
        name:'Profile',
        path:'/Profile',
        component: ()=>import('@/views/profile/Profile.vue')
    },
    {
        name:'Detail',
        path:'/Detail/:iid',
        component: ()=>import('@/views/detail/Detail.vue')
    }
]

const router = new VueRouter({
  mode: 'history',  // 路由模式
  base: process.env.BASE_URL,
  routes
})

export default router
