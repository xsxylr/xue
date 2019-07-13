// 入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import app from './App.vue';
import router from './router.js';
import '../src/lib/mui/css/mui.min.css';
import '../src/lib/mui/css/icons-extra.css';
import '../src/lib/mui/fonts/mui-icons-extra.ttf'
import { Header, Swipe, SwipeItem } from 'mint-ui';
import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
Vue.prototype.$http = axios;
// 拦截器配置，  这是请求拦截器，所有请求发送出去之前都要走这里
axios.interceptors.request.use(function(config) {
    console.log('所有请求发出成功之前--1：', config)
    return config;
}, function(error) {
    console.log('所有请求发出 失败 之前--1：', error)
    return Promise.reject(error);
});
import '../filter/dateFormat.js'
// 服务器响应拦截器，所有的数据返回之前 都要走这里
axios.interceptors.response.use(function(response) {
    console.log('所有成功响应 先走拦截器里--2：', response)
    return response.data;
}, function(error) {
    console.log('所有失败响应 先走拦截器里--2：', error)
    return Promise.reject(error);
});
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})