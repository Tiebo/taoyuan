"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_transition = common_vendor.resolveComponent("transition");
  (_easycom_uni_icons2 + _component_transition)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "bottom-cart",
  setup(__props) {
    let is_shop = common_vendor.ref(false);
    const getShop = () => {
      is_shop.value = true;
    };
    return (_ctx, _cache) => {
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
        }),
        d: common_vendor.o(getShop),
        e: !common_vendor.unref(is_shop),
        f: common_vendor.o(($event) => common_vendor.isRef(is_shop) ? is_shop.value = false : is_shop = false),
        g: common_vendor.o(($event) => common_vendor.isRef(is_shop) ? is_shop.value = false : is_shop = false),
        h: common_vendor.unref(is_shop),
        i: common_vendor.p({
          name: "fade"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-51c4f851"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/bottom-cart/bottom-cart.vue"]]);
wx.createComponent(Component);
