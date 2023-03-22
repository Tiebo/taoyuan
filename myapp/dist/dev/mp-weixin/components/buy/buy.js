"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_controll = require("../../stores/controll.js");
const utils_request = require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + pop)();
}
const pop = () => "../ming-pop/ming-pop.js";
const _sfc_main = {
  __name: "buy",
  setup(__props) {
    let commodity_data = common_vendor.reactive({
      name: "",
      id: "",
      origin: "",
      img_data: [],
      price: [0, 1],
      price_des: [],
      unit: "",
      type: "",
      shop_name: "",
      shop_photo: ""
    });
    let active = common_vendor.ref(0);
    let number = common_vendor.ref(1);
    const controllStore = stores_controll.useControllStore();
    const getData = async () => {
      const resp = await utils_request.re_get(
        "/api/commodity/info/",
        {
          "id": controllStore.comm_id
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
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(commodity_data).img_data[common_vendor.unref(active)],
        b: common_vendor.t(common_vendor.unref(commodity_data).price[common_vendor.unref(active)]),
        c: common_vendor.o(($event) => common_vendor.unref(controllStore).is_buy = false),
        d: common_vendor.p({
          customPrefix: "iconfont",
          type: "icon-tyweizhi",
          size: "18"
        }),
        e: common_vendor.t("\u5E26\u9C7C \u897F\u5357\u77F3\u6CB9\u5927\u5B66\u5B66\u751F\u4E00\u533A\u5FEB\u9012\u4E2D\u5FC3\u83DC\u9E1F\u9A7F\u7AD9"),
        f: common_vendor.t("\u5305\u90AE \u9001\u8FD0\u8D39\u9669 \u73B0\u8D27\uFF0C \u4ED8\u6B3E\u540E48\u5C0F\u65F6\u5185\u53D1\u8D27"),
        g: common_vendor.t(">"),
        h: common_vendor.t(common_vendor.unref(commodity_data).img_data.length),
        i: common_vendor.f(common_vendor.unref(commodity_data).img_data, (comm, index, i0) => {
          return {
            a: comm,
            b: common_vendor.t(common_vendor.unref(commodity_data).name + " \u3010" + common_vendor.unref(commodity_data).price_des[index] + "\u3011"),
            c: common_vendor.n(common_vendor.unref(active) == index ? "body-item-card active" : "body-item-card"),
            d: index,
            e: common_vendor.o(($event) => common_vendor.isRef(active) ? active.value = index : active = index, index)
          };
        }),
        j: common_vendor.unref(number),
        k: common_vendor.o(($event) => common_vendor.isRef(number) ? number.value = $event.detail.value : number = $event.detail.value),
        l: common_vendor.t(common_vendor.unref(commodity_data).price[common_vendor.unref(active)] * common_vendor.unref(number)),
        m: common_vendor.o(($event) => common_vendor.unref(controllStore).is_buy = true),
        n: common_vendor.p({
          is_show: common_vendor.unref(controllStore).is_buy,
          direction: "below",
          is_close: true,
          is_mask: true,
          width: 100,
          height: "fit-content",
          maskFun: true
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f1ed9871"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/buy/buy.vue"]]);
wx.createComponent(Component);
