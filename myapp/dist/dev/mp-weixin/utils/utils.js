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
function router_to(url) {
  common_vendor.index.navigateTo({
    url,
    animationType: "slide-in-right",
    animationDuration: 200
  });
}
exports.router_to = router_to;
exports.showMsg = showMsg;
