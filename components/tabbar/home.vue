<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div>
           <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/xwlist">
                            <img src="../../src/images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../src/images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../src/images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../src/images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../src/images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../src/images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lunbotuList:[]
        }
    },
    created() {
        this.getLunbotu();
    },
    methods:{
        getLunbotu() {
            this.$http.get('/api/getlunbo').then(result =>{
                console.log(result);
                if (result.status === 0) {
                    this.lunbotuList = result.message
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
 .mint-swipe {
     height: 200px;
 }
 .mint-swipe-item {
     &:nth-child(1) {
         background-color: red;
     }
     &:nth-child(2) {
         background-color: skyblue;
     }
     &:nth-child(3) {
         background-color: pink;
     }
     img {

         width: 100%;
         height: 100%;
     }
 }
 .mui-grid-view.mui-grid-9 .mui-media {
     background-color: #fff;
     border: none;
     img {
         width: 60px;
         height: 60px;
     }
 }
</style>
