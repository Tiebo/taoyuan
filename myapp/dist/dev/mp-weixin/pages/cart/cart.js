"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      loadding: true,
      isEdit: false,
      tableData: [],
      arrIds: [],
      checkedAll: false,
      totalPrice: 0
    };
  },
  onLoad() {
  },
  onShow() {
    this.getData();
  },
  methods: {
    getData() {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D",
        mask: true
      });
      let self = this;
      common_vendor.index.hideLoading();
      self.loadding = false;
      self._initGoodsChecked();
    },
    _initGoodsChecked() {
      let self = this;
      let checkedData = self.getCheckedData();
      self.tableData.forEach((item) => {
        item.checked = self.inArray(`${item.product_id}_${item.product_sku_id}`, checkedData);
      });
      self.isEdit = false;
      self.checkedAll = checkedData.length == self.tableData.length;
      self.updateTotalPrice();
    },
    getCheckedData() {
      let checkedData = common_vendor.index.getStorageSync("checkedData");
      return checkedData ? checkedData : [];
    },
    checkItem(e, index) {
      e.checked = !e.checked;
      this.$set(this.tableData, index, e);
      this.onUpdateChecked();
      this.updateTotalPrice();
      this.checkedAll = this.getCheckedData().length == this.tableData.length;
    },
    onUpdateChecked() {
      let self = this, checkedData = [];
      self.tableData.forEach((item) => {
        if (item.checked == true) {
          checkedData.push(`${item.product_id}_${item.product_sku_id}`);
        }
      });
      common_vendor.index.setStorageSync("checkedData", checkedData);
    },
    onCheckedAll() {
      let self = this;
      self.checkedAll = !self.checkedAll;
      self.tableData.forEach((item) => {
        item.checked = self.checkedAll;
      });
      self.updateTotalPrice();
      self.onUpdateChecked();
    },
    updateTotalPrice: function() {
      let total_price = 0;
      let items = this.tableData;
      for (let i = 0; i < items.length; i++) {
        if (items[i]["checked"] == true) {
          total_price += items[i]["total_num"] * items[i]["product_price"];
        }
      }
      this.totalPrice = total_price.toFixed(2);
    },
    Submit() {
      let arrIds = [];
      this.tableData.forEach((item) => {
        if (item.checked == true) {
          arrIds.push(`${item.product_id}_${item.product_sku_id}`);
        }
      });
      if (arrIds.length == 0) {
        common_vendor.index.showToast({
          title: "\u8BF7\u9009\u62E9\u5546\u54C1",
          icon: "none"
        });
        return false;
      }
      common_vendor.index.navigateTo({
        url: "/pages/order/confirm-order/confirm-order?order_type=cart&cart_ids=" + arrIds
      });
    },
    addFunc(item) {
      let self = this;
      let product_id = item.product_id;
      let product_sku_id = item.product_sku_id;
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D",
        mask: true
      });
      self._post(
        "order.cart/add",
        {
          product_id,
          product_sku_id,
          total_num: 1
        },
        function(res) {
          self.loadding = false;
          self.getData();
        },
        function() {
          self.loadding = false;
        }
      );
    },
    reduceFunc(item) {
      let self = this;
      let product_id = item.product_id;
      let product_sku_id = item.product_sku_id;
      if (item.total_num <= 1) {
        return;
      }
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D",
        mask: true
      });
      self._post(
        "order.cart/sub",
        {
          product_id,
          product_sku_id
        },
        function(res) {
          self.loadding = false;
          self.getData();
        },
        function() {
          self.loadding = false;
        }
      );
    },
    onDelete() {
      let self = this;
      let cartIds = self.getCheckedIds();
      if (!cartIds.length) {
        self.showError("\u60A8\u8FD8\u6CA1\u6709\u9009\u62E9\u5546\u54C1");
        return false;
      }
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u60A8\u786E\u5B9A\u8981\u79FB\u9664\u9009\u62E9\u7684\u5546\u54C1\u5417?",
        success(e) {
          e.confirm && self._post(
            "order.cart/delete",
            {
              product_sku_id: cartIds
            },
            function(res) {
              self.onDeleteEvent(cartIds);
              self.getData();
            }
          );
        }
      });
    },
    getCheckedIds() {
      let self = this;
      let arrIds = [];
      self.tableData.forEach((item) => {
        if (item.checked === true) {
          arrIds.push(`${item.product_id}_${item.product_sku_id}`);
        }
      });
      return arrIds;
    },
    onDeleteEvent(cartIds) {
      let self = this;
      cartIds.forEach((cartIndex) => {
        self.tableData.forEach((item, productIndex) => {
          if (cartIndex == `${item.product_id}_${item.product_sku_id}`) {
            self.tableData.splice(productIndex, 1);
          }
        });
      });
      self.onUpdateChecked();
      return true;
    },
    inArray(search, array) {
      for (var i in array) {
        if (array[i] == search) {
          return true;
        }
      }
      return false;
    },
    gotoShop() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.loadding
  }, !$data.loadding ? common_vendor.e({
    b: $data.tableData.length > 0
  }, $data.tableData.length > 0 ? common_vendor.e({
    c: $data.isEdit
  }, $data.isEdit ? {} : {}, {
    d: common_vendor.o(($event) => $data.isEdit = !$data.isEdit),
    e: common_vendor.f($data.tableData, (item, index, i0) => {
      return {
        a: item.checked,
        b: common_vendor.o(($event) => $options.checkItem(item, index), index),
        c: item.product_image,
        d: common_vendor.t(item.product_name),
        e: common_vendor.t(item.selling_point),
        f: common_vendor.t(item.product_price),
        g: common_vendor.n(item.total_num <= 1 ? "gray" : "gray3"),
        h: common_vendor.o(($event) => $options.reduceFunc(item), index),
        i: item.product_sku.stock_num,
        j: item.total_num,
        k: common_vendor.o(($event) => item.total_num = $event.detail.value, index),
        l: common_vendor.n(item.total_num >= item.product_sku.stock_num ? "gray" : "gray3"),
        m: common_vendor.o(($event) => $options.addFunc(item), index),
        n: index
      };
    })
  }) : {
    f: common_vendor.o((...args) => $options.gotoShop && $options.gotoShop(...args))
  }, {
    g: $data.tableData.length > 0
  }, $data.tableData.length > 0 ? common_vendor.e({
    h: $data.checkedAll,
    i: common_vendor.o(($event) => $options.onCheckedAll()),
    j: !$data.isEdit
  }, !$data.isEdit ? {
    k: common_vendor.t($data.totalPrice),
    l: common_vendor.o(($event) => $options.Submit())
  } : {
    m: common_vendor.o(($event) => $options.onDelete())
  }) : {}) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
