"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_user = require("../../stores/user.js");
const utils_request = require("../../utils/request.js");
const utils_utils = require("../../utils/utils.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_shop_card2 = common_vendor.resolveComponent("shop-card");
  (_easycom_uni_icons2 + _easycom_shop_card2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_shop_card = () => "../../components/shop-card/shop-card.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_shop_card)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.onMounted(() => {
    });
    let dotStyle = common_vendor.ref(true);
    const userStore = stores_user.useUserStore();
    common_vendor.ref([]);
    let img_data = common_vendor.ref([]);
    let find_data = common_vendor.ref([]);
    let article_list = common_vendor.ref([]);
    let article_imgs = common_vendor.ref([]);
    const getData = async () => {
      img_data.value.push("http://hbimg.huaban.com/814e7cf23a108817703d56bfc33010ef7a8a1e6f3d0b5b-WfmxOM");
      img_data.value.push("https://i.328888.xyz/2023/02/25/EA3XU.png");
      img_data.value.push("https://c-ssl.duitang.com/uploads/item/202003/15/20200315203131_5wJQf.jpeg");
      let data = await utils_request.re_get("/api/commodity/all/", {
        type: "-1"
      }, common_vendor.index.getStorageSync("token"));
      find_data.value = data;
      let resp = await utils_request.re_get("/api/article/list/", {});
      for (let i = 0; i < 2; i++) {
        article_list.value.push(resp.data.articles[i]);
      }
      article_imgs.value.push(
        "https://mmbiz.qpic.cn/mmbiz_jpg/Zwydhx732ZaAA0fyCcJepYPYXbXAX9AcpWUlcBmHibw8ianaVqS7VGS1tzLZxurIVibZjQvSPpWOfEiaIXicW7f0p5g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1"
      );
      article_imgs.value.push(
        "http://hbimg.huaban.com/f235598eee4795225cfc262ed78dee7256963e60b8009-N8fKzG"
      );
    };
    const router_list = (type) => {
      utils_utils.router_to(`../list/${type}/${type}`);
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          size: "22"
        }),
        b: common_vendor.f(common_vendor.unref(img_data), (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        c: common_vendor.n(common_vendor.unref(dotStyle) ? "square-dot" : "round-dot"),
        d: common_vendor.o(($event) => router_list("tree")),
        e: common_vendor.o(($event) => router_list("hotel")),
        f: common_vendor.o(($event) => router_list("shop")),
        g: common_vendor.o(($event) => router_list("article")),
        h: common_vendor.f(common_vendor.unref(article_list), (article, index, i0) => {
          return {
            a: common_vendor.unref(article_imgs)[index],
            b: common_vendor.t(article.title),
            c: common_vendor.t(article.articleDes),
            d: common_vendor.t(article.author),
            e: common_vendor.o(($event) => common_vendor.unref(utils_utils.router_to)("/pages/list/articleBody/articleBody?id=" + article.id), article.id),
            f: article.id
          };
        }),
        i: common_vendor.unref(userStore).user_photo,
        j: common_vendor.f(common_vendor.unref(find_data), (find, k0, i0) => {
          return {
            a: find.id,
            b: find.id,
            c: "0cd09a48-1-" + i0,
            d: common_vendor.p({
              width: "335",
              images: find.photo,
              shop_name: find.name,
              price: find.price,
              id: find.id
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0cd09a48"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
