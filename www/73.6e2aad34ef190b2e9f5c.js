(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"86cc":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=e("ZZ/e"),o=e("4ORR"),d=e("Ud6+"),i=function(){function l(l,n,e,u,t){this.nav=l,this.route=n,this.activeroute=e,this.order=u,this.topage=t}return l.prototype.ngOnInit=function(){this.ishw=!0,this.res=this.order.getData();var l=this.activeroute.snapshot.queryParams;l&&1==l.type&&(this.ishw=!1)},l.prototype.ionViewDidEnter=function(){console.log(this.res),this.res||this.goIndex(),this.orderId=this.res.order.order_id,this.res&&this.res.split_order&&(this.data=this.res.split_order.suborder_list)},l.prototype.ionViewDidLeave=function(){},l.prototype.goIndex=function(){this.order.clearData(),this.nav.navigateBack("tabs/tab1")},l.prototype.getContent=function(){},l.prototype.gotoPage=function(l,n){this.topage.toPage(l,n)},l}(),c=function(){return function(){}}(),r=e("pMnS"),a=e("oBZk"),f=e("Ip0R"),p=e("ZYCi"),s=u["ɵcrt"]({encapsulation:0,styles:[[".top[_ngcontent-%COMP%]{background:url(paysuccess.0432513761fd56dd81eb.jpg) left top/100% 100% no-repeat;color:#fff}"]],data:{}});function g(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["配送方式："])),(l()(),u["ɵeld"](2,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,a.ac,a.X)),u["ɵdid"](3,49152,null,0,t.zb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(l()(),u["ɵted"](4,0,["",""]))],(function(l,n){l(n,3,0,"danger")}),(function(l,n){l(n,4,0,n.parent.context.$implicit.shipping_name)}))}function m(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,23,"div",[["class","content"],["padding",""]],null,null,null,null,null)),u["ɵdid"](1,16384,null,0,t.f,[u.ElementRef],null,null),(l()(),u["ɵeld"](2,0,null,null,2,"div",[["class","title"]],null,null,null,null,null)),(l()(),u["ɵeld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](4,null,["您的商品将由","为您配送"])),(l()(),u["ɵeld"](5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["订单号："])),(l()(),u["ɵeld"](7,0,null,null,2,"ion-text",[],null,null,null,a.ac,a.X)),u["ɵdid"](8,49152,null,0,t.zb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵted"](9,0,["",""])),(l()(),u["ɵeld"](10,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](11,null,["","："])),(l()(),u["ɵeld"](12,0,null,null,2,"ion-text",[],null,null,null,a.ac,a.X)),u["ɵdid"](13,49152,null,0,t.zb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵted"](14,0,["",""])),(l()(),u["ɵand"](16777216,null,null,1,null,g)),u["ɵdid"](16,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["ɵeld"](17,0,null,null,6,"ion-row",[],null,null,null,a.Ob,a.L)),u["ɵdid"](18,49152,null,0,t.lb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵeld"](19,0,null,0,4,"ion-col",[],null,null,null,a.qb,a.n)),u["ɵdid"](20,49152,null,0,t.v,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵeld"](21,0,null,0,2,"ion-button",[["color","success"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.gotoPage(12,l.context.$implicit.order_sn)&&u),u}),a.ib,a.f)),u["ɵdid"](22,49152,null,0,t.m,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u["ɵted"](-1,0,["查看订单"]))],(function(l,n){l(n,16,0,n.context.$implicit.shipping_name),l(n,22,0,"success","block")}),(function(l,n){l(n,4,0,n.context.$implicit.shipping_name),l(n,9,0,n.context.$implicit.order_sn),l(n,11,0,n.context.$implicit.pay_name),l(n,14,0,n.context.$implicit.order_amount_formated)}))}function R(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,8,"div",[["class","nohw"]],null,null,null,null,null)),(l()(),u["ɵeld"](1,0,null,null,5,"div",[["class","top"],["padding",""]],null,null,null,null,null)),u["ɵdid"](2,16384,null,0,t.f,[u.ElementRef],null,null),(l()(),u["ɵeld"](3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["订单提交成功!"])),(l()(),u["ɵeld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["您的包裹整装待发~~~"])),(l()(),u["ɵand"](16777216,null,null,1,null,m)),u["ɵdid"](8,278528,null,0,f.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,8,0,n.component.data)}),null)}function h(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,11,"div",[["class","content"],["padding",""]],null,null,null,null,null)),u["ɵdid"](1,16384,null,0,t.f,[u.ElementRef],null,null),(l()(),u["ɵeld"](2,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["订单号："])),(l()(),u["ɵeld"](4,0,null,null,2,"ion-text",[],null,null,null,a.ac,a.X)),u["ɵdid"](5,49152,null,0,t.zb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵted"](6,0,["",""])),(l()(),u["ɵeld"](7,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](8,null,["","："])),(l()(),u["ɵeld"](9,0,null,null,2,"ion-text",[],null,null,null,a.ac,a.X)),u["ɵdid"](10,49152,null,0,t.zb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵted"](11,0,["",""]))],null,(function(l,n){l(n,6,0,n.context.$implicit.order_sn),l(n,8,0,n.context.$implicit.pay_name),l(n,11,0,n.context.$implicit.order_amount_formated)}))}function b(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,26,"div",[["class","hw"]],null,null,null,null,null)),(l()(),u["ɵeld"](1,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),u["ɵeld"](2,0,null,null,5,"div",[["class","top"],["padding",""]],null,null,null,null,null)),u["ɵdid"](3,16384,null,0,t.f,[u.ElementRef],null,null),(l()(),u["ɵeld"](4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["您的订单已经提交!"])),(l()(),u["ɵeld"](6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["请注意出发时间及商家消息~~~"])),(l()(),u["ɵand"](16777216,null,null,1,null,h)),u["ɵdid"](9,278528,null,0,f.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["ɵeld"](10,0,null,null,6,"ion-row",[],null,null,null,a.Ob,a.L)),u["ɵdid"](11,49152,null,0,t.lb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵeld"](12,0,null,0,4,"ion-col",[],null,null,null,a.qb,a.n)),u["ɵdid"](13,49152,null,0,t.v,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵeld"](14,0,null,0,2,"ion-button",[["color","success"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.getContent()&&u),"click"===n&&(u=!1!==t.gotoPage(11,t.orderId)&&u),u}),a.ib,a.f)),u["ɵdid"](15,49152,null,0,t.m,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u["ɵted"](-1,0,["查看订单"])),(l()(),u["ɵeld"](17,0,null,null,9,"div",[["padding",""]],null,null,null,null,null)),u["ɵdid"](18,16384,null,0,t.f,[u.ElementRef],null,null),(l()(),u["ɵeld"](19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["户外旅行有一定的风险性，请随时注意安全，如发生任何情况，请尽快拨打救援电话或直接拨打110求救："])),(l()(),u["ɵeld"](21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["救援电话1：123123"])),(l()(),u["ɵeld"](23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["救援电话1：123123"])),(l()(),u["ɵeld"](25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["救援电话1：123123"]))],(function(l,n){l(n,9,0,n.component.data),l(n,15,0,"success","block")}),null)}function v(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,11,"ion-header",[["mode","ios"]],null,null,null,a.vb,a.s)),u["ɵdid"](1,49152,null,0,t.D,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{mode:[0,"mode"]},null),(l()(),u["ɵeld"](2,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,a.fc,a.cb)),u["ɵdid"](3,49152,null,0,t.Eb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{mode:[0,"mode"]},null),(l()(),u["ɵeld"](4,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,a.jb,a.g)),u["ɵdid"](5,49152,null,0,t.n,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵeld"](6,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goIndex()&&u),u}),a.ib,a.f)),u["ɵdid"](7,49152,null,0,t.m,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵted"](-1,0,[" 完成 "])),(l()(),u["ɵeld"](9,0,null,0,2,"ion-title",[],null,null,null,a.dc,a.ab)),u["ɵdid"](10,49152,null,0,t.Cb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵted"](-1,0,["支付成功"])),(l()(),u["ɵeld"](12,0,null,null,5,"ion-content",[],null,null,null,a.rb,a.o)),u["ɵdid"](13,49152,null,0,t.w,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["ɵand"](16777216,null,0,1,null,R)),u["ɵdid"](15,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["ɵand"](16777216,null,0,1,null,b)),u["ɵdid"](17,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,"ios"),l(n,3,0,"ios"),l(n,15,0,!e.ishw),l(n,17,0,e.ishw)}),null)}function C(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,1,"app-ordersuccess",[],null,null,null,v,s)),u["ɵdid"](1,114688,null,0,i,[t.Kb,p.n,p.a,o.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var N=u["ɵccf"]("app-ordersuccess",i,C,{},{},[]),D=e("gIcY");e.d(n,"OrdersuccessPageModuleNgFactory",(function(){return E}));var E=u["ɵcmf"](c,[],(function(l){return u["ɵmod"]([u["ɵmpd"](512,u.ComponentFactoryResolver,u["ɵCodegenComponentFactoryResolver"],[[8,[r.a,N]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["ɵmpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[u.LOCALE_ID,[2,f["ɵangular_packages_common_common_a"]]]),u["ɵmpd"](4608,D.s,D.s,[]),u["ɵmpd"](4608,t.c,t.c,[u.NgZone,u.ApplicationRef]),u["ɵmpd"](4608,t.Jb,t.Jb,[t.c,u.ComponentFactoryResolver,u.Injector]),u["ɵmpd"](4608,t.Nb,t.Nb,[t.c,u.ComponentFactoryResolver,u.Injector]),u["ɵmpd"](1073742336,f.CommonModule,f.CommonModule,[]),u["ɵmpd"](1073742336,D.r,D.r,[]),u["ɵmpd"](1073742336,D.d,D.d,[]),u["ɵmpd"](1073742336,t.Gb,t.Gb,[]),u["ɵmpd"](1073742336,p.p,p.p,[[2,p.u],[2,p.n]]),u["ɵmpd"](1073742336,c,c,[]),u["ɵmpd"](1024,p.l,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);