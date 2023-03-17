"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_request = require("../../../utils/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "article",
  setup(__props) {
    let article_list = common_vendor.ref([]);
    const getData = async () => {
      await utils_request.re_get("http://127.0.0.1:8000/api/article/list/", {}).then((res) => {
        article_list.value = res.data.articles;
      });
    };
    getData();
    const router_article_body = (id) => {
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "../articleBody/articleBody?id=" + id,
          animationType: "slide-in-right",
          animationDuration: 200
        });
      }, 200);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          size: "30"
        }),
        b: common_vendor.f(common_vendor.unref(article_list), (a, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(a.title),
            b: a.author_photo,
            c: common_vendor.t(a.author),
            d: common_vendor.t(a.article_des)
          }, {}, {
            e: a.id,
            f: common_vendor.o(($event) => router_article_body(a.id), a.id)
          });
        }),
        c: common_vendor.t(34),
        d: common_vendor.t(11),
        e: common_vendor.t(11)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d771b9bd"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/article/article.vue"]]);
wx.createPage(MiniProgramPage);
