(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"LKB+":function(n,l,e){"use strict";e.d(l,"a",function(){return d});var t=e("mrSG"),i=e("N+K7"),u=e("qfBg"),o=e("CcnG"),d=function(){function n(n,l){this.http=n,this.user=l,this.clear()}return n.prototype.getContactlist=function(){return 0===this.list.length&&this.getList(),this.list},n.prototype.setList=function(n){var l=this;if(0===n.length)return!1;this.list.length=0,this.user.getUserp().then(function(e){console.log(e),l.mrid=e.address_id,console.log(l.mrid);for(var t=0,i=n.length;t<i;t++){for(var u=l.list.length,o=0;o<u;o++)if(l.list[o].address_id==n[t].address_id){n.splice(t,1),t--,i--;break}l.list.push(n[t]),n[t].address_id==l.mrid&&"0"!=l.mrid?(l.list[t].active=!0,l.list[t].mr=1,l.activeList.push(n[t])):l.list[t].mr=0}l.mrid||(l.list[0].mr=1,l.activeList.push(l.list[0]),l.list[0].active=!0)}).catch(function(n){}),console.log(this.activeList)},n.prototype.setPro=function(n){var l;this.provinceList.length=0,(l=this.provinceList).push.apply(l,n)},n.prototype.getPro=function(){return this.provinceList},n.prototype.getProasync=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(n){switch(n.label){case 0:if(0!==this.provinceList.length)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.getList()];case 2:return n.sent(),[3,4];case 3:return n.sent(),[2,[]];case 4:return[2,this.provinceList]}})})},n.prototype.setMr=function(n){var l=this;this.http.getData(this.http.setMraddress,{address_id:n}).subscribe(function(e){l.setMrfn(n)},function(n){})},n.prototype.delete=function(n){var l=this;this.http.getData(this.http.deleteaddress,{id:n}).subscribe(function(e){for(var t=0,i=l.list.length;t<i;t++){console.log(l.list[t]),l.list[t].address_id==n&&l.list.splice(t,1),e.result&&l.setMrfn(e.result);for(var u=0,o=l.activeList.length;u<o;u++)l.activeList[u].address_id==n&&l.activeList.splice(u,1)}},function(n){})},n.prototype.setMrfn=function(n){this.mrid=n,this.user.setMraddress(n),this.list.map(function(l){l.mr=l.id==n||l.address_id==n?1:0})},n.prototype.setData=function(n){if(this.activeList.length===n)return!1;if(this.list.length>0)for(var l=0,e=this.list.length;l<e;l++)this.list[l].active=!1;this.activeList.length>0&&(this.activeList.length=0)},n.prototype.getItem=function(n){return t.b(this,void 0,void 0,function(){var l,e;return t.e(this,function(t){switch(t.label){case 0:if(this.list&&this.list.length>0)for(l=0,e=this.list.length;l<e;l++)if(this.list[l].address_id==n)return[2,this.list[l]];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getList()];case 2:for(t.sent(),l=0,e=this.list.length;l<e;l++)if(this.list[l].address_id===n)return[2,this.list[l]];return[3,4];case 3:return t.sent(),[2,{}];case 4:return[2,{}]}})})},n.prototype.edmit=function(n){if(console.log(n),1==n.defalut){n.mr=1,this.setMrfn(n.address_id);for(var l=0,e=this.activeList.length;l<e;l++)this.activeList[l].address_id==n.address_id?this.activeList.splice(l,1,n):1==this.activeList[l].mr&&(this.activeList[l].mr=0)}0===this.activeList.length&&this.activeList.push(n);var t=!1;for(l=0,e=this.list.length;l<e;l++)this.list[l].address_id==n.address_id?(this.list.splice(l,1,n),t=!0):1==n.mr&&(this.list[l].mr=0);t||this.list.push(n),console.log(this.list)},n.prototype.getActive=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(n){switch(n.label){case 0:if(0!==this.activeList.length)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.getList()];case 2:return n.sent(),[3,4];case 3:return n.sent(),[2,[]];case 4:return[2,this.activeList]}})})},n.prototype.setActive=function(n,l){var e;console.log(n),console.log(l);for(var t=[],i=0,u=this.list.length;i<u;i++)this.list[i].id===n.id?(this.list[i].active=!this.list[i].active,this.list[i].active&&(t.push(i),t.length>l&&(this.list[t[t.length-2]].active=!1)),e=this.list[i]):(console.log(this.list[i]),t.length===l&&this.list[i].active?this.list[i].active=!1:t.length<l&&this.list[i].active?t.push(i):this.list[i].active=!1);if(this.activeList.includes(n)){for(i=0,u=this.activeList.length;i<u;i++)if(this.activeList[i].id===n.id){this.activeList.splice(i,1);break}}else this.activeList.includes(n)||this.activeList.length!=l?this.activeList.push(n):this.activeList.splice(this.activeList.length-1,1,e)},n.prototype.getList=function(){return t.b(this,void 0,void 0,function(){var n=this;return t.e(this,function(l){return this.isgetdata?[2,!1]:(this.isgetdata=!0,[2,new Promise(function(l,e){n.http.getDataloading(n.http.getaddress).subscribe(function(e){n.setList(e.data.consignee_list),n.setPro(e.data.shop_province_list),n.isgetdata=!1,l(!0)},function(l){console.log(l),n.isgetdata=!1,e(!1)})})])})})},n.prototype.remove=function(){this.list.length=0,this.activeList.length=0,this.mrid=""},n.prototype.clear=function(){this.activeList=[],this.list=[],this.provinceList=[],this.isgetdata=!1},n.ngInjectableDef=o.defineInjectable({factory:function(){return new n(o.inject(i.a),o.inject(u.a))},token:n,providedIn:"root"}),n}()},yyA9:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),i=e("mrSG"),u=e("ZZ/e"),o=e("N+K7"),d=e("6m4Z"),r=e("LKB+"),s=function(){function n(n,l,e,t,i,u){this.nav=n,this.http=l,this.activeroute=e,this.native=t,this.contactlist=i,this.alertController=u}return n.prototype.ngOnInit=function(){this.provincelist=this.contactlist.getPro(),this.dataObj={consignee:"",tel:"",card:"",province:"",city:"",district:"",address:"",defalut:1},this.id=this.activeroute.snapshot.queryParams.id.toString()},n.prototype.ionViewDidEnter=function(){var n=this;"0"===this.id||this.dataObj.province||this.contactlist.getItem(this.id).then(function(l){console.log(l),l.defalut=1==l.mr?1:0,l.province=l.province_id,l.city=l.city_id,l.district=l.district_id,n.dataObj=l,console.log(n.dataObj)}),0===this.provincelist.length&&this.selteaddress(1)},n.prototype.selteaddress=function(n,l){var e=this;void 0===l&&(l="1"),this.http.getData(this.http.getcity,{parent:l,type:n}).subscribe(function(l){console.log(l),1===n?e.contactlist.setPro(l.regions):2===n?e.citylist=l.regions:e.arealist=l.regions})},n.prototype.onSubmit=function(){var n=this;if(console.log(this.dataObj),!/^1(\d){10}$/.test(this.dataObj.tel))return console.log("\u9a8c\u8bc1\u5931\u8d25"),this.native.presentAlert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801!"),!1;if(!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(this.dataObj.card))return console.log("\u9a8c\u8bc1\u5931\u8d25"),this.native.presentAlert("\u8bf7\u8f93\u516518\u4f4d\u8eab\u4efd\u8bc1\u53f7\u7801!"),!1;var l=Object.assign({},this.dataObj);l.mobile||(l.mobile=l.tel),l.defalut=l.defalut?1:0,this.http.postformdataloading(this.http.editorupdateaddress,l).subscribe(function(l){n.contactlist.edmit(l.result),n.presentAlert()})},n.prototype.goBack=function(){this.nav.back()},n.prototype.presentAlert=function(){return i.b(this,void 0,void 0,function(){var n=this;return i.e(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"\u63d0\u793a",message:"\u64cd\u4f5c\u6210\u529f.",buttons:[{text:"\u786e\u5b9a",role:"\u786e\u5b9a",cssClass:"secondary",handler:function(l){console.log("Confirm Cancel: blah"),n.goBack()}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n}(),a=function(){return function(){}}(),c=e("pMnS"),g=e("oBZk"),h=e("gIcY"),v=e("Ip0R"),p=e("ZYCi"),f=t["\u0275crt"]({encapsulation:0,styles:[[".des[_ngcontent-%COMP%]{font-size:var(--ion-sm-text)}"]],data:{}});function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Sb,g.Q)),t["\u0275did"](1,49152,null,0,u.qb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.region_id)},function(n,l){n(l,2,0,l.context.$implicit.region_name)})}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Sb,g.Q)),t["\u0275did"](1,49152,null,0,u.qb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.region_id)},function(n,l){n(l,2,0,l.context.$implicit.region_name)})}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Sb,g.Q)),t["\u0275did"](1,49152,null,0,u.qb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.region_id)},function(n,l){n(l,2,0,l.context.$implicit.region_name)})}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,g.vb,g.s)),t["\u0275did"](1,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](2,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,g.fc,g.cb)),t["\u0275did"](3,49152,null,0,u.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,g.jb,g.g)),t["\u0275did"](5,49152,null,0,u.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t},g.ib,g.f)),t["\u0275did"](7,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,g.wb,g.t)),t["\u0275did"](9,49152,null,0,u.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,g.dc,g.ab)),t["\u0275did"](11,49152,null,0,u.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["\u6dfb\u52a0\u51fa\u884c\u4eba"])),(n()(),t["\u0275eld"](13,0,null,null,124,"ion-content",[],null,null,null,g.rb,g.o)),t["\u0275did"](14,49152,null,0,u.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,122,"ion-content",[["padding",""]],null,null,null,g.rb,g.o)),t["\u0275did"](16,49152,null,0,u.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](17,16384,null,0,u.f,[t.ElementRef],null,null),(n()(),t["\u0275eld"](18,0,null,0,115,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var i=!0,u=n.component;return"submit"===l&&(i=!1!==t["\u0275nov"](n,20).onSubmit(e)&&i),"reset"===l&&(i=!1!==t["\u0275nov"](n,20).onReset()&&i),"ngSubmit"===l&&(i=!1!==u.onSubmit()&&i),i},null,null)),t["\u0275did"](19,16384,null,0,h.s,[],null,null),t["\u0275did"](20,4210688,[["userForm",4]],0,h.l,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,h.b,null,[h.l]),t["\u0275did"](22,16384,null,0,h.k,[[4,h.b]],null,null),(n()(),t["\u0275eld"](23,0,null,null,93,"ion-list",[],null,null,null,g.Hb,g.D)),t["\u0275did"](24,49152,null,0,u.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](25,0,null,0,10,"ion-item",[],null,null,null,g.Eb,g.y)),t["\u0275did"](26,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](27,0,null,0,8,"ion-input",[["name","consignee"],["placeholder","\u8bf7\u8f93\u5165\u59d3\u540d"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,30)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,30)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.consignee=e)&&i),i},g.Ab,g.x)),t["\u0275did"](28,16384,null,0,h.o,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.g,function(n){return[n]},[h.o]),t["\u0275did"](30,16384,null,0,u.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.h,function(n){return[n]},[u.Rb]),t["\u0275did"](32,671744,[["consignee",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.i,null,[h.m]),t["\u0275did"](34,16384,null,0,h.j,[[4,h.i]],null,null),t["\u0275did"](35,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["\u0275eld"](36,0,null,0,10,"ion-item",[],null,null,null,g.Eb,g.y)),t["\u0275did"](37,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](38,0,null,0,8,"ion-input",[["name","tel"],["placeholder","\u8bf7\u8f93\u5165\u6709\u6548\u624b\u673a\u53f7\u7801"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,41)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,41)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.tel=e)&&i),i},g.Ab,g.x)),t["\u0275did"](39,16384,null,0,h.o,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.g,function(n){return[n]},[h.o]),t["\u0275did"](41,16384,null,0,u.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.h,function(n){return[n]},[u.Rb]),t["\u0275did"](43,671744,[["tel",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.i,null,[h.m]),t["\u0275did"](45,16384,null,0,h.j,[[4,h.i]],null,null),t["\u0275did"](46,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["\u0275eld"](47,0,null,0,10,"ion-item",[],null,null,null,g.Eb,g.y)),t["\u0275did"](48,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](49,0,null,0,8,"ion-input",[["name","card"],["placeholder","\u8bf7\u8f93\u516518\u4f4d\u8eab\u4efd\u8bc1\u53f7\u7801"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,52)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,52)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.card=e)&&i),i},g.Ab,g.x)),t["\u0275did"](50,16384,null,0,h.o,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.g,function(n){return[n]},[h.o]),t["\u0275did"](52,16384,null,0,u.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.h,function(n){return[n]},[u.Rb]),t["\u0275did"](54,671744,[["card",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.i,null,[h.m]),t["\u0275did"](56,16384,null,0,h.j,[[4,h.i]],null,null),t["\u0275did"](57,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["\u0275eld"](58,0,null,0,15,"ion-item",[],null,null,null,g.Eb,g.y)),t["\u0275did"](59,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](60,0,null,0,2,"ion-label",[],null,null,null,g.Fb,g.C)),t["\u0275did"](61,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["\u7701"])),(n()(),t["\u0275eld"](63,0,null,0,10,"ion-select",[["cancelText","\u53d6\u6d88"],["name","province"],["okText","\u786e\u5b9a"],["placeholder","\u8bf7\u9009\u62e9\u7701"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,66)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,66)._handleChangeEvent(e.target)&&i),"ionChange"===l&&(i=!1!==u.selteaddress(2,u.dataObj.province)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.province=e)&&i),i},g.Tb,g.P)),t["\u0275did"](64,16384,null,0,h.o,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.g,function(n){return[n]},[h.o]),t["\u0275did"](66,16384,null,0,u.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.h,function(n){return[n]},[u.Qb]),t["\u0275did"](68,671744,[["province",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.i,null,[h.m]),t["\u0275did"](70,16384,null,0,h.j,[[4,h.i]],null,null),t["\u0275did"](71,49152,null,0,u.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],name:[1,"name"],okText:[2,"okText"],placeholder:[3,"placeholder"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](73,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](74,0,null,0,15,"ion-item",[],null,null,null,g.Eb,g.y)),t["\u0275did"](75,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](76,0,null,0,2,"ion-label",[],null,null,null,g.Fb,g.C)),t["\u0275did"](77,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["\u5e02"])),(n()(),t["\u0275eld"](79,0,null,0,10,"ion-select",[["cancelText","\u53d6\u6d88"],["name","city"],["okText","\u786e\u5b9a"],["placeholder","\u8bf7\u9009\u62e9\u5e02"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,82)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,82)._handleChangeEvent(e.target)&&i),"ionChange"===l&&(i=!1!==u.selteaddress(3,u.dataObj.city)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.city=e)&&i),i},g.Tb,g.P)),t["\u0275did"](80,16384,null,0,h.o,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.g,function(n){return[n]},[h.o]),t["\u0275did"](82,16384,null,0,u.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.h,function(n){return[n]},[u.Qb]),t["\u0275did"](84,671744,[["city",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.i,null,[h.m]),t["\u0275did"](86,16384,null,0,h.j,[[4,h.i]],null,null),t["\u0275did"](87,49152,null,0,u.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],name:[1,"name"],okText:[2,"okText"],placeholder:[3,"placeholder"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](89,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](90,0,null,0,15,"ion-item",[],null,null,null,g.Eb,g.y)),t["\u0275did"](91,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](92,0,null,0,2,"ion-label",[],null,null,null,g.Fb,g.C)),t["\u0275did"](93,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["\u533a"])),(n()(),t["\u0275eld"](95,0,null,0,10,"ion-select",[["cancelText","\u53d6\u6d88"],["name","district"],["okText","\u786e\u5b9a"],["placeholder","\u8bf7\u9009\u62e9\u533a"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,98)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,98)._handleChangeEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.district=e)&&i),i},g.Tb,g.P)),t["\u0275did"](96,16384,null,0,h.o,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.g,function(n){return[n]},[h.o]),t["\u0275did"](98,16384,null,0,u.Qb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.h,function(n){return[n]},[u.Qb]),t["\u0275did"](100,671744,[["district",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.i,null,[h.m]),t["\u0275did"](102,16384,null,0,h.j,[[4,h.i]],null,null),t["\u0275did"](103,49152,null,0,u.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],name:[1,"name"],okText:[2,"okText"],placeholder:[3,"placeholder"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](105,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](106,0,null,0,10,"ion-item",[],null,null,null,g.Eb,g.y)),t["\u0275did"](107,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](108,0,null,0,8,"ion-textarea",[["name","address"],["placeholder","\u8be6\u7ec6\u5730\u5740\uff1a\u5982\u9053\u8def\u3001\u95e8\u724c\u53f7\u3001\u5c0f\u533a\u3001\u697c\u680b\u53f7\u3001\u5355\u5143\u5ba4\u7b49"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,111)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,111)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.address=e)&&i),i},g.bc,g.Y)),t["\u0275did"](109,16384,null,0,h.o,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.g,function(n){return[n]},[h.o]),t["\u0275did"](111,16384,null,0,u.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.h,function(n){return[n]},[u.Rb]),t["\u0275did"](113,671744,[["address",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.i,null,[h.m]),t["\u0275did"](115,16384,null,0,h.j,[[4,h.i]],null,null),t["\u0275did"](116,49152,null,0,u.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["\u0275eld"](117,0,null,null,13,"ion-list",[],null,null,null,g.Hb,g.D)),t["\u0275did"](118,49152,null,0,u.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](119,0,null,0,11,"ion-item",[],null,null,null,g.Eb,g.y)),t["\u0275did"](120,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](121,0,null,0,2,"ion-label",[],null,null,null,g.Fb,g.C)),t["\u0275did"](122,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["\u8bbe\u4e3a\u9ed8\u8ba4\u5730\u5740"])),(n()(),t["\u0275eld"](124,0,null,0,6,"ion-toggle",[["color","success"],["name","defalut"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,125)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,125)._handleIonChange(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.defalut=e)&&i),i},g.ec,g.bb)),t["\u0275did"](125,16384,null,0,u.d,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.h,function(n){return[n]},[u.d]),t["\u0275did"](127,671744,null,0,h.m,[[2,h.b],[8,null],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.i,null,[h.m]),t["\u0275did"](129,16384,null,0,h.j,[[4,h.i]],null,null),t["\u0275did"](130,49152,null,0,u.Db,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(n()(),t["\u0275eld"](131,0,null,null,2,"ion-button",[["color","success"],["expand","block"],["type","submit"]],null,null,null,g.ib,g.f)),t["\u0275did"](132,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\u63d0\u4ea4"])),(n()(),t["\u0275eld"](134,0,null,0,3,"p",[["class","des"]],null,null,null,null,null)),(n()(),t["\u0275eld"](135,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,g.ac,g.X)),t["\u0275did"](136,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["\u8eab\u4efd\u8bc1\u53f7\u7801\u9519\u8bef\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u8d2d\u4e70\u8f66\u7968\u53ca\u4fdd\u9669"]))],function(n,l){var e=l.component;n(l,1,0,"ios"),n(l,3,0,"ios"),n(l,9,0,"ios","arrow-back"),n(l,28,0,""),n(l,32,0,"consignee",e.dataObj.consignee),n(l,35,0,"consignee","\u8bf7\u8f93\u5165\u59d3\u540d",""),n(l,39,0,""),n(l,43,0,"tel",e.dataObj.tel),n(l,46,0,"tel","\u8bf7\u8f93\u5165\u6709\u6548\u624b\u673a\u53f7\u7801",""),n(l,50,0,""),n(l,54,0,"card",e.dataObj.card),n(l,57,0,"card","\u8bf7\u8f93\u516518\u4f4d\u8eab\u4efd\u8bc1\u53f7\u7801",""),n(l,64,0,""),n(l,68,0,"province",e.dataObj.province),n(l,71,0,"\u53d6\u6d88","province","\u786e\u5b9a","\u8bf7\u9009\u62e9\u7701"),n(l,73,0,e.provincelist),n(l,80,0,""),n(l,84,0,"city",e.dataObj.city),n(l,87,0,"\u53d6\u6d88","city","\u786e\u5b9a","\u8bf7\u9009\u62e9\u5e02"),n(l,89,0,e.citylist),n(l,96,0,""),n(l,100,0,"district",e.dataObj.district),n(l,103,0,"\u53d6\u6d88","district","\u786e\u5b9a","\u8bf7\u9009\u62e9\u533a"),n(l,105,0,e.arealist),n(l,109,0,""),n(l,113,0,"address",e.dataObj.address),n(l,116,0,"address","\u8be6\u7ec6\u5730\u5740\uff1a\u5982\u9053\u8def\u3001\u95e8\u724c\u53f7\u3001\u5c0f\u533a\u3001\u697c\u680b\u53f7\u3001\u5355\u5143\u5ba4\u7b49",""),n(l,127,0,"defalut",e.dataObj.defalut),n(l,130,0,"success","defalut"),n(l,132,0,"success",!t["\u0275nov"](l,20).form.valid,"block","submit"),n(l,136,0,"danger")},function(n,l){n(l,18,0,t["\u0275nov"](l,22).ngClassUntouched,t["\u0275nov"](l,22).ngClassTouched,t["\u0275nov"](l,22).ngClassPristine,t["\u0275nov"](l,22).ngClassDirty,t["\u0275nov"](l,22).ngClassValid,t["\u0275nov"](l,22).ngClassInvalid,t["\u0275nov"](l,22).ngClassPending),n(l,27,0,t["\u0275nov"](l,28).required?"":null,t["\u0275nov"](l,34).ngClassUntouched,t["\u0275nov"](l,34).ngClassTouched,t["\u0275nov"](l,34).ngClassPristine,t["\u0275nov"](l,34).ngClassDirty,t["\u0275nov"](l,34).ngClassValid,t["\u0275nov"](l,34).ngClassInvalid,t["\u0275nov"](l,34).ngClassPending),n(l,38,0,t["\u0275nov"](l,39).required?"":null,t["\u0275nov"](l,45).ngClassUntouched,t["\u0275nov"](l,45).ngClassTouched,t["\u0275nov"](l,45).ngClassPristine,t["\u0275nov"](l,45).ngClassDirty,t["\u0275nov"](l,45).ngClassValid,t["\u0275nov"](l,45).ngClassInvalid,t["\u0275nov"](l,45).ngClassPending),n(l,49,0,t["\u0275nov"](l,50).required?"":null,t["\u0275nov"](l,56).ngClassUntouched,t["\u0275nov"](l,56).ngClassTouched,t["\u0275nov"](l,56).ngClassPristine,t["\u0275nov"](l,56).ngClassDirty,t["\u0275nov"](l,56).ngClassValid,t["\u0275nov"](l,56).ngClassInvalid,t["\u0275nov"](l,56).ngClassPending),n(l,63,0,t["\u0275nov"](l,64).required?"":null,t["\u0275nov"](l,70).ngClassUntouched,t["\u0275nov"](l,70).ngClassTouched,t["\u0275nov"](l,70).ngClassPristine,t["\u0275nov"](l,70).ngClassDirty,t["\u0275nov"](l,70).ngClassValid,t["\u0275nov"](l,70).ngClassInvalid,t["\u0275nov"](l,70).ngClassPending),n(l,79,0,t["\u0275nov"](l,80).required?"":null,t["\u0275nov"](l,86).ngClassUntouched,t["\u0275nov"](l,86).ngClassTouched,t["\u0275nov"](l,86).ngClassPristine,t["\u0275nov"](l,86).ngClassDirty,t["\u0275nov"](l,86).ngClassValid,t["\u0275nov"](l,86).ngClassInvalid,t["\u0275nov"](l,86).ngClassPending),n(l,95,0,t["\u0275nov"](l,96).required?"":null,t["\u0275nov"](l,102).ngClassUntouched,t["\u0275nov"](l,102).ngClassTouched,t["\u0275nov"](l,102).ngClassPristine,t["\u0275nov"](l,102).ngClassDirty,t["\u0275nov"](l,102).ngClassValid,t["\u0275nov"](l,102).ngClassInvalid,t["\u0275nov"](l,102).ngClassPending),n(l,108,0,t["\u0275nov"](l,109).required?"":null,t["\u0275nov"](l,115).ngClassUntouched,t["\u0275nov"](l,115).ngClassTouched,t["\u0275nov"](l,115).ngClassPristine,t["\u0275nov"](l,115).ngClassDirty,t["\u0275nov"](l,115).ngClassValid,t["\u0275nov"](l,115).ngClassInvalid,t["\u0275nov"](l,115).ngClassPending),n(l,124,0,t["\u0275nov"](l,129).ngClassUntouched,t["\u0275nov"](l,129).ngClassTouched,t["\u0275nov"](l,129).ngClassPristine,t["\u0275nov"](l,129).ngClassDirty,t["\u0275nov"](l,129).ngClassValid,t["\u0275nov"](l,129).ngClassInvalid,t["\u0275nov"](l,129).ngClassPending)})}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-contactdata",[],null,null,null,R,f)),t["\u0275did"](1,114688,null,0,s,[u.Kb,o.a,p.a,d.a,r.a,u.b],null,null)],function(n,l){n(l,1,0)},null)}var E=t["\u0275ccf"]("app-contactdata",s,y,{},{},[]);e.d(l,"ContactdataPageModuleNgFactory",function(){return D});var D=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,E]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,h.t,h.t,[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Jb,u.Jb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Nb,u.Nb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,h.q,h.q,[]),t["\u0275mpd"](1073742336,h.d,h.d,[]),t["\u0275mpd"](1073742336,u.Gb,u.Gb,[]),t["\u0275mpd"](1073742336,p.p,p.p,[[2,p.v],[2,p.n]]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,p.l,function(){return[[{path:"",component:s}]]},[])])})}}]);