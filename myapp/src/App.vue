<script>
	import {
		useUserStore
	} from './stores/user';
	export default {
		onLaunch: function() {
			console.log("App Launch");
		},
		onShow: function() {
			console.log("App Show");
		},
		onHide: function() {
			console.log("App Hide");
		},
		onLaunch: function() {
			//判断是否登录
			let token = uni.getStorageSync("token")
			if (!token) {
				//不存在则跳转至登录页
				uni.reLaunch({
					url: "/pages/login/index"
				})
			} else {
				//不存在则跳转至登录页
				uni.reLaunch({
					url: "/pages/home/home"
				})
			}
		}

	};
</script>

<style>
	@import url("./static/base.css");
	@import url("common/iconfont.css");
	/*每个页面公共css */
	@import 'colorui/main.css';
	@import 'colorui/icon.css';

	.container {
		padding: 0 20rpx;
	}
</style>
