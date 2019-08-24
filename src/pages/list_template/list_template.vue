<template>
	<div @tap="toDetail" class="tmpContainer">
		<div class="avatar_data">
			<img :src="item.avatar" alt="">
			<span>{{item.date}}</span>
		</div>
		<p class="company">{{item.title}}</p>
		<img class="detail_img" :src="item.headImgSrc" alt="">
		<p class="content">{{item.detail_content}}</p>
		<div class="view_star_container">
			<img src="/static/images/icon/chat.png" alt="">
			<span>{{item.love_count}}</span>
			<img src="/static/images/icon/view.png" alt="">
			<span>{{item.attention_count}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toDetail(){
				//点击跳转到详情页面+传参数
				wx.navigateTo({
					url:'/pages/detail/main?index='+this.index
				})
			},
		},
		props:['item','index']
	}
</script>

<style>
	.tmpContainer{
		display: flex;
		flex-direction: column;
		border-bottom:1rpx solid #eee;
		padding-bottom: 10rpx;
	}
	.avatar_data img{
		width: 60rpx;
		height: 60rpx;
		vertical-align: middle;
		margin-right: 10rpx;
	}
	.avatar_data span{
		font-size: 30rpx;
		font-weight: 500;
		color: #333;
	}
	.avatar_data{
		padding: 10rpx;
	}
	.company{
		font-size: 36rpx;
		font-weight: 600;
		padding: 10rpx;
	}
	.detail_img{
		width: 100%;
		height: 460rpx;
	}
	.content{
		font-size: 28rpx;
		text-indent: 32rpx;
		line-height: 46rpx;
		
		display: -webkit-box;
		overflow: hidden;
		white-space: normal;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp:4;
		-webkit-box-orient:vertical;
	}
	.view_star_container img{
		width: 32rpx;
		height: 32rpx;
		vertical-align: middle;
		margin-left: 10rpx;
	}
	.view_star_container span{
		font-size: 26rpx;
		margin-left: 8rpx;
	}
	
</style>
