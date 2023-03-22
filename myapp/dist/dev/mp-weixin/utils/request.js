"use strict";
const common_vendor = require("../common/vendor.js");
const base_url = "https://pipibr.com:3002";
function re_get(url, data) {
  return common_vendor.index.request({
    url: base_url + url,
    data,
    header: {
      "Authorization": "Bearer " + common_vendor.index.getStorageSync("token")
    },
    method: "GET"
  }).then((res) => {
    if (res.statusCode === 200) {
      return res.data;
    } else {
      throw new Error("\u8BF7\u6C42\u5931\u8D25");
    }
  }).catch((err) => {
    console.log(err);
  });
}
function re_post(url, data) {
  return common_vendor.index.request({
    url: base_url + url,
    data,
    header: {
      "Authorization": "Bearer " + common_vendor.index.getStorageSync("token"),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  }).then((res) => {
    if (res.statusCode === 200) {
      return res.data;
    } else {
      throw new Error("\u8BF7\u6C42\u5931\u8D25");
    }
  }).catch((err) => {
    console.log(err);
  });
}
exports.re_get = re_get;
exports.re_post = re_post;
