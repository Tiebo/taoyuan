<template>
	<view class="arc-body">
		<view class="arc-select">
			<label for="input">
				<uni-icons type="search" size="30"></uni-icons>
			</label>
			<input name="input" class="arc-input" type="text" placeholder="搜索">
		</view>
		<view class="arc-con" v-for="a in article_list" :key="a.id" @click="router_article_body(a.id)">
			<view class="arc-title">
				{{a.title}}
			</view>
			<view class="arc-user">
				<view class="arc-user-photo">
					<image :src="a.author_photo" mode="aspectFit"></image>
				</view>
				<view class="arc-user-name">
					{{a.author}}
				</view>
			</view>
			<view class="arc-des">
				{{a.article_des}}
			</view>
			<view v-if="true" class="arc-image">
			</view>
			<view class="arc-logo">
				{{34}}赞同&nbsp;{{11}}收藏&nbsp;{{11}}评论
			</view>
		</view>
	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue';
	import {
		re_get
	} from '../../../utils/request';
	let article_list = ref([])

	const getData = async () => {
		await re_get("http://127.0.0.1:8000/api/article/list/", {}).then(res => {
			article_list.value = res.data.articles
		})
	};
	getData()
	const router_article_body = (id) => {
		setTimeout(() => {
			uni.navigateTo({
				url: '../articleBody/articleBody?id=' + id,
				animationType: 'slide-in-right',
				animationDuration: 200
			});
		}, 200)
	}
</script>

<style scoped>
	.arc-image {
		margin: 20rpx 0;
		display: flex;
		grid-template-columns: repeat(3, 33%);
	}

	.arc-image>image {
		margin-right: 10rpx;
		width: 220rpx;
		height: 220rpx;
		border-radius: 15rpx;
	}

	.arc-logo {
		font-size: 24rpx;
		color: #6f6f6f;
	}

	.arc-des {
		margin-top: 15rpx;
		font-size: 26rpx;
		color: #494949;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.arc-title {
		font-weight: 600;
		font-size: 32rpx;
	}

	.arc-user-name {
		margin-top: 20rpx;
		margin-left: 15rpx;
		color: #6f6f6f;
		font-size: 28rpx;
	}

	.arc-user-photo>image {
		margin-top: 15rpx;
		border-radius: 50%;
		width: 50rpx;
		height: 50rpx;
	}

	.arc-user {
		display: flex;
	}

	.arc-con {
		background-color: #ffffff;
		padding: 20rpx 30rpx;
		margin-top: 20rpx;
	}

	.arc-body {
		background-color: #f3f3f3;
	}

	.arc-select {
		background-color: #ffffff;
		padding: 20rpx;
	}

	.arc-input {
		padding: 10rpx 80rpx 10rpx 20rpx;
		border-style: solid;
		border-radius: 100rpx;
		border-color: royalblue;
		background-color: #ffffff;
		border-width: 4rpx;
	}

	label {
		position: absolute;
		right: 5%;
		margin-top: 5rpx;
	}
</style>
