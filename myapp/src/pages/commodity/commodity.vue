<template>
	<!-- 轮播图 -->
	<view class="swiper_adv">
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<!-- 循环渲染轮播图的 item 项 -->
			<swiper-item v-for="i in commodity_data.img_data" :key="commodity_data.id">
				<view class="swiper-item">
					<!-- 动态绑定图片的 src 属性 -->
					<image :src="i" mode="aspectFill" />
				</view>
			</swiper-item>
		</swiper>
	</view>
	<view class="con-body">
		<view class="goods-content-header">
			<view class="goods-price">
				<span style="font-size: 28rpx;">￥</span>
				{{commodity_data.price[0] + ' - ' + commodity_data.price[commodity_data.price.length - 1]}}
				<span style="font-size: 24rpx; float: right; 
				color: gray; margin-right: 20rpx; font-weight: 500;">
					月销 {{60}}
				</span>
			</view>
			<view class="goods-name">
				{{commodity_data.name}}
			</view>
			<view class="good-btn row">
				<view class="good-btn-item">
					<uni-icons type="heart" size="18" color="#999"></uni-icons>
					<text class="good-btn-text">&nbsp;推荐</text>
				</view>
				<view class="good-btn-item">
					<uni-icons type="sound" size="18" color="#999"></uni-icons>
					<text class="good-btn-text">&nbsp;降价提醒</text>
				</view>
				<view class="good-btn-item">
					<uni-icons type="redo" size="18" color="#999"></uni-icons>
					<text class="good-btn-text">&nbsp;分享</text>
				</view>
			</view>
		</view>
		<view class="goods-content-info">

			<view class="info-item-label">
				<view class="label">
					发货
				</view>
				<view class="label-info">
					{{commodity_data.origin}}
				</view>
				<span style="position: absolute; right: 5%;color: #747474;"> > </span>
			</view>
			<view class="info-item-label">
				<view class="label">
					选择
				</view>
				<view class="label-info">
					已选：{{commodity_data.price_des[0]}}
				</view>
				<span style="position: absolute; right: 5%;color: #747474;"> > </span>
			</view>
			<view class="info-item-label">
				<view class="label">
					保障
				</view>
				<view class="label-info">
					假一赔四&nbsp;七天无理由退货
				</view>
				<span style="position: absolute; right: 5%;color: #747474;"> > </span>
			</view>
			<view class="info-item-label">
				<view class="label">
					参数
				</view>
				<view class="label-info">
					品牌&nbsp;型号...
				</view>
				<span style="position: absolute; right: 5%;color: #747474;"> > </span>
			</view>

		</view>

		<view class="goods-content-shop">
			<view class="shop-photo">
				<image style="width: 115rpx;height: 115rpx; border-radius: 25rpx;" :src="commodity_data.shop_photo"
					mode="aspectFill"></image>
			</view>
			<view class="shop-title">
				{{commodity_data.shop_name}}
				<view class="shop-btn">
					<button>进店逛逛</button>
				</view>
			</view>
			<view>
				<view class="shop-des">
					宝贝描述 {{4.9}}
				</view>
				<view class="shop-des">
					卖家服务 {{4.9}}
				</view>
				<view class="shop-des">
					物流服务 {{4.9}}
				</view>
			</view>
		</view>

		<view style="text-align: center;font-size: 28rpx; color: #747474; margin-top: 20rpx;">
			——宝贝详情——
		</view>
		<view class="goods-content-header">
			<view v-if="commodity_data.type == 0">
				<image mode="aspectFill" style="width: 100%; height: 600rpx;"
					src="https://i.328888.xyz/2023/02/25/EUZyX.jpeg">
				</image>
				<image mode="aspectFill" style="width: 100%; height: 600rpx;"
					src="https://i.328888.xyz/2023/02/25/EDqsP.jpeg">
				</image>
				<image mode="aspectFill" style="width: 100%; height: 600rpx;"
					src="https://i.328888.xyz/2023/02/25/EUVGJ.jpeg">
				</image>
			</view>

			<image mode="aspectFill" style="width: 100%; height: 600rpx;"
				src="https://i.328888.xyz/2023/02/25/EUiIt.jpeg">
			</image>
		</view>
	</view>
	<bottom-cart></bottom-cart>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		onMounted,
		reactive,
		ref
	} from "vue";
	import {
		re_get
	} from "../../utils/request";
	import {
		showMsg
	} from "../../utils/utils";

	let commodity_data = reactive({
		name: "",
		id: "",
		origin: "",
		img_data: [],
		price: [],
		price_des: [],
		unit: "",
		type: "",
		shop_name: "",
		shop_photo: ""
	})
	const getData = async (id) => {
		await re_get("http://127.0.0.1:8000/api/commodity/info/", {
			"id": id
		}).then(res => {
			commodity_data.img_data = res.data.photo;
			commodity_data.id = res.data.id;
			commodity_data.name = res.data.name;
			commodity_data.origin = res.data.origin;
			commodity_data.price = res.data.price.split(',');
			commodity_data.price_des = res.data.price_des.split(',');
			commodity_data.unit = res.data.unit;
			commodity_data.type = res.data.type;
			commodity_data.shop_name = res.data.shop_name;
			commodity_data.shop_photo = res.data.shop_photo;
		})
	};
	onLoad(option => {
		console.log(option.id);
		getData(option.id);
	})
