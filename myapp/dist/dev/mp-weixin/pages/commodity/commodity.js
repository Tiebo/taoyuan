"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_bottom_cart2 = common_vendor.resolveComponent("bottom-cart");
  (_easycom_uni_icons2 + _easycom_bottom_cart2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_bottom_cart = () => "../../components/bottom-cart/bottom-cart.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_bottom_cart)();
}
const _sfc_main = {
  __name: "commodity",
  setup(__props) {
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
      await utils_request.re_get("http://127.0.0.1:8000/api/commodity/info/", {
        "id": id
      }).then((res) => {
        commodity_data.img_data = res.data.photo;
        commodity_data.id = res.data.id;
        commodity_data.name = res.data.name;
        commodity_data.origin = res.data.origin;
        commodity_data.price = res.data.price.split(",");
        commodity_data.price_des = res.data.price_des.split(",");
        commodity_data.unit = res.data.unit;
        commodity_data.type = res.data.type;
        commodity_data.shop_name = res.data.shop_name;
        commodity_data.shop_photo = res.data.shop_photo;
      });
    };
    common_vendor.onLoad((option) => {
      console.log(option.id);
      getData(option.id);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(commodity_data).img_data, (i, k0, i0) => {
          return {
            a: i
          };
        }),
        b: common_vendor.unref(commodity_data).id,
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
        i: common_vendor.t(common_vendor.unref(commodity_data).origin),
        j: common_vendor.t(common_vendor.unref(commodity_data).price_des[0]),
        k: common_vendor.unref(commodity_data).shop_photo,
        l: common_vendor.t(common_vendor.unref(commodity_data).shop_name),
        m: common_vendor.t(4.9),
        n: common_vendor.t(4.9),
        o: common_vendor.t(4.9),
        p: common_vendor.unref(commodity_data).type == 0
      }, common_vendor.unref(commodity_data).type == 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-152957bc"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/commodity/commodity.vue"]]);
wx.createPage(MiniProgramPage);
