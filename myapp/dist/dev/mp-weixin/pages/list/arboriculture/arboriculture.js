"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_user = require("../../../stores/user.js");
const _sfc_main = {
  data() {
    return {
      info: {
        name: stores_user.useUserStore().name,
        sex: 2,
        votes: 8,
        avatar: stores_user.useUserStore().user_photo
      },
      rainArr: [1, 2, 3, 4],
      stages: 1,
      during: 2,
      oldest: 300,
      plussNum: 1,
      pluss: false,
      movetree: true,
      treemove: false,
      wateroff: true,
      watercss: false,
      waterdom: false,
      tree_imgs: [
        "http://hbimg.huaban.com/139c528ded64141f76dd275f2c2574c7bc11573f313a5-LQX1hQ",
        "https://i.328888.xyz/2023/03/20/PRqzy.png",
        "https://i.328888.xyz/2023/03/20/PRua5.png"
      ]
    };
  },
  methods: {
    setTree(time = 4e3) {
      setTimeout(() => {
        this.plussNum = 1;
        this.pluss = false;
        this.wateroff = true;
        this.watercss = false;
        this.treemove = false;
        if (this.during > this.info.vote) {
          this.stages = 1;
        }
        if (this.during <= this.info.votes && this.oldest > this.info.votes) {
          this.stages = 2;
        }
        if (this.oldest <= this.info.votes) {
          this.stages = 3;
        }
      }, time);
    },
    zoom(o) {
      common_vendor.index.previewImage({
        "urls": [o]
      });
    },
    rainFun(i, o) {
      this.plussNum = o;
      this.info.votes = Number(this.info.votes) + (o - 0);
      this.pluss = true;
      this.treemove = true;
      setTimeout(() => {
        this.rainArr.splice(i, 1);
      }, 1e3);
      this.setTree(2e3);
    },
    tree() {
      if (this.movetree) {
        this.treemove = true;
        this.movetree = false;
        setTimeout(() => {
          this.movetree = true;
          this.treemove = false;
        }, 1e3);
      }
    },
    water() {
      if (this.wateroff) {
        this.watercss = true;
        this.wateroff = false;
        setTimeout(() => {
          this.waterdom = true;
        }, 1500);
        setTimeout(() => {
          this.info.votes++;
          this.pluss = true;
          this.treemove = true;
          this.movetree = false;
        }, 2e3);
        setTimeout(() => {
          this.waterdom = false;
          this.movetree = true;
        }, 3500);
        this.setTree();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.rainArr, (o, i, i0) => {
      return {
        a: common_vendor.t(o),
        b: i,
        c: common_vendor.o(($event) => $options.rainFun(i, o), i)
      };
    }),
    b: common_vendor.n("rain rain-" + $data.stages),
    c: $data.tree_imgs[$data.stages - 1],
    d: common_vendor.n("tree-" + $data.stages),
    e: common_vendor.n($data.treemove ? "move-" + $data.stages : ""),
    f: common_vendor.o((...args) => $options.tree && $options.tree(...args)),
    g: common_vendor.o((...args) => $options.water && $options.water(...args)),
    h: $data.watercss,
    i: $data.watercss ? 1 : "",
    j: !$data.watercss,
    k: common_vendor.o((...args) => $options.water && $options.water(...args)),
    l: $data.waterdom,
    m: $data.info.avatar,
    n: common_vendor.o(($event) => $options.zoom($data.info.avatar)),
    o: common_vendor.t($data.info.name),
    p: common_vendor.n("sex-" + $data.info.sex),
    q: common_vendor.t($data.info.votes + " \u6C34\u6EF4"),
    r: common_vendor.t($data.plussNum),
    s: $data.pluss ? 1 : "",
    t: "/static/img/speed-1" + [1 == $data.stages ? "-h" : ""] + ".png",
    v: "/static/img/speed-2" + [2 == $data.stages ? "-h" : ""] + ".png",
    w: "/static/img/speed-3" + [3 == $data.stages ? "-h" : ""] + ".png"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/arboriculture/arboriculture.vue"]]);
wx.createPage(MiniProgramPage);
