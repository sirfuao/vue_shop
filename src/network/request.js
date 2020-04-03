import { Toast } from 'vant';
import axios from "axios";

// 引入 axios
export function request(config) {
    // 1、创建 axios 实例
    const instance = axios.create({
        // baseURL:'http://152.136.185.210.8000/api/h3',
        baseURL:'http://123.207.32.32:8000/api/h3',
        // baseURL:'http://106.54.54.237:8000/api/h3',
        timeout:5000
    });
    // 2、axios 的拦截
    // 2、1 请求拦截
    instance.interceptors.request.use((config)=>{
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner'
          });
        return config
    },(err)=>{
        console.log(err)
    });
    // 2、2响应拦截器
    instance.interceptors.response.use((res)=>{
        Toast.clear();
        return res.data
    },(err)=>{
        console.log(err)
    });
    //3、发送真正的网络请求
    return instance(config); //返回一个Promise
}