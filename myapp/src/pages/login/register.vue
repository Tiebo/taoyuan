<template>
	<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select" @progress="progress"
		@success="success" @fail="fail" />
</template>
<script setup>
	import {
		ref
	} from 'vue';
	import {
		re_post
	} from '../../utils/request';
	let imageValue = ref([])
	// 获取上传状态
	function select(e) {
		uni.request({
			url: "http://mysite.com/api/1/upload/",
			data: {
				source: e.tempFilePaths[0],
				expiration: 'PT5M'
			},
			method: 'POST',
			header: {
				'X-API-Key': 'chv_n7Uk_31950352176b2d00c0232c486496205a493d27b08de0d3bed6d289b561c04197e39e4bfc2f9984e6ebe6fdeb1a31630446c55ccfcbcd32357ce42cd7f4a867e1'
			},
			success(resp) {
				console.log(resp);
			},
			fail(resp) {
				console.log(resp);
			}
		})
		console.log('选择文件：', e.tempFilePaths[0])
	}
	// 获取上传进度
	function progress(e) {
		console.log('上传进度：', e)
	}

	// 上传成功
	function success(e) {
		console.log('上传成功: ', e);
		console.log()
	}

	// 上传失败
	function fail(e) {
		console.log('上传失败：', e)
	}
</script>
<style lang="scss">
	.example-body {
		height: 30vh;
		padding: 10px;
		padding-top: 0;
		background-color: #bcbcbc;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
		color: #333;
	}
</style>