</script>

<style scoped>
	.shop-btn>button {
		margin-top: 20rpx;
		width: 160rpx;
		height: 60rpx;
		border-radius: 30rpx;
		float: left;
		font-size: 24rpx;
		color: #fd4d01;
		border: 2rpx #fd4d01 solid;
		text-align: center;
		line-height: 55rpx;
		background-color: #ffffff;
	}

	.shop-title {
		font-weight: 600;
	}

	.shop-des {
		font-size: 24rpx;
		margin-top: 5rpx;
	}

	.label {
		font-size: 26rpx;
		color: #747474;
		margin: 10rpx 40rpx 20rpx 20rpx;
	}

	.label-info {
		font-weight: 540;
		font-size: 26rpx;
		margin-top: 10rpx;
		margin-bottom: 20rpx;
	}

	.info-item-label {
		display: flex;
	}

	.goods-content-info {
		margin-top: 20rpx;
		background-color: #f9f9f9;
		border-radius: 20rpx 20rpx 0 0;
		padding: 20rpx;
	}

	.goods-content-shop {
		display: grid;
		grid-template-columns: 25% 50% 25%;
		margin-top: 20rpx;
		background-color: #f9f9f9;
		border-radius: 40rpx 40rpx 0 0;
		padding: 20rpx;
	}

	.good-btn-text {
		font-size: 24rpx;
		color: #747474;
	}

	.goods-item-cart {
		background-image: linear-gradient(to left, #ffc904 0%, #ff9704 100%);
		width: 190rpx;
		height: 70rpx;
		font-size: 28rpx;
		color: #f8f8f8;
		text-align: center;
		border-radius: 40rpx 0 0 40rpx;
		line-height: 65rpx;
	}

	.goods-item-buy {
		background-image: linear-gradient(to left, #fd7402 0%, #fd4d01 100%);
		width: 190rpx;
		font-size: 28rpx;
		height: 70rpx;
		color: #f8f8f8;
		text-align: center;
		border-radius: 0 40rpx 40rpx 0;
		line-height: 65rpx;
	}

	.goods-item {
		margin-right: 60rpx;
		font-size: 24rpx;
		color: dimgrey;
	}

	.footer {
		position: fixed;
		bottom: 0%;
		background-color: #ffffff;
		height: 120rpx;
		width: 100%;
	}

	.con-goods {
		margin: 0 30rpx 30rpx 30rpx;
		display: flex;
	}

	.goods-name {
		margin: 10rpx 20rpx 20rpx 20rpx;
		font-size: 36rpx;
		font-weight: 600;
	}

	swiper {
		background-color: #f0f0f0;
		height: 450rpx;
	}

	.swiper-item>image {
		width: 100%;
	}

	.row {
		display: grid;
		grid-template-columns: repeat(3, 33%);
		text-align: center;
		margin-bottom: 20rpx;
	}


	.goods-price {
		margin-left: 20rpx;
		font-size: 40rpx;
		font-weight: 600;
		color: #fc4f06;
	}

	.user-info-data-row>.data-col {
		text-align: center;
		margin-top: 20rpx;
		font-weight: 600;
	}

	.goods-content-header {
		margin-top: 20rpx;
		background-color: #f9f9f9;
		border-radius: 40rpx 40rpx 0 0;
		padding: 20rpx;
	}

	.con-body {
		background-color: #f0f0f0;
		opacity: 0.9;
		padding: 5rpx 15rpx 100rpx 15rpx;
	}
</style>
