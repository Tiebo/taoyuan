<template>
	<view class="con-body">
		<view class="user-info">
			<image class="user-photo" :src="userStore.user_photo"></image>
			<view class="username">
				{{userStore.name}}
				<view style="font-size: 20rpx; color: grey;margin-top: 20rpx;">
					ID:{{userStore.uid}}
				</view>
			</view>
			<view class="user-tag" @click="router_to('../login/index')">
				<text class="iconfont icon-tylogout"></text>
				<text @click="logout">退出</text>
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
		<view class="feature">
			<view class="list" @click="router_to('./dynamics/dynamics')">
				<image src="../../static/icon/dongtai.png"></image>
				<br>
				<span style="font-size: 24rpx;">广场</span>
			</view>
			<view class="list" @click="router_to('/pages/list/arboriculture/arboriculture')">
				<image src="../../static/icon/jiaoshui.png"></image>
				<br>
				<span style="font-size: 24rpx;">桃农场</span>
			</view>
			<view class="list">
				<image src="../../static/icon/gushi.png"></image>
				<br>
				<span style="font-size: 24rpx;">我的故事</span>
			</view>
			<view class="list" @click="router_to('./expressage/expressage')">
				<image src="../../static/icon/kuaidi.png"></image>
				<br>
				<span style="font-size: 24rpx;">我的快递</span>
			</view>
		</view>
		<view class="dynamic" v-for="i in 3" :key="i">
			<dynamics-card :user='user_info' :post="post_info">
			</dynamics-card>
		</view>
	</view>

</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		useUserStore
	} from '../../stores/user.js';
	import {
		router_to
	} from '../../utils/utils.js'

	const userStore = useUserStore()

	let user_info = reactive({
		uid: '125742',
		username: '晞月',
		subtitle: '哈哈哈',
		user_photo: userStore.user_photo,
	})

	function logout() {
		router_to('pages/login/index')
		uni.removeStorageSync("token");
	}
	let post_info = reactive({
		content: '惊喜，偶然间找到的一张好好看的背景',
		time: '2-7',
		images: [],
		like: 2,
		comment: 3
	});
	post_info.images.push('https://c-ssl.duitang.com/uploads/blog/202009/28/20200928000810_5ad65.jpeg')
</script>

<style scoped>
	/deep/.dynamic-card {
		margin-bottom: 20rpx;
	}

	.dynamic {
		margin-top: 20rpx;
	}

	.data-col>.order-item {
		margin: 10rpx 0;
		font-size: 24rpx;
	}

	.con-content {
		margin-top: 30rpx;
		background-color: #ffffff;
		border-radius: 30rpx;
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

	.list {
		border-radius: 30rpx;
		background-color: white;
		transition: 100ms;
	}

	.list>image {
		width: 50rpx;
		height: 50rpx;
	}

	.feature {
		margin-top: 20rpx;
		text-align: center;
		padding: 30rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		display: grid;
		grid-template-columns: repeat(4, 25%);
	}

	.order-title {
		font-weight: 600;
		font-size: 30rpx;
		margin: 20rpx;
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
		background: rgb(240, 206, 197);
		background: linear-gradient(180deg, rgba(240, 206, 197, 1) 0%, rgba(245, 231, 228, 1) 16%, rgba(240, 232, 230, 1) 100%);
		padding: 0 20rpx;
	}

	.user-tag {
		position: absolute;
		right: 5%;
		top: 7%;
		font-size: 24rpx;
		border: 2rpx transparent solid;
		border-color: #0d0d0d;
		height: 40rpx;
		color: #0d0d0d;
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
