(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"2ZXj":function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),i=e("ZZ/e"),o=e("N+K7"),a=e("6m4Z"),d=e("zysK"),c=e("3HwV"),r=function(){function l(l,n,e,t,u,i,o){this.activeroute=l,this.nav=n,this.http=e,this.native=t,this.orderlist=u,this.xcxllist=i,this.actionSheetController=o}return l.prototype.ngOnInit=function(){this.pflist=[{name:"\u670d\u52a1",val:5,key:"server"},{name:"\u53d1\u8d27",val:5,key:"send"},{name:"\u7269\u6d41",val:5,key:"shipping"}],this.imglist=[1,1,1,1,1],this.isNm=!0,this.imgs=[]},l.prototype.ionViewWillEnter=function(){console.log("\u8fdb\u51652");var l=this.activeroute.snapshot.queryParams;this.orderId=l.id,this.isxc=!!l.type,this.getBq()},l.prototype.getBq=function(){var l=this;this.goodsObjarr=[],this.http.getData(this.http.getGoodsTag,{order_id:this.orderId}).subscribe(function(n){console.log(n),l.orderSn=n.order_sn,n.data&&n.data.length>0&&(l.imgs.fill([],0,n.data.length-1),n.data.map(function(n){var e={content:"",tags_zi:[],comment_tag:[],comment_rank:5,imgs:[]};e=Object.assign(e,n),l.goodsObjarr.push(e)}))},function(n){l.goBack()})},l.prototype.setitemPf=function(l,n){l.comment_rank=n},l.prototype.removeBq=function(l,n){n.tags_zi.splice(l,1)},l.prototype.setPf=function(l,n){this.pflist[l].val=n},l.prototype.addBq=function(l){console.log(l),l.tags_zi.push(l.newbq),l.newbq=""},l.prototype.setChangebq=function(l,n){var e=!0;l.tags[n].active?(l.tags[n].active=!1,e=!1):l.tags[n].active=!0;var t=l.tags[n].tag_id;if(e)l.comment_tag.push(t);else for(var u=0;u<l.comment_tag.length;u++)if(l.comment_tag[u]==t){l.comment_tag.splice(u,1);break}},l.prototype.selecteImgs=function(l,n){return u.b(this,void 0,void 0,function(){var e=this;return u.e(this,function(t){switch(t.label){case 0:return[4,this.actionSheetController.create({header:"\u8bf7\u9009\u62e9\u6765\u6e90",buttons:[{text:"\u76f8\u673a",role:"destructive",handler:function(){e.native.getPictureByCamera().then(function(n){e.basezfile(n,l)})}},{text:"\u76f8\u518c",handler:function(){e.native.getPictures(n).then(function(n){n.map(function(n){e.basezfile(n,l)})},function(l){})}},{text:"\u53d6\u6d88",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},l.prototype.basezfile=function(l,n){var e=this;this.imgs[n]||(this.imgs[n]=[]),this.imgs[n].push(l);var t=this.imgs[n].length-1,u=this.native.getImgbase64tofile(l,"comment"+n,"file");this.isupdate||(this.isupdate=[]),this.isupdate.push(1),this.imgupload(u).then(function(l){e.isupdate.splice(0,1),e.goodsObjarr[n].imgs[t]=l}).catch(function(l){e.isupdate.splice(0,1),e.imgs[n].splice(t,1)})},l.prototype.imgupload=function(l){var n=this;return new Promise(function(e,t){var u=new XMLHttpRequest;u.open("POST",n.http.domain+n.http.updateimg),u.onreadystatechange=function(l){if(4==u.readyState&&200==u.status){var n=JSON.parse(u.response);e(n.result)}},u.onerror=function(l){t(l)},u.send(l)})},l.prototype.goBack=function(){this.nav.back()},l.prototype.sub=function(){var l=this,n={};this.pflist.map(function(l){n[l.key]=l.val}),n.pjarr=JSON.stringify(Array.from(this.goodsObjarr)),n.o_id=this.orderId,this.isNm&&(n.hide_username=1),console.log(n),this.http.postformdataloading(this.http.commentSend,n).subscribe(function(n){l.native.presentToast(n.msg),l.isxc?l.xcxllist.setOrderispj(l.orderId,l.orderSn):l.orderlist.setOrderispj(l.orderId,l.orderSn),l.goBack()},function(l){})},l}(),s=function(){return function(){}}(),g=e("pMnS"),f=e("Ip0R"),m=e("oBZk"),p=e("gIcY"),h=e("ZYCi"),C=t["\u0275crt"]({encapsulation:0,styles:[[".my-list[_ngcontent-%COMP%]   .my-item[_ngcontent-%COMP%]{margin-bottom:10px}.my-list[_ngcontent-%COMP%]   .my-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.my-list[_ngcontent-%COMP%]   .my-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:40px;font-size:var(--ion-text)}.my-list[_ngcontent-%COMP%]   .my-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.my-list[_ngcontent-%COMP%]   .my-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin-right:5px}.my-list[_ngcontent-%COMP%]   .my-item[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);color:var(--ion-color-medium);margin-top:5px}.addbq-box[_ngcontent-%COMP%]{font-size:var(--ion-text);display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.addbq-box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{flex:1}.addbq-box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:auto}.my-row[_ngcontent-%COMP%]{padding-top:10px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.my-row.noTop[_ngcontent-%COMP%]{padding-top:0}.goods_list[_ngcontent-%COMP%]{margin-bottom:10px}.goods_list[_ngcontent-%COMP%]   .pl-item[_ngcontent-%COMP%]{border-bottom:10px solid var(--ion-gray-background-color)}.goods_list[_ngcontent-%COMP%]   .goods_name[_ngcontent-%COMP%]{font-size:var(--ion-title)}.goods_list[_ngcontent-%COMP%]   .goods_name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:5px}.hasbq[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.nmbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.nmbox[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{margin-left:10px}.line[_ngcontent-%COMP%]{height:10px;background-color:var(--ion-gray-background-color)}.img-box[_ngcontent-%COMP%]{width:100%;padding-top:100%;position:relative}.img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}.hidden[_ngcontent-%COMP%]{display:none}.loadEffect[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.3)}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;border-radius:50%;background:var(--ion-color-success);position:absolute;-webkit-animation:1.04s infinite load}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){left:0;top:50%;margin-top:-10px;-webkit-animation-delay:.13s}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){left:14px;top:14px;-webkit-animation-delay:.26s}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){left:50%;top:0;margin-left:-10px;-webkit-animation-delay:.39s}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){top:14px;right:14px;-webkit-animation-delay:.52s}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5){right:0;top:50%;margin-top:-10px;-webkit-animation-delay:.65s}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){right:14px;bottom:14px;-webkit-animation-delay:.78s}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7){bottom:0;left:50%;margin-left:-10px;-webkit-animation-delay:.91s}.loadEffect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(8){bottom:14px;left:14px;-webkit-animation-delay:1.04s}@-webkit-keyframes load{0%{-webkit-transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(.3);opacity:.5}}"]],data:{}});function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setPf(l.parent.context.index,l.context.index+1)&&t),t},null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.val>=n.context.index+1?"../../../assets/icon/branch_active.png":"../../../assets/icon/branch.png")})}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["5\u5206,\u975e\u5e38\u6ee1\u610f"]))],null,null)}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["4\u5206,\u6ee1\u610f"]))],null,null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["3\u5206,\u4e00\u822c"]))],null,null)}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["2\u5206,\u4e0d\u6ee1\u610f"]))],null,null)}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["1\u5206,\u975e\u5e38\u4e0d\u6ee1\u610f"]))],null,null)}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,19,"div",[["class","my-item"]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,f.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](2,{hidden:0}),(l()(),t["\u0275eld"](3,0,null,null,5,"div",[["class","top"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"div",[["class","left"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,[" "," "])),(l()(),t["\u0275eld"](6,0,null,null,2,"div",[["class","right"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](8,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](9,0,null,null,10,"div",[["class","des"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](11,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](13,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](15,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](17,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](19,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component,t=l(n,2,0,e.isxc&&n.context.index>0);l(n,1,0,"my-item",t),l(n,8,0,e.imglist),l(n,11,0,5==n.context.$implicit.val),l(n,13,0,4==n.context.$implicit.val),l(n,15,0,3==n.context.$implicit.val),l(n,17,0,2==n.context.$implicit.val),l(n,19,0,1==n.context.$implicit.val)},function(l,n){l(n,5,0,n.context.$implicit.name)})}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setitemPf(l.parent.context.$implicit,l.context.index+1)&&t),t},null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.comment_rank>=n.context.index+1?"../../../assets/icon/branch_active.png":"../../../assets/icon/branch.png")})}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["5\u5206,\u975e\u5e38\u6ee1\u610f"]))],null,null)}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["4\u5206,\u6ee1\u610f"]))],null,null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["3\u5206,\u4e00\u822c"]))],null,null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["2\u5206,\u4e0d\u6ee1\u610f"]))],null,null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["1\u5206,\u975e\u5e38\u4e0d\u6ee1\u610f"]))],null,null)}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"ion-chip",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setChangebq(l.parent.context.$implicit,l.context.index)&&t),t},m.pb,m.m)),t["\u0275did"](1,49152,null,0,i.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](2,0,null,0,2,"ion-label",[],null,null,null,m.Fb,m.C)),t["\u0275did"](3,49152,null,0,i.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](4,0,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.active?"success":"")},function(l,n){l(n,4,0,n.context.$implicit.tag_name)})}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","my-item"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.removeBq(l.context.index,l.parent.context.$implicit)&&t),t},null,null)),(l()(),t["\u0275eld"](1,0,null,null,6,"ion-chip",[["color","success"]],null,null,null,m.pb,m.m)),t["\u0275did"](2,49152,null,0,i.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](3,0,null,0,2,"ion-label",[],null,null,null,m.Fb,m.C)),t["\u0275did"](4,49152,null,0,i.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](5,0,["",""])),(l()(),t["\u0275eld"](6,0,null,0,1,"ion-icon",[["name","close-circle"]],null,null,null,m.wb,m.t)),t["\u0275did"](7,49152,null,0,i.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],function(l,n){l(n,2,0,"success"),l(n,7,0,"close-circle")},function(l,n){l(n,5,0,n.context.$implicit)})}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"ion-button",[["color","success"],["size","small"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addBq(l.parent.context.$implicit)&&t),t},m.ib,m.f)),t["\u0275did"](2,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],size:[1,"size"]},null),(l()(),t["\u0275ted"](-1,0,["\u786e\u5b9a"]))],function(l,n){l(n,2,0,"success","small")},null)}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","img-box"]],null,[[null,"click"]],function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.selecteImgs(l.parent.context.index,6-(u.imgs[l.parent.context.index]?u.imgs[l.parent.context.index].length:0))&&t),t},null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","../../../assets/add2.png"]],null,null,null,null,null))],null,null)}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","loadEffect"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,0,"span",[],null,null,null,null,null))],null,null)}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-col",[["size","3"]],null,null,null,m.qb,m.n)),t["\u0275did"](1,49152,null,0,i.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](2,0,null,0,3,"div",[["class","img-box"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](5,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,"3"),l(n,5,0,!n.parent.context.$implicit.imgs[n.context.index])},function(l,n){l(n,3,0,n.context.$implicit)})}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,64,"div",[["class","pl-item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","goods_name"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,18,"div",[["class","my-list"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,17,"div",[["class","my-item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,5,"div",[["class","top"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"div",[["class","left"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" \u63cf\u8ff0 "])),(l()(),t["\u0275eld"](9,0,null,null,2,"div",[["class","right"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](11,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](12,0,null,null,10,"div",[["class","des"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](14,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](16,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](18,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](20,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](22,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](23,0,null,null,2,"div",[["class","hasbq"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](25,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](26,0,null,null,4,"div",[["class","my-row"]],null,null,null,null,null)),t["\u0275did"](27,278528,null,0,f.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](28,{noTop:0}),(l()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](30,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](31,0,null,null,15,"div",[["class","addbq-box"]],null,null,null,null,null)),(l()(),t["\u0275eld"](32,0,null,null,12,"div",[["class","left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](33,0,null,null,11,"ion-item",[],null,null,null,m.Eb,m.y)),t["\u0275did"](34,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](35,0,null,0,2,"ion-label",[],null,null,null,m.Fb,m.C)),t["\u0275did"](36,49152,null,0,i.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["\u6807\u7b7e"])),(l()(),t["\u0275eld"](38,0,null,0,6,"ion-input",[["placeholder","\u8bf7\u8f93\u5165\u81ea\u5b9a\u4e49\u6807\u7b7e\u540d\u79f0"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t["\u0275nov"](l,39)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t["\u0275nov"](l,39)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(l.context.$implicit.newbq=e)&&u),u},m.Ab,m.x)),t["\u0275did"](39,16384,null,0,i.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,p.h,function(l){return[l]},[i.Rb]),t["\u0275did"](41,671744,null,0,p.m,[[8,null],[8,null],[8,null],[6,p.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.i,null,[p.m]),t["\u0275did"](43,16384,null,0,p.j,[[4,p.i]],null,null),t["\u0275did"](44,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,Z)),t["\u0275did"](46,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](47,0,null,null,8,"ion-item",[],null,null,null,m.Eb,m.y)),t["\u0275did"](48,49152,null,0,i.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](49,0,null,0,6,"ion-textarea",[["placeholder","\u8bf4\u8bf4\u4f60\u7684\u770b\u6cd5\u5427"],["rows","4"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t["\u0275nov"](l,50)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t["\u0275nov"](l,50)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(l.context.$implicit.content=e)&&u),u},m.bc,m.Y)),t["\u0275did"](50,16384,null,0,i.Rb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,p.h,function(l){return[l]},[i.Rb]),t["\u0275did"](52,671744,null,0,p.m,[[8,null],[8,null],[8,null],[6,p.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.i,null,[p.m]),t["\u0275did"](54,16384,null,0,p.j,[[4,p.i]],null,null),t["\u0275did"](55,49152,null,0,i.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null),(l()(),t["\u0275eld"](56,0,null,null,8,"ion-row",[["margin-bottom",""],["margin-top",""]],null,null,null,m.Ob,m.L)),t["\u0275did"](57,49152,null,0,i.lb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](58,16384,null,0,i.f,[t.ElementRef],null,null),(l()(),t["\u0275eld"](59,0,null,0,3,"ion-col",[["size","3"]],null,null,null,m.qb,m.n)),t["\u0275did"](60,49152,null,0,i.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,$)),t["\u0275did"](62,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,T)),t["\u0275did"](64,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,11,0,e.imglist),l(n,14,0,5==n.context.$implicit.comment_rank),l(n,16,0,4==n.context.$implicit.comment_rank),l(n,18,0,3==n.context.$implicit.comment_rank),l(n,20,0,2==n.context.$implicit.comment_rank),l(n,22,0,1==n.context.$implicit.comment_rank),l(n,25,0,n.context.$implicit.tags);var t=l(n,28,0,0===n.context.$implicit.tags.length);l(n,27,0,"my-row",t),l(n,30,0,n.context.$implicit.tags_zi),l(n,41,0,n.context.$implicit.newbq),l(n,44,0,"\u8bf7\u8f93\u5165\u81ea\u5b9a\u4e49\u6807\u7b7e\u540d\u79f0"),l(n,46,0,n.context.$implicit.newbq),l(n,52,0,n.context.$implicit.content),l(n,55,0,"\u8bf4\u8bf4\u4f60\u7684\u770b\u6cd5\u5427","4"),l(n,60,0,"3"),l(n,62,0,!(e.imgs[n.context.index]&&6===e.imgs[n.context.index].length)),l(n,64,0,e.imgs[n.context.index])},function(l,n){l(n,3,0,n.context.$implicit.goodsName),l(n,38,0,t["\u0275nov"](n,43).ngClassUntouched,t["\u0275nov"](n,43).ngClassTouched,t["\u0275nov"](n,43).ngClassPristine,t["\u0275nov"](n,43).ngClassDirty,t["\u0275nov"](n,43).ngClassValid,t["\u0275nov"](n,43).ngClassInvalid,t["\u0275nov"](n,43).ngClassPending),l(n,49,0,t["\u0275nov"](n,54).ngClassUntouched,t["\u0275nov"](n,54).ngClassTouched,t["\u0275nov"](n,54).ngClassPristine,t["\u0275nov"](n,54).ngClassDirty,t["\u0275nov"](n,54).ngClassValid,t["\u0275nov"](n,54).ngClassInvalid,t["\u0275nov"](n,54).ngClassPending)})}function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,17,"ion-header",[],null,null,null,m.vb,m.s)),t["\u0275did"](1,49152,null,0,i.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,15,"ion-toolbar",[["mode","ios"]],null,null,null,m.fc,m.cb)),t["\u0275did"](3,49152,null,0,i.Eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,m.jb,m.g)),t["\u0275did"](5,49152,null,0,i.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.goBack()&&t),t},m.ib,m.f)),t["\u0275did"](7,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,m.wb,m.t)),t["\u0275did"](9,49152,null,0,i.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(l()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,m.dc,m.ab)),t["\u0275did"](11,49152,null,0,i.Cb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["\u53d1\u5e03\u8bc4\u8bba"])),(l()(),t["\u0275eld"](13,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,m.jb,m.g)),t["\u0275did"](14,49152,null,0,i.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](15,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.sub()&&t),t},m.ib,m.f)),t["\u0275did"](16,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"]},null),(l()(),t["\u0275ted"](-1,0,[" \u53d1\u5e03 "])),(l()(),t["\u0275eld"](18,0,null,null,20,"ion-content",[["padding",""]],null,null,null,m.rb,m.o)),t["\u0275did"](19,49152,null,0,i.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](20,16384,null,0,i.f,[t.ElementRef],null,null),(l()(),t["\u0275eld"](21,0,null,0,2,"div",[["class","my-list"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](23,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](24,0,null,0,0,"div",[["class","line"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,0,2,"div",[["class","goods_list"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](27,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](28,0,null,0,10,"div",[["class","nmbox"]],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,6,"ion-toggle",[["color","success"],["size","small"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t["\u0275nov"](l,30)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t["\u0275nov"](l,30)._handleIonChange(e.target)&&u),"ngModelChange"===n&&(u=!1!==(i.isNm=e)&&u),u},m.ec,m.bb)),t["\u0275did"](30,16384,null,0,i.d,[t.ElementRef],null,null),t["\u0275prd"](1024,null,p.h,function(l){return[l]},[i.d]),t["\u0275did"](32,671744,null,0,p.m,[[8,null],[8,null],[8,null],[6,p.h]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.i,null,[p.m]),t["\u0275did"](34,16384,null,0,p.j,[[4,p.i]],null,null),t["\u0275did"](35,49152,null,0,i.Db,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](36,0,null,null,2,"ion-text",[],null,null,null,m.ac,m.X)),t["\u0275did"](37,49152,null,0,i.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["\u533f\u540d"]))],function(l,n){var e=n.component;l(n,3,0,"ios"),l(n,9,0,"ios","arrow-back"),l(n,16,0,e.isupdate&&e.isupdate.length>0),l(n,23,0,e.pflist),l(n,27,0,e.goodsObjarr),l(n,32,0,e.isNm),l(n,35,0,"success")},function(l,n){l(n,29,0,t["\u0275nov"](n,34).ngClassUntouched,t["\u0275nov"](n,34).ngClassTouched,t["\u0275nov"](n,34).ngClassPristine,t["\u0275nov"](n,34).ngClassDirty,t["\u0275nov"](n,34).ngClassValid,t["\u0275nov"](n,34).ngClassInvalid,t["\u0275nov"](n,34).ngClassPending)})}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-post-comment",[],null,null,null,q,C)),t["\u0275did"](1,114688,null,0,r,[h.a,i.Kb,o.a,a.a,d.a,c.a,i.a],null,null)],function(l,n){l(n,1,0)},null)}var j=t["\u0275ccf"]("app-post-comment",r,z,{},{},[]);e.d(n,"PostCommentPageModuleNgFactory",function(){return B});var B=t["\u0275cmf"](s,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[g.a,j]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[t.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,p.t,p.t,[]),t["\u0275mpd"](4608,i.c,i.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Jb,i.Jb,[i.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.Nb,i.Nb,[i.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),t["\u0275mpd"](1073742336,p.q,p.q,[]),t["\u0275mpd"](1073742336,p.d,p.d,[]),t["\u0275mpd"](1073742336,i.Gb,i.Gb,[]),t["\u0275mpd"](1073742336,h.o,h.o,[[2,h.u],[2,h.m]]),t["\u0275mpd"](1073742336,s,s,[]),t["\u0275mpd"](1024,h.k,function(){return[[{path:"",component:r}]]},[])])})}}]);