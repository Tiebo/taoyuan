"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const utils_utils = require("../../utils/utils.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.onMounted(() => {
      utils_utils.showMsg("\u52A0\u8F7D\u6210\u529F");
    });
    let comm_data = common_vendor.ref([]);
    let img_data = common_vendor.ref([]);
    let find_data = common_vendor.ref([]);
    const getData = async () => {
      img_data.value.push("https://i.328888.xyz/2023/02/25/E0wxc.jpeg");
      img_data.value.push("https://i.328888.xyz/2023/02/25/EA3XU.png");
      img_data.value.push("https://i.328888.xyz/2023/02/25/EfprJ.jpeg");
      await utils_request.re_get("http://127.0.0.1:8000/api/commodity/all/", {}).then((res) => {
        find_data.value = res.data.resp;
        for (let i = 0; i < res.data.resp.length; i++) {
          if (i == 5)
            break;
          comm_data.value.push(find_data.value[i]);
        }
      });
    };
    const router_list = (type) => {
      utils_utils.router_to(`../list/${type}/${type}`);
    };
    const router_to_commodity = (id) => {
      utils_utils.router_to("../commodity/commodity?id=" + id);
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          size: "25"
        }),
        b: common_vendor.f(common_vendor.unref(img_data), (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        c: common_vendor.o(($event) => router_list("tree")),
        d: common_vendor.o(($event) => router_list("hotel")),
        e: common_vendor.o(($event) => router_list("shop")),
        f: common_vendor.o(($event) => router_list("article")),
        g: common_vendor.f(common_vendor.unref(comm_data), (i, k0, i0) => {
          return {
            a: i.photo[1],
            b: common_vendor.t(i.name),
            c: common_vendor.o(($event) => router_to_commodity(i.id), i.id),
            d: i.id
          };
        }),
        h: common_vendor.f(common_vendor.unref(find_data), (find, k0, i0) => {
          return {
            a: find.photo[1],
            b: common_vendor.t(find.name),
            c: find.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0cd09a48"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
