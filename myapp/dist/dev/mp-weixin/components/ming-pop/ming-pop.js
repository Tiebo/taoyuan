"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_controll = require("../../stores/controll.js");
const _sfc_main = {
  props: {
    direction: {
      type: String,
      default: "below"
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: String,
      default: "fit-content"
    },
    is_close: {
      type: Boolean,
      default: true
    },
    is_mask: {
      type: Boolean,
      default: true
    },
    maskFun: {
      type: Boolean,
      default: true
    },
    is_show: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    let open = common_vendor.ref(false);
    open.value = props.is_show;
    const close = (e) => {
      if (e == 1 && !props.maskFun)
        return;
      open.value = false;
      stores_controll.useControllStore().is_buy = false;
    };
    return {
      open,
      close
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.direction === "center" ? $setup.open : true
  }, ($props.direction === "center" ? $setup.open : true) ? common_vendor.e({
    b: $props.is_close
  }, $props.is_close ? {
    c: common_vendor.n($props.direction !== "below" && $props.direction !== "center" ? "iconfont-h5" : ""),
    d: common_vendor.o((...args) => $setup.close && $setup.close(...args))
  } : {}, {
    e: $props.width + "%",
    f: $props.height == "fit-content" ? $props.height : $setup.open ? $props.height : "fit-content",
    g: common_vendor.n(($setup.open ? "on" : "") + " " + $props.direction),
    h: common_vendor.o(() => {
    }),
    i: $props.is_mask
  }, $props.is_mask ? {
    j: common_vendor.o(() => {
    }),
    k: !$setup.open,
    l: common_vendor.o(($event) => $setup.close(1))
  } : {}, {
    m: common_vendor.n($props.direction === "center" ? "centers" : "")
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a8f0dce2"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/ming-pop/ming-pop.vue"]]);
wx.createComponent(Component);
