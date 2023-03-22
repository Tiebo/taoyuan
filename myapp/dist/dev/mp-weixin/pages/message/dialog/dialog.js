"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_user = require("../../../stores/user.js");
const _sfc_main = {
  onLoad: function() {
    common_vendor.index.setNavigationBarTitle({
      title: `${"\u6843\u6E90\u8BB0\u82D7\u6728\u57FA\u5730"}`
    });
  },
  setup() {
    let new_message = common_vendor.ref("");
    let is_confirm = common_vendor.ref(false);
    let messages = common_vendor.ref([
      {
        avatarUrl: "https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg",
        nickname: "\u6843\u6E90\u8BB0\u82D7\u6728\u57FA\u5730",
        from: "other",
        type: "orders",
        name: "\u67CF\u897F\u6469",
        number: 1,
        price: 249,
        phone: "19828417407",
        details_title: "\u4F18\u54C1\u8D85\u751C\u6843\u5B50",
        address_provinces: "\u56DB\u5DDD\u7701\u6210\u90FD\u5E02",
        address_county: "\u6210\u534E\u533A",
        address_details: "\u4FDD\u548C\u8857\u9053 \u91D1\u9A6C\u6CB3\u8DEF99\u53F7\u5F18\u521B\u540D\u5EA7\u7269\u4E1A\u529E\u516C\u5BA4"
      },
      {
        type: "msg",
        avatarUrl: stores_user.useUserStore().user_photo,
        nickname: "\u6843\u6E90\u8BB0\u82D7\u6728\u57FA\u5730",
        content: "\u597D\u7684",
        from: "self"
      },
      {
        type: "msg",
        avatarUrl: "https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg",
        nickname: "\u6843\u6E90\u8BB0\u82D7\u6728\u57FA\u5730",
        content: "\u597D\u7684\u5462\u4EB2",
        from: "other"
      }
    ]);
    const sendMessage = () => {
      if (new_message.value.trim()) {
        messages.value.push({
          content: new_message.value,
          from: "self",
          avatarUrl: "../../../static/photo.png",
          nickname: "",
          type: "msg"
        });
        new_message.value = "";
        common_vendor.index.pageScrollTo({
          scrollTop: 9999,
          duration: 300
        });
      }
    };
    return {
      sendMessage,
      new_message,
      messages,
      is_confirm
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.messages, (message, index, i0) => {
      return common_vendor.e({
        a: message.avatarUrl,
        b: common_vendor.t(message.nickname),
        c: message.from !== "self",
        d: common_vendor.t(message.content),
        e: message.type === "msg",
        f: message.from === "self" ? 1 : "",
        g: common_vendor.t(message.details_title),
        h: common_vendor.t("\u5171" + message.number + "\u4EF6\u5546\u54C1  \u5408\u8BA1 \uFFE5 " + message.number * message.price),
        i: common_vendor.t(message.name + " " + message.phone),
        j: common_vendor.t(message.address_provinces + " " + message.address_county + " " + message.address_details)
      }, !$setup.is_confirm ? {
        k: common_vendor.o(($event) => $setup.is_confirm = !$setup.is_confirm, index)
      } : {}, {
        l: message.type === "orders",
        m: message.from === "self" ? 1 : "",
        n: message.from === "self" ? 1 : "",
        o: index
      });
    }),
    b: !$setup.is_confirm,
    c: $setup.new_message,
    d: common_vendor.o(($event) => $setup.new_message = $event.detail.value),
    e: common_vendor.o((...args) => $setup.sendMessage && $setup.sendMessage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0bfc2430"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/message/dialog/dialog.vue"]]);
wx.createPage(MiniProgramPage);
