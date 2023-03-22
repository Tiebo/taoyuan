"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_utils = require("../../utils/utils.js");
const stores_controll = require("../../stores/controll.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "commodity-cart",
  setup(__props) {
    const controllStore = stores_controll.useControllStore();
    const router_to_msg = () => {
      utils_utils.router_to("/pages/message/dialog/dialog");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "shop",
          size: "25"
        }),
        b: common_vendor.p({
          customPrefix: "iconfont",
          type: "icon-tykefu",
          size: "25"
        }),
        c: common_vendor.o(router_to_msg),
        d: common_vendor.p({
          type: "star",
          size: "25"
        }),
        e: common_vendor.o(($event) => common_vendor.unref(controllStore).is_buy = true)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-498d3cec"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/commodity-cart/commodity-cart.vue"]]);
wx.createComponent(Component);
