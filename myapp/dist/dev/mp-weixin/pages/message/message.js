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
      msg_date.value.push("2-17 15:32");
      msg_date.value.push("2-15 11:02");
      msg_date.value.push("2-13 17:14");
      msg_date.value.push("2-11 9:38");
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
          title: "\u6843\u6E90\u8BB0\u82D7\u6728\u57FA\u5730\u5BA2\u670D",
          avatar: "https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: common_vendor.unref(msg_date)[0],
          ["badge-text"]: 2
        }),
        d: common_vendor.o(router_dialog),
        e: common_vendor.p({
          clickable: true,
          ["avatar-circle"]: true,
          title: "\u82B1\u6EE1\u8E4A\u5BA2\u670D",
          avatar: "https://i.328888.xyz/2023/02/25/E0zG3.jpeg",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: common_vendor.unref(msg_date)[1],
          ["badge-text"]: 4
        }),
        f: common_vendor.o(router_dialog),
        g: common_vendor.p({
          clickable: true,
          ["avatar-circle"]: true,
          title: "\u660E\u7166\u5C45\u5BA2\u670D",
          avatar: "https://i.328888.xyz/2023/02/25/E0Ono.jpeg",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: common_vendor.unref(msg_date)[2],
          ["badge-text"]: 0
        }),
        h: common_vendor.o(router_dialog),
        i: common_vendor.p({
          clickable: true,
          ["avatar-circle"]: true,
          title: "\u98CE\u96E8\u96C6\u5BA2\u670D",
          avatar: "https://i.328888.xyz/2023/02/25/E0rFq.jpeg",
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
