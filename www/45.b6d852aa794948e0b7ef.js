(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{FUS3:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){}}()},hoFm:function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("CcnG"),o=function(){function n(){}return n.prototype.getEmoji=function(){return"\ud83d\ude00 \ud83d\ude03 \ud83d\ude04 \ud83d\ude01 \ud83d\ude06 \ud83d\ude05 \ud83d\ude02 \ud83e\udd23 \ud83d\ude0a \ud83d\ude07 \ud83d\ude42 \ud83d\ude43 \ud83d\ude09 \ud83d\ude0c \ud83d\ude0d \ud83d\ude18 \ud83d\ude17 \ud83d\ude19 \ud83d\ude1a \ud83d\ude0b \ud83d\ude1c \ud83d\ude1d \ud83d\ude1b \ud83e\udd11 \ud83e\udd17 \ud83e\udd13 \ud83d\ude0e \ud83e\udd21 \ud83e\udd20 \ud83d\ude0f \ud83d\ude12 \ud83d\ude1e \ud83d\ude14 \ud83d\ude1f \ud83d\ude15 \ud83d\ude41 \u2639\ufe0f \ud83d\ude23 \ud83d\ude16 \ud83d\ude2b \ud83d\ude29 \ud83d\ude24 \ud83d\ude20 \ud83d\ude21 \ud83d\ude36 \ud83d\ude10 \ud83d\ude11 \ud83d\ude2f \ud83d\ude26 \ud83d\ude27 \ud83d\ude2e \ud83d\ude32 \ud83d\ude35 \ud83d\ude33 \ud83d\ude31 \ud83d\ude28 \ud83d\ude30 \ud83d\ude22 \ud83d\ude25 \ud83e\udd24 \ud83d\ude2d \ud83d\ude13 \ud83d\ude2a \ud83d\ude34 \ud83d\ude44 \ud83e\udd14 \ud83e\udd25 \ud83d\ude2c \ud83e\udd10 \ud83e\udd22 \ud83e\udd27 \ud83d\ude37 \ud83e\udd12 \ud83e\udd15 \ud83d\ude08 \ud83d\udc7f \ud83d\udc79 \ud83d\udc7a \ud83d\udca9 \ud83d\udc7b \ud83d\udc80 \u2620\ufe0f \ud83d\udc7d \ud83d\udc7e \ud83e\udd16 \ud83c\udf83 \ud83d\ude3a \ud83d\ude38 \ud83d\ude39 \ud83d\ude3b \ud83d\ude3c \ud83d\ude3d \ud83d\ude40 \ud83d\ude3f \ud83d\ude3e \ud83d\udc50 \ud83d\ude4c \ud83d\udc4f \ud83d\ude4f \ud83e\udd1d \ud83d\udc4d \ud83d\udc4e \ud83d\udc4a \u270a \ud83e\udd1b \ud83e\udd1c \ud83e\udd1e \u270c\ufe0f \ud83e\udd18 \ud83d\udc4c \ud83d\udc48 \ud83d\udc49 \ud83d\udc46 \ud83d\udc47 \u261d\ufe0f \u270b \ud83e\udd1a \ud83d\udd90 \ud83d\udd96 \ud83d\udc4b \ud83e\udd19 \ud83d\udcaa \ud83d\udd95 \u270d\ufe0f \ud83e\udd33 \ud83d\udc85 \ud83d\udd96 \ud83d\udc84 \ud83d\udc8b \ud83d\udc44 \ud83d\udc45 \ud83d\udc42 \ud83d\udc43 \ud83d\udc63 \ud83d\udc41 \ud83d\udc40 \ud83d\udde3 \ud83d\udc64 \ud83d\udc65 \ud83d\udc76 \ud83d\udc66 \ud83d\udc67 \ud83d\udc68 \ud83d\udc69 \ud83d\udc71\u200d\u2640\ufe0f \ud83d\udc71 \ud83d\udc74 \ud83d\udc75 \ud83d\udc72 \ud83d\udc73\u200d\u2640\ufe0f \ud83d\udc73 \ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udc6e \ud83d\udc77\u200d\u2640\ufe0f \ud83d\udc77".split(" ")},n.ngInjectableDef=t.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iTUp:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){}}()},j1ZV:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){}}()},yVtP:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("ZZ/e"),u=e("N+K7"),i=function(){function n(n,l,e){this.nav=n,this.http=l,this.activeroute=e}return n.prototype.goBack=function(){this.nav.back()},n.prototype.ngOnInit=function(){this.commentList=[],this.tags=[],this.pageObj={page:0,limit:10}},n.prototype.ionViewWillEnter=function(){console.log("\u8fdb\u51652"),this.goodsId=this.activeroute.snapshot.queryParams.id,this.getList()},n.prototype.getList=function(n){var l=this,e={goods_id:this.goodsId,page:this.pageObj.page,limit:this.pageObj.limit};this.http.getDataloading(this.http.getGoodcommentList,e).subscribe(function(t){var o;0===l.pageObj.page&&(l.tags=t.data.tags),console.log(l.tags),(o=l.commentList).push.apply(o,t.data.comment),n&&n.target.complete(),t.data.comment.length<e.limit&&(l.infiniteScroll.disabled=!0)},function(l){n&&n.target.complete()})},n.prototype.loadData=function(n){this.pageObj.page++,this.getList(n)},n}(),a=function(){return function(){}}(),c=e("pMnS"),r=e("YYyv"),d=e("+2Tt"),f=e("oBZk"),m=e("Ip0R"),p=e("xnCV"),g=e("ofm3"),s=e("ZYCi"),b=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-nomore",[],null,null,null,r.b,r.a)),t["\u0275did"](1,114688,null,0,d.a,[],null,null)],function(n,l){n(l,1,0)},null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"ion-col",[],null,null,null,f.qb,f.n)),t["\u0275did"](1,49152,null,0,o.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,4,"ion-chip",[["color","secondary"]],null,null,null,f.pb,f.m)),t["\u0275did"](3,49152,null,0,o.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](4,0,null,0,2,"ion-label",[["color","dark"]],null,null,null,f.Fb,f.C)),t["\u0275did"](5,49152,null,0,o.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275ted"](6,0,["","(",")"]))],function(n,l){n(l,3,0,"secondary"),n(l,5,0,"dark")},function(n,l){n(l,6,0,l.context.$implicit.tag_name,l.context.$implicit.tag_num)})}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-row",[],null,null,null,f.Ob,f.L)),t["\u0275did"](1,49152,null,0,o.lb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](3,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.tags)},null)}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"app-pjcontent",[],null,null,null,p.b,p.a)),t["\u0275did"](2,114688,null,0,g.a,[u.a],{data:[0,"data"]},null)],function(n,l){n(l,2,0,l.context.$implicit)},null)}function N(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{infiniteScroll:0}),(n()(),t["\u0275eld"](1,0,null,null,12,"ion-header",[],null,null,null,f.vb,f.s)),t["\u0275did"](2,49152,null,0,o.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,f.fc,f.cb)),t["\u0275did"](4,49152,null,0,o.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](5,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,f.jb,f.g)),t["\u0275did"](6,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t},f.ib,f.f)),t["\u0275did"](8,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](9,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,f.wb,f.t)),t["\u0275did"](10,49152,null,0,o.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),t["\u0275eld"](11,0,null,0,2,"ion-title",[],null,null,null,f.dc,f.ab)),t["\u0275did"](12,49152,null,0,o.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["\u8bc4\u8bba\u5217\u8868"])),(n()(),t["\u0275eld"](14,0,null,null,12,"ion-content",[["padding",""]],null,null,null,f.rb,f.o)),t["\u0275did"](15,49152,null,0,o.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](16,16384,null,0,o.f,[t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](18,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](20,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](22,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](23,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,e){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadData(e)&&t),t},f.zb,f.v)),t["\u0275did"](24,49152,[[1,4]],0,o.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](25,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,f.yb,f.w)),t["\u0275did"](26,49152,null,0,o.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],function(n,l){var e=l.component;n(l,4,0,"ios"),n(l,10,0,"ios","arrow-back"),n(l,18,0,e.commentList&&0===e.commentList.length),n(l,20,0,e.tags),n(l,22,0,e.commentList),n(l,26,0,"bubbles","Loading more data...")},null)}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-comments-list",[],null,null,null,N,b)),t["\u0275did"](1,114688,null,0,i,[o.Kb,u.a,s.a],null,null)],function(n,l){n(l,1,0)},null)}var D=t["\u0275ccf"]("app-comments-list",i,y,{},{},[]),I=e("gIcY"),Z=e("hoFm"),E=e("iTUp"),w=e("FUS3"),L=e("j1ZV");e.d(l,"CommentsListPageModuleNgFactory",function(){return F});var F=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,D]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[t.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,I.t,I.t,[]),t["\u0275mpd"](4608,o.c,o.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,o.Jb,o.Jb,[o.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,o.Nb,o.Nb,[o.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),t["\u0275mpd"](1073742336,I.q,I.q,[]),t["\u0275mpd"](1073742336,I.d,I.d,[]),t["\u0275mpd"](1073742336,o.Gb,o.Gb,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,w.a,w.a,[]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,s.p,s.p,[[2,s.v],[2,s.n]]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,s.l,function(){return[[{path:"",component:i}]]},[])])})}}]);