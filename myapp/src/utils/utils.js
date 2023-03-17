export function showMsg(title) {
	uni.showToast({
		title,
		duration: 1500,
		icon: 'none',
		position: "bottom"
	})
}

export function router_to(url) {
	uni.navigateTo({
		url: url,
		animationType: 'slide-in-right',
		animationDuration: 200
	});
}
