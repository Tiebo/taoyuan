export function showMsg(title) {
	uni.showToast({
		title,
		duration: 1500,
		icon: 'none',
		position: "bottom"
	})
}
