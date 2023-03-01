"use strict";
const common_vendor = require("../common/vendor.js");
function showMsg(title) {
  common_vendor.index.showToast({
    title,
    duration: 1500,
    icon: "none",
    position: "bottom"
  });
}
exports.showMsg = showMsg;
