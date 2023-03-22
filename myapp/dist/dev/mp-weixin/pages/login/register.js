"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
const _sfc_main = {
  __name: "register",
  setup(__props) {
    let imageValue = common_vendor.ref([]);
    function select(e) {
      common_vendor.index.request({
        url: "http://mysite.com/api/1/upload/",
        data: {
          source: e.tempFilePaths[0],
          expiration: "PT5M"
        },
        method: "POST",
        header: {
          "X-API-Key": "chv_n7Uk_31950352176b2d00c0232c486496205a493d27b08de0d3bed6d289b561c04197e39e4bfc2f9984e6ebe6fdeb1a31630446c55ccfcbcd32357ce42cd7f4a867e1"
        },
        success(resp) {
          console.log(resp);
        },
        fail(resp) {
          console.log(resp);
        }
      });
      console.log("\u9009\u62E9\u6587\u4EF6\uFF1A", e.tempFilePaths[0]);
    }
    function progress(e) {
      console.log("\u4E0A\u4F20\u8FDB\u5EA6\uFF1A", e);
    }
    function success(e) {
      console.log("\u4E0A\u4F20\u6210\u529F: ", e);
      console.log();
    }
    function fail(e) {
      console.log("\u4E0A\u4F20\u5931\u8D25\uFF1A", e);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(select),
        b: common_vendor.o(progress),
        c: common_vendor.o(success),
        d: common_vendor.o(fail),
        e: common_vendor.o(($event) => common_vendor.isRef(imageValue) ? imageValue.value = $event : imageValue = $event),
        f: common_vendor.p({
          fileMediatype: "image",
          mode: "grid",
          modelValue: common_vendor.unref(imageValue)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/login/register.vue"]]);
wx.createPage(MiniProgramPage);
