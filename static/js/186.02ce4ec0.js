"use strict";(self["webpackChunkerabbit_pc_vue_project"]=self["webpackChunkerabbit_pc_vue_project"]||[]).push([[186],{1186:function(a,t,e){e.r(t),e.d(t,{default:function(){return wa}});var d=e(3396);function s(a,t,e,s,c,o){const r=(0,d.up)("AppTopnav"),i=(0,d.up)("AppHeader"),n=(0,d.up)("AppHeaderSticky"),l=(0,d.up)("RouterView"),p=(0,d.up)("AppFooter");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)(r),(0,d.Wm)(i),(0,d.Wm)(n),(0,d.Wm)(l),(0,d.Wm)(p)])}var c=e(65),o=e(7139);const r=a=>((0,d.dD)("data-v-6eb5bac2"),a=a(),(0,d.Cn)(),a),i={class:"app-topnav"},n={class:"container"},l=["src"],p=r((()=>(0,d._)("i",{class:"iconfont icon-iconuser"},null,-1))),v=r((()=>(0,d._)("li",null,[(0,d._)("a",{href:"javascript:;"},"免费注册")],-1))),u=(0,d.uE)('<li data-v-6eb5bac2><a href="javascript:;" data-v-6eb5bac2>我的订单</a></li><li data-v-6eb5bac2><a href="javascript:;" data-v-6eb5bac2>会员中心</a></li><li data-v-6eb5bac2><a href="javascript:;" data-v-6eb5bac2>帮助中心</a></li><li data-v-6eb5bac2><a href="javascript:;" data-v-6eb5bac2>关于我们</a></li><li data-v-6eb5bac2><a href="javascript:;" data-v-6eb5bac2><i class="iconfont icon-iconphone" data-v-6eb5bac2></i>手机版</a></li>',5);function _(a,t,e,s,c,r){const _=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("nav",i,[(0,d._)("div",n,[(0,d._)("ul",null,[s.profile.token?((0,d.wg)(),(0,d.iD)(d.HY,{key:0},[(0,d._)("li",null,[(0,d._)("img",{src:a.$store.state.user.profile.avatar,class:"avtar",alt:""},null,8,l),(0,d.Wm)(_,{to:"/member"},{default:(0,d.w5)((()=>[p,(0,d.Uk)((0,o.zw)(a.$store.state.user.profile.account),1)])),_:1})]),(0,d._)("li",null,[(0,d._)("a",{onClick:t[0]||(t[0]=(...a)=>s.logout&&s.logout(...a)),href:"javascript:;"},"退出登录")])],64)):((0,d.wg)(),(0,d.iD)(d.HY,{key:1},[(0,d._)("li",null,[(0,d.Wm)(_,{to:"/login"},{default:(0,d.w5)((()=>[(0,d.Uk)("请先登录")])),_:1})]),v],64)),u])])])}e(7658);var f=e(2483),m={name:"AppTopnav",setup(a,{emit:t}){const e=(0,c.oR)(),s=(0,f.tv)();let o=(0,d.Fl)((()=>e.state.user.profile));const r=()=>{e.commit("user/setUser",{}),e.commit("cart/setCartList",[]),s.push("/login")};return{profile:o,logout:r}}},h=e(89);const w=(0,h.Z)(m,[["render",_],["__scopeId","data-v-6eb5bac2"]]);var g=w;const b=a=>((0,d.dD)("data-v-04e8b8b2"),a=a(),(0,d.Cn)(),a),k={class:"app-header"},y={class:"logo"},C=b((()=>(0,d._)("div",{class:"search"},[(0,d._)("i",{class:"iconfont icon-search"}),(0,d._)("input",{type:"text",placeholder:"搜一搜"})],-1)));function A(a,t,e,s,c,r){const i=(0,d.up)("RouterLink"),n=(0,d.up)("AppHeaderNav"),l=(0,d.up)("AppHeaderCart");return(0,d.wg)(),(0,d.iD)("header",k,[(0,d._)("div",{class:(0,o.C_)(["container",{hide:s.y>=78}])},[(0,d._)("h1",y,[(0,d.Wm)(i,{to:"/"},{default:(0,d.w5)((()=>[(0,d.Uk)("小兔鲜")])),_:1})]),(0,d.Wm)(n),C,(0,d.Wm)(l)],2)])}var H=e(8401);const j={class:"app-header-nav"},W={class:"home"},D=["onMousemove","onMouseleave"],$=["src"];function L(a,t,e,s,c,r){const i=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d._)("ul",j,[(0,d._)("li",W,[(0,d.Wm)(i,{to:"/"},{default:(0,d.w5)((()=>[(0,d.Uk)("首页")])),_:1})]),((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(s.HeaderList,((a,t)=>((0,d.wg)(),(0,d.iD)("li",{key:a.id,onMousemove:t=>s.show(a),onMouseleave:t=>s.hide(a)},[(0,d.Wm)(i,{onClick:t=>s.hide(a),to:`/category/${a.id}`},{default:(0,d.w5)((()=>[(0,d.Uk)((0,o.zw)(a.name),1)])),_:2},1032,["onClick","to"]),(0,d._)("div",{class:(0,o.C_)(["layer",{open:a.open}])},[(0,d._)("ul",null,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(a.children,(t=>((0,d.wg)(),(0,d.iD)("li",{key:t.id},[(0,d.Wm)(i,{onClick:t=>s.hide(a),to:`/category/sub/${t.id}`},{default:(0,d.w5)((()=>[(0,d._)("img",{src:t.picture,alt:""},null,8,$),(0,d._)("p",null,(0,o.zw)(t.name),1)])),_:2},1032,["onClick","to"])])))),128))])],2)],40,D)))),128))])])}var z={name:"AppHeaderNav",setup(){const a=(0,c.oR)();let t=(0,d.Fl)((()=>a.state.category.list)),e=t=>{a.commit("category/Show",t)},s=t=>{a.commit("category/Hide",t)};return{HeaderList:t,show:e,hide:s}}};const R=(0,h.Z)(z,[["render",L],["__scopeId","data-v-1896c3a9"]]);var x=R;const U=a=>((0,d.dD)("data-v-2bd0d0a2"),a=a(),(0,d.Cn)(),a),F={class:"cart"},I=U((()=>(0,d._)("i",{class:"iconfont icon-cart"},null,-1))),T={key:0,class:"layer"},Z={class:"list"},N=["src"],P={class:"center"},Y={class:"name ellipsis-2"},M={class:"attr ellipsis"},S={class:"right"},q={class:"price"},K={class:"count"},E=["onClick"],B={class:"foot"},V={class:"total"};function X(a,t,e,s,c,r){const i=(0,d.up)("RouterLink"),n=(0,d.up)("XtxButton");return(0,d.wg)(),(0,d.iD)("div",F,[(0,d.Wm)(i,{to:"/cart",class:"curr"},{default:(0,d.w5)((()=>[I,(0,d._)("em",null,(0,o.zw)(a.$store.getters["cart/validTotal"]),1)])),_:1}),a.$store.getters["cart/validTotal"]&&"/cart"!==a.$route.path?((0,d.wg)(),(0,d.iD)("div",T,[(0,d._)("div",Z,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(a.$store.getters["cart/validList"],((a,t)=>((0,d.wg)(),(0,d.iD)("div",{class:"item",key:t},[(0,d.Wm)(i,{to:`/product/${a.id}`},{default:(0,d.w5)((()=>[(0,d._)("img",{src:a.picture,alt:""},null,8,N),(0,d._)("div",P,[(0,d._)("p",Y,(0,o.zw)(a.name),1),(0,d._)("p",M,(0,o.zw)(a.attrsText),1)]),(0,d._)("div",S,[(0,d._)("p",q,"¥"+(0,o.zw)(a.nowPrice),1),(0,d._)("p",K,(0,o.zw)(a.count),1)])])),_:2},1032,["to"]),(0,d._)("i",{onClick:t=>s.deleteCart(a.skuId),class:"iconfont icon-close-new"},"×",8,E)])))),128))]),(0,d._)("div",B,[(0,d._)("div",V,[(0,d._)("p",null,"共 "+(0,o.zw)(a.$store.getters["cart/validTotal"])+" 件商品",1),(0,d._)("p",null,"¥"+(0,o.zw)(a.$store.getters["cart/validAmount"]),1)]),(0,d.Wm)(n,{type:"plain",onClick:t[0]||(t[0]=t=>a.$router.push("/cart"))},{default:(0,d.w5)((()=>[(0,d.Uk)("去购物车结算")])),_:1})])])):(0,d.kq)("",!0)])}var G={name:"AppHeaderCart",setup(){const a=(0,c.oR)(),{proxy:t}=(0,d.FN)();a.dispatch("cart/findCartList").then((()=>{t.$message({type:"success",text:"更新购物车成功"})}));const e=e=>{a.dispatch("cart/deleteCart",e).then((()=>{t.$message({type:"success",text:"删除成功"})})).catch((a=>{t.$message({type:"error",text:"删除失败"})}))};return{deleteCart:e}}};const J=(0,h.Z)(G,[["render",X],["__scopeId","data-v-2bd0d0a2"]]);var O=J,Q={name:"AppHeader",components:{AppHeaderNav:x,AppHeaderCart:O},setup(){const{y:a}=(0,H.b)();return{y:a}}};const aa=(0,h.Z)(Q,[["render",A],["__scopeId","data-v-04e8b8b2"]]);var ta=aa,ea=e(9242);const da={class:"container"},sa={class:"left"};function ca(a,t,e,s,c,r){const i=(0,d.up)("RouterLink"),n=(0,d.up)("AppHeaderNav");return(0,d.wg)(),(0,d.iD)("div",{class:(0,o.C_)(["app-header-sticky",{show:s.y>=78}])},[(0,d.wy)((0,d._)("div",da,[(0,d.Wm)(i,{class:"logo",to:"/"}),(0,d.Wm)(n),(0,d._)("div",sa,[(0,d.Wm)(i,{to:"/"},{default:(0,d.w5)((()=>[(0,d.Uk)("品牌")])),_:1}),(0,d.Wm)(i,{to:"/"},{default:(0,d.w5)((()=>[(0,d.Uk)("专题")])),_:1})])],512),[[ea.F8,s.y>=78]])],2)}var oa={name:"AppHeaderSticky",components:{AppHeaderNav:x},setup(){const{y:a}=(0,H.b)();return{y:a}}};const ra=(0,h.Z)(oa,[["render",ca],["__scopeId","data-v-f3a3f556"]]);var ia=ra;const na={class:"app-footer"},la=(0,d.uE)('<div class="contact" data-v-2e3467d2><div class="container" data-v-2e3467d2><dl data-v-2e3467d2><dt data-v-2e3467d2>客户服务</dt><dd data-v-2e3467d2><i class="iconfont icon-kefu" data-v-2e3467d2></i> 在线客服</dd><dd data-v-2e3467d2><i class="iconfont icon-question" data-v-2e3467d2></i> 问题反馈</dd></dl><dl data-v-2e3467d2><dt data-v-2e3467d2>关注我们</dt><dd data-v-2e3467d2><i class="iconfont icon-weixin" data-v-2e3467d2></i> 公众号</dd><dd data-v-2e3467d2><i class="iconfont icon-weibo" data-v-2e3467d2></i> 微博</dd></dl><dl data-v-2e3467d2><dt data-v-2e3467d2>下载APP</dt><dd class="qrcode" data-v-2e3467d2><img src="" data-v-2e3467d2></dd><dd class="download" data-v-2e3467d2><span data-v-2e3467d2>扫描二维码</span><span data-v-2e3467d2>立马下载APP</span><a href="javascript:;" data-v-2e3467d2>下载页面</a></dd></dl><dl data-v-2e3467d2><dt data-v-2e3467d2>服务热线</dt><dd class="hotline" data-v-2e3467d2>400-0000-000 <small data-v-2e3467d2>周一至周日 8:00-18:00</small></dd></dl></div></div><div class="extra" data-v-2e3467d2><div class="container" data-v-2e3467d2><div class="slogan" data-v-2e3467d2><a href="javascript:;" data-v-2e3467d2><i class="iconfont icon-footer01" data-v-2e3467d2></i><span data-v-2e3467d2>价格亲民</span></a><a href="javascript:;" data-v-2e3467d2><i class="iconfont icon-footer02" data-v-2e3467d2></i><span data-v-2e3467d2>物流快捷</span></a><a href="javascript:;" data-v-2e3467d2><i class="iconfont icon-footer03" data-v-2e3467d2></i><span data-v-2e3467d2>品质新鲜</span></a></div><div class="copyright" data-v-2e3467d2><p data-v-2e3467d2><a href="javascript:;" data-v-2e3467d2>关于我们</a><a href="javascript:;" data-v-2e3467d2>帮助中心</a><a href="javascript:;" data-v-2e3467d2>售后服务</a><a href="javascript:;" data-v-2e3467d2>配送与验收</a><a href="javascript:;" data-v-2e3467d2>商务合作</a><a href="javascript:;" data-v-2e3467d2>搜索推荐</a><a href="javascript:;" data-v-2e3467d2>友情链接</a></p><p data-v-2e3467d2>CopyRight © 小兔鲜儿</p></div></div></div>',2),pa=[la];function va(a,t,e,s,c,o){return(0,d.wg)(),(0,d.iD)("footer",na,pa)}var ua={name:"AppFooter"};const _a=(0,h.Z)(ua,[["render",va],["__scopeId","data-v-2e3467d2"]]);var fa=_a,ma={name:"Layout",components:{AppTopnav:g,AppHeader:ta,AppFooter:fa,AppHeaderSticky:ia},setup(){const a=(0,c.oR)();return a.dispatch("category/getList"),{}}};const ha=(0,h.Z)(ma,[["render",s]]);var wa=ha}}]);