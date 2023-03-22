<template>
	<view class="arc-body-all">
		<view class="body-title">
			{{article.title}}
		</view>
		<hr>
		<view class="body-user">
			<view class="body-user-photo">
				<image :src="userStore.user_photo" mode="aspectFit"></image>
			</view>
			<view class="body-user-name">
				{{article.author}}
				<view class="body-user-des">
					当你终于放下过去，拥抱明天的时候
				</view>
			</view>
			<view @click="follow" :class="is_follow?'body-user-like follow': 'body-user-like'">
				{{is_follow?'已关注':'+关注'}}
			</view>
		</view>
		<mp-html :content="article_body" />
	</view>
	<view class="footer">
		<view class="con-article">

			<view :class="active.is_aixin?'approve':'article-approve'">
				<text class="iconfont icon-tysanjiaoxing"></text>
				<text style="margin-left: 20rpx;font-size: 26rpx;">{{active.aixin}}</text>
				<view v-if="!active.is_aixin" style="width: 100rpx;text-align: center;color: gray;">|</view>
				<view v-if="!active.is_aixin" class="article-unapprove">
					<text class="iconfont icon-tyxiasanjiaoxing"></text>
				</view>
			</view>




			<view class="goods-item">
				<text @click="trans_active('aixin')" v-if="active.is_aixin" class="iconfont icon-tyaixin_shixin"
					style="font-size: 45rpx;color: red;" />
				<text v-else @click="trans_active('aixin')" class="iconfont icon-tyaixin1" style="font-size: 45rpx;" />
				<view>
					{{active.aixin}}
				</view>
			</view>
			<view class="goods-item">
				<text @click="trans_active('shoucang')" v-if="active.is_shoucang" class="iconfont icon-tyshoucang1"
					style="font-size: 50rpx;color: #ffa11d;" />
				<text @click="trans_active('shoucang')" v-else class="iconfont icon-tyshoucang"
					style="font-size: 50rpx;" />
				<view>
					{{active.shoucang}}
				</view>
			</view>
			<view class="goods-item">
				<text class="iconfont icon-typinglun" style="font-size: 40rpx;" />
				<view>
					{{active.pinglun}}
				</view>
			</view>
			<view class="goods-item">
				<image style="width: 60rpx;height: 60rpx;border-radius: 50%;" :src="useUserStore().user_photo"
					mode="scaleToFill"></image>
				<text @click="is_follow=!is_follow;showMsg('关注成功')" v-if="!is_follow" class="iconfont icon-tyjiahao"
					style="box-shadow: black 0rpx 0rpx 2rpx ; 
				border-radius: 10rpx;width: 40rpx;text-align: center;
					color: #0055ff; "></text>
			</view>
		</view>
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
		useUserStore
	} from '../../../stores/user';
	import {
		re_get
	} from '../../../utils/request';
	import {
		showMsg
	} from '../../../utils/utils';

	const userStore = useUserStore();

	let active = reactive({
		aixin: 10,
		shoucang: 13,
		pinglun: 4,
		is_aixin: false,
		is_shoucang: false,
	})

	let is_follow = ref(false)
	let article_body = ref("")
	let article = reactive({
		article_approved: 0,
		article_comment: 0,
		article_des: '',
		author: '',
		author_photo: '',
		create_time: '',
		id: 0,
		title: '',
		update_time: '',
		article_body: ''
	});

	const follow = () => {
		is_follow.value = !is_follow.value;
		uni.showToast({
			title: "关注成功",
			duration: 1500,
			position: "bottom"
		})
	}

	const getData = async (id) => {
		let resp = await re_get("/api/article/info/" + id);

		article = resp.data
		article_body.value = resp.data.article_body
	};

	const trans_active = (type) => {
		if (type === 'aixin') {
			active.is_aixin ? active.aixin-- : active.aixin++;
			active.is_aixin = !active.is_aixin
		} else if (type === 'shoucang') {
			active.is_shoucang ? active.shoucang-- : active.shoucang++;
			active.is_shoucang = !active.is_shoucang;
		}
	}

	onLoad(Option => {
		getData(Option.id)
	})
</script>

<style>
	.article-approve {
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: linear-gradient(to left, #b3d4ff 0%, #d7ddff 100%);
		width: 300rpx;
		height: 70rpx;
		color: #2252ff;
		border-radius: 40rpx;
		box-shadow: 2rpx 0rpx 2rpx rgba(145, 145, 145, 0.6);
		margin-right: 1rpx;
		opacity: 0.8;
		font-size: 20rpx;
		transition: all 500ms;
	}

	.approve {
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: linear-gradient(to left, #4154ff 0%, #3741ff 100%);
		width: 200rpx;
		height: 70rpx;
		color: #ffffff;
		border-radius: 40rpx;
		box-shadow: 2rpx 0rpx 2rpx rgba(145, 145, 145, 0.6);
		margin-right: 1rpx;
		opacity: 0.8;
		font-size: 20rpx;
		transition: all 500ms;
	}

	.iconfont {
		font-size: 26rpx;
	}

	.goods-item {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-left: 50rpx;
		font-size: 20rpx;
	}

	.footer {
		position: fixed;
		bottom: 0%;
		background-color: #ffffff;
		height: 70rpx;
		width: 100%;
		padding: 30rpx;
		transition: 400ms;
	}



	.con-article {
		display: flex;
	}

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
		line-height: 50rpx;
		transition: all 400ms;
	}

	.body-user-like.follow {
		background-color: #e0e0e0;
		color: #5a5a5a;
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
		margin-top: 20rpx;
		font-weight: 600;
	}

	.body-user {
		margin: 30rpx 0;
		display: grid;
		grid-template-columns: 15% 60% 25%;
		box-shadow: 0 -2rpx 2rpx rgba(0, 0, 0, 0.1);
	}

	.body-user>.body-user-photo {
		margin-top: 20rpx;
		width: 80rpx;
	}

	.body-user>.body-user-photo>image {
		width: 85rpx;
		height: 85rpx;
		border-radius: 50%;
	}

	.arc-body-all {
		padding: 30rpx 30rpx 100rpx 30rpx;
	}

	.body-title {
		font-size: 40rpx;
		font-weight: 600;
	}
</style>
