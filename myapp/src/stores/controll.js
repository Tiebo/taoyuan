import {
	defineStore
} from 'pinia';
import {
	ref
} from 'vue';
export const useControllStore = defineStore('controll', {
	unistorage: false, // 是否持久化
	state: () => {
		return {
			is_buy: false,
			comm_id: -1
		};
	}
})
