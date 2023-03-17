"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_request = require("../../../utils/request.js");
const _sfc_main = {
  __name: "articleBody",
  setup(__props) {
    let article_id = common_vendor.ref("");
    let article_body = common_vendor.ref("");
    let article = common_vendor.reactive({});
    const getData = async (id) => {
      await utils_request.re_get("http://127.0.0.1:8000/api/article/info/", {
        "id": id
      }).then((res) => {
        article_body.value = res.data.article_body;
        article_id.value = res.data.id;
        article_id.value = res.data.id;
        article_id.value = res.data.id;
        article_id.value = res.data.id;
        article = res.data;
      });
    };
    common_vendor.onLoad((Option) => {
      getData(Option.id);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(article).title),
        b: common_vendor.t(common_vendor.unref(article).author)
      }, {}, {
        c: common_vendor.unref(article_body)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/articleBody/articleBody.vue"]]);
wx.createPage(MiniProgramPage);
