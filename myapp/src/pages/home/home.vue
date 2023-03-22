<template>
	<view class="arc-select">
		<label for="input" style="margin-top: 10rpx;">
			<uni-icons type="search" size="22"></uni-icons>
		</label>
		<input name="input" class="arc-input" type="text" placeholder="搜索">
	</view>
	<view class="container">
		<!-- 轮播图 -->
		<view>
			<!-- 轮播图区域 -->
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true"
				:circular="true" :autoplay="true" interval="2500" duration="500">
				<swiper-item v-for="(item,index) in img_data" :key="index">
					<image :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 跳转图表 -->
		<view class="row-cols-3" style="margin-top: 20rpx; text-align: center; padding: 30rpx;border-radius: 20rpx">
			<view class="list" @click="router_list('tree')">
				<image src="../../static/icon/taozi.png"></image>
				<br>
				<span style="font-size: 24rpx;">领养桃树</span>
			</view>

			<view class="list" @click="router_list('hotel')">
				<image src="../../static/icon/minsu.png"></image>
				<br>
				<span style="font-size: 24rpx;">世外桃源</span>
			</view>
			<view class="list" @click="router_list('shop')">
				<image src="../../static/icon/shangpin.png"></image>
				<br>
				<span style="font-size: 24rpx;">桃源品</span>
			</view>
			<view class="list" @click="router_list('article')">
				<image src="../../static/icon/wenhua.png"></image>
				<br>
				<span style="font-size: 24rpx;">东新文化</span>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view class="recommend" style="margin-top: 40rpx;">
			<view class="title">
				<text style="background-color: #02c4ff;border-radius: 10rpx;">&nbsp;</text>
				今日推荐
				<text style="position: absolute; right: 5%;color: gray;"> > </text>
			</view>
			<view class="re-article" style="margin-top: 30rpx;">
				<view @click="router_to('/pages/list/articleBody/articleBody?id=' + article.id)" class="re-article-body"
					v-for="(article, index) in article_list" :key="article.id">
					<image mode="aspectFill" :src="article_imgs[index]">
					</image>
					<view style="padding: 20rpx 20rpx 0 20rpx;">
						<view class="article-title">
							{{article.title}}
						</view>
						<view class="article-des">
							{{article.articleDes}}
						</view>
						<view style="margin-top: 10rpx;display: flex;align-items: center;">
							<image :src="userStore.user_photo" mode="aspectFill"
								style="height: 45rpx;width: 45rpx;border-radius: 50%;">
							</image>
							<text style="color: gray;font-size: 24rpx;margin-left: 20rpx;">{{article.author}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 发现 -->
		<view class="recommend" style="margin-top: 40rpx;">
			<view class="title">
				<text style="background-color: #ff0191;border-radius: 10rpx;">&nbsp;</text>
				发现
				<text style="position: absolute; right: 5%; color: gray;"> > </text>
			</view>
			<view class="re-card" style="margin-top: 30rpx;">
				<shop-card width="335" v-for="find in find_data" :key="find.id" :images="find.photo"
					:shop_name='find.name' :price='find.price' :id='find.id' class="re-card-body">
				</shop-card>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		reactive,
		ref
	} from "vue";
	import {
		useUserStore
	} from "../../stores/user";
	import {
		re_get
	} from "../../utils/request";
	import {
		showMsg,
		router_to
	} from "../../utils/utils";
	onMounted(() => {})
	let dotStyle = ref(true)
	const userStore = useUserStore();
	let comm_data = ref([]);
	let img_data = ref([]);
	let find_data = ref([]);
	let article_list = ref([]);
	let article_imgs = ref([]);
	const getData = async () => {
		img_data.value.push('http://hbimg.huaban.com/814e7cf23a108817703d56bfc33010ef7a8a1e6f3d0b5b-WfmxOM')
		img_data.value.push('https://i.328888.xyz/2023/02/25/EA3XU.png')
		img_data.value.push('https://c-ssl.duitang.com/uploads/item/202003/15/20200315203131_5wJQf.jpeg')
		let data = await re_get("/api/commodity/all/", {
			type: '-1'
		}, uni.getStorageSync("token"))
		find_data.value = data

		let resp = await re_get("/api/article/list/", {})
		for (let i = 0; i < 2; i++) {
			article_list.value.push(resp.data.articles[i])
		}

		article_imgs.value.push(
			'https://mmbiz.qpic.cn/mmbiz_jpg/Zwydhx732ZaAA0fyCcJepYPYXbXAX9AcpWUlcBmHibw8ianaVqS7VGS1tzLZxurIVibZjQvSPpWOfEiaIXicW7f0p5g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1'
		);
		article_imgs.value.push(
			'http://hbimg.huaban.com/f235598eee4795225cfc262ed78dee7256963e60b8009-N8fKzG'
		)

	};
	const router_list = (type) => {
		router_to(`../list/${type}/${type}`)
	}

	const router_to_commodity = (id) => {
		router_to('../commodity/commodity?id=' + id)
	}
	getData();
</script>

<style scoped>
	.article-title {
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.article-des {
		margin-top: 10rpx;
		font-size: 24rpx;
		color: #7f7f7f;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.container {
		background-color: #f1f1f1;
	}

	.re-card {
		column-count: 2;
		column-gap: 10rpx;
		row-gap: 10rpx;
		-moz-column-count: 2;
		/* Firefox */
		-webkit-column-count: 2;
		/* Safari and Chrome */
	}

	.re-card-body {
		-moz-page-break-inside: avoid;
		-webkit-column-break-inside: avoid;
		break-inside: avoid;
		height: auto;
	}

	.arc-select>label {
		position: absolute;
		right: 5%;
		margin-top: 5rpx;
	}

	.arc-select {
		background-color: #f1f1f1;
		padding: 20rpx;
	}

	.arc-input {
		padding: 10rpx 80rpx 10rpx 20rpx;
		border-radius: 100rpx;
		border-color: royalblue;
		background-color: #ffffff;
		border-width: 4rpx;
	}



	swiper {
		height: 300rpx
	}

	.swiper-item {
		border-radius: 20rpx;
	}

	.des {
		font-size: 24rpx;
		color: #272727;
	}

	.title {
		font-size: 36rpx;
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

	.href {
		padding: 20rpx;
	}

	a {
		margin: 30rpx;
	}

	.row-cols-3 {
		background-color: #ffffff;
		display: grid;
		grid-template-columns: repeat(4, 25%);
	}

	.re-article-body {
		border-radius: 20rpx;
		background-color: #ffffff;
		margin-top: 20rpx;
		display: grid;
		grid-template-columns: 30% 70%;
		margin-right: 20rpx;
	}

	.re-article-body>image {
		width: 200rpx;
		height: 200rpx;
		border-radius: 20rpx 0 0 20rpx;
	}

	.title {
		margin-left: 10rpx;
	}
</style>
