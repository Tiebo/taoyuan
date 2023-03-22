<template>
	<template>
		<view class="login-wrapper">
			<view class="header">
				<image class="bg" mode="widthFix" src="@/static/image-login4.jpg"></image>
				<view class="content">
					<swiper class="swiper" indicator-color="#BBBBBB" indicator-active-color="#F55B64" circular
						:indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
						<swiper-item>
							<view class="swiper-item-title text-top">
								<view>Welcome~</view>
								<view class="line"></view>
							</view>
							<view class="swiper-item-title">
								Welcome to
							</view>
							<view class="swiper-item-title">
								Taoyuanji
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item-title text-top">
								<view>Get inspired</view>
								<view class="line"></view>
							</view>
							<view class="swiper-item-title">
								Over million new Pins
							</view>
							<view class="swiper-item-title">
								from around the world everyday!
							</view>
						</swiper-item>
					</swiper>
					<view class="handler" @click="router_to('./login')">Continue with WeChat</view>
					<view class="handler regin" @click="router_to('./login')">Sign in</view>
				</view>
			</view>
			<view class="footer">
				<view class="handler sigin" @click="router_to('./register')">Sign up</view>
				<view class="forgot" @click="router_to('./login')">Forgot password?</view>
			</view>
		</view>
	</template>
</template>

<script setup>
	import {
		router_to
	} from '../../utils/utils';
</script>

<style scoped>
	.login-wrapper {
		width: 100%;
		height: 100vh;
		position: absolute;
	}

	.header {
		height: 80%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}

	.bg {
		position: absolute;
		width: 80%;
		margin: 0 auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1;
		object-fit: cover;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		margin-bottom: 40rpx;
		position: absolute;
		z-index: 99;
	}

	.swiper {
		width: 100%;
		height: 270rpx;
	}

	.swiper-item-title {
		font-size: 36rpx;
		text-align: center;
		color: rgba(0, 0, 0, 0.2);
		font-weight: bold;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.text-top {
		color: rgba(0, 0, 0, 0.9);
	}

	.line {
		width: 60rpx;
		height: 6rpx;
		background-color: #F55B64;
		margin-top: 10rpx;
		margin-bottom: 40rpx;
	}

	.handler {
		background-color: #4167b0;
		color: rgba(255, 255, 255, 0.8);
		width: 85%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20rpx;
		font-weight: bold;
		font-size: 30rpx;
		margin-top: 30rpx;
	}

	.regin {
		background-color: #f35c63;
	}

	.footer {
		height: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f7f7f7;
		color: rgba(0, 0, 0, 0.4);
		font-weight: 600;
		font-size: 25rpx;
	}

	.sigin {
		background-color: #FFFFFF;
		color: rgba(0, 0, 0, 0.3);
		margin-bottom: 40rpx;
	}
</style>
