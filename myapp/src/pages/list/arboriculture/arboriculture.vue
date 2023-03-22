<template>
	<view class="page">
		<view class="canvas">
			<!-- 云朵位移 -->
			<view class="cloud">
				<view class="fly-1"></view>
				<view class="fly-2"></view>
				<view class="fly-3"></view>
			</view>

			<!-- 树、水滴值 -->
			<view class="tree">
				<view v-for="(o, i) in rainArr" :key="i" :class="['rain rain-'+ stages]" @click="rainFun(i, o)">
					故事{{o}}
				</view>
				<image mode="aspectFill" :src="tree_imgs[stages - 1]"
					:class="['tree-'+ stages, treemove ? 'move-'+ stages : '']" hover-class="none" @click="tree">
				</image>
			</view>



			<!-- 水壶、浇水动画 -->
			<view class="kettle">
				<view class="kettls" @click="water" hover-class="none"></view>
				<view class="flasks" v-show="watercss" :class="{'water': watercss}"></view>
				<view class="flasms" v-show="!watercss" @click="water" hover-class="none"></view>
				<view class="waters" v-show="waterdom"></view>
			</view>

			<!-- 用户信息、水滴值 -->
			<view class="sumup">
				<view class="user">
					<view class="cover">
						<image :src="info.avatar" @click="zoom(info.avatar)" hover-class="none"></image>
					</view>
					<view class="info">
						<view class="name">
							<text class="name">{{info.name}}</text>
							<view :class="'sex-'+ info.sex"></view>
						</view>
						<view class="drop" hover-class="none">
							<text>{{info.votes + ' 水滴'}}</text>
							<view class="icon">
								<text class="plus" :class="{'pluss': pluss}">+{{plussNum}}</text>
							</view>
						</view>
					</view>
				</view>

				<!-- 树成长进度 -->
				<view class="speed">
					<view class="progress">
						<image class="speed-1" :src="'/static/img/speed-1'+ [1 == stages ? '-h' : ''] +'.png'">
						</image>
						<image class="speed-2" :src="'/static/img/speed-2'+ [2 == stages ? '-h' : ''] +'.png'">
						</image>
						<image class="speed-3" :src="'/static/img/speed-3'+ [3 == stages ? '-h' : ''] +'.png'">
						</image>
					</view>
				</view>
			</view>
		</view>
	</view>
	<view class="serve">
		<view class="fun fruit">
			<image mode="aspectFill" style="width: 100rpx;height: 80rpx;" src="../../../static/icon/shuiguo.png">
			</image>
			<view style="text-align: center;font-size: 20rpx;">果实配送</view>
		</view>
		<view class="fun product">
			<image mode="aspectFill" style="width: 100rpx;height: 80rpx;" src="../../../static/icon/chanpin.png">
			</image>
			<view style="text-align: center;font-size: 20rpx;">系列产品</view>
		</view>
		<view class="fun play">
			<image mode="aspectFill" style="width: 100rpx;height: 80rpx;" src="../../../static/icon/yaya.png">
			</image>
			<view style="text-align: center;font-size: 20rpx;">游玩服务</view>
		</view>
		<view class="fun cost">
			<image mode="aspectFill" style="width: 100rpx;height: 80rpx;" src="../../../static/icon/shu.png">
			</image>
			<view style="text-align: center;font-size: 20rpx;"> 故事记录</view>
		</view>
	</view>
	<view class="tree-info">
		<view class="fun">
			<image mode="aspectFill" style="width: 100rpx;height: 80rpx;" src="../../../static/icon/tupian.png">
			</image>
			<view style="text-align: center;font-size: 20rpx;">图片</view>
		</view>
		<view class="fun" style="text-align: center;">
			<image mode="aspectFill" style="width: 80rpx;height:80rpx;" src="../../../static/icon/upup.png">
			</image>
			<view style="text-align: center;font-size: 20rpx;">阶段</view>
		</view>
		<view class="fun">
			<image mode="aspectFill" style="width: 100rpx;height: 100rpx;" src="../../../static/icon/yanghu1.png">
			</image>
			<view style="text-align: center;font-size: 20rpx;">养护</view>
		</view>
	</view>
</template>

