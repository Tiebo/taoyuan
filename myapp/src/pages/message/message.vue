<template>
	<view class="msg-body">
		<view class="arc-select">
			<label for="input">
				<uni-icons type="search" size="25"></uni-icons>
			</label>
			<input name="input" class="arc-input" type="text" placeholder="搜索">
		</view>
		<view class="dialogue">
			<uni-list-chat :clickable="true" :avatar-circle="true" title="桃源记苗木基地客服"
				avatar="https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg" note="您收到一条新的消息"
				:time="msg_date[0]" :badge-text="2" @click="router_dialog"></uni-list-chat>
			<uni-list-chat :clickable="true" :avatar-circle="true" title="花满蹊客服"
				avatar="https://i.328888.xyz/2023/02/25/E0zG3.jpeg" note="您收到一条新的消息" :time="msg_date[1]" :badge-text="4"
				@click="router_dialog"></uni-list-chat>
			<uni-list-chat :clickable="true" :avatar-circle="true" title="明煦居客服"
				avatar="https://i.328888.xyz/2023/02/25/E0Ono.jpeg" note="您收到一条新的消息" :time="msg_date[2]" :badge-text="0"
				@click="router_dialog"></uni-list-chat>
			<uni-list-chat :clickable="true" :avatar-circle="true" title="风雨集客服"
				avatar="https://i.328888.xyz/2023/02/25/E0rFq.jpeg" note="您收到一条新的消息" :time="msg_date[3]" :badge-text="0"
				@click="router_dialog"></uni-list-chat>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import {
		router_to
	} from '../../utils/utils';
	onMounted(() => {
		uni.setNavigationBarTitle({
			title: `${'消息'}`
		})
	})
	let message_data = ref(15);
	let is_find_messgae = ref([true]);
	let msg_date = ref([]);
	const router_dialog = () => {
		router_to('./dialog/dialog')
	}
	const getData = () => {
		msg_date.value.push("2-17 15:32")
		msg_date.value.push("2-15 11:02")
		msg_date.value.push("2-13 17:14")
		msg_date.value.push("2-11 9:38")
	}
	getData()
</script>

<style scoped>
	.title-jiahao {
		float: right;
		font-size: 50rpx;
		margin-right: 10rpx;
	}

	.msg-body {
		background-color: #f3f3f3;
	}

	.arc-select>label {
		position: absolute;
		right: 5%;
		margin-top: 5rpx;
	}

	.arc-select {
		padding: 20rpx;
	}

	.arc-input {
		padding: 10rpx 80rpx 10rpx 20rpx;
		border-radius: 100rpx;
		border-color: royalblue;
		background-color: #ffffff;
		border-width: 4rpx;
	}

	.setting {
		width: 45rpx;
		height: 45rpx;
		float: right;
		margin-left: 180rpx;
		margin-top: 25rpx;
	}

	.divright {
		margin-top: 30rpx;
		left: 90%;
		color: white;
		margin-left: 30rpx;
		font-size: 25rpx;
		width: 20rpx;
		height: 20rpx;
		background-color: red;
		border-radius: 50%;
	}

	.title {
		font-size: 36rpx;
		font-weight: 550;
		padding: 15rpx;
	}
</style>
