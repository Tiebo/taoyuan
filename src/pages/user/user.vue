<template>
	<view class="con-body">
		<view class="header">
			<view class="user-tag">
				钱包
			</view>
			<view class="user-tag">
				等级
			</view>
			<view class="user-editor">
				<image class="icon" mode="aspectFill" src="../../static/icon/edit.png"></image>
			</view>
			<view class="user-list">
				<image class="icon" mode="aspectFill" src="../../static/icon/align-left.png"></image>
			</view>
		</view>
		<view class="user-info">
			<image class="user-photo" src="https://i.328888.xyz/2023/02/22/xOPqv.png"></image>
			<view class="username">
				豪爽的僵尸
				<image class="gender" v-if="false" src="../../static/icon/male.png"></image>
				<image class="gender" v-if="true" src="../../static/icon/female.png"></image>
				<view style="font-size: 20rpx; color: grey;margin-top: 20rpx;">
					ID:{{userId}}
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

	const actionsClick = (text) => {
		uni.showToast({
			title: text,
			icon: 'none'
		})
	}
</script>

<style scoped>
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

	.con-content {
		margin-top: 50rpx;
		background-color: #ffffff;
		border-radius: 40rpx 40rpx 0 0;
		padding: 20rpx;
	}

	.user-info-data-row {
		display: grid;
		grid-template-columns: repeat(4, 25%);
	}

	.username {
		align-self: center;
		margin-left: 30rpx;
		font-size: 36rpx;
	}

	.user-photo {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		margin-left: 20rpx;
	}

	.user-info {
		margin-top: 80rpx;
		display: flex;
	}

	.user-editor {
		margin-left: 300rpx;
	}

	.user-list {
		margin-left: 60rpx;
	}

	.con-body {
		background-image: linear-gradient(to left, #30cfd0 0%, #330867 100%);
		opacity: 0.9;
	}

	.user-tag {
		border: 2rpx transparent solid;
		filter: opacity(50);
		border-color: aliceblue;
		text-align: center;
		margin-right: 20rpx;
		color: #e6e6e6;
		width: 100rpx;
		height: 50rpx;
		border-radius: 30rpx;
	}

	.header {
		padding: 20rpx;
		display: flex;
	}

	.icon {
		width: 40rpx;
		height: 40rpx;
	}
</style>
