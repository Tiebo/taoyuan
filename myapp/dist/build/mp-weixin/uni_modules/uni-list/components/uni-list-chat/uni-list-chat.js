"use strict";const t=require("../../../../common/vendor.js"),e={name:"UniListChat",emits:["click"],props:{title:{type:String,default:""},note:{type:String,default:""},clickable:{type:Boolean,default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},badgeText:{type:[String,Number],default:""},badgePositon:{type:String,default:"right"},time:{type:String,default:""},avatarCircle:{type:Boolean,default:!1},avatar:{type:String,default:""},avatarList:{type:Array,default:()=>[]}},computed:{isDraft(){return"[uni-im-draft]"==this.note.slice(0,14)},isSingle(){if("dot"===this.badgeText)return"uni-badge--dot";return this.badgeText.toString().length>1?"uni-badge--complex":"uni-badge--single"},computedAvatar(){return this.avatarList.length>4?(this.imageWidth=13.95,"avatarItem--3"):this.avatarList.length>1?(this.imageWidth=21.15,"avatarItem--2"):(this.imageWidth=45,"avatarItem--1")}},watch:{avatar:{handler(e){"cloud://"==e.substr(0,8)?t.Es.getTempFileURL({fileList:[e]}).then((t=>{let e=t.fileList||t.result.fileList;this.avatarUrl=e[0].tempFileURL})):this.avatarUrl=e},immediate:!0}},data:()=>({isFirstChild:!1,border:!0,imageWidth:50,avatarUrl:""}),mounted(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0),this.border=this.list.border)},methods:{getForm(t="uniList"){let e=this.$parent,i=e.$options.name;for(;i!==t;){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(e){let i={url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t})}};switch(e){case"navigateTo":default:t.index.navigateTo(i);break;case"redirectTo":t.index.redirectTo(i);break;case"reLaunch":t.index.reLaunch(i);break;case"switchTab":t.index.switchTab(i)}}}};const i=t._export_sfc(e,[["render",function(e,i,a,r,s,n){return t.e({a:s.border?1:"",b:s.isFirstChild?1:"",c:a.avatarCircle||0===a.avatarList.length},a.avatarCircle||0===a.avatarList.length?{d:a.avatarCircle?1:"",e:s.avatarUrl,f:a.avatarCircle?1:""}:{g:t.f(a.avatarList,((t,e,i)=>({a:t.url,b:e}))),h:s.imageWidth+"px",i:s.imageWidth+"px",j:t.n(n.computedAvatar),k:s.imageWidth+"px",l:s.imageWidth+"px"},{m:a.badgeText&&"left"===a.badgePositon},a.badgeText&&"left"===a.badgePositon?{n:t.t("dot"===a.badgeText?"":a.badgeText),o:t.n(n.isSingle)}:{},{p:t.t(a.title),q:n.isDraft},(n.isDraft,{}),{r:t.t(n.isDraft?a.note.slice(14):a.note),s:t.t(a.time),t:a.badgeText&&"right"===a.badgePositon},a.badgeText&&"right"===a.badgePositon?{v:t.t("dot"===a.badgeText?"":a.badgeText),w:t.n(n.isSingle),x:t.n("right"===a.badgePositon?"uni-list-chat--right":"")}:{},{y:a.clickable||a.link?"uni-list-chat--hover":"",z:t.o(((...t)=>n.onClick&&n.onClick(...t)))})}]]);wx.createComponent(i);
