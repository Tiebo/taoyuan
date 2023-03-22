"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      cartList: [
        {
          name: "\u5546\u54C11",
          price: 100,
          count: 1,
          imgUrl: "https://i.328888.xyz/2023/02/25/EAmD3.png"
        },
        {
          name: "\u5546\u54C12",
          price: 200,
          count: 2,
          imgUrl: "https://i.328888.xyz/2023/02/25/EAmD3.png"
        }
      ]
    };
  },
  computed: {
    allSelected() {
      return this.cartList.every((item) => item.selected);
    },
    totalPrice() {
      return this.cartList.reduce(
        (total, item) => item.selected ? total + item.price * item.count : total,
        0
      );
    }
  },
  methods: {
    selectItem(index) {
      this.cartList[index].selected = !this.cartList[index].selected;
    },
    selectAll() {
      const isSelected = !this.allSelected;
      this.cartList.forEach((item) => item.selected = isSelected);
    },
    minus(index) {
      if (this.cartList[index].count > 1) {
        this.cartList[index].count--;
      }
    },
    plus(index) {
      this.cartList[index].count++;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.cartList, (item, index, i0) => {
      return {
        a: item.selected ? 1 : "",
        b: common_vendor.o(($event) => $options.selectItem(index), index),
        c: item.imgUrl,
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.minus(index), index),
        g: common_vendor.t(item.count),
        h: common_vendor.o(($event) => $options.plus(index), index),
        i: index
      };
    }),
    b: $options.allSelected ? 1 : "",
    c: common_vendor.o((...args) => $options.selectAll && $options.selectAll(...args)),
    d: common_vendor.t($options.totalPrice)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
