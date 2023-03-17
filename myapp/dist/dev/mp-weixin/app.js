"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/cart/cart.js";
  "./pages/message/message.js";
  "./pages/user/user.js";
  "./pages/list/tree/tree.js";
  "./pages/commodity/commodity.js";
  "./pages/list/hotel/hotel.js";
  "./pages/list/shop/shop.js";
  "./pages/list/article/article.js";
  "./pages/list/articleBody/articleBody.js";
  "./pages/money/money.js";
  "./pages/message/dialog/dialog.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/App.vue"]]);
common_vendor.index.$http = common_vendor.$http;
common_vendor.$http.baseUrl = "https://www.uinav.com";
common_vendor.$http.beforeRequest = function(options) {
  common_vendor.index.showLoading({
    title: "\u6570\u636E\u52A0\u8F7D\u4E2D..."
  });
};
common_vendor.$http.afterRequest = function() {
  common_vendor.index.hideLoading();
};
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
