(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{WBnD:function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),t=e("wpqE"),u=e("ZZ/e"),i=e("6m4Z"),a=function(){function n(n,l,e){this.nav=n,this.shopservice=l,this.native=e}return n.prototype.ngOnInit=function(){var n=this;this.shopservice.getShop().then(function(l){console.log(l),n.data=l}).catch(function(n){}),this.native.getAppversion().then(function(l){n.appver=l}).catch(function(n){}),this.isios=this.native.isios()},n.prototype.goBack=function(n,l){this.nav.back()},n.prototype.test=function(n,l){return"123"},n.prototype.openStore=function(){this.native.openStore()},n.prototype.updateapp=function(){this.isios&&this.openStore()},n}(),c=function(){return function(){}}(),r=e("pMnS"),d=e("Ip0R"),p=e("oBZk"),m=o["\u0275crt"]({encapsulation:0,styles:[[".footer[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);text-align:center;position:absolute;width:100%;bottom:30px;left:0}.top[_ngcontent-%COMP%]{text-align:center;margin-bottom:50px}.top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:5px}"]],data:{}});function f(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"p",[["no-margin",""]],null,null,null,null,null)),(n()(),o["\u0275ted"](1,null,["Version\xa0\xa0",""]))],null,function(n,l){n(l,1,0,l.component.appver)})}function s(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,5,"div",[["class","top"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o["\u0275ted"](3,null,["",""])),(n()(),o["\u0275and"](16777216,null,null,1,null,f)),o["\u0275did"](5,16384,null,0,d.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,5,0,l.component.appver)},function(n,l){var e=l.component;n(l,1,0,e.data.shop_logo),n(l,3,0,e.data.shop_name)})}function g(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,2,"ion-item",[["button",""],["detial",""]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.openStore()&&o),o},p.Eb,p.y)),o["\u0275did"](1,49152,null,0,u.I,[o.ChangeDetectorRef,o.ElementRef],{button:[0,"button"]},null),(n()(),o["\u0275ted"](-1,0,["\u53bb\u8bc4\u5206"]))],function(n,l){n(l,1,0,"")},null)}function b(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,p.ac,p.X)),o["\u0275did"](1,49152,null,0,u.xb,[o.ChangeDetectorRef,o.ElementRef],{color:[0,"color"]},null),(n()(),o["\u0275ted"](2,0,["","\u516c\u53f8\xa0\xa0\u7248\u672c\u6240\u6709"]))],function(n,l){n(l,1,0,"medium")},function(n,l){n(l,2,0,l.component.data.company_name)})}function h(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"ion-header",[["mode","ios"]],null,null,null,p.vb,p.s)),o["\u0275did"](1,49152,null,0,u.C,[o.ChangeDetectorRef,o.ElementRef],{mode:[0,"mode"]},null),(n()(),o["\u0275eld"](2,0,null,0,7,"ion-toolbar",[["mode","ios"]],null,null,null,p.fc,p.cb)),o["\u0275did"](3,49152,null,0,u.Cb,[o.ChangeDetectorRef,o.ElementRef],{mode:[0,"mode"]},null),(n()(),o["\u0275eld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,p.jb,p.g)),o["\u0275did"](5,49152,null,0,u.m,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.goBack()&&o),o},p.ib,p.f)),o["\u0275did"](7,49152,null,0,u.l,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,p.wb,p.t)),o["\u0275did"](9,49152,null,0,u.D,[o.ChangeDetectorRef,o.ElementRef],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),o["\u0275eld"](10,0,null,null,17,"ion-content",[["padding",""]],null,null,null,p.rb,p.o)),o["\u0275did"](11,49152,null,0,u.v,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275and"](16777216,null,0,1,null,s)),o["\u0275did"](13,16384,null,0,d.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](14,0,null,0,6,"ion-list",[],null,null,null,p.Hb,p.D)),o["\u0275did"](15,49152,null,0,u.P,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275and"](16777216,null,0,1,null,g)),o["\u0275did"](17,16384,null,0,d.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](18,0,null,0,2,"ion-item",[["button",""]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.updateapp()&&o),o},p.Eb,p.y)),o["\u0275did"](19,49152,null,0,u.I,[o.ChangeDetectorRef,o.ElementRef],{button:[0,"button"]},null),(n()(),o["\u0275ted"](-1,0,["\u7248\u672c\u66f4\u65b0"])),(n()(),o["\u0275eld"](21,0,null,0,6,"div",[["class","footer"]],null,null,null,null,null)),(n()(),o["\u0275and"](16777216,null,null,1,null,b)),o["\u0275did"](23,16384,null,0,d.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](24,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o["\u0275eld"](25,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,p.ac,p.X)),o["\u0275did"](26,49152,null,0,u.xb,[o.ChangeDetectorRef,o.ElementRef],{color:[0,"color"]},null),(n()(),o["\u0275ted"](-1,0,["Copyright\xa0\xa0\xa92019-2029\xa0\xa0lvxingjia.All\xa0\xa0Rights\xa0\xa0Reserved"]))],function(n,l){var e=l.component;n(l,1,0,"ios"),n(l,3,0,"ios"),n(l,9,0,"ios","arrow-back"),n(l,13,0,e.data),n(l,17,0,e.isios),n(l,19,0,""),n(l,23,0,e.data),n(l,26,0,"medium")},null)}function R(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-about-us",[],null,null,null,h,m)),o["\u0275did"](1,114688,null,0,a,[u.Ib,t.a,i.a],null,null)],function(n,l){n(l,1,0)},null)}var v=o["\u0275ccf"]("app-about-us",a,R,{},{},[]),C=e("gIcY"),_=e("ZYCi");e.d(l,"AboutUsPageModuleNgFactory",function(){return I});var I=o["\u0275cmf"](c,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,v]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[o.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,C["\u0275angular_packages_forms_forms_j"],C["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,u.c,u.c,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,u.Hb,u.Hb,[u.c,o.ComponentFactoryResolver,o.Injector,d.DOCUMENT]),o["\u0275mpd"](4608,u.Lb,u.Lb,[u.c,o.ComponentFactoryResolver,o.Injector,d.DOCUMENT]),o["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),o["\u0275mpd"](1073742336,C["\u0275angular_packages_forms_forms_bc"],C["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,C.FormsModule,C.FormsModule,[]),o["\u0275mpd"](1073742336,u.Eb,u.Eb,[]),o["\u0275mpd"](1073742336,_.o,_.o,[[2,_.u],[2,_.m]]),o["\u0275mpd"](1073742336,c,c,[]),o["\u0275mpd"](1024,_.k,function(){return[[{path:"",component:a}]]},[])])})}}]);