(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{cSb1:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=e("mrSG"),o=e("ZZ/e"),i=e("Zr1d"),a=e("N+K7"),d=e("qfBg"),r=e("6m4Z"),s=e("eaQS"),c=function(){function n(n,l,e,t,u,o,i,a,d,r){this.nav=n,this.plt=l,this.keyboard=e,this.http=t,this.user=u,this.actionSheetController=o,this.activeroute=i,this.native=a,this.popoverController=d,this.route=r}return n.prototype.ngOnInit=function(){var n=this;this.isloadhead=!1,this.contentimgnum=0,this.contentimgarr=[],this.formdata={title:"",des:"",destination:"",outtime:"",days:"",money:"",tag:""},this.iscontent=!1,this.keyboardH=0,this.content="",this.config={language:"zh-cn",toolbar:"Full"},this.config.toolbar_Full=[{name:"clipboard",items:["Cut","Copy","PasteText","PasteFromWord","-"]},{name:"editing",items:["Find","-","SelectAll","-","SpellChecker"]},{name:"basicstyles",items:["Bold","Italic","Underline","Strike"]},{name:"paragraph",items:["NumberedList","BulletedList","-","Blockquote","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-"]},{name:"insert",items:["Image","Html5video","Table","HorizontalRule","Emojione"]},"/",{name:"styles",items:["Format","FontSize"]},{name:"colors",items:["TextColor","BGColor"]}];var l=this.activeroute.snapshot.queryParams;switch(this.type=l.type?Number(l.type):1,this.type){case 1:this.title="\u6e38\u8bb0";break;case 2:this.title="\u653b\u7565";break;case 3:this.title="\u62db\u52df";break;default:this.title="\u6e38\u8bb0"}l.iscg&&this.getCg();try{window.addEventListener("keyboardWillShow",function(l){n.keyboardH=l.keyboardHeight}),window.addEventListener("keyboardWillHide",function(l){n.keyboardH=0})}catch(e){console.log(e)}},n.prototype.getCg=function(){var n=this;this.native.getStorage("yjcontent").then(function(l){if(n.head=l.head,n.type=l.type-1,n.address=l.address,n.lnglat=l.lnglat,n.content=l.content,n.formdata=l,n.formdata.outtime){console.log(n.formdata.outtime);var e=new Date(1e3*n.formdata.outtime),t=e.getFullYear(),u=e.getMonth()+1,o=e.getDate();n.formdata.outtime=t+"."+u+"."+o,console.log(n.formdata.outtime)}}).catch(function(n){})},n.prototype.setContent=function(){this.iscontent=!this.iscontent},n.prototype.goBack=function(){this.nav.back()},n.prototype.addimg=function(){this.presentActionSheet(2)},n.prototype.addfm=function(){this.presentActionSheet(1)},n.prototype.presentActionSheet=function(n){return u.b(this,void 0,void 0,function(){var l=this;return u.e(this,function(e){switch(e.label){case 0:return[4,this.actionSheetController.create({header:"\u8bf7\u9009\u62e9\u6765\u6e90",buttons:[{text:"\u76f8\u673a",role:"destructive",handler:function(){console.log("Delete clicked"),l.native.getPictureByCamera().then(function(e){l.getimgend(n,[e])})}},{text:"\u76f8\u518c",handler:function(){console.log("Share clicked"),l.native.getPictures(1===n?1:9).then(function(e){l.getimgend(n,e)},function(n){})}},{text:"\u53d6\u6d88",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},n.prototype.getimgend=function(n,l){if(1===n)this.head=null,this.head=l[0],this.updateHead(this.head);else{for(var e=this.contentimgnum,t=[],u=l.length,o=0;o<u;o++){var i=e+o;this.contentimgarr[i]=!0,t.push(i),this.content+='<img class="wjy'+i+'" style="width: 100%;" src="'+this.http.zdomain+'loading.gif" alt=""><p></p>'}console.log(this.content),this.contentimgnum+=u,this.basezfile(l,t)}},n.prototype.basezfile=function(n,l){var e=this;n.map(function(n,t){var u=l[t],o=e.native.getImgbase64tofile(n,"yjorgl"+u);o.append("nothumb","1"),e.imgupload(o).then(function(l){alert(1),alert(JSON.stringify(l)),e.contentimgarr[u]=!1,n=null;var t=new RegExp('<img\\s+(alt=""\\s)*class="wjy'+u+'"(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;")*\\s*(src="\\S*")\\s*(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;*"\\s*)*\\s*(alt="")*\\s*(/>|>)');e.content=e.content.replace(t,'<img style="max-width: 100%" src="'+(e.http.zdomain+l.src)+'" alt="">'),e.sub(),e.savefn()}).catch(function(n){alert(2),alert(JSON.stringify(n)),e.contentimgarr[u]=!1,e.suberr()})}),n=null},n.prototype.updateHead=function(n){var l=this;this.isloadhead=!0;var e=this.native.getImgbase64tofile(n,"yjorglhead");n=null,this.imgupload(e).then(function(n){l.isloadhead=!1,l.headobj=n,l.head=l.http.zdomain+n.src,l.sub(),l.savefn()}).catch(function(n){l.isloadhead=!1,l.suberr()})},n.prototype.imgupload=function(n){var l=this;return new Promise(function(e,t){var u=new XMLHttpRequest;u.open("POST",l.http.domain+l.http.updateimg),u.onreadystatechange=function(n){if(4==u.readyState&&200==u.status){var l=JSON.parse(u.response);e(l.result)}},u.onerror=function(n){t(n)},u.send(n)})},n.prototype.setsave=function(){var n=this,l={head:this.head,type:this.type+1,address:this.address,lnglat:this.lnglat,content:this.content};(l=Object.assign(l,this.formdata)).outtime=l.outtime?Date.parse(new Date(l.outtime).toString())/1e3:"",this.native.setStorage("yjcontent",l).then(function(l){n.issave=!1,n.native.presentAlert("\u4fdd\u5b58\u6210\u529f,\u5982\u9700\u4f7f\u7528\u8bf7\u5230\u4e2a\u4eba\u4e2d\u5fc3\u67e5\u770b")}).catch(function(l){n.issave=!1,n.native.presentAlert("\u4fdd\u5b58\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~")})},n.prototype.sub=function(n){if(n&&(this.issub=!0,this.subloading()),!this.iscansub(1))return!1;this.subupdate()},n.prototype.savefn=function(n){if(n&&(this.issave=!0),!this.iscansub(2))return!1;this.setsave()},n.prototype.iscansub=function(n){if(!this.issub&&1===n)return!1;if(2===n&&!this.issave)return!1;if(this.isloadhead)return!1;for(var l=0,e=this.contentimgarr.length;l<e;l++)if(this.contentimgarr[l])return!1;return!0},n.prototype.subupdate=function(){var n=this,l={img:JSON.stringify([this.headobj]),type:this.type+1,address:this.address,lnglat:this.lnglat,content:this.content};l=Object.assign(l,this.formdata),console.log(l),l.outtime=l.outtime?Date.parse(new Date(l.outtime).toString())/1e3:"",this.http.postformdata(this.http.fbpqitem,l).subscribe(function(l){console.log(l),n.user.addjf(l.result.num),n.suberr(),n.route.navigate(["/fbyjmore"],{queryParams:{type:n.type+1,num:l.result.num}})},function(l){n.suberr()})},n.prototype.suberr=function(){this.issub=!1,this.popoverController.dismiss()},n.prototype.subloading=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(n){switch(n.label){case 0:return[4,this.popoverController.create({component:s.a,translucent:!1,cssClass:"payboxcontent",backdropDismiss:!1})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.ionViewWillLeave=function(){this.content="",this.head="",this.contentimgarr=[]},n}(),g=function(){return function(){}}(),h=e("pMnS"),m=e("Ip0R"),p=e("oBZk"),f=e("gIcY"),v=e("yIz8"),b=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{host:0}),(n()(),t["\u0275eld"](1,0,[[1,0],["host",1]],null,0,"textarea",[],null,null,null,null,null))],null,null)}var y=e("ZYCi"),R=t["\u0275crt"]({encapsulation:0,styles:[[".top-head[_ngcontent-%COMP%]   .ts-box[_ngcontent-%COMP%]{min-height:200px;background-color:var(--ion-gray-background-color);line-height:200px;text-align:center;font-size:var(--ion-text);color:var(--ion-color-medium)}ion-backdrop[_ngcontent-%COMP%]{background:#00f;--background:red}"]],data:{}});function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addfm()&&t),t},null,null))],null,function(n,l){n(l,0,0,l.component.head)})}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","ts-box"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addfm()&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,[" \u6dfb\u52a0\u5c01\u9762 "]))],null,null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,71,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","top-head"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](3,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](5,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](6,0,null,null,65,"ion-list",[],null,null,null,p.Hb,p.D)),t["\u0275did"](7,49152,null,0,o.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](9,49152,null,0,o.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u6dfb\u52a0\u6807\u9898"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,11)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,11)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.formdata.title=e)&&u),u},p.Ab,p.x)),t["\u0275did"](11,16384,null,0,o.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,f.h,function(n){return[n]},[o.Rb]),t["\u0275did"](13,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,f.i,null,[f.m]),t["\u0275did"](15,16384,null,0,f.j,[[4,f.i]],null,null),t["\u0275did"](16,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"]},null),(n()(),t["\u0275eld"](17,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](18,49152,null,0,o.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](19,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u76ee\u7684\u5730"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,20)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,20)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.formdata.destination=e)&&u),u},p.Ab,p.x)),t["\u0275did"](20,16384,null,0,o.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,f.h,function(n){return[n]},[o.Rb]),t["\u0275did"](22,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,f.i,null,[f.m]),t["\u0275did"](24,16384,null,0,f.j,[[4,f.i]],null,null),t["\u0275did"](25,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"]},null),(n()(),t["\u0275eld"](26,0,null,0,9,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](27,49152,null,0,o.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](28,0,null,0,7,"ion-datetime",[["display-format","YYYY.MM.DD"],["no-margin",""],["no-padding",""],["placeholder","\u51fa\u53d1\u65e5\u671f"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,29)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,29)._handleChangeEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.formdata.outtime=e)&&u),u},p.sb,p.p)),t["\u0275did"](29,16384,null,0,o.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,f.h,function(n){return[n]},[o.Qb]),t["\u0275did"](31,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,f.i,null,[f.m]),t["\u0275did"](33,16384,null,0,f.j,[[4,f.i]],null,null),t["\u0275did"](34,49152,null,0,o.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],doneText:[1,"doneText"],placeholder:[2,"placeholder"]},null),t["\u0275did"](35,16384,null,0,o.f,[t.ElementRef],null,null),(n()(),t["\u0275eld"](36,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](37,49152,null,0,o.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](38,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u51fa\u884c\u5929\u6570"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,39)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,39)._handleIonChange(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.formdata.days=e)&&u),u},p.Ab,p.x)),t["\u0275did"](39,16384,null,0,o.Lb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,f.h,function(n){return[n]},[o.Lb]),t["\u0275did"](41,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,f.i,null,[f.m]),t["\u0275did"](43,16384,null,0,f.j,[[4,f.i]],null,null),t["\u0275did"](44,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),t["\u0275eld"](45,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](46,49152,null,0,o.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](47,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u4eba\u5747\u82b1\u8d39"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,48)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,48)._handleIonChange(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.formdata.money=e)&&u),u},p.Ab,p.x)),t["\u0275did"](48,16384,null,0,o.Lb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,f.h,function(n){return[n]},[o.Lb]),t["\u0275did"](50,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,f.i,null,[f.m]),t["\u0275did"](52,16384,null,0,f.j,[[4,f.i]],null,null),t["\u0275did"](53,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),t["\u0275eld"](54,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](55,49152,null,0,o.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](56,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u6dfb\u52a0\u6807\u7b7e"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,57)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,57)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.formdata.tag=e)&&u),u},p.Ab,p.x)),t["\u0275did"](57,16384,null,0,o.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,f.h,function(n){return[n]},[o.Rb]),t["\u0275did"](59,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,f.i,null,[f.m]),t["\u0275did"](61,16384,null,0,f.j,[[4,f.i]],null,null),t["\u0275did"](62,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"]},null),(n()(),t["\u0275eld"](63,0,null,0,8,"ion-item",[["lines","none"]],null,null,null,p.Eb,p.y)),t["\u0275did"](64,49152,null,0,o.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](65,0,null,0,6,"ion-textarea",[["placeholder","\u4e00\u53e5\u8bdd\u63cf\u8ff0..."],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,66)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,66)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.formdata.des=e)&&u),u},p.bc,p.Y)),t["\u0275did"](66,16384,null,0,o.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,f.h,function(n){return[n]},[o.Rb]),t["\u0275did"](68,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,f.i,null,[f.m]),t["\u0275did"](70,16384,null,0,f.j,[[4,f.i]],null,null),t["\u0275did"](71,49152,null,0,o.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null)],function(n,l){var e=l.component;n(l,3,0,e.head),n(l,5,0,!e.head),n(l,13,0,e.formdata.title),n(l,16,0,"","\u6dfb\u52a0\u6807\u9898"),n(l,22,0,e.formdata.destination),n(l,25,0,"","\u76ee\u7684\u5730"),n(l,31,0,e.formdata.outtime),n(l,34,0,"\u53d6\u6d88","\u786e\u5b9a","\u51fa\u53d1\u65e5\u671f"),n(l,41,0,e.formdata.days),n(l,44,0,"","\u51fa\u884c\u5929\u6570","number"),n(l,50,0,e.formdata.money),n(l,53,0,"","\u4eba\u5747\u82b1\u8d39","number"),n(l,59,0,e.formdata.tag),n(l,62,0,"","\u6dfb\u52a0\u6807\u7b7e"),n(l,64,0,"none"),n(l,68,0,e.formdata.des),n(l,71,0,"\u4e00\u53e5\u8bdd\u63cf\u8ff0...","3")},function(n,l){n(l,10,0,t["\u0275nov"](l,15).ngClassUntouched,t["\u0275nov"](l,15).ngClassTouched,t["\u0275nov"](l,15).ngClassPristine,t["\u0275nov"](l,15).ngClassDirty,t["\u0275nov"](l,15).ngClassValid,t["\u0275nov"](l,15).ngClassInvalid,t["\u0275nov"](l,15).ngClassPending),n(l,19,0,t["\u0275nov"](l,24).ngClassUntouched,t["\u0275nov"](l,24).ngClassTouched,t["\u0275nov"](l,24).ngClassPristine,t["\u0275nov"](l,24).ngClassDirty,t["\u0275nov"](l,24).ngClassValid,t["\u0275nov"](l,24).ngClassInvalid,t["\u0275nov"](l,24).ngClassPending),n(l,28,0,t["\u0275nov"](l,33).ngClassUntouched,t["\u0275nov"](l,33).ngClassTouched,t["\u0275nov"](l,33).ngClassPristine,t["\u0275nov"](l,33).ngClassDirty,t["\u0275nov"](l,33).ngClassValid,t["\u0275nov"](l,33).ngClassInvalid,t["\u0275nov"](l,33).ngClassPending),n(l,38,0,t["\u0275nov"](l,43).ngClassUntouched,t["\u0275nov"](l,43).ngClassTouched,t["\u0275nov"](l,43).ngClassPristine,t["\u0275nov"](l,43).ngClassDirty,t["\u0275nov"](l,43).ngClassValid,t["\u0275nov"](l,43).ngClassInvalid,t["\u0275nov"](l,43).ngClassPending),n(l,47,0,t["\u0275nov"](l,52).ngClassUntouched,t["\u0275nov"](l,52).ngClassTouched,t["\u0275nov"](l,52).ngClassPristine,t["\u0275nov"](l,52).ngClassDirty,t["\u0275nov"](l,52).ngClassValid,t["\u0275nov"](l,52).ngClassInvalid,t["\u0275nov"](l,52).ngClassPending),n(l,56,0,t["\u0275nov"](l,61).ngClassUntouched,t["\u0275nov"](l,61).ngClassTouched,t["\u0275nov"](l,61).ngClassPristine,t["\u0275nov"](l,61).ngClassDirty,t["\u0275nov"](l,61).ngClassValid,t["\u0275nov"](l,61).ngClassInvalid,t["\u0275nov"](l,61).ngClassPending),n(l,65,0,t["\u0275nov"](l,70).ngClassUntouched,t["\u0275nov"](l,70).ngClassTouched,t["\u0275nov"](l,70).ngClassPristine,t["\u0275nov"](l,70).ngClassDirty,t["\u0275nov"](l,70).ngClassValid,t["\u0275nov"](l,70).ngClassInvalid,t["\u0275nov"](l,70).ngClassPending)})}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,7,"ckeditor",[["debounce","500"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.content=e)&&t),t},C,b)),t["\u0275did"](2,13287424,null,2,v.b,[t.NgZone],{config:[0,"config"],debounce:[1,"debounce"]},null),t["\u0275qud"](603979776,1,{toolbarButtons:1}),t["\u0275qud"](603979776,2,{toolbarGroups:1}),t["\u0275prd"](1024,null,f.h,function(n){return[n]},[v.b]),t["\u0275did"](6,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,f.i,null,[f.m]),t["\u0275did"](8,16384,null,0,f.j,[[4,f.i]],null,null)],function(n,l){var e=l.component;n(l,2,0,e.config,"500"),n(l,6,0,e.content)},function(n,l){n(l,1,0,t["\u0275nov"](l,8).ngClassUntouched,t["\u0275nov"](l,8).ngClassTouched,t["\u0275nov"](l,8).ngClassPristine,t["\u0275nov"](l,8).ngClassDirty,t["\u0275nov"](l,8).ngClassValid,t["\u0275nov"](l,8).ngClassInvalid,t["\u0275nov"](l,8).ngClassPending)})}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"ion-buttons",[["slot","end"]],null,null,null,p.jb,p.g)),t["\u0275did"](1,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addimg()&&t),t},p.ib,p.f)),t["\u0275did"](3,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["name","images"]],null,null,null,p.wb,p.t)),t["\u0275did"](5,49152,null,0,o.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\u63d2\u5165\u56fe\u7247 "]))],function(n,l){n(l,3,0,l.component.issub),n(l,5,0,"images")},null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,24,"ion-header",[],null,null,null,p.vb,p.s)),t["\u0275did"](1,49152,null,0,o.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,22,"ion-toolbar",[],null,null,null,p.fc,p.cb)),t["\u0275did"](3,49152,null,0,o.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,p.jb,p.g)),t["\u0275did"](5,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t},p.ib,p.f)),t["\u0275did"](7,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,p.wb,p.t)),t["\u0275did"](9,49152,null,0,o.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,p.dc,p.ab)),t["\u0275did"](11,49152,null,0,o.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](12,0,["\u53d1\u5e03",""])),(n()(),t["\u0275eld"](13,0,null,0,11,"ion-buttons",[["slot","end"]],null,null,null,p.jb,p.g)),t["\u0275did"](14,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.savefn(1)&&t),t},p.ib,p.f)),t["\u0275did"](16,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](17,0,null,0,1,"ion-icon",[["name","paper-plane"]],null,null,null,p.wb,p.t)),t["\u0275did"](18,49152,null,0,o.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\u4fdd\u5b58 "])),(n()(),t["\u0275eld"](20,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.sub(1)&&t),t},p.ib,p.f)),t["\u0275did"](21,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](22,0,null,0,1,"ion-icon",[["name","paper-plane"]],null,null,null,p.wb,p.t)),t["\u0275did"](23,49152,null,0,o.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\u53d1\u8868 "])),(n()(),t["\u0275eld"](25,0,null,null,8,"ion-content",[],null,null,null,p.rb,p.o)),t["\u0275did"](26,49152,null,0,o.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](28,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](30,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](31,0,null,0,2,"div",[["class","keyboard-height"]],null,null,null,null,null)),t["\u0275did"](32,278528,null,0,m.NgStyle,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](33,{height:0}),(n()(),t["\u0275eld"](34,0,null,null,10,"ion-footer",[],null,null,null,p.tb,p.q)),t["\u0275did"](35,49152,null,0,o.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](36,0,null,0,8,"ion-toolbar",[],null,null,null,p.fc,p.cb)),t["\u0275did"](37,49152,null,0,o.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](38,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.jb,p.g)),t["\u0275did"](39,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](40,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.setContent()&&t),t},p.ib,p.f)),t["\u0275did"](41,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275ted"](42,0,[" "," "])),(n()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](44,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,9,0,"ios","arrow-back"),n(l,16,0,!e.formdata.title||!e.content||e.issub||e.issave),n(l,18,0,"paper-plane"),n(l,21,0,!e.formdata.title||!e.content||e.issub||e.issave),n(l,23,0,"paper-plane"),n(l,28,0,!e.iscontent),n(l,30,0,e.iscontent);var t=n(l,33,0,e.keyboardH+"px");n(l,32,0,t),n(l,41,0,e.issub),n(l,44,0,e.iscontent)},function(n,l){var e=l.component;n(l,12,0,e.title),n(l,42,0,e.iscontent?"\u6807\u9898":"\u6b63\u6587")})}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-fbyj",[],null,null,null,w,R)),t["\u0275did"](1,114688,null,0,c,[o.Kb,o.Mb,i.a,a.a,d.a,o.a,y.a,r.a,o.Nb,y.n],null,null)],function(n,l){n(l,1,0)},null)}var M=t["\u0275ccf"]("app-fbyj",c,Z,{},{},[]);e.d(l,"FbyjPageModuleNgFactory",function(){return B});var B=t["\u0275cmf"](g,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[h.a,M]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[t.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,f.t,f.t,[]),t["\u0275mpd"](4608,o.c,o.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,o.Jb,o.Jb,[o.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,o.Nb,o.Nb,[o.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),t["\u0275mpd"](1073742336,f.q,f.q,[]),t["\u0275mpd"](1073742336,f.d,f.d,[]),t["\u0275mpd"](1073742336,o.Gb,o.Gb,[]),t["\u0275mpd"](1073742336,v.a,v.a,[]),t["\u0275mpd"](1073742336,y.p,y.p,[[2,y.v],[2,y.n]]),t["\u0275mpd"](1073742336,g,g,[]),t["\u0275mpd"](1024,y.l,function(){return[[{path:"",component:c}]]},[])])})}}]);