<script>
	import {
		useUserStore
	} from '../../../stores/user';
	export default {
		data() {
			return {
				info: {
					name: useUserStore().name, // 用户姓名
					sex: 2, // 用户姓别 1男， 2女
					votes: 8, // 水滴值 默认为8
					avatar: useUserStore().user_photo //用户头像
				},
				rainArr: [1, 2, 3, 4], // 雨滴值 点击收取

				stages: 1, // 成长阶段 1(小树[默认])，中2(中树) ，大3(大树)
				during: 2, // 阶段阈值 1、小树[100以下](during > votes ) ，2、中树[100及以上 并且小于1000](during <= votes && oldest > votes)
				oldest: 300, // 阶段阈值 3、大树[1000及以上](oldest <= votes )
				plussNum: 1, // 加值数量（默认1）

				pluss: false, // 水滴值+1动画开关
				movetree: true, // 树动画开关
				treemove: false, // 树大小动画类型开关
				wateroff: true, // 浇水动画开关
				watercss: false, // 水壶动画开关
				waterdom: false, // 水滴动画开关

				tree_imgs: [
					'http://hbimg.huaban.com/139c528ded64141f76dd275f2c2574c7bc11573f313a5-LQX1hQ',
					'https://i.328888.xyz/2023/03/20/PRqzy.png',
					'https://i.328888.xyz/2023/03/20/PRua5.png'
				]
			};
		},

		methods: {
			// 设置树的大小，恢复动画
			setTree(time = 4000) {
				setTimeout(() => {
					this.plussNum = 1;
					this.pluss = false;
					this.wateroff = true;
					this.watercss = false;
					this.treemove = false;
					// 小树阶段
					if (this.during > this.info.vote) {
						this.stages = 1;
					};
					// 中树阶段
					if (this.during <= this.info.votes && this.oldest > this.info.votes) {
						this.stages = 2;
					};
					// 大树阶段
					if (this.oldest <= this.info.votes) {
						this.stages = 3;
					};
				}, time);
			},

			// 点击用户头像放大
			zoom(o) {
				uni.previewImage({
					'urls': [o]
				});
			},

			// 收取雨滴的动画
			rainFun(i, o) {
				this.plussNum = o;
				this.info.votes = Number(this.info.votes) + (o - 0);
				this.pluss = true;
				this.treemove = true;
				setTimeout(() => {
					this.rainArr.splice(i, 1);
				}, 1000);
				this.setTree(2000);
			},

			// 点击树的动画
			tree() {
				if (this.movetree) {
					this.treemove = true;
					this.movetree = false;
					setTimeout(() => {
						this.movetree = true;
						this.treemove = false;
					}, 1000);
				};
			},

			// 水壶浇水动画
			water() {
				if (this.wateroff) {
					this.watercss = true;
					this.wateroff = false;

					setTimeout(() => {
						this.waterdom = true;
					}, 1500);

					setTimeout(() => {
						this.info.votes++;
						this.pluss = true;
						this.treemove = true;
						this.movetree = false;
					}, 2000);

					setTimeout(() => {
						this.waterdom = false;
						this.movetree = true;
					}, 3500);

					this.setTree();
				};
			}
		}
	};
</script>

