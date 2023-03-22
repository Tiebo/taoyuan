<template>
	<div class="container">
		<div class="header">
			<div class="title">购物车</div>
			<div class="edit">编辑</div>
		</div>
		<div class="cart-list">
			<div class="cart-item" v-for="(item, index) in cartList" :key="index">
				<div class="checkbox" @click="selectItem(index)">
					<div class="icon" :class="{active: item.selected}"></div>
				</div>
				<div class="img">
					<image :src="item.imgUrl" alt=""></image>
				</div>
				<div class="info">
					<div class="name">{{item.name}}</div>
					<div class="price">{{item.price}}</div>
					<div class="num">
						<div class="minus" @click="minus(index)">-</div>
						<div class="count">{{item.count}}</div>
						<div class="plus" @click="plus(index)">+</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="checkbox" @click="selectAll">
				<div class="icon" :class="{active: allSelected}"></div>
				<div class="text">全选</div>
			</div>
			<div class="total">
				<div class="text">合计：</div>
				<div class="price">{{totalPrice}}</div>
			</div>
			<div class="btn">结算</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cartList: [{
						name: '商品1',
						price: 100,
						count: 1,
						imgUrl: 'https://i.328888.xyz/2023/02/25/EAmD3.png'
					},
					{
						name: '商品2',
						price: 200,
						count: 2,
						imgUrl: 'https://i.328888.xyz/2023/02/25/EAmD3.png'
					},
				],
			};
		},
		computed: {
			allSelected() {
				return this.cartList.every((item) => item.selected);
			},
			totalPrice() {
				return this.cartList.reduce(
					(total, item) => (item.selected ? total + item.price * item.count : total),
					0
				);
			},
		},
		methods: {
			selectItem(index) {
				this.cartList[index].selected = !this.cartList[index].selected;
			},
			selectAll() {
				const isSelected = !this.allSelected;
				this.cartList.forEach((item) => (item.selected = isSelected));
			},
			minus(index) {
				if (this.cartList[index].count > 1) {
					this.cartList[index].count--;
				}
			},
			plus(index) {
				this.cartList[index].count++;
			},
		},
	};
</script>
<style>
	.container {
		max-width: 600px;
		margin: 0 auto;
		font-family: Arial, sans-serif;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		background-color: #f5f5f5;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
	}

	.edit {
		font-size: 16px;
		color: #666;
	}

	.cart-list {
		border: 1px solid #ddd;
	}

	.cart-item {
		display: flex;
		align-items: center;
		padding: 20px;
		border-bottom: 1px solid #ddd;
	}

	.checkbox {
		position: relative;
		width: 20px;
		height: 20px;
		margin-right: 10px;
		border: 1px solid #ddd;
		cursor: pointer;
	}

	.icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #fff;
		border: 1px solid #666;
	}

	.icon.active {
		background-color: #ff6700;
		border-color: #ff6700;
	}

	.img>image {
		width: 80px;
		height: 80px;
		margin-right: 20px;
	}

	.info {
		flex: 1;
	}

	.name {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.price {
		font-size: 16px;
		color: #ff6700;
		margin-bottom: 10px;
	}

	.num {
		display: flex;
		align-items: center;
	}

	.minus,
	.plus {
		width: 20px;
		height: 20px;
		border: 1px solid #ddd;
		text-align: center;
		line-height: 20px;
		cursor: pointer;
	}

	.count {
		width: 30px;
		height: 20px;
		border: 1px solid #ddd;
		text-align: center;
		line-height: 20px;
		margin: 0 10px;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		background-color: #f5f5f5;
	}
</style>
