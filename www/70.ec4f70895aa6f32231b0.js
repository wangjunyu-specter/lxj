(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{FGzT:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("ZZ/e"),i=t("aPFe"),u=t("N+K7"),a=t("pYiD"),r=t("KanJ"),c=t("qfBg"),d=t("yrQW"),s=function(){function n(n,l,t,e,o,i,u,a){this.activeroute=n,this.nav=l,this.pqlistfn=t,this.http=e,this.gzlist=o,this.emojiishow=i,this.userfn=u,this.itemclickfn=a,this.pageObj={page:1,num:20}}return n.prototype.ngOnInit=function(){this.isshowDrop=!1,this.setPlitem={}},n.prototype.ionViewDidEnter=function(){var n=this;this.gzlist.getList().then(function(l){n.gzlistarr=l}).catch(function(l){n.gzlistarr=[]}),this.activeroute.queryParams.subscribe(function(l){console.log(l),n.id=l.id,n.type=l.type?Number(l.type):0,n.data=n.pqlistfn.getPqone(n.id,n.type),n.getContent()}),this.userfn.getUserp().then(function(l){n.user=l})},n.prototype.getContent=function(){var n=this,l=1;this.data||(l=2),this.http.getData(this.http.getpllist,{tid:this.id,page:this.pageObj.page,num:this.pageObj.num,hasdata:l}).subscribe(function(l){console.log(l),n.data||(n.data=l.result.data.result,n.gzlist.setList(l.result.data.users)),n.pllist=l.result.result},function(n){console.log(n)})},n.prototype.goBack=function(){this.nav.back()},n.prototype.monfous=function(){console.log("\u65f6\u5019"),this.isshowDrop=!0},n.prototype.monblur=function(){this.emojiishow.getIsshows()||this.blurClear()},n.prototype.sub=function(n){var l=this;if(!n)return!1;console.log(n);var t=Object.assign({},this.setPlitem),e={touid:t.userid||this.data.userid,tid:this.data.id,content:n};e.ishf=t.uid!=this.user.user_id&&t.touid==this.user.user_id?1:0,console.log(t),e.pid=t.pid&&0!=t.pid?t.pid:t.id&&0!=t.id?t.id:0,console.log(e),this.blurClear(1),this.http.postformdataloading(this.http.setpl,e).subscribe(function(n){if(console.log(n),e.id=n.result.id,e.time=Date.parse((new Date).toString())/1e3,e.headimg=l.user.headimg,e.dznum=0,e.user_name=l.user.user_name,e.name=n.result.user.name,console.log(e.pid),0==e.pid)l.pllist.unshift(e);else for(var t=0,o=l.pllist.length;t<o;t++)if(console.log(l.pllist[t].id),l.pllist[t].id==e.pid)return l.pllist[t].chrild||(l.pllist[t].chrild=[]),l.pllist[t].chrild.unshift(e),l.pllist[t].plnum+=1,!1})},n.prototype.clickdrop=function(){this.blurClear(1),this.itemclickfn.Source.emit(2)},n.prototype.setplItem=function(n){console.log(n),this.isshowDrop=!0,this.seletename=n.user_name,this.setPlitem=n},n.prototype.blurClear=function(n){var l=this;n&&this.emojiishow.setIsshow(2),this.isclear=setTimeout(function(){l.setPlitem={},l.isclear=null},1e3),this.seletename="",this.isshowDrop=!1},n}(),p=function(){return function(){}}(),g=t("pMnS"),f=t("GDKg"),m=t("hM2H"),h=t("Ip0R"),b=t("oBZk"),C=t("1Rjz"),O=t("3rJi"),_=t("ZYjt"),v=t("iQv9"),P=t("6m4Z"),x=t("y5PK"),M=t("5x7T"),y=t("ZYCi"),w=t("n/qi"),R=t("kcdq"),I=t("4mAG"),k=t("yeIC"),N=t("p9W/"),z=e["\u0275crt"]({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{--background:#fff}ion-content[_ngcontent-%COMP%]{--background:var(--ion-gray-background-color)}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]{background-color:#fff}ion-content[_ngcontent-%COMP%]   .address-box[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;margin-top:10px}ion-content[_ngcontent-%COMP%]   .address-box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{margin-right:10px}ion-content[_ngcontent-%COMP%]   .address-box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;background-color:var(--ion-color-light);padding:2px 5px;border-radius:5px;font-size:var(--ion-sm-text)}ion-content[_ngcontent-%COMP%]   .address-box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}ion-content[_ngcontent-%COMP%]   .address-box[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:var(--ion-sm-text)}ion-content[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{margin-top:15px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-size:var(--ion-sm-text);color:var(--ion-color-medium)}ion-content[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;margin-right:5px}ion-content[_ngcontent-%COMP%]   .app-pllist[_ngcontent-%COMP%]{padding-top:1px;margin-top:15px;background-color:#fff}ion-content[_ngcontent-%COMP%]   .app-pllist[_ngcontent-%COMP%]   .hfnum[_ngcontent-%COMP%]{font-size:var(--ion-text);color:var(--ion-color-dark);margin:15px}.search-bar[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:#fff;padding:0 10px;height:36px}.search-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:var(--ion-statusbar-left);font-size:var(--ion-icon-big);display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.search-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;margin-left:5px}.search-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:25px;display:flex;flex-direction:row;justify-content:flex-end}.search-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.search-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div.round[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6);width:21px;height:21px;border-radius:50%;display:flex;flex-direction:row;justify-content:center;align-items:center}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{flex:1;margin:0 15px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%;margin-right:10px}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .name-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .name-box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;font-size:var(--ion-title);color:var(--ion-color-dark)}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .name-box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   app-yhbox[_ngcontent-%COMP%]{margin-left:10px}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .name-box[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);color:var(--ion-color-medium)}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .gz[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--ion-color-linegradient);font-size:var(--ion-sm-text);height:20px;padding:0 7px;display:block;line-height:20px;text-align:center;border-radius:10px}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .gz[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:active{background:var(--ion-color-linegradient-active)}"]],data:{}});function D(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","gz"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["+\u5173\u6ce8"]))],null,null)}function j(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,14,"div",[["class","center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,10,"div",[["class","person"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),e["\u0275ppd"](3,2),(n()(),e["\u0275eld"](4,0,null,null,7,"div",[["class","name-box"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,3,"div",[["class","name"]],null,null,null,null,null)),(n()(),e["\u0275ted"](6,null,[""," "])),(n()(),e["\u0275eld"](7,0,null,null,1,"app-yhbox",[],null,null,null,f.b,f.a)),e["\u0275did"](8,114688,null,0,m.a,[],{title:[0,"title"],color:[1,"color"],noborder:[2,"noborder"]},null),(n()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","des"]],null,null,null,null,null)),(n()(),e["\u0275ted"](10,null,["",""])),e["\u0275ppd"](11,1),(n()(),e["\u0275and"](16777216,null,null,2,null,D)),e["\u0275did"](13,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275ppd"](14,2)],function(n,l){var t=l.component;n(l,8,0,t.data.name,"yellow",!0);var o=e["\u0275unv"](l,13,0,n(l,14,0,e["\u0275nov"](l.parent,2),t.data.userid,t.gzlistarr));n(l,13,0,o)},function(n,l){var t=l.component,o=e["\u0275unv"](l,2,0,n(l,3,0,e["\u0275nov"](l.parent,0),t.data.headimg,t.http.zdomain));n(l,2,0,o),n(l,6,0,t.data.user_name);var i=e["\u0275unv"](l,10,0,n(l,11,0,e["\u0275nov"](l.parent,1),t.data.createtime));n(l,10,0,i)})}function E(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.data.content)})}function Z(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","address-box"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,5,"div",[["class","left"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","address"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"ion-icon",[["color","dark"],["name","pin"]],null,null,null,b.wb,b.t)),e["\u0275did"](4,49152,null,0,o.E,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"],name:[1,"name"]},null),(n()(),e["\u0275eld"](5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](6,null,["",""])),(n()(),e["\u0275eld"](7,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,b.ac,b.X)),e["\u0275did"](8,49152,null,0,o.zb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"]},null),(n()(),e["\u0275ted"](-1,0,["\u8ddd\u4f609053km"]))],function(n,l){n(l,4,0,"dark","pin"),n(l,8,0,"medium")},function(n,l){n(l,6,0,l.component.data.address)})}function F(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),e["\u0275ppd"](1,2)],null,function(n,l){var t=l.component,o=e["\u0275unv"](l,0,0,n(l,1,0,e["\u0275nov"](l.parent.parent,0),l.context.$implicit,t.http.zdomain));n(l,0,0,o)})}function T(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,11,"div",[["class","top-content"],["padding",""]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,o.f,[e.ElementRef],null,null),(n()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](3,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](4,0,null,null,1,"app-pqimgbox",[],null,null,null,C.b,C.a)),e["\u0275did"](5,114688,null,0,O.a,[u.a,_.c,o.Jb,v.a,P.a],{imglist:[0,"imglist"],ytimglist:[1,"ytimglist"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,Z)),e["\u0275did"](7,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](8,0,null,null,3,"div",[["class","img-box"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](10,278528,null,0,h.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275ted"](11,null,[" ","\u4eba\u89c9\u5f97\u5f88\u8d5e "]))],function(n,l){var t=l.component;n(l,3,0,t.data.content&&"null"!=t.data.content),n(l,5,0,t.data.thumb&&t.data.thumb[0]?t.data.thumb:t.data.imgarr,t.data.imgarr),n(l,7,0,t.data.address&&"null"!=t.data.address),n(l,10,0,t.data.heads)},function(n,l){n(l,11,0,l.component.data.dznum)})}function q(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-pllist",[],null,[[null,"setItem"]],function(n,l,t){var e=!0;return"setItem"===l&&(e=!1!==n.component.setplItem(t)&&e),e},x.b,x.a)),e["\u0275did"](1,114688,null,0,M.a,[u.a,P.a,d.a,y.n],{data:[0,"data"],tid:[1,"tid"],uid:[2,"uid"]},{setItem:"setItem"})],function(n,l){var t=l.component;n(l,1,0,l.context.$implicit,t.id,t.data.userid)},null)}function V(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","app-pllist"],["margin-bottom",""],["padding-bottom",""]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,o.f,[e.ElementRef],null,null),(n()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","hfnum"]],null,null,null,null,null)),(n()(),e["\u0275ted"](3,null,["","\u6761\u56de\u590d"])),(n()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](5,278528,null,0,h.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,5,0,l.component.pllist)},function(n,l){n(l,3,0,l.component.data.plnum)})}function B(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ion-backdrop",[],null,[[null,"ionBackdropTap"]],function(n,l,t){var e=!0;return"ionBackdropTap"===l&&(e=!1!==n.component.clickdrop()&&e),e},b.gb,b.d)),e["\u0275did"](1,49152,null,0,o.k,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null)],null,null)}function J(n){return e["\u0275vid"](0,[e["\u0275pid"](0,w.a,[]),e["\u0275pid"](0,R.a,[]),e["\u0275pid"](0,I.a,[]),(n()(),e["\u0275eld"](3,0,null,null,11,"ion-header",[["mode","ios"]],null,null,null,b.vb,b.s)),e["\u0275did"](4,49152,null,0,o.D,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"]},null),(n()(),e["\u0275eld"](5,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,b.fc,b.cb)),e["\u0275did"](6,49152,null,0,o.Eb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"]},null),(n()(),e["\u0275eld"](7,0,null,0,7,"div",[["class","search-bar"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,1,"div",[["class","left"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e},null,null)),(n()(),e["\u0275eld"](9,0,null,null,0,"img",[["alt",""],["src","/assets/backbg.svg"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,j)),e["\u0275did"](11,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](12,0,null,null,2,"div",[["class","right"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,1,"ion-icon",[["mode","ios"],["name","more"]],null,null,null,b.wb,b.t)),e["\u0275did"](14,49152,null,0,o.E,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),e["\u0275eld"](15,0,null,null,7,"ion-content",[],null,null,null,b.rb,b.o)),e["\u0275did"](16,49152,null,0,o.w,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275and"](16777216,null,0,1,null,T)),e["\u0275did"](18,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,0,1,null,V)),e["\u0275did"](20,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,0,1,null,B)),e["\u0275did"](22,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](23,0,null,null,6,"ion-footer",[],null,null,null,b.tb,b.q)),e["\u0275did"](24,49152,null,0,o.B,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](25,0,null,0,4,"ion-toolbar",[["no-padding",""]],null,null,null,b.fc,b.cb)),e["\u0275did"](26,49152,null,0,o.Eb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),e["\u0275did"](27,16384,null,0,o.f,[e.ElementRef],null,null),(n()(),e["\u0275eld"](28,0,null,0,1,"app-chatinputbox",[],null,[[null,"sub"],[null,"myfous"],[null,"mybulr"]],function(n,l,t){var e=!0,o=n.component;return"sub"===l&&(e=!1!==o.sub(t)&&e),"myfous"===l&&(e=!1!==o.monfous()&&e),"mybulr"===l&&(e=!1!==o.monblur()&&e),e},k.b,k.a)),e["\u0275did"](29,114688,null,0,N.a,[r.a,P.a,d.a],{username:[0,"username"]},{myfous:"myfous",mybulr:"mybulr",sub:"sub"})],function(n,l){var t=l.component;n(l,4,0,"ios"),n(l,6,0,"ios"),n(l,11,0,t.data),n(l,14,0,"ios","more"),n(l,18,0,t.data),n(l,20,0,t.data),n(l,22,0,t.isshowDrop),n(l,29,0,t.seletename)},null)}function L(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-pqcontent",[],null,null,null,J,z)),e["\u0275did"](1,114688,null,0,s,[y.a,o.Kb,i.a,u.a,a.a,r.a,c.a,d.a],null,null)],function(n,l){n(l,1,0)},null)}var G=e["\u0275ccf"]("app-pqcontent",s,L,{},{},[]),K=t("gIcY"),S=t("hoFm"),Y=t("iTUp"),A=t("FUS3"),U=t("j1ZV");t.d(l,"PqcontentPageModuleNgFactory",function(){return Q});var Q=e["\u0275cmf"](p,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[g.a,G]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[e.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,K.t,K.t,[]),e["\u0275mpd"](4608,o.c,o.c,[e.NgZone,e.ApplicationRef]),e["\u0275mpd"](4608,o.Jb,o.Jb,[o.c,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,o.Nb,o.Nb,[o.c,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,S.a,S.a,[]),e["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),e["\u0275mpd"](1073742336,K.q,K.q,[]),e["\u0275mpd"](1073742336,K.d,K.d,[]),e["\u0275mpd"](1073742336,o.Gb,o.Gb,[]),e["\u0275mpd"](1073742336,Y.a,Y.a,[]),e["\u0275mpd"](1073742336,A.a,A.a,[]),e["\u0275mpd"](1073742336,U.a,U.a,[]),e["\u0275mpd"](1073742336,y.p,y.p,[[2,y.v],[2,y.n]]),e["\u0275mpd"](1073742336,p,p,[]),e["\u0275mpd"](1024,y.l,function(){return[[{path:"",component:s}]]},[])])})}}]);