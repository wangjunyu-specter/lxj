(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{FUS3:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},OKDh:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t("CcnG"),u=(t("N+K7"),function(){function n(n){this.http=n,this.open=new e.EventEmitter}return n.prototype.ngOnInit=function(){console.log(this.data)},n.prototype.openpage=function(){console.log(this.data),this.open.emit(this.data)},n}())},VMEZ:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("7UTA"),o=t("N+K7"),i=t("ZZ/e"),r=function(){function n(n,l,t,e){this.lljl=n,this.http=l,this.nav=t,this.route=e}return n.prototype.ionViewDidEnter=function(){this.getHttp()},n.prototype.ngOnInit=function(){this.page=0,this.limit=20},n.prototype.getHttp=function(n){var l=this,t=this.lljl.getList(this.page,this.limit);if(console.log(t),!t||0===t.length)return!1;this.http.getpostformdata(this.http.getlljlList,{category:0},{idlist:t}).subscribe(function(t){l.list=t.data,n&&n.target.complete()},function(l){n&&n.target.complete()})},n.prototype.goBack=function(){this.nav.back()},n.prototype.doRefresh=function(n){this.page=0,this.getHttp(n)},n.prototype.loadData=function(n){this.page++,this.getHttp(n)},n.prototype.openpage=function(n){console.log(n),this.route.navigate(["/productcontent"],{queryParams:{id:n.goods_id,suppid:n.supplier_id}})},n}(),a=function(){return function(){}}(),c=t("pMnS"),d=t("ZmNk"),s=t("OKDh"),g=t("oBZk"),f=t("Ip0R"),p=t("ZYCi"),m=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function h(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-productlist",[],null,[[null,"open"]],function(n,l,t){var e=!0;return"open"===l&&(e=!1!==n.component.openpage(t)&&e),e},d.b,d.a)),e["\u0275did"](1,114688,null,0,s.a,[o.a],{data:[0,"data"]},{open:"open"})],function(n,l){n(l,1,0,l.context.$implicit)},null)}function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,12,"ion-header",[],null,null,null,g.vb,g.s)),e["\u0275did"](1,49152,null,0,i.D,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](2,0,null,0,10,"ion-toolbar",[],null,null,null,g.fc,g.cb)),e["\u0275did"](3,49152,null,0,i.Eb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,g.jb,g.g)),e["\u0275did"](5,49152,null,0,i.n,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e},g.ib,g.f)),e["\u0275did"](7,49152,null,0,i.m,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"],["slot","icon-only"]],null,null,null,g.wb,g.t)),e["\u0275did"](9,49152,null,0,i.E,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),e["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,g.dc,g.ab)),e["\u0275did"](11,49152,null,0,i.Cb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275ted"](-1,0,["\u6d4f\u89c8\u8bb0\u5f55"])),(n()(),e["\u0275eld"](13,0,null,null,13,"ion-content",[],null,null,null,g.rb,g.o)),e["\u0275did"](14,49152,null,0,i.w,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](15,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,t){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.doRefresh(t)&&e),e},g.Nb,g.J)),e["\u0275did"](16,49152,null,0,i.fb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](17,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","\u65c5\u884c\u5bb6"],["refreshingSpinner","crescent"],["refreshingText","\u66f4\u65b0\u4e2d..."]],null,null,null,g.Mb,g.K)),e["\u0275did"](18,49152,null,0,i.gb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),e["\u0275eld"](19,0,null,0,3,"div",[["class","list-content"],["padding",""]],null,null,null,null,null)),e["\u0275did"](20,16384,null,0,i.f,[e.ElementRef],null,null),(n()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](22,278528,null,0,f.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](23,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],function(n,l,t){var e=!0;return"ionInfinite"===l&&(e=!1!==n.component.loadData(t)&&e),e},g.zb,g.v)),e["\u0275did"](24,49152,null,0,i.G,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{threshold:[0,"threshold"]},null),(n()(),e["\u0275eld"](25,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","crescent"],["loadingText","\u52a0\u8f7d\u66f4\u591a..."]],null,null,null,g.yb,g.w)),e["\u0275did"](26,49152,null,0,i.H,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],function(n,l){var t=l.component;n(l,9,0,"ios","arrow-back"),n(l,18,0,"arrow-dropdown","\u65c5\u884c\u5bb6","crescent","\u66f4\u65b0\u4e2d..."),n(l,22,0,t.list),n(l,24,0,"100px"),n(l,26,0,"crescent","\u52a0\u8f7d\u66f4\u591a...")},null)}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-browse-records",[],null,null,null,C,m)),e["\u0275did"](1,114688,null,0,r,[u.a,o.a,i.Kb,p.n],null,null)],function(n,l){n(l,1,0)},null)}var b=e["\u0275ccf"]("app-browse-records",r,_,{},{},[]),v=t("gIcY"),x=t("hoFm"),O=t("iTUp"),M=t("FUS3"),R=t("j1ZV");t.d(l,"BrowseRecordsPageModuleNgFactory",function(){return P});var P=e["\u0275cmf"](a,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,b]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[e.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,v.t,v.t,[]),e["\u0275mpd"](4608,i.c,i.c,[e.NgZone,e.ApplicationRef]),e["\u0275mpd"](4608,i.Jb,i.Jb,[i.c,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,i.Nb,i.Nb,[i.c,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,x.a,x.a,[]),e["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),e["\u0275mpd"](1073742336,v.q,v.q,[]),e["\u0275mpd"](1073742336,v.d,v.d,[]),e["\u0275mpd"](1073742336,i.Gb,i.Gb,[]),e["\u0275mpd"](1073742336,O.a,O.a,[]),e["\u0275mpd"](1073742336,M.a,M.a,[]),e["\u0275mpd"](1073742336,R.a,R.a,[]),e["\u0275mpd"](1073742336,p.p,p.p,[[2,p.v],[2,p.n]]),e["\u0275mpd"](1073742336,a,a,[]),e["\u0275mpd"](1024,p.l,function(){return[[{path:"",component:r}]]},[])])})},ZmNk:function(n,l,t){"use strict";var e=t("CcnG"),u=t("oBZk"),o=t("ZZ/e"),i=t("Ip0R"),r=t("n/qi"),a=t("lfyg");t("OKDh"),t("N+K7"),t.d(l,"a",function(){return c}),t.d(l,"b",function(){return T});var c=e["\u0275crt"]({encapsulation:0,styles:[['@charset "UTF-8";.list-box[_ngcontent-%COMP%]{padding:16px 0;border-bottom:1px solid var(--ion-color-light);width:100%;display:flex}.list-box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:120px;height:120px;display:flex}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;padding-left:10px;padding-right:10px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:var(--ion-title);font-weight:600;position:relative}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{line-height:20px}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.wrap[_ngcontent-%COMP%]{max-height:40px;overflow:hidden}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.hasimg[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-indent:45px}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.wrap[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{float:right;margin:0 0 0 -5px;padding:0;width:100%;word-break:break-all;height:45px;overflow:hidden}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.wrap[_ngcontent-%COMP%]::before{float:left;width:5px;content:\'\'}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.wrap[_ngcontent-%COMP%]::after{float:right;content:"...";height:18px;line-height:18px;width:3em;margin-left:-3em;position:relative;left:100%;top:-20px;padding-right:5px;text-align:right;background:linear-gradient(to right,transparent,#fff 55%)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;position:absolute;top:1px;left:0}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bq[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap;margin-top:5px}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bq[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;padding:2px 5px;background-color:rgba(var(--ion-color-success-rgb),.3);margin-right:5px;color:var(--ion-color-secondary);font-size:var(--ion-sm-text);margin-bottom:5px;border-radius:5px}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);color:var(--ion-color-medium);margin-top:0}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .right-f[_ngcontent-%COMP%]{width:100%}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{width:100%;font-size:var(--ion-sm-text);color:var(--ion-color-tertiary);display:flex;flex-direction:row;justify-content:space-between;align-items:center}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);color:var(--ion-color-medium)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--ion-color-success)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px;color:var(--ion-color-medium);font-size:var(--ion-sm-text)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{color:var(--ion-color-danger);font-size:var(--ion-title)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]   span.oldprice[_ngcontent-%COMP%]{text-decoration:line-through}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-size:var(--ion-sm-text);color:var(--ion-color-tertiary)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:13px;margin-right:5px}']],data:{}});function d(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),e["\u0275ppd"](1,2)],null,function(n,l){var t=l.component,u=e["\u0275inlineInterpolate"](1,"",e["\u0275unv"](l,0,0,n(l,1,0,e["\u0275nov"](l.parent.parent,0),t.data.goods_thumb||t.data.thumb,t.http.zdomain)),"");n(l,0,0,u)})}function s(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"ion-img",[],null,null,null,u.xb,u.u)),e["\u0275did"](1,49152,null,0,o.F,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{src:[0,"src"]},null),e["\u0275ppd"](2,2)],function(n,l){var t=l.component,u=e["\u0275unv"](l,1,0,n(l,2,0,e["\u0275nov"](l.parent.parent,0),t.data.goods_thumb||t.data.thumb,t.http.zdomain));n(l,1,0,u)},null)}function g(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","left"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,d)),e["\u0275did"](2,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,!t.imgtype),n(l,4,0,t.imgtype)},null)}function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["src","./assets/jx.svg"]],null,null,null,null,null))],null,null)}function p(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["src","./assets/rx.svg"]],null,null,null,null,null))],null,null)}function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,"div",[["class","bq"]],null,null,null,null,null))],null,null)}function h(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[["color","success"]],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit.tag_words)})}function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.data.goods_attr_str)})}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","bq"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](2,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.data.tags),n(l,4,0,t.isshowattr)},null)}function b(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[["color","success"]],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.data.goods_attr_str)})}function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","bq"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,2,null,b)),e["\u0275did"](2,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275ppd"](3,1),(n()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](5,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,u=e["\u0275unv"](l,2,0,n(l,3,0,e["\u0275nov"](l.parent,1),t.data.keywords));n(l,2,0,u),n(l,5,0,t.isshowattr)},null)}function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["\xa5 ",""]))],null,function(n,l){n(l,1,0,l.component.price)})}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["[\u4f1a\u5458\u4e13\u4eab]"])),(n()(),e["\u0275ted"](3,null,["\xa5",""]))],null,function(n,l){n(l,3,0,l.component.data.rank_price)})}function R(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["\xa5 ",""]))],null,function(n,l){n(l,1,0,l.component.data.shop_price)})}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\u8d77"]))],null,null)}function w(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","oldprice"]],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["\u539f\u4ef7",""]))],null,function(n,l){n(l,1,0,l.component.data.market_price)})}function I(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[["color","medium"]],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["\u9650\u8d2d",""]))],null,function(n,l){n(l,1,0,l.component.data.buymax)})}function y(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","des"]],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.data.des)})}function N(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","footer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","./assets/dp.svg"]],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,["",""]))],null,function(n,l){n(l,2,0,l.component.data.supplier_name||"\u65c5\u884c\u5bb6")})}function T(n){return e["\u0275vid"](0,[e["\u0275pid"](0,r.a,[]),e["\u0275pid"](0,a.a,[]),(n()(),e["\u0275eld"](2,0,null,null,40,"div",[["class","list-box"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openpage()&&e),e},null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](5,0,null,null,37,"div",[["class","right"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,17,"div",[["class","right-t"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,10,"div",[["class","title wrap"]],null,null,null,null,null)),e["\u0275did"](8,278528,null,0,i.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](9,{hasimg:0}),e["\u0275did"](10,278528,null,0,i.NgStyle,[e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](11,{"margin-bottom":0}),(n()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](13,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](15,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](16,0,null,null,1,"p",[["class","text"]],null,null,null,null,null)),(n()(),e["\u0275ted"](17,null,["",""])),(n()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](19,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](21,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](23,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](24,0,null,null,18,"div",[["class","right-f"]],null,null,null,null,null)),(n()(),e["\u0275eld"](25,0,null,null,15,"div",[["class","price"]],null,null,null,null,null)),(n()(),e["\u0275eld"](26,0,null,null,12,"div",[["class","price-box"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](28,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](30,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](32,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](34,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](36,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](38,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](40,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](42,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,4,0,t.data.goods_thumb||t.data.thumb);var e=n(l,9,0,1==t.data.is_best||1==t.type||1!=t.data.is_best&&1==t.data.is_hot||2==t.type);n(l,8,0,"title wrap",e);var u=n(l,11,0,t.data.goods_thumb?0:"3px");n(l,10,0,u),n(l,13,0,1==t.data.is_best||1==t.type),n(l,15,0,1!=t.data.is_best&&1==t.data.is_hot||2==t.type),n(l,19,0,!t.ishw),n(l,21,0,t.ishw&&t.data.tags&&t.data.tags.length>0),n(l,23,0,t.ishw&&(!t.data.tags||0==t.data.tags.length)&&t.data.keywords),n(l,28,0,t.price),n(l,30,0,!t.price&&t.data.rank_price),n(l,32,0,!t.price&&!t.data.rank_price&&t.data.shop_price),n(l,34,0,!t.noshowmore),n(l,36,0,!t.showyj&&t.data.market_price&&t.data.shop_price!=t.data.market_price),n(l,38,0,t.data.buymax),n(l,40,0,t.data.des),n(l,42,0,t.data.supplier_name)},function(n,l){var t=l.component;n(l,17,0,t.data.name||t.data.short_name||t.data.goods_name)})}},hoFm:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t("CcnG"),u=function(){function n(){}return n.prototype.getEmoji=function(){return"\ud83d\ude00 \ud83d\ude03 \ud83d\ude04 \ud83d\ude01 \ud83d\ude06 \ud83d\ude05 \ud83d\ude02 \ud83e\udd23 \ud83d\ude0a \ud83d\ude07 \ud83d\ude42 \ud83d\ude43 \ud83d\ude09 \ud83d\ude0c \ud83d\ude0d \ud83d\ude18 \ud83d\ude17 \ud83d\ude19 \ud83d\ude1a \ud83d\ude0b \ud83d\ude1c \ud83d\ude1d \ud83d\ude1b \ud83e\udd11 \ud83e\udd17 \ud83e\udd13 \ud83d\ude0e \ud83e\udd21 \ud83e\udd20 \ud83d\ude0f \ud83d\ude12 \ud83d\ude1e \ud83d\ude14 \ud83d\ude1f \ud83d\ude15 \ud83d\ude41 \u2639\ufe0f \ud83d\ude23 \ud83d\ude16 \ud83d\ude2b \ud83d\ude29 \ud83d\ude24 \ud83d\ude20 \ud83d\ude21 \ud83d\ude36 \ud83d\ude10 \ud83d\ude11 \ud83d\ude2f \ud83d\ude26 \ud83d\ude27 \ud83d\ude2e \ud83d\ude32 \ud83d\ude35 \ud83d\ude33 \ud83d\ude31 \ud83d\ude28 \ud83d\ude30 \ud83d\ude22 \ud83d\ude25 \ud83e\udd24 \ud83d\ude2d \ud83d\ude13 \ud83d\ude2a \ud83d\ude34 \ud83d\ude44 \ud83e\udd14 \ud83e\udd25 \ud83d\ude2c \ud83e\udd10 \ud83e\udd22 \ud83e\udd27 \ud83d\ude37 \ud83e\udd12 \ud83e\udd15 \ud83d\ude08 \ud83d\udc7f \ud83d\udc79 \ud83d\udc7a \ud83d\udca9 \ud83d\udc7b \ud83d\udc80 \u2620\ufe0f \ud83d\udc7d \ud83d\udc7e \ud83e\udd16 \ud83c\udf83 \ud83d\ude3a \ud83d\ude38 \ud83d\ude39 \ud83d\ude3b \ud83d\ude3c \ud83d\ude3d \ud83d\ude40 \ud83d\ude3f \ud83d\ude3e \ud83d\udc50 \ud83d\ude4c \ud83d\udc4f \ud83d\ude4f \ud83e\udd1d \ud83d\udc4d \ud83d\udc4e \ud83d\udc4a \u270a \ud83e\udd1b \ud83e\udd1c \ud83e\udd1e \u270c\ufe0f \ud83e\udd18 \ud83d\udc4c \ud83d\udc48 \ud83d\udc49 \ud83d\udc46 \ud83d\udc47 \u261d\ufe0f \u270b \ud83e\udd1a \ud83d\udd90 \ud83d\udd96 \ud83d\udc4b \ud83e\udd19 \ud83d\udcaa \ud83d\udd95 \u270d\ufe0f \ud83e\udd33 \ud83d\udc85 \ud83d\udd96 \ud83d\udc84 \ud83d\udc8b \ud83d\udc44 \ud83d\udc45 \ud83d\udc42 \ud83d\udc43 \ud83d\udc63 \ud83d\udc41 \ud83d\udc40 \ud83d\udde3 \ud83d\udc64 \ud83d\udc65 \ud83d\udc76 \ud83d\udc66 \ud83d\udc67 \ud83d\udc68 \ud83d\udc69 \ud83d\udc71\u200d\u2640\ufe0f \ud83d\udc71 \ud83d\udc74 \ud83d\udc75 \ud83d\udc72 \ud83d\udc73\u200d\u2640\ufe0f \ud83d\udc73 \ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udc6e \ud83d\udc77\u200d\u2640\ufe0f \ud83d\udc77".split(" ")},n.ngInjectableDef=e.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iTUp:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},j1ZV:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},lfyg:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n.prototype.transform=function(n,l){return n&&"string"==typeof n?n.includes(" ")?n.split(" "):n.includes(",")?n.split(","):n.includes("|")?n.split("|"):n.split("\uff0c"):n},n}()},"n/qi":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n.prototype.transform=function(n,l){return console.log(l),n?n.startsWith("http")||n.startsWith("data:image")||n.startsWith("file:///")||n.startsWith("cdvfile://")?n:n.startsWith("/mobile")&&l&&l.endsWith("mobile/")?l+n.substring(7):n.startsWith("./../")?l+n.substring(5):l+n:"../../assets/mrtx.jpg"},n}()}}]);