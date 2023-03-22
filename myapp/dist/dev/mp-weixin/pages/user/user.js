"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_user = require("../../stores/user.js");
const utils_utils = require("../../utils/utils.js");
if (!Array) {
  const _easycom_dynamics_card2 = common_vendor.resolveComponent("dynamics-card");
  _easycom_dynamics_card2();
}
const _easycom_dynamics_card = () => "../../components/dynamics-card/dynamics-card.js";
if (!Math) {
  _easycom_dynamics_card();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userStore = stores_user.useUserStore();
    let user_info = common_vendor.reactive({
      uid: "125742",
      username: "\u665E\u6708",
      subtitle: "\u54C8\u54C8\u54C8",
      user_photo: userStore.user_photo
    });
    function logout() {
      utils_utils.router_to("pages/login/index");
      common_vendor.index.removeStorageSync("token");
    }
    let post_info = common_vendor.reactive({
      content: "\u60CA\u559C\uFF0C\u5076\u7136\u95F4\u627E\u5230\u7684\u4E00\u5F20\u597D\u597D\u770B\u7684\u80CC\u666F",
      time: "2-7",
      images: [],
      like: 2,
      comment: 3
    });
    post_info.images.push("https://c-ssl.duitang.com/uploads/blog/202009/28/20200928000810_5ad65.jpeg");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(userStore).user_photo,
        b: common_vendor.t(common_vendor.unref(userStore).name),
        c: common_vendor.t(common_vendor.unref(userStore).uid),
        d: common_vendor.o(logout),
        e: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("../login/index")),
        f: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("./dynamics/dynamics")),
        g: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("/pages/list/arboriculture/arboriculture")),
        h: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("./expressage/expressage")),
        i: common_vendor.f(3, (i, k0, i0) => {
          return {
            a: "99b0ba47-0-" + i0,
            b: i
          };
        }),
        j: common_vendor.p({
          user: common_vendor.unref(user_info),
          post: common_vendor.unref(post_info)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-99b0ba47"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
