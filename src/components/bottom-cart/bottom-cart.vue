<template>
	<view class="footer">
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
			<view class="goods-item-buy">
				立即购买
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style scoped>
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
	}

	.con-goods {
		display: flex;
	}
</style>
