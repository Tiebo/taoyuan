"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore("user", {
  unistorage: true,
  state: () => {
    return {
      uid: "125742",
      username: "123123",
      name: "\u665E\u6708",
      subtitle: "\u54C8\u54C8\u54C8",
      user_photo: "/static/p1.jpg"
    };
  },
  actions: {}
});
exports.useUserStore = useUserStore;
