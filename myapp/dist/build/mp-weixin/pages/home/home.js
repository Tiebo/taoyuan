"use strict";const e=require("../../common/vendor.js"),t=require("../../utils/utils.js"),i={__name:"home",setup(i){e.onMounted((()=>{t.showMsg("加载成功")}));let a=e.ref([]);const o=()=>{setTimeout((()=>{e.index.navigateTo({url:"../list/tree/tree",animationType:"slide-in-right",animationDuration:200})}),200)};return(async()=>{const t=await e.index.$http.get("/api/public/v1/home/swiperdata");a.value=t.data.message})(),(t,i)=>({a:e.f(e.unref(a),((e,t,i)=>({a:e.image_src,b:e}))),b:e.o(o),c:e.f(6,((t,i,a)=>({a:e.t(t),b:e.o((t=>{setTimeout((()=>{e.index.navigateTo({url:"../commodity/commodity",animationType:"slide-in-right",animationDuration:200})}),200)}),t),c:t}))),d:e.f(10,((t,i,a)=>({a:e.t(t),b:t})))})}},a=e._export_sfc(i,[["__scopeId","data-v-834d3623"]]);wx.createPage(a);