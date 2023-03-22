"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const stores_user = require("../../stores/user.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const userStore = stores_user.useUserStore();
    let username = common_vendor.ref("");
    let password = common_vendor.ref("");
    if (userStore.username !== "") {
      username.value = userStore.username;
    }
    const user_login = async () => {
      let resp = await utils_request.re_post("/api/user/account/token/", {
        username: username.value,
        password: password.value
      });
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
      userStore.username = username.value;
      common_vendor.index.setStorageSync("token", resp.data.token);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(username),
        b: common_vendor.o(($event) => common_vendor.isRef(username) ? username.value = $event.detail.value : username = $event.detail.value),
        c: common_vendor.unref(password),
        d: common_vendor.o(($event) => common_vendor.isRef(password) ? password.value = $event.detail.value : password = $event.detail.value),
        e: common_vendor.o(user_login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
