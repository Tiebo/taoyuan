<template>
	<view class="container">
		<view style="text-align: center;">
			<image mode="widthFix" src="https://i.328888.xyz/2023/02/22/xOupZ.png"></image>
		</view>
		<!-- v-for -->
		<view class="content" v-for="tree in tree_data" :key="tree.id" @click="router_to_commodity(tree.id)">
			<image class="tree-photo" mode="aspectFill" :src="tree.photo[1]"></image>
			<view class="right">
				<view>
					<span class="right-title">{{tree.name}}</span>
					<span style="font-size: 27rpx;">{{}}</span>
				</view>
				<view class="right-description">
					{{tree.details}}
				</view>
				<view class="right-label">
					<view class="right-label-body" v-for="cate in tree.category.split(',')" :key="tree.id">
						{{cate}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		re_get
	} from '../../../utils/request';
	let tree_data = ref([])
	let tree_categories = ref([])
	const router_to_commodity = (id) => {
		setTimeout(() => {
			uni.navigateTo({
				url: '../../commodity/commodity?id=' + id,
				animationType: 'slide-in-right',
				animationDuration: 200
			});
		}, 200)
	}
	const getData = async () => {
		let resp = await re_get("/api/commodity/all/", {
			"type": 1
		}, uni.getStorageSync("token"))
		tree_data.value = resp;
	};
	getData();
</script>

<style scoped>
	.title-sort {
		display: grid;
		margin-top: 20rpx;
		text-align: center;
		font-weight: 550;
		grid-template-columns: repeat(5, 20%);
	}

	.condition {
		margin-top: 5rpx;
		margin-left: 40rpx;
		font-size: 28rpx;
		color: #5e5e5e;
	}

	.content {
		margin-top: 30rpx;
		display: grid;
		grid-template-columns: 30% 70%;
	}

	.tree-photo {
		border-radius: 30rpx;
		width: 220rpx;
		height: 220rpx;
	}

	.right {
		margin-left: 30rpx;
	}

	.right-title {
		font-weight: 550;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.right-description {
		margin-top: 20rpx;
		font-size: 26rpx;
		color: #494949;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.right-label {
		position: relative;
		bottom: 0%;
		margin-top: 15rpx;
		display: flex;
	}

	.right-label-body {
		padding: 0 10rpx;
		background-color: #ffaa7f;
		margin-right: 15rpx;
		color: white;
		border-radius: 10rpx;
		font-size: 22rpx;
		height: 45rpx;
		text-align: center;
		line-height: 40rpx;
	}
</style>
