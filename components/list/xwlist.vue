<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:{{item.add_time | dateFormat}}</span><span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</a>
				</li>
				
			</ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newslist:[]
        }
    },
    created() {
        this.getNewslist();
    },
    methods:{
        getNewslist() {
            this.$http.get('/api/getnewslist').then(result =>{
                console.log(result);
                if (result.status === 0) {
                    this.newslist = result.message
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }
            p {
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                color: #22a699;
            }
        }
    }
</style>
