(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"LKB+":function(n,l,e){"use strict";e.d(l,"a",function(){return r});var t=e("mrSG"),i=e("N+K7"),o=e("qfBg"),u=e("CcnG"),r=function(){function n(n,l){this.http=n,this.user=l,this.activeList=[],this.list=[],this.provinceList=[],this.isgetdata=!1}return n.prototype.getContactlist=function(){return 0===this.list.length&&this.getList(),this.list},n.prototype.setList=function(n){var l=this;if(0===n.length)return!1;this.list.length=0,this.user.getUserp().then(function(e){console.log(e),l.mrid=e.address_id,console.log(l.mrid);for(var t=0,i=n.length;t<i;t++){for(var o=l.list.length,u=0;u<o;u++)if(l.list[u].address_id==n[t].address_id){n.splice(t,1),t--,i--;break}l.list.push(n[t]),n[t].address_id==l.mrid&&"0"!=l.mrid?(l.list[t].active=!0,l.list[t].mr=1,l.activeList.push(n[t])):l.list[t].mr=0}l.mrid||(l.list[0].mr=1,l.activeList.push(l.list[0]),l.list[0].active=!0)}).catch(function(n){}),console.log(this.activeList)},n.prototype.setPro=function(n){var l;this.provinceList.length=0,(l=this.provinceList).push.apply(l,n)},n.prototype.getPro=function(){return this.provinceList},n.prototype.setMr=function(n){var l=this;this.http.getData(this.http.setMraddress,{address_id:n}).subscribe(function(e){l.setMrfn(n)},function(n){})},n.prototype.delete=function(n){var l=this;this.http.getData(this.http.deleteaddress,{id:n}).subscribe(function(e){for(var t=0,i=l.list.length;t<i;t++){console.log(l.list[t]),l.list[t].address_id==n&&l.list.splice(t,1),e.result&&l.setMrfn(e.result);for(var o=0,u=l.activeList.length;o<u;o++)l.activeList[o].address_id==n&&l.activeList.splice(o,1)}},function(n){})},n.prototype.setMrfn=function(n){this.mrid=n,this.user.setMraddress(n),this.list.map(function(l){l.mr=l.id==n||l.address_id==n?1:0})},n.prototype.setData=function(n){if(this.activeList.length===n)return!1;if(this.list.length>0)for(var l=0,e=this.list.length;l<e;l++)this.list[l].active=!1;this.activeList.length>0&&(this.activeList.length=0)},n.prototype.getItem=function(n){return t.b(this,void 0,void 0,function(){var l,e;return t.e(this,function(t){switch(t.label){case 0:if(this.list&&this.list.length>0)for(l=0,e=this.list.length;l<e;l++)if(this.list[l].address_id==n)return[2,this.list[l]];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getList()];case 2:for(t.sent(),l=0,e=this.list.length;l<e;l++)if(this.list[l].address_id===n)return[2,this.list[l]];return[3,4];case 3:return t.sent(),[2,{}];case 4:return[2,{}]}})})},n.prototype.edmit=function(n){if(console.log(n),1==n.defalut){n.mr=1,this.setMrfn(n.address_id);for(var l=0,e=this.activeList.length;l<e;l++)this.activeList[l].address_id==n.address_id?this.activeList.splice(l,1,n):1==this.activeList[l].mr&&(this.activeList[l].mr=0)}0===this.activeList.length&&this.activeList.push(n);var t=!1;for(l=0,e=this.list.length;l<e;l++)this.list[l].address_id==n.address_id?(this.list.splice(l,1,n),t=!0):1==n.mr&&(this.list[l].mr=0);t||this.list.push(n),console.log(this.list)},n.prototype.getActive=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(n){switch(n.label){case 0:if(0!==this.activeList.length)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.getList()];case 2:return n.sent(),[3,4];case 3:return n.sent(),[2,[]];case 4:return[2,this.activeList]}})})},n.prototype.setActive=function(n,l){var e;console.log(n),console.log(l);for(var t=[],i=0,o=this.list.length;i<o;i++)this.list[i].id===n.id?(this.list[i].active=!this.list[i].active,this.list[i].active&&(t.push(i),t.length>l&&(this.list[t[t.length-2]].active=!1)),e=this.list[i]):(console.log(this.list[i]),t.length===l&&this.list[i].active?this.list[i].active=!1:t.length<l&&this.list[i].active?t.push(i):this.list[i].active=!1);if(this.activeList.includes(n)){for(i=0,o=this.activeList.length;i<o;i++)if(this.activeList[i].id===n.id){this.activeList.splice(i,1);break}}else this.activeList.includes(n)||this.activeList.length!=l?this.activeList.push(n):this.activeList.splice(this.activeList.length-1,1,e)},n.prototype.getList=function(){return t.b(this,void 0,void 0,function(){var n=this;return t.e(this,function(l){return this.isgetdata?[2,!1]:(this.isgetdata=!0,[2,new Promise(function(l,e){n.http.getDataloading(n.http.getaddress).subscribe(function(e){n.setList(e.data.consignee_list),n.setPro(e.data.shop_province_list),n.isgetdata=!1,l(!0)},function(l){console.log(l),n.isgetdata=!1,e(!1)})})])})})},n.prototype.remove=function(){this.list.length=0,this.activeList.length=0,this.mrid=""},n.ngInjectableDef=u.defineInjectable({factory:function(){return new n(u.inject(i.a),u.inject(o.a))},token:n,providedIn:"root"}),n}()},yyA9:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),i=e("mrSG"),o=e("ZZ/e"),u=e("N+K7"),r=e("6m4Z"),d=e("LKB+"),a=function(){function n(n,l,e,t,i,o){this.nav=n,this.http=l,this.activeroute=e,this.native=t,this.contactlist=i,this.alertController=o}return n.prototype.ngOnInit=function(){this.provincelist=this.contactlist.getPro(),this.dataObj={consignee:"",tel:"",card:"",province:"",city:"",district:"",address:"",defalut:1},this.id=this.activeroute.snapshot.queryParams.id.toString()},n.prototype.ionViewDidEnter=function(){var n=this;"0"===this.id||this.dataObj.province||this.contactlist.getItem(this.id).then(function(l){console.log(l),l.defalut=1==l.mr?1:0,l.province=l.province_id,l.city=l.city_id,l.district=l.district_id,n.dataObj=l,console.log(n.dataObj)}),0===this.provincelist.length&&this.selteaddress(1)},n.prototype.selteaddress=function(n,l){var e=this;void 0===l&&(l="1"),this.http.getData(this.http.getcity,{parent:l,type:n}).subscribe(function(l){console.log(l),1===n?e.contactlist.setPro(l.regions):2===n?e.citylist=l.regions:e.arealist=l.regions})},n.prototype.onSubmit=function(){var n=this;if(console.log(this.dataObj),!/^1(\d){10}$/.test(this.dataObj.tel))return console.log("\u9a8c\u8bc1\u5931\u8d25"),this.native.presentAlert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801!"),!1;if(!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(this.dataObj.card))return console.log("\u9a8c\u8bc1\u5931\u8d25"),this.native.presentAlert("\u8bf7\u8f93\u516518\u4f4d\u8eab\u4efd\u8bc1\u53f7\u7801!"),!1;var l=Object.assign({},this.dataObj);l.mobile||(l.mobile=l.tel),l.defalut=l.defalut?1:0,this.http.postformdataloading(this.http.editorupdateaddress,l).subscribe(function(l){n.contactlist.edmit(l.result),n.presentAlert()})},n.prototype.goBack=function(){this.nav.back()},n.prototype.presentAlert=function(){return i.b(this,void 0,void 0,function(){var n=this;return i.e(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"\u63d0\u793a",message:"\u64cd\u4f5c\u6210\u529f.",buttons:[{text:"\u786e\u5b9a",role:"\u786e\u5b9a",cssClass:"secondary",handler:function(l){console.log("Confirm Cancel: blah"),n.goBack()}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n}(),s=function(){return function(){}}(),c=e("pMnS"),g=e("oBZk"),h=e("gIcY"),v=e("Ip0R"),f=e("ZYCi"),p=t["\u0275crt"]({encapsulation:0,styles:[[".des[_ngcontent-%COMP%]{font-size:var(--ion-sm-text)}"]],data:{}});function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Tb,g.Q)),t["\u0275did"](1,49152,null,0,o.ob,[t.ChangeDetectorRef,t.ElementRef],{value:[0,"value"]},null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.region_id)},function(n,l){n(l,2,0,l.context.$implicit.region_name)})}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Tb,g.Q)),t["\u0275did"](1,49152,null,0,o.ob,[t.ChangeDetectorRef,t.ElementRef],{value:[0,"value"]},null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.region_id)},function(n,l){n(l,2,0,l.context.$implicit.region_name)})}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Tb,g.Q)),t["\u0275did"](1,49152,null,0,o.ob,[t.ChangeDetectorRef,t.ElementRef],{value:[0,"value"]},null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.region_id)},function(n,l){n(l,2,0,l.context.$implicit.region_name)})}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,g.wb,g.s)),t["\u0275did"](1,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](2,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,g.gc,g.cb)),t["\u0275did"](3,49152,null,0,o.Cb,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,g.kb,g.g)),t["\u0275did"](5,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t},g.jb,g.f)),t["\u0275did"](7,49152,null,0,o.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,g.xb,g.t)),t["\u0275did"](9,49152,null,0,o.D,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,g.ec,g.ab)),t["\u0275did"](11,49152,null,0,o.Ab,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["\u6dfb\u52a0\u51fa\u884c\u4eba"])),(n()(),t["\u0275eld"](13,0,null,null,123,"ion-content",[],null,null,null,g.sb,g.o)),t["\u0275did"](14,49152,null,0,o.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](15,0,null,0,121,"ion-content",[["padding",""]],null,null,null,g.sb,g.o)),t["\u0275did"](16,49152,null,0,o.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](17,0,null,0,115,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var i=!0,o=n.component;return"submit"===l&&(i=!1!==t["\u0275nov"](n,19).onSubmit(e)&&i),"reset"===l&&(i=!1!==t["\u0275nov"](n,19).onReset()&&i),"ngSubmit"===l&&(i=!1!==o.onSubmit()&&i),i},null,null)),t["\u0275did"](18,16384,null,0,h["\u0275angular_packages_forms_forms_bh"],[],null,null),t["\u0275did"](19,4210688,[["userForm",4]],0,h.NgForm,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,h.ControlContainer,null,[h.NgForm]),t["\u0275did"](21,16384,null,0,h.NgControlStatusGroup,[[4,h.ControlContainer]],null,null),(n()(),t["\u0275eld"](22,0,null,null,93,"ion-list",[],null,null,null,g.Ib,g.D)),t["\u0275did"](23,49152,null,0,o.P,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](24,0,null,0,10,"ion-item",[],null,null,null,g.Fb,g.y)),t["\u0275did"](25,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](26,0,null,0,8,"ion-input",[["name","consignee"],["placeholder","\u8bf7\u8f93\u5165\u59d3\u540d"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,29)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,29)._handleInputEvent(e.target.value)&&i),"ngModelChange"===l&&(i=!1!==(o.dataObj.consignee=e)&&i),i},g.Bb,g.x)),t["\u0275did"](27,16384,null,0,h.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.NG_VALIDATORS,function(n){return[n]},[h.RequiredValidator]),t["\u0275did"](29,16384,null,0,o.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.NG_VALUE_ACCESSOR,function(n){return[n]},[o.Pb]),t["\u0275did"](31,671744,[["consignee",4]],0,h.NgModel,[[2,h.ControlContainer],[6,h.NG_VALIDATORS],[8,null],[6,h.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.NgControl,null,[h.NgModel]),t["\u0275did"](33,16384,null,0,h.NgControlStatus,[[4,h.NgControl]],null,null),t["\u0275did"](34,49152,null,0,o.H,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["\u0275eld"](35,0,null,0,10,"ion-item",[],null,null,null,g.Fb,g.y)),t["\u0275did"](36,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](37,0,null,0,8,"ion-input",[["name","tel"],["placeholder","\u8bf7\u8f93\u5165\u6709\u6548\u624b\u673a\u53f7\u7801"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,40)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,40)._handleInputEvent(e.target.value)&&i),"ngModelChange"===l&&(i=!1!==(o.dataObj.tel=e)&&i),i},g.Bb,g.x)),t["\u0275did"](38,16384,null,0,h.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.NG_VALIDATORS,function(n){return[n]},[h.RequiredValidator]),t["\u0275did"](40,16384,null,0,o.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.NG_VALUE_ACCESSOR,function(n){return[n]},[o.Pb]),t["\u0275did"](42,671744,[["tel",4]],0,h.NgModel,[[2,h.ControlContainer],[6,h.NG_VALIDATORS],[8,null],[6,h.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.NgControl,null,[h.NgModel]),t["\u0275did"](44,16384,null,0,h.NgControlStatus,[[4,h.NgControl]],null,null),t["\u0275did"](45,49152,null,0,o.H,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["\u0275eld"](46,0,null,0,10,"ion-item",[],null,null,null,g.Fb,g.y)),t["\u0275did"](47,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](48,0,null,0,8,"ion-input",[["name","card"],["placeholder","\u8bf7\u8f93\u516518\u4f4d\u8eab\u4efd\u8bc1\u53f7\u7801"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,51)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,51)._handleInputEvent(e.target.value)&&i),"ngModelChange"===l&&(i=!1!==(o.dataObj.card=e)&&i),i},g.Bb,g.x)),t["\u0275did"](49,16384,null,0,h.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.NG_VALIDATORS,function(n){return[n]},[h.RequiredValidator]),t["\u0275did"](51,16384,null,0,o.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.NG_VALUE_ACCESSOR,function(n){return[n]},[o.Pb]),t["\u0275did"](53,671744,[["card",4]],0,h.NgModel,[[2,h.ControlContainer],[6,h.NG_VALIDATORS],[8,null],[6,h.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.NgControl,null,[h.NgModel]),t["\u0275did"](55,16384,null,0,h.NgControlStatus,[[4,h.NgControl]],null,null),t["\u0275did"](56,49152,null,0,o.H,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["\u0275eld"](57,0,null,0,15,"ion-item",[],null,null,null,g.Fb,g.y)),t["\u0275did"](58,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](59,0,null,0,2,"ion-label",[],null,null,null,g.Gb,g.C)),t["\u0275did"](60,49152,null,0,o.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["\u7701"])),(n()(),t["\u0275eld"](62,0,null,0,10,"ion-select",[["cancelText","\u53d6\u6d88"],["name","province"],["okText","\u786e\u5b9a"],["placeholder","\u8bf7\u9009\u62e9\u7701"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,65)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,65)._handleChangeEvent(e.target.value)&&i),"ionChange"===l&&(i=!1!==o.selteaddress(2,o.dataObj.province)&&i),"ngModelChange"===l&&(i=!1!==(o.dataObj.province=e)&&i),i},g.Ub,g.P)),t["\u0275did"](63,16384,null,0,h.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.NG_VALIDATORS,function(n){return[n]},[h.RequiredValidator]),t["\u0275did"](65,16384,null,0,o.Ob,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.NG_VALUE_ACCESSOR,function(n){return[n]},[o.Ob]),t["\u0275did"](67,671744,[["province",4]],0,h.NgModel,[[2,h.ControlContainer],[6,h.NG_VALIDATORS],[8,null],[6,h.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.NgControl,null,[h.NgModel]),t["\u0275did"](69,16384,null,0,h.NgControlStatus,[[4,h.NgControl]],null,null),t["\u0275did"](70,49152,null,0,o.nb,[t.ChangeDetectorRef,t.ElementRef],{cancelText:[0,"cancelText"],okText:[1,"okText"],placeholder:[2,"placeholder"],name:[3,"name"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](72,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](73,0,null,0,15,"ion-item",[],null,null,null,g.Fb,g.y)),t["\u0275did"](74,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](75,0,null,0,2,"ion-label",[],null,null,null,g.Gb,g.C)),t["\u0275did"](76,49152,null,0,o.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["\u5e02"])),(n()(),t["\u0275eld"](78,0,null,0,10,"ion-select",[["cancelText","\u53d6\u6d88"],["name","city"],["okText","\u786e\u5b9a"],["placeholder","\u8bf7\u9009\u62e9\u5e02"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,81)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,81)._handleChangeEvent(e.target.value)&&i),"ionChange"===l&&(i=!1!==o.selteaddress(3,o.dataObj.city)&&i),"ngModelChange"===l&&(i=!1!==(o.dataObj.city=e)&&i),i},g.Ub,g.P)),t["\u0275did"](79,16384,null,0,h.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.NG_VALIDATORS,function(n){return[n]},[h.RequiredValidator]),t["\u0275did"](81,16384,null,0,o.Ob,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.NG_VALUE_ACCESSOR,function(n){return[n]},[o.Ob]),t["\u0275did"](83,671744,[["city",4]],0,h.NgModel,[[2,h.ControlContainer],[6,h.NG_VALIDATORS],[8,null],[6,h.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.NgControl,null,[h.NgModel]),t["\u0275did"](85,16384,null,0,h.NgControlStatus,[[4,h.NgControl]],null,null),t["\u0275did"](86,49152,null,0,o.nb,[t.ChangeDetectorRef,t.ElementRef],{cancelText:[0,"cancelText"],okText:[1,"okText"],placeholder:[2,"placeholder"],name:[3,"name"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](88,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](89,0,null,0,15,"ion-item",[],null,null,null,g.Fb,g.y)),t["\u0275did"](90,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](91,0,null,0,2,"ion-label",[],null,null,null,g.Gb,g.C)),t["\u0275did"](92,49152,null,0,o.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["\u533a"])),(n()(),t["\u0275eld"](94,0,null,0,10,"ion-select",[["cancelText","\u53d6\u6d88"],["name","district"],["okText","\u786e\u5b9a"],["placeholder","\u8bf7\u9009\u62e9\u533a"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,97)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,97)._handleChangeEvent(e.target.value)&&i),"ngModelChange"===l&&(i=!1!==(o.dataObj.district=e)&&i),i},g.Ub,g.P)),t["\u0275did"](95,16384,null,0,h.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.NG_VALIDATORS,function(n){return[n]},[h.RequiredValidator]),t["\u0275did"](97,16384,null,0,o.Ob,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.NG_VALUE_ACCESSOR,function(n){return[n]},[o.Ob]),t["\u0275did"](99,671744,[["district",4]],0,h.NgModel,[[2,h.ControlContainer],[6,h.NG_VALIDATORS],[8,null],[6,h.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.NgControl,null,[h.NgModel]),t["\u0275did"](101,16384,null,0,h.NgControlStatus,[[4,h.NgControl]],null,null),t["\u0275did"](102,49152,null,0,o.nb,[t.ChangeDetectorRef,t.ElementRef],{cancelText:[0,"cancelText"],okText:[1,"okText"],placeholder:[2,"placeholder"],name:[3,"name"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](104,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](105,0,null,0,10,"ion-item",[],null,null,null,g.Fb,g.y)),t["\u0275did"](106,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](107,0,null,0,8,"ion-textarea",[["name","address"],["placeholder","\u8be6\u7ec6\u5730\u5740\uff1a\u5982\u9053\u8def\u3001\u95e8\u724c\u53f7\u3001\u5c0f\u533a\u3001\u697c\u680b\u53f7\u3001\u5355\u5143\u5ba4\u7b49"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,110)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,110)._handleInputEvent(e.target.value)&&i),"ngModelChange"===l&&(i=!1!==(o.dataObj.address=e)&&i),i},g.cc,g.Y)),t["\u0275did"](108,16384,null,0,h.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,h.NG_VALIDATORS,function(n){return[n]},[h.RequiredValidator]),t["\u0275did"](110,16384,null,0,o.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.NG_VALUE_ACCESSOR,function(n){return[n]},[o.Pb]),t["\u0275did"](112,671744,[["address",4]],0,h.NgModel,[[2,h.ControlContainer],[6,h.NG_VALIDATORS],[8,null],[6,h.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.NgControl,null,[h.NgModel]),t["\u0275did"](114,16384,null,0,h.NgControlStatus,[[4,h.NgControl]],null,null),t["\u0275did"](115,49152,null,0,o.yb,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["\u0275eld"](116,0,null,null,13,"ion-list",[],null,null,null,g.Ib,g.D)),t["\u0275did"](117,49152,null,0,o.P,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](118,0,null,0,11,"ion-item",[],null,null,null,g.Fb,g.y)),t["\u0275did"](119,49152,null,0,o.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](120,0,null,0,2,"ion-label",[],null,null,null,g.Gb,g.C)),t["\u0275did"](121,49152,null,0,o.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["\u8bbe\u4e3a\u9ed8\u8ba4\u5730\u5740"])),(n()(),t["\u0275eld"](123,0,null,0,6,"ion-toggle",[["color","success"],["name","defalut"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,124)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,124)._handleIonChange(e.target.checked)&&i),"ngModelChange"===l&&(i=!1!==(o.dataObj.defalut=e)&&i),i},g.fc,g.bb)),t["\u0275did"](124,16384,null,0,o.d,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.NG_VALUE_ACCESSOR,function(n){return[n]},[o.d]),t["\u0275did"](126,671744,null,0,h.NgModel,[[2,h.ControlContainer],[8,null],[8,null],[6,h.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.NgControl,null,[h.NgModel]),t["\u0275did"](128,16384,null,0,h.NgControlStatus,[[4,h.NgControl]],null,null),t["\u0275did"](129,49152,null,0,o.Bb,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],name:[1,"name"]},null),(n()(),t["\u0275eld"](130,0,null,null,2,"ion-button",[["color","success"],["expand","block"],["type","submit"]],null,null,null,g.jb,g.f)),t["\u0275did"](131,49152,null,0,o.l,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\u63d0\u4ea4"])),(n()(),t["\u0275eld"](133,0,null,0,3,"p",[["class","des"]],null,null,null,null,null)),(n()(),t["\u0275eld"](134,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,g.bc,g.X)),t["\u0275did"](135,49152,null,0,o.xb,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["\u8eab\u4efd\u8bc1\u53f7\u7801\u9519\u8bef\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u8d2d\u4e70\u8f66\u7968\u53ca\u4fdd\u9669"]))],function(n,l){var e=l.component;n(l,1,0,"ios"),n(l,3,0,"ios"),n(l,9,0,"ios","arrow-back"),n(l,27,0,""),n(l,31,0,"consignee",e.dataObj.consignee),n(l,34,0,"consignee","\u8bf7\u8f93\u5165\u59d3\u540d",""),n(l,38,0,""),n(l,42,0,"tel",e.dataObj.tel),n(l,45,0,"tel","\u8bf7\u8f93\u5165\u6709\u6548\u624b\u673a\u53f7\u7801",""),n(l,49,0,""),n(l,53,0,"card",e.dataObj.card),n(l,56,0,"card","\u8bf7\u8f93\u516518\u4f4d\u8eab\u4efd\u8bc1\u53f7\u7801",""),n(l,63,0,""),n(l,67,0,"province",e.dataObj.province),n(l,70,0,"\u53d6\u6d88","\u786e\u5b9a","\u8bf7\u9009\u62e9\u7701","province"),n(l,72,0,e.provincelist),n(l,79,0,""),n(l,83,0,"city",e.dataObj.city),n(l,86,0,"\u53d6\u6d88","\u786e\u5b9a","\u8bf7\u9009\u62e9\u5e02","city"),n(l,88,0,e.citylist),n(l,95,0,""),n(l,99,0,"district",e.dataObj.district),n(l,102,0,"\u53d6\u6d88","\u786e\u5b9a","\u8bf7\u9009\u62e9\u533a","district"),n(l,104,0,e.arealist),n(l,108,0,""),n(l,112,0,"address",e.dataObj.address),n(l,115,0,"address","\u8be6\u7ec6\u5730\u5740\uff1a\u5982\u9053\u8def\u3001\u95e8\u724c\u53f7\u3001\u5c0f\u533a\u3001\u697c\u680b\u53f7\u3001\u5355\u5143\u5ba4\u7b49",""),n(l,126,0,"defalut",e.dataObj.defalut),n(l,129,0,"success","defalut"),n(l,131,0,"success",!t["\u0275nov"](l,19).form.valid,"block","submit"),n(l,135,0,"danger")},function(n,l){n(l,17,0,t["\u0275nov"](l,21).ngClassUntouched,t["\u0275nov"](l,21).ngClassTouched,t["\u0275nov"](l,21).ngClassPristine,t["\u0275nov"](l,21).ngClassDirty,t["\u0275nov"](l,21).ngClassValid,t["\u0275nov"](l,21).ngClassInvalid,t["\u0275nov"](l,21).ngClassPending),n(l,26,0,t["\u0275nov"](l,27).required?"":null,t["\u0275nov"](l,33).ngClassUntouched,t["\u0275nov"](l,33).ngClassTouched,t["\u0275nov"](l,33).ngClassPristine,t["\u0275nov"](l,33).ngClassDirty,t["\u0275nov"](l,33).ngClassValid,t["\u0275nov"](l,33).ngClassInvalid,t["\u0275nov"](l,33).ngClassPending),n(l,37,0,t["\u0275nov"](l,38).required?"":null,t["\u0275nov"](l,44).ngClassUntouched,t["\u0275nov"](l,44).ngClassTouched,t["\u0275nov"](l,44).ngClassPristine,t["\u0275nov"](l,44).ngClassDirty,t["\u0275nov"](l,44).ngClassValid,t["\u0275nov"](l,44).ngClassInvalid,t["\u0275nov"](l,44).ngClassPending),n(l,48,0,t["\u0275nov"](l,49).required?"":null,t["\u0275nov"](l,55).ngClassUntouched,t["\u0275nov"](l,55).ngClassTouched,t["\u0275nov"](l,55).ngClassPristine,t["\u0275nov"](l,55).ngClassDirty,t["\u0275nov"](l,55).ngClassValid,t["\u0275nov"](l,55).ngClassInvalid,t["\u0275nov"](l,55).ngClassPending),n(l,62,0,t["\u0275nov"](l,63).required?"":null,t["\u0275nov"](l,69).ngClassUntouched,t["\u0275nov"](l,69).ngClassTouched,t["\u0275nov"](l,69).ngClassPristine,t["\u0275nov"](l,69).ngClassDirty,t["\u0275nov"](l,69).ngClassValid,t["\u0275nov"](l,69).ngClassInvalid,t["\u0275nov"](l,69).ngClassPending),n(l,78,0,t["\u0275nov"](l,79).required?"":null,t["\u0275nov"](l,85).ngClassUntouched,t["\u0275nov"](l,85).ngClassTouched,t["\u0275nov"](l,85).ngClassPristine,t["\u0275nov"](l,85).ngClassDirty,t["\u0275nov"](l,85).ngClassValid,t["\u0275nov"](l,85).ngClassInvalid,t["\u0275nov"](l,85).ngClassPending),n(l,94,0,t["\u0275nov"](l,95).required?"":null,t["\u0275nov"](l,101).ngClassUntouched,t["\u0275nov"](l,101).ngClassTouched,t["\u0275nov"](l,101).ngClassPristine,t["\u0275nov"](l,101).ngClassDirty,t["\u0275nov"](l,101).ngClassValid,t["\u0275nov"](l,101).ngClassInvalid,t["\u0275nov"](l,101).ngClassPending),n(l,107,0,t["\u0275nov"](l,108).required?"":null,t["\u0275nov"](l,114).ngClassUntouched,t["\u0275nov"](l,114).ngClassTouched,t["\u0275nov"](l,114).ngClassPristine,t["\u0275nov"](l,114).ngClassDirty,t["\u0275nov"](l,114).ngClassValid,t["\u0275nov"](l,114).ngClassInvalid,t["\u0275nov"](l,114).ngClassPending),n(l,123,0,t["\u0275nov"](l,128).ngClassUntouched,t["\u0275nov"](l,128).ngClassTouched,t["\u0275nov"](l,128).ngClassPristine,t["\u0275nov"](l,128).ngClassDirty,t["\u0275nov"](l,128).ngClassValid,t["\u0275nov"](l,128).ngClassInvalid,t["\u0275nov"](l,128).ngClassPending)})}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-contactdata",[],null,null,null,R,p)),t["\u0275did"](1,114688,null,0,a,[o.Ib,u.a,f.a,r.a,d.a,o.b],null,null)],function(n,l){n(l,1,0)},null)}var E=t["\u0275ccf"]("app-contactdata",a,_,{},{},[]);e.d(l,"ContactdataPageModuleNgFactory",function(){return N});var N=t["\u0275cmf"](s,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,E]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,h["\u0275angular_packages_forms_forms_j"],h["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,o.c,o.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,o.Hb,o.Hb,[o.c,t.ComponentFactoryResolver,t.Injector,v.DOCUMENT]),t["\u0275mpd"](4608,o.Lb,o.Lb,[o.c,t.ComponentFactoryResolver,t.Injector,v.DOCUMENT]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,h["\u0275angular_packages_forms_forms_bc"],h["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,h.FormsModule,h.FormsModule,[]),t["\u0275mpd"](1073742336,o.Eb,o.Eb,[]),t["\u0275mpd"](1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),t["\u0275mpd"](1073742336,s,s,[]),t["\u0275mpd"](1024,f.k,function(){return[[{path:"",component:a}]]},[])])})}}]);