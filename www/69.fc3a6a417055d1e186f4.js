(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{cwVq:function(t,n,e){"use strict";e.r(n);var l=e("CcnG"),o=e("mrSG"),i=e("ZZ/e"),u=e("qfBg"),r=e("6m4Z"),s=e("kF40"),a=e("guGq"),c=e("wQhl"),d=e("LKB+"),h=e("KanJ"),p=e("5TtY"),f=e("e5MR"),g=e("FiTj"),m=e("pYiD"),b=e("7UTA"),R=e("A+5Q"),v=e("zysK"),y=e("4ORR"),w=e("qMMP"),C=e("TB1k"),k=e("aPFe"),N=e("iTze"),E=e("iwMC"),D=e("GwI1"),Z=e("bJQr"),I=e("N+K7"),j=e("vNv0"),x=e("MlSi"),_=e("A3rM"),M=e("wpqE"),J=e("DfVt"),F=e("ucIG"),q=e("eBP+"),G=e("8x+B"),P=e("Q/8f"),z=e("Gyf/"),B=e("3HwV"),T=e("Lags"),V=e("cFrK"),A=e("rGvg"),L=e("nbWp"),K=function(){function t(t,n,e,l,o,i,u,r,s,a,c,d,h,p,f,g,m,b,R,v,y,w,C,k,N,E,D,Z,I,j,x,_,M,J,F,q,G,P,z,B,T){this.route=t,this.nav=n,this.userfn=e,this.native=l,this.articelist=o,this.bounslist=i,this.collelist=u,this.contactlist=r,this.emojiisshow=s,this.getproduct=a,this.goodsattr=c,this.gwc=d,this.gzlist=h,this.http=p,this.lljl=f,this.newslist=g,this.orderlist=m,this.ordersuccess=b,this.paymentlist=R,this.payorder=v,this.pqlist=y,this.productcontentlist=w,this.productslist=C,this.provinces=k,this.scindex=N,this.searchendgoods=E,this.searchrecode=D,this.seletemedia=Z,this.shopcontent=I,this.shopnav=j,this.sjindextjgoods=x,this.supplierlist=_,this.thorder=M,this.usercenter=J,this.ws=F,this.xclist=q,this.xcsclist=G,this.yhtclist=P,this.yjlist=z,this.ztlist=B,this.alertController=T}return t.prototype.ngOnInit=function(){this.ismobile=this.native.ismobile()},t.prototype.ionViewWillEnter=function(){var t=this;this.userfn.getUserp().then((function(n){t.user=n}))},t.prototype.ionViewDidEnter=function(){},t.prototype.goBack=function(){this.nav.back()},t.prototype.toSetpw=function(){this.route.navigate(["/set-pd"],{queryParams:{type:2}})},t.prototype.setPaypwd=function(){this.route.navigate(["/setpaypwd"])},t.prototype.loginout=function(){return o.__awaiter(this,void 0,void 0,(function(){var t=this;return o.__generator(this,(function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"提示!",message:"是否确认退出!",buttons:[{text:"取消",role:"cancel",cssClass:"secondary",handler:function(t){}},{text:"确认",handler:function(){t.clearAlldata(),t.nav.navigateRoot("/login")}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},t.prototype.gotopage=function(){this.route.navigate(["/contactlist"],{queryParams:{type:3}})},t.prototype.tobill=function(){this.route.navigate(["/bill"])},t.prototype.toabout=function(){this.route.navigate(["/about-us"])},t.prototype.clearAlldata=function(){this.articelist.clear(),this.bounslist.clear(),this.collelist.clear(),this.contactlist.clear(),this.emojiisshow.clear(),this.getproduct.clear(),this.goodsattr.clear(),this.gwc.clear(),this.gzlist.clear(),this.http.clearUser(),this.lljl.clear(),this.native.clearStorage(),this.newslist.clear(),this.orderlist.clear(),this.ordersuccess.clearData(),this.paymentlist.clear(),this.payorder.clear(),this.pqlist.clear(),this.productcontentlist.clear(),this.productslist.clear(),this.provinces.clear(),this.scindex.clear(),this.searchendgoods.clear(),this.searchrecode.clear(),this.seletemedia.clear(),this.shopcontent.clear(),this.shopnav.clear(),this.sjindextjgoods.clear(),this.supplierlist.clear(),this.thorder.clearData(),this.userfn.clear(),this.usercenter.clear(),this.ws.clear(),this.xclist.clear(),this.xcsclist.clear(),this.yhtclist.clear(),this.yjlist.clear(),this.ztlist.clear()},t}(),S=function(){return function(){}}(),Q=e("pMnS"),Y=e("oBZk"),O=e("Ip0R"),U=e("ZYCi"),H=l["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function W(t){return l["ɵvid"](0,[(t()(),l["ɵeld"](0,0,null,null,2,"ion-item",[["button",""]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.setPaypwd()&&l),l}),Y.Eb,Y.y)),l["ɵdid"](1,49152,null,0,i.J,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{button:[0,"button"]},null),(t()(),l["ɵted"](-1,0,["设置支付密码"]))],(function(t,n){t(n,1,0,"")}),null)}function X(t){return l["ɵvid"](0,[(t()(),l["ɵeld"](0,0,null,null,2,"ion-item",[["button",""]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.setPaypwd()&&l),l}),Y.Eb,Y.y)),l["ɵdid"](1,49152,null,0,i.J,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{button:[0,"button"]},null),(t()(),l["ɵted"](-1,0,["修改支付密码"]))],(function(t,n){t(n,1,0,"")}),null)}function $(t){return l["ɵvid"](0,[(t()(),l["ɵeld"](0,0,null,null,2,"ion-item",[["button",""]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.gotopage(1)&&l),l}),Y.Eb,Y.y)),l["ɵdid"](1,49152,null,0,i.J,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{button:[0,"button"]},null),(t()(),l["ɵted"](-1,0,["地址管理"]))],(function(t,n){t(n,1,0,"")}),null)}function tt(t){return l["ɵvid"](0,[(t()(),l["ɵeld"](0,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,Y.vb,Y.s)),l["ɵdid"](1,49152,null,0,i.D,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"]},null),(t()(),l["ɵeld"](2,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,Y.fc,Y.cb)),l["ɵdid"](3,49152,null,0,i.Eb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"]},null),(t()(),l["ɵeld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,Y.jb,Y.g)),l["ɵdid"](5,49152,null,0,i.n,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(t()(),l["ɵeld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.goBack()&&l),l}),Y.ib,Y.f)),l["ɵdid"](7,49152,null,0,i.m,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(t()(),l["ɵeld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,Y.wb,Y.t)),l["ɵdid"](9,49152,null,0,i.E,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(t()(),l["ɵeld"](10,0,null,0,2,"ion-title",[],null,null,null,Y.dc,Y.ab)),l["ɵdid"](11,49152,null,0,i.Cb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(t()(),l["ɵted"](-1,0,["更多设置"])),(t()(),l["ɵeld"](13,0,null,null,20,"ion-content",[],null,null,null,Y.rb,Y.o)),l["ɵdid"](14,49152,null,0,i.w,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(t()(),l["ɵeld"](15,0,null,0,18,"ion-content",[["class","ion-padding"]],null,null,null,Y.rb,Y.o)),l["ɵdid"](16,49152,null,0,i.w,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(t()(),l["ɵeld"](17,0,null,0,13,"ion-list",[],null,null,null,Y.Hb,Y.D)),l["ɵdid"](18,49152,null,0,i.Q,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(t()(),l["ɵand"](16777216,null,0,1,null,W)),l["ɵdid"](20,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["ɵand"](16777216,null,0,1,null,X)),l["ɵdid"](22,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["ɵand"](16777216,null,0,1,null,$)),l["ɵdid"](24,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["ɵeld"](25,0,null,0,2,"ion-item",[["button",""]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.toSetpw()&&l),l}),Y.Eb,Y.y)),l["ɵdid"](26,49152,null,0,i.J,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{button:[0,"button"]},null),(t()(),l["ɵted"](-1,0,["修改登录密码"])),(t()(),l["ɵeld"](28,0,null,0,2,"ion-item",[["button",""]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.toabout()&&l),l}),Y.Eb,Y.y)),l["ɵdid"](29,49152,null,0,i.J,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{button:[0,"button"]},null),(t()(),l["ɵted"](-1,0,["关于我们"])),(t()(),l["ɵeld"](31,0,null,0,2,"ion-button",[["color","danger"],["expand","block"]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.loginout()&&l),l}),Y.ib,Y.f)),l["ɵdid"](32,49152,null,0,i.m,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{color:[0,"color"],expand:[1,"expand"]},null),(t()(),l["ɵted"](-1,0,["退出登录"]))],(function(t,n){var e=n.component;t(n,1,0,"ios"),t(n,3,0,"ios"),t(n,9,0,"ios","arrow-back"),t(n,20,0,e.user&&0==e.user.is_surplus_open),t(n,22,0,e.user&&1==e.user.is_surplus_open),t(n,24,0,e.user),t(n,26,0,""),t(n,29,0,""),t(n,32,0,"danger","block")}),null)}function nt(t){return l["ɵvid"](0,[(t()(),l["ɵeld"](0,0,null,null,1,"app-center-more",[],null,null,null,tt,H)),l["ɵdid"](1,114688,null,0,K,[U.n,i.Kb,u.a,r.a,s.a,a.a,c.a,d.a,h.a,p.a,f.a,g.a,m.a,I.a,b.a,R.a,v.a,y.a,w.a,C.a,k.a,N.a,E.a,D.a,Z.a,j.a,x.a,_.a,M.a,J.a,F.a,q.a,G.a,P.a,z.a,B.a,T.a,V.a,A.a,L.a,i.b],null,null)],(function(t,n){t(n,1,0)}),null)}var et=l["ɵccf"]("app-center-more",K,nt,{},{},[]),lt=e("gIcY");e.d(n,"CenterMorePageModuleNgFactory",(function(){return ot}));var ot=l["ɵcmf"](S,[],(function(t){return l["ɵmod"]([l["ɵmpd"](512,l.ComponentFactoryResolver,l["ɵCodegenComponentFactoryResolver"],[[8,[Q.a,et]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["ɵmpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[l.LOCALE_ID,[2,O["ɵangular_packages_common_common_a"]]]),l["ɵmpd"](4608,lt.s,lt.s,[]),l["ɵmpd"](4608,i.c,i.c,[l.NgZone,l.ApplicationRef]),l["ɵmpd"](4608,i.Jb,i.Jb,[i.c,l.ComponentFactoryResolver,l.Injector]),l["ɵmpd"](4608,i.Nb,i.Nb,[i.c,l.ComponentFactoryResolver,l.Injector]),l["ɵmpd"](1073742336,O.CommonModule,O.CommonModule,[]),l["ɵmpd"](1073742336,lt.r,lt.r,[]),l["ɵmpd"](1073742336,lt.d,lt.d,[]),l["ɵmpd"](1073742336,i.Gb,i.Gb,[]),l["ɵmpd"](1073742336,U.p,U.p,[[2,U.u],[2,U.n]]),l["ɵmpd"](1073742336,S,S,[]),l["ɵmpd"](1024,U.l,(function(){return[[{path:"",component:K}]]}),[])])}))}}]);