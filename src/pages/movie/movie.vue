<template>
	<div>
		<div @tap="toMoviesDetail(index)" class="moviesContainer" v-for="(item,index) in movieMsg" :key="index">
			<img class="movies_img" :src="item.images.large" alt="">
			<div class="movie_info">
				<p class="movie_name">{{item.title}}</p>
				<p class="movie_year">年份:&nbsp{{item.year}}年</p>
				<p class="movie_dir">导演:{{item.directors[0].name}}</p>
			</div>
			<p class="movie_rating">{{item.rating.average}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				movieMsg:[],
			}
		},
		methods:{
			toMoviesDetail(index){
				wx.navigateTo({
					url:"/pages/movieDetail/main?index="+index
				})
			}
		},
		beforeMount() {
			this.$fly.get('http://t.yushu.im/v2/movie/top250')
			.then((res)=>{
				this.movieMsg = res.data.subjects;
				// console.log(this.movieMsg)
				let moviesArr = res.data.subjects;
				this.$store.dispatch('getMoviesArr',moviesArr)
			})
			.catch((err)=>{
				console.log(err)
			})
		}
	}
</script>

<style>
	.moviesContainer{
		display: flex;
		padding: 10rpx;
		border-bottom: 1rpx solid #eee;
	}
	.movies_img{
		width: 128rpx;
		height: 128rpx;
		margin-right: 20rpx;
	}
	.movie_info{
		width: 70%;
	}
	.movie_name{
		font-size: 32rpx;
		color: #333;
		font-weight: 600;
		color: #5D5D5D;
		
		display: -webkit-box;
		overflow: hidden;
		white-space: normal;		
		text-overflow: ellipsis;		
		word-wrap: break-word;		
		-webkit-line-clamp:1;		
		-webkit-box-orient:vertical;

	}
	.movie_year{
		font-size: 28rpx;
		color: #999;
		margin: 5rpx 0;
	}
	.movie_dir{
		font-size: 30rpx;
		color: #666;
	}
	.movie_rating{
		font-size: 32rpx;
		font-weight: 700;
		color: #D04836;
	}
</style>
