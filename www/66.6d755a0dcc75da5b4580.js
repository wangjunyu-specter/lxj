(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{EujW:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=e("mrSG"),i=e("HIb1"),a=e("6m4Z"),s=e("ZZ/e"),u=e("rGvg"),c=e("N+K7"),r=e("pYiD"),d=e("qfBg"),p=e("KanJ"),g=e("yrQW"),h=e("Hhrg"),f=function(){function n(n,t,e,l,o,i,a,s,u,c,r,d,p,g,h){this.nav=n,this.sanitizer=t,this.yjlist=e,this.http=l,this.gzlist=o,this.emojiishow=i,this.activeroute=a,this.mydeletefn=s,this.userfn=u,this.itemclickfn=c,this.native=r,this.alertController=d,this.actionSheetController=p,this.editMyrelease=g,this.route=h,this.pageObj={page:1,num:20}}return n.prototype.ngOnInit=function(){this.isshowDrop=!1,this.setPlitem={},this.toolbaropacity="0",this.ishttp=new Set},n.prototype.ionViewDidEnter=function(){var n=this;console.log("进入新的");var t=this.activeroute.snapshot.queryParams;this.id=t.id,this.type=t.type?Number(t.type):0;var e=this.editMyrelease.getData();if(e.data&&e.data.id){var l=this.editMyrelease.getIschage();e.data.id==this.id&&l&&e.type-1==this.type?this.yjlist.editOne(this.id,this.type,e.data):this.editMyrelease.clear()}this.data=this.yjlist.getPqone(this.id,this.type),this.getReadnum(),this.getContent(),this.userfn.getUserp().then((function(t){n.user=t}))},n.prototype.getContent=function(){var n=this,t=1;(!this.data||this.data&&!this.data.id)&&(t=2),this.http.getData(this.http.getpllist,{tid:this.id,page:this.pageObj.page,num:this.pageObj.num,hasdata:t,type:this.type+2}).subscribe((function(t){console.log(t),n.data||(n.data=t.result.data.result,n.gzlist.setList(t.result.data.users)),n.pllist=t.result.result}),(function(n){console.log(n)}))},n.prototype.logScrolling=function(n){var t=n.detail.scrollTop;this.setNavstatus(t<44?2*t/100:1)},n.prototype.assembleHTML=function(n){return this.sanitizer.bypassSecurityTrustHtml(n)},n.prototype.setNavstatus=function(n){this.toolbaropacity=parseInt((100*n).toString(),10).toString()},n.prototype.goBack=function(){console.log("退出"),this.nav.back()},n.prototype.monfous=function(){console.log("时候"),this.isshowDrop=!0},n.prototype.monblur=function(){this.emojiishow.getIsshows()||this.blurClear()},n.prototype.sub=function(n){var t=this;console.log(n),console.log(this.setPlitem),console.log(this.data),console.log(this.user);var e={touid:this.setPlitem.userid||this.data.userid,tid:this.data.id,content:n};e.ishf=this.setPlitem.uid!=this.user.user_id&&this.setPlitem.touid==this.user.user_id?1:0,e.pid=this.setPlitem.pid&&0!=this.setPlitem.pid?this.setPlitem.pid:this.setPlitem.id&&0!=this.setPlitem.id?this.setPlitem.id:0,console.log(e),this.blurClear(1),this.http.postformdataloading(this.http.setpl,e).subscribe((function(n){if(console.log(n),e.id=n.result.id,e.time=Date.parse((new Date).toString())/1e3,e.headimg=t.user.headimg,e.dznum=0,e.user_name=t.user.user_name,e.name=n.result.user.name,console.log(e.pid),0==e.pid)t.pllist.unshift(e);else for(var l=0,o=t.pllist.length;l<o;l++)if(console.log(t.pllist[l].id),t.pllist[l].id==e.pid)return t.pllist[l].chrild.unshift(e),t.pllist[l].plnum+=1,console.log(t.pllist[l]),!1}))},n.prototype.clickdrop=function(){this.blurClear(1),this.itemclickfn.Source.emit(2)},n.prototype.setplItem=function(n){console.log(n),this.isshowDrop=!0,this.seletename=n.user_name,this.setPlitem=n},n.prototype.blurClear=function(n){n&&this.emojiishow.setIsshow(2),this.setPlitem={},this.seletename="",this.isshowDrop=!1},n.prototype.edmit=function(){return o.__awaiter(this,void 0,void 0,(function(){var n,t,e=this;return o.__generator(this,(function(l){switch(l.label){case 0:return n="",this.data&&this.data.thumb&&this.data.thumb.length>0&&(n=this.data.thumb[0]),t=[{text:"分享微信好友",role:"",handler:function(){e.wechatShare(2,n)}},{text:"分享到朋友圈",role:"",handler:function(){e.wechatShare(1,n)}}],this.user.user_id==this.data.userid&&t.push.apply(t,[{text:"编辑",handler:function(){e.editMyrelease.setData(e.data,e.type+1),e.route.navigate(["/fbyj"],{queryParams:{type:e.type+1,isedit:1}})}},{text:"删除",handler:function(){e.sureDelete()}}]),t.push({text:"取消",role:"cancel",handler:function(){console.log("Cancel clicked")}}),[4,this.actionSheetController.create({header:"操作",buttons:t})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},n.prototype.wechatShare=function(n,t){var e=this;this.userfn.getUser().then((function(l){console.log("分享进入"),e.native.wechatShare(e.data.title||e.data.content,"",t||e.http.zdomain+"logo108.png",e.http.domain+e.http.shareLink+"&id="+e.id+"&fuid="+l.user_id+"&pagetype=1",n)})).catch((function(n){}))},n.prototype.seleteItem=function(){var n=this;console.log(this.data),this.http.getDataloading(this.http.deletepqitem,{id:this.id,type:this.type+2}).subscribe((function(t){n.yjlist.deleteone(n.id,n.type),n.mydeletefn.setId(n.id,n.type+1),n.goBack()}),(function(n){}))},n.prototype.sureDelete=function(){return o.__awaiter(this,void 0,void 0,(function(){var n=this;return o.__generator(this,(function(t){switch(t.label){case 0:return[4,this.alertController.create({header:"提示",message:"删除后无法恢复!",buttons:[{text:"取消",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"确定删除",handler:function(){n.seleteItem()}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}}))}))},n.prototype.getReadnum=function(){var n=this;console.log("获取数量"),this.http.getData(this.http.getReadnum,{id:this.id}).subscribe((function(t){n.readnum=t.result}),(function(t){n.readnum=0}))},n.prototype.setdz=function(){var n=this;if(this.ishttp.has(this.data.id))return this.native.presentToast("请稍后再试!"),!1;this.ishttp.add(this.data.id),this.http.getData(this.http.setdz,{touid:this.data.userid,tid:this.data.id,istop:1,isqx:0===this.data.isdz?0:1}).subscribe((function(t){n.ishttp.delete(n.data.id),0===n.data.isdz?(n.data.isdz=1,n.data.dznum=t.result.dznum):(n.data.isdz=0,n.data.dznum=t.result.dznum)}),(function(t){n.ishttp.delete(n.data.id)}))},n}(),m=function(){return function(){}}(),y=e("pMnS"),C=e("oBZk"),O=e("Ip0R"),_=e("y5PK"),P=e("5x7T"),M=e("ZYCi"),w=e("n/qi"),b=e("/s+1"),v=e("uJMW"),R=e("yeIC"),x=e("p9W/"),j=e("ZYjt"),I=l["ɵcrt"]({encapsulation:0,styles:[[".show-0[_ngcontent-%COMP%]{--opacity:0}.show-1[_ngcontent-%COMP%]{--opacity:0.01}.show-2[_ngcontent-%COMP%]{--opacity:0.02}.show-3[_ngcontent-%COMP%]{--opacity:0.03}.show-4[_ngcontent-%COMP%]{--opacity:0.04}.show-5[_ngcontent-%COMP%]{--opacity:0.05}.show-6[_ngcontent-%COMP%]{--opacity:0.06}.show-7[_ngcontent-%COMP%]{--opacity:0.07}.show-8[_ngcontent-%COMP%]{--opacity:0.08}.show-9[_ngcontent-%COMP%]{--opacity:0.09}.show-10[_ngcontent-%COMP%]{--opacity:0.1}.show-11[_ngcontent-%COMP%]{--opacity:0.11}.show-12[_ngcontent-%COMP%]{--opacity:0.12}.show-13[_ngcontent-%COMP%]{--opacity:0.13}.show-14[_ngcontent-%COMP%]{--opacity:0.14}.show-15[_ngcontent-%COMP%]{--opacity:0.15}.show-16[_ngcontent-%COMP%]{--opacity:0.16}.show-17[_ngcontent-%COMP%]{--opacity:0.17}.show-18[_ngcontent-%COMP%]{--opacity:0.18}.show-19[_ngcontent-%COMP%]{--opacity:0.19}.show-20[_ngcontent-%COMP%]{--opacity:0.2}.show-21[_ngcontent-%COMP%]{--opacity:0.21}.show-22[_ngcontent-%COMP%]{--opacity:0.22}.show-23[_ngcontent-%COMP%]{--opacity:0.23}.show-24[_ngcontent-%COMP%]{--opacity:0.24}.show-25[_ngcontent-%COMP%]{--opacity:0.25}.show-26[_ngcontent-%COMP%]{--opacity:0.26}.show-27[_ngcontent-%COMP%]{--opacity:0.27}.show-28[_ngcontent-%COMP%]{--opacity:0.28}.show-29[_ngcontent-%COMP%]{--opacity:0.29}.show-30[_ngcontent-%COMP%]{--opacity:0.3}.show-31[_ngcontent-%COMP%]{--opacity:0.31}.show-32[_ngcontent-%COMP%]{--opacity:0.32}.show-33[_ngcontent-%COMP%]{--opacity:0.33}.show-34[_ngcontent-%COMP%]{--opacity:0.34}.show-35[_ngcontent-%COMP%]{--opacity:0.35}.show-36[_ngcontent-%COMP%]{--opacity:0.36}.show-37[_ngcontent-%COMP%]{--opacity:0.37}.show-38[_ngcontent-%COMP%]{--opacity:0.38}.show-39[_ngcontent-%COMP%]{--opacity:0.39}.show-40[_ngcontent-%COMP%]{--opacity:0.4}.show-41[_ngcontent-%COMP%]{--opacity:0.41}.show-42[_ngcontent-%COMP%]{--opacity:0.42}.show-43[_ngcontent-%COMP%]{--opacity:0.43}.show-44[_ngcontent-%COMP%]{--opacity:0.44}.show-45[_ngcontent-%COMP%]{--opacity:0.45}.show-46[_ngcontent-%COMP%]{--opacity:0.46}.show-47[_ngcontent-%COMP%]{--opacity:0.47}.show-48[_ngcontent-%COMP%]{--opacity:0.48}.show-49[_ngcontent-%COMP%]{--opacity:0.49}.show-50[_ngcontent-%COMP%]{--opacity:0.5}.show-51[_ngcontent-%COMP%]{--opacity:0.51}.show-52[_ngcontent-%COMP%]{--opacity:0.52}.show-53[_ngcontent-%COMP%]{--opacity:0.53}.show-54[_ngcontent-%COMP%]{--opacity:0.54}.show-55[_ngcontent-%COMP%]{--opacity:0.55}.show-56[_ngcontent-%COMP%]{--opacity:0.56}.show-57[_ngcontent-%COMP%]{--opacity:0.57}.show-58[_ngcontent-%COMP%]{--opacity:0.58}.show-59[_ngcontent-%COMP%]{--opacity:0.59}.show-60[_ngcontent-%COMP%]{--opacity:0.6}.show-61[_ngcontent-%COMP%]{--opacity:0.61}.show-62[_ngcontent-%COMP%]{--opacity:0.62}.show-63[_ngcontent-%COMP%]{--opacity:0.63}.show-64[_ngcontent-%COMP%]{--opacity:0.64}.show-65[_ngcontent-%COMP%]{--opacity:0.65}.show-66[_ngcontent-%COMP%]{--opacity:0.66}.show-67[_ngcontent-%COMP%]{--opacity:0.67}.show-68[_ngcontent-%COMP%]{--opacity:0.68}.show-69[_ngcontent-%COMP%]{--opacity:0.69}.show-70[_ngcontent-%COMP%]{--opacity:0.7}.show-71[_ngcontent-%COMP%]{--opacity:0.71}.show-72[_ngcontent-%COMP%]{--opacity:0.72}.show-73[_ngcontent-%COMP%]{--opacity:0.73}.show-74[_ngcontent-%COMP%]{--opacity:0.74}.show-75[_ngcontent-%COMP%]{--opacity:0.75}.show-76[_ngcontent-%COMP%]{--opacity:0.76}.show-77[_ngcontent-%COMP%]{--opacity:0.77}.show-78[_ngcontent-%COMP%]{--opacity:0.78}.show-79[_ngcontent-%COMP%]{--opacity:0.79}.show-80[_ngcontent-%COMP%]{--opacity:0.8}.show-81[_ngcontent-%COMP%]{--opacity:0.81}.show-82[_ngcontent-%COMP%]{--opacity:0.82}.show-83[_ngcontent-%COMP%]{--opacity:0.83}.show-84[_ngcontent-%COMP%]{--opacity:0.84}.show-85[_ngcontent-%COMP%]{--opacity:0.85}.show-86[_ngcontent-%COMP%]{--opacity:0.86}.show-87[_ngcontent-%COMP%]{--opacity:0.87}.show-88[_ngcontent-%COMP%]{--opacity:0.88}.show-89[_ngcontent-%COMP%]{--opacity:0.89}.show-90[_ngcontent-%COMP%]{--opacity:0.9}.show-91[_ngcontent-%COMP%]{--opacity:0.91}.show-92[_ngcontent-%COMP%]{--opacity:0.92}.show-93[_ngcontent-%COMP%]{--opacity:0.93}.show-94[_ngcontent-%COMP%]{--opacity:0.94}.show-95[_ngcontent-%COMP%]{--opacity:0.95}.show-96[_ngcontent-%COMP%]{--opacity:0.96}.show-97[_ngcontent-%COMP%]{--opacity:0.97}.show-98[_ngcontent-%COMP%]{--opacity:0.98}.show-99[_ngcontent-%COMP%]{--opacity:0.99}.show-100[_ngcontent-%COMP%]{--opacity:1}ion-content[_ngcontent-%COMP%]{--background:var(--ion-gray-background-color)}ion-content[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]{width:100%;margin-top:var(--ion-platform-margin-top)}ion-content[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]{background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;margin-top:-15px;z-index:2;position:relative}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;font-size:var(--ion-big-title)}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);display:flex;flex-direction:row;justify-content:flex-start;align-items:center}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;position:relative;z-index:1}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .des[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{line-height:22px;padding:0 15px 0 20px;font-size:var(--ion-text);color:#fff;background:var(--ion-color-linegradient);border-radius:13px;margin-left:-10px}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{text-align:center;margin-top:10px}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{font-size:var(--ion-title)}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{font-size:var(--ion-text);font-weight:600}ion-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:1px;background-color:var(--ion-color-light);margin-top:15px}ion-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{background-color:#fff}.search-bar[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;color:#fff;padding:0 10px;height:36px}.search-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:var(--ion-statusbar-left);font-size:var(--ion-icon-big);display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.search-bar[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;margin-left:5px}.search-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:52px;display:flex;flex-direction:row;justify-content:flex-end}.search-bar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div.round[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6);width:21px;height:21px;border-radius:50%;display:flex;flex-direction:row;justify-content:center;align-items:center}.search-bar[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:-webkit-box;flex:1;margin:0 15px;height:27px}.app-pllist[_ngcontent-%COMP%]{padding-top:1px;margin-top:15px;background-color:#fff}.app-pllist[_ngcontent-%COMP%]   .hfnum[_ngcontent-%COMP%]{font-size:var(--ion-text);color:var(--ion-color-dark);margin:15px}"]],data:{}});function z(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,1,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),l["ɵppd"](1,2)],null,(function(n,t){var e=t.component,o=l["ɵunv"](t,0,0,n(t,1,0,l["ɵnov"](t.parent,0),e.data.imgarr[0],e.http.zdomain));n(t,0,0,o)}))}function N(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,1,"div",[["class","box"]],null,null,null,null,null)),(n()(),l["ɵted"](1,null,["",""]))],null,(function(n,t){n(t,1,0,t.component.data.tag)}))}function k(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,1,"ion-icon",[["name","heart-empty"]],null,null,null,C.wb,C.t)),l["ɵdid"](1,49152,null,0,s.E,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{name:[0,"name"]},null)],(function(n,t){n(t,1,0,"heart-empty")}),null)}function D(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,1,"ion-icon",[["color","danger"],["name","heart"]],null,null,null,C.wb,C.t)),l["ɵdid"](1,49152,null,0,s.E,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{color:[0,"color"],name:[1,"name"]},null)],(function(n,t){n(t,1,0,"danger","heart")}),null)}function E(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,5,"ion-col",[],null,null,null,C.qb,C.n)),l["ɵdid"](1,49152,null,0,s.v,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["ɵeld"](2,0,null,0,1,"div",[["class","top"]],null,null,null,null,null)),(n()(),l["ɵted"](-1,null,["目的地"])),(n()(),l["ɵeld"](4,0,null,0,1,"div",[["class","footer"]],null,null,null,null,null)),(n()(),l["ɵted"](5,null,["",""]))],null,(function(n,t){n(t,5,0,t.component.data.destination)}))}function L(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,6,"ion-col",[],null,null,null,C.qb,C.n)),l["ɵdid"](1,49152,null,0,s.v,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["ɵeld"](2,0,null,0,1,"div",[["class","top"]],null,null,null,null,null)),(n()(),l["ɵted"](-1,null,["出发时间"])),(n()(),l["ɵeld"](4,0,null,0,2,"div",[["class","footer"]],null,null,null,null,null)),(n()(),l["ɵted"](5,null,["",""])),l["ɵppd"](6,2)],null,(function(n,t){var e=t.component,o=l["ɵunv"](t,5,0,n(t,6,0,l["ɵnov"](t.parent.parent,2),e.data.outtime,"."));n(t,5,0,o)}))}function Z(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,5,"ion-col",[],null,null,null,C.qb,C.n)),l["ɵdid"](1,49152,null,0,s.v,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["ɵeld"](2,0,null,0,1,"div",[["class","top"]],null,null,null,null,null)),(n()(),l["ɵted"](-1,null,["出行天数"])),(n()(),l["ɵeld"](4,0,null,0,1,"div",[["class","footer"]],null,null,null,null,null)),(n()(),l["ɵted"](5,null,["","天"]))],null,(function(n,t){n(t,5,0,t.component.data.days)}))}function T(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,5,"ion-col",[],null,null,null,C.qb,C.n)),l["ɵdid"](1,49152,null,0,s.v,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["ɵeld"](2,0,null,0,1,"div",[["class","top"]],null,null,null,null,null)),(n()(),l["ɵted"](-1,null,["人均花费"])),(n()(),l["ɵeld"](4,0,null,0,1,"div",[["class","footer"]],null,null,null,null,null)),(n()(),l["ɵted"](5,null,["¥ ",""]))],null,(function(n,t){n(t,5,0,t.component.data.money)}))}function S(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,32,"div",[["class","top-content ion-padding-top ion-padding-start ion-padding-end"]],null,null,null,null,null)),(n()(),l["ɵeld"](1,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),l["ɵted"](2,null,["",""])),(n()(),l["ɵeld"](3,0,null,null,18,"div",[["class","des"]],null,null,null,null,null)),(n()(),l["ɵeld"](4,0,null,null,3,"div",[["class","left"]],null,null,null,null,null)),(n()(),l["ɵeld"](5,0,null,null,0,"img",[["alt",""],["src","../../../assets/tagleft.svg"]],null,null,null,null,null)),(n()(),l["ɵand"](16777216,null,null,1,null,N)),l["ɵdid"](7,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵeld"](8,0,null,null,13,"div",[["class","right"]],null,null,null,null,null)),(n()(),l["ɵeld"](9,0,null,null,9,"ion-button",[["color","dark"],["fill","clear"],["size","small"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.setdz()&&l),l}),C.ib,C.f)),l["ɵdid"](10,49152,null,0,s.m,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(n()(),l["ɵand"](16777216,null,0,1,null,k)),l["ɵdid"](12,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵand"](16777216,null,0,1,null,D)),l["ɵdid"](14,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵeld"](15,0,null,0,3,"ion-text",[["color","medium"]],null,null,null,C.ac,C.X)),l["ɵdid"](16,49152,null,0,s.zb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{color:[0,"color"]},null),(n()(),l["ɵted"](17,0,["",""])),l["ɵppd"](18,1),(n()(),l["ɵeld"](19,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,C.ac,C.X)),l["ɵdid"](20,49152,null,0,s.zb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{color:[0,"color"]},null),(n()(),l["ɵted"](21,0,["","阅读"])),(n()(),l["ɵeld"](22,0,null,null,9,"ion-row",[],null,null,null,C.Ob,C.L)),l["ɵdid"](23,49152,null,0,s.lb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["ɵand"](16777216,null,0,1,null,E)),l["ɵdid"](25,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵand"](16777216,null,0,1,null,L)),l["ɵdid"](27,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵand"](16777216,null,0,1,null,Z)),l["ɵdid"](29,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵand"](16777216,null,0,1,null,T)),l["ɵdid"](31,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵeld"](32,0,null,null,0,"div",[["class","line"]],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,7,0,e.data.tag&&"null"!=e.data.tag),n(t,10,0,"dark","clear","small"),n(t,12,0,0==e.data.isdz),n(t,14,0,1==e.data.isdz),n(t,16,0,"medium"),n(t,20,0,"medium"),n(t,25,0,e.data.destination&&"null"!=e.data.destination),n(t,27,0,e.data.outtime&&"null"!=e.data.outtime),n(t,29,0,e.data.days&&"null"!=e.data.days),n(t,31,0,e.data.money&&"null"!=e.data.money&&"0"!=e.data.money)}),(function(n,t){var e=t.component;n(t,2,0,e.data.title);var o=l["ɵunv"](t,17,0,n(t,18,0,l["ɵnov"](t.parent,1),e.data.dznum));n(t,17,0,o),n(t,21,0,e.readnum)}))}function V(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,t){var e=t.component;n(t,0,0,e.assembleHTML(e.data.content))}))}function q(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,1,"app-pllist",[],null,[[null,"setItem"]],(function(n,t,e){var l=!0;return"setItem"===t&&(l=!1!==n.component.setplItem(e)&&l),l}),_.b,_.a)),l["ɵdid"](1,114688,null,0,P.a,[c.a,a.a,g.a,M.n],{data:[0,"data"],tid:[1,"tid"]},{setItem:"setItem"})],(function(n,t){n(t,1,0,t.context.$implicit,t.component.id)}),null)}function F(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,4,"div",[["class","app-pllist ion-padding-bottom ion-margin-bottom"]],null,null,null,null,null)),(n()(),l["ɵeld"](1,0,null,null,1,"div",[["class","hfnum"]],null,null,null,null,null)),(n()(),l["ɵted"](2,null,["","条回复"])),(n()(),l["ɵand"](16777216,null,null,1,null,q)),l["ɵdid"](4,278528,null,0,O.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,4,0,t.component.pllist)}),(function(n,t){n(t,2,0,t.component.data.plnum)}))}function B(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,1,"ion-backdrop",[],null,[[null,"ionBackdropTap"]],(function(n,t,e){var l=!0;return"ionBackdropTap"===t&&(l=!1!==n.component.clickdrop()&&l),l}),C.gb,C.d)),l["ɵdid"](1,49152,null,0,s.k,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null)],null,null)}function G(n){return l["ɵvid"](0,[l["ɵpid"](0,w.a,[]),l["ɵpid"](0,b.a,[]),l["ɵpid"](0,v.a,[]),l["ɵqud"](402653184,1,{mybox:0}),(n()(),l["ɵeld"](4,0,null,null,13,"ion-header",[["mode","ios"]],null,null,null,C.vb,C.s)),l["ɵdid"](5,49152,null,0,s.D,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"],translucent:[1,"translucent"]},null),(n()(),l["ɵeld"](6,0,null,0,11,"ion-toolbar",[["mode","ios"]],null,null,null,C.fc,C.cb)),l["ɵprd"](512,null,O["ɵNgClassImpl"],O["ɵNgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["ɵdid"](8,278528,null,0,O.NgClass,[O["ɵNgClassImpl"]],{ngClass:[0,"ngClass"]},null),l["ɵdid"](9,49152,null,0,s.Eb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"]},null),(n()(),l["ɵeld"](10,0,null,0,7,"div",[["class","search-bar"]],null,null,null,null,null)),(n()(),l["ɵeld"](11,0,null,null,1,"div",[["class","left"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goBack()&&l),l}),null,null)),(n()(),l["ɵeld"](12,0,null,null,0,"img",[["alt",""],["src","/assets/backbg.svg"]],null,null,null,null,null)),(n()(),l["ɵeld"](13,0,null,null,0,"div",[["class","center"]],null,null,null,null,null)),(n()(),l["ɵeld"](14,0,null,null,3,"div",[["class","right"]],null,null,null,null,null)),(n()(),l["ɵeld"](15,0,null,null,2,"div",[["class","round"]],null,null,null,null,null)),(n()(),l["ɵeld"](16,0,null,null,1,"ion-icon",[["mode","ios"],["name","more"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.edmit()&&l),l}),C.wb,C.t)),l["ɵdid"](17,49152,null,0,s.E,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),l["ɵeld"](18,0,null,null,14,"ion-content",[],null,[[null,"ionScroll"]],(function(n,t,e){var l=!0;return"ionScroll"===t&&(l=!1!==n.component.logScrolling(e)&&l),l}),C.rb,C.o)),l["ɵdid"](19,49152,null,0,s.w,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{fullscreen:[0,"fullscreen"],scrollEvents:[1,"scrollEvents"]},null),(n()(),l["ɵeld"](20,0,null,0,2,"div",[["class","banner"]],null,null,null,null,null)),(n()(),l["ɵand"](16777216,null,null,1,null,z)),l["ɵdid"](22,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵand"](16777216,null,0,1,null,S)),l["ɵdid"](24,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵeld"](25,0,[[1,0],["myBox",1]],0,3,"div",[["class","text-content"],["padding",""]],null,null,null,null,null)),l["ɵdid"](26,16384,null,0,s.f,[l.ElementRef],null,null),(n()(),l["ɵand"](16777216,null,null,1,null,V)),l["ɵdid"](28,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵand"](16777216,null,0,1,null,F)),l["ɵdid"](30,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵand"](16777216,null,0,1,null,B)),l["ɵdid"](32,16384,null,0,O.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["ɵeld"](33,0,null,null,5,"ion-footer",[],null,null,null,C.tb,C.q)),l["ɵdid"](34,49152,null,0,s.B,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["ɵeld"](35,0,null,0,3,"ion-toolbar",[],null,null,null,C.fc,C.cb)),l["ɵdid"](36,49152,null,0,s.Eb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["ɵeld"](37,0,null,0,1,"app-chatinputbox",[],null,[[null,"sub"],[null,"myfous"],[null,"mybulr"]],(function(n,t,e){var l=!0,o=n.component;return"sub"===t&&(l=!1!==o.sub(e)&&l),"myfous"===t&&(l=!1!==o.monfous()&&l),"mybulr"===t&&(l=!1!==o.monblur()&&l),l}),R.b,R.a)),l["ɵdid"](38,114688,null,0,x.a,[p.a,a.a,g.a],{username:[0,"username"]},{myfous:"myfous",mybulr:"mybulr",sub:"sub"})],(function(n,t){var e=t.component;n(t,5,0,"ios",!0),n(t,8,0,"show-"+e.toolbaropacity),n(t,9,0,"ios"),n(t,17,0,"ios","more"),n(t,19,0,!0,!0),n(t,22,0,e.data),n(t,24,0,e.data),n(t,28,0,e.data&&e.data.content),n(t,30,0,e.data),n(t,32,0,e.isshowDrop),n(t,38,0,e.seletename)}),null)}function H(n){return l["ɵvid"](0,[(n()(),l["ɵeld"](0,0,null,null,1,"app-yjcontent",[],null,null,null,G,I)),l["ɵdid"](1,114688,null,0,f,[s.Kb,j.b,u.a,c.a,r.a,p.a,M.a,h.a,d.a,g.a,a.a,s.b,s.a,i.a,M.n],null,null)],(function(n,t){n(t,1,0)}),null)}var J=l["ɵccf"]("app-yjcontent",f,H,{},{},[]),K=e("gIcY"),Y=e("hoFm"),U=e("iTUp"),W=e("FUS3"),A=e("j1ZV");e.d(t,"YjcontentPageModuleNgFactory",(function(){return X}));var X=l["ɵcmf"](m,[],(function(n){return l["ɵmod"]([l["ɵmpd"](512,l.ComponentFactoryResolver,l["ɵCodegenComponentFactoryResolver"],[[8,[y.a,J]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["ɵmpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[l.LOCALE_ID,[2,O["ɵangular_packages_common_common_a"]]]),l["ɵmpd"](4608,K.s,K.s,[]),l["ɵmpd"](4608,s.c,s.c,[l.NgZone,l.ApplicationRef]),l["ɵmpd"](4608,s.Jb,s.Jb,[s.c,l.ComponentFactoryResolver,l.Injector]),l["ɵmpd"](4608,s.Nb,s.Nb,[s.c,l.ComponentFactoryResolver,l.Injector]),l["ɵmpd"](4608,Y.a,Y.a,[]),l["ɵmpd"](1073742336,O.CommonModule,O.CommonModule,[]),l["ɵmpd"](1073742336,K.r,K.r,[]),l["ɵmpd"](1073742336,K.d,K.d,[]),l["ɵmpd"](1073742336,s.Gb,s.Gb,[]),l["ɵmpd"](1073742336,U.a,U.a,[]),l["ɵmpd"](1073742336,W.a,W.a,[]),l["ɵmpd"](1073742336,A.a,A.a,[]),l["ɵmpd"](1073742336,M.p,M.p,[[2,M.u],[2,M.n]]),l["ɵmpd"](1073742336,m,m,[]),l["ɵmpd"](1024,M.l,(function(){return[[{path:"",component:f}]]}),[])])}))},rGvg:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var l=e("mrSG"),o=e("N+K7"),i=e("CcnG"),a=function(){function n(n){this.http=n,this.clear()}return n.prototype.clear=function(){this.yjlist=[],this.gllist=[],this.zmlist=[],this.yjpageObj={page:1,num:20,type:1,isall:!1},this.glpageObj={page:1,num:20,type:1,isall:!1},this.zmpageObj={page:1,num:20,type:1,isall:!1}},n.prototype.getPqone=function(n,t){for(var e,l=0,o=(e=0===t?this.yjlist:1===t?this.gllist:this.zmlist).length;l<o;l++)if(e[l].id===n)return e[l];return null},n.prototype.editOne=function(n,t,e){for(var l,o=0,i=(l=0===t?this.yjlist:1===t?this.gllist:this.zmlist).length;o<i;o++)if(l[o].id===n){var a=l[o];a=Object.assign(a,e),l.splice(o,1,a);break}},n.prototype.addItem=function(n){this.reset(n).then((function(n){})).catch((function(n){}))},n.prototype.deleteone=function(n,t){for(var e,l=0,o=(e=0===t?this.yjlist:1===t?this.gllist:this.zmlist).length;l<o;l++)if(e[l].id===n){e.splice(l,1);break}},n.prototype.getyjList=function(){return 0===this.yjlist.length&&this.getListhttp(1).then((function(n){})).catch((function(n){})),this.yjlist},n.prototype.getglList=function(){return 0===this.gllist.length&&this.getListhttp(2).then((function(n){})).catch((function(n){})),this.gllist},n.prototype.getzmList=function(){return 0===this.zmlist.length&&this.getListhttp(3).then((function(n){})).catch((function(n){})),this.zmlist},n.prototype.reset=function(n){return l.__awaiter(this,void 0,void 0,(function(){return l.__generator(this,(function(t){switch(t.label){case 0:if(1!=n)return[3,5];this.yjpageObj.isall=!1,this.yjpageObj.page=1,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getListhttp(1,1)];case 2:return t.sent(),[3,4];case 3:return t.sent(),[2,!1];case 4:return[2,!0];case 5:if(2!=n)return[3,10];this.glpageObj.isall=!1,this.glpageObj.page=1,t.label=6;case 6:return t.trys.push([6,8,,9]),[4,this.getListhttp(2,1)];case 7:return t.sent(),[3,9];case 8:return t.sent(),[2,!1];case 9:return[2,!0];case 10:this.zmpageObj.isall=!1,this.zmpageObj.page=1,t.label=11;case 11:return t.trys.push([11,13,,14]),[4,this.getListhttp(3,1)];case 12:return t.sent(),[3,14];case 13:return t.sent(),[2,!1];case 14:return[2,!0]}}))}))},n.prototype.addList=function(n){return l.__awaiter(this,void 0,void 0,(function(){return l.__generator(this,(function(t){switch(t.label){case 0:if(1!=n)return[3,5];if(this.yjpageObj.isall)return[2,!1];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getListhttp(1)];case 2:return t.sent(),[3,4];case 3:return t.sent(),[2,!1];case 4:return[2,!0];case 5:if(2!=n)return[3,10];if(this.glpageObj.isall)return[2,!1];t.label=6;case 6:return t.trys.push([6,8,,9]),[4,this.getListhttp(2)];case 7:return t.sent(),[3,9];case 8:return t.sent(),[2,!1];case 9:return[2,!0];case 10:if(this.zmpageObj.isall)return[2,!1];t.label=11;case 11:return t.trys.push([11,13,,14]),[4,this.getListhttp(3)];case 12:return t.sent(),[3,14];case 13:return t.sent(),[2,!1];case 14:return[2,!0]}}))}))},n.prototype.getListhttp=function(n,t){var e,l=this;switch(n){case 1:e=Object.assign({},this.yjpageObj);break;case 2:e=Object.assign({},this.glpageObj);break;case 3:e=Object.assign({},this.zmpageObj)}return e.type=n+1,new Promise((function(o,i){l.http.getData(l.http.getpqlist,e).subscribe((function(i){var a,s,u;console.log(i),console.log(i);var c=i.result;switch(n){case 1:t&&(l.yjlist.length=0),(a=l.yjlist).push.apply(a,c.result),!c.result.length||c.result.length<e.num?l.yjpageObj.isall=!0:l.yjpageObj.page++;break;case 2:t&&(l.gllist.length=0),(s=l.gllist).push.apply(s,c.result),!c.result.length||c.result.length<e.num?l.glpageObj.isall=!0:l.glpageObj.page++;break;case 3:t&&(l.zmlist.length=0),(u=l.zmlist).push.apply(u,c.result),!c.result.length||c.result.length<e.num?l.zmpageObj.isall=!0:l.zmpageObj.page++}o(!0)}),(function(n){console.log(n),i(!1)}))}))},n.ngInjectableDef=i["ɵɵdefineInjectable"]({factory:function(){return new n(i["ɵɵinject"](o.a))},token:n,providedIn:"root"}),n}()}}]);