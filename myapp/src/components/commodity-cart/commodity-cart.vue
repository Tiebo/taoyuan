<template>
	<view class="footer">
		<view class="con-goods">
			<view class="goods-item">
				<uni-icons type="shop" size="25"></uni-icons>
				<view>
					店铺
				</view>
			</view>
			<view class="goods-item" @click="router_to_msg">
				<uni-icons customPrefix="iconfont" type="icon-tykefu" size="25"></uni-icons>
				<view>
					客服
				</view>
			</view>
			<view class="goods-item">
				<uni-icons type="star" size="25"></uni-icons>
				<view>
					收藏
				</view>
			</view>
			<view class="goods-item-cart">
				加入购物车
			</view>
			<view class="goods-item-buy" @click="controllStore.is_buy = true">
				立即购买
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		router_to
	} from '../../utils/utils';
	import {
		defineProps
	} from 'vue';
	import {
		useControllStore
	} from '../../stores/controll';
	const controllStore = useControllStore()
	const router_to_msg = () => {
		router_to('/pages/message/dialog/dialog')
	}
</script>

<style scoped>
	.goods-item-cart {
		background-image: linear-gradient(to left, #ffc904 0%, #ff9704 100%);
		width: 190rpx;
		height: 70rpx;
		font-weight: 600;
		font-size: 26rpx;
		color: #f8f8f8;
		text-align: center;
		letter-spacing: 2rpx;
		border-radius: 40rpx 0 0 40rpx;
		line-height: 65rpx;
	}

	.goods-item-buy {
		background-image: linear-gradient(to left, #fd7402 0%, #fd4d01 100%);
		width: 190rpx;
		font-size: 26rpx;
		font-weight: 600;
		height: 70rpx;
		letter-spacing: 2rpx;
		color: #f8f8f8;
		text-align: center;
		border-radius: 0 40rpx 40rpx 0;
		line-height: 65rpx;
	}

	.goods-item {
		text-align: center;
		margin-right: 60rpx;
		font-size: 20rpx;
		color: dimgrey;
	}

	.footer {
		position: fixed;
		bottom: 0%;
		background-color: #ffffff;
		height: 70rpx;
		width: 100%;
		padding: 30rpx;
		transition: 400ms;
	}



	.con-goods {
		display: flex;
	}
</style>
