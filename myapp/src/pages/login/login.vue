<template>
	<view class="container">
		<view style="text-align: center;">
			<image mode="aspectFill" src="../../static/image-login4.jpg" class="logo" />
		</view>
		<form class="form">
			<view class="input-group">
				<label for="username">用户名:</label>
				<input v-model="username" type="text" id="username" placeholder="请输入用户名" class="input" />
			</view>
			<view class="input-group">
				<label for="password">密码:</label>
				<input v-model="password" type="password" id="password" placeholder="请输入密码" class="input" />
			</view>
			<button @click="user_login" class="button">登录</button>
		</form>
	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue';
	import {
		re_post
	} from '../../utils/request';
	import {
		useUserStore,
	} from '@/stores/user.js'
	import {
		showMsg
	} from '../../utils/utils';

	const userStore = useUserStore();
	let username = ref('');
	let password = ref('')
	if (userStore.username !== '') {
		username.value = userStore.username;
	}
	const user_login = async () => {
		let resp = await re_post("/api/user/account/token/", {
			username: username.value,
			password: password.value
		}, "")
		if (resp) {

		}
		uni.reLaunch({
			url: "/pages/home/home"
		})
		userStore.username = username.value;
		uni.setStorageSync("token", resp.data.token);
	}
</script>
<style>
	.container {
		flex-direction: column;
		height: 100vh;
		padding-top: 20rpx;
		background-color: #f5f5f5;
	}

	.logo {
		width: 100px;
		height: 100px;
		background-color: #fff;
		border-radius: 50%;
		margin-bottom: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #ffffff;
		padding: 20px;
		border-radius: 4px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.input-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
	}

	.input-group label {
		width: 30%;
		font-size: 16px;
	}

	.input {
		width: 80%;
		height: 40px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 0 10px;
		font-size: 16px;
	}

	.button {
		width: 80%;
		height: 40px;
		background-color: #f8fdff;
		color: #000000;
		border: none;
		border-radius: 4px;
		font-size: 16px;
		transition: all 200ms;
	}

	.button:active {
		background-color: #ffffff;
		transition: all 200ms;
	}
</style>
