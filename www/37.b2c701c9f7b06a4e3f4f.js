(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{FUS3:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},RuDU:function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),o=t("mrSG"),i=t("ZZ/e"),u=t("N+K7"),a=t("qfBg"),r=t("A3rM"),s=t("gRf5"),d=t("t8sF"),c=t("6m4Z"),p=t("eaQS"),f=function(){function n(n,e,t,l,o,i,u,a,r,s,d){this.nav=n,this.http=e,this.user=t,this.seletemedia=l,this.native=o,this.actionSheetController=i,this.file=u,this.activeroute=a,this.transfer=r,this.popoverController=s,this.route=d}return n.prototype.ngOnInit=function(){this.isseleteVedio=0,this.imgs=[],this.isshowend=!0,this.address="12323"},n.prototype.ionViewDidEnter=function(){this.type=this.activeroute.snapshot.queryParams.type.toString(),this.addressObj=this.user.getLocation(),this.userdata=this.user.getUserp()},n.prototype.goBack=function(){this.nav.back()},n.prototype.ionViewDidLeave=function(){this.seletemedia.clear()},n.prototype.addfm=function(){if(9===this.imgs.length)return!1;this.presentActionSheet()},n.prototype.remove=function(n){this.seletemedia.removeOne(n),8===this.imgs.length&&(this.isshowend=!0)},n.prototype.presentActionSheet=function(){return o.b(this,void 0,void 0,function(){var n,e=this;return o.e(this,function(t){switch(t.label){case 0:return n=[],1!=this.isseleteVedio&&n.push.apply(n,[{text:"\u76f8\u673a",role:"destructive",handler:function(){e.native.getPictureByCamera().then(function(n){e.isseleteVedio=2,e.addimgfn(n)})}},{text:"\u76f8\u518c",handler:function(){console.log("Share clicked"),e.native.getPictures(9-e.imgs.length).then(function(n){e.isseleteVedio=2,n.map(function(n){e.addimgfn(n)})},function(n){})}}]),2!=this.isseleteVedio&&n.push({text:"\u62cd\u6444\u89c6\u9891",role:"",handler:function(){e.native.captureVideo().then(function(n){e.isseleteVedio=1,e.videofile=n,e.videofile.getFormatData(function(n){e.videofile1=n})},function(n){})}}),n.push({text:"\u53d6\u6d88",role:"cancel",handler:function(){console.log("Cancel clicked")}}),[4,this.actionSheetController.create({header:"\u8bf7\u9009\u62e9\u6765\u6e90",buttons:n})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n.prototype.addimgfn=function(n){this.seletemedia.addImg(n),9===this.imgs.length&&(this.isshowend=!1)},n.prototype.contentsend=function(n){var e=this,t={img:JSON.stringify(n),type:1,address:this.addressObj.address,lnglat:this.addressObj.lng+"|"+this.addressObj.lat,content:this.content};this.http.postformdataloading(this.http.fbpqitem,t).subscribe(function(n){console.log(n),e.user.addjf(n.result.num),e.uploadEnd(),e.route.navigate(["/fbyjmore"],{queryParams:{type:1,num:n.result.num}})},function(n){e.uploadEnd()})},n.prototype.sub=function(){this.isloading=!0,this.subloading(),1==this.isseleteVedio?this.getVidefile():0===this.imgs.length?this.contentsend():this.basezfile()},n.prototype.getVidefile=function(){var n=this;this.transfer.create().upload(this.videofile.fullPath,this.http.domain+this.http.updateimg,{fileName:this.videofile.name,fileKey:"file",chunkedMode:!1,mimeType:this.videofile.type,params:{width:.5*this.videofile1.width,height:.5*this.videofile1.height}}).then(function(e){var t=JSON.parse(e.response).result;n.contentsend([t])}).catch(function(e){console.log("\u9519\u4e86\u6211"),console.error(e),n.uploadEnd()})},n.prototype.basezfile=function(){var n=this,e=[];this.imgs.map(function(t,l){var o=n.native.getImgbase64tofile(t,"pq"+l);e.push(n.imgupload(o))}),Promise.all(e).then(function(e){n.contentsend(e)}).catch(function(e){alert(e),alert(JSON.stringify(e)),n.native.presentAlert("\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u67e5\u770b\u7f51\u7edc\u662f\u5426\u6b63\u5e38"),n.uploadEnd()})},n.prototype.imgupload=function(n){var e=this;return new Promise(function(t,l){var o=new XMLHttpRequest;o.open("POST",e.http.domain+e.http.updateimg),o.onreadystatechange=function(n){if(4==o.readyState&&200==o.status){var e=JSON.parse(o.response);t(e.result)}},o.onerror=function(n){l(n)},o.send(n)})},n.prototype.playvideo=function(){this.native.nativeVideoplay(this.videofile.fullPath)},n.prototype.uploadEnd=function(){this.isloading=!1,this.popoverController.dismiss()},n.prototype.subloading=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.popoverController.create({component:p.a,translucent:!1,cssClass:"payboxcontent",backdropDismiss:!1})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n}(),g=function(){return function(){}}(),h=t("pMnS"),m=t("1Rjz"),v=t("3rJi"),b=t("ZYjt"),C=t("iQv9"),y=t("oBZk"),R=t("gIcY"),w=t("Ip0R"),N=t("ZYCi"),E=l["\u0275crt"]({encapsulation:0,styles:[['.img-box[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.box[_ngcontent-%COMP%]{display:inline-block;position:relative;width:100%;float:left;font-size:12px;background-color:var(--ion-gray-background-color);border-radius:5px;overflow:hidden}.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.box[_ngcontent-%COMP%]:before{content:"";display:block;padding-top:100%}.bf-box[_ngcontent-%COMP%]{width:100px;height:100px;border:1px solid var(--ion-color-light);display:flex;align-items:center;justify-content:center}.bf-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%}']],data:{}});function x(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-pqimgbox",[],null,[[null,"clickItem"],[null,"addimgitem"]],function(n,e,t){var l=!0,o=n.component;return"clickItem"===e&&(l=!1!==o.remove(t)&&l),"addimgitem"===e&&(l=!1!==o.addfm()&&l),l},m.b,m.a)),l["\u0275did"](1,114688,null,0,v.a,[u.a,b.c,i.Jb,C.a,c.a],{imglist:[0,"imglist"],showend:[1,"showend"]},{clickItem:"clickItem",addimgitem:"addimgitem"})],function(n,e){var t=e.component;n(e,1,0,t.imgs,t.isshowend)},null)}function k(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"div",[["class","bf-box"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.playvideo()&&l),l},null,null)),(n()(),l["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","../../../assets/icon/play.svg"]],null,null,null,null,null))],null,null)}function I(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"ion-item",[["button",""]],null,null,null,y.Eb,y.y)),l["\u0275did"](1,49152,null,0,i.J,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{button:[0,"button"]},null),(n()(),l["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","pin"],["slot","start"]],null,null,null,y.wb,y.t)),l["\u0275did"](3,49152,null,0,i.E,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{name:[0,"name"]},null),(n()(),l["\u0275ted"](4,0,[""," "]))],function(n,e){n(e,1,0,""),n(e,3,0,"pin")},function(n,e){n(e,4,0,e.component.addressObj.address)})}function D(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,19,"ion-header",[["mode","ios"]],null,null,null,y.vb,y.s)),l["\u0275did"](1,49152,null,0,i.D,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"]},null),(n()(),l["\u0275eld"](2,0,null,0,17,"ion-toolbar",[["mode","ios"]],null,null,null,y.fc,y.cb)),l["\u0275did"](3,49152,null,0,i.Eb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"]},null),(n()(),l["\u0275eld"](4,0,null,0,5,"ion-buttons",[["mode","ios"],["slot","start"]],null,null,null,y.jb,y.g)),l["\u0275did"](5,49152,null,0,i.n,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.goBack()&&l),l},y.ib,y.f)),l["\u0275did"](7,49152,null,0,i.m,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,y.wb,y.t)),l["\u0275did"](9,49152,null,0,i.E,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),l["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,y.dc,y.ab)),l["\u0275did"](11,49152,null,0,i.Cb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](-1,0,["\u53d1\u5e03"])),(n()(),l["\u0275eld"](13,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,y.jb,y.g)),l["\u0275did"](14,49152,null,0,i.n,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](15,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.sub()&&l),l},y.ib,y.f)),l["\u0275did"](16,49152,null,0,i.m,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{disabled:[0,"disabled"]},null),(n()(),l["\u0275eld"](17,0,null,0,1,"ion-icon",[["name","paper-plane"]],null,null,null,y.wb,y.t)),l["\u0275did"](18,49152,null,0,i.E,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{name:[0,"name"]},null),(n()(),l["\u0275ted"](-1,0,["\u53d1\u8868 "])),(n()(),l["\u0275eld"](20,0,null,null,18,"ion-content",[["class","ion-padding"]],null,null,null,y.rb,y.o)),l["\u0275did"](21,49152,null,0,i.w,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](22,0,null,0,8,"ion-textarea",[["placeholder","\u6b64\u523b\u4f60\u5728\u54ea\u91cc,\u5206\u4eab\u4e0b\u4f60\u7684\u65c5\u884c\u5fc3\u60c5\u5427~"],["rows","7"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,e,t){var o=!0,i=n.component;return"ionBlur"===e&&(o=!1!==l["\u0275nov"](n,25)._handleBlurEvent(t.target)&&o),"ionChange"===e&&(o=!1!==l["\u0275nov"](n,25)._handleInputEvent(t.target)&&o),"ngModelChange"===e&&(o=!1!==(i.content=t)&&o),o},y.bc,y.Y)),l["\u0275did"](23,540672,null,0,R.e,[],{maxlength:[0,"maxlength"]},null),l["\u0275prd"](1024,null,R.g,function(n){return[n]},[R.e]),l["\u0275did"](25,16384,null,0,i.Rb,[l.ElementRef],null,null),l["\u0275prd"](1024,null,R.h,function(n){return[n]},[i.Rb]),l["\u0275did"](27,671744,null,0,R.m,[[8,null],[6,R.g],[8,null],[6,R.h]],{model:[0,"model"]},{update:"ngModelChange"}),l["\u0275prd"](2048,null,R.i,null,[R.m]),l["\u0275did"](29,16384,null,0,R.j,[[4,R.i]],null,null),l["\u0275did"](30,49152,null,0,i.Ab,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{maxlength:[0,"maxlength"],placeholder:[1,"placeholder"],rows:[2,"rows"]},null),(n()(),l["\u0275and"](16777216,null,0,1,null,x)),l["\u0275did"](32,16384,null,0,w.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,0,1,null,k)),l["\u0275did"](34,16384,null,0,w.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](35,0,null,0,3,"ion-list",[["class","ion-margin-top"]],null,null,null,y.Hb,y.D)),l["\u0275did"](36,49152,null,0,i.Q,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275and"](16777216,null,0,1,null,I)),l["\u0275did"](38,16384,null,0,w.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,1,0,"ios"),n(e,3,0,"ios"),n(e,9,0,"ios","arrow-back"),n(e,16,0,!t.content&&0===t.imgs.length),n(e,18,0,"paper-plane"),n(e,23,0,300),n(e,27,0,t.content),n(e,30,0,300,"\u6b64\u523b\u4f60\u5728\u54ea\u91cc,\u5206\u4eab\u4e0b\u4f60\u7684\u65c5\u884c\u5fc3\u60c5\u5427~","7"),n(e,32,0,1!=t.isseleteVedio),n(e,34,0,1==t.isseleteVedio),n(e,38,0,t.addressObj)},function(n,e){n(e,22,0,l["\u0275nov"](e,23).maxlength?l["\u0275nov"](e,23).maxlength:null,l["\u0275nov"](e,29).ngClassUntouched,l["\u0275nov"](e,29).ngClassTouched,l["\u0275nov"](e,29).ngClassPristine,l["\u0275nov"](e,29).ngClassDirty,l["\u0275nov"](e,29).ngClassValid,l["\u0275nov"](e,29).ngClassInvalid,l["\u0275nov"](e,29).ngClassPending)})}function Z(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-fbpqimg",[],null,null,null,D,E)),l["\u0275did"](1,114688,null,0,f,[i.Kb,u.a,a.a,r.a,c.a,i.a,d.a,N.a,s.a,i.Nb,N.n],null,null)],function(n,e){n(e,1,0)},null)}var j=l["\u0275ccf"]("app-fbpqimg",f,Z,{},{},[]),O=t("hoFm"),V=t("iTUp"),P=t("FUS3"),M=t("j1ZV");t.d(e,"FbpqimgPageModuleNgFactory",function(){return S});var S=l["\u0275cmf"](g,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[h.a,j]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[l.LOCALE_ID,[2,w["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,R.t,R.t,[]),l["\u0275mpd"](4608,i.c,i.c,[l.NgZone,l.ApplicationRef]),l["\u0275mpd"](4608,i.Jb,i.Jb,[i.c,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](4608,i.Nb,i.Nb,[i.c,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](4608,O.a,O.a,[]),l["\u0275mpd"](1073742336,w.CommonModule,w.CommonModule,[]),l["\u0275mpd"](1073742336,R.q,R.q,[]),l["\u0275mpd"](1073742336,R.d,R.d,[]),l["\u0275mpd"](1073742336,i.Gb,i.Gb,[]),l["\u0275mpd"](1073742336,V.a,V.a,[]),l["\u0275mpd"](1073742336,P.a,P.a,[]),l["\u0275mpd"](1073742336,M.a,M.a,[]),l["\u0275mpd"](1073742336,N.p,N.p,[[2,N.v],[2,N.n]]),l["\u0275mpd"](1073742336,g,g,[]),l["\u0275mpd"](1024,N.l,function(){return[[{path:"",component:f}]]},[])])})},hoFm:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var l=t("CcnG"),o=function(){function n(){}return n.prototype.getEmoji=function(){return"\ud83d\ude00 \ud83d\ude03 \ud83d\ude04 \ud83d\ude01 \ud83d\ude06 \ud83d\ude05 \ud83d\ude02 \ud83e\udd23 \ud83d\ude0a \ud83d\ude07 \ud83d\ude42 \ud83d\ude43 \ud83d\ude09 \ud83d\ude0c \ud83d\ude0d \ud83d\ude18 \ud83d\ude17 \ud83d\ude19 \ud83d\ude1a \ud83d\ude0b \ud83d\ude1c \ud83d\ude1d \ud83d\ude1b \ud83e\udd11 \ud83e\udd17 \ud83e\udd13 \ud83d\ude0e \ud83e\udd21 \ud83e\udd20 \ud83d\ude0f \ud83d\ude12 \ud83d\ude1e \ud83d\ude14 \ud83d\ude1f \ud83d\ude15 \ud83d\ude41 \u2639\ufe0f \ud83d\ude23 \ud83d\ude16 \ud83d\ude2b \ud83d\ude29 \ud83d\ude24 \ud83d\ude20 \ud83d\ude21 \ud83d\ude36 \ud83d\ude10 \ud83d\ude11 \ud83d\ude2f \ud83d\ude26 \ud83d\ude27 \ud83d\ude2e \ud83d\ude32 \ud83d\ude35 \ud83d\ude33 \ud83d\ude31 \ud83d\ude28 \ud83d\ude30 \ud83d\ude22 \ud83d\ude25 \ud83e\udd24 \ud83d\ude2d \ud83d\ude13 \ud83d\ude2a \ud83d\ude34 \ud83d\ude44 \ud83e\udd14 \ud83e\udd25 \ud83d\ude2c \ud83e\udd10 \ud83e\udd22 \ud83e\udd27 \ud83d\ude37 \ud83e\udd12 \ud83e\udd15 \ud83d\ude08 \ud83d\udc7f \ud83d\udc79 \ud83d\udc7a \ud83d\udca9 \ud83d\udc7b \ud83d\udc80 \u2620\ufe0f \ud83d\udc7d \ud83d\udc7e \ud83e\udd16 \ud83c\udf83 \ud83d\ude3a \ud83d\ude38 \ud83d\ude39 \ud83d\ude3b \ud83d\ude3c \ud83d\ude3d \ud83d\ude40 \ud83d\ude3f \ud83d\ude3e \ud83d\udc50 \ud83d\ude4c \ud83d\udc4f \ud83d\ude4f \ud83e\udd1d \ud83d\udc4d \ud83d\udc4e \ud83d\udc4a \u270a \ud83e\udd1b \ud83e\udd1c \ud83e\udd1e \u270c\ufe0f \ud83e\udd18 \ud83d\udc4c \ud83d\udc48 \ud83d\udc49 \ud83d\udc46 \ud83d\udc47 \u261d\ufe0f \u270b \ud83e\udd1a \ud83d\udd90 \ud83d\udd96 \ud83d\udc4b \ud83e\udd19 \ud83d\udcaa \ud83d\udd95 \u270d\ufe0f \ud83e\udd33 \ud83d\udc85 \ud83d\udd96 \ud83d\udc84 \ud83d\udc8b \ud83d\udc44 \ud83d\udc45 \ud83d\udc42 \ud83d\udc43 \ud83d\udc63 \ud83d\udc41 \ud83d\udc40 \ud83d\udde3 \ud83d\udc64 \ud83d\udc65 \ud83d\udc76 \ud83d\udc66 \ud83d\udc67 \ud83d\udc68 \ud83d\udc69 \ud83d\udc71\u200d\u2640\ufe0f \ud83d\udc71 \ud83d\udc74 \ud83d\udc75 \ud83d\udc72 \ud83d\udc73\u200d\u2640\ufe0f \ud83d\udc73 \ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udc6e \ud83d\udc77\u200d\u2640\ufe0f \ud83d\udc77".split(" ")},n.ngInjectableDef=l.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iTUp:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},j1ZV:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},"n/qi":function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){function n(){}return n.prototype.transform=function(n,e){return console.log(e),n?n.startsWith("http")||n.startsWith("data:image")||n.startsWith("file:///")||n.startsWith("cdvfile://")?n:n.startsWith("/mobile")&&e&&e.endsWith("mobile/")?e+n.substring(7):n.startsWith("./../")?e+n.substring(5):e+n:"../../assets/mrtx.jpg"},n}()}}]);