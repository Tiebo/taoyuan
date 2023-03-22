"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_controll = require("../../stores/controll.js");
const utils_request = require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_commodity_cart2 = common_vendor.resolveComponent("commodity-cart");
  const _easycom_buy2 = common_vendor.resolveComponent("buy");
  (_easycom_uni_icons2 + _easycom_commodity_cart2 + _easycom_buy2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_commodity_cart = () => "../../components/commodity-cart/commodity-cart.js";
const _easycom_buy = () => "../../components/buy/buy.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_commodity_cart + _easycom_buy)();
}
const _sfc_main = {
  __name: "commodity",
  setup(__props) {
    const controllStore = stores_controll.useControllStore();
    let dotStyle = common_vendor.ref(true);
    common_vendor.ref(false);
    let commodity_data = common_vendor.reactive({
      name: "",
      id: "",
      origin: "",
      img_data: [],
      price: [],
      price_des: [],
      unit: "",
      type: "",
      shop_name: "",
      shop_photo: ""
    });
    const getData = async (id) => {
      let resp = await utils_request.re_get(
        "/api/commodity/info/",
        {
          "id": id
        },
        common_vendor.index.getStorageSync("token")
      );
      let data = resp.data;
      commodity_data.img_data = data.photo;
      commodity_data.id = data.id;
      commodity_data.name = data.name;
      commodity_data.origin = data.origin;
      commodity_data.price = data.price.split(",");
      commodity_data.price_des = data.price_des.split(",");
      commodity_data.unit = data.unit;
      commodity_data.type = data.type;
      commodity_data.shop_name = data.shop_name;
      commodity_data.shop_photo = data.shop_photo;
      controllStore.comm_id = data.id;
    };
    common_vendor.onLoad((option) => {
      getData(option.id);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(commodity_data).img_data, (i, index, i0) => {
          return {
            a: i,
            b: index
          };
        }),
        b: common_vendor.n(common_vendor.unref(dotStyle) ? "square-dot" : "round-dot"),
        c: common_vendor.t(common_vendor.unref(commodity_data).price[0] + " - " + common_vendor.unref(commodity_data).price[common_vendor.unref(commodity_data).price.length - 1]),
        d: common_vendor.t(60),
        e: common_vendor.t(common_vendor.unref(commodity_data).name),
        f: common_vendor.p({
          type: "heart",
          size: "18",
          color: "#999"
        }),
        g: common_vendor.p({
          type: "sound",
          size: "18",
          color: "#999"
        }),
        h: common_vendor.p({
          type: "redo",
          size: "18",
          color: "#999"
        }),
        i: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          size: "23",
          type: "icon-tyfahuo"
        }),
        j: common_vendor.t(common_vendor.unref(commodity_data).origin),
        k: common_vendor.t("\u6210\u90FD\u5E02 \u65B0\u90FD\u533A \u65B0\u90FD\u8857\u9053"),
        l: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          size: "22",
          type: "icon-tyfenlei"
        }),
        m: common_vendor.t(common_vendor.unref(commodity_data).price_des[0]),
        n: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          size: "22",
          type: "icon-tyaixin"
        }),
        o: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          size: "22",
          type: "icon-typinpaizhekou"
        }),
        p: common_vendor.unref(commodity_data).shop_photo,
        q: common_vendor.t(common_vendor.unref(commodity_data).shop_name),
        r: common_vendor.t(4.9),
        s: common_vendor.t(4.9),
        t: common_vendor.t(4.9),
        v: common_vendor.unref(commodity_data).type == 0
      }, common_vendor.unref(commodity_data).type == 0 ? {} : {}, {
        w: common_vendor.unref(controllStore).is_buy
      }, common_vendor.unref(controllStore).is_buy ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-152957bc"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/commodity/commodity.vue"]]);
wx.createPage(MiniProgramPage);
