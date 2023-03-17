"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_utils = require("../../utils/utils.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  (_easycom_uni_icons2 + _easycom_uni_list_chat2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_chat)();
}
const _sfc_main = {
  __name: "message",
  setup(__props) {
    common_vendor.onMounted(() => {
      common_vendor.index.setNavigationBarTitle({
        title: `${"\u6D88\u606F"}`
      });
    });
    common_vendor.ref(15);
    common_vendor.ref([true]);
    let msg_date = common_vendor.ref([]);
    const router_dialog = () => {
      utils_utils.router_to("./dialog/dialog");
    };
    const getData = () => {
      msg_date.value.push("2-17");
      msg_date.value.push("2-15");
      msg_date.value.push("2-13");
      msg_date.value.push("2-11");
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          size: "25"
        }),
        b: common_vendor.o(router_dialog),
        c: common_vendor.p({
          clickable: true,
          ["avatar-circle"]: true,
          title: "\u5BA2\u670D",
          avatar: "https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: common_vendor.unref(msg_date)[0],
          ["badge-text"]: 2
        }),
        d: common_vendor.o(router_dialog),
        e: common_vendor.p({
          clickable: true,
          ["avatar-circle"]: true,
          title: "\u75DB\u82E6\u88E4\u5B50",
          avatar: "https://cdn.acwing.com/media/user/profile/photo/63655_lg_3be53c9a42.jpg",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: common_vendor.unref(msg_date)[1],
          ["badge-text"]: 4
        }),
        f: common_vendor.o(router_dialog),
        g: common_vendor.p({
          clickable: true,
          ["avatar-circle"]: true,
          title: "\u6124\u6012\u8611\u83C7",
          avatar: "https://cdn.acwing.com/media/user/profile/photo/128261_md_ce1413e135.jpg",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: common_vendor.unref(msg_date)[2],
          ["badge-text"]: 0
        }),
        h: common_vendor.o(router_dialog),
        i: common_vendor.p({
          clickable: true,
          ["avatar-circle"]: true,
          title: "\u7F9A\u7F8A\u7CD5\u70B9\u62CC\u996D",
          avatar: "https://cdn.acwing.com/media/user/profile/photo/246956_lg_c63d10ee56.jpg",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: common_vendor.unref(msg_date)[3],
          ["badge-text"]: 0
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3556fc04"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
