"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    user: {
      user_photo: "",
      username: "",
      subtitle: ""
    },
    post: {
      content: "",
      time: "",
      images: "",
      like: 0,
      comment: 0
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.user.user_photo,
    b: common_vendor.t($props.user.username),
    c: common_vendor.t($props.user.subtitle),
    d: common_vendor.t($props.post.time),
    e: common_vendor.t($props.post.content),
    f: $props.post.images.length === 1,
    g: $props.post.images[0],
    h: common_vendor.f($props.post.images, (img, index, i0) => {
      return {
        a: index,
        b: img,
        c: common_vendor.n("img" + index)
      };
    }),
    i: $props.post.images.length !== 1,
    j: common_vendor.n($props.post.images.length === 1 ? "body-image" : "body-image-all"),
    k: common_vendor.t($props.post.like),
    l: common_vendor.t($props.post.comment)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-12fde967"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/dynamics-card/dynamics-card.vue"]]);
wx.createComponent(Component);
