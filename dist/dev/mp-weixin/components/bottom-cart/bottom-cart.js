"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "shop",
      size: "25"
    }),
    b: common_vendor.p({
      type: "chatbubble-filled",
      size: "25"
    }),
    c: common_vendor.p({
      type: "star",
      size: "25"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-51c4f851"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/bottom-cart/bottom-cart.vue"]]);
wx.createComponent(Component);
