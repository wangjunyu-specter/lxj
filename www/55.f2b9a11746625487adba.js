(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"7HCg":function(n,l,e){"use strict";var t=e("CcnG"),o=e("Ip0R");e("pJE7"),e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return i}));var u=t["ɵcrt"]({encapsulation:0,styles:[[".pageTitle[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:25px 0 10px}.pageTitle.nobigBox[_ngcontent-%COMP%]{padding:0}.pageTitle.smpadding[_ngcontent-%COMP%]{padding:10px 0}.pageTitle[_ngcontent-%COMP%]   .nobold[_ngcontent-%COMP%]{font-weight:400!important}.pageTitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:var(--ion-title);font-weight:600}.pageTitle[_ngcontent-%COMP%]   .bigTitle[_ngcontent-%COMP%]{font-size:var(--ion-big-title)}.pageTitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:var(--ion-sm-text)}"]],data:{}});function i(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,10,"div",[["class","pageTitle"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.change()&&t),t}),null,null)),t["ɵprd"](512,null,o["ɵNgClassImpl"],o["ɵNgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["ɵdid"](2,278528,null,0,o.NgClass,[o["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵpod"](3,{nobigBox:0,smpadding:1}),(n()(),t["ɵeld"](4,0,null,null,4,"div",[["class","title"]],null,null,null,null,null)),t["ɵprd"](512,null,o["ɵNgClassImpl"],o["ɵNgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["ɵdid"](6,278528,null,0,o.NgClass,[o["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵpod"](7,{bigTitle:0,nobold:1}),(n()(),t["ɵted"](8,null,["",""])),(n()(),t["ɵeld"](9,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["ɵted"](10,null,["",""]))],(function(n,l){var e=l.component,t=n(l,3,0,e.nopadding,e.smpadding);n(l,2,0,"pageTitle",t);var o=n(l,7,0,e.type,e.nobold);n(l,6,0,"title",o)}),(function(n,l){var e=l.component;n(l,8,0,e.myname||""),n(l,10,0,e.des)}))}},pJE7:function(n,l,e){"use strict";e.d(l,"a",(function(){return o}));var t=e("CcnG"),o=function(){function n(){this.setclick=new t.EventEmitter}return n.prototype.ngOnInit=function(){},n.prototype.change=function(){if(!this.val)return!1;this.setclick.emit({value:this.val})},n}()},xlFW:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("mrSG"),u=e("Ud6+"),i=e("N+K7"),s=e("ZZ/e"),r=e("LKB+"),a=function(){function n(n,l){this.contactlist=n,this.modalController=l}return n.prototype.ngOnInit=function(){},n.prototype.clickitem=function(n){this.contactlist.setActive(n,1)},n.prototype.close=function(){this.modalController.dismiss()},n.prototype.addNew=function(){this.close()},n}(),d=e("6IFL"),c=e("6m4Z"),g=e("4ORR"),p=e("qMMP"),f=e("qfBg"),h=function(){function n(n,l,e,t,o,u,i,s,r,a,d,c,g,p){this.http=n,this.route=l,this.nav=e,this.contactlist=t,this.sanitizer=o,this.activeroute=u,this.modalController=i,this.alertController=s,this.native=r,this.popoverController=a,this.orderdata=d,this.paylistfn=c,this.userfn=g,this.topage=p}return n.prototype.ngOnInit=function(){this.reset(),this.payList=this.paylistfn.getList(),this.payList.length>0&&(this.payType=this.payList[0].pay_id),this.bonusList=[],this.bzarr=[]},n.prototype.reset=function(){this.goodsList=[],this.changebonus=[],this.isxxyhq=[],this.xxyhq=[],this.pricearr=[],this.allowusesurplus=0,this.total=0,this.kysyye=!1,this.id=this.activeroute.snapshot.queryParams.catid},n.prototype.ionViewDidEnter=function(){var n=this;this.contactlist.getActive().then((function(l){n.activePerson=l,n.activePerson.length>0&&(console.log(n.activePerson),n.id?(n.idlist=n.id.split(","),n.getContent()):n.goBack())}))},n.prototype.getContent=function(n){var l=this;this.http.postformdata(this.http.qrorder,{address_id:this.activePerson[0]?this.activePerson[0].address_id:-1,sel_cartgoods:this.idlist}).subscribe((function(e){console.log(e),e.data.goods_list||l.goBack(),l.goodsList=e.data.goods_list,l.total=e.data.total,l.order=e.data.order,l.pricearr=e.data.pricearr,n||(l.allowusebonus=e.data.allow_use_bonus,l.allowusesurplus=parseInt(e.data.allow_use_surplus,10),l.config=e.data.config,l.yoursurplus=e.data.your_surplus,l.yoursurplusnum=Number(l.yoursurplus),l.userfn.upData("your_surplus",l.yoursurplusnum)),0==l.payList.length&&(console.log("获得数据"),l.paylistfn.setList(e.data.payment_list),console.log(l.payList),l.payType=l.payList[0].pay_id);for(var t=0,o=l.goodsList.length;t<o;t++)l.changebonus[t]="";l.syye=l.yoursurplusnum>l.total.amount?l.total.amount:l.yoursurplusnum}),(function(n){}))},n.prototype.changeYhq=function(n,l){console.log(this.changebonus),this.setHttp(this.http.changebonus,{bonus:this.changebonus[l],sel_cartgoods:this.idlist,suppid:n}),this.bonusList[n]=this.changebonus[l]},n.prototype.subyhq=function(n,l){this.changebonus[n]&&(this.changebonus[n]="");var e=this.xxyhq[n];console.log(e),this.setHttp(this.http.setbonussn,{bonus_sn:e,sel_cartgoods:this.idlist,suppid:l})},n.prototype.seleteAddress=function(){return o.__awaiter(this,void 0,void 0,(function(){var n;return o.__generator(this,(function(l){switch(l.label){case 0:return[4,this.modalController.create({component:a})];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),[4,n.onDidDismiss()];case 3:return l.sent(),this.activePerson.length>0?this.getContent(1):this.reset(),[2]}}))}))},n.prototype.goBack=function(){this.nav.back()},n.prototype.assembleHTML=function(n){return this.sanitizer.bypassSecurityTrustHtml(n)},n.prototype.submit=function(){return o.__awaiter(this,void 0,void 0,(function(){var n,l,e,t;return o.__generator(this,(function(o){switch(o.label){case 0:return(n=this.kysyye?this.syye:0)>0?[4,this.syyepay()]:[3,11];case 1:return l=o.sent(),console.log(l),l?[3,2]:[2,!1];case 2:e=!1,o.label=3;case 3:return o.trys.push([3,5,,6]),[4,this.yzpaypwd(l)];case 4:return e=o.sent(),[3,6];case 5:return o.sent(),e=!1,[3,6];case 6:if(!e)return[2,!1];t=!1,o.label=7;case 7:return o.trys.push([7,9,,10]),[4,this.checksurplus()];case 8:return t=o.sent(),[3,10];case 9:return o.sent(),t=!1,[3,10];case 10:if(!t)return this.native.presentAlert("余额不足!"),[2,!1];console.log(this.syye),o.label=11;case 11:return this.paysuccess(n),console.log("准备唤醒支付"),[2]}}))}))},n.prototype.checksurplus=function(){return o.__awaiter(this,void 0,void 0,(function(){var n=this;return o.__generator(this,(function(l){return[2,new Promise((function(l,e){n.http.postformdataloading(n.http.checksurplus,{surplus:n.total.amount_formated}).subscribe((function(n){console.log("余额足够"),l(!0)}),(function(n){e(!1)}))}))]}))}))},n.prototype.syyepay=function(){return o.__awaiter(this,void 0,void 0,(function(){var n;return o.__generator(this,(function(l){switch(l.label){case 0:return[4,this.popoverController.create({component:d.a,translucent:!1,cssClass:"payboxcontent",componentProps:{price:this.syye}})];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),[4,n.onDidDismiss().then((function(n){return console.log(n),!!n.data&&n.data}))];case 3:return[2,l.sent()]}}))}))},n.prototype.yzpaypwd=function(n){return o.__awaiter(this,void 0,void 0,(function(){var l=this;return o.__generator(this,(function(e){return[2,new Promise((function(e,t){l.http.postformdataloading(l.http.yzpaypwd,{password:n}).subscribe((function(n){console.log(n),e(!0)}),(function(n){console.log(n),t(!1)}))}))]}))}))},n.prototype.paysuccess=function(n){var l=this;void 0===n&&(n=0);var e=[];this.changebonus.map((function(n){n&&e.push(n)}));var t=[];this.bzarr.map((function(n,e){n&&(t[l.goodsList[e].supplier_id]=n)}));var o={sel_cartgoods:this.idlist,postscript:JSON.stringify(t),integral:0,bonus:JSON.stringify(this.bonusList),bonus_sn:this.xxyhq,surplus:n,payment:this.payType};this.http.postformdataloading(this.http.scorder,o).subscribe((function(n){console.log(n),l.orderdata.setData(n.data),e.map((function(n){l.goodsList.map((function(l){if(l.redbag)for(var e=l.redbag,t=0;t<e.length;t++)if(e[t].bonus_id==n)return void e.splice(t,1)}))})),l.orderId=n.data.order.order_id,2==n.data.order.pay_status?l.getHttpayend(n.data.order.order_id,3):l.getPaymsg(n.data.order.order_id,n.data.order.order_sn)}),(function(n){}))},n.prototype.getPaymsg=function(n,l){for(var e,t=this,o=0;o<this.payList.length;o++){var u=this.payList[o];if(u.pay_id==this.payType){console.log(u),e=u.pay_code;break}}this.http.postformdataloading(this.http.acteditpayment,{order_id:n,pay_code:e,is_pay:1}).subscribe((function(o){console.log(e);var u=!0,i=function(){setTimeout((function(){u&&t.http.postformdataloading(t.http.acteditpayment2,{order_id:n}).subscribe((function(n){t.route.navigate(["/ordersuccess"],{queryParams:{type:1}})}),(function(n){t.closeOrder(l)})),document.removeEventListener("resume",i,!1)}),1500)};document.addEventListener("resume",i,!1),"alipay"==e?t.native.alipayment(o.result).then((function(l){t.getHttpayend(n,1)})).catch((function(n){t.closeOrder(l)})).finally((function(){u=!1})):t.native.wechatpayment(o.result).then((function(l){t.getHttpayend(n,2)})).catch((function(n){t.closeOrder(l)})).finally((function(){u=!1}))}),(function(n){}))},n.prototype.closeOrder=function(n){this.topage.toPage(12,n,-1)},n.prototype.getHttpayend=function(n,l){console.log(l),this.route.navigate(["/ordersuccess"],{queryParams:{type:1}}),3!==l&&this.http.postformdataloading(this.http.acteditpayment2,{order_id:n}).subscribe((function(n){}),(function(n){}))},n.prototype.setPrice=function(n){this.total=n.total,this.pricearr=n.pricearr,this.syye&&parseInt(n.surplus)!==this.syye&&(this.syye=n.surplus)},n.prototype.sekysyye=function(){console.log(123)},n.prototype.setissyye=function(){this.setyenum()},n.prototype.setyechange=function(){var n=this;return this.syyeset&&(clearTimeout(this.syyeset),this.syyeset=null),this.syye<0?(this.native.presentAlert("请输入正确的数量"),this.syye=0,!1):this.syye&&this.syye.toString().includes(".")&&this.syye.toString().split(".")[1].length>2?(this.native.presentAlert("最小支持小数点后两位"),this.syye=0,console.log(this.syye),!1):void(this.syyeset=setTimeout((function(){n.syyeset=null,n.setissyye()}),500))},n.prototype.setyenum=function(){this.setHttp(this.http.changesurplus,{surplus:this.kysyye?this.syye:0})},n.prototype.setHttp=function(n,l){var e=this,t={sel_cartgoods:this.idlist,order:JSON.stringify(this.order)};this.http.getpostformdata(n,l,t).subscribe((function(n){console.log(n),e.setPrice(n),n.order&&(e.order=n.order)}),(function(n){}))},n.prototype.alertfn=function(){return o.__awaiter(this,void 0,void 0,(function(){var n=this;return o.__generator(this,(function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"提示!",message:"没有找到订单商品!!!",buttons:[{text:"确定",handler:function(){console.log("Confirm Okay"),n.goBack()}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},n}(),m=function(){return function(){}}(),y=e("pMnS"),v=e("oBZk"),b=e("gIcY"),C=e("Ip0R"),R=e("7HCg"),_=e("pJE7"),x=e("6jz6"),E=e("LmEr"),N=e("8ACy"),P=e("ZYCi"),O=e("ZYjt"),D=t["ɵcrt"]({encapsulation:0,styles:[[".ts-box[_ngcontent-%COMP%]{height:40px;line-height:40px;background-color:var(--ion-color-light);text-align:center;font-size:var(--ion-sm-text)}.ts-box[_ngcontent-%COMP%]:active{background-color:var(--ion-color-light-tint)}.end-price[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-medium)}.end-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:right}.goods_title[_ngcontent-%COMP%]{white-space:normal;font-size:var(--ion-sm-text)}.myselect[_ngcontent-%COMP%]{border:1px solid var(--ion-color-light);background:0 0;width:100%;border-radius:5px;font-size:var(--ion-sm-text);padding:5px;outline:0}ion-toolbar[_ngcontent-%COMP%]{--padding-bottom:0;--padding-end:0;--padding-start:0;--padding-top:0}.ts-content[_ngcontent-%COMP%]{width:100%;overflow:hidden}.ts-content[_ngcontent-%COMP%]   .zjts-box[_ngcontent-%COMP%]{text-align:right;margin-left:-30px}.ts-content[_ngcontent-%COMP%]   .zjts-box[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{margin-left:-10px}.ts-content[_ngcontent-%COMP%]   .zjts-box[_ngcontent-%COMP%]   .order_total_li[_ngcontent-%COMP%]{list-style:none}ion-content[_ngcontent-%COMP%]{--background:var(--ion-gray-background-color)}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-width:0}ion-content[_ngcontent-%COMP%]   .list-ios.list-inset[_ngcontent-%COMP%]{border-radius:7px}ion-content[_ngcontent-%COMP%]   .end.red[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.xxyhqbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.xxyhqbox[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{flex:1;height:2.1em}.xxyhqbox[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;font-size:var(--ion-sm-text);margin-top:4px;margin-bottom:4px;padding:4px 10px 6px;box-sizing:border-box;border:1px solid var(--ion-color-light)}.zftype[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.zftype[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;margin-right:10px}"]],data:{}});function I(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"div",[["class","ts-box"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.seleteAddress()&&t),t}),null,null)),(n()(),t["ɵted"](-1,null,["请选择收货人"]))],null,null)}function w(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,9,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.seleteAddress()&&t),t}),v.Eb,v.y)),t["ɵdid"](1,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["ɵeld"](2,0,null,0,7,"ion-label",[],null,null,null,v.Fb,v.C)),t["ɵdid"](3,49152,null,0,s.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](4,0,null,0,3,"h2",[],null,null,null,null,null)),(n()(),t["ɵted"](5,null,[""," "])),(n()(),t["ɵeld"](6,0,null,null,1,"span",[["style","font-size: 12px;color:#666;"]],null,null,null,null,null)),(n()(),t["ɵted"](7,null,["",""])),(n()(),t["ɵeld"](8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t["ɵted"](9,null,["",""]))],(function(n,l){n(l,1,0,"none")}),(function(n,l){n(l,5,0,l.context.$implicit.name),n(l,7,0,l.context.$implicit.mobile),n(l,9,0,l.context.$implicit.address)}))}function M(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,16,"ion-item",[["lines","none"]],null,null,null,v.Eb,v.y)),t["ɵdid"](1,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["ɵeld"](2,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,v.cc,v.Z)),t["ɵdid"](3,49152,null,0,s.Bb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),t["ɵeld"](5,0,null,0,6,"ion-label",[],null,null,null,v.Fb,v.C)),t["ɵdid"](6,49152,null,0,s.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](7,0,null,0,1,"h3",[["class","goods_title"]],null,null,null,null,null)),(n()(),t["ɵted"](8,null,["",""])),(n()(),t["ɵeld"](9,0,null,0,2,"p",[["class","goods_title"]],null,null,null,null,null)),(n()(),t["ɵted"](10,null,["",""])),t["ɵppd"](11,1),(n()(),t["ɵeld"](12,0,null,0,4,"div",[["class","end-price"],["slot","end"]],null,null,null,null,null)),(n()(),t["ɵeld"](13,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["ɵted"](14,null,["",""])),(n()(),t["ɵeld"](15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["ɵted"](16,null,["×",""]))],(function(n,l){n(l,1,0,"none")}),(function(n,l){n(l,4,0,l.component.http.domain+l.context.$implicit.goods_thumb),n(l,8,0,l.context.$implicit.goods_name);var e=t["ɵunv"](l,10,0,n(l,11,0,t["ɵnov"](l.parent.parent,0),l.context.$implicit.goods_attr));n(l,10,0,e),n(l,14,0,l.context.$implicit.formated_goods_price),n(l,16,0,l.context.$implicit.goods_number)}))}function k(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["ɵdid"](1,147456,null,0,b.n,[t.ElementRef,t.Renderer2,[2,b.q]],{value:[0,"value"]},null),t["ɵdid"](2,147456,null,0,b.t,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),t["ɵted"](3,null,["","[","]"]))],(function(n,l){n(l,1,0,l.context.$implicit.bonus_id),n(l,2,0,l.context.$implicit.bonus_id)}),(function(n,l){n(l,3,0,l.context.$implicit.type_name,l.context.$implicit.type_money)}))}function Z(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,13,"ion-item",[["lines","none"]],null,null,null,v.Eb,v.y)),t["ɵdid"](1,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["ɵeld"](2,0,null,0,11,"select",[["class","myselect"],["id",""],["name",""],["placeholder","使用优惠券"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(n,l,e){var o=!0,u=n.component;return"change"===l&&(o=!1!==t["ɵnov"](n,3).onChange(e.target.value)&&o),"blur"===l&&(o=!1!==t["ɵnov"](n,3).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(u.changebonus[n.parent.context.index]=e)&&o),"change"===l&&(o=!1!==u.changeYhq(n.parent.context.$implicit.supplier_id,n.parent.context.index)&&o),o}),null,null)),t["ɵdid"](3,16384,null,0,b.q,[t.Renderer2,t.ElementRef],null,null),t["ɵprd"](1024,null,b.h,(function(n){return[n]}),[b.q]),t["ɵdid"](5,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,b.i,null,[b.m]),t["ɵdid"](7,16384,null,0,b.j,[[4,b.i]],null,null),(n()(),t["ɵeld"](8,0,null,null,3,"option",[["selected",""],["value",""]],null,null,null,null,null)),t["ɵdid"](9,147456,null,0,b.n,[t.ElementRef,t.Renderer2,[2,b.q]],{value:[0,"value"]},null),t["ɵdid"](10,147456,null,0,b.t,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),t["ɵted"](-1,null,["不使用优惠券"])),(n()(),t["ɵand"](16777216,null,null,1,null,k)),t["ɵdid"](13,278528,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,1,0,"none"),n(l,5,0,"",e.changebonus[l.parent.context.index]),n(l,9,0,""),n(l,10,0,""),n(l,13,0,l.parent.context.$implicit.redbag)}),(function(n,l){n(l,2,0,t["ɵnov"](l,7).ngClassUntouched,t["ɵnov"](l,7).ngClassTouched,t["ɵnov"](l,7).ngClassPristine,t["ɵnov"](l,7).ngClassDirty,t["ɵnov"](l,7).ngClassValid,t["ɵnov"](l,7).ngClassInvalid,t["ɵnov"](l,7).ngClassPending)}))}function T(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"ion-item",[["lines","none"]],null,null,null,v.Eb,v.y)),t["ɵdid"](1,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["ɵeld"](2,0,null,0,0,"div",[["class","goods_title"]],[[8,"innerHTML",1]],null,null,null,null))],(function(n,l){n(l,1,0,"none")}),(function(n,l){n(l,2,0,l.component.assembleHTML(l.parent.context.$implicit.zhekou.your_discount))}))}function F(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,23,"ion-list",[["inset","true"],["line","none"]],null,null,null,v.Hb,v.D)),t["ɵdid"](1,49152,null,0,s.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{inset:[0,"inset"]},null),(n()(),t["ɵeld"](2,0,null,0,3,"ion-item",[["lines","none"]],null,null,null,v.Eb,v.y)),t["ɵdid"](3,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["ɵeld"](4,0,null,0,1,"app-pagetitle",[],null,null,null,R.b,R.a)),t["ɵdid"](5,114688,null,0,_.a,[],{myname:[0,"myname"],smpadding:[1,"smpadding"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,M)),t["ɵdid"](7,278528,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,Z)),t["ɵdid"](9,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵeld"](10,0,null,0,11,"ion-item",[],null,null,null,v.Eb,v.y)),t["ɵdid"](11,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](12,0,null,0,2,"ion-label",[["class","ion-padding-start"]],null,null,null,v.Fb,v.C)),t["ɵdid"](13,49152,null,0,s.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["备注"])),(n()(),t["ɵeld"](15,0,null,0,6,"ion-input",[["placeholder","如果需要请备注"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["ɵnov"](n,16)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["ɵnov"](n,16)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.bzarr[n.context.index]=e)&&o),o}),v.Ab,v.x)),t["ɵdid"](16,16384,null,0,s.Rb,[t.ElementRef],null,null),t["ɵprd"](1024,null,b.h,(function(n){return[n]}),[s.Rb]),t["ɵdid"](18,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,b.i,null,[b.m]),t["ɵdid"](20,16384,null,0,b.j,[[4,b.i]],null,null),t["ɵdid"](21,49152,null,0,s.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,T)),t["ɵdid"](23,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,1,0,"true"),n(l,3,0,"none"),n(l,5,0,l.context.$implicit.supname,!0),n(l,7,0,l.context.$implicit.goodlist),n(l,9,0,1==e.allowusebonus&&l.context.$implicit.redbag&&l.context.$implicit.redbag.length>0),n(l,18,0,e.bzarr[l.context.index]),n(l,21,0,"如果需要请备注"),n(l,23,0,l.context.$implicit.zhekou)}),(function(n,l){n(l,15,0,t["ɵnov"](l,20).ngClassUntouched,t["ɵnov"](l,20).ngClassTouched,t["ɵnov"](l,20).ngClassPristine,t["ɵnov"](l,20).ngClassDirty,t["ɵnov"](l,20).ngClassValid,t["ɵnov"](l,20).ngClassInvalid,t["ɵnov"](l,20).ngClassPending)}))}function L(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,6,"ion-item",[],null,null,null,v.Eb,v.y)),t["ɵdid"](1,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](2,0,null,0,2,"ion-label",[],null,null,null,v.Fb,v.C)),t["ɵdid"](3,49152,null,0,s.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](4,0,["",""])),(n()(),t["ɵeld"](5,0,null,0,1,"div",[["class","end"]],null,null,null,null,null)),(n()(),t["ɵted"](6,null,["",""]))],null,(function(n,l){n(l,4,0,l.context.$implicit.key),n(l,6,0,l.context.$implicit.value)}))}function z(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,3,"ion-list",[["inset","true"]],null,null,null,v.Hb,v.D)),t["ɵdid"](1,49152,null,0,s.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{inset:[0,"inset"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,L)),t["ɵdid"](3,278528,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,1,0,"true"),n(l,3,0,e.pricearr.hdarr)}),null)}function B(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,9,"ion-item",[],null,null,null,v.Eb,v.y)),t["ɵdid"](1,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](2,0,null,0,2,"ion-label",[],null,null,null,v.Fb,v.C)),t["ɵdid"](3,49152,null,0,s.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](4,0,["",""])),(n()(),t["ɵeld"](5,0,null,0,4,"div",[["class","end"]],null,null,null,null,null)),t["ɵprd"](512,null,C["ɵNgClassImpl"],C["ɵNgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["ɵdid"](7,278528,null,0,C.NgClass,[C["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵpod"](8,{red:0}),(n()(),t["ɵted"](9,null,["",""]))],(function(n,l){var e=n(l,8,0,l.context.index>1);n(l,7,0,"end",e)}),(function(n,l){n(l,4,0,l.context.$implicit.key),n(l,9,0,l.context.$implicit.value)}))}function $(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,3,"ion-list",[["inset","true"]],null,null,null,v.Hb,v.D)),t["ɵdid"](1,49152,null,0,s.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{inset:[0,"inset"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,B)),t["ɵdid"](3,278528,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,1,0,"true"),n(l,3,0,e.pricearr.pricearr)}),null)}function V(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,14,"ion-item",[["lines","none"],["mode","ios"]],null,null,null,v.Eb,v.y)),t["ɵdid"](1,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"],mode:[1,"mode"]},null),(n()(),t["ɵeld"](2,0,null,0,2,"ion-label",[["class","ion-padding-start"]],null,null,null,v.Fb,v.C)),t["ɵdid"](3,49152,null,0,s.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["输入旅行币"])),(n()(),t["ɵeld"](5,0,null,0,6,"ion-input",[["color","success"],["min","0"],["mode","ios"],["style","text-align: right;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["ɵnov"](n,6)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["ɵnov"](n,6)._handleIonChange(e.target)&&o),"ionChange"===l&&(o=!1!==u.setyechange()&&o),"ngModelChange"===l&&(o=!1!==(u.syye=e)&&o),o}),v.Ab,v.x)),t["ɵdid"](6,16384,null,0,s.Lb,[t.ElementRef],null,null),t["ɵprd"](1024,null,b.h,(function(n){return[n]}),[s.Lb]),t["ɵdid"](8,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,b.i,null,[b.m]),t["ɵdid"](10,16384,null,0,b.j,[[4,b.i]],null,null),t["ɵdid"](11,49152,null,0,s.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],max:[1,"max"],min:[2,"min"],mode:[3,"mode"],type:[4,"type"]},null),(n()(),t["ɵeld"](12,0,null,0,2,"ion-note",[],null,null,null,v.Ib,v.F)),t["ɵdid"](13,49152,null,0,s.ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["个"]))],(function(n,l){var e=l.component;n(l,1,0,"none","ios"),n(l,8,0,e.syye),n(l,11,0,"success",e.yoursurplus,"0","ios","number")}),(function(n,l){n(l,5,0,t["ɵnov"](l,10).ngClassUntouched,t["ɵnov"](l,10).ngClassTouched,t["ɵnov"](l,10).ngClassPristine,t["ɵnov"](l,10).ngClassDirty,t["ɵnov"](l,10).ngClassValid,t["ɵnov"](l,10).ngClassInvalid,t["ɵnov"](l,10).ngClassPending)}))}function J(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,2,"ion-note",[["color","success"],["slot","end"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.sekysyye()&&t),t}),v.Ib,v.F)),t["ɵdid"](1,49152,null,0,s.ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["ɵted"](-1,0,["去开通"]))],(function(n,l){n(l,1,0,"success")}),null)}function q(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,9,"ion-item",[["class","zftype"],["lines","none"]],null,null,null,v.Eb,v.y)),t["ɵdid"](1,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["ɵeld"](2,0,null,0,3,"ion-label",[],null,null,null,v.Fb,v.C)),t["ɵdid"](3,49152,null,0,s.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](4,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),t["ɵted"](5,0,["",""])),(n()(),t["ɵeld"](6,0,null,0,3,"ion-radio",[["color","success"],["mode","md"],["slot","end"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["ɵnov"](n,9)._handleBlurEvent(e.target)&&o),"ionSelect"===l&&(o=!1!==t["ɵnov"](n,9)._handleIonSelect(e.target)&&o),o}),v.Lb,v.H)),t["ɵprd"](5120,null,b.h,(function(n){return[n]}),[s.Ob]),t["ɵdid"](8,49152,null,0,s.cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],mode:[1,"mode"],value:[2,"value"]},null),t["ɵdid"](9,16384,null,0,s.Ob,[t.ElementRef],null,null)],(function(n,l){n(l,1,0,"none"),n(l,8,0,"success","md",t["ɵinlineInterpolate"](1,"",l.context.$implicit.pay_id,""))}),(function(n,l){n(l,4,0,"alipay"==l.context.$implicit.pay_code?"./assets/zfb.svg":"./assets/wechartpay.svg"),n(l,5,0,l.context.$implicit.pay_name)}))}function H(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,13,"ion-list",[["inset","true"],["line","none"]],null,null,null,v.Hb,v.D)),t["ɵdid"](1,49152,null,0,s.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{inset:[0,"inset"]},null),(n()(),t["ɵeld"](2,0,null,0,11,"ion-radio-group",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["ɵnov"](n,3)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["ɵnov"](n,3)._handleChangeEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.payType=e)&&o),o}),v.Kb,v.I)),t["ɵdid"](3,16384,null,0,s.Qb,[t.ElementRef],null,null),t["ɵprd"](1024,null,b.h,(function(n){return[n]}),[s.Qb]),t["ɵdid"](5,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,b.i,null,[b.m]),t["ɵdid"](7,16384,null,0,b.j,[[4,b.i]],null,null),t["ɵdid"](8,49152,null,0,s.db,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](9,0,null,0,2,"ion-list-header",[],null,null,null,v.Gb,v.E)),t["ɵdid"](10,49152,null,0,s.R,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,[" 支付方式 "])),(n()(),t["ɵand"](16777216,null,0,1,null,q)),t["ɵdid"](13,278528,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,1,0,"true"),n(l,5,0,e.payType),n(l,13,0,e.payList)}),(function(n,l){n(l,2,0,t["ɵnov"](l,7).ngClassUntouched,t["ɵnov"](l,7).ngClassTouched,t["ɵnov"](l,7).ngClassPristine,t["ɵnov"](l,7).ngClassDirty,t["ɵnov"](l,7).ngClassValid,t["ɵnov"](l,7).ngClassInvalid,t["ɵnov"](l,7).ngClassPending)}))}function j(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"app-footer",[],null,[[null,"sub"]],(function(n,l,e){var t=!0;return"sub"===l&&(t=!1!==n.component.submit(e)&&t),t}),x.b,x.a)),t["ɵdid"](1,114688,null,0,E.a,[],{type:[0,"type"],allprice:[1,"allprice"]},{sub:"sub"})],(function(n,l){n(l,1,0,3,l.component.total.amount_formated)}),null)}function A(n){return t["ɵvid"](0,[t["ɵpid"](0,N.a,[]),(n()(),t["ɵeld"](1,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,v.vb,v.s)),t["ɵdid"](2,49152,null,0,s.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["ɵeld"](3,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,v.fc,v.cb)),t["ɵdid"](4,49152,null,0,s.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["ɵeld"](5,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,v.jb,v.g)),t["ɵdid"](6,49152,null,0,s.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](7,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goBack()&&t),t}),v.ib,v.f)),t["ɵdid"](8,49152,null,0,s.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](9,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,v.wb,v.t)),t["ɵdid"](10,49152,null,0,s.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),t["ɵeld"](11,0,null,0,2,"ion-title",[],null,null,null,v.dc,v.ab)),t["ɵdid"](12,49152,null,0,s.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["确认订单"])),(n()(),t["ɵeld"](14,0,null,null,38,"ion-content",[],null,null,null,v.rb,v.o)),t["ɵdid"](15,49152,null,0,s.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](16,0,null,0,6,"div",[["class","shperson-box"]],null,null,null,null,null)),(n()(),t["ɵand"](16777216,null,null,1,null,I)),t["ɵdid"](18,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵeld"](19,0,null,null,3,"ion-list",[["inset","true"],["line","none"]],null,null,null,v.Hb,v.D)),t["ɵdid"](20,49152,null,0,s.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{inset:[0,"inset"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,w)),t["ɵdid"](22,278528,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,F)),t["ɵdid"](24,278528,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,z)),t["ɵdid"](26,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,$)),t["ɵdid"](28,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵeld"](29,0,null,0,21,"ion-list",[["inset","true"],["line","none"]],null,null,null,v.Hb,v.D)),t["ɵdid"](30,49152,null,0,s.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{inset:[0,"inset"]},null),(n()(),t["ɵeld"](31,0,null,0,11,"ion-item",[],null,null,null,v.Eb,v.y)),t["ɵdid"](32,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](33,0,null,0,2,"ion-label",[],null,null,null,v.Fb,v.C)),t["ɵdid"](34,49152,null,0,s.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵted"](-1,0,["使用旅行币"])),(n()(),t["ɵeld"](36,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["ɵnov"](n,37)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["ɵnov"](n,37)._handleIonChange(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.kysyye=e)&&o),"ionChange"===l&&(o=!1!==u.setissyye()&&o),o}),v.ec,v.bb)),t["ɵdid"](37,16384,null,0,s.d,[t.ElementRef],null,null),t["ɵprd"](1024,null,b.h,(function(n){return[n]}),[s.d]),t["ɵdid"](39,671744,null,0,b.m,[[8,null],[8,null],[8,null],[6,b.h]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),t["ɵprd"](2048,null,b.i,null,[b.m]),t["ɵdid"](41,16384,null,0,b.j,[[4,b.i]],null,null),t["ɵdid"](42,49152,null,0,s.Db,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,V)),t["ɵdid"](44,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵeld"](45,0,null,0,5,"ion-item",[],null,null,null,v.Eb,v.y)),t["ɵdid"](46,49152,null,0,s.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["ɵeld"](47,0,null,0,1,"small",[],null,null,null,null,null)),(n()(),t["ɵted"](48,null,["您当前的可用旅行币为",""])),(n()(),t["ɵand"](16777216,null,0,1,null,J)),t["ɵdid"](50,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,H)),t["ɵdid"](52,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["ɵeld"](53,0,null,null,5,"ion-footer",[["mode","ios"]],null,null,null,v.tb,v.q)),t["ɵdid"](54,49152,null,0,s.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["ɵeld"](55,0,null,0,3,"ion-toolbar",[["mode","ios"]],null,null,null,v.fc,v.cb)),t["ɵdid"](56,49152,null,0,s.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["ɵand"](16777216,null,0,1,null,j)),t["ɵdid"](58,16384,null,0,C.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,"ios"),n(l,4,0,"ios"),n(l,10,0,"ios","arrow-back"),n(l,18,0,!e.activePerson||0==e.activePerson.length),n(l,20,0,"true"),n(l,22,0,e.activePerson),n(l,24,0,e.goodsList),n(l,26,0,e.pricearr&&e.pricearr.hdarr&&e.pricearr.hdarr.length>0),n(l,28,0,e.pricearr),n(l,30,0,"true"),n(l,39,0,1!==e.allowusesurplus||0==e.yoursurplusnum,e.kysyye),n(l,42,0,1!==e.allowusesurplus||0==e.yoursurplusnum),n(l,44,0,e.kysyye),n(l,50,0,1!==e.allowusesurplus),n(l,52,0,e.payList&&e.payList.length>0),n(l,54,0,"ios"),n(l,56,0,"ios"),n(l,58,0,e.total)}),(function(n,l){var e=l.component;n(l,36,0,t["ɵnov"](l,41).ngClassUntouched,t["ɵnov"](l,41).ngClassTouched,t["ɵnov"](l,41).ngClassPristine,t["ɵnov"](l,41).ngClassDirty,t["ɵnov"](l,41).ngClassValid,t["ɵnov"](l,41).ngClassInvalid,t["ɵnov"](l,41).ngClassPending),n(l,48,0,e.yoursurplus)}))}function S(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"app-spgoods-confirmation",[],null,null,null,A,D)),t["ɵdid"](1,114688,null,0,h,[i.a,P.n,s.Kb,r.a,O.b,P.a,s.Jb,s.b,c.a,s.Nb,g.a,p.a,f.a,u.a],null,null)],(function(n,l){n(l,1,0)}),null)}var U=t["ɵccf"]("app-spgoods-confirmation",h,S,{},{},[]),Q=e("2w17"),G=e("WU/r"),K=t["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function Y(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"app-contactlists",[],null,[[null,"setItem"],[null,"addNew"]],(function(n,l,e){var t=!0,o=n.component;return"setItem"===l&&(t=!1!==o.clickitem(e)&&t),"addNew"===l&&(t=!1!==o.addNew()&&t),t}),Q.b,Q.a)),t["ɵdid"](1,114688,null,0,G.a,[r.a,P.n,s.b],null,{setItem:"setItem",addNew:"addNew"}),(n()(),t["ɵeld"](2,0,null,null,4,"div",[["padding",""]],null,null,null,null,null)),t["ɵdid"](3,16384,null,0,s.f,[t.ElementRef],null,null),(n()(),t["ɵeld"](4,0,null,null,2,"ion-button",[["color","danger"],["expand","block"],["shape","round"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close()&&t),t}),v.ib,v.f)),t["ɵdid"](5,49152,null,0,s.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(n()(),t["ɵted"](-1,0,["确定"]))],(function(n,l){n(l,1,0),n(l,5,0,"danger","block","round")}),null)}function W(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"app-selete-address",[],null,null,null,Y,K)),t["ɵdid"](1,114688,null,0,a,[r.a,s.Jb],null,null)],(function(n,l){n(l,1,0)}),null)}var X=t["ɵccf"]("app-selete-address",a,W,{},{},[]),nn=e("hoFm"),ln=e("iTUp"),en=e("FUS3"),tn=e("j1ZV");e.d(l,"SpgoodsConfirmationPageModuleNgFactory",(function(){return on}));var on=t["ɵcmf"](m,[],(function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[y.a,U,X]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[t.LOCALE_ID,[2,C["ɵangular_packages_common_common_a"]]]),t["ɵmpd"](4608,b.s,b.s,[]),t["ɵmpd"](4608,s.c,s.c,[t.NgZone,t.ApplicationRef]),t["ɵmpd"](4608,s.Jb,s.Jb,[s.c,t.ComponentFactoryResolver,t.Injector]),t["ɵmpd"](4608,s.Nb,s.Nb,[s.c,t.ComponentFactoryResolver,t.Injector]),t["ɵmpd"](4608,nn.a,nn.a,[]),t["ɵmpd"](1073742336,C.CommonModule,C.CommonModule,[]),t["ɵmpd"](1073742336,b.r,b.r,[]),t["ɵmpd"](1073742336,b.d,b.d,[]),t["ɵmpd"](1073742336,s.Gb,s.Gb,[]),t["ɵmpd"](1073742336,ln.a,ln.a,[]),t["ɵmpd"](1073742336,en.a,en.a,[]),t["ɵmpd"](1073742336,tn.a,tn.a,[]),t["ɵmpd"](1073742336,P.p,P.p,[[2,P.u],[2,P.n]]),t["ɵmpd"](1073742336,m,m,[]),t["ɵmpd"](1024,P.l,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);