import {
	defineStore
} from 'pinia';

export const useUserStore = defineStore('user', {
	unistorage: true, // 是否持久化
	state: () => {
		return {
			uid: '125742',
			username: '123123',
			name: '晞月',
			subtitle: '哈哈哈',
			user_photo: '/static/p1.jpg',
		};
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {

	},
})
