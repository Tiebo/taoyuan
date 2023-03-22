<template>
	<view class="card">
		<view class="card-header">
			<image :src="user.user_photo" alt="" class="header-img" />
			<view class="header-info">
				<view class="header-title">{{ user.username }}</view>
				<view class="header-subtitle">
					{{ user.subtitle }}
					<text class="footer-time">{{ post.time }}
					</text>
				</view>
			</view>
		</view>
		<view class="card-body">
			<view class="body-content">{{ post.content }}</view>
			<view :class="post.images.length === 1? 'body-image': 'body-image-all'">
				<image v-show="post.images.length === 1" :src="post.images[0]" mode="widthFix" />
				<image v-show="post.images.length !== 1" v-for="(img, index) in post.images" :key="index" :src="img"
					mode="aspectFill" :class="'img' + index" />
			</view>
			<view class="body-footer">
				<view class="footer-action">
					<text class="iconfont icon-tyaixin1"></text>
					<text style="font-size: 24rpx;"> &nbsp;{{post.like}}</text>
					<text style="margin-left: 20rpx;" class="iconfont icon-typinglun"></text>
					<text style="font-size: 24rpx;"> &nbsp;{{post.comment}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive
	} from 'vue';
	export default {
		props: {
			user: {
				user_photo: '',
				username: '',
				subtitle: ''
			},
			post: {
				content: '',
				time: '',
				images: '',
				like: 0,
				comment: 0
			}
		}
	}
</script>

<style scoped>
	.body-image>image {
		margin-top: 20rpx;
		border-radius: 25rpx;
		width: 400rpx;
	}

	.body-image-all {
		padding-left: 5rpx;
		margin-top: 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 33.3%);
		row-gap: 5rpx;
	}

	.body-image-all>image {
		width: 200rpx;
		height: 200rpx;
	}

	.body-image-all>.img0 {
		border-radius: 10rpx 0 0 0;
	}

	.body-image-all>.img2 {
		border-radius: 0 10rpx 0 0;
	}

	.body-image-all>.img3 {
		border-radius: 0 0 0 10rpx;
	}

	.body-image-all>.img5 {
		border-radius: 0 0 10rpx 0;
	}


	.card {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		margin-bottom: 20rpx;
	}

	.card-header {
		display: flex;
		align-items: center;
		padding: 20px;
		border-bottom: 1px solid #f0f0f0;
	}

	.header-img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.header-info {
		display: flex;
		flex-direction: column;
	}

	.header-title {
		font-size: 16px;
		font-weight: bold;
		color: #333;
	}

	.header-subtitle {
		margin-top: 10rpx;
		font-size: 22rpx;
		color: #999;
	}

	.card-body {
		padding: 20px;
	}

	.body-content {
		font-size: 14px;
		color: #171717;
		line-height: 1.3;
	}

	.body-footer {
		margin-top: 10px;
	}

	.footer-time {
		font-size: 20rpx;
		color: #999;
	}

	.footer-action {
		float: right;
		font-size: 14rpx;
		color: #8e8e8e;
		font-weight: 600;
		padding: 15rpx;
		padding-bottom: 30rpx;
	}
</style>
