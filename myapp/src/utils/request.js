const base_url = "https://pipibr.com:3002";
// const base_url = "http://pipibr.com:3002"
export function re_get(url, data) {
	return uni.request({
		url: base_url + url, //仅为示例，并非真实接口地址。
		data: data,
		header: {
			'Authorization': 'Bearer ' + uni.getStorageSync("token")
		},
		method: 'GET'
	}).then(res => {
		if (res.statusCode === 200) {
			return res.data
		} else {
			throw new Error('请求失败')
		}
	}).catch(err => {
		console.log(err)
	})
}

export function re_post(url, data) {
	return uni.request({
		url: base_url + url, //仅为示例，并非真实接口地址。
		data: data,
		header: {
			'Authorization': 'Bearer ' + uni.getStorageSync("token"),
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		method: 'POST'
	}).then(res => {
		if (res.statusCode === 200) {
			return res.data
		} else {
			throw new Error('请求失败')
		}
	}).catch(err => {
		console.log(err)
	})
}
