(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7UTA":function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));var e=t("CcnG"),o=function(){function n(){this.idlist=new Set}return n.prototype.addjl=function(n){this.idlist.has(n)&&this.idlist.delete(n),this.idlist.add(n)},n.prototype.getList=function(n,l){var t=Array.from(this.idlist);console.log(t.slice());for(var e=[],o=0;o<l&&t[o+n*l];o++)e.push(t[o+n*l]);return e},n.prototype.clear=function(){this.idlist.clear()},n.ngInjectableDef=e["ɵɵdefineInjectable"]({factory:function(){return new n},token:n,providedIn:"root"}),n}()},FUS3:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){return function(){}}()},OKDh:function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));var e=t("CcnG"),o=(t("N+K7"),function(){function n(n){this.http=n,this.open=new e.EventEmitter}return n.prototype.ngOnInit=function(){console.log(this.data)},n.prototype.openpage=function(){console.log(this.data),this.open.emit(this.data)},n}())},VMEZ:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("7UTA"),u=t("N+K7"),i=t("ZZ/e"),r=function(){function n(n,l,t,e){this.lljl=n,this.http=l,this.nav=t,this.route=e}return n.prototype.ionViewDidEnter=function(){this.getHttp()},n.prototype.ngOnInit=function(){this.page=0,this.limit=20},n.prototype.getHttp=function(n){var l=this,t=this.lljl.getList(this.page,this.limit);if(console.log(t),!t||0===t.length)return!1;this.http.getpostformdata(this.http.getlljlList,{category:0},{idlist:t}).subscribe((function(t){l.list=t.data,n&&n.target.complete()}),(function(l){n&&n.target.complete()}))},n.prototype.goBack=function(){this.nav.back()},n.prototype.doRefresh=function(n){this.page=0,this.getHttp(n)},n.prototype.loadData=function(n){this.page++,this.getHttp(n)},n.prototype.openpage=function(n){console.log(n),this.route.navigate(["/productcontent"],{queryParams:{id:n.goods_id,suppid:n.supplier_id}})},n}(),a=function(){return function(){}}(),c=t("pMnS"),d=t("ZmNk"),s=t("OKDh"),g=t("oBZk"),f=t("Ip0R"),p=t("ZYCi"),m=e["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function h(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"app-productlist",[],null,[[null,"open"]],(function(n,l,t){var e=!0;return"open"===l&&(e=!1!==n.component.openpage(t)&&e),e}),d.b,d.a)),e["ɵdid"](1,114688,null,0,s.a,[u.a],{data:[0,"data"]},{open:"open"})],(function(n,l){n(l,1,0,l.context.$implicit)}),null)}function C(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,12,"ion-header",[],null,null,null,g.vb,g.s)),e["ɵdid"](1,49152,null,0,i.D,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["ɵeld"](2,0,null,0,10,"ion-toolbar",[],null,null,null,g.fc,g.cb)),e["ɵdid"](3,49152,null,0,i.Eb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["ɵeld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,g.jb,g.g)),e["ɵdid"](5,49152,null,0,i.n,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["ɵeld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e}),g.ib,g.f)),e["ɵdid"](7,49152,null,0,i.m,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["ɵeld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"],["slot","icon-only"]],null,null,null,g.wb,g.t)),e["ɵdid"](9,49152,null,0,i.E,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),e["ɵeld"](10,0,null,0,2,"ion-title",[],null,null,null,g.dc,g.ab)),e["ɵdid"](11,49152,null,0,i.Cb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["ɵted"](-1,0,["浏览记录"])),(n()(),e["ɵeld"](13,0,null,null,13,"ion-content",[],null,null,null,g.rb,g.o)),e["ɵdid"](14,49152,null,0,i.w,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["ɵeld"](15,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(n,l,t){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.doRefresh(t)&&e),e}),g.Nb,g.J)),e["ɵdid"](16,49152,null,0,i.fb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["ɵeld"](17,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","旅行家"],["refreshingSpinner","crescent"],["refreshingText","更新中..."]],null,null,null,g.Mb,g.K)),e["ɵdid"](18,49152,null,0,i.gb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),e["ɵeld"](19,0,null,0,3,"div",[["class","list-content"],["padding",""]],null,null,null,null,null)),e["ɵdid"](20,16384,null,0,i.f,[e.ElementRef],null,null),(n()(),e["ɵand"](16777216,null,null,1,null,h)),e["ɵdid"](22,278528,null,0,f.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["ɵeld"](23,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(n,l,t){var e=!0;return"ionInfinite"===l&&(e=!1!==n.component.loadData(t)&&e),e}),g.zb,g.v)),e["ɵdid"](24,49152,null,0,i.G,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{threshold:[0,"threshold"]},null),(n()(),e["ɵeld"](25,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","crescent"],["loadingText","加载更多..."]],null,null,null,g.yb,g.w)),e["ɵdid"](26,49152,null,0,i.H,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(n,l){var t=l.component;n(l,9,0,"ios","arrow-back"),n(l,18,0,"arrow-dropdown","旅行家","crescent","更新中..."),n(l,22,0,t.list),n(l,24,0,"100px"),n(l,26,0,"crescent","加载更多...")}),null)}function _(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"app-browse-records",[],null,null,null,C,m)),e["ɵdid"](1,114688,null,0,r,[o.a,u.a,i.Kb,p.n],null,null)],(function(n,l){n(l,1,0)}),null)}var v=e["ɵccf"]("app-browse-records",r,_,{},{},[]),b=t("gIcY"),x=t("hoFm"),O=t("iTUp"),M=t("FUS3"),R=t("j1ZV");t.d(l,"BrowseRecordsPageModuleNgFactory",(function(){return I}));var I=e["ɵcmf"](a,[],(function(n){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[c.a,v]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[e.LOCALE_ID,[2,f["ɵangular_packages_common_common_a"]]]),e["ɵmpd"](4608,b.s,b.s,[]),e["ɵmpd"](4608,i.c,i.c,[e.NgZone,e.ApplicationRef]),e["ɵmpd"](4608,i.Jb,i.Jb,[i.c,e.ComponentFactoryResolver,e.Injector]),e["ɵmpd"](4608,i.Nb,i.Nb,[i.c,e.ComponentFactoryResolver,e.Injector]),e["ɵmpd"](4608,x.a,x.a,[]),e["ɵmpd"](1073742336,f.CommonModule,f.CommonModule,[]),e["ɵmpd"](1073742336,b.r,b.r,[]),e["ɵmpd"](1073742336,b.d,b.d,[]),e["ɵmpd"](1073742336,i.Gb,i.Gb,[]),e["ɵmpd"](1073742336,O.a,O.a,[]),e["ɵmpd"](1073742336,M.a,M.a,[]),e["ɵmpd"](1073742336,R.a,R.a,[]),e["ɵmpd"](1073742336,p.p,p.p,[[2,p.u],[2,p.n]]),e["ɵmpd"](1073742336,a,a,[]),e["ɵmpd"](1024,p.l,(function(){return[[{path:"",component:r}]]}),[])])}))},ZmNk:function(n,l,t){"use strict";var e=t("CcnG"),o=t("oBZk"),u=t("ZZ/e"),i=t("Ip0R"),r=t("n/qi"),a=t("lfyg");t("OKDh"),t("N+K7"),t.d(l,"a",(function(){return c})),t.d(l,"b",(function(){return k}));var c=e["ɵcrt"]({encapsulation:0,styles:[['@charset "UTF-8";.list-box[_ngcontent-%COMP%]{padding:16px 0;border-bottom:1px solid var(--ion-color-light);width:100%;display:flex}.list-box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:120px;height:120px;display:flex}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;padding-left:10px;padding-right:10px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:var(--ion-title);font-weight:600;position:relative}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{line-height:20px}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.wrap[_ngcontent-%COMP%]{max-height:40px;overflow:hidden}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.hasimg[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-indent:45px}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.wrap[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{float:right;margin:0 0 0 -5px;padding:0;width:100%;word-break:break-all;max-height:38px;overflow:hidden}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.wrap[_ngcontent-%COMP%]::before{float:left;width:5px;content:""}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title.wrap[_ngcontent-%COMP%]::after{float:right;content:"...";height:18px;line-height:18px;width:3em;margin-left:-3em;position:relative;left:100%;top:-20px;padding-right:5px;text-align:right;background:linear-gradient(to right,transparent,#fff 55%)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;position:absolute;top:1px;left:0}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bq[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap;margin-top:5px}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bq[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;padding:2px 5px;background-color:rgba(var(--ion-color-success-rgb),.3);margin-right:5px;color:var(--ion-color-secondary);font-size:var(--ion-sm-text);margin-bottom:5px;border-radius:5px}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);color:var(--ion-color-medium);margin-top:0}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .right-f[_ngcontent-%COMP%]{width:100%}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{width:100%;font-size:var(--ion-sm-text);color:var(--ion-color-tertiary);display:flex;flex-direction:row;justify-content:space-between;align-items:center}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);color:var(--ion-color-medium)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--ion-color-success)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px;color:var(--ion-color-medium);font-size:var(--ion-sm-text)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{color:var(--ion-color-danger);font-size:var(--ion-title)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]   span.oldprice[_ngcontent-%COMP%]{text-decoration:line-through}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-size:var(--ion-sm-text);color:var(--ion-color-tertiary)}.list-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:13px;margin-right:5px}']],data:{}});function d(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),e["ɵppd"](1,2)],null,(function(n,l){var t=l.component,o=e["ɵinlineInterpolate"](1,"",e["ɵunv"](l,0,0,n(l,1,0,e["ɵnov"](l.parent.parent,0),t.data.goods_thumb||t.data.thumb,t.http.zdomain)),"");n(l,0,0,o)}))}function s(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,2,"ion-img",[],null,null,null,o.xb,o.u)),e["ɵdid"](1,49152,null,0,u.F,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{src:[0,"src"]},null),e["ɵppd"](2,2)],(function(n,l){var t=l.component,o=e["ɵunv"](l,1,0,n(l,2,0,e["ɵnov"](l.parent.parent,0),t.data.goods_thumb||t.data.thumb,t.http.zdomain));n(l,1,0,o)}),null)}function g(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,4,"div",[["class","left"]],null,null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,d)),e["ɵdid"](2,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,s)),e["ɵdid"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,2,0,!t.imgtype),n(l,4,0,t.imgtype)}),null)}function f(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,0,"img",[["alt",""],["src","./assets/jx.svg"]],null,null,null,null,null))],null,null)}function p(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,0,"img",[["alt",""],["src","./assets/rx.svg"]],null,null,null,null,null))],null,null)}function m(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,0,"div",[["class","bq"]],null,null,null,null,null))],null,null)}function h(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"span",[["color","success"]],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.context.$implicit.tag_words)}))}function C(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.data.goods_attr_str)}))}function _(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,4,"div",[["class","bq"]],null,null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,h)),e["ɵdid"](2,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,C)),e["ɵdid"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,2,0,t.data.tags),n(l,4,0,t.isshowattr)}),null)}function v(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"span",[["color","success"]],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.context.$implicit)}))}function b(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.data.goods_attr_str)}))}function x(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,5,"div",[["class","bq"]],null,null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,2,null,v)),e["ɵdid"](2,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["ɵppd"](3,1),(n()(),e["ɵand"](16777216,null,null,1,null,b)),e["ɵdid"](5,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component,o=e["ɵunv"](l,2,0,n(l,3,0,e["ɵnov"](l.parent,1),t.data.keywords));n(l,2,0,o),n(l,5,0,t.isshowattr)}),null)}function O(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["¥ ",""]))],null,(function(n,l){n(l,1,0,l.component.price)}))}function M(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e["ɵeld"](1,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),e["ɵted"](-1,null,["[会员专享]"])),(n()(),e["ɵted"](3,null,["¥",""]))],null,(function(n,l){n(l,3,0,l.component.data.rank_price)}))}function R(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["¥ ",""]))],null,(function(n,l){var t=l.component;n(l,1,0,t.data.promote_price>0?t.data.promote_price:t.data.shop_price)}))}function I(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["ɵted"](-1,null,["起"]))],null,null)}function P(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"span",[["class","oldprice"]],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["原价",""]))],null,(function(n,l){n(l,1,0,l.component.data.market_price)}))}function w(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"span",[["color","medium"]],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["限购",""]))],null,(function(n,l){n(l,1,0,l.component.data.buymax)}))}function y(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"div",[["class","des"]],null,null,null,null,null)),(n()(),e["ɵted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.data.des)}))}function N(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,2,"div",[["class","footer"]],null,null,null,null,null)),(n()(),e["ɵeld"](1,0,null,null,0,"img",[["alt",""],["src","./assets/dp.svg"]],null,null,null,null,null)),(n()(),e["ɵted"](2,null,["",""]))],null,(function(n,l){n(l,2,0,l.component.data.supplier_name||"旅行家")}))}function k(n){return e["ɵvid"](0,[e["ɵpid"](0,r.a,[]),e["ɵpid"](0,a.a,[]),(n()(),e["ɵeld"](2,0,null,null,42,"div",[["class","list-box"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openpage()&&e),e}),null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,g)),e["ɵdid"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵeld"](5,0,null,null,39,"div",[["class","right"]],null,null,null,null,null)),(n()(),e["ɵeld"](6,0,null,null,19,"div",[["class","right-t"]],null,null,null,null,null)),(n()(),e["ɵeld"](7,0,null,null,12,"div",[["class","title wrap"]],null,null,null,null,null)),e["ɵprd"](512,null,i["ɵNgClassImpl"],i["ɵNgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["ɵdid"](9,278528,null,0,i.NgClass,[i["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["ɵpod"](10,{hasimg:0}),e["ɵprd"](512,null,i["ɵNgStyleImpl"],i["ɵNgStyleR2Impl"],[e.ElementRef,e.KeyValueDiffers,e.Renderer2]),e["ɵdid"](12,278528,null,0,i.NgStyle,[i["ɵNgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),e["ɵpod"](13,{"margin-bottom":0}),(n()(),e["ɵand"](16777216,null,null,1,null,f)),e["ɵdid"](15,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,p)),e["ɵdid"](17,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵeld"](18,0,null,null,1,"p",[["class","text"]],null,null,null,null,null)),(n()(),e["ɵted"](19,null,["",""])),(n()(),e["ɵand"](16777216,null,null,1,null,m)),e["ɵdid"](21,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,_)),e["ɵdid"](23,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,x)),e["ɵdid"](25,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵeld"](26,0,null,null,18,"div",[["class","right-f"]],null,null,null,null,null)),(n()(),e["ɵeld"](27,0,null,null,15,"div",[["class","price"]],null,null,null,null,null)),(n()(),e["ɵeld"](28,0,null,null,12,"div",[["class","price-box"]],null,null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,O)),e["ɵdid"](30,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,M)),e["ɵdid"](32,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,R)),e["ɵdid"](34,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,I)),e["ɵdid"](36,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,P)),e["ɵdid"](38,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,w)),e["ɵdid"](40,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,y)),e["ɵdid"](42,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,N)),e["ɵdid"](44,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,t.data.goods_thumb||t.data.thumb);var e=n(l,10,0,1==t.data.is_best||1==t.type||1!=t.data.is_best&&1==t.data.is_hot||2==t.type);n(l,9,0,"title wrap",e);var o=n(l,13,0,t.data.goods_thumb?0:"3px");n(l,12,0,o),n(l,15,0,1==t.data.is_best||1==t.type),n(l,17,0,1!=t.data.is_best&&1==t.data.is_hot||2==t.type),n(l,21,0,!t.ishw),n(l,23,0,t.ishw&&t.data.tags&&t.data.tags.length>0),n(l,25,0,t.ishw&&(!t.data.tags||0==t.data.tags.length)&&t.data.keywords),n(l,30,0,t.price),n(l,32,0,!t.price&&t.data.rank_price),n(l,34,0,!t.price&&!t.data.rank_price&&t.data.shop_price),n(l,36,0,!t.noshowmore&&t.data.shop_price&&(t.data.shop_price<t.data.market_price||t.data.promote_price&&0!=t.data.promote_price&&t.data.promote_price<t.data.shop_price)),n(l,38,0,!t.showyj&&t.data.market_price&&0!=t.data.market_price&&t.data.shop_price!=t.data.market_price),n(l,40,0,t.data.buymax),n(l,42,0,t.data.des),n(l,44,0,t.data.supplier_name)}),(function(n,l){var t=l.component;n(l,19,0,t.data.name||t.data.short_name||t.data.goods_name)}))}},hoFm:function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));var e=t("CcnG"),o=function(){function n(){}return n.prototype.getEmoji=function(){return"😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷".split(" ")},n.ngInjectableDef=e["ɵɵdefineInjectable"]({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iTUp:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){return function(){}}()},j1ZV:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){return function(){}}()},lfyg:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){function n(){}return n.prototype.transform=function(n,l){return n&&"string"==typeof n?n.includes(" ")?n.split(" "):n.includes(",")?n.split(","):n.includes("|")?n.split("|"):n.split("，"):n},n}()},"n/qi":function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){function n(){}return n.prototype.transform=function(n,l){return console.log(l),n?n.startsWith("http")||n.startsWith("data:image")||n.startsWith("file:///")||n.startsWith("cdvfile://")?n:n.startsWith("/mobile")&&l&&l.endsWith("mobile/")?l+n.substring(7):n.startsWith("./../")?l+n.substring(5):l+n:"../../assets/mrtx.png"},n}()}}]);