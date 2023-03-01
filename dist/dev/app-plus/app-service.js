if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function showMsg(title) {
    uni.showToast({
      title,
      duration: 1500,
      icon: "none",
      position: "bottom"
    });
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$6 = {
    __name: "home",
    setup(__props) {
      vue.onMounted(() => {
        showMsg("\u52A0\u8F7D\u6210\u529F");
      });
      let img_data = vue.ref([]);
      const getData = async () => {
        const data = await uni.$http.get("/api/public/v1/home/swiperdata");
        img_data.value = data.data.message;
      };
      const router_to = () => {
        setTimeout(() => {
          uni.navigateTo({
            url: "../list/tree/tree",
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      getData();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createCommentVNode(" \u8F6E\u64AD\u56FE "),
          vue.createElementVNode("view", {
            style: { "border-radius": "30rpx" },
            class: "swiper_adv"
          }, [
            vue.createCommentVNode(" \u8F6E\u64AD\u56FE\u533A\u57DF "),
            vue.createElementVNode("swiper", {
              "indicator-dots": true,
              autoplay: true,
              interval: 3e3,
              duration: 1e3,
              circular: true
            }, [
              vue.createCommentVNode(" \u5FAA\u73AF\u6E32\u67D3\u8F6E\u64AD\u56FE\u7684 item \u9879 "),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(img_data), (item) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", {
                  style: { "border-radius": "30rpx" },
                  key: item
                }, [
                  vue.createElementVNode("view", { class: "swiper-item" }, [
                    vue.createCommentVNode(" \u52A8\u6001\u7ED1\u5B9A\u56FE\u7247\u7684 src \u5C5E\u6027 "),
                    vue.createElementVNode("image", {
                      src: item.image_src,
                      mode: "widthFix"
                    }, null, 8, ["src"])
                  ])
                ]);
              }), 128))
            ])
          ]),
          vue.createCommentVNode(" \u8DF3\u8F6C\u56FE\u8868 "),
          vue.createElementVNode("view", {
            class: "row-cols-3",
            style: { "margin-top": "20rpx", "text-align": "center", "padding": "30rpx" }
          }, [
            vue.createElementVNode("view", {
              class: "list",
              onClick: router_to
            }, [
              vue.createElementVNode("image", { src: "/static/icon/lychee.png" }),
              vue.createElementVNode("br"),
              vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, "\u9886\u517B\u6843\u6811")
            ]),
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("image", { src: "/static/icon/mango.png" }),
              vue.createElementVNode("br"),
              vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, "\u4E16\u5916\u6843\u6E90")
            ]),
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("image", { src: "/static/icon/watermelon.png" }),
              vue.createElementVNode("br"),
              vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, "\u6843\u6E90\u54C1")
            ]),
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("image", { src: "/static/icon/cherry.png" }),
              vue.createElementVNode("br"),
              vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, "\u84EC\u6EAA\u6587\u5316")
            ])
          ]),
          vue.createCommentVNode(" \u63A8\u8350\u5546\u54C1 "),
          vue.createElementVNode("view", {
            class: "recommend",
            style: { "margin-top": "40rpx" }
          }, [
            vue.createElementVNode("view", { class: "title" }, " \u63A8\u8350\u5546\u54C1 > "),
            vue.createElementVNode("view", {
              class: "re-sale",
              style: { "margin-top": "30rpx" }
            }, [
              vue.createElementVNode("view", { class: "re-sale-body" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  src: "/static/1275835.jpg"
                }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { class: "des" }, "\u4F60\u559C\u6B22\u7684\u5185\u5BB91")
              ]),
              vue.createElementVNode("view", { class: "re-sale-body" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  src: "/static/1284687.png"
                }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { class: "des" }, "\u4F60\u559C\u6B22\u7684\u5185\u5BB92")
              ]),
              vue.createElementVNode("view", { class: "re-sale-body" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  src: "/static/101444447_p0_master1200.jpg"
                }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { class: "des" }, "\u4F60\u559C\u6B22\u7684\u5185\u5BB93")
              ]),
              vue.createElementVNode("view", { class: "re-sale-body" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  src: "/static/101444447_p0_master1200.jpg"
                }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { class: "des" }, "\u4F60\u559C\u6B22\u7684\u5185\u5BB94")
              ]),
              vue.createElementVNode("view", { class: "re-sale-body" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  src: "/static/Snipaste_2022-09-19_16-13-30.png"
                }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { class: "des" }, "\u4F60\u559C\u6B22\u7684\u5185\u5BB95")
              ])
            ])
          ]),
          vue.createCommentVNode(" \u53D1\u73B0 "),
          vue.createElementVNode("view", {
            class: "recommend",
            style: { "margin-top": "40rpx" }
          }, [
            vue.createElementVNode("view", { class: "title" }, " \u53D1\u73B0 "),
            vue.createElementVNode("view", {
              class: "re-card",
              style: { "margin-top": "30rpx" }
            }, [
              vue.createCommentVNode(" v-for "),
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (i) => {
                return vue.createElementVNode("view", {
                  class: "re-card-body",
                  key: i
                }, [
                  vue.createElementVNode("image", {
                    mode: "widthFix",
                    src: "/static/1275835.jpg"
                  }),
                  vue.createElementVNode("br"),
                  vue.createElementVNode("view", null, "\u4F60\u559C\u6B22\u7684\u5185\u5BB9" + vue.toDisplayString(i), 1)
                ]);
              }), 64))
            ])
          ])
        ]);
      };
    }
  };
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0cd09a48"], ["__file", "D:/Code/project/uni/uni1/my-vue3-project/src/pages/home/home.vue"]]);
  const _sfc_main$5 = {
    __name: "cart",
    setup(__props) {
      let data = vue.ref("cart world");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("text", null, vue.toDisplayString(vue.unref(data)), 1)
        ]);
      };
    }
  };
  const PagesCartCart = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "D:/Code/project/uni/uni1/my-vue3-project/src/pages/cart/cart.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$4 = {
    __name: "message",
    setup(__props) {
      let message_data = vue.ref(15);
      let is_find_messgae = vue.ref(true);
      const false_true = () => {
        if (is_find_messgae.value) {
          is_find_messgae.value = false;
        }
        formatAppLog("log", "at pages/message/message.vue:50", is_find_messgae.value);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createTextVNode(" \xA0\u6D88\u606F\xA0 "),
            vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, " (" + vue.toDisplayString(vue.unref(message_data)) + ")\xA0\xA0 ", 1),
            vue.createElementVNode("span", { style: { "font-size": "24rpx", "color": "#747474" } }, [
              vue.createElementVNode("image", {
                style: { "width": "25rpx", "height": "25rpx" },
                src: "/static/icon/eraser.png"
              }),
              vue.createTextVNode(" \u5168\u90E8\u5DF2\u8BFB ")
            ]),
            vue.createElementVNode("span", { style: { "width": "400rpx" } }),
            vue.createElementVNode("image", {
              class: "setting",
              src: "/static/icon/setting.png"
            })
          ]),
          vue.createElementVNode("view", { class: "dialogue" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (i) => {
              return vue.createElementVNode("view", {
                class: "dialogue-body",
                onClick: _cache[0] || (_cache[0] = ($event) => false_true())
              }, [
                vue.createElementVNode("image", {
                  class: "user-photo",
                  src: "/static/1275835.jpg"
                }),
                vue.createElementVNode("view", { class: "content" }, [
                  vue.createElementVNode("view", { class: "con-title" }, " \u6591\u9A6C\u7EBF\u798F\u5229\u7C89\u4E1D\u7FA4 "),
                  vue.createElementVNode("view", { class: "con-record" }, " [\u9080\u8BF7\u60A8\u52A0\u5165\u7C89\u4E1D\u7FA4] ")
                ]),
                vue.createElementVNode("view", { class: "hint" }, [
                  vue.createElementVNode("view", { class: "time" }, " \u661F\u671F\u4E00 "),
                  vue.unref(is_find_messgae) ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "divright"
                  })) : vue.createCommentVNode("v-if", true)
                ]),
                vue.createElementVNode("hr")
              ]);
            }), 64))
          ])
        ], 64);
      };
    }
  };
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3556fc04"], ["__file", "D:/Code/project/uni/uni1/my-vue3-project/src/pages/message/message.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" });
  }
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__file", "D:/Code/project/uni/uni1/my-vue3-project/src/pages/user/user.vue"]]);
  const _sfc_main$2 = {
    __name: "tree",
    setup(__props) {
      const router_to_commodity = () => {
        setTimeout(() => {
          uni.navigateTo({
            url: "../../commodity/commodity",
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { style: { "text-align": "center" } }, [
            vue.createElementVNode("image", {
              mode: "widthFix",
              src: "/static/photo/test2.png"
            })
          ]),
          vue.createElementVNode("view", { class: "title-sort" }, [
            vue.createElementVNode("view", { class: "options" }, " \u5168\u90E8 "),
            vue.createElementVNode("view", { class: "options" }, " \u72D7\u72D7 "),
            vue.createElementVNode("view", { class: "options" }, " \u732B\u54AA "),
            vue.createElementVNode("view", { class: "options" }, " \u5176\u4ED6 "),
            vue.createElementVNode("view", { class: "condition" }, " \u7B5B\u9009 ")
          ]),
          vue.createCommentVNode(" v-for "),
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (i) => {
            return vue.createElementVNode("view", {
              class: "content",
              key: i,
              onClick: router_to_commodity
            }, [
              vue.createElementVNode("image", {
                class: "tree-photo",
                src: "/static/photo/test1.jpg"
              }),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createElementVNode("view", { class: "right-title" }, [
                  vue.createElementVNode("span", { style: { "font-weight": "550" } }, "\u732B\u54AA"),
                  vue.createElementVNode("span", { style: { "color": "#cccccc" } }, "\xA0\xA0|\xA0\xA0"),
                  vue.createElementVNode("span", { style: { "font-size": "27rpx" } }, "1\u4E2A\u6708")
                ]),
                vue.createElementVNode("view", { class: "right-description" }, " \u56E0\u4E3A\u5BB6\u5EAD\u539F\u56E0\uFF0C\u7236\u6BCD\u4E0D\u8BA9\u517B\u4E86\u56E0\u4E3A\u5BB6\u5EAD\u539F\u56E0\uFF0C\u7236\u6BCD\u4E0D\u8BA9\u517B\u4E86.\u56E0\u4E3A\u5BB6\u5EAD\u539F\u56E0\uFF0C\u7236\u6BCD\u4E0D\u8BA9\u517B\u4E86\u56E0\u4E3A\u5BB6\u5EAD\u539F\u56E0\uFF0C\u7236\u6BCD\u4E0D\u8BA9\u517B\u4E86\u56E0\u4E3A\u5BB6\u5EAD\u539F\u56E0\uFF0C\u7236\u6BCD\u4E0D\u8BA9\u517B\u4E86 "),
                vue.createCommentVNode(" v-for "),
                vue.createElementVNode("view", { class: "right-label" }, [
                  vue.createElementVNode("view", { class: "right-label-body" }, " \u672A\u7EDD\u80B2 "),
                  vue.createElementVNode("view", { class: "right-label-body" }, " \u672A\u514D\u75AB "),
                  vue.createElementVNode("view", { class: "right-label-body right-label-body-yes" }, " \u5DF2\u9A71\u866B ")
                ])
              ])
            ]);
          }), 64))
        ]);
      };
    }
  };
  const PagesListTreeTree = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/Code/project/uni/uni1/my-vue3-project/src/pages/list/tree/tree.vue"]]);
  const _sfc_main$1 = {
    __name: "commodity",
    setup(__props) {
      let img_data = vue.ref([]);
      const getData = async () => {
        const data = await uni.$http.get("/api/public/v1/home/swiperdata");
        img_data.value = data.data.message;
      };
      getData();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createCommentVNode(" \u8F6E\u64AD\u56FE "),
          vue.createElementVNode("view", {
            style: { "border-radius": "30rpx" },
            class: "swiper_adv"
          }, [
            vue.createCommentVNode(" \u8F6E\u64AD\u56FE\u533A\u57DF "),
            vue.createElementVNode("swiper", {
              "indicator-dots": true,
              autoplay: true,
              interval: 3e3,
              duration: 1e3,
              circular: true
            }, [
              vue.createCommentVNode(" \u5FAA\u73AF\u6E32\u67D3\u8F6E\u64AD\u56FE\u7684 item \u9879 "),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(img_data), (item) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", {
                  style: { "border-radius": "30rpx" },
                  key: item
                }, [
                  vue.createElementVNode("view", { class: "swiper-item" }, [
                    vue.createCommentVNode(" \u52A8\u6001\u7ED1\u5B9A\u56FE\u7247\u7684 src \u5C5E\u6027 "),
                    vue.createElementVNode("image", {
                      src: item.image_src,
                      mode: "widthFix"
                    }, null, 8, ["src"])
                  ])
                ]);
              }), 128))
            ])
          ])
        ]);
      };
    }
  };
  const PagesCommodityCommodity = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/Code/project/uni/uni1/my-vue3-project/src/pages/commodity/commodity.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/cart/cart", PagesCartCart);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/list/tree/tree", PagesListTreeTree);
  __definePage("pages/commodity/commodity", PagesCommodityCommodity);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/uni1/my-vue3-project/src/App.vue"]]);
  class Request {
    constructor(options = {}) {
      this.baseUrl = options.baseUrl || "";
      this.url = options.url || "";
      this.method = "GET";
      this.data = null;
      this.header = options.header || {};
      this.beforeRequest = null;
      this.afterRequest = null;
    }
    get(url, data = {}) {
      this.method = "GET";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    post(url, data = {}) {
      this.method = "POST";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    put(url, data = {}) {
      this.method = "PUT";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    delete(url, data = {}) {
      this.method = "DELETE";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    _() {
      this.header = {};
      this.beforeRequest && typeof this.beforeRequest === "function" && this.beforeRequest(this);
      return new Promise((resolve, reject) => {
        let weixin = wx;
        if ("undefined" !== typeof uni) {
          weixin = uni;
        }
        weixin.request({
          url: this.url,
          method: this.method,
          data: this.data,
          header: this.header,
          success: (res) => {
            resolve(res);
          },
          fail: (err) => {
            reject(err);
          },
          complete: (res) => {
            this.afterRequest && typeof this.afterRequest === "function" && this.afterRequest(res);
          }
        });
      });
    }
  }
  const $http = new Request();
  uni.$http = $http;
  $http.baseUrl = "https://www.uinav.com";
  $http.beforeRequest = function(options) {
    uni.showLoading({
      title: "\u6570\u636E\u52A0\u8F7D\u4E2D..."
    });
  };
  $http.afterRequest = function() {
    uni.hideLoading();
  };
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
