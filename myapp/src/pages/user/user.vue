<template>
	<view class="con-body">
		<view class="user-info">
			<image class="user-photo" src="../../static/photo.png"></image>
			<view class="username">
				豪爽的僵尸
				<view style="font-size: 20rpx; color: grey;margin-top: 20rpx;">
					ID:{{userId}}
				</view>
			</view>
			<view class="user-tag" @click="router_money">
				<text class="iconfont icon-tyqianbao"></text>
				钱包
			</view>
		</view>
		<view class="con-content">
			<view class="order-title">
				<text>我的订单</text>
				<text style="float: right;font-size: 24rpx;color: gray;">全部订单></text>
			</view>
			<view class="user-order">
				<view class="data-col">
					<text class="iconfont icon-tydaifukuan"></text>
					<view class="order-item">
						待付款
					</view>
				</view>
				<view class="data-col">
					<text class="iconfont icon-ty31daifahuo"></text>
					<view class="order-item">
						待发货
					</view>
				</view>
				<view class="data-col">
					<text class="iconfont icon-ty31daishouhuo"></text>
					<view class="order-item">
						待收货
					</view>
				</view>
				<view class="data-col">
					<text class="iconfont icon-tydaipingjia"></text>
					<view class="order-item">
						待评价
					</view>
				</view>
				<view class="data-col">
					<text class="iconfont icon-tytuikuan"></text>
					<view class="order-item">
						退款/售后
					</view>
				</view>
			</view>
		</view>
		<view class="con-content">

			<view class="user-info-data-row">
				<view class="data-col">
					0
					<view style="font-size: 24rpx; color: gray; font-weight: 500;">
						获赞
					</view>
				</view>
				<view class="data-col">
					0
					<view style="font-size: 24rpx; color: gray; font-weight: 500;">
						关注
					</view>
				</view>
				<view class="data-col">
					0
					<view style="font-size: 24rpx; color: gray; font-weight: 500;">
						访客
					</view>
				</view>
				<view class="data-col">
					0
					<view style="font-size: 24rpx; color: gray; font-weight: 500;">
						粉丝
					</view>
				</view>
			</view>
			<view class="user-space">
				动态
			</view>
			<view class="space" v-for="i in 2" :key="i">
				<uni-section title="卡片封面图+操作栏" type="line">
					<uni-card>
						<image mode="aspectFill" style="width: 100%; height: 300rpx;"
							src="https://i.328888.xyz/2023/02/22/xbZvF.jpeg">
						</image>
						<hr>
						<text>今天天气好好呀，想要出去晒太阳</text>
						<template v-slot:actions>
							<view class="card-actions row">
								<view class="card-actions-item" @click="actionsClick('分享')">
									<uni-icons type="redo" size="18" color="#999"></uni-icons>
									<text class="card-actions-item-text">分享</text>
								</view>
								<view class="card-actions-item" @click="actionsClick('点赞')">
									<uni-icons type="heart" size="18" color="#999"></uni-icons>
									<text class="card-actions-item-text">点赞</text>
								</view>
								<view class="card-actions-item" @click="actionsClick('评论')">
									<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
									<text class="card-actions-item-text">评论</text>
								</view>
							</view>
						</template>
					</uni-card>
				</uni-section>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	let userId = ref('125742');
	const router_money = () => {
		setTimeout(() => {
			uni.navigateTo({
				url: '../money/money',
				animationType: 'slide-in-right',
				animationDuration: 200
			});
		}, 200)
	}

	const actionsClick = (text) => {
		uni.showToast({
			title: text,
			icon: 'none'
		})
	}
</script>

<style scoped>
	.order-title {
		font-weight: 600;
		font-size: 30rpx;
		margin: 0 0 20rpx 20rpx;
	}

	.row {
		display: grid;
		grid-template-columns: repeat(3, 33%);
		text-align: center;
		margin-bottom: 20rpx;
	}

	.gender {
		width: 25rpx;
		height: 25rpx;
	}

	.user-space {
		margin-top: 30rpx;
		margin-left: 20rpx;
		font-size: 36rpx;
		font-weight: 600;
	}

	.user-info-data-row>.data-col {
		text-align: center;
		margin-top: 20rpx;
		font-weight: 600;
	}

	.data-col>.order-item {
		margin: 10rpx 0;
		font-size: 24rpx;
	}

	.con-content {
		margin-top: 30rpx;
		background-color: #ffffff;
		border-radius: 40rpx 40rpx 0 0;
		padding: 20rpx;
	}

	.user-order {
		display: grid;
		grid-template-columns: repeat(5, 20%);
	}

	.user-order>.data-col {
		text-align: center;
		margin-top: 20rpx;
		font-weight: 600;
	}

	.user-info-data-row {
		display: grid;
		grid-template-columns: repeat(4, 25%);
	}

	.username {
		align-self: center;
		font-size: 36rpx;
		margin-left: 20rpx;
	}

	.user-photo {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}

	.user-info {
		padding: 30rpx;
		display: flex;
	}

	.con-body {
		background-color: rgba(221, 219, 214, 0.8);
		padding: 0 20rpx;
	}

	.user-tag {
		border: 2rpx transparent solid;
		border-color: #0d0d0d;
		text-align: center;
		margin: 40rpx;
		color: #0d0d0d;
		height: 50rpx;
		padding: 5rpx 10rpx;
		border-radius: 30rpx;
		transition: all 200ms;
	}

	.user-tag:hover {
		transition: all 200ms;
	}

	.icon {
		width: 40rpx;
		height: 40rpx;
	}
</style>
