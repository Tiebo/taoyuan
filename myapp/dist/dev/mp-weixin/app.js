"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
require("./stores/user.js");
const uni_modules_piniaPluginUnistorage_index = require("./uni_modules/pinia-plugin-unistorage/index.js");
require("./uni_modules/pinia-plugin-unistorage/shared/filter.js");
require("./uni_modules/pinia-plugin-unistorage/shared/normalize.js");
if (!Math) {
  "./pages/login/index.js";
  "./pages/login/login.js";
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
  "./pages/login/register.js";
  "./pages/list/arboriculture/arboriculture.js";
  "./pages/user/dynamics/dynamics.js";
  "./pages/user/expressage/expressage.js";
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
  },
  onLaunch: function() {
    let token = common_vendor.index.getStorageSync("token");
    if (!token) {
      common_vendor.index.reLaunch({
        url: "/pages/login/index"
      });
    } else {
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    }
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  const store = common_vendor.createPinia();
  store.use(uni_modules_piniaPluginUnistorage_index.createUnistorage());
  app.use(store);
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
