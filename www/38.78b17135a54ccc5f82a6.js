(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{DIrx:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=t("ZZ/e"),o=t("N+K7"),u=t("A+5Q"),r=t("Ud6+"),c=function(){function n(n,l,t,e,i,o){this.nav=n,this.route=l,this.newslist=t,this.http=e,this.topage=i,this.sanitizer=o}return n.prototype.ngOnInit=function(){this.type=1,this.list=this.newslist.getList(),this.tzgglist=this.newslist.getTzlist(),console.log(this.list)},n.prototype.ionViewWillEnter=function(){var n=this;0===this.tzgglist.length&&this.getTznews().then(function(l){l<n.newslist.tzggPageobj.limit&&n.newslist.setTznewsAll()}).catch(function(n){}),0===this.list.length&&this.getNewslist().then(function(l){l<n.newslist.newsPageobj.limit&&n.newslist.setNewsall()}).catch(function(n){})},n.prototype.assembleHTML=function(n){return this.sanitizer.bypassSecurityTrustHtml(n)},n.prototype.getNewslist=function(){var n=this;return new Promise(function(l,t){var e=n.newslist.getNewspage();n.http.getData(n.http.getMynewslist,e).subscribe(function(t){0===e.page&&n.newslist.setNewsnum(Number(t.num)),n.newslist.setNewslist(t.data),l(t.data.length)},function(n){t()})})},n.prototype.getTznews=function(){var n=this;return new Promise(function(l,t){var e=n.newslist.getTzpager();n.http.getData(n.http.getMynews,e).subscribe(function(t){n.newslist.setTzlist(t.data),0===e.page&&n.newslist.setTznum(t.num),l(t.data.length)},function(n){t()})})},n.prototype.goBack=function(){this.nav.back()},n.prototype.doRefresh=function(n){var l=this;this.newslist.czPage(this.type),1===this.type?this.getNewslist().then(function(t){t<l.newslist.newsPageobj.limit&&l.newslist.setNewsall(),n.target.complete()}).catch(function(l){n.target.complete()}):this.getTznews().then(function(t){t<l.newslist.tzggPageobj.limit&&l.newslist.setTznewsAll(),n.target.complete()}).catch(function(l){n.target.complete()})},n.prototype.loadData=function(n){var l=this;1===this.type?this.newslist.newsPageobj.all?n.target.complete():(this.newslist.setNewspager(1),this.getNewslist().then(function(t){t<l.newslist.newsPageobj.limit&&l.newslist.setNewsall(),n.target.complete()}).catch(function(){l.newslist.setNewspager(-1),n.target.complete()})):this.newslist.tzggPageobj.all?n.target.complete():(this.newslist.setTzpager(1),this.getTznews().then(function(t){t<l.newslist.tzggPageobj.limit&&l.newslist.setTznewsAll(),n.target.complete()}).catch(function(){l.newslist.setTzpager(-1),n.target.complete()}))},n.prototype.goNews=function(n){var l=n.arr[n.arr.length-1];this.topage.toPage(17,n.id,l.shopName||l.uname)},n.prototype.goTzcontent=function(n){"0"===n.isread&&this.setisread(n.id),this.topage.toPage(18,n.id)},n.prototype.unread=function(n){var l=this;this.http.getData(this.http.setMynewsList,{shopId:n}).subscribe(function(t){l.newslist.clearShopid(n)},function(n){})},n.prototype.setisread=function(n){var l=this;this.http.getData(this.http.setMynews,{id:n}).subscribe(function(t){l.newslist.setTzyd(n)},function(n){})},n.prototype.deleteItem=function(n){var l=this;this.http.getData(this.http.DeleteMynewslist,{shopId:n}).subscribe(function(t){l.newslist.deleteItem(n)},function(n){})},n}(),a=function(){return function(){}}(),s=t("pMnS"),d=t("oBZk"),g=t("YYyv"),f=t("+2Tt"),p=t("Ip0R"),m=t("n/qi"),h=function(){function n(){}return n.prototype.transform=function(n,l){for(var t=0;t<l.length;t++){var e=Number(l[t].time);if(e===n&&0===t)return this.timeDownItem(n);if(0!==t&&e===n&&n-l[t-1].time>24e4)return this.timeDownItem(n);if(0!==t&&this.istwoDay(n,l[t-1].time))return this.timeDownItem(n)}return""},n.prototype.getTime=function(n){var l=new Date(n);console.log(n),console.log(l);var t=l.getHours(),e=l.getMinutes();return(t<10?"0"+t.toString():t)+":"+(e<10?"0"+e.toString():e)},n.prototype.getprevTime=function(n){return"\u6628\u5929"},n.prototype.getweekTime=function(n){return"\u661f\u671f"+new Date(n).getDay()},n.prototype.getoldTime=function(n){var l=new Date(n),t=l.getFullYear(),e=l.getMonth()+1,i=l.getDate();return"\u661f\u671f"+t+"\u5e74"+(e<10?"0"+e.toString():e)+"\u6708"+(i<10?"0"+i.toString():i)+"\u65e5"},n.prototype.timeDownItem=function(n){var l=new Date((new Date).setHours(0,0,0,0)).getTime();return n>=l&&n<l+864e5?this.getTime(n):n<l&&n>=l-864e5?this.getprevTime(n):n<l-864e5&&n>=l-6048e5?this.getweekTime(n):this.getoldTime(n)},n.prototype.istwoDay=function(n,l){if(new Date(n).getDate()!=new Date(l).getDate())return!0},n}(),w=t("uJMW"),v=t("ZYCi"),b=t("ZYjt"),C=e["\u0275crt"]({encapsulation:0,styles:[[".type-box[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.type-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{font-size:var(--ion-text);color:#333;margin-right:50px;position:relative}.type-box[_ngcontent-%COMP%] > div.active[_ngcontent-%COMP%]{font-size:var(--ion-title);color:var(--ion-color-dark);font-weight:600}.type-box[_ngcontent-%COMP%] > div.active[_ngcontent-%COMP%]::after{content:'';display:block;background:var(--ion-color-linegradient);height:3px;width:60%;border-radius:1.5px;margin-left:20%}.type-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;left:110%}.time[_ngcontent-%COMP%]{text-align:center;font-size:var(--ion-sm-text);margin-bottom:6px}.my-item[_ngcontent-%COMP%]{background-color:var(--ion-color-light);border-radius:5px;padding:8px;width:100%}.my-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:var(--ion-sm-text)}.my-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:7px}.my-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:var(--ion-title);color:var(--ion-color-dark)}.my-item[_ngcontent-%COMP%]   .tz-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch}.my-item[_ngcontent-%COMP%]   .tz-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px}.my-item[_ngcontent-%COMP%]   .tz-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;background-color:#fff;overflow:hidden}.my-item[_ngcontent-%COMP%]   .tz-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:var(--ion-text);color:var(--ion-color-dark);height:40px;line-height:20px;overflow:hidden;margin:10px 10px 0;width:calc(100% - 20px)}.my-item[_ngcontent-%COMP%]   .tz-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .ts[_ngcontent-%COMP%]{font-size:var(--ion-sm-text);color:var(--ion-color-medium);margin:0 10px 10px;height:20px;line-height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 20px)}.my-item[_ngcontent-%COMP%]   .tz-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .ts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0!important}.my-item[_ngcontent-%COMP%]   .tz-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","danger"]],null,null,null,d.hb,d.e)),e["\u0275did"](1,49152,null,0,i.l,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"]},null),(n()(),e["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,"danger")},function(n,l){n(l,2,0,l.component.newslist.allnum)})}function y(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","danger"]],null,null,null,d.hb,d.e)),e["\u0275did"](1,49152,null,0,i.l,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"]},null),(n()(),e["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,"danger")},function(n,l){n(l,2,0,l.component.newslist.tzallnum)})}function R(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-nomore",[],null,null,null,g.b,g.a)),e["\u0275did"](1,114688,null,0,f.a,[],null,null)],function(n,l){n(l,1,0)},null)}function N(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit.arr[l.parent.context.$implicit.arr.length-1].content)})}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["[\u56fe\u7247]"]))],null,null)}function D(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["[\u5546\u54c1]"]))],null,null)}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","danger"]],null,null,null,d.hb,d.e)),e["\u0275did"](1,49152,null,0,i.l,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"]},null),(n()(),e["\u0275ted"](2,0,["",""]))],function(n,l){n(l,1,0,"danger")},function(n,l){n(l,2,0,l.parent.context.$implicit.num)})}function I(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,31,"ion-item-sliding",[],null,null,null,d.Db,d.B)),e["\u0275did"](1,49152,null,0,i.O,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](2,0,null,0,21,"ion-item",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goNews(n.context.$implicit)&&e),e},d.Eb,d.y)),e["\u0275did"](3,49152,null,0,i.J,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](4,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,d.eb,d.b)),e["\u0275did"](5,49152,null,0,i.h,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](6,0,null,0,1,"img",[["alt",""],["class","header"]],[[8,"src",4]],null,null,null,null)),e["\u0275ppd"](7,2),(n()(),e["\u0275eld"](8,0,null,0,8,"ion-label",[],null,null,null,d.Fb,d.C)),e["\u0275did"](9,49152,null,0,i.P,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275ted"](10,0,[" "," "])),(n()(),e["\u0275and"](16777216,null,0,1,null,N)),e["\u0275did"](12,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,0,1,null,M)),e["\u0275did"](14,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,0,1,null,D)),e["\u0275did"](16,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](17,0,null,0,6,"ion-note",[["slot","end"]],null,null,null,d.Ib,d.F)),e["\u0275did"](18,49152,null,0,i.ab,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](19,0,null,0,2,"div",[["class","time"]],null,null,null,null,null)),(n()(),e["\u0275ted"](20,null,["",""])),e["\u0275ppd"](21,2),(n()(),e["\u0275and"](16777216,null,0,1,null,P)),e["\u0275did"](23,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](24,0,null,0,7,"ion-item-options",[["side","end"]],null,null,null,d.Cb,d.A)),e["\u0275did"](25,49152,null,0,i.N,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{side:[0,"side"]},null),(n()(),e["\u0275eld"](26,0,null,0,2,"ion-item-option",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.unread(n.context.$implicit.arr[n.context.$implicit.arr.length-1].shopId)&&e),e},d.Bb,d.z)),e["\u0275did"](27,49152,null,0,i.M,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275ted"](-1,0,["\u6807\u4e3a\u5df2\u8bfb"])),(n()(),e["\u0275eld"](29,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.deleteItem(n.context.$implicit.arr[n.context.$implicit.arr.length-1].shopId)&&e),e},d.Bb,d.z)),e["\u0275did"](30,49152,null,0,i.M,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"]},null),(n()(),e["\u0275ted"](-1,0,["\u5220\u9664"]))],function(n,l){n(l,12,0,1==l.context.$implicit.arr[l.context.$implicit.arr.length-1].type),n(l,14,0,2==l.context.$implicit.arr[l.context.$implicit.arr.length-1].type),n(l,16,0,3==l.context.$implicit.arr[l.context.$implicit.arr.length-1].type),n(l,23,0,l.context.$implicit.num&&l.context.$implicit.num>0),n(l,25,0,"end"),n(l,30,0,"danger")},function(n,l){var t=l.component,i=e["\u0275unv"](l,6,0,n(l,7,0,e["\u0275nov"](l.parent,0),l.context.$implicit.arr[0].theader,t.http.zdomain));n(l,6,0,i),n(l,10,0,l.context.$implicit.arr[0].shopName||l.context.$implicit.arr[l.context.$implicit.arr.length-1].tname);var o=e["\u0275unv"](l,20,0,n(l,21,0,e["\u0275nov"](l.parent,1),l.context.$implicit.arr[l.context.$implicit.arr.length-1].time,l.context.$implicit.arr));n(l,20,0,o)})}function z(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-nomore",[],null,null,null,g.b,g.a)),e["\u0275did"](1,114688,null,0,f.a,[],null,null)],function(n,l){n(l,1,0)},null)}function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,d.ac,d.X)),e["\u0275did"](1,49152,null,0,i.zb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"]},null),(n()(),e["\u0275ted"](-1,0,["*"]))],function(n,l){n(l,1,0,"danger")},null)}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,17,"div",[["class","my-item ion-margin-bottom"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goTzcontent(n.context.$implicit)&&e),e},null,null)),(n()(),e["\u0275eld"](1,0,null,null,8,"div",[["class","title"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](4,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275ted"](-1,null,["\u5e73\u53f0\u901a\u77e5"])),(n()(),e["\u0275eld"](6,0,null,null,3,"ion-text",[["color","tertiary"]],null,null,null,d.ac,d.X)),e["\u0275did"](7,49152,null,0,i.zb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"]},null),(n()(),e["\u0275ted"](8,0,["",""])),e["\u0275ppd"](9,1),(n()(),e["\u0275eld"](10,0,null,null,7,"div",[["class","tz-content"]],null,null,null,null,null)),(n()(),e["\u0275eld"](11,0,null,null,0,"img",[["alt",""],["src","https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"]],null,null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,null,5,"div",[["class","right"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),e["\u0275ted"](14,null,["",""])),(n()(),e["\u0275eld"](15,0,null,null,2,"ion-text",[["color","tertiary"]],null,null,null,d.ac,d.X)),e["\u0275did"](16,49152,null,0,i.zb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{color:[0,"color"]},null),(n()(),e["\u0275ted"](-1,0,["\u6765\u81ea\u5e73\u53f0"]))],function(n,l){n(l,4,0,"0"===l.context.$implicit.isread),n(l,7,0,"tertiary"),n(l,16,0,"tertiary")},function(n,l){var t=e["\u0275unv"](l,8,0,n(l,9,0,e["\u0275nov"](l.parent,2),l.context.$implicit.last_send));n(l,8,0,t),n(l,14,0,l.context.$implicit.title||l.context.$implicit.email_content)})}function T(n){return e["\u0275vid"](0,[e["\u0275pid"](0,m.a,[]),e["\u0275pid"](0,h,[]),e["\u0275pid"](0,w.a,[]),(n()(),e["\u0275eld"](3,0,null,null,12,"ion-header",[["mode","ios"]],null,null,null,d.vb,d.s)),e["\u0275did"](4,49152,null,0,i.D,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"]},null),(n()(),e["\u0275eld"](5,0,null,0,10,"ion-toolbar",[["mode","ios"]],null,null,null,d.fc,d.cb)),e["\u0275did"](6,49152,null,0,i.Eb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"]},null),(n()(),e["\u0275eld"](7,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,d.jb,d.g)),e["\u0275did"](8,49152,null,0,i.n,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](9,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e},d.ib,d.f)),e["\u0275did"](10,49152,null,0,i.m,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](11,0,null,0,1,"ion-icon",[["mode","ios"],["name","arrow-back"]],null,null,null,d.wb,d.t)),e["\u0275did"](12,49152,null,0,i.E,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"],name:[1,"name"]},null),(n()(),e["\u0275eld"](13,0,null,0,2,"ion-title",[],null,null,null,d.dc,d.ab)),e["\u0275did"](14,49152,null,0,i.Cb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275ted"](15,0,["",""])),(n()(),e["\u0275eld"](16,0,null,null,35,"ion-content",[["class","ion-padding"]],null,null,null,d.rb,d.o)),e["\u0275did"](17,49152,null,0,i.w,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](18,0,null,0,3,"ion-refresher",[["pullFactor","0.5"],["pullMax","200"],["pullMin","100"],["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,t){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.doRefresh(t)&&e),e},d.Nb,d.J)),e["\u0275did"](19,49152,null,0,i.fb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{pullFactor:[0,"pullFactor"],pullMax:[1,"pullMax"],pullMin:[2,"pullMin"]},null),(n()(),e["\u0275eld"](20,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","\u66f4\u65b0\u4e2d..."]],null,null,null,d.Mb,d.K)),e["\u0275did"](21,49152,null,0,i.gb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),e["\u0275eld"](22,0,null,0,12,"div",[["class","type-box ion-margin-bottom"]],null,null,null,null,null)),(n()(),e["\u0275eld"](23,0,null,null,5,"div",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==(n.component.type=1)&&e),e},null,null)),e["\u0275did"](24,278528,null,0,p.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),e["\u0275pod"](25,{active:0}),(n()(),e["\u0275ted"](-1,null,["\u6d88\u606f"])),(n()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](28,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](29,0,null,null,5,"div",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==(n.component.type=2)&&e),e},null,null)),e["\u0275did"](30,278528,null,0,p.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),e["\u0275pod"](31,{active:0}),(n()(),e["\u0275ted"](-1,null,["\u901a\u77e5"])),(n()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](34,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](35,0,null,0,6,"div",[],[[8,"hidden",0]],null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](37,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](38,0,null,null,3,"ion-list",[],null,null,null,d.Hb,d.D)),e["\u0275did"](39,49152,null,0,i.Q,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275and"](16777216,null,0,1,null,I)),e["\u0275did"](41,278528,null,0,p.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](42,0,null,0,5,"div",[["class","tzgg"]],[[8,"hidden",0]],null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,z)),e["\u0275did"](44,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](45,0,null,null,2,"div",[["class","my-list"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](47,278528,null,0,p.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](48,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],function(n,l,t){var e=!0;return"ionInfinite"===l&&(e=!1!==n.component.loadData(t)&&e),e},d.zb,d.v)),e["\u0275did"](49,49152,null,0,i.G,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{threshold:[0,"threshold"]},null),(n()(),e["\u0275eld"](50,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,d.yb,d.w)),e["\u0275did"](51,49152,null,0,i.H,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],function(n,l){var t=l.component;n(l,4,0,"ios"),n(l,6,0,"ios"),n(l,12,0,"ios","arrow-back"),n(l,19,0,"0.5","200","100"),n(l,21,0,"arrow-dropdown","Pull to refresh","circles","\u66f4\u65b0\u4e2d...");var e=n(l,25,0,1===t.type);n(l,24,0,e),n(l,28,0,t.newslist.allnum>0);var i=n(l,31,0,2===t.type);n(l,30,0,i),n(l,34,0,t.newslist.tzallnum>0),n(l,37,0,0===t.list.length),n(l,41,0,t.list),n(l,44,0,0===t.tzgglist.length),n(l,47,0,t.tzgglist),n(l,49,0,"100px"),n(l,51,0,"bubbles","Loading more data...")},function(n,l){var t=l.component;n(l,15,0,1===t.type?"\u6d88\u606f":"\u901a\u77e5"),n(l,35,0,1!==t.type),n(l,42,0,2!==t.type)})}function k(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-news",[],null,null,null,T,C)),e["\u0275did"](1,114688,null,0,c,[i.Kb,v.m,u.a,o.a,r.a,b.c],null,null)],function(n,l){n(l,1,0)},null)}var E=e["\u0275ccf"]("app-news",c,k,{},{},[]),Z=t("gIcY"),$=t("hoFm"),F=t("iTUp"),j=t("FUS3"),V=t("j1ZV");t.d(l,"NewsPageModuleNgFactory",function(){return S});var S=e["\u0275cmf"](a,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,E]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[e.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,Z.t,Z.t,[]),e["\u0275mpd"](4608,i.c,i.c,[e.NgZone,e.ApplicationRef]),e["\u0275mpd"](4608,i.Jb,i.Jb,[i.c,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,i.Nb,i.Nb,[i.c,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,$.a,$.a,[]),e["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),e["\u0275mpd"](1073742336,Z.q,Z.q,[]),e["\u0275mpd"](1073742336,Z.d,Z.d,[]),e["\u0275mpd"](1073742336,i.Gb,i.Gb,[]),e["\u0275mpd"](1073742336,F.a,F.a,[]),e["\u0275mpd"](1073742336,j.a,j.a,[]),e["\u0275mpd"](1073742336,V.a,V.a,[]),e["\u0275mpd"](1073742336,v.o,v.o,[[2,v.u],[2,v.m]]),e["\u0275mpd"](1073742336,a,a,[]),e["\u0275mpd"](1024,v.k,function(){return[[{path:"",component:c}]]},[])])})},FUS3:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},hoFm:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("CcnG"),i=function(){function n(){}return n.prototype.getEmoji=function(){return"\ud83d\ude00 \ud83d\ude03 \ud83d\ude04 \ud83d\ude01 \ud83d\ude06 \ud83d\ude05 \ud83d\ude02 \ud83e\udd23 \ud83d\ude0a \ud83d\ude07 \ud83d\ude42 \ud83d\ude43 \ud83d\ude09 \ud83d\ude0c \ud83d\ude0d \ud83d\ude18 \ud83d\ude17 \ud83d\ude19 \ud83d\ude1a \ud83d\ude0b \ud83d\ude1c \ud83d\ude1d \ud83d\ude1b \ud83e\udd11 \ud83e\udd17 \ud83e\udd13 \ud83d\ude0e \ud83e\udd21 \ud83e\udd20 \ud83d\ude0f \ud83d\ude12 \ud83d\ude1e \ud83d\ude14 \ud83d\ude1f \ud83d\ude15 \ud83d\ude41 \u2639\ufe0f \ud83d\ude23 \ud83d\ude16 \ud83d\ude2b \ud83d\ude29 \ud83d\ude24 \ud83d\ude20 \ud83d\ude21 \ud83d\ude36 \ud83d\ude10 \ud83d\ude11 \ud83d\ude2f \ud83d\ude26 \ud83d\ude27 \ud83d\ude2e \ud83d\ude32 \ud83d\ude35 \ud83d\ude33 \ud83d\ude31 \ud83d\ude28 \ud83d\ude30 \ud83d\ude22 \ud83d\ude25 \ud83e\udd24 \ud83d\ude2d \ud83d\ude13 \ud83d\ude2a \ud83d\ude34 \ud83d\ude44 \ud83e\udd14 \ud83e\udd25 \ud83d\ude2c \ud83e\udd10 \ud83e\udd22 \ud83e\udd27 \ud83d\ude37 \ud83e\udd12 \ud83e\udd15 \ud83d\ude08 \ud83d\udc7f \ud83d\udc79 \ud83d\udc7a \ud83d\udca9 \ud83d\udc7b \ud83d\udc80 \u2620\ufe0f \ud83d\udc7d \ud83d\udc7e \ud83e\udd16 \ud83c\udf83 \ud83d\ude3a \ud83d\ude38 \ud83d\ude39 \ud83d\ude3b \ud83d\ude3c \ud83d\ude3d \ud83d\ude40 \ud83d\ude3f \ud83d\ude3e \ud83d\udc50 \ud83d\ude4c \ud83d\udc4f \ud83d\ude4f \ud83e\udd1d \ud83d\udc4d \ud83d\udc4e \ud83d\udc4a \u270a \ud83e\udd1b \ud83e\udd1c \ud83e\udd1e \u270c\ufe0f \ud83e\udd18 \ud83d\udc4c \ud83d\udc48 \ud83d\udc49 \ud83d\udc46 \ud83d\udc47 \u261d\ufe0f \u270b \ud83e\udd1a \ud83d\udd90 \ud83d\udd96 \ud83d\udc4b \ud83e\udd19 \ud83d\udcaa \ud83d\udd95 \u270d\ufe0f \ud83e\udd33 \ud83d\udc85 \ud83d\udd96 \ud83d\udc84 \ud83d\udc8b \ud83d\udc44 \ud83d\udc45 \ud83d\udc42 \ud83d\udc43 \ud83d\udc63 \ud83d\udc41 \ud83d\udc40 \ud83d\udde3 \ud83d\udc64 \ud83d\udc65 \ud83d\udc76 \ud83d\udc66 \ud83d\udc67 \ud83d\udc68 \ud83d\udc69 \ud83d\udc71\u200d\u2640\ufe0f \ud83d\udc71 \ud83d\udc74 \ud83d\udc75 \ud83d\udc72 \ud83d\udc73\u200d\u2640\ufe0f \ud83d\udc73 \ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udc6e \ud83d\udc77\u200d\u2640\ufe0f \ud83d\udc77".split(" ")},n.ngInjectableDef=e.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}()},iTUp:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},j1ZV:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},"n/qi":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n.prototype.transform=function(n,l){return console.log(l),n?n.startsWith("http")||n.startsWith("data:image")||n.startsWith("file:///")||n.startsWith("cdvfile://")?n:n.startsWith("/mobile")&&l&&l.endsWith("mobile/")?l+n.substring(7):n.startsWith("./../")?l+n.substring(5):l+n:"../../assets/mrtx.jpg"},n}()}}]);