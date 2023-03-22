"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  logistics();
}
const logistics = () => "../../../components/xinyu-logistics/xinyu-logistics.js";
const _sfc_main = {
  __name: "expressage",
  setup(__props) {
    let wlInfo = {
      delivery_status: 1,
      post_name: "\u97F5\u8FBE\u5FEB\u9012",
      logo: "https://cdn.kuaidi100.com/images/all/56/yunda.png",
      exp_phone: "95546",
      post_no: "4304678557725",
      addr: "\u6C5F\u897F\u7701\u5357\u660C\u5E02\u9752\u4E91\u8C31\u533A",
      list: [
        {
          "time": "2020-04-12 13:00:57",
          "timeArr": ["2020-04-12", "13:00:57"],
          "context": "\u6C5F\u897F\u5357\u660C\u9752\u4E91\u8C31\u533A \u5FEB\u4EF6\u5DF2\u88AB \u4E30\u5DE2\u667A\u80FD\u67DC \u4EE3\u7B7E\u6536\u3002",
          "location": ""
        },
        {
          "time": "2020-04-12 12:58:53",
          "timeArr": ["2020-04-12", "12:58:53"],
          "context": "\u6C5F\u897F\u5357\u660C\u9752\u4E91\u8C31\u533A \u8FDB\u884C\u6D3E\u4EF6\u626B\u63CF\uFF1B\u6D3E\u9001\u4E1A\u52A1\u5458\uFF1A\u5F20\u4E09\uFF1B\u8054\u7CFB\u7535\u8BDD\uFF1A88888888888",
          "location": ""
        },
        {
          "time": "2020-04-11 15:45:44",
          "timeArr": ["2020-04-11", "15:45:44"],
          "context": "\u6C5F\u897F\u5357\u660C\u5206\u62E8\u4E2D\u5FC3 \u4ECE\u7AD9\u70B9\u53D1\u51FA\uFF0C\u672C\u6B21\u8F6C\u8FD0\u76EE\u7684\u5730\uFF1A\u6C5F\u897F\u5357\u660C\u9752\u4E91\u8C31\u533A",
          "location": ""
        },
        {
          "time": "2020-04-11 15:08:45",
          "timeArr": ["2020-04-11", "15:08:45"],
          "context": "\u6C5F\u897F\u5357\u660C\u5206\u62E8\u4E2D\u5FC3 \u5728\u5206\u62E8\u4E2D\u5FC3\u8FDB\u884C\u5378\u8F66\u626B\u63CF",
          "location": ""
        },
        {
          "time": "2020-04-10 17:42:41",
          "timeArr": ["2020-04-10", "17:42:41"],
          "context": "\u6D59\u6C5F\u4E49\u4E4C\u5206\u62E8\u4E2D\u5FC3 \u8FDB\u884C\u88C5\u8F66\u626B\u63CF\uFF0C\u53D1\u5F80\uFF1A\u6C5F\u897F\u5357\u660C\u5206\u62E8\u4E2D\u5FC3",
          "location": ""
        },
        {
          "time": "2020-04-10 17:39:38",
          "timeArr": ["2020-04-10", "17:39:38"],
          "context": "\u6D59\u6C5F\u4E49\u4E4C\u5206\u62E8\u4E2D\u5FC3 \u5728\u5206\u62E8\u4E2D\u5FC3\u8FDB\u884C\u79F0\u91CD\u626B\u63CF",
          "location": ""
        },
        {
          "time": "2020-04-10 16:02:46",
          "timeArr": ["2020-04-10", "16:02:46"],
          "context": "\u6D59\u6C5F\u4E49\u4E4C\u57CE\u897F\u516C\u53F8 \u8FDB\u884C\u4E0B\u7EA7\u5730\u70B9\u626B\u63CF\uFF0C\u53D1\u5F80\uFF1A\u6C5F\u897F\u5357\u660C\u5730\u533A\u5305",
          "location": ""
        },
        {
          "time": "2020-04-10 15:48:42",
          "timeArr": ["2020-04-10", "15:48:42"],
          "context": "\u6D59\u6C5F\u4E49\u4E4C\u57CE\u897F\u516C\u53F8\u57CE\u897F\u8425\u9500\u90E8 \u8FDB\u884C\u63FD\u4EF6\u626B\u63CF",
          "location": ""
        }
      ]
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          wlInfo: common_vendor.unref(wlInfo)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/user/expressage/expressage.vue"]]);
wx.createPage(MiniProgramPage);
