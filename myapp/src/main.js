import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import {
	createUnistorage
} from './uni_modules/pinia-plugin-unistorage'


export function createApp() {
	const app = createSSRApp(App);
	// 状态管理
	const store = Pinia.createPinia()
	// 持久化
	store.use(createUnistorage())
	app.use(store)
	return {
		app,
		Pinia, // 此处必须将 Pinia 返回
	};
}
