<template>
	<div class="movieDetailContainer">
		<img :src="movieDetail.images.large" alt="">
		<p class="movie_name">{{movieDetail.title}}</p>
		<div class="detail_content">
			<span>评分:&nbsp&nbsp{{movieDetail.rating.average}}</span>
			<span>导演:&nbsp&nbsp{{movieDetail.directors[0].name}}</span>
			<span>主演:&nbsp&nbsp{{movieDetail.casts[0].name}}<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{movieDetail.casts[1].name}}<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{movieDetail.casts[2].name}}</span>
		</div>
		<button>我要观影</button>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				movieDetail:{}
			}
		},
		computed:{
			...mapState(['moviesArr'])
		},
		beforeMount() {
			console.log(this)
			this.movieDetail = this.moviesArr[this.$mp.query.index]
			// console.log(this.movieDetail)
		}
	}
</script>

<style>
	.movieDetailContainer{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.movieDetailContainer img{
		width: 70%;
		margin: 50rpx;
		height: 620rpx;
	}
	.movie_name{
		font-size: 42rpx;
		font-weight: 700;
	}
	.detail_content{
		display: flex;
		flex-direction: column;
		margin-left: -20%;
		margin-top: 20rpx;
		line-height: 50rpx;
		font-size: 30rpx;
		font-weight: 500;
	}
	button{
		width:70%;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #80C342;
		color: #fff;
		font-size: 36rpx;
		font-weight: 650;
		margin-top: 20rpx;
	}
</style>
