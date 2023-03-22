"use strict";
const common_vendor = require("../common/vendor.js");
const useControllStore = common_vendor.defineStore("controll", {
  unistorage: false,
  state: () => {
    return {
      is_buy: false,
      comm_id: -1
    };
  }
});
exports.useControllStore = useControllStore;
