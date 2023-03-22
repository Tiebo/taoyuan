"use strict";
const utils_utils = require("../../utils/utils.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    width: 0,
    images: {
      type: Array,
      default: []
    },
    shop_name: "",
    price: "",
    buy_number: 0,
    id: {
      type: Number
    }
  },
  setup(props) {
    const low_price = props.price.split(",");
    return {
      low_price,
      router_to: utils_utils.router_to
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.images[0],
    b: common_vendor.t($props.shop_name),
    c: common_vendor.t($setup.low_price[0]),
    d: common_vendor.t(" " + 400),
    e: common_vendor.o(($event) => $setup.router_to("/pages/commodity/commodity?id=" + $props.id)),
    f: common_vendor.s(`width: ${$props.width}rpx`)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c195b66"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/shop-card/shop-card.vue"]]);
wx.createComponent(Component);
