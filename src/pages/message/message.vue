<template>
	<view class="title">
		&nbsp;&nbsp;消息
		<span style="width: 400rpx;"></span>
		<image class="setting" src="../../static/icon/setting.png" />
	</view>
	<view class="dialogue">
		<uni-list-chat :avatar-circle="true" title="客服"
			avatar="https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg" note="您收到一条新的消息"
			:time="msg_date[0]" :badge-text="2"></uni-list-chat>
		<uni-list-chat :avatar-circle="true" title="痛苦裤子"
			avatar="https://cdn.acwing.com/media/user/profile/photo/63655_lg_3be53c9a42.jpg" note="您收到一条新的消息"
			:time="msg_date[1]" :badge-text="4"></uni-list-chat>
		<uni-list-chat :avatar-circle="true" title="愤怒蘑菇"
			avatar="https://cdn.acwing.com/media/user/profile/photo/128261_md_ce1413e135.jpg" note="您收到一条新的消息"
			:time="msg_date[2]" :badge-text="0"></uni-list-chat>
		<uni-list-chat :avatar-circle="true" title="羚羊糕点拌饭"
			avatar="https://cdn.acwing.com/media/user/profile/photo/246956_lg_c63d10ee56.jpg" note="您收到一条新的消息"
			:time="msg_date[3]" :badge-text="0"></uni-list-chat>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	let message_data = ref(15);
	let is_find_messgae = ref([true]);
	let msg_date = ref([]);
	const getData = () => {
		msg_date.value.push("2-17")
		msg_date.value.push("2-15")
		msg_date.value.push("2-13")
		msg_date.value.push("2-11")
	}
	getData()
</script>

<style scoped>
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
		display: flex;
		font-size: 42rpx;
		font-weight: 550;
		background-color: #e9e9e9;
		height: 100rpx;
		line-height: 100rpx;
	}
</style>
