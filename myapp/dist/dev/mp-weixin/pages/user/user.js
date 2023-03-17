"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_icons2 + _easycom_uni_card2 + _component_uni_section)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    let userId = common_vendor.ref("125742");
    const router_money = () => {
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "../money/money",
          animationType: "slide-in-right",
          animationDuration: 200
        });
      }, 200);
    };
    const actionsClick = (text) => {
      common_vendor.index.showToast({
        title: text,
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(userId)),
        b: common_vendor.o(router_money),
        c: common_vendor.f(2, (i, k0, i0) => {
          return {
            a: "99b0ba47-2-" + i0 + "," + ("99b0ba47-1-" + i0),
            b: common_vendor.o(($event) => actionsClick("\u5206\u4EAB"), i),
            c: "99b0ba47-3-" + i0 + "," + ("99b0ba47-1-" + i0),
            d: common_vendor.o(($event) => actionsClick("\u70B9\u8D5E"), i),
            e: "99b0ba47-4-" + i0 + "," + ("99b0ba47-1-" + i0),
            f: common_vendor.o(($event) => actionsClick("\u8BC4\u8BBA"), i),
            g: "99b0ba47-1-" + i0 + "," + ("99b0ba47-0-" + i0),
            h: "99b0ba47-0-" + i0,
            i
          };
        }),
        d: common_vendor.p({
          type: "redo",
          size: "18",
          color: "#999"
        }),
        e: common_vendor.p({
          type: "heart",
          size: "18",
          color: "#999"
        }),
        f: common_vendor.p({
          type: "chatbubble",
          size: "18",
          color: "#999"
        }),
        g: common_vendor.p({
          title: "\u5361\u7247\u5C01\u9762\u56FE+\u64CD\u4F5C\u680F",
          type: "line"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-99b0ba47"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
