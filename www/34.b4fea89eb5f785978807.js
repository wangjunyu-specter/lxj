(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{HOtj:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=t("ZZ/e"),u=t("nbWp"),i=t("N+K7"),c=t("Ud6+"),a=function(){function n(n,l,t,o,e){this.nav=n,this.ztlist=l,this.activeroute=t,this.http=o,this.topage=e}return n.prototype.ngOnInit=function(){this.getParam()},n.prototype.getParam=function(){var n=this;this.activeroute.queryParams.subscribe(function(l){console.log(l.id),n.ztlist.getData(l.id).then(function(l){n.setData(l)}).catch(function(l){console.log(l),n.nav.back()})},function(n){})},n.prototype.setData=function(n){console.log(n),this.title=n.title,this.banner=n.pic;var l=n.sort_goods_arr;l[0]&&l[0].goods&&l[0].goods.length>0&&(1===l[0].goods.length?(this.settopone(l[0].goods[0]),this.banner||(this.banner1=this.topone.goods_img)):this.settopone(l[0].goods.splice(0,1)[0])),this.list=l},n.prototype.settopone=function(n){delete n.goods_thumb,this.topone=n,this.topone.promote_price&&"0"!==this.topone.promote_price&&this.topone.promote_end_date&&this.setXstime()},n.prototype.setXstime=function(){var n=this,l=setInterval(function(){var t=n.topone.promote_end_date,o=Date.parse((new Date).toString()),e=parseInt(((Number(t)-Number(o))/1e3).toString(),10),u=Math.floor(e/86400),i=e%86400,c=Math.floor(i/3600);i%=3600;var a=Math.floor(i/60),r=parseInt((i%60).toString(),10);n.xsHouse=c>=10?c.toString():"0"+c,n.xsMin=a>=10?a.toString():"0"+a,n.xsSec=r>=10?r.toString():"0"+r,n.xsday=u.toString(),0===u&&0===c&&0===a&&r<=0&&clearInterval(l)},1e3)},n.prototype.logScrolling=function(n){var l=n.detail.scrollTop;if(this.scroolold){if(this.scroolold>44&&l>44)return this.scroolold=l,!1;this.scroolold=l}else this.scroolold=l;this.setNavstatus((l<44?2*l/100:1).toString())},n.prototype.setNavstatus=function(n){document.querySelector("ion-toolbar").style.setProperty("--opacity",n)},n.prototype.goBack=function(){this.nav.back()},n.prototype.openpage=function(n){this.toPage(2,n.goods_id)},n.prototype.toPage=function(n,l,t){console.log(n),"string"==typeof n&&(n=Number(n)),this.topage.toPage(n,l,t)},n}(),r=function(){return function(){}}(),p=t("pMnS"),s=t("Ip0R"),b=t("ZmNk"),g=t("OKDh"),d=t("7HCg"),f=t("pJE7"),x=t("oBZk"),m=t("ZYCi"),h=o.nb({encapsulation:0,styles:[[".search-bar[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;color:#fff;padding:0 10px}.search-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{font-size:var(--ion-title);display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.search-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:12px;margin-left:5px}.search-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:19px}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{flex:1;margin:0 15px;height:27px;box-sizing:border-box;text-align:center;line-height:27px}ion-toolbar[_ngcontent-%COMP%]{--background:linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));--opacity:0}.yhtime-box[_ngcontent-%COMP%]{margin-top:-20px;position:relative;z-index:100;width:100%}.yhtime-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{position:absolute;width:100%;height:50%;top:10%;left:0;display:flex;align-items:stretch}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-end;color:#fff}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:var(--ion-text)}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{padding-left:15px;margin-right:10px}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type{font-size:26px;font-weight:600;margin-bottom:-3px}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-end;font-size:var(--ion-text);color:#fff;padding-right:15px}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .time-box[_ngcontent-%COMP%]{margin-left:5px}.yhtime-box[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .time-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(odd){background-color:#fff;padding:0 2px;border-radius:3px;color:#1db9bd;margin:0 3px}.title-box[_ngcontent-%COMP%]{box-shadow:0 5px 5px #f1f1f1;background-color:#fff;position:relative;margin-top:-15px;z-index:0}.title-box.title-top[_ngcontent-%COMP%]{margin-top:-12px}.top-box[_ngcontent-%COMP%]{margin-top:-44px;background:url(/assets/ztbg.png) left top/100% 80% no-repeat;background-size:100% calc(100% - 50px);background-size:100% -webkit-calc(100% - 50px)}.top-box[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{margin-top:35px}.top-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]],data:{}});function _(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,t.http.zdomain+t.banner)})}function O(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,t.http.zdomain+t.banner1)})}function P(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.xsday)})}function C(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[":"]))],null,null)}function M(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,27,"div",[["class","yhtime-box"]],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,0,"img",[["alt",""],["src","./assets/cxbar.svg"]],null,null,null,null,null)),(n()(),o.pb(2,0,null,null,25,"div",[["class","text-content"]],null,null,null,null,null)),(n()(),o.pb(3,0,null,null,6,"div",[["class","left"]],null,null,null,null,null)),(n()(),o.pb(4,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,["\u9650\u65f6\u4ef7"])),(n()(),o.pb(6,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,["\xa5"])),(n()(),o.pb(8,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(9,null,["",""])),(n()(),o.pb(10,0,null,null,17,"div",[["class","right"]],null,null,null,null,null)),(n()(),o.pb(11,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,["\u5269\u4f59\u65f6\u95f4"])),(n()(),o.pb(13,0,null,null,14,"div",[["class","time-box"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,P)),o.ob(15,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,C)),o.ob(17,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(18,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(19,null,["",""])),(n()(),o.pb(20,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[":"])),(n()(),o.pb(22,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(23,null,["",""])),(n()(),o.pb(24,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[":"])),(n()(),o.pb(26,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Hb(27,null,["",""]))],function(n,l){var t=l.component;n(l,15,0,t.xsday&&0!=t.xsday),n(l,17,0,t.xsday&&0!=t.xsday)},function(n,l){var t=l.component;n(l,9,0,t.topone.promote_price),n(l,19,0,t.xsHouse),n(l,23,0,t.xsMin),n(l,27,0,t.xsSec)})}function y(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-productlist",[],null,null,null,b.b,b.a)),o.ob(1,114688,null,0,g.a,[i.a],{data:[0,"data"]},null)],function(n,l){n(l,1,0,l.component.topone)},null)}function v(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,4,"div",[["class","title-box"]],null,null,null,null,null)),o.ob(1,278528,null,0,s.h,[o.s,o.t,o.k,o.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Cb(2,{"title-top":0}),(n()(),o.gb(16777216,null,null,1,null,y)),o.ob(4,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,o=n(l,2,0,!t.topone.promote_price||"0"==t.topone.promote_price||!t.topone.promote_end_date);n(l,1,0,"title-box",o),n(l,4,0,t.topone)},null)}function k(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-productlist",[],null,[[null,"open"]],function(n,l,t){var o=!0;return"open"===l&&(o=!1!==n.component.openpage(t)&&o),o},b.b,b.a)),o.ob(1,114688,null,0,g.a,[i.a],{data:[0,"data"]},{open:"open"})],function(n,l){n(l,1,0,l.context.$implicit)},null)}function w(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,4,"div",[["padding-end",""],["padding-start",""],["padding-top",""]],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,1,"app-pagetitle",[],null,null,null,d.b,d.a)),o.ob(2,114688,null,0,f.a,[],{myname:[0,"myname"],type:[1,"type"],nopadding:[2,"nopadding"]},null),(n()(),o.gb(16777216,null,null,1,null,k)),o.ob(4,278528,null,0,s.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.context.$implicit.title,!0,!0),n(l,4,0,l.context.$implicit.goods)},null)}function I(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,x.sb,x.s)),o.ob(1,49152,null,0,e.C,[o.h,o.k],{mode:[0,"mode"],translucent:[1,"translucent"]},null),(n()(),o.pb(2,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,x.Yb,x.Y)),o.ob(3,49152,null,0,e.Cb,[o.h,o.k],{mode:[0,"mode"]},null),(n()(),o.pb(4,0,null,0,8,"div",[["class","search-bar"]],null,null,null,null,null)),(n()(),o.pb(5,0,null,null,2,"div",[["class","left"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.goBack()&&o),o},null,null)),(n()(),o.pb(6,0,null,null,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,x.tb,x.t)),o.ob(7,49152,null,0,e.D,[o.h,o.k],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),o.pb(8,0,null,null,1,"div",[["class","center"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.toPage(5)&&o),o},null,null)),(n()(),o.Hb(9,null,[" "," "])),(n()(),o.pb(10,0,null,null,2,"div",[["class","right"]],null,null,null,null,null)),(n()(),o.pb(11,0,null,null,1,"ion-icon",[["mode","ios"],["name","more"]],null,null,null,x.tb,x.t)),o.ob(12,49152,null,0,e.D,[o.h,o.k],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),o.pb(13,0,null,null,13,"ion-content",[],null,[[null,"ionScroll"]],function(n,l,t){var o=!0;return"ionScroll"===l&&(o=!1!==n.component.logScrolling(t)&&o),o},x.ob,x.o)),o.ob(14,49152,null,0,e.v,[o.h,o.k],{fullscreen:[0,"fullscreen"],scrollEvents:[1,"scrollEvents"]},null),(n()(),o.pb(15,0,null,0,9,"div",[["class","top-box"],["padding",""]],null,null,null,null,null)),(n()(),o.pb(16,0,null,null,4,"div",[["class","banner"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,_)),o.ob(18,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,O)),o.ob(20,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,M)),o.ob(22,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,v)),o.ob(24,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,w)),o.ob(26,278528,null,0,s.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0,"ios",!0),n(l,3,0,"ios"),n(l,7,0,"ios","arrow-back"),n(l,12,0,"ios","more"),n(l,14,0,!0,!0),n(l,18,0,t.banner),n(l,20,0,!t.banner),n(l,22,0,t.topone&&t.topone.promote_price&&"0"!==t.topone.promote_price&&t.topone.promote_end_date),n(l,24,0,t.topone),n(l,26,0,t.list)},function(n,l){n(l,9,0,l.component.title||"\u4e13\u9898\u9875")})}function H(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-zt",[],null,null,null,I,h)),o.ob(1,114688,null,0,a,[e.Ib,u.a,m.a,i.a,c.a],null,null)],function(n,l){n(l,1,0)},null)}var j=o.lb("app-zt",a,H,{},{},[]),z=t("gIcY"),S=t("iTUp"),J=t("FUS3"),L=t("j1ZV");t.d(l,"ZtPageModuleNgFactory",function(){return D});var D=o.mb(r,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[p.a,j]],[3,o.j],o.x]),o.xb(4608,s.l,s.k,[o.u,[2,s.s]]),o.xb(4608,z.s,z.s,[]),o.xb(4608,e.c,e.c,[o.z,o.g]),o.xb(4608,e.Hb,e.Hb,[e.c,o.j,o.q,s.c]),o.xb(4608,e.Lb,e.Lb,[e.c,o.j,o.q,s.c]),o.xb(1073742336,s.b,s.b,[]),o.xb(1073742336,z.p,z.p,[]),o.xb(1073742336,z.d,z.d,[]),o.xb(1073742336,e.Eb,e.Eb,[]),o.xb(1073742336,S.a,S.a,[]),o.xb(1073742336,J.a,J.a,[]),o.xb(1073742336,L.a,L.a,[]),o.xb(1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),o.xb(1073742336,r,r,[]),o.xb(1024,m.k,function(){return[[{path:"",component:a}]]},[])])})}}]);