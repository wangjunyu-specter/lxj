(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{FUS3:function(n,t,o){"use strict";o.d(t,"a",function(){return l});var l=function(){return function(){}}()},hoFm:function(n,t,o){"use strict";o.d(t,"a",function(){return e});var l=o("CcnG"),e=function(){function n(){}return n.prototype.getEmoji=function(){return"\ud83d\ude00 \ud83d\ude03 \ud83d\ude04 \ud83d\ude01 \ud83d\ude06 \ud83d\ude05 \ud83d\ude02 \ud83e\udd23 \ud83d\ude0a \ud83d\ude07 \ud83d\ude42 \ud83d\ude43 \ud83d\ude09 \ud83d\ude0c \ud83d\ude0d \ud83d\ude18 \ud83d\ude17 \ud83d\ude19 \ud83d\ude1a \ud83d\ude0b \ud83d\ude1c \ud83d\ude1d \ud83d\ude1b \ud83e\udd11 \ud83e\udd17 \ud83e\udd13 \ud83d\ude0e \ud83e\udd21 \ud83e\udd20 \ud83d\ude0f \ud83d\ude12 \ud83d\ude1e \ud83d\ude14 \ud83d\ude1f \ud83d\ude15 \ud83d\ude41 \u2639\ufe0f \ud83d\ude23 \ud83d\ude16 \ud83d\ude2b \ud83d\ude29 \ud83d\ude24 \ud83d\ude20 \ud83d\ude21 \ud83d\ude36 \ud83d\ude10 \ud83d\ude11 \ud83d\ude2f \ud83d\ude26 \ud83d\ude27 \ud83d\ude2e \ud83d\ude32 \ud83d\ude35 \ud83d\ude33 \ud83d\ude31 \ud83d\ude28 \ud83d\ude30 \ud83d\ude22 \ud83d\ude25 \ud83e\udd24 \ud83d\ude2d \ud83d\ude13 \ud83d\ude2a \ud83d\ude34 \ud83d\ude44 \ud83e\udd14 \ud83e\udd25 \ud83d\ude2c \ud83e\udd10 \ud83e\udd22 \ud83e\udd27 \ud83d\ude37 \ud83e\udd12 \ud83e\udd15 \ud83d\ude08 \ud83d\udc7f \ud83d\udc79 \ud83d\udc7a \ud83d\udca9 \ud83d\udc7b \ud83d\udc80 \u2620\ufe0f \ud83d\udc7d \ud83d\udc7e \ud83e\udd16 \ud83c\udf83 \ud83d\ude3a \ud83d\ude38 \ud83d\ude39 \ud83d\ude3b \ud83d\ude3c \ud83d\ude3d \ud83d\ude40 \ud83d\ude3f \ud83d\ude3e \ud83d\udc50 \ud83d\ude4c \ud83d\udc4f \ud83d\ude4f \ud83e\udd1d \ud83d\udc4d \ud83d\udc4e \ud83d\udc4a \u270a \ud83e\udd1b \ud83e\udd1c \ud83e\udd1e \u270c\ufe0f \ud83e\udd18 \ud83d\udc4c \ud83d\udc48 \ud83d\udc49 \ud83d\udc46 \ud83d\udc47 \u261d\ufe0f \u270b \ud83e\udd1a \ud83d\udd90 \ud83d\udd96 \ud83d\udc4b \ud83e\udd19 \ud83d\udcaa \ud83d\udd95 \u270d\ufe0f \ud83e\udd33 \ud83d\udc85 \ud83d\udd96 \ud83d\udc84 \ud83d\udc8b \ud83d\udc44 \ud83d\udc45 \ud83d\udc42 \ud83d\udc43 \ud83d\udc63 \ud83d\udc41 \ud83d\udc40 \ud83d\udde3 \ud83d\udc64 \ud83d\udc65 \ud83d\udc76 \ud83d\udc66 \ud83d\udc67 \ud83d\udc68 \ud83d\udc69 \ud83d\udc71\u200d\u2640\ufe0f \ud83d\udc71 \ud83d\udc74 \ud83d\udc75 \ud83d\udc72 \ud83d\udc73\u200d\u2640\ufe0f \ud83d\udc73 \ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udc6e \ud83d\udc77\u200d\u2640\ufe0f \ud83d\udc77".split(" ")},n.ngInjectableDef=l.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iTUp:function(n,t,o){"use strict";o.d(t,"a",function(){return l});var l=function(){return function(){}}()},j1ZV:function(n,t,o){"use strict";o.d(t,"a",function(){return l});var l=function(){return function(){}}()},ur6x:function(n,t,o){"use strict";o.r(t);var l=o("CcnG"),e=o("ZZ/e"),c=o("kF40"),a=o("N+K7"),i=o("Ud6+"),u=function(){function n(n,t,o,l,e,c){this.nav=n,this.articlelist=t,this.activeroute=o,this.http=l,this.sanitizer=e,this.topage=c}return n.prototype.ionViewDidEnter=function(){console.log("\u52a0\u8f7d\u5b8c\u4e86"),this.getContent()},n.prototype.ngOnInit=function(){this.data={},this.toolbaropacity="0",this.aid=this.activeroute.snapshot.queryParams.id},n.prototype.getContent=function(){var n=this;this.articlelist.getContent(this.aid).then(function(t){console.log(t),n.data=t})},n.prototype.assembleHTML=function(n){return this.sanitizer.bypassSecurityTrustHtml(n)},n.prototype.logScrolling=function(n){var t=n.detail.scrollTop;this.setNavstatus(t<44?2*t/100:1)},n.prototype.setNavstatus=function(n){this.toolbaropacity=parseInt((100*n).toString(),10).toString()},n.prototype.goBack=function(){this.nav.back()},n.prototype.openpage=function(n){this.toPage(2,n.goods_id)},n.prototype.toPage=function(n,t,o){console.log(n),"string"==typeof n&&(n=Number(n)),this.topage.toPage(n,t,o)},n}(),s=function(){return function(){}}(),r=o("pMnS"),p=o("ZmNk"),g=o("OKDh"),d=o("oBZk"),h=o("Ip0R"),C=o("ZYCi"),_=o("ZYjt"),f=l["\u0275crt"]({encapsulation:0,styles:[[".show-0[_ngcontent-%COMP%]{--opacity:0}.show-1[_ngcontent-%COMP%]{--opacity:0.01}.show-2[_ngcontent-%COMP%]{--opacity:0.02}.show-3[_ngcontent-%COMP%]{--opacity:0.03}.show-4[_ngcontent-%COMP%]{--opacity:0.04}.show-5[_ngcontent-%COMP%]{--opacity:0.05}.show-6[_ngcontent-%COMP%]{--opacity:0.06}.show-7[_ngcontent-%COMP%]{--opacity:0.07}.show-8[_ngcontent-%COMP%]{--opacity:0.08}.show-9[_ngcontent-%COMP%]{--opacity:0.09}.show-10[_ngcontent-%COMP%]{--opacity:0.1}.show-11[_ngcontent-%COMP%]{--opacity:0.11}.show-12[_ngcontent-%COMP%]{--opacity:0.12}.show-13[_ngcontent-%COMP%]{--opacity:0.13}.show-14[_ngcontent-%COMP%]{--opacity:0.14}.show-15[_ngcontent-%COMP%]{--opacity:0.15}.show-16[_ngcontent-%COMP%]{--opacity:0.16}.show-17[_ngcontent-%COMP%]{--opacity:0.17}.show-18[_ngcontent-%COMP%]{--opacity:0.18}.show-19[_ngcontent-%COMP%]{--opacity:0.19}.show-20[_ngcontent-%COMP%]{--opacity:0.2}.show-21[_ngcontent-%COMP%]{--opacity:0.21}.show-22[_ngcontent-%COMP%]{--opacity:0.22}.show-23[_ngcontent-%COMP%]{--opacity:0.23}.show-24[_ngcontent-%COMP%]{--opacity:0.24}.show-25[_ngcontent-%COMP%]{--opacity:0.25}.show-26[_ngcontent-%COMP%]{--opacity:0.26}.show-27[_ngcontent-%COMP%]{--opacity:0.27}.show-28[_ngcontent-%COMP%]{--opacity:0.28}.show-29[_ngcontent-%COMP%]{--opacity:0.29}.show-30[_ngcontent-%COMP%]{--opacity:0.3}.show-31[_ngcontent-%COMP%]{--opacity:0.31}.show-32[_ngcontent-%COMP%]{--opacity:0.32}.show-33[_ngcontent-%COMP%]{--opacity:0.33}.show-34[_ngcontent-%COMP%]{--opacity:0.34}.show-35[_ngcontent-%COMP%]{--opacity:0.35}.show-36[_ngcontent-%COMP%]{--opacity:0.36}.show-37[_ngcontent-%COMP%]{--opacity:0.37}.show-38[_ngcontent-%COMP%]{--opacity:0.38}.show-39[_ngcontent-%COMP%]{--opacity:0.39}.show-40[_ngcontent-%COMP%]{--opacity:0.4}.show-41[_ngcontent-%COMP%]{--opacity:0.41}.show-42[_ngcontent-%COMP%]{--opacity:0.42}.show-43[_ngcontent-%COMP%]{--opacity:0.43}.show-44[_ngcontent-%COMP%]{--opacity:0.44}.show-45[_ngcontent-%COMP%]{--opacity:0.45}.show-46[_ngcontent-%COMP%]{--opacity:0.46}.show-47[_ngcontent-%COMP%]{--opacity:0.47}.show-48[_ngcontent-%COMP%]{--opacity:0.48}.show-49[_ngcontent-%COMP%]{--opacity:0.49}.show-50[_ngcontent-%COMP%]{--opacity:0.5}.show-51[_ngcontent-%COMP%]{--opacity:0.51}.show-52[_ngcontent-%COMP%]{--opacity:0.52}.show-53[_ngcontent-%COMP%]{--opacity:0.53}.show-54[_ngcontent-%COMP%]{--opacity:0.54}.show-55[_ngcontent-%COMP%]{--opacity:0.55}.show-56[_ngcontent-%COMP%]{--opacity:0.56}.show-57[_ngcontent-%COMP%]{--opacity:0.57}.show-58[_ngcontent-%COMP%]{--opacity:0.58}.show-59[_ngcontent-%COMP%]{--opacity:0.59}.show-60[_ngcontent-%COMP%]{--opacity:0.6}.show-61[_ngcontent-%COMP%]{--opacity:0.61}.show-62[_ngcontent-%COMP%]{--opacity:0.62}.show-63[_ngcontent-%COMP%]{--opacity:0.63}.show-64[_ngcontent-%COMP%]{--opacity:0.64}.show-65[_ngcontent-%COMP%]{--opacity:0.65}.show-66[_ngcontent-%COMP%]{--opacity:0.66}.show-67[_ngcontent-%COMP%]{--opacity:0.67}.show-68[_ngcontent-%COMP%]{--opacity:0.68}.show-69[_ngcontent-%COMP%]{--opacity:0.69}.show-70[_ngcontent-%COMP%]{--opacity:0.7}.show-71[_ngcontent-%COMP%]{--opacity:0.71}.show-72[_ngcontent-%COMP%]{--opacity:0.72}.show-73[_ngcontent-%COMP%]{--opacity:0.73}.show-74[_ngcontent-%COMP%]{--opacity:0.74}.show-75[_ngcontent-%COMP%]{--opacity:0.75}.show-76[_ngcontent-%COMP%]{--opacity:0.76}.show-77[_ngcontent-%COMP%]{--opacity:0.77}.show-78[_ngcontent-%COMP%]{--opacity:0.78}.show-79[_ngcontent-%COMP%]{--opacity:0.79}.show-80[_ngcontent-%COMP%]{--opacity:0.8}.show-81[_ngcontent-%COMP%]{--opacity:0.81}.show-82[_ngcontent-%COMP%]{--opacity:0.82}.show-83[_ngcontent-%COMP%]{--opacity:0.83}.show-84[_ngcontent-%COMP%]{--opacity:0.84}.show-85[_ngcontent-%COMP%]{--opacity:0.85}.show-86[_ngcontent-%COMP%]{--opacity:0.86}.show-87[_ngcontent-%COMP%]{--opacity:0.87}.show-88[_ngcontent-%COMP%]{--opacity:0.88}.show-89[_ngcontent-%COMP%]{--opacity:0.89}.show-90[_ngcontent-%COMP%]{--opacity:0.9}.show-91[_ngcontent-%COMP%]{--opacity:0.91}.show-92[_ngcontent-%COMP%]{--opacity:0.92}.show-93[_ngcontent-%COMP%]{--opacity:0.93}.show-94[_ngcontent-%COMP%]{--opacity:0.94}.show-95[_ngcontent-%COMP%]{--opacity:0.95}.show-96[_ngcontent-%COMP%]{--opacity:0.96}.show-97[_ngcontent-%COMP%]{--opacity:0.97}.show-98[_ngcontent-%COMP%]{--opacity:0.98}.show-99[_ngcontent-%COMP%]{--opacity:0.99}.show-100[_ngcontent-%COMP%]{--opacity:1}ion-toolbar[_ngcontent-%COMP%]{--background:#fff}ion-content[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{width:100%;margin-top:var(--ion-platform-margin-top)}ion-content[_ngcontent-%COMP%]   .jptj[_ngcontent-%COMP%]{font-size:var(--ion-title);border-bottom:1px solid var(--ion-color-light);box-shadow:0 3px 8px #f2f2f2;font-weight:600}.search-bar[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;color:#fff;padding:0 10px;height:36px}.search-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:var(--ion-statusbar-left);font-size:var(--ion-icon-big);display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.search-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;margin-left:5px}.search-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:52px;display:flex;flex-direction:row;justify-content:space-between}.search-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div.round[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6);width:21px;height:21px;border-radius:50%;display:flex;flex-direction:row;justify-content:center;align-items:center}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:-webkit-box;flex:1;margin:0 15px;height:27px}"]],data:{}});function y(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["class","banner"]],[[8,"src",4]],null,null,null,null))],null,function(n,t){var o=t.component;n(t,0,0,o.http.zdomain+o.data.img)})}function M(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["","\u6b3e\u597d\u8d27\uff0c","\u9009\u62e9"]))],null,function(n,t){var o=t.component;n(t,1,0,o.data.goods.length,o.data.author)})}function w(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){var o=t.component;n(t,0,0,o.assembleHTML(o.data.content))})}function O(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-productlist",[],null,[[null,"open"]],function(n,t,o){var l=!0;return"open"===t&&(l=!1!==n.component.openpage(o)&&l),l},p.b,p.a)),l["\u0275did"](1,114688,null,0,g.a,[a.a],{data:[0,"data"]},{open:"open"})],function(n,t){n(t,1,0,t.context.$implicit)},null)}function P(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,d.wb,d.s)),l["\u0275did"](1,49152,null,0,e.C,[l.ChangeDetectorRef,l.ElementRef],{mode:[0,"mode"],translucent:[1,"translucent"]},null),(n()(),l["\u0275eld"](2,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,d.gc,d.cb)),l["\u0275did"](3,278528,null,0,h.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{ngClass:[0,"ngClass"]},null),l["\u0275did"](4,49152,null,0,e.Cb,[l.ChangeDetectorRef,l.ElementRef],{mode:[0,"mode"]},null),(n()(),l["\u0275eld"](5,0,null,0,7,"div",[["class","search-bar"]],null,null,null,null,null)),(n()(),l["\u0275eld"](6,0,null,null,1,"div",[["class","left"]],null,[[null,"click"]],function(n,t,o){var l=!0;return"click"===t&&(l=!1!==n.component.goBack()&&l),l},null,null)),(n()(),l["\u0275eld"](7,0,null,null,0,"img",[["alt",""],["src","/assets/backbg.svg"]],null,null,null,null,null)),(n()(),l["\u0275eld"](8,0,null,null,0,"div",[["class","center"]],null,null,null,null,null)),(n()(),l["\u0275eld"](9,0,null,null,3,"div",[["class","right"]],null,null,null,null,null)),(n()(),l["\u0275eld"](10,0,null,null,2,"div",[["class","round"]],null,null,null,null,null)),(n()(),l["\u0275eld"](11,0,null,null,1,"ion-icon",[["name","share"]],null,null,null,d.xb,d.t)),l["\u0275did"](12,49152,null,0,e.D,[l.ChangeDetectorRef,l.ElementRef],{name:[0,"name"]},null),(n()(),l["\u0275eld"](13,0,null,null,16,"ion-content",[],null,[[null,"ionScroll"]],function(n,t,o){var l=!0;return"ionScroll"===t&&(l=!1!==n.component.logScrolling(o)&&l),l},d.sb,d.o)),l["\u0275did"](14,49152,null,0,e.v,[l.ChangeDetectorRef,l.ElementRef],{fullscreen:[0,"fullscreen"],scrollEvents:[1,"scrollEvents"]},null),(n()(),l["\u0275and"](16777216,null,0,1,null,y)),l["\u0275did"](16,16384,null,0,h.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](17,0,null,0,6,"div",[["class","my-content"],["padding",""]],null,null,null,null,null)),(n()(),l["\u0275eld"](18,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l["\u0275ted"](19,null,["",""])),(n()(),l["\u0275and"](16777216,null,null,1,null,M)),l["\u0275did"](21,16384,null,0,h.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,w)),l["\u0275did"](23,16384,null,0,h.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](24,0,null,0,2,"div",[["class","jptj"],["padding",""]],null,null,null,null,null)),(n()(),l["\u0275eld"](25,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\u7cbe\u54c1\u63a8\u8350"])),(n()(),l["\u0275eld"](27,0,null,0,2,"div",[["padding",""]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,O)),l["\u0275did"](29,278528,null,0,h.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var o=t.component;n(t,1,0,"ios",!0),n(t,3,0,"show-"+o.toolbaropacity),n(t,4,0,"ios"),n(t,12,0,"share"),n(t,14,0,!0,!0),n(t,16,0,o.data),n(t,21,0,o.data.goods&&o.data.goods.length>0),n(t,23,0,o.data.content),n(t,29,0,o.data.goods)},function(n,t){n(t,19,0,t.component.data.title)})}function m(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-articlecontent",[],null,null,null,P,f)),l["\u0275did"](1,114688,null,0,u,[e.Ib,c.a,C.a,a.a,_.c,i.a],null,null)],function(n,t){n(t,1,0)},null)}var b=l["\u0275ccf"]("app-articlecontent",u,m,{},{},[]),v=o("gIcY"),x=o("hoFm"),R=o("iTUp"),I=o("FUS3"),k=o("j1ZV");o.d(t,"ArticlecontentPageModuleNgFactory",function(){return j});var j=l["\u0275cmf"](s,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,b]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[l.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,v["\u0275angular_packages_forms_forms_j"],v["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,e.c,e.c,[l.NgZone,l.ApplicationRef]),l["\u0275mpd"](4608,e.Hb,e.Hb,[e.c,l.ComponentFactoryResolver,l.Injector,h.DOCUMENT]),l["\u0275mpd"](4608,e.Lb,e.Lb,[e.c,l.ComponentFactoryResolver,l.Injector,h.DOCUMENT]),l["\u0275mpd"](4608,x.a,x.a,[]),l["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),l["\u0275mpd"](1073742336,v["\u0275angular_packages_forms_forms_bc"],v["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,v.FormsModule,v.FormsModule,[]),l["\u0275mpd"](1073742336,e.Eb,e.Eb,[]),l["\u0275mpd"](1073742336,R.a,R.a,[]),l["\u0275mpd"](1073742336,I.a,I.a,[]),l["\u0275mpd"](1073742336,k.a,k.a,[]),l["\u0275mpd"](1073742336,C.o,C.o,[[2,C.u],[2,C.m]]),l["\u0275mpd"](1073742336,s,s,[]),l["\u0275mpd"](1024,C.k,function(){return[[{path:"",component:u}]]},[])])})}}]);