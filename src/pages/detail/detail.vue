<template>
	<div class="detailContainer">
		<img class="detail_header" :src="detailObj.detail_img" alt="">
		<img @tap="handleMusicPlay" class="music_img" :src="isMusicPlay?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'" alt="">
		<div class="avatar_data">
			<img :src="detailObj.avatar" alt="">
			<span>{{detailObj.author}}</span>
			<span>发布于</span>
			<span>{{detailObj.date}}</span>
		</div>
		<p class="company">{{detailObj.title}}</p>
		<div class="collection_share_container">
			<div class="collection_share">
				<img @tap="handleCollection" :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="">
				<img @tap="handleShare" src="/static/images/icon/share-anti.png" alt="">
			</div>
			<div class="line"></div>
		</div>
		<button open-type="share">转发此文章</button>
		<p class="contents">{{detailObj.detail_content}}</p>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				detailObj:{},
				isCollected:false,
				isMusicPlay:false
			}
		},
		methods:{
			handleCollection(){
				let isCollected = !this.isCollected;
				this.isCollected = isCollected;
				let text = isCollected?'收藏成功':'取消收藏'
				wx.showToast({
					title:text,
					icon:'success',
					duration: 1500,
					mask:true
				})
				
				//读取之前本地的缓存状态查看是否收藏
				let oldStorage = wx.getStorageInfoSync('isCollected')
				// oldStorage={};
				oldStorage[this.index] = this.isCollected
				//将本次设置的缓存再缓存到本地
				wx.setStorage({
					key:"isCollected",
					data:oldStorage
				});
			},
			handleMusicPlay(){
				let canItPlay = !this.isMusicPlay;
				this.isMusicPlay = canItPlay;
				let {dataUrl,title} = this.detailObj.music;
				if(canItPlay){
					wx.playBackgroundAudio({
						dataUrl,
						title
					})
				}else{
					wx.pauseBackgroundAudio()
				}	
			},
			handleShare(){
				wx.showActionSheet({
						itemList: ['分享到朋友圈', '分享到微博', '分享给微信好友'],
				})
			}
		},
		beforeMount() {
			// console.log(this);
			this.index = this.$mp.query.index;
			
			//预处理工作 ：先确定本地是否收藏缓存
			let oldStorage = wx.getStorageSync('isCollected');
			if(!oldStorage){
				//说明之前本地没有缓存过
				wx.setStorage({
				  key:"isCollected",
				  data:{}               //没缓存过 那就给 localStorage设置一个 “isCollege”，值为空
				})
			}else{
				//说明用户之前缓存过   那一进入页面 就要根据本地缓存的数据 修改data里的 isCollected的初始值
				//因为存在3种可能  收藏了 取消收藏了 或者没选择过（也就是空）把没选择 和 空 都定义为 isCollected:false
				this.isCollected = (oldStorage[this.index]?true:false)
			}
			//监听音乐的播放 和 暂停
			wx.onBackgroundAudioPlay(()=>{             //监听播放
				this.isMusicPlay = true
			})
			wx.onBackgroundAudioPause(()=>{          //监听暂停
				this.isMusicPlay = false
			})
		},
		mounted(){
			// console.log(this);
			//更新state中的数据 括号里是 list-template跳转时传过来的参数
			this.detailObj = this.listTmp[this.index]
		},
		computed:{
			...mapState(['listTmp'])
		}
	}
</script>

<style>
	.detailContainer{
		display: flex;
		flex-direction: column;
	}
	.detail_header{
		width:100%;
		height: 460rpx;
	}
	.avatar_data{
		padding: 10rpx;
	}
	.avatar_data img{
		width: 64rpx;
		height: 64rpx;
		vertical-align: middle;
	}
	.avatar_data span{
		margin-left: 10rpx;
	}
	.company{
		font-weight: 600;
		font-size: 32rpx;
		padding-left:10rpx ;
	}
	.collection_share_container{
		position: relative;
	}
	.collection_share{
		float: right;
		margin-right: 20rpx;
	}
	.collection_share img{
		width: 90rpx;
		height: 90rpx;
		margin-left: 10rpx;
	}
	.line{
		position: absolute;
		width: 90%;
		height: 1rpx;
		top:45rpx;
		left:5%;
		background-color:#ccc;
		z-index: -1;
	}
	.contents{
		margin-top: 20rpx;
		font-size: 30rpx;
		letter-spacing: 3rpx;
		text-indent: 30rpx;
		line-height: 1.5;
	}
	.music_img{
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		top:200rpx;
		left:50%;
		margin-left: -30rpx;;
	}
</style>
