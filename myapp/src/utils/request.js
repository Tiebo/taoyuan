export function re_get(url, data) {
	return uni.request({
		url: url, //仅为示例，并非真实接口地址。
		data: data,
		header: {},
		method: 'GET'
	});
}

export function re_post(url, data, token) {
	return uni.request({
		url: url, //仅为示例，并非真实接口地址。
		data: data,
		header: {
			'Authorization': 'Bearer ' + token
		},
		method: 'POST'
	});
}
