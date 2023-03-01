<template>
	<view class="arc-body-all">
		<view class="body-title">
			{{article.title}}
		</view>
		<hr>
		<view class="body-user">
			<view class="body-user-photo">
				<image src="https://i.328888.xyz/2023/02/22/xbZvF.jpeg" mode="aspectFit"></image>
			</view>
			<view class="body-user-name">
				{{article.author}}
				<view class="body-user-des">
					当你终于放下过去，拥抱明天的时候
				</view>
			</view>
			<view class="body-user-like">
				+关注
			</view>
			<view v-if="false" class="body-user-like">
				已关注
			</view>
		</view>
		<rich-text selectable='true' :nodes="article_body" class="arc-body-item">
		</rich-text>
	</view>

</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		reactive,
		ref
	} from 'vue';
	import {
		re_get
	} from '../../../utils/request';

	let article_id = ref("")
	let article_body = ref("")
	let article = reactive({})
	const getData = async (id) => {
		await re_get("http://127.0.0.1:8000/api/article/info/", {
			"id": id
		}).then(res => {
			article_body.value = res.data.article_body
			article_id.value = res.data.id
			article_id.value = res.data.id
			article_id.value = res.data.id
			article_id.value = res.data.id
			article = res.data
		})
	};
	onLoad(Option => {
		getData(Option.id)
	})
</script>

<style>
	[alt] {
		max-width: 100%;
		margin-bottom: 20rpx;
	}

	.con-goods {
		display: flex;
	}

	.arc-body-item {
		user-select: auto;
	}

	.body-user-like {
		background-color: #eaf4fd;
		color: #066be3;
		border-radius: 100rpx;
		text-align: center;
		height: 60rpx;
		width: 160rpx;
		padding-top: 10rpx;
		margin: auto;
		margin-left: 20rpx;
	}


	.body-user-des {
		margin-top: 10rpx;
		font-weight: 500;
		font-size: 26rpx;
		color: #494949;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.body-user-name {
		margin-left: 20rpx;
		margin-top: 20rpx;
		font-weight: 600;
	}

	.body-user {
		margin: 30rpx 0;
		display: grid;
		grid-template-columns: 15% 60% 25%;

	}

	.body-user>.body-user-photo {
		margin-top: 20rpx;
		width: 80rpx;
	}

	.body-user>.body-user-photo>image {
		width: 85rpx;
		height: 85rpx;
		border-radius: 50%;
		border: black solid 3rpx;
	}

	.arc-body-all {
		padding: 30rpx 30rpx 100rpx 30rpx;
	}

	.body-title {
		font-size: 40rpx;
		font-weight: 600;
	}
</style>
