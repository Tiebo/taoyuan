<template>
	<view class="arc-select">
		<label for="input">
			<uni-icons type="search" size="25"></uni-icons>
		</label>
		<input name="input" class="arc-input" type="text" placeholder="搜索">
	</view>
	<view class="container">
		<!-- 轮播图 -->
		<view style="border-radius: 30rpx;" class="swiper_adv">
			<!-- 轮播图区域 -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
				<!-- 循环渲染轮播图的 item 项 -->
				<swiper-item style="border-radius: 20rpx;" v-for="item in img_data" :key="item">
					<view class="swiper-item">
						<!-- 动态绑定图片的 src 属性 -->
						<image :src="item" mode="aspectFill" />
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 跳转图表 -->
		<view class="row-cols-3" style="margin-top: 20rpx; text-align: center; padding: 30rpx;">
			<view class="list" @click="router_list('tree')">
				<image src="../../static/icon/taozi.png"></image>
				<br>
				<span style="font-size: 24rpx;">领养桃树</span>
			</view>
			<view class="list" @click="router_list('hotel')">
				<image src="../../static/icon/minsu.png"></image>
				<br>
				<span style="font-size: 24rpx;">世外桃源</span>
			</view>
			<view class="list" @click="router_list('shop')">
				<image src="../../static/icon/shangpin.png"></image>
				<br>
				<span style="font-size: 24rpx;">桃源品</span>
			</view>
			<view class="list" @click="router_list('article')">
				<image src="../../static/icon/wenhua.png"></image>
				<br>
				<span style="font-size: 24rpx;">东新文化</span>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="recommend" style="margin-top: 40rpx;">
			<view class="title">
				今日推荐 >
			</view>
			<view class="re-sale" style="margin-top: 30rpx;">
				<view @click="router_to_commodity(i.id)" v-for="i in comm_data" :key="i.id" class="re-sale-body">
					<image mode="aspectFill" :src="i.photo[1]"></image>
					<br>
					<span class="des">{{i.name}}</span>
				</view>
			</view>
		</view>
		<!-- 发现 -->
		<view class="recommend" style="margin-top: 40rpx;">
			<view class="title">
				发现
			</view>
			<view class="re-card" style="margin-top: 30rpx;">
				<!-- v-for -->
				<view class="re-card-body" v-for="find in find_data" :key="find.id">
					<image mode="aspectFill" :src="find.photo[1]"></image>
					<br>
					<view class="body-find">{{find.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from "vue";
	import {
		re_get
	} from "../../utils/request";
	import {
		showMsg,
		router_to
	} from "../../utils/utils";
	onMounted(() => {
		showMsg("加载成功")
	})

	let comm_data = ref([]);
	let img_data = ref([])
	let find_data = ref([])
	const getData = async () => {
		img_data.value.push('https://i.328888.xyz/2023/02/25/E0wxc.jpeg')
		img_data.value.push('https://i.328888.xyz/2023/02/25/EA3XU.png')
		img_data.value.push('https://i.328888.xyz/2023/02/25/EfprJ.jpeg')
		await re_get("http://127.0.0.1:8000/api/commodity/all/", {}).then(res => {
			find_data.value = res.data.resp
			for (let i = 0; i < res.data.resp.length; i++) {
				if (i == 5) break;
				comm_data.value.push(find_data.value[i])
			}
		})
	};
	const router_list = (type) => {
		router_to(`../list/${type}/${type}`)
	}

	const router_to_commodity = (id) => {
		router_to('../commodity/commodity?id=' + id)
	}
	getData();
</script>

<style scoped>
	.arc-select>label {
		position: absolute;
		right: 5%;
		margin-top: 5rpx;
	}

	.arc-select {
		background-color: #ffffff;
		padding: 20rpx;
	}

	.arc-input {
		padding: 10rpx 80rpx 10rpx 20rpx;
		border-radius: 100rpx;
		border-color: royalblue;
		background-color: #e2e2e2;
		border-width: 4rpx;
	}

	.body-find {
		font-size: 28rpx;
		width: 300rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	swiper {
		height: 300rpx
	}

	.swiper-item>image {
		width: 100%;
	}

	.des {
		font-size: 24rpx;
		color: #272727;
	}

	.title {
		font-size: 36rpx;
	}

	.list {
		border-radius: 30rpx;
		background-color: white;
		transition: 100ms;
	}

	.list>image {
		width: 50rpx;
		height: 50rpx;
	}

	.href {
		padding: 20rpx;
	}

	a {
		margin: 30rpx;
	}

	.row-cols-3 {
		display: grid;
		grid-template-columns: repeat(4, 25%);
	}

	.re-sale {
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
	}

	.re-sale-body {
		display: inline-block;
		margin-right: 20rpx;
		text-align: center;
	}

	.re-sale-body>image {
		width: 230rpx;
		height: 230rpx;
		border-radius: 20rpx;
	}

	.re-card {
		display: grid;
		grid-template-columns: 50% 50%;
	}

	.re-card-body {
		margin-bottom: 10rpx;
	}

	.re-card-body>image {
		height: 330rpx;
		width: 330rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
	}



	.title {
		margin-left: 10rpx;
	}
</style>
