<template>
  <div class="header">
    <mt-header fixed title="黑马程序员"></mt-header>
	<router-view></router-view>
<nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item " >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/geren" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/car" class="mui-tab-item" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/seach" class="mui-tab-item" >
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>


  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
  .header {
    padding-top: 40px;
	height: 2000px;
  }
</style>
