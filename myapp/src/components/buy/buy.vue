<template>
	<pop :is_show="controllStore.is_buy" direction="below" :is_close="true" :is_mask="true" :width="100"
		height="fit-content" :maskFun="true">
		<view class="footer-shop">
			<view class="shop-buy">
				<view class="buy-title">
					<image mode="aspectFill" class="buy-photo" :src="commodity_data.img_data[active]"></image>
					<text style="color: #ff5500 ;font-size: 24rpx;">￥</text>
					<text
						style="color: #ff5500;font-size: 40rpx;font-weight: 600;">{{commodity_data.price[active]}}</text>
				</view>

				<view class="buy-address">
					<uni-icons customPrefix="iconfont" @click="controllStore.is_buy = false" type="icon-tyweizhi"
						size="18" />
					<view class="buy-address-item">
						<text style="font-size: 26rpx;font-weight: 600;">
							{{'带鱼 西南石油大学学生一区快递中心菜鸟驿站'}}
						</text>
						<br>
						<text style="font-size: 24rpx;margin-top: 20rpx; ">{{'包邮 送运费险 现货， 付款后48小时内发货'}}</text>
					</view>
					<text style="color: gray;"> {{">"}} </text>
				</view>
				<view class="buy-body">
					<view class="body-title">
						分类 ( {{ commodity_data.img_data.length }} )
					</view>
					<view class="body-item">
						<view :class="active==index ? 'body-item-card active' : 'body-item-card' "
							v-for="(comm, index) in commodity_data.img_data" :key="index" @click="active = index">
							<image mode="aspectFill" :src="comm"></image>
							<text class="item-details">
								{{commodity_data.name + ' 【' + commodity_data.price_des[index] + '】'}}
							</text>
						</view>

					</view>
					<view class="body-number">
						<label>数量：</label>
						<input type="text" v-model="number" placeholder="1" style="border-radius: 20rpx;
							width: 80rpx;padding: 0 10rpx;position: absolute;right: 8%;
							text-align: center;border: black solid 2rpx;">
					</view>
				</view>
			</view>
		</view>

		<view class="footer">
			<view class="buy-price">
				<text class="icon iconfont icon-tywodeyouhuijuan"></text>
				小计 ￥ {{commodity_data.price[active] * number}}
			</view>
			<view class="goods-item-buy" @click="controllStore.is_buy = true">
				立即购买
			</view>
		</view>
	</pop>

</template>

<script setup>
	import pop from "@/components/ming-pop/ming-pop.vue";
	import {
		ref,
		reactive
	} from 'vue';
	import {
		useControllStore
	} from '../../stores/controll';
	import {
		re_get
	} from '../../utils/request.js'

	let commodity_data = reactive({
		name: "",
		id: "",
		origin: "",
		img_data: [],
		price: [0, 1],
		price_des: [],
		unit: "",
		type: "",
		shop_name: "",
		shop_photo: ""
	})

	let active = ref(0);
	let number = ref(1);

	const controllStore = useControllStore();

	const getData = async () => {
		const resp = await re_get(
			"/api/commodity/info/", {
				"id": controllStore.comm_id
			}, uni.getStorageSync("token"));
		let data = resp.data;

		commodity_data.img_data = data.photo;
		commodity_data.id = data.id;
		commodity_data.name = data.name;
		commodity_data.origin = data.origin;
		commodity_data.price = data.price.split(',');
		commodity_data.price_des = data.price_des.split(',');
		commodity_data.unit = data.unit;
		commodity_data.type = data.type;
		commodity_data.shop_name = data.shop_name;
		commodity_data.shop_photo = data.shop_photo;
	}
	getData();
</script>

<style scoped>
	.body-number {
		display: flex;
		font-size: 28rpx;
		margin: 30rpx;
	}

	.buy-price {
		margin-bottom: 30rpx;
		font-size: 26rpx;
		font-weight: 600;
	}

	.icon {
		background-color: #fd2600;
		color: #ffffff;
		padding: 10rpx;
		border-radius: 50%;
	}

	.goods-item-buy {
		margin-right: 60rpx;
		background-image: linear-gradient(to right, #fd6c04 0%, #fd0000 100%);
		font-size: 26rpx;
		font-weight: 600;
		height: 70rpx;
		letter-spacing: 2rpx;
		color: #f8f8f8;
		text-align: center;
		border-radius: 40rpx;
		line-height: 65rpx;
	}

	.footer {
		position: fixed;
		bottom: 0%;
		background-color: #ffffff;
		width: 100%;
		padding: 30rpx;
		z-index: 50;
	}

	.buy-footer {
		position: inherit;
	}

	.item-details {
		border-radius: 20rpx;
		font-size: 22rpx;
		padding: 10rpx 20rpx 3rpx 20rpx;
		background-color: rgba(239, 239, 239, 0.5);
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		line-height: 35rpx;
		-webkit-box-orient: vertical;

	}

	.body-item {
		display: grid;
		grid-template-columns: 33% 33% 33%;
	}

	.body-item-card {
		border-radius: 20rpx;
		text-align: center;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.body-item-card.active {
		border: #ff5500 solid 4rpx;
		border-radius: 20rpx;
	}

	.body-item>.body-item-card>image {
		border-radius: 20rpx;
		width: 25vw;
		height: 25vw;
	}

	.body-title {
		font-size: 24rpx;
	}

	.buy-body {
		background-color: #ffffff;
		padding: 20rpx;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}

	.buy-address-item>text {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: clip;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.buy-address {
		border-radius: 25rpx;
		margin-top: 20rpx;
		display: grid;
		grid-template-columns: 10% 85% 5%;
		align-items: center;
		padding: 20rpx;
		background-color: #ffffff;
	}

	.footer-shop {
		padding: 30rpx;
		background-color: #efefef;
	}

	.shop-buy {
		background-color: #efefef;
		height: 80vh;
	}

	.buy-title {
		display: flex;
		align-items: center;
	}

	.buy-photo {
		margin-right: 30rpx;
		border-radius: 20rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.buy-con {
		padding: 20rpx;
		border-radius: 25rpx 25rpx 0 0;
		background-color: #ffffff;
		height: 100%;
		opacity: 1;
	}
</style>
