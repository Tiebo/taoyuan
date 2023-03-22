"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_utils = require("../../utils/utils.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("./login")),
        c: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("./login")),
        d: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("./register")),
        e: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("./login"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-45258083"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
