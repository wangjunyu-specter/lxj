(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{FUS3:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){}}()},VMEZ:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("7UTA"),u=e("N+K7"),r=e("ZZ/e"),i=function(){function n(n,l,e,t){this.lljl=n,this.http=l,this.nav=e,this.route=t}return n.prototype.ionViewDidEnter=function(){this.getHttp()},n.prototype.ngOnInit=function(){this.page=0,this.limit=20},n.prototype.getHttp=function(n){var l=this,e=this.lljl.getList(this.page,this.limit);if(console.log(e),!(e=["292","293"])||0===e.length)return!1;this.http.getpostformdata(this.http.getlljlList,{category:0},{idlist:e}).subscribe(function(e){l.list=e.data,n&&n.target.complete()},function(l){n&&n.target.complete()})},n.prototype.goBack=function(){this.nav.back()},n.prototype.doRefresh=function(n){this.page=0,this.getHttp(n)},n.prototype.loadData=function(n){this.page++,this.getHttp(n)},n.prototype.openpage=function(n){console.log(n),this.route.navigate(["/productcontent"],{queryParams:{id:n.goods_id,suppid:n.supplier_id}})},n}(),c=function(){return function(){}}(),a=e("pMnS"),d=e("ZmNk"),p=e("OKDh"),s=e("oBZk"),f=e("Ip0R"),m=e("ZYCi"),g=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-productlist",[],null,[[null,"open"]],function(n,l,e){var t=!0;return"open"===l&&(t=!1!==n.component.openpage(e)&&t),t},d.b,d.a)),t["\u0275did"](1,114688,null,0,p.a,[u.a],{data:[0,"data"]},{open:"open"})],function(n,l){n(l,1,0,l.context.$implicit)},null)}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"ion-header",[],null,null,null,s.wb,s.s)),t["\u0275did"](1,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,10,"ion-toolbar",[],null,null,null,s.gc,s.cb)),t["\u0275did"](3,49152,null,0,r.Cb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,s.kb,s.g)),t["\u0275did"](5,49152,null,0,r.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t},s.jb,s.f)),t["\u0275did"](7,49152,null,0,r.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"],["slot","icon-only"]],null,null,null,s.xb,s.t)),t["\u0275did"](9,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,s.ec,s.ab)),t["\u0275did"](11,49152,null,0,r.Ab,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["\u6d4f\u89c8\u8bb0\u5f55"])),(n()(),t["\u0275eld"](13,0,null,null,12,"ion-content",[],null,null,null,s.sb,s.o)),t["\u0275did"](14,49152,null,0,r.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](15,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,e){var t=!0;return"ionRefresh"===l&&(t=!1!==n.component.doRefresh(e)&&t),t},s.Ob,s.J)),t["\u0275did"](16,49152,null,0,r.db,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](17,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","\u65c5\u884c\u5bb6"],["refreshingSpinner","crescent"],["refreshingText","\u66f4\u65b0\u4e2d..."]],null,null,null,s.Nb,s.K)),t["\u0275did"](18,49152,null,0,r.eb,[t.ChangeDetectorRef,t.ElementRef],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),t["\u0275eld"](19,0,null,0,2,"div",[["class","list-content"],["padding",""]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](21,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](22,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],function(n,l,e){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadData(e)&&t),t},s.Ab,s.v)),t["\u0275did"](23,49152,null,0,r.F,[t.ChangeDetectorRef,t.ElementRef],{threshold:[0,"threshold"]},null),(n()(),t["\u0275eld"](24,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","crescent"],["loadingText","\u52a0\u8f7d\u66f4\u591a..."]],null,null,null,s.zb,s.w)),t["\u0275did"](25,49152,null,0,r.G,[t.ChangeDetectorRef,t.ElementRef],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],function(n,l){var e=l.component;n(l,9,0,"ios","arrow-back"),n(l,18,0,"arrow-dropdown","\u65c5\u884c\u5bb6","crescent","\u66f4\u65b0\u4e2d..."),n(l,21,0,e.list),n(l,23,0,"100px"),n(l,25,0,"crescent","\u52a0\u8f7d\u66f4\u591a...")},null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-browse-records",[],null,null,null,b,g)),t["\u0275did"](1,114688,null,0,i,[o.a,u.a,r.Ib,m.m],null,null)],function(n,l){n(l,1,0)},null)}var v=t["\u0275ccf"]("app-browse-records",i,R,{},{},[]),C=e("gIcY"),_=e("hoFm"),D=e("iTUp"),w=e("FUS3"),k=e("j1ZV");e.d(l,"BrowseRecordsPageModuleNgFactory",function(){return y});var y=t["\u0275cmf"](c,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,v]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[t.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,C["\u0275angular_packages_forms_forms_j"],C["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,r.c,r.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.Hb,r.Hb,[r.c,t.ComponentFactoryResolver,t.Injector,f.DOCUMENT]),t["\u0275mpd"](4608,r.Lb,r.Lb,[r.c,t.ComponentFactoryResolver,t.Injector,f.DOCUMENT]),t["\u0275mpd"](4608,_.a,_.a,[]),t["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),t["\u0275mpd"](1073742336,C["\u0275angular_packages_forms_forms_bc"],C["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,C.FormsModule,C.FormsModule,[]),t["\u0275mpd"](1073742336,r.Eb,r.Eb,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,w.a,w.a,[]),t["\u0275mpd"](1073742336,k.a,k.a,[]),t["\u0275mpd"](1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),t["\u0275mpd"](1073742336,c,c,[]),t["\u0275mpd"](1024,m.k,function(){return[[{path:"",component:i}]]},[])])})},hoFm:function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("CcnG"),o=function(){function n(){}return n.prototype.getEmoji=function(){return"\ud83d\ude00 \ud83d\ude03 \ud83d\ude04 \ud83d\ude01 \ud83d\ude06 \ud83d\ude05 \ud83d\ude02 \ud83e\udd23 \ud83d\ude0a \ud83d\ude07 \ud83d\ude42 \ud83d\ude43 \ud83d\ude09 \ud83d\ude0c \ud83d\ude0d \ud83d\ude18 \ud83d\ude17 \ud83d\ude19 \ud83d\ude1a \ud83d\ude0b \ud83d\ude1c \ud83d\ude1d \ud83d\ude1b \ud83e\udd11 \ud83e\udd17 \ud83e\udd13 \ud83d\ude0e \ud83e\udd21 \ud83e\udd20 \ud83d\ude0f \ud83d\ude12 \ud83d\ude1e \ud83d\ude14 \ud83d\ude1f \ud83d\ude15 \ud83d\ude41 \u2639\ufe0f \ud83d\ude23 \ud83d\ude16 \ud83d\ude2b \ud83d\ude29 \ud83d\ude24 \ud83d\ude20 \ud83d\ude21 \ud83d\ude36 \ud83d\ude10 \ud83d\ude11 \ud83d\ude2f \ud83d\ude26 \ud83d\ude27 \ud83d\ude2e \ud83d\ude32 \ud83d\ude35 \ud83d\ude33 \ud83d\ude31 \ud83d\ude28 \ud83d\ude30 \ud83d\ude22 \ud83d\ude25 \ud83e\udd24 \ud83d\ude2d \ud83d\ude13 \ud83d\ude2a \ud83d\ude34 \ud83d\ude44 \ud83e\udd14 \ud83e\udd25 \ud83d\ude2c \ud83e\udd10 \ud83e\udd22 \ud83e\udd27 \ud83d\ude37 \ud83e\udd12 \ud83e\udd15 \ud83d\ude08 \ud83d\udc7f \ud83d\udc79 \ud83d\udc7a \ud83d\udca9 \ud83d\udc7b \ud83d\udc80 \u2620\ufe0f \ud83d\udc7d \ud83d\udc7e \ud83e\udd16 \ud83c\udf83 \ud83d\ude3a \ud83d\ude38 \ud83d\ude39 \ud83d\ude3b \ud83d\ude3c \ud83d\ude3d \ud83d\ude40 \ud83d\ude3f \ud83d\ude3e \ud83d\udc50 \ud83d\ude4c \ud83d\udc4f \ud83d\ude4f \ud83e\udd1d \ud83d\udc4d \ud83d\udc4e \ud83d\udc4a \u270a \ud83e\udd1b \ud83e\udd1c \ud83e\udd1e \u270c\ufe0f \ud83e\udd18 \ud83d\udc4c \ud83d\udc48 \ud83d\udc49 \ud83d\udc46 \ud83d\udc47 \u261d\ufe0f \u270b \ud83e\udd1a \ud83d\udd90 \ud83d\udd96 \ud83d\udc4b \ud83e\udd19 \ud83d\udcaa \ud83d\udd95 \u270d\ufe0f \ud83e\udd33 \ud83d\udc85 \ud83d\udd96 \ud83d\udc84 \ud83d\udc8b \ud83d\udc44 \ud83d\udc45 \ud83d\udc42 \ud83d\udc43 \ud83d\udc63 \ud83d\udc41 \ud83d\udc40 \ud83d\udde3 \ud83d\udc64 \ud83d\udc65 \ud83d\udc76 \ud83d\udc66 \ud83d\udc67 \ud83d\udc68 \ud83d\udc69 \ud83d\udc71\u200d\u2640\ufe0f \ud83d\udc71 \ud83d\udc74 \ud83d\udc75 \ud83d\udc72 \ud83d\udc73\u200d\u2640\ufe0f \ud83d\udc73 \ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udc6e \ud83d\udc77\u200d\u2640\ufe0f \ud83d\udc77".split(" ")},n.ngInjectableDef=t.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iTUp:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){}}()},j1ZV:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){}}()}}]);