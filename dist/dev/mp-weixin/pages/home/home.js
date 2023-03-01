"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const utils_utils = require("../../utils/utils.js");
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
      await utils_request.re_get("http://127.0.0.1:8000/api/commodity/all/", {
        "type": 0
      }).then((res) => {
        comm_data.value = res.data.resp;
      });
      await utils_request.re_get("http://127.0.0.1:8000/api/commodity/all/", {
        "type": 1
      }).then((res) => {
        find_data.value = res.data.resp;
      });
    };
    const router_to = (type) => {
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: `../list/${type}/${type}`,
          animationType: "slide-in-right",
          animationDuration: 200
        });
      }, 200);
    };
    const router_to_commodity = (id) => {
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "../commodity/commodity?id=" + id,
          animationType: "slide-in-right",
          animationDuration: 200
        });
      }, 200);
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(img_data), (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        b: common_vendor.o(($event) => router_to("tree")),
        c: common_vendor.o(($event) => router_to("hotel")),
        d: common_vendor.o(($event) => router_to("shop")),
        e: common_vendor.o(($event) => router_to("article")),
        f: common_vendor.f(common_vendor.unref(comm_data), (i, k0, i0) => {
          return {
            a: i.photo[1],
            b: common_vendor.t(i.name),
            c: common_vendor.o(($event) => router_to_commodity(i.id), i.id),
            d: i.id
          };
        }),
        g: common_vendor.f(common_vendor.unref(find_data), (find, k0, i0) => {
          return {
            a: find.photo[0],
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
