(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{cSb1:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("mrSG"),u=e("rGvg"),i=e("ZZ/e"),a=e("Zr1d"),d=e("N+K7"),r=e("qfBg"),s=e("6m4Z"),c=e("eaQS"),g=e("HIb1"),h=function(){function n(n,l,e,t,o,u,i,a,d,r,s,c){this.nav=n,this.plt=l,this.keyboard=e,this.http=t,this.user=o,this.actionSheetController=u,this.activeroute=i,this.native=a,this.popoverController=d,this.route=r,this.myeditdatafn=s,this.yjlistfn=c}return n.prototype.ngOnInit=function(){this.isloadhead=!1,this.contentimgnum=-1,this.contentimgarr=[],this.formdata={title:"",des:"",destination:"",outtime:"",days:"",money:"",tag:""},this.iscontent=!1,this.keyboardH=0,this.content="",this.config={language:"zh-cn",toolbar:"Full"},this.config.toolbar_Full=[{name:"clipboard",items:["Cut","Copy","PasteText","PasteFromWord","-"]},{name:"editing",items:["Find","-","SpellChecker"]},{name:"basicstyles",items:["Bold","Italic","Underline"]},{name:"paragraph",items:["-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-"]},{name:"insert",items:["Image","Html5video","Table","HorizontalRule","Emojione"]},{name:"styles",items:["Format","FontSize"]},{name:"colors",items:["TextColor","BGColor"]}]},n.prototype.ionViewWillEnter=function(){var n=this.activeroute.snapshot.queryParams;switch(this.type=n.type?Number(n.type):1,this.type){case 1:this.title="\u6e38\u8bb0";break;case 2:this.title="\u653b\u7565";break;case 3:this.title="\u62db\u52df";break;default:this.title="\u6e38\u8bb0"}n.iscg?this.getCg():n.isedit&&this.setGeteditdata()},n.prototype.ionViewDidEnter=function(){var n=this;try{window.addEventListener("keyboardWillShow",function(l){n.keyboardH=l.keyboardHeight}),window.addEventListener("keyboardWillHide",function(l){n.keyboardH=0})}catch(l){console.log(l)}},n.prototype.getCg=function(){var n=this;this.native.getStorage("yjcontent").then(function(l){if(n.head=l.head,n.type=l.type-1,n.address=l.address,n.lnglat=l.lnglat,n.content=l.content,n.formdata=l,n.formdata.outtime){console.log(n.formdata.outtime);var e=new Date(1e3*n.formdata.outtime),t=e.getFullYear(),o=e.getMonth()+1,u=e.getDate();n.formdata.outtime=t+"."+o+"."+u,console.log(n.formdata.outtime)}}).catch(function(n){})},n.prototype.setGeteditdata=function(){var n=this.myeditdatafn.getData();if(n.type!=this.type)return this.myeditdatafn.clear(),!1;var l=n.data;if(this.id=l.id,this.head=l.imgarr[0],this.headobj={src:l.imgarr&&l.imgarr.length>0?l.imgarr[0]:"",thumb:l.thumb&&l.thumb.length>0?l.thumb[0]:""},this.address=l.address,this.lnglat=l.lnglat,this.content=l.content,this.formdata={title:l.title,destination:l.destination,outtime:l.outtime,days:l.days,money:l.money,tag:l.tag,des:l.des},this.formdata.outtime){console.log(this.formdata.outtime);var e=new Date(1e3*this.formdata.outtime),t=e.getFullYear(),o=e.getMonth()+1,u=e.getDate();this.formdata.outtime=t+"."+o+"."+u,console.log(this.formdata.outtime)}},n.prototype.setContent=function(){this.iscontent=!this.iscontent},n.prototype.goBack=function(){this.nav.back()},n.prototype.addimg=function(){this.presentActionSheet(2)},n.prototype.addfm=function(){this.presentActionSheet(1)},n.prototype.presentActionSheet=function(n){return o.b(this,void 0,void 0,function(){var l=this;return o.e(this,function(e){switch(e.label){case 0:return[4,this.actionSheetController.create({header:"\u8bf7\u9009\u62e9\u6765\u6e90",buttons:[{text:"\u76f8\u673a",role:"destructive",handler:function(){console.log("Delete clicked"),l.native.getPictureByCamera().then(function(e){l.getimgend(n,[e])})}},{text:"\u76f8\u518c",handler:function(){console.log("Share clicked"),l.native.getPictures(1).then(function(e){l.getimgend(n,e)},function(n){})}},{text:"\u53d6\u6d88",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},n.prototype.getimgend=function(n,l){if(1===n)this.head=null,this.head=l[0],this.updateHead(this.head);else{for(var e=[],t=l.length,o=0;o<t;o++)this.contentimgnum++,this.contentimgarr[this.contentimgnum]=!0,e.push(this.contentimgnum),this.content+='<img class="wjy'+this.contentimgnum+'" style="width: 100%;" src="'+this.http.zdomain+'loading.gif" alt=""><p></p>';console.log(this.content),this.contentimgnum+=t,this.basezfile(l,e)}},n.prototype.basezfile=function(n,l){var e=this;n.map(function(n,t){var o=l[t],u=e.native.getImgbase64tofile(n,"yjorgl"+o);u.append("nothumb","1"),e.imgupload(u).then(function(l){n=null,e.setUpcontentimgend(o,l.src),e.sub(),e.savefn()}).catch(function(n){e.setUpcontentimgend(o),e.suberr()})}),n=null},n.prototype.setUpcontentimgend=function(n,l){var e;l?e='<img style="max-width: 100%" src="'+(this.http.zdomain+l)+'" alt="">':(this.native.presentAlert("\u56fe\u7247\u4e0a\u4f20\u5931\u8d25,\u5df2\u81ea\u52a8\u5220\u9664,\u8bf7\u91cd\u8bd5!"),e=""),this.contentimgarr[n]=!1;var t=new RegExp('<img\\s+(alt=""\\s)*class="wjy'+n+'"(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;")*\\s*(src="\\S*")\\s*(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;*"\\s*)*\\s*(alt="")*\\s*(/>|>)');this.content.search(t)>-1&&(this.content=this.content.replace(t,e))},n.prototype.updateHead=function(n){var l=this;this.isloadhead=!0;var e=this.native.getImgbase64tofile(n,"yjorglhead");n=null,this.imgupload(e).then(function(n){l.isloadhead=!1,l.headobj=n,l.head=l.http.zdomain+n.src,l.sub(),l.savefn()}).catch(function(n){l.isloadhead=!1,l.suberr()})},n.prototype.imgupload=function(n){var l=this;return new Promise(function(e,t){var o=new XMLHttpRequest;o.open("POST",l.http.domain+l.http.updateimg),o.onreadystatechange=function(n){if(4==o.readyState&&200==o.status){var l=JSON.parse(o.response);e(l.result)}},o.onerror=function(n){t(n)},o.send(n)})},n.prototype.setsave=function(){var n=this,l={head:this.head,type:this.type+1,address:this.address,lnglat:this.lnglat,content:this.content};(l=Object.assign(l,this.formdata)).outtime=l.outtime?Date.parse(new Date(l.outtime).toString())/1e3:"",this.native.setStorage("yjcontent",l).then(function(l){n.issave=!1,n.native.presentAlert("\u4fdd\u5b58\u6210\u529f,\u5982\u9700\u4f7f\u7528\u8bf7\u5230\u4e2a\u4eba\u4e2d\u5fc3\u67e5\u770b")}).catch(function(l){n.issave=!1,n.native.presentAlert("\u4fdd\u5b58\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~")})},n.prototype.sub=function(n){if(n&&(this.issub=!0,this.subloading()),!this.iscansub(1))return!1;this.subupdate()},n.prototype.savefn=function(n){if(n&&(this.issave=!0),!this.iscansub(2))return!1;this.setsave()},n.prototype.iscansub=function(n){if(!this.issub&&1===n)return!1;if(2===n&&!this.issave)return!1;if(this.isloadhead)return!1;for(var l=0,e=this.contentimgarr.length;l<e;l++)if(this.contentimgarr[l]){var t=new RegExp('<img\\s+(alt=""\\s)*class="wjy'+l+'"(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;")*\\s*(src="\\S*")\\s*(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;*"\\s*)*\\s*(alt="")*\\s*(/>|>)');if(-1===this.content.search(t)){this.contentimgarr[l]=!1;continue}return!1}return!0},n.prototype.subupdate=function(){var n=this,l={img:JSON.stringify([this.headobj]),type:this.type+1,address:this.address,lnglat:this.lnglat,content:this.content};l=Object.assign(l,this.formdata),console.log(l),l.outtime=l.outtime?Date.parse(new Date(l.outtime).toString())/1e3:"",this.id&&(l.id=this.id),this.http.postformdata(this.http.fbpqitem,l).subscribe(function(e){if(console.log(e),n.id)t=n.setEdit(l,e.result,n.id),n.myeditdatafn.changeData(t),n.suberr(1);else{n.user.addjf(e.result.num);var t=n.setEdit(l,e.result.createtime,e.result.id);n.yjlistfn.addItem(n.type,t),n.suberr(e.result)}},function(l){n.suberr()})},n.prototype.suberr=function(n){var l=this;this.issub=!1,this.popoverController.dismiss().then(function(e){console.log("\u5c0f\u65f6\u4e86"),console.log(e),e?n&&(1===n?l.goBack():l.route.navigate(["/fbyjmore"],{queryParams:{type:l.type+1,num:n.num,sendnum:n.sendnum}})):setTimeout(function(){l.suberr(n)},200)})},n.prototype.setEdit=function(n,l,e){return{id:e,createtime:l,imgarr:[this.headobj.src],thumb:[this.headobj.thumb],address:this.address,lnglat:this.lnglat,content:this.content,title:n.title,destination:n.destination,outtime:n.outtime,days:n.days,money:n.money,tag:n.tag,des:n.des}},n.prototype.subloading=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.popoverController.create({component:c.a,translucent:!1,cssClass:"payboxcontent",backdropDismiss:!1})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.ionViewWillLeave=function(){this.content="",this.head="",this.contentimgarr=[]},n}(),m=function(){return function(){}}(),f=e("pMnS"),p=e("oBZk"),v=e("Ip0R"),b=e("gIcY"),C=e("yIz8"),y=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function R(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{host:0}),(n()(),t["\u0275eld"](1,0,[[1,0],["host",1]],null,0,"textarea",[],null,null,null,null,null))],null,null)}var E=e("n/qi"),I=e("ZYCi"),D=t["\u0275crt"]({encapsulation:0,styles:[[".top-head[_ngcontent-%COMP%]   .ts-box[_ngcontent-%COMP%]{min-height:200px;background-color:var(--ion-gray-background-color);line-height:200px;text-align:center;font-size:var(--ion-text);color:var(--ion-color-medium)}ion-backdrop[_ngcontent-%COMP%]{background:#00f;--background:red}"]],data:{}});function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.savefn(1)&&t),t},p.ib,p.f)),t["\u0275did"](1,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","paper-plane"]],null,null,null,p.wb,p.t)),t["\u0275did"](3,49152,null,0,i.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\u4fdd\u5b58 "]))],function(n,l){var e=l.component;n(l,1,0,!e.formdata.title||!e.content||e.issub||e.issave),n(l,3,0,"paper-plane")},null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"img",[["alt",""]],[[8,"src",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addfm()&&t),t},null,null)),t["\u0275ppd"](1,2)],null,function(n,l){var e=l.component,o=t["\u0275unv"](l,0,0,n(l,1,0,t["\u0275nov"](l.parent.parent,0),e.head,e.http.zdomain));n(l,0,0,o)})}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","ts-box"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addfm()&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,[" \u6dfb\u52a0\u5c01\u9762 "]))],null,null)}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,70,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","top-head"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](3,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](5,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](6,0,null,null,64,"ion-list",[],null,null,null,p.Hb,p.D)),t["\u0275did"](7,49152,null,0,i.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](9,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u6dfb\u52a0\u6807\u9898"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,11)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,11)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.formdata.title=e)&&o),o},p.Ab,p.x)),t["\u0275did"](11,16384,null,0,i.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,b.h,function(n){return[n]},[i.Rb]),t["\u0275did"](13,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.i,null,[b.m]),t["\u0275did"](15,16384,null,0,b.j,[[4,b.i]],null,null),t["\u0275did"](16,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"]},null),(n()(),t["\u0275eld"](17,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](18,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](19,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u76ee\u7684\u5730"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,20)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,20)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.formdata.destination=e)&&o),o},p.Ab,p.x)),t["\u0275did"](20,16384,null,0,i.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,b.h,function(n){return[n]},[i.Rb]),t["\u0275did"](22,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.i,null,[b.m]),t["\u0275did"](24,16384,null,0,b.j,[[4,b.i]],null,null),t["\u0275did"](25,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"]},null),(n()(),t["\u0275eld"](26,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](27,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](28,0,null,0,6,"ion-datetime",[["class","ion-no-padding ion-no-margin"],["display-format","YYYY.MM.DD"],["placeholder","\u51fa\u53d1\u65e5\u671f"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,29)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,29)._handleChangeEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.formdata.outtime=e)&&o),o},p.sb,p.p)),t["\u0275did"](29,16384,null,0,i.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,b.h,function(n){return[n]},[i.Qb]),t["\u0275did"](31,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.i,null,[b.m]),t["\u0275did"](33,16384,null,0,b.j,[[4,b.i]],null,null),t["\u0275did"](34,49152,null,0,i.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],doneText:[1,"doneText"],placeholder:[2,"placeholder"]},null),(n()(),t["\u0275eld"](35,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](36,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](37,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u51fa\u884c\u5929\u6570"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,38)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,38)._handleIonChange(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.formdata.days=e)&&o),o},p.Ab,p.x)),t["\u0275did"](38,16384,null,0,i.Lb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,b.h,function(n){return[n]},[i.Lb]),t["\u0275did"](40,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.i,null,[b.m]),t["\u0275did"](42,16384,null,0,b.j,[[4,b.i]],null,null),t["\u0275did"](43,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),t["\u0275eld"](44,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](45,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](46,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u4eba\u5747\u82b1\u8d39"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,47)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,47)._handleIonChange(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.formdata.money=e)&&o),o},p.Ab,p.x)),t["\u0275did"](47,16384,null,0,i.Lb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,b.h,function(n){return[n]},[i.Lb]),t["\u0275did"](49,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.i,null,[b.m]),t["\u0275did"](51,16384,null,0,b.j,[[4,b.i]],null,null),t["\u0275did"](52,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),t["\u0275eld"](53,0,null,0,8,"ion-item",[],null,null,null,p.Eb,p.y)),t["\u0275did"](54,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](55,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","\u6dfb\u52a0\u6807\u7b7e"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,56)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,56)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.formdata.tag=e)&&o),o},p.Ab,p.x)),t["\u0275did"](56,16384,null,0,i.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,b.h,function(n){return[n]},[i.Rb]),t["\u0275did"](58,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.i,null,[b.m]),t["\u0275did"](60,16384,null,0,b.j,[[4,b.i]],null,null),t["\u0275did"](61,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"]},null),(n()(),t["\u0275eld"](62,0,null,0,8,"ion-item",[["lines","none"]],null,null,null,p.Eb,p.y)),t["\u0275did"](63,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](64,0,null,0,6,"ion-textarea",[["placeholder","\u4e00\u53e5\u8bdd\u63cf\u8ff0..."],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,65)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,65)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.formdata.des=e)&&o),o},p.bc,p.Y)),t["\u0275did"](65,16384,null,0,i.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,b.h,function(n){return[n]},[i.Rb]),t["\u0275did"](67,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.i,null,[b.m]),t["\u0275did"](69,16384,null,0,b.j,[[4,b.i]],null,null),t["\u0275did"](70,49152,null,0,i.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null)],function(n,l){var e=l.component;n(l,3,0,e.head),n(l,5,0,!e.head),n(l,13,0,e.formdata.title),n(l,16,0,"","\u6dfb\u52a0\u6807\u9898"),n(l,22,0,e.formdata.destination),n(l,25,0,"","\u76ee\u7684\u5730"),n(l,31,0,e.formdata.outtime),n(l,34,0,"\u53d6\u6d88","\u786e\u5b9a","\u51fa\u53d1\u65e5\u671f"),n(l,40,0,e.formdata.days),n(l,43,0,"","\u51fa\u884c\u5929\u6570","number"),n(l,49,0,e.formdata.money),n(l,52,0,"","\u4eba\u5747\u82b1\u8d39","number"),n(l,58,0,e.formdata.tag),n(l,61,0,"","\u6dfb\u52a0\u6807\u7b7e"),n(l,63,0,"none"),n(l,67,0,e.formdata.des),n(l,70,0,"\u4e00\u53e5\u8bdd\u63cf\u8ff0...","3")},function(n,l){n(l,10,0,t["\u0275nov"](l,15).ngClassUntouched,t["\u0275nov"](l,15).ngClassTouched,t["\u0275nov"](l,15).ngClassPristine,t["\u0275nov"](l,15).ngClassDirty,t["\u0275nov"](l,15).ngClassValid,t["\u0275nov"](l,15).ngClassInvalid,t["\u0275nov"](l,15).ngClassPending),n(l,19,0,t["\u0275nov"](l,24).ngClassUntouched,t["\u0275nov"](l,24).ngClassTouched,t["\u0275nov"](l,24).ngClassPristine,t["\u0275nov"](l,24).ngClassDirty,t["\u0275nov"](l,24).ngClassValid,t["\u0275nov"](l,24).ngClassInvalid,t["\u0275nov"](l,24).ngClassPending),n(l,28,0,t["\u0275nov"](l,33).ngClassUntouched,t["\u0275nov"](l,33).ngClassTouched,t["\u0275nov"](l,33).ngClassPristine,t["\u0275nov"](l,33).ngClassDirty,t["\u0275nov"](l,33).ngClassValid,t["\u0275nov"](l,33).ngClassInvalid,t["\u0275nov"](l,33).ngClassPending),n(l,37,0,t["\u0275nov"](l,42).ngClassUntouched,t["\u0275nov"](l,42).ngClassTouched,t["\u0275nov"](l,42).ngClassPristine,t["\u0275nov"](l,42).ngClassDirty,t["\u0275nov"](l,42).ngClassValid,t["\u0275nov"](l,42).ngClassInvalid,t["\u0275nov"](l,42).ngClassPending),n(l,46,0,t["\u0275nov"](l,51).ngClassUntouched,t["\u0275nov"](l,51).ngClassTouched,t["\u0275nov"](l,51).ngClassPristine,t["\u0275nov"](l,51).ngClassDirty,t["\u0275nov"](l,51).ngClassValid,t["\u0275nov"](l,51).ngClassInvalid,t["\u0275nov"](l,51).ngClassPending),n(l,55,0,t["\u0275nov"](l,60).ngClassUntouched,t["\u0275nov"](l,60).ngClassTouched,t["\u0275nov"](l,60).ngClassPristine,t["\u0275nov"](l,60).ngClassDirty,t["\u0275nov"](l,60).ngClassValid,t["\u0275nov"](l,60).ngClassInvalid,t["\u0275nov"](l,60).ngClassPending),n(l,64,0,t["\u0275nov"](l,69).ngClassUntouched,t["\u0275nov"](l,69).ngClassTouched,t["\u0275nov"](l,69).ngClassPristine,t["\u0275nov"](l,69).ngClassDirty,t["\u0275nov"](l,69).ngClassValid,t["\u0275nov"](l,69).ngClassInvalid,t["\u0275nov"](l,69).ngClassPending)})}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,7,"ckeditor",[["debounce","500"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.content=e)&&t),t},R,y)),t["\u0275did"](2,13287424,null,2,C.b,[t.NgZone],{config:[0,"config"],debounce:[1,"debounce"]},null),t["\u0275qud"](603979776,1,{toolbarButtons:1}),t["\u0275qud"](603979776,2,{toolbarGroups:1}),t["\u0275prd"](1024,null,b.h,function(n){return[n]},[C.b]),t["\u0275did"](6,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.i,null,[b.m]),t["\u0275did"](8,16384,null,0,b.j,[[4,b.i]],null,null)],function(n,l){var e=l.component;n(l,2,0,e.config,"500"),n(l,6,0,e.content)},function(n,l){n(l,1,0,t["\u0275nov"](l,8).ngClassUntouched,t["\u0275nov"](l,8).ngClassTouched,t["\u0275nov"](l,8).ngClassPristine,t["\u0275nov"](l,8).ngClassDirty,t["\u0275nov"](l,8).ngClassValid,t["\u0275nov"](l,8).ngClassInvalid,t["\u0275nov"](l,8).ngClassPending)})}function j(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"ion-buttons",[["slot","end"]],null,null,null,p.jb,p.g)),t["\u0275did"](1,49152,null,0,i.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addimg()&&t),t},p.ib,p.f)),t["\u0275did"](3,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["name","images"]],null,null,null,p.wb,p.t)),t["\u0275did"](5,49152,null,0,i.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\u63d2\u5165\u56fe\u7247 "]))],function(n,l){n(l,3,0,l.component.issub),n(l,5,0,"images")},null)}function B(n){return t["\u0275vid"](0,[t["\u0275pid"](0,E.a,[]),(n()(),t["\u0275eld"](1,0,null,null,21,"ion-header",[],null,null,null,p.vb,p.s)),t["\u0275did"](2,49152,null,0,i.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,19,"ion-toolbar",[],null,null,null,p.fc,p.cb)),t["\u0275did"](4,49152,null,0,i.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,p.jb,p.g)),t["\u0275did"](6,49152,null,0,i.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t},p.ib,p.f)),t["\u0275did"](8,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](9,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,p.wb,p.t)),t["\u0275did"](10,49152,null,0,i.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),t["\u0275eld"](11,0,null,0,2,"ion-title",[],null,null,null,p.dc,p.ab)),t["\u0275did"](12,49152,null,0,i.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](13,0,["\u53d1\u5e03",""])),(n()(),t["\u0275eld"](14,0,null,0,8,"ion-buttons",[["slot","end"]],null,null,null,p.jb,p.g)),t["\u0275did"](15,49152,null,0,i.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](17,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](18,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.sub(1)&&t),t},p.ib,p.f)),t["\u0275did"](19,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](20,0,null,0,1,"ion-icon",[["name","paper-plane"]],null,null,null,p.wb,p.t)),t["\u0275did"](21,49152,null,0,i.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\u53d1\u8868 "])),(n()(),t["\u0275eld"](23,0,null,null,8,"ion-content",[],null,null,null,p.rb,p.o)),t["\u0275did"](24,49152,null,0,i.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,Z)),t["\u0275did"](26,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,M)),t["\u0275did"](28,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](29,0,null,0,2,"div",[["class","keyboard-height"]],null,null,null,null,null)),t["\u0275did"](30,278528,null,0,v.NgStyle,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](31,{height:0}),(n()(),t["\u0275eld"](32,0,null,null,10,"ion-footer",[],null,null,null,p.tb,p.q)),t["\u0275did"](33,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](34,0,null,0,8,"ion-toolbar",[],null,null,null,p.fc,p.cb)),t["\u0275did"](35,49152,null,0,i.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](36,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.jb,p.g)),t["\u0275did"](37,49152,null,0,i.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](38,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.setContent()&&t),t},p.ib,p.f)),t["\u0275did"](39,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["\u0275ted"](40,0,[" "," "])),(n()(),t["\u0275and"](16777216,null,0,1,null,j)),t["\u0275did"](42,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,10,0,"ios","arrow-back"),n(l,17,0,!e.id),n(l,19,0,!e.formdata.title||!e.content||e.issub||e.issave),n(l,21,0,"paper-plane"),n(l,26,0,!e.iscontent),n(l,28,0,e.iscontent);var t=n(l,31,0,e.keyboardH+"px");n(l,30,0,t),n(l,39,0,e.issub),n(l,42,0,e.iscontent)},function(n,l){var e=l.component;n(l,13,0,e.title),n(l,40,0,e.iscontent?"\u6807\u9898":"\u6b63\u6587")})}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-fbyj",[],null,null,null,B,D)),t["\u0275did"](1,114688,null,0,h,[i.Kb,i.Mb,a.a,d.a,r.a,i.a,I.a,s.a,i.Nb,I.n,g.a,u.a],null,null)],function(n,l){n(l,1,0)},null)}var P=t["\u0275ccf"]("app-fbyj",h,x,{},{},[]),S=e("iTUp");e.d(l,"FbyjPageModuleNgFactory",function(){return T});var T=t["\u0275cmf"](m,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[f.a,P]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,b.t,b.t,[]),t["\u0275mpd"](4608,i.c,i.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Jb,i.Jb,[i.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.Nb,i.Nb,[i.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,b.q,b.q,[]),t["\u0275mpd"](1073742336,b.d,b.d,[]),t["\u0275mpd"](1073742336,i.Gb,i.Gb,[]),t["\u0275mpd"](1073742336,C.a,C.a,[]),t["\u0275mpd"](1073742336,S.a,S.a,[]),t["\u0275mpd"](1073742336,I.p,I.p,[[2,I.v],[2,I.n]]),t["\u0275mpd"](1073742336,m,m,[]),t["\u0275mpd"](1024,I.l,function(){return[[{path:"",component:h}]]},[])])})},iTUp:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){}}()},"n/qi":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n.prototype.transform=function(n,l){return console.log(l),n?n.startsWith("http")||n.startsWith("data:image")||n.startsWith("file:///")||n.startsWith("cdvfile://")?n:n.startsWith("/mobile")&&l&&l.endsWith("mobile/")?l+n.substring(7):n.startsWith("./../")?l+n.substring(5):l+n:"../../assets/mrtx.jpg"},n}()}}]);