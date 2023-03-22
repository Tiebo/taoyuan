"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_dynamics_card2 = common_vendor.resolveComponent("dynamics-card");
  _easycom_dynamics_card2();
}
const _easycom_dynamics_card = () => "../../../components/dynamics-card/dynamics-card.js";
if (!Math) {
  _easycom_dynamics_card();
}
const _sfc_main = {
  __name: "dynamics",
  setup(__props) {
    let posts_info = common_vendor.ref([]);
    posts_info.value.push({
      id: 1,
      content: "\u4F60\u6211\u7684\u672A\u6765\uFF01\u540D\u4E3A\uFF1A\u5E7B\u60F3\u4E4B\u5730\uFF01\uFF01",
      time: "2-5",
      images: [
        "https://i.328888.xyz/2023/03/20/PMLrx.jpeg",
        "https://i.328888.xyz/2023/03/20/PMM5k.jpeg",
        "https://i.328888.xyz/2023/03/20/PMTZL.jpeg",
        "https://i.328888.xyz/2023/03/20/PMTZL.jpeg",
        "https://i.328888.xyz/2023/03/20/PMaOp.jpeg",
        "https://i.328888.xyz/2023/03/20/PMM5k.jpeg"
      ],
      like: 2,
      comment: 3,
      user_info: {
        user_photo: "https://c-ssl.duitang.com/uploads/blog/202205/16/20220516100255_a0eee.thumb.300_0.png",
        username: "\u5317\u82D1",
        subtitle: "\u4E5F\u4F1A\u53BB\u73A9"
      }
    });
    posts_info.value.push({
      id: 1,
      content: "\u82B1\u9999\u8776\u81EA\u6765",
      time: "2-5",
      images: [
        "http://hbimg.huaban.com/f82d339df1f3231ec8f11027cb38567a10ac07f570df7f-q1jXAw_fw320"
      ],
      like: 5,
      comment: 1,
      user_info: {
        user_photo: "http://hbimg.huaban.com/e549a8026d08c713cd9a88b361a574a304588ffb572b-STYNYS_fw320",
        username: "\u9CAB\u9C7C",
        subtitle: "\u4F60\u4E5F\u60F3\u7EE7\u7EED\u5417"
      }
    });
    posts_info.value.push({
      id: 1,
      content: "\u9759\u5B89\u5BFA\u8985\u54E6\u5C31\u53BB\u6211\u623F\u95F4\u963F\u65AF\u5229\u5EB7\u623F\u4EF7\u6211\u59D0\u592B\u6492\u52A0\u5FEB\u4E86\u53D1\u89E3\u653E\u524D\u6211\u5C31\u5361\u6B7B\u4E86\u5C31",
      time: "2020-1-5",
      images: [
        "https://i.328888.xyz/2023/03/20/PMLrx.jpeg",
        "https://i.328888.xyz/2023/03/20/PMM5k.jpeg",
        "https://i.328888.xyz/2023/03/20/PMTZL.jpeg",
        "https://i.328888.xyz/2023/03/20/PMTZL.jpeg",
        "https://i.328888.xyz/2023/03/20/PMaOp.jpeg",
        "https://i.328888.xyz/2023/03/20/PMM5k.jpeg"
      ],
      like: 2,
      comment: 3,
      user_info: {
        user_photo: "/static/p1.jpg",
        username: "\u5317\u82D1",
        subtitle: "\u54C8\u54C8\u54C8"
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(posts_info), (post, k0, i0) => {
          return {
            a: "b2b743c1-0-" + i0,
            b: common_vendor.p({
              user: post.user_info,
              post
            }),
            c: post.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b2b743c1"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/user/dynamics/dynamics.vue"]]);
wx.createPage(MiniProgramPage);
