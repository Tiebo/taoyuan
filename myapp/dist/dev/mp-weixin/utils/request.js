"use strict";
const common_vendor = require("../common/vendor.js");
function re_get(url, data) {
  return common_vendor.index.request({
    url,
    data,
    header: {},
    method: "GET"
  });
}
exports.re_get = re_get;
