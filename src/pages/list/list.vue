<template>
    <div class="listContainer">
		<swiper indicator-dots indindicator-color="blue" indicator-active-color="#F583A5" circular="true" autoplay="true" interval="2500">
			<swiper-item>
				<image src="/static/images/detail/carousel/01.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/detail/carousel/02.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/detail/carousel/03.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/detail/carousel/04.jpg"></image>
			</swiper-item>
		</swiper>
		<div>
			<listTmp v-for="(item,index) in listTmp" :key="index" :item="item" :index="index"></listTmp>
		</div>
    </div>
</template>

<script>
	import {mapState} from 'vuex';
	import listTmp from '../list_template/list_template.vue'
	
export default {
	components:{
		listTmp:listTmp
	},
	beforeMount() {
		//分发action修改状态
		this.$store.dispatch('getList')
	},
	computed:{
		//映射状态到本组件
		...mapState(['listTmp'])
	}
}
</script>

<style lang="">
    .listContainer swiper{
		width: 100%;
		height: 400rpx;
	}
	.listContainer swiper image{
		width: 100%;
		height: 100%;
	}
</style>