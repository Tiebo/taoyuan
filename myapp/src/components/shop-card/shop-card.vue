<template>
	<view @click="router_to('/pages/commodity/commodity?id=' + id)" class="card" :style="`width: ${width}rpx` ">
		<view class="card-details">
			<image class="card-img" mode="widthFix" :src="images[0]"></image>
			<view class="card-name">{{shop_name}}</view>
			<view class="card-price">
				<text style="font-size: 20rpx;">￥</text>
				<text style="font-size: 26rpx;">{{low_price[0]}}</text>
				<text style="font-size: 22rpx; color: gray;">{{' ' + 400}}+人付款</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		router_to
	} from '../../utils/utils.js'
	export default {
		props: {
			width: 0,
			images: {
				type: Array,
				default: []
			},
			shop_name: '',
			price: '',
			buy_number: 0,
			id: {
				type: Number
			}
		},
		setup(props) {
			const low_price = props.price.split(',');
			return {
				low_price,
				router_to
			}
		}
	}
</script>

<style scoped>
	.card-price {
		padding: 10rpx 20rpx 20rpx 20rpx;
		margin-top: 10rpx;
		color: #ff5500;
	}

	.card {
		display: inline-block;
		border-radius: 20rpx;
		background-color: #ffffff;
		margin-bottom: 20rpx;
	}

	.card-img {
		width: 100%;
		border-radius: 20rpx 20rpx 0 0;
	}

	.card-details {}

	.card-name {
		padding: 15rpx 20rpx 0 20rpx;
		font-size: 25rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>