<style>
	.canvas {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		background: url('http://hbimg.huaban.com/b8b97138f7adcebf8c43c8d28cfebfd9aa805df7f299-Woc7mj') no-repeat;
		background-size: cover;
		overflow: hidden;
	}

	.canvas .cloud {
		margin-top: 128rpx;
	}

	.canvas .cloud view {
		margin: 40rpx 0;
	}

	.canvas .cloud .fly-1 {
		width: 102rpx;
		height: 68rpx;
		animation: cloud-1 80s ease-in-out 0s infinite alternate;
		background: url('/static/img/fly-1.png') no-repeat;
		background-size: contain;
	}

	.canvas .cloud .fly-2 {
		width: 72rpx;
		height: 52rpx;
		animation: cloud-2 60s linear 0s infinite alternate;
		background: url('/static/img/fly-2.png') no-repeat;
		background-size: contain;
	}

	.canvas .cloud .fly-3 {
		width: 78rpx;
		height: 56rpx;
		animation: cloud-3 70s ease 0s infinite alternate;
		background: url('/static/img/fly-3.png') no-repeat;
		background-size: contain;
	}

	.canvas .tree {
		position: relative;
		display: flex;
		flex-direction: row;
		height: 50vh;
		justify-content: center;
	}

	.canvas .tree .rain {
		position: relative;
		top: -100rpx;
		margin: 25rpx;
		width: 80rpx;
		height: 80rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 18rpx;
		color: #404040;
		background: repeating-radial-gradient(#a2e2bf, #e6fcdf);
		box-shadow: 0 0 16rpx 6rpx #cfffd7;
		border-radius: 50%;
		animation: rain 4s infinite;
		z-index: 1;
		line-height: 80rpx;
	}

	.canvas .tree .rain text {
		font-size: 12rpx;
	}

	.canvas .tree .rain-1 {
		top: 270rpx;
	}

	.canvas .tree .rain-2 {
		top: 80rpx;
	}

	.canvas .tree .rain-3 {
		top: -100rpx;
	}

	.canvas .tree .rain:nth-child(1) {
		animation-delay: .8s;
		margin-top: 10px;
	}

	.canvas .tree .rain:nth-child(2) {
		animation-delay: .5s;
		margin-top: -10px;
	}

	.canvas .tree .rain:nth-child(4) {
		animation-delay: .1s;
		margin-top: -5px;
	}

	.canvas .tree image {
		position: absolute;
		bottom: 0;
		width: 280rpx;
		height: 380rpx;
		z-index: 0;
	}

	.canvas .tree .tree-1 {
		width: 400rpx;
		height: 388rpx;
	}

	.canvas .tree .tree-2 {
		width: 100%;
		height: 600rpx;
	}

	.canvas .tree .tree-3 {
		width: 100%;
		height: 800rpx;
	}

	.fun {
		width: 100rpx;
		height: 100rpx;
		margin-bottom: 10rpx;
	}

	.tree-info {
		position: fixed;
		right: 3%;
		bottom: 45%;
		display: grid;
		grid-template-rows: repeat(3, 30%);
		height: 30vh;
		padding: 20rpx;
	}

	.serve {
		position: fixed;
		top: 3%;
		display: grid;
		grid-template-columns: repeat(4, 25%);
		width: 100%;
		padding: 20rpx;
		margin-left: 25rpx;
	}


	.canvas .kettle {
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: flex-end;
		width: 100%;
		height: 80rpx;
	}

	.canvas .kettle view {
		position: absolute;
		z-index: 2;
	}

	.canvas .kettle .kettls {
		top: -172rpx;
		right: 20rpx;
		width: 116rpx;
		height: 112rpx;
		background: url('/static/img/kettls.png') no-repeat;
		background-size: contain;
		transition: all 2s;
	}

	.canvas .kettle .flasks {
		top: -176rpx;
		right: 28rpx;
		width: 113rpx;
		height: 70rpx;
		background: url('/static/img/flasks.png') no-repeat;
		background-size: contain;
		transition: all 2s;
	}

	.canvas .kettle .flasms {
		top: -176rpx;
		right: 26rpx;
		width: 117rpx;
		height: 75rpx;
		background: url('/static/img/flasms.png') no-repeat;
		background-size: contain;
		transition: all 2s;
	}

	.canvas .kettle .waters {
		top: -240rpx;
		right: 316rpx;
		width: 85rpx;
		height: 150rpx;
		background: url('/static/img/waters.gif') no-repeat;
		background-size: contain;
		transition: all 2s;
	}

	.canvas .sumup {
		position: absolute;
		bottom: 40rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.canvas .sumup .user {
		display: flex;
		flex-direction: row;
	}

	.canvas .sumup .user .cover {
		padding: 0 20rpx;
	}

	.canvas .sumup .user .cover image {
		width: 110rpx;
		height: 110rpx;
		border-radius: 50%;
		border: 1rpx solid white;
	}

	.canvas .sumup .user .info {
		display: flex;
		flex-direction: column;
		color: white;
		justify-content: flex-start;
		padding-top: 16rpx;
		font-weight: bold;
		text-shadow: 4rpx 4rpx 2rpx #085828;
	}

	.canvas .sumup .user .info .name {
		font-size: 30rpx;
		color: white;
	}

	.canvas .sumup .user .info .name .sex-1 {
		width: 25rpx;
		height: 31rpx;
		background: url('/static/img/male.png') no-repeat;
		background-size: contain;
	}

	.canvas .sumup .user .info .name .sex-2 {
		width: 21rpx;
		height: 34rpx;
		background: url('/static/img/women.png') no-repeat;
		background-size: contain;
	}

	.canvas .sumup .user .info .name view {
		margin-left: 12rpx;
		display: inline-block;
		vertical-align: middle;
	}

	.canvas .sumup .user .info .drop {
		margin-top: 10rpx;
		line-height: 32rpx;
		font-size: 26rpx;
	}

	.canvas .sumup .user .info .drop .icon {
		position: relative;
		display: inline-block;
		margin-left: 10rpx;
		width: 20rpx;
		height: 30rpx;
		vertical-align: bottom;
		background: url('/static/img/water.png') no-repeat bottom right;
		background-size: contain;
	}

	.canvas .sumup .user .info .drop .plus {
		position: absolute;
		top: 0rpx;
		right: -12rpx;
		font-size: 32rpx;
		opacity: 0;
		color: #ffbe2d;
	}

	.canvas .sumup .speed {
		display: flex;
		flex-direction: row;
		padding: 16rpx 32rpx;
		height: 100rpx;
		align-items: flex-end;
	}

	.canvas .sumup .speed .progress {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		width: 300rpx;
		height: 50rpx;
		border-radius: 14rpx;
		background: linear-gradient(#9587ce, #7182d8);
	}

	.canvas .sumup .speed .speed-1 {
		width: 60rpx;
		height: 70rpx;
		margin-left: -8rpx;
	}

	.canvas .sumup .speed .speed-2 {
		width: 70rpx;
		height: 80rpx;
	}

	.canvas .sumup .speed .speed-3 {
		width: 80rpx;
		height: 90rpx;
		margin-right: -12rpx;
	}

	.explain {
		padding: 50rpx 16rpx;
		font-size: 28rpx;
		color: #ff00a5;
		font-weight: bold;
	}

	.explain .text {
		padding: 16rpx;
		line-height: 60rpx;
		text-indent: 40rpx;
		color: #09b900;
		font-weight: normal;
	}

	@keyframes rain {
		0% {
			transform: translateY(-6px);
		}

		50% {
			transform: translateY(6px);
		}

		100% {
			transform: translateY(-6px);
		}
	}

	@keyframes cloud-1 {
		0% {
			opacity: .8;
			transform: translate3d(200%, 0, 0);
		}

		50% {
			opacity: .6;
			transform: translate3d(800%, 0, 0) scale(1.3);
		}

		100% {
			opacity: .8;
			transform: translate3d(-120%, 0, 0);
		}
	}

	@keyframes cloud-2 {
		0% {
			opacity: .8;
			transform: translate3d(820%, 0, 0);
		}

		50% {
			opacity: .6;
			transform: translate3d(-120%, 0, 0);
		}

		100% {
			opacity: .8;
			transform: translate3d(1080%, 0, 0) scale(1.3);
		}
	}

	@keyframes cloud-3 {
		0% {
			opacity: .6;
			transform: translate3d(-120%, 0, 0) scale(1.3);
		}

		100% {
			opacity: .8;
			transform: translate3d(1000%, 0, 0);
		}
	}

	@keyframes move-1 {
		0% {
			height: 268rpx;
		}

		10% {
			height: 280rpx;
		}

		20% {
			height: 295rpx;
		}

		40% {
			height: 275rpx;
		}

		70% {
			height: 285rpx;
		}

		100% {
			height: 264rpx;
		}
	}

	.move-1 {
		animation: move-1 1s;
	}

	@keyframes move-2 {
		0% {
			height: 385rpx;
		}

		10% {
			height: 390rpx;
		}

		20% {
			height: 400rpx;
		}

		40% {
			height: 380rpx;
		}

		70% {
			height: 395rpx;
		}

		100% {
			height: 380rpx;
		}
	}

	.move-2 {
		animation: move-2 1s;
	}

	@keyframes move-3 {
		0% {
			height: 620rpx;
		}

		10% {
			height: 620rpx;
		}

		20% {
			height: 620rpx;
		}

		40% {
			height: 590rpx;
		}

		70% {
			height: 610rpx;
		}

		100% {
			height: 590rpx;
		}
	}

	.move-3 {
		animation: move-3 1s;
	}

	@keyframes water {
		0% {
			opacity: .5;
			transform: translate3d(0, 0, 0);
		}

		20% {
			opacity: 1;
			transform: translate3d(-150rpx, -90rpx, 0) scale(1.5);
		}

		30% {
			opacity: 1;
			transform: translate3d(-150rpx, -90rpx, 0) scale(1.5) rotate(-35deg);
		}

		80% {
			opacity: 1;
			transform: translate3d(-150rpx, -90rpx, 0) scale(1.5) rotate(-35deg);
		}

		100% {
			opacity: 0;
			transform: translate3d(-150rpx, -90rpx, 0) scale(1.5) rotate(0deg);
		}
	}

	.water {
		animation: water 4s ease-in-out forwards;
	}

	@keyframes pluss {
		0% {
			opacity: 0.8;
			top: -10rpx;
		}

		80% {
			opacity: 1;
			top: -80rpx;
		}

		100% {
			opacity: 0;
			top: -120rpx;
		}
	}

	.pluss {
		animation: pluss 2s;
	}
</style>
