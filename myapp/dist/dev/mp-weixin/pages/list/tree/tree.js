"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_request = require("../../../utils/request.js");
const _sfc_main = {
  __name: "tree",
  setup(__props) {
    let tree_data = common_vendor.ref([]);
    common_vendor.ref([]);
    const router_to_commodity = (id) => {
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "../../commodity/commodity?id=" + id,
          animationType: "slide-in-right",
          animationDuration: 200
        });
      }, 200);
    };
    const getData = async () => {
      let resp = await utils_request.re_get("/api/commodity/all/", {
        "type": 0
      }, common_vendor.index.getStorageSync("token"));
      tree_data.value = resp;
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(tree_data), (tree, k0, i0) => {
          return {
            a: tree.photo[1],
            b: common_vendor.t(tree.name),
            c: common_vendor.t(tree.details),
            d: common_vendor.f(tree.category.split(","), (cate, k1, i1) => {
              return {
                a: common_vendor.t(cate)
              };
            }),
            e: tree.id,
            f: tree.id,
            g: common_vendor.o(($event) => router_to_commodity(tree.id), tree.id)
          };
        }),
        b: common_vendor.t()
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ee6fb90a"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/tree/tree.vue"]]);
wx.createPage(MiniProgramPage);
