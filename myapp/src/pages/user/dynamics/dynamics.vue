<template>
	<view class="container">
		<view class="dynamic-card" v-for="post in posts_info" :key="post.id">
			<dynamics-card class="dynamic-card-body" :user='post.user_info' :post="post">

			</dynamics-card>
		</view>
	</view>

</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';

	let posts_info = ref([]);

	posts_info.value.push({
		id: 1,
		content: '你我的未来！名为：幻想之地！！',
		time: '2-5',
		images: [
			'https://i.328888.xyz/2023/03/20/PMLrx.jpeg',
			'https://i.328888.xyz/2023/03/20/PMM5k.jpeg',
			'https://i.328888.xyz/2023/03/20/PMTZL.jpeg',
			'https://i.328888.xyz/2023/03/20/PMTZL.jpeg',
			'https://i.328888.xyz/2023/03/20/PMaOp.jpeg',
			'https://i.328888.xyz/2023/03/20/PMM5k.jpeg'
		],
		like: 2,
		comment: 3,
		user_info: {
			user_photo: 'https://c-ssl.duitang.com/uploads/blog/202205/16/20220516100255_a0eee.thumb.300_0.png',
			username: '北苑',
			subtitle: '也会去玩'
		}
	});
	posts_info.value.push({
		id: 1,
		content: '花香蝶自来',
		time: '2-5',
		images: [
			'http://hbimg.huaban.com/f82d339df1f3231ec8f11027cb38567a10ac07f570df7f-q1jXAw_fw320',

		],
		like: 5,
		comment: 1,
		user_info: {
			user_photo: 'http://hbimg.huaban.com/e549a8026d08c713cd9a88b361a574a304588ffb572b-STYNYS_fw320',
			username: '鲫鱼',
			subtitle: '你也想继续吗'
		}
	});
	posts_info.value.push({
		id: 1,
		content: '静安寺覅哦就去我房间阿斯利康房价我姐夫撒加快了发解放前我就卡死了就',
		time: '2020-1-5',
		images: [
			'https://i.328888.xyz/2023/03/20/PMLrx.jpeg',
			'https://i.328888.xyz/2023/03/20/PMM5k.jpeg',
			'https://i.328888.xyz/2023/03/20/PMTZL.jpeg',
			'https://i.328888.xyz/2023/03/20/PMTZL.jpeg',
			'https://i.328888.xyz/2023/03/20/PMaOp.jpeg',
			'https://i.328888.xyz/2023/03/20/PMM5k.jpeg'
		],
		like: 2,
		comment: 3,
		user_info: {
			user_photo: '/static/p1.jpg',
			username: '北苑',
			subtitle: '哈哈哈'
		}
	})
</script>

<style scoped>
	.container {
		padding: 10rpx 20rpx;
		background-color: #ededed;
		height: 100vh;
	}

	.dynamic-card {
		margin-bottom: 20rpx;
	}
</style>
