"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    wlInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.wlInfo.logo,
    b: common_vendor.t($props.wlInfo.post_name),
    c: common_vendor.t($props.wlInfo.exp_phone),
    d: common_vendor.t($props.wlInfo.post_name),
    e: common_vendor.t($props.wlInfo.post_no),
    f: common_vendor.t($props.wlInfo.addr),
    g: common_vendor.f($props.wlInfo.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.timeArr[0]),
        b: common_vendor.t(item.timeArr[1]),
        c: common_vendor.t(index == 0 && $props.wlInfo.delivery_status == 1 ? "\u5DF2\u7B7E\u6536" : "\u914D\u9001\u4E2D"),
        d: common_vendor.t(item.context),
        e: index == 0 && $props.wlInfo.delivery_status == 1 ? 1 : "",
        f: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fd638006"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/xinyu-logistics/xinyu-logistics.vue"]]);
wx.createComponent(Component);
