import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import {
	$http
} from "@escook/request-miniprogram";

uni.$http = $http;
// 配置请求根路径
$http.baseUrl = "https://www.uinav.com";
// 请求开始之前做一些事情
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: "数据加载中...",
	});
};
// 请求完成之后做一些事情
$http.afterRequest = function() {
	uni.hideLoading();
};

export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
