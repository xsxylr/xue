import VueRouter from 'vue-router'
// 3. 创建路由对象
import home from '../components/tabbar/home.vue'
import car from '../components/tabbar/car.vue'
import geren from '../components/tabbar/geren.vue'
import seach from '../components/tabbar/seach.vue'
import xwlist from '../components/list/xwlist.vue'
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/car', component: car },
        { path: '/geren', component: geren },
        { path: '/seach', component: seach },
        { path: '/home/xwlist', component: xwlist }
    ],
    linkExactActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router