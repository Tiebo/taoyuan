<template>
	<view class="chat-box">
		<view class="chat-list">
			<view :class="{'chat-item-container':true, 'self': message.from === 'self'}"
				v-for="(message, index) in messages" :key="index">
				<image class="avatar" :src="message.avatarUrl" />
				<view class="chat-item">
					<view v-show="message.from !== 'self'" class="nickname">{{ message.nickname }}</view>
					<view v-show="message.type === 'msg'" :class="{'content':true, 'cself':message.from === 'self'}">
						{{ message.content  }}
					</view>

					<view v-show="message.type === 'orders'" :class="{'orders':true, 'oself':message.from === 'self'}">
						<view class="order-title">
							请核对订单信息
						</view>
						<view class="order-content">
							<image src="https://i.328888.xyz/2023/02/25/EfCJy.jpeg"></image>
							<view class="con-details">
								<view class="order-con-title">
									{{message.details_title}}
								</view>
								<view class="order-price">
									{{'共' + message.number + '件商品  合计 ￥ ' + message.number * message.price }}
								</view>
							</view>
						</view>
						<view class="order-comm">
							<text style="color: #666666; font-size: 24rpx;">联系方式：</text>
							{{message.name + " " + message.phone}}
						</view>
						<view class="order-comm">
							<text style="color: #666666;font-size: 24rpx;">配送地址：</text>
							<text>{{message.address_provinces + " " + message.address_county + " " + message.address_details}}</text>
						</view>
						<view class="order-confirm">
							<text v-if="!is_confirm" @click="is_confirm = !is_confirm">确认</text>
							<text v-else>已确认</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="chat-more">
			<text class="more-item">
				<text class="iconfont icon-tywind-smile more-icon "></text>
				评价客服
			</text>
			<text class="more-item">
				<text class="iconfont icon-tyquanbu more-icon "></text>
				全部服务
			</text>
		</view>
		<view class="input-box">
			<text class="input-box-icon">
				<text class="icon iconfont icon-tyvoicefill"></text>
			</text>
			<view class="input-wrapper">
				<input type="text" v-model="new_message" class="input-message" placeholder="请输入消息内容" />
				<view class="extra">
					<text class="iconfont icon-tywind-smile icon "></text>
				</view>
			</view>
			<button @click="sendMessage" class="send-btn">发送</button>
		</view>
	</view>
</template>
<script>
	import {
		ref
	} from 'vue';
	import {
		useUserStore
	} from '../../../stores/user';
	export default {
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: `${'桃源记苗木基地'}`
			})
		},
		setup() {
			let new_message = ref('');
			let is_confirm = ref(false);
			let messages = ref([{
					avatarUrl: 'https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg',
					nickname: '桃源记苗木基地',
					from: 'other',
					type: "orders",
					name: "柏西摩",
					number: 1,
					price: 249,
					phone: "19828417407",
					details_title: "优品超甜桃子",
					address_provinces: "四川省成都市",
					address_county: "成华区",
					address_details: "保和街道 金马河路99号弘创名座物业办公室"
				},
				{
					type: "msg",
					avatarUrl: useUserStore().user_photo,
					nickname: '桃源记苗木基地',
					content: '好的',
					from: 'self'
				}, {
					type: "msg",
					avatarUrl: 'https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg',
					nickname: '桃源记苗木基地',
					content: '好的呢亲',
					from: 'other'
				}
			])
			const sendMessage = () => {
				if (new_message.value.trim()) {
					messages.value.push({
						content: new_message.value,
						from: 'self',
						avatarUrl: '../../../static/photo.png',
						nickname: '',
						type: "msg"
					});
					new_message.value = '';
					uni.pageScrollTo({
						scrollTop: 9999, // 设置一个非常大的值，让页面自动滚动到最底部
						duration: 300 // 滚动过程持续时间，单位为毫秒
					})
				}
			}

			return {
				sendMessage,
				new_message,
				messages,
				is_confirm
			}
		}
	};
