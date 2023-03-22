"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_user = require("../../../stores/user.js");
const utils_request = require("../../../utils/request.js");
const utils_utils = require("../../../utils/utils.js");
if (!Array) {
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  _easycom_mp_html2();
}
const _easycom_mp_html = () => "../../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  _easycom_mp_html();
}
const _sfc_main = {
  __name: "articleBody",
  setup(__props) {
    const userStore = stores_user.useUserStore();
    let active = common_vendor.reactive({
      aixin: 10,
      shoucang: 13,
      pinglun: 4,
      is_aixin: false,
      is_shoucang: false
    });
    let is_follow = common_vendor.ref(false);
    let article_body = common_vendor.ref("");
    let article = common_vendor.reactive({
      article_approved: 0,
      article_comment: 0,
      article_des: "",
      author: "",
      author_photo: "",
      create_time: "",
      id: 0,
      title: "",
      update_time: "",
      article_body: ""
    });
    const follow = () => {
      is_follow.value = !is_follow.value;
      common_vendor.index.showToast({
        title: "\u5173\u6CE8\u6210\u529F",
        duration: 1500,
        position: "bottom"
      });
    };
    const getData = async (id) => {
      let resp = await utils_request.re_get("/api/article/info/" + id);
      article = resp.data;
      article_body.value = resp.data.article_body;
    };
    const trans_active = (type) => {
      if (type === "aixin") {
        active.is_aixin ? active.aixin-- : active.aixin++;
        active.is_aixin = !active.is_aixin;
      } else if (type === "shoucang") {
        active.is_shoucang ? active.shoucang-- : active.shoucang++;
        active.is_shoucang = !active.is_shoucang;
      }
    };
    common_vendor.onLoad((Option) => {
      getData(Option.id);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(article).title),
        b: common_vendor.unref(userStore).user_photo,
        c: common_vendor.t(common_vendor.unref(article).author),
        d: common_vendor.t(common_vendor.unref(is_follow) ? "\u5DF2\u5173\u6CE8" : "+\u5173\u6CE8"),
        e: common_vendor.o(follow),
        f: common_vendor.n(common_vendor.unref(is_follow) ? "body-user-like follow" : "body-user-like"),
        g: common_vendor.p({
          content: common_vendor.unref(article_body)
        }),
        h: common_vendor.t(common_vendor.unref(active).aixin),
        i: !common_vendor.unref(active).is_aixin
      }, !common_vendor.unref(active).is_aixin ? {} : {}, {
        j: !common_vendor.unref(active).is_aixin
      }, !common_vendor.unref(active).is_aixin ? {} : {}, {
        k: common_vendor.n(common_vendor.unref(active).is_aixin ? "approve" : "article-approve"),
        l: common_vendor.unref(active).is_aixin
      }, common_vendor.unref(active).is_aixin ? {
        m: common_vendor.o(($event) => trans_active("aixin"))
      } : {
        n: common_vendor.o(($event) => trans_active("aixin"))
      }, {
        o: common_vendor.t(common_vendor.unref(active).aixin),
        p: common_vendor.unref(active).is_shoucang
      }, common_vendor.unref(active).is_shoucang ? {
        q: common_vendor.o(($event) => trans_active("shoucang"))
      } : {
        r: common_vendor.o(($event) => trans_active("shoucang"))
      }, {
        s: common_vendor.t(common_vendor.unref(active).shoucang),
        t: common_vendor.t(common_vendor.unref(active).pinglun),
        v: common_vendor.unref(stores_user.useUserStore)().user_photo,
        w: !common_vendor.unref(is_follow)
      }, !common_vendor.unref(is_follow) ? {
        x: common_vendor.o(($event) => {
          common_vendor.isRef(is_follow) ? is_follow.value = !common_vendor.unref(is_follow) : is_follow = !common_vendor.unref(is_follow);
          common_vendor.unref(utils_utils.showMsg)("\u5173\u6CE8\u6210\u529F");
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/articleBody/articleBody.vue"]]);
wx.createPage(MiniProgramPage);
