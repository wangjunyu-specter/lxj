(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"LKB+":function(n,l,e){"use strict";e.d(l,"a",(function(){return d}));var t=e("mrSG"),i=e("N+K7"),u=e("qfBg"),o=e("CcnG"),d=function(){function n(n,l){this.http=n,this.user=l,this.clear()}return n.prototype.getContactlist=function(){return 0===this.list.length&&this.getList(),this.list},n.prototype.setList=function(n){var l=this;if(0===n.length)return!1;this.list.length=0,this.user.getUserp().then((function(e){console.log(e),l.mrid=e.address_id,console.log(l.mrid);for(var t=0,i=n.length;t<i;t++){for(var u=l.list.length,o=0;o<u;o++)if(l.list[o].address_id==n[t].address_id){n.splice(t,1),t--,i--;break}l.list.push(n[t]),n[t].address_id==l.mrid&&"0"!=l.mrid?(l.list[t].active=!0,l.list[t].mr=1,l.activeList.push(n[t])):l.list[t].mr=0}l.mrid||(l.list[0].mr=1,l.activeList.push(l.list[0]),l.list[0].active=!0)})).catch((function(n){})),console.log(this.activeList)},n.prototype.setPro=function(n){var l;this.provinceList.length=0,(l=this.provinceList).push.apply(l,n)},n.prototype.getPro=function(){return this.provinceList},n.prototype.getProasync=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(n){switch(n.label){case 0:if(0!==this.provinceList.length)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.getList()];case 2:return n.sent(),[3,4];case 3:return n.sent(),[2,[]];case 4:return[2,this.provinceList]}}))}))},n.prototype.setMr=function(n){var l=this;this.http.getData(this.http.setMraddress,{address_id:n}).subscribe((function(e){l.setMrfn(n)}),(function(n){}))},n.prototype.delete=function(n){var l=this;this.http.getData(this.http.deleteaddress,{id:n}).subscribe((function(e){for(var t=0,i=l.list.length;t<i;t++){console.log(l.list[t]),l.list[t].address_id==n&&l.list.splice(t,1),e.result&&l.setMrfn(e.result);for(var u=0,o=l.activeList.length;u<o;u++)l.activeList[u].address_id==n&&l.activeList.splice(u,1)}}),(function(n){}))},n.prototype.setMrfn=function(n){this.mrid=n,this.user.setMraddress(n),this.list.map((function(l){l.mr=l.id==n||l.address_id==n?1:0}))},n.prototype.setData=function(n){if(this.activeList.length===n)return!1;if(this.list.length>0)for(var l=0,e=this.list.length;l<e;l++)this.list[l].active=!1;this.activeList.length>0&&(this.activeList.length=0)},n.prototype.getItem=function(n){return t.__awaiter(this,void 0,void 0,(function(){var l,e;return t.__generator(this,(function(t){switch(t.label){case 0:if(this.list&&this.list.length>0)for(l=0,e=this.list.length;l<e;l++)if(this.list[l].address_id==n)return[2,this.list[l]];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getList()];case 2:for(t.sent(),l=0,e=this.list.length;l<e;l++)if(this.list[l].address_id===n)return[2,this.list[l]];return[3,4];case 3:return t.sent(),[2,{}];case 4:return[2,{}]}}))}))},n.prototype.edmit=function(n){if(console.log(n),1==n.defalut){n.mr=1,this.setMrfn(n.address_id);for(var l=0,e=this.activeList.length;l<e;l++)this.activeList[l].address_id==n.address_id?this.activeList.splice(l,1,n):1==this.activeList[l].mr&&(this.activeList[l].mr=0)}0===this.activeList.length&&this.activeList.push(n);var t=!1;for(l=0,e=this.list.length;l<e;l++)this.list[l].address_id==n.address_id?(this.list.splice(l,1,n),t=!0):1==n.mr&&(this.list[l].mr=0);t||this.list.push(n),console.log(this.list)},n.prototype.getActive=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(n){switch(n.label){case 0:if(0!==this.activeList.length)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.getList()];case 2:return n.sent(),[3,4];case 3:return n.sent(),[2,[]];case 4:return[2,this.activeList]}}))}))},n.prototype.setActive=function(n,l){var e;console.log(n),console.log(l);for(var t=[],i=0,u=this.list.length;i<u;i++)this.list[i].id===n.id?(this.list[i].active=!this.list[i].active,this.list[i].active&&(t.push(i),t.length>l&&(this.list[t[t.length-2]].active=!1)),e=this.list[i]):(console.log(this.list[i]),t.length===l&&this.list[i].active?this.list[i].active=!1:t.length<l&&this.list[i].active?t.push(i):this.list[i].active=!1);if(this.activeList.includes(n)){for(i=0,u=this.activeList.length;i<u;i++)if(this.activeList[i].id===n.id){this.activeList.splice(i,1);break}}else this.activeList.includes(n)||this.activeList.length!=l?this.activeList.push(n):this.activeList.splice(this.activeList.length-1,1,e)},n.prototype.getList=function(){return t.__awaiter(this,void 0,void 0,(function(){var n=this;return t.__generator(this,(function(l){return this.isgetdata?[2,!1]:(this.isgetdata=!0,[2,new Promise((function(l,e){n.http.getDataloading(n.http.getaddress).subscribe((function(e){n.setList(e.data.consignee_list),n.setPro(e.data.shop_province_list),n.isgetdata=!1,l(!0)}),(function(l){console.log(l),n.isgetdata=!1,e(!1)}))}))])}))}))},n.prototype.remove=function(){this.list.length=0,this.activeList.length=0,this.mrid=""},n.prototype.clear=function(){this.activeList=[],this.list=[],this.provinceList=[],this.isgetdata=!1},n.ngInjectableDef=o["ɵɵdefineInjectable"]({factory:function(){return new n(o["ɵɵinject"](i.a),o["ɵɵinject"](u.a))},token:n,providedIn:"root"}),n}()},yyA9:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),i=e("mrSG"),u=e("ZZ/e"),o=e("N+K7"),d=e("6m4Z"),r=e("LKB+"),a=function(){function n(n,l,e,t,i,u,o){this.nav=n,this.http=l,this.activeroute=e,this.native=t,this.ref=i,this.contactlist=u,this.alertController=o}return n.prototype.ngOnInit=function(){this.provincelist=this.contactlist.getPro(),this.citylist=[],this.arealist=[],this.dataObj={consignee:"",tel:"",card:"",province:"",city:"",district:"",address:"",defalut:0}},n.prototype.ionViewDidEnter=function(){var n=this;this.id=this.activeroute.snapshot.queryParams.id.toString(),"0"===this.id||this.dataObj.province||this.contactlist.getItem(this.id).then((function(l){console.log(l),l.defalut=1==l.mr?1:0,l.province=l.province_id,l.city=l.city_id,l.district=l.district_id,n.dataObj=l,n.selteaddress(2,n.dataObj.province),n.selteaddress(3,n.dataObj.city)})),0===this.provincelist.length&&this.selteaddress(1)},n.prototype.selteaddress=function(n,l){var e=this;void 0===l&&(l="1"),2==n&&(this.citylist.length=0),this.arealist.length=0,this.http.getData(this.http.getcity,{parent:l,type:n}).subscribe((function(l){var t,i;console.log(l),1===n?e.contactlist.setPro(l.regions):2===n?(t=e.citylist).push.apply(t,l.regions):(i=e.arealist).push.apply(i,l.regions)}))},n.prototype.onSubmit=function(){var n=this;if(console.log(this.dataObj),!/^1(\d){10}$/.test(this.dataObj.tel))return console.log("验证失败"),this.native.presentAlert("请输入正确的手机号码!"),!1;var l=this.checkIDCard(this.dataObj.card);if(console.log(l),!l.status)return this.native.presentAlert("请输入正确的18位身份证号码!"),!1;var e=Object.assign({},this.dataObj);e.mobile||(e.mobile=e.tel),e.defalut=e.defalut?1:0,this.http.postformdataloading(this.http.editorupdateaddress,e).subscribe((function(l){n.contactlist.edmit(l.result),n.presentAlert()}))},n.prototype.goBack=function(){this.nav.back()},n.prototype.presentAlert=function(){return i.__awaiter(this,void 0,void 0,(function(){var n=this;return i.__generator(this,(function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"提示",message:"操作成功.",buttons:[{text:"确定",role:"确定",cssClass:"secondary",handler:function(l){console.log("Confirm Cancel: blah"),n.goBack()}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},n.prototype.checkIDCard=function(n){var l="",e=!0;if(n&&/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(n)){if([11,12,13,14,15,21,22,23,31,33,34,35,36,37,41,42,43,44,45,46,50,51,52,54,61,62,63,64,65,71,81,91].indexOf(parseInt(n.substr(0,2)))<0)l="地址编码错误",e=!1;else if(18==n.length){n=n.split("");for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=0,u=0;u<17;u++)i+=n[u]*t[u];[1,0,"X",9,8,7,6,5,4,3,2][i%11]!=n[17]&&(l="校验位错误",e=!1)}}else l="身份证号格式错误",e=!1;return{status:e,msg:l}},n}(),s=function(){return function(){}}(),c=e("pMnS"),g=e("oBZk"),h=e("gIcY"),f=e("Ip0R"),p=e("ZYCi"),v=t["ɵcrt"]({encapsulation:0,styles:[[".des[_ngcontent-%COMP%]{font-size:var(--ion-sm-text)}ion-input[_ngcontent-%COMP%]{text-align:right}"]],data:{}});function m(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Sb,g.Q)),t["ɵdid"](1,49152,null,0,u.qb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["ɵted"](2,0,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit.region_id)}),(function(n,l){n(l,2,0,l.context.$implicit.region_name)}))}function C(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Sb,g.Q)),t["ɵdid"](1,49152,null,0,u.qb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["ɵted"](2,0,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit.region_id)}),(function(n,l){n(l,2,0,l.context.$implicit.region_name)}))}function b(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,18,"ion-item",[],null,null,null,g.Eb,g.y)),t["ɵdid"](1,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](2,0,null,0,5,"ion-label",[],null,null,null,g.Fb,g.C)),t["ɵdid"](3,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["市"])),(n()(),t["ɵeld"](5,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,g.ac,g.X)),t["ɵdid"](6,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["ɵted"](-1,0,["*"])),(n()(),t["ɵeld"](8,0,null,0,10,"ion-select",[["cancelText","取消"],["name","city"],["okText","确定"],["placeholder","请选择市"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["ɵnov"](n,11)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["ɵnov"](n,11)._handleChangeEvent(e.target)&&i),"ionChange"===l&&(i=!1!==u.selteaddress(3,u.dataObj.city)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.city=e)&&i),i}),g.Tb,g.P)),t["ɵdid"](9,16384,null,0,h.p,[],{required:[0,"required"]},null),t["ɵprd"](1024,null,h.g,(function(n){return[n]}),[h.p]),t["ɵdid"](11,16384,null,0,u.Qb,[t.ElementRef],null,null),t["ɵprd"](1024,null,h.h,(function(n){return[n]}),[u.Qb]),t["ɵdid"](13,671744,[["city",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,h.i,null,[h.m]),t["ɵdid"](15,16384,null,0,h.j,[[4,h.i]],null,null),t["ɵdid"](16,49152,null,0,u.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],name:[1,"name"],okText:[2,"okText"],placeholder:[3,"placeholder"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,C)),t["ɵdid"](18,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,6,0,"danger"),n(l,9,0,""),n(l,13,0,"city",e.dataObj.city),n(l,16,0,"取消","city","确定","请选择市"),n(l,18,0,e.citylist)}),(function(n,l){n(l,8,0,t["ɵnov"](l,9).required?"":null,t["ɵnov"](l,15).ngClassUntouched,t["ɵnov"](l,15).ngClassTouched,t["ɵnov"](l,15).ngClassPristine,t["ɵnov"](l,15).ngClassDirty,t["ɵnov"](l,15).ngClassValid,t["ɵnov"](l,15).ngClassInvalid,t["ɵnov"](l,15).ngClassPending)}))}function R(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"ion-select-option",[],null,null,null,g.Sb,g.Q)),t["ɵdid"](1,49152,null,0,u.qb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["ɵted"](2,0,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit.region_id)}),(function(n,l){n(l,2,0,l.context.$implicit.region_name)}))}function y(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,18,"ion-item",[],null,null,null,g.Eb,g.y)),t["ɵdid"](1,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](2,0,null,0,5,"ion-label",[],null,null,null,g.Fb,g.C)),t["ɵdid"](3,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["区"])),(n()(),t["ɵeld"](5,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,g.ac,g.X)),t["ɵdid"](6,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["ɵted"](-1,0,["*"])),(n()(),t["ɵeld"](8,0,null,0,10,"ion-select",[["cancelText","取消"],["name","district"],["okText","确定"],["placeholder","请选择区"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["ɵnov"](n,11)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["ɵnov"](n,11)._handleChangeEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.district=e)&&i),i}),g.Tb,g.P)),t["ɵdid"](9,16384,null,0,h.p,[],{required:[0,"required"]},null),t["ɵprd"](1024,null,h.g,(function(n){return[n]}),[h.p]),t["ɵdid"](11,16384,null,0,u.Qb,[t.ElementRef],null,null),t["ɵprd"](1024,null,h.h,(function(n){return[n]}),[u.Qb]),t["ɵdid"](13,671744,[["district",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,h.i,null,[h.m]),t["ɵdid"](15,16384,null,0,h.j,[[4,h.i]],null,null),t["ɵdid"](16,49152,null,0,u.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],name:[1,"name"],okText:[2,"okText"],placeholder:[3,"placeholder"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,R)),t["ɵdid"](18,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,6,0,"danger"),n(l,9,0,""),n(l,13,0,"district",e.dataObj.district),n(l,16,0,"取消","district","确定","请选择区"),n(l,18,0,e.arealist)}),(function(n,l){n(l,8,0,t["ɵnov"](l,9).required?"":null,t["ɵnov"](l,15).ngClassUntouched,t["ɵnov"](l,15).ngClassTouched,t["ɵnov"](l,15).ngClassPristine,t["ɵnov"](l,15).ngClassDirty,t["ɵnov"](l,15).ngClassValid,t["ɵnov"](l,15).ngClassInvalid,t["ɵnov"](l,15).ngClassPending)}))}function E(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,g.vb,g.s)),t["ɵdid"](1,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["ɵeld"](2,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,g.fc,g.cb)),t["ɵdid"](3,49152,null,0,u.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["ɵeld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,g.jb,g.g)),t["ɵdid"](5,49152,null,0,u.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t}),g.ib,g.f)),t["ɵdid"](7,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,g.wb,g.t)),t["ɵdid"](9,49152,null,0,u.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),t["ɵeld"](10,0,null,0,2,"ion-title",[],null,null,null,g.dc,g.ab)),t["ɵdid"](11,49152,null,0,u.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["添加出行人"])),(n()(),t["ɵeld"](13,0,null,null,115,"ion-content",[],null,null,null,g.rb,g.o)),t["ɵdid"](14,49152,null,0,u.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](15,0,null,0,113,"ion-content",[["padding",""]],null,null,null,g.rb,g.o)),t["ɵdid"](16,49152,null,0,u.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["ɵdid"](17,16384,null,0,u.f,[t.ElementRef],null,null),(n()(),t["ɵeld"](18,0,null,0,106,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var i=!0,u=n.component;return"submit"===l&&(i=!1!==t["ɵnov"](n,20).onSubmit(e)&&i),"reset"===l&&(i=!1!==t["ɵnov"](n,20).onReset()&&i),"ngSubmit"===l&&(i=!1!==u.onSubmit()&&i),i}),null,null)),t["ɵdid"](19,16384,null,0,h.u,[],null,null),t["ɵdid"](20,4210688,[["userForm",4]],0,h.l,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t["ɵprd"](2048,null,h.b,null,[h.l]),t["ɵdid"](22,16384,null,0,h.k,[[4,h.b]],null,null),(n()(),t["ɵeld"](23,0,null,null,84,"ion-list",[],null,null,null,g.Hb,g.D)),t["ɵdid"](24,49152,null,0,u.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](25,0,null,0,16,"ion-item",[],null,null,null,g.Eb,g.y)),t["ɵdid"](26,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](27,0,null,0,5,"ion-label",[],null,null,null,g.Fb,g.C)),t["ɵdid"](28,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["姓名"])),(n()(),t["ɵeld"](30,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,g.ac,g.X)),t["ɵdid"](31,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["ɵted"](-1,0,["*"])),(n()(),t["ɵeld"](33,0,null,0,8,"ion-input",[["name","consignee"],["placeholder","请输入姓名"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["ɵnov"](n,36)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["ɵnov"](n,36)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.consignee=e)&&i),i}),g.Ab,g.x)),t["ɵdid"](34,16384,null,0,h.p,[],{required:[0,"required"]},null),t["ɵprd"](1024,null,h.g,(function(n){return[n]}),[h.p]),t["ɵdid"](36,16384,null,0,u.Rb,[t.ElementRef],null,null),t["ɵprd"](1024,null,h.h,(function(n){return[n]}),[u.Rb]),t["ɵdid"](38,671744,[["consignee",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,h.i,null,[h.m]),t["ɵdid"](40,16384,null,0,h.j,[[4,h.i]],null,null),t["ɵdid"](41,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["ɵeld"](42,0,null,0,16,"ion-item",[],null,null,null,g.Eb,g.y)),t["ɵdid"](43,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](44,0,null,0,5,"ion-label",[],null,null,null,g.Fb,g.C)),t["ɵdid"](45,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["手机"])),(n()(),t["ɵeld"](47,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,g.ac,g.X)),t["ɵdid"](48,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["ɵted"](-1,0,["*"])),(n()(),t["ɵeld"](50,0,null,0,8,"ion-input",[["name","tel"],["placeholder","请输入有效手机号码"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["ɵnov"](n,53)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["ɵnov"](n,53)._handleIonChange(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.tel=e)&&i),i}),g.Ab,g.x)),t["ɵdid"](51,16384,null,0,h.p,[],{required:[0,"required"]},null),t["ɵprd"](1024,null,h.g,(function(n){return[n]}),[h.p]),t["ɵdid"](53,16384,null,0,u.Lb,[t.ElementRef],null,null),t["ɵprd"](1024,null,h.h,(function(n){return[n]}),[u.Lb]),t["ɵdid"](55,671744,[["tel",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,h.i,null,[h.m]),t["ɵdid"](57,16384,null,0,h.j,[[4,h.i]],null,null),t["ɵdid"](58,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),t["ɵeld"](59,0,null,0,16,"ion-item",[],null,null,null,g.Eb,g.y)),t["ɵdid"](60,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](61,0,null,0,5,"ion-label",[],null,null,null,g.Fb,g.C)),t["ɵdid"](62,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["身份证"])),(n()(),t["ɵeld"](64,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,g.ac,g.X)),t["ɵdid"](65,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["ɵted"](-1,0,["*"])),(n()(),t["ɵeld"](67,0,null,0,8,"ion-input",[["name","card"],["placeholder","请输入18位身份证号码"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["ɵnov"](n,70)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["ɵnov"](n,70)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.card=e)&&i),i}),g.Ab,g.x)),t["ɵdid"](68,16384,null,0,h.p,[],{required:[0,"required"]},null),t["ɵprd"](1024,null,h.g,(function(n){return[n]}),[h.p]),t["ɵdid"](70,16384,null,0,u.Rb,[t.ElementRef],null,null),t["ɵprd"](1024,null,h.h,(function(n){return[n]}),[u.Rb]),t["ɵdid"](72,671744,[["card",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,h.i,null,[h.m]),t["ɵdid"](74,16384,null,0,h.j,[[4,h.i]],null,null),t["ɵdid"](75,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),(n()(),t["ɵeld"](76,0,null,0,18,"ion-item",[],null,null,null,g.Eb,g.y)),t["ɵdid"](77,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](78,0,null,0,5,"ion-label",[],null,null,null,g.Fb,g.C)),t["ɵdid"](79,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["省"])),(n()(),t["ɵeld"](81,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,g.ac,g.X)),t["ɵdid"](82,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["ɵted"](-1,0,["*"])),(n()(),t["ɵeld"](84,0,null,0,10,"ion-select",[["cancelText","取消"],["name","province"],["okText","确定"],["placeholder","请选择省"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["ɵnov"](n,87)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["ɵnov"](n,87)._handleChangeEvent(e.target)&&i),"ionChange"===l&&(i=!1!==u.selteaddress(2,u.dataObj.province)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.province=e)&&i),i}),g.Tb,g.P)),t["ɵdid"](85,16384,null,0,h.p,[],{required:[0,"required"]},null),t["ɵprd"](1024,null,h.g,(function(n){return[n]}),[h.p]),t["ɵdid"](87,16384,null,0,u.Qb,[t.ElementRef],null,null),t["ɵprd"](1024,null,h.h,(function(n){return[n]}),[u.Qb]),t["ɵdid"](89,671744,[["province",4]],0,h.m,[[2,h.b],[6,h.g],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,h.i,null,[h.m]),t["ɵdid"](91,16384,null,0,h.j,[[4,h.i]],null,null),t["ɵdid"](92,49152,null,0,u.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],name:[1,"name"],okText:[2,"okText"],placeholder:[3,"placeholder"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,m)),t["ɵdid"](94,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,b)),t["ɵdid"](96,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,y)),t["ɵdid"](98,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵeld"](99,0,null,0,8,"ion-item",[],null,null,null,g.Eb,g.y)),t["ɵdid"](100,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](101,0,null,0,6,"ion-textarea",[["name","address"],["placeholder","详细地址：如道路、门牌号、小区、楼栋号、单元室等"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["ɵnov"](n,102)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["ɵnov"](n,102)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.address=e)&&i),i}),g.bc,g.Y)),t["ɵdid"](102,16384,null,0,u.Rb,[t.ElementRef],null,null),t["ɵprd"](1024,null,h.h,(function(n){return[n]}),[u.Rb]),t["ɵdid"](104,671744,[["address",4]],0,h.m,[[2,h.b],[8,null],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,h.i,null,[h.m]),t["ɵdid"](106,16384,null,0,h.j,[[4,h.i]],null,null),t["ɵdid"](107,49152,null,0,u.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),t["ɵeld"](108,0,null,null,13,"ion-list",[],null,null,null,g.Hb,g.D)),t["ɵdid"](109,49152,null,0,u.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](110,0,null,0,11,"ion-item",[],null,null,null,g.Eb,g.y)),t["ɵdid"](111,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](112,0,null,0,2,"ion-label",[],null,null,null,g.Fb,g.C)),t["ɵdid"](113,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["设为默认地址"])),(n()(),t["ɵeld"](115,0,null,0,6,"ion-toggle",[["color","success"],["name","defalut"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["ɵnov"](n,116)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["ɵnov"](n,116)._handleIonChange(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.dataObj.defalut=e)&&i),i}),g.ec,g.bb)),t["ɵdid"](116,16384,null,0,u.d,[t.ElementRef],null,null),t["ɵprd"](1024,null,h.h,(function(n){return[n]}),[u.d]),t["ɵdid"](118,671744,null,0,h.m,[[2,h.b],[8,null],[8,null],[6,h.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,h.i,null,[h.m]),t["ɵdid"](120,16384,null,0,h.j,[[4,h.i]],null,null),t["ɵdid"](121,49152,null,0,u.Db,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(n()(),t["ɵeld"](122,0,null,null,2,"ion-button",[["color","success"],["expand","block"],["type","submit"]],null,null,null,g.ib,g.f)),t["ɵdid"](123,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(n()(),t["ɵted"](-1,0,["提交"])),(n()(),t["ɵeld"](125,0,null,0,3,"p",[["class","des"]],null,null,null,null,null)),(n()(),t["ɵeld"](126,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,g.ac,g.X)),t["ɵdid"](127,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["ɵted"](-1,0,["身份证号码错误会导致无法购买车票及保险"]))],(function(n,l){var e=l.component;n(l,1,0,"ios"),n(l,3,0,"ios"),n(l,9,0,"ios","arrow-back"),n(l,31,0,"danger"),n(l,34,0,""),n(l,38,0,"consignee",e.dataObj.consignee),n(l,41,0,"consignee","请输入姓名",""),n(l,48,0,"danger"),n(l,51,0,""),n(l,55,0,"tel",e.dataObj.tel),n(l,58,0,"tel","请输入有效手机号码","","number"),n(l,65,0,"danger"),n(l,68,0,""),n(l,72,0,"card",e.dataObj.card),n(l,75,0,"card","请输入18位身份证号码",""),n(l,82,0,"danger"),n(l,85,0,""),n(l,89,0,"province",e.dataObj.province),n(l,92,0,"取消","province","确定","请选择省"),n(l,94,0,e.provincelist),n(l,96,0,e.citylist.length>0),n(l,98,0,e.arealist.length>0),n(l,104,0,"address",e.dataObj.address),n(l,107,0,"address","详细地址：如道路、门牌号、小区、楼栋号、单元室等"),n(l,118,0,"defalut",e.dataObj.defalut),n(l,121,0,"success","defalut"),n(l,123,0,"success",!t["ɵnov"](l,20).form.valid,"block","submit"),n(l,127,0,"danger")}),(function(n,l){n(l,18,0,t["ɵnov"](l,22).ngClassUntouched,t["ɵnov"](l,22).ngClassTouched,t["ɵnov"](l,22).ngClassPristine,t["ɵnov"](l,22).ngClassDirty,t["ɵnov"](l,22).ngClassValid,t["ɵnov"](l,22).ngClassInvalid,t["ɵnov"](l,22).ngClassPending),n(l,33,0,t["ɵnov"](l,34).required?"":null,t["ɵnov"](l,40).ngClassUntouched,t["ɵnov"](l,40).ngClassTouched,t["ɵnov"](l,40).ngClassPristine,t["ɵnov"](l,40).ngClassDirty,t["ɵnov"](l,40).ngClassValid,t["ɵnov"](l,40).ngClassInvalid,t["ɵnov"](l,40).ngClassPending),n(l,50,0,t["ɵnov"](l,51).required?"":null,t["ɵnov"](l,57).ngClassUntouched,t["ɵnov"](l,57).ngClassTouched,t["ɵnov"](l,57).ngClassPristine,t["ɵnov"](l,57).ngClassDirty,t["ɵnov"](l,57).ngClassValid,t["ɵnov"](l,57).ngClassInvalid,t["ɵnov"](l,57).ngClassPending),n(l,67,0,t["ɵnov"](l,68).required?"":null,t["ɵnov"](l,74).ngClassUntouched,t["ɵnov"](l,74).ngClassTouched,t["ɵnov"](l,74).ngClassPristine,t["ɵnov"](l,74).ngClassDirty,t["ɵnov"](l,74).ngClassValid,t["ɵnov"](l,74).ngClassInvalid,t["ɵnov"](l,74).ngClassPending),n(l,84,0,t["ɵnov"](l,85).required?"":null,t["ɵnov"](l,91).ngClassUntouched,t["ɵnov"](l,91).ngClassTouched,t["ɵnov"](l,91).ngClassPristine,t["ɵnov"](l,91).ngClassDirty,t["ɵnov"](l,91).ngClassValid,t["ɵnov"](l,91).ngClassInvalid,t["ɵnov"](l,91).ngClassPending),n(l,101,0,t["ɵnov"](l,106).ngClassUntouched,t["ɵnov"](l,106).ngClassTouched,t["ɵnov"](l,106).ngClassPristine,t["ɵnov"](l,106).ngClassDirty,t["ɵnov"](l,106).ngClassValid,t["ɵnov"](l,106).ngClassInvalid,t["ɵnov"](l,106).ngClassPending),n(l,115,0,t["ɵnov"](l,120).ngClassUntouched,t["ɵnov"](l,120).ngClassTouched,t["ɵnov"](l,120).ngClassPristine,t["ɵnov"](l,120).ngClassDirty,t["ɵnov"](l,120).ngClassValid,t["ɵnov"](l,120).ngClassInvalid,t["ɵnov"](l,120).ngClassPending)}))}function D(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"app-contactdata",[],null,null,null,E,v)),t["ɵdid"](1,114688,null,0,a,[u.Kb,o.a,p.a,d.a,t.ChangeDetectorRef,r.a,u.b],null,null)],(function(n,l){n(l,1,0)}),null)}var _=t["ɵccf"]("app-contactdata",a,D,{},{},[]);e.d(l,"ContactdataPageModuleNgFactory",(function(){return N}));var N=t["ɵcmf"](s,[],(function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[c.a,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[t.LOCALE_ID,[2,f["ɵangular_packages_common_common_a"]]]),t["ɵmpd"](4608,h.s,h.s,[]),t["ɵmpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["ɵmpd"](4608,u.Jb,u.Jb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["ɵmpd"](4608,u.Nb,u.Nb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["ɵmpd"](1073742336,f.CommonModule,f.CommonModule,[]),t["ɵmpd"](1073742336,h.r,h.r,[]),t["ɵmpd"](1073742336,h.d,h.d,[]),t["ɵmpd"](1073742336,u.Gb,u.Gb,[]),t["ɵmpd"](1073742336,p.p,p.p,[[2,p.u],[2,p.n]]),t["ɵmpd"](1073742336,s,s,[]),t["ɵmpd"](1024,p.l,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);