</script>
<style scoped>
	.order-confirm {
		margin-top: 20rpx;
		padding-top: 15rpx;
		color: #ff6d0c;
		text-align: center;
		box-shadow: 0 -2rpx 2rpx rgba(0, 0, 0, 0.1);
		font-size: 30rpx;
	}

	.order-comm {
		display: grid;
		grid-template-columns: 28% 72%;
		margin-top: 20rpx;
		font-size: 26rpx;
		inline-size: 1.3;
	}

	.con-details {
		padding: 15rpx;
		margin-left: 10rpx;
	}

	.order-con-title {
		font-size: 26rpx;
		color: #666666;
	}

	.order-price {
		margin-top: 30rpx;
		font-size: 26rpx;
		color: #666666;
	}

	.orders {
		background-color: #ffffff;
		border-radius: 25rpx;
		padding: 30rpx 30rpx;
		max-width: 75%;
	}

	.order-title {
		font-size: 30rpx;
		font-weight: 600;
	}

	.order-content {
		display: flex;
		margin-top: 30rpx;
		border-radius: 25rpx;
		background-color: #ececec;
	}

	.order-content>image {
		border-radius: 25rpx 0 0 25rpx;
		width: 150rpx;
		height: 150rpx;
	}

	.input-box-icon {
		background-color: #ffffff;
		padding: 8rpx;
		margin-left: 15rpx;
		border-radius: 25rpx;
	}

	.more-icon {
		color: #ff5500;
	}

	.more-item {
		background-color: #ffffff;
		border-radius: 25rpx;
		padding: 15rpx 25rpx;
		font-size: 24rpx;
		margin-right: 20rpx;
	}

	.chat-more {
		padding: 0rpx 20rpx;
		position: absolute;
		bottom: 9vh;
	}

	.chat-box {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #ececec;
	}

	.chat-list {
		margin-bottom: 13vh;
		overflow-y: scroll;
		padding: 16rpx;
		-webkit-overflow-scrolling: touch;
	}

	.chat-item-container {
		display: flex;
		position: relative;
		margin-bottom: 20rpx;
		padding: 12rpx;
		border-radius: 5rpx;
		word-break: break-all;
		line-height: 1.4;
	}

	.content {
		border-radius: 15rpx;
		max-width: 70%;
		padding: 15rpx;
		font-size: 27rpx;
		background-color: #fff;
		box-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.1);
		margin: 0 15rpx;
	}

	.chat-item-container.self {
		direction: rtl;
		color: #333;
		text-align: left;
	}

	.content.cself {
		direction: rtl;
		margin-right: 20rpx;
		background-color: #e9f5fa;
		color: #333;
	}

	.chat-item-container::before {
		position: absolute;
		top: 0;
		left: -8rpx;
		border-top: 8rpx solid transparent;
		border-right: 8rpx solid #fff;
		border-left: none;
		border-bottom: none;
	}

	.chat-item-container.self::before {
		content: '';
		position: absolute;
		top: 0;
		right: -8rpx;
		border-top: 8rpx solid transparent;
		border-left: 8rpx solid #eff6fa;
		border-right: none;
		border-bottom: none;
	}

	.avatar {
		display: table;
		width: 70rpx;
		height: 70rpx;
		margin-right: 10rpx;
		background-size: contain;
		border-radius: 50%;
	}

	.nickname {
		font-size: 22rpx;
		margin: 10rpx;
		color: #5c5c5c;
	}

	.input-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: 10rpx;
		left: 0;
		width: 100vw;
		height: 120rpx;
		z-index: 999;
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		flex-grow: 1;
		border-radius: 28rpx;
		background-color: #ffffff;
		margin: 0 16rpx;
	}

	.input-message {
		flex-grow: 1;
		height: 40rpx;
		margin: 10rpx;
		border: none;
		outline: none;
		background-color: #ffffff;
		font-size: 28rpx;
		padding-left: 20rpx;
	}

	.extra {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-right: 10rpx;
	}

	.icon {
		width: 30rpx;
		height: 30rpx;
		margin: 0 10rpx;
	}

	.send-btn {
		margin-right: 10rpx;
		padding: 4rpx 20rpx;
		border: none;
		outline: none;
		background-color: #ff5500;
		color: #fff;
		font-size: 24rpx;
		border-radius: 28rpx;
	}
</style>
