(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{FUS3:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},Tv7o:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("ZZ/e"),i=t("N+K7"),u=function(){function n(n,l,t,e){this.nav=n,this.http=l,this.activeroute=t,this.route=e}return n.prototype.ngOnInit=function(){this.navlist=[],this.suppId=this.activeroute.snapshot.params.id,this.isget=!1,this.active=0,console.log(this.suppId)},n.prototype.ionViewDidEnter=function(){var n=this;this.isget||(this.http.getData(this.http.getsjfl,{suppId:this.suppId}).subscribe(function(l){var t;console.log(l),(t=n.navlist).push.apply(t,l.data),n.setActive(0,n.navlist[0])},function(n){console.log(n)}),this.isget=!0)},n.prototype.goBack=function(){this.nav.back()},n.prototype.clickotherfn=function(n){this.open(n.id)},n.prototype.open=function(n){this.route.navigate(["/sjproducts",n||1],{queryParams:{listid:n||1,suppId:this.suppId}})},n.prototype.setActive=function(n,l){this.active=n,this.activeList=l},n}(),c=function(){return function(){}}(),r=t("pMnS"),a=t("Ip0R"),d=t("oBZk"),s=t("tjRC"),f=t("1U7t"),p=t("ZYCi"),m=e["\u0275crt"]({encapsulation:0,styles:[[".my-content[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch}.my-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:96px;background-color:var(--ion-color-white)}.my-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:100%;height:50px;display:flex;justify-content:center;align-items:center;border-bottom:1px solid var(--ion-gray-background-color)}.my-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]{background:var(--ion-gray-background-color);color:var(--ion-color-success)}.my-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;background:var(--ion-gray-background-color)}.my-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--ion-gray-background-color)}.button-box[_ngcontent-%COMP%]   .button-item[_ngcontent-%COMP%]{margin-bottom:15px}.button-box[_ngcontent-%COMP%]   .button-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:var(--ion-title);margin-bottom:10px;color:var(--ion-color-dark)}.button-box[_ngcontent-%COMP%]   .cbutton-box[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap}.button-box[_ngcontent-%COMP%]   .cbutton-box[_ngcontent-%COMP%]   .cbutton-item[_ngcontent-%COMP%]{margin-bottom:10px;margin-right:10px;background-color:var(--ion-color-white);border:1px solid var(--ion-color-light);font-size:var(--ion-text);padding:7px 9px}"]],data:{}});function g(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.setActive(n.context.index,n.context.$implicit)&&e),e},null,null)),e["\u0275did"](1,278528,null,0,a.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{active:0}),(n()(),e["\u0275ted"](3,null,["",""]))],function(n,l){var t=n(l,2,0,l.context.index==l.component.active);n(l,1,0,"item",t)},function(n,l){n(l,3,0,l.context.$implicit.name)})}function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","cbutton-item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.open(n.context.$implicit.id)&&e),e},null,null)),(n()(),e["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.context.$implicit.name)})}function b(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","button-item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","title"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.open(n.context.$implicit.id)&&e),e},null,null)),(n()(),e["\u0275ted"](2,null,["",""])),(n()(),e["\u0275eld"](3,0,null,null,4,"div",[["class","cbutton-box"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","cbutton-item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.open(n.context.$implicit.id)&&e),e},null,null)),(n()(),e["\u0275ted"](5,null,[" "," "])),(n()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](7,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,7,0,l.context.$implicit.cat_id)},function(n,l){n(l,2,0,l.context.$implicit.name),n(l,5,0,l.context.$implicit.name)})}function h(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,8,"ion-content",[["padding",""]],null,null,null,d.rb,d.o)),e["\u0275did"](1,49152,null,0,o.w,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),e["\u0275did"](2,16384,null,0,o.f,[e.ElementRef],null,null),(n()(),e["\u0275eld"](3,0,null,0,1,"app-seletebtn",[],null,[[null,"mclick"]],function(n,l,t){var e=!0;return"mclick"===l&&(e=!1!==n.component.clickotherfn(t)&&e),e},s.b,s.a)),e["\u0275did"](4,114688,null,0,f.a,[],{name:[0,"name"],isactive:[1,"isactive"],isshowimg:[2,"isshowimg"],id:[3,"id"],iscenter:[4,"iscenter"]},{mclick:"mclick"}),(n()(),e["\u0275eld"](5,0,null,0,3,"div",[["class","button-box"],["margin-top",""]],null,null,null,null,null)),e["\u0275did"](6,16384,null,0,o.f,[e.ElementRef],null,null),(n()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](8,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,4,0,"\u8fdb\u5165"+t.activeList.name+"\u9891\u9053",!0,!0,t.activeList.id,!0),n(l,8,0,t.activeList.cat_id)},null)}function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,d.vb,d.s)),e["\u0275did"](1,49152,null,0,o.D,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"]},null),(n()(),e["\u0275eld"](2,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,d.fc,d.cb)),e["\u0275did"](3,49152,null,0,o.Eb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"]},null),(n()(),e["\u0275eld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,d.jb,d.g)),e["\u0275did"](5,49152,null,0,o.n,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e},d.ib,d.f)),e["\u0275did"](7,49152,null,0,o.m,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,d.wb,d.t)),e["\u0275did"](9,49152,null,0,o.E,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),e["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,d.dc,d.ab)),e["\u0275did"](11,49152,null,0,o.Cb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275ted"](-1,0,["\u5546\u54c1\u5206\u7c7b"])),(n()(),e["\u0275eld"](13,0,null,null,11,"ion-content",[],null,null,null,d.rb,d.o)),e["\u0275did"](14,49152,null,0,o.w,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{scrollY:[0,"scrollY"]},null),(n()(),e["\u0275eld"](15,0,null,0,9,"div",[["class","my-content"]],null,null,null,null,null)),(n()(),e["\u0275eld"](16,0,null,null,5,"div",[["class","left"]],null,null,null,null,null)),(n()(),e["\u0275eld"](17,0,null,null,4,"ion-content",[],null,null,null,d.rb,d.o)),e["\u0275did"](18,49152,null,0,o.w,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](19,0,null,0,2,"div",[["class","left-nav"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](21,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](22,0,null,null,2,"div",[["class","right"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](24,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,"ios"),n(l,3,0,"ios"),n(l,9,0,"ios","arrow-back"),n(l,14,0,!1),n(l,21,0,t.navlist),n(l,24,0,t.activeList)},null)}function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-sj-productnav",[],null,null,null,C,m)),e["\u0275did"](1,114688,null,0,u,[o.Kb,i.a,p.a,p.n],null,null)],function(n,l){n(l,1,0)},null)}var R=e["\u0275ccf"]("app-sj-productnav",u,x,{},{},[]),k=t("gIcY"),O=t("hoFm"),y=t("iTUp"),_=t("FUS3"),M=t("j1ZV");t.d(l,"SjProductnavPageModuleNgFactory",function(){return w});var w=e["\u0275cmf"](c,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,R]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,k.t,k.t,[]),e["\u0275mpd"](4608,o.c,o.c,[e.NgZone,e.ApplicationRef]),e["\u0275mpd"](4608,o.Jb,o.Jb,[o.c,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,o.Nb,o.Nb,[o.c,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,O.a,O.a,[]),e["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),e["\u0275mpd"](1073742336,k.q,k.q,[]),e["\u0275mpd"](1073742336,k.d,k.d,[]),e["\u0275mpd"](1073742336,o.Gb,o.Gb,[]),e["\u0275mpd"](1073742336,y.a,y.a,[]),e["\u0275mpd"](1073742336,_.a,_.a,[]),e["\u0275mpd"](1073742336,M.a,M.a,[]),e["\u0275mpd"](1073742336,p.p,p.p,[[2,p.v],[2,p.n]]),e["\u0275mpd"](1073742336,c,c,[]),e["\u0275mpd"](1024,p.l,function(){return[[{path:"",component:u}]]},[])])})},hoFm:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var e=t("CcnG"),o=function(){function n(){}return n.prototype.getEmoji=function(){return"\ud83d\ude00 \ud83d\ude03 \ud83d\ude04 \ud83d\ude01 \ud83d\ude06 \ud83d\ude05 \ud83d\ude02 \ud83e\udd23 \ud83d\ude0a \ud83d\ude07 \ud83d\ude42 \ud83d\ude43 \ud83d\ude09 \ud83d\ude0c \ud83d\ude0d \ud83d\ude18 \ud83d\ude17 \ud83d\ude19 \ud83d\ude1a \ud83d\ude0b \ud83d\ude1c \ud83d\ude1d \ud83d\ude1b \ud83e\udd11 \ud83e\udd17 \ud83e\udd13 \ud83d\ude0e \ud83e\udd21 \ud83e\udd20 \ud83d\ude0f \ud83d\ude12 \ud83d\ude1e \ud83d\ude14 \ud83d\ude1f \ud83d\ude15 \ud83d\ude41 \u2639\ufe0f \ud83d\ude23 \ud83d\ude16 \ud83d\ude2b \ud83d\ude29 \ud83d\ude24 \ud83d\ude20 \ud83d\ude21 \ud83d\ude36 \ud83d\ude10 \ud83d\ude11 \ud83d\ude2f \ud83d\ude26 \ud83d\ude27 \ud83d\ude2e \ud83d\ude32 \ud83d\ude35 \ud83d\ude33 \ud83d\ude31 \ud83d\ude28 \ud83d\ude30 \ud83d\ude22 \ud83d\ude25 \ud83e\udd24 \ud83d\ude2d \ud83d\ude13 \ud83d\ude2a \ud83d\ude34 \ud83d\ude44 \ud83e\udd14 \ud83e\udd25 \ud83d\ude2c \ud83e\udd10 \ud83e\udd22 \ud83e\udd27 \ud83d\ude37 \ud83e\udd12 \ud83e\udd15 \ud83d\ude08 \ud83d\udc7f \ud83d\udc79 \ud83d\udc7a \ud83d\udca9 \ud83d\udc7b \ud83d\udc80 \u2620\ufe0f \ud83d\udc7d \ud83d\udc7e \ud83e\udd16 \ud83c\udf83 \ud83d\ude3a \ud83d\ude38 \ud83d\ude39 \ud83d\ude3b \ud83d\ude3c \ud83d\ude3d \ud83d\ude40 \ud83d\ude3f \ud83d\ude3e \ud83d\udc50 \ud83d\ude4c \ud83d\udc4f \ud83d\ude4f \ud83e\udd1d \ud83d\udc4d \ud83d\udc4e \ud83d\udc4a \u270a \ud83e\udd1b \ud83e\udd1c \ud83e\udd1e \u270c\ufe0f \ud83e\udd18 \ud83d\udc4c \ud83d\udc48 \ud83d\udc49 \ud83d\udc46 \ud83d\udc47 \u261d\ufe0f \u270b \ud83e\udd1a \ud83d\udd90 \ud83d\udd96 \ud83d\udc4b \ud83e\udd19 \ud83d\udcaa \ud83d\udd95 \u270d\ufe0f \ud83e\udd33 \ud83d\udc85 \ud83d\udd96 \ud83d\udc84 \ud83d\udc8b \ud83d\udc44 \ud83d\udc45 \ud83d\udc42 \ud83d\udc43 \ud83d\udc63 \ud83d\udc41 \ud83d\udc40 \ud83d\udde3 \ud83d\udc64 \ud83d\udc65 \ud83d\udc76 \ud83d\udc66 \ud83d\udc67 \ud83d\udc68 \ud83d\udc69 \ud83d\udc71\u200d\u2640\ufe0f \ud83d\udc71 \ud83d\udc74 \ud83d\udc75 \ud83d\udc72 \ud83d\udc73\u200d\u2640\ufe0f \ud83d\udc73 \ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udc6e \ud83d\udc77\u200d\u2640\ufe0f \ud83d\udc77".split(" ")},n.ngInjectableDef=e.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iTUp:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},j1ZV:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()}}]);