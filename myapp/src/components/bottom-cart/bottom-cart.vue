<template>
	<view v-show="!is_shop" class="footer">
		<view class="con-goods">
			<view class="goods-item">
				<uni-icons type="shop" size="25"></uni-icons>
				<view>
					店铺
				</view>
			</view>
			<view class="goods-item">
				<uni-icons type="chatbubble-filled" size="25"></uni-icons>
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
			<view class="goods-item-buy" @click="getShop">
				立即购买
			</view>
		</view>
	</view>
	<transition name="fade">
		<view v-show="is_shop" class="footer-shop">
			<view style="height:150rpx;" @click="is_shop = false">
			</view>
			<view class="buy-con">
				<text @click="is_shop = false" class="buy-title" style="float: right;">
					x
				</text>
				123
			</view>
		</view>
	</transition>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	let is_shop = ref(false)

	const getShop = () => {
		is_shop.value = true;
	}
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 2s
	}

	.fade-enter-to,
	.fade-leave-to {
		opacity: 0
	}

	.buy-con {
		padding: 20rpx;
		border-radius: 25rpx 25rpx 0 0;
		background-color: #ffffff;
		height: 100%;
		opacity: 1;
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
		height: 70rpx;
		width: 100%;
		padding: 30rpx;
		transition: 400ms;
	}

	.footer-shop {
		position: fixed;
		bottom: 0%;
		background-color: rgba(0, 0, 0, 0.8);
		height: 100%;
		width: 100%;
	}

	.con-goods {
		display: flex;
	}
</style>
