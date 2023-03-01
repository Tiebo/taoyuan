<template>
	<view class="container">
		<!-- 轮播图 -->
		<view style="border-radius: 30rpx;" class="swiper_adv">
			<!-- 轮播图区域 -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
				<!-- 循环渲染轮播图的 item 项 -->
				<swiper-item style="border-radius: 30rpx;" v-for="item in img_data" :key="item">
					<view class="swiper-item">
						<!-- 动态绑定图片的 src 属性 -->
						<image :src="item" mode="widthFix" />
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 跳转图表 -->
		<view class="row-cols-3" style="margin-top: 20rpx; text-align: center; padding: 30rpx;">
			<view class="list" @click="router_to('tree')">
				<image src="../../static/icon/lychee.png"></image>
				<br>
				<span style="font-size: 24rpx;">领养桃树</span>
			</view>
			<view class="list" @click="router_to('hotel')">
				<image src="../../static/icon/mango.png"></image>
				<br>
				<span style="font-size: 24rpx;">世外桃源</span>
			</view>
			<view class="list" @click="router_to('shop')">
				<image src="../../static/icon/watermelon.png"></image>
				<br>
				<span style="font-size: 24rpx;">桃源品</span>
			</view>
			<view class="list" @click="router_to('article')">
				<image src="../../static/icon/cherry.png"></image>
				<br>
				<span style="font-size: 24rpx;">东新文化</span>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="recommend" style="margin-top: 40rpx;">
			<view class="title">
				推荐商品 >
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
					<image mode="widthFix" :src="find.photo[0]"></image>
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
		showMsg
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
		await re_get("http://127.0.0.1:8000/api/commodity/all/", {
			"type": 0
		}).then(res => {
			comm_data.value = res.data.resp
		})
		await re_get("http://127.0.0.1:8000/api/commodity/all/", {
			"type": 1
		}).then(res => {
			find_data.value = res.data.resp
		})
	};

	const router_to = (type) => {
		setTimeout(() => {
			uni.navigateTo({
				url: `../list/${type}/${type}`,
				animationType: 'slide-in-right',
				animationDuration: 200
			});
		}, 200)
	}

	const router_to_commodity = (id) => {
		setTimeout(() => {
			uni.navigateTo({
				url: '../commodity/commodity?id=' + id,
				animationType: 'slide-in-right',
				animationDuration: 200
			});
		}, 200)
	}
	getData();
</script>

<style scoped>
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
		height: 400rpx
	}

	.swiper-item>image {
		width: 100%;
		height: 100%;
	}

	.des {
		font-size: 24rpx;
		color: #272727;
	}

	.title {
		font-size: 36rpx;
	}

	.list:hover {
		background-color: #cccccc;
		transition: 400ms;
	}

	.list {
		border-radius: 30rpx;
		background-color: white;
		transition: 400ms;
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
		overflow-x: inherit;
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
		display: flex;
		flex-wrap: wrap;
	}

	.re-card-body {
		margin-bottom: 10rpx;
	}

	.re-card-body>image {
		width: 330rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
	}



	.title {
		margin-left: 10rpx;
	}
</style>
