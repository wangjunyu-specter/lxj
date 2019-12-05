(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.html":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-08-03 14:52:31\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-12-04 19:20:32\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar  mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <ion-title *ngIf=\"isshow\">{{user.user_name}}</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"openPage(5)\">\r\n        <!--<ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>-->\r\n        <img src=\"./assets/center-arrow.svg\">\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n\r\n  <div class=\"center-top\" [ngClass]=\"{'android-center-top': isandroid}\">\r\n    <!--<div class=\"top-right\">-->\r\n      <!--<ion-button fill=\"clear\">-->\r\n        <!--&lt;!&ndash;<ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>&ndash;&gt;-->\r\n        <!--<img src=\"./assets/center-arrow.svg\">-->\r\n      <!--</ion-button>-->\r\n    <!--</div>-->\r\n    <!--<img src=\"./assets/centerhead.svg\">-->\r\n    <!-- <img src=\"../../assets/centerhead.svg\" class=\"top-bg\" alt=\"\"> -->\r\n    <div class=\"box\" padding>\r\n      <div class=\"header\">\r\n        <ion-avatar>\r\n          <img [src]=\"user.headimg  | imgsrc: http.domain\">\r\n        </ion-avatar>\r\n        <div class=\"right\">\r\n          <div class=\"name\">\r\n            {{user.user_name}}\r\n            <ion-button fill=\"clear\" size=\"small\" (click)=\"openPage(14)\">\r\n              修改资料\r\n              <img src=\"./assets/centerarrow.svg\">\r\n            </ion-button>\r\n          </div>\r\n          <div class=\"des\">\r\n            <span>LV.{{user.user_rank}}</span>\r\n            {{user.lxdj}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer\">\r\n        <ion-grid>\r\n          <ion-row *ngIf=\"centeruser\">\r\n            <ion-col (click)=\"openPage(12)\">\r\n              <span>{{centeruser.gznum | setnum}}</span><span>关注</span>\r\n            </ion-col>\r\n            <ion-col (click)=\"openPage(13)\">\r\n              <span>{{centeruser.fsnum | setnum}}</span><span>粉丝</span>\r\n            </ion-col>\r\n            <ion-col>\r\n              <span>{{centeruser.dznum | setnum}}</span><span>获赞</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"topnav\">\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col (click)=\"openPage(1)\"><img src=\"./assets/wdxc.svg\"><span>我的行程</span></ion-col>\r\n            <ion-col (click)=\"openPage(2)\"><img src=\"./assets/wdsc.svg\"><span>行程收藏</span></ion-col>\r\n            <ion-col (click)=\"openPage(3)\"><img src=\"./assets/yhq.svg\"><span>优惠券</span></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"xcts-box\" *ngIf=\"centeruser\">\r\n    <ion-card class=\"tis\" mode=\"ios\" *ngFor=\"let item of centeruser.xclist; let i = index\">\r\n      <ion-card-content>\r\n        <div class=\"my-title\">\r\n          <img src=\"../assets/znxl.png\">\r\n          <img src=\"../assets/centercha.svg\" (click)=\"closeXlts(i)\">\r\n        </div>\r\n        <span *ngIf=\"item.timeend>0 && item.timetype == 2\">距离行程[{{item.setouttime}}]出发还有<ion-text color=\"success\">{{item.timeend}}</ion-text>天，请做好安排哦！ <ion-text color=\"primary\" (click)=\"openOtherpage({type: 11, url: item.order_sn})\">去看看</ion-text></span>\r\n        <span *ngIf=\"item.timeend>0 && item.timetype == 1 && item.timeend > 2\">距离行程[{{item.setouttime}}]出发还有<ion-text color=\"success\">{{item.timeend}}</ion-text>小时，请做好安排哦！ <ion-text color=\"primary\" (click)=\"openOtherpage({type: 11, url: item.order_sn})\">去看看</ion-text></span>\r\n        <span *ngIf=\"item.timeend>0 && item.timetype == 1 && item.timeend <= 2\">行程[{{item.setouttime}}]<ion-text color=\"danger\">即将出发</ion-text>，请做好安排哦！ <ion-text color=\"primary\" (click)=\"openOtherpage({type: 11, url: item.order_sn})\">去看看</ion-text></span>\r\n        <span *ngIf=\"item.timeend == 0\">行程[{{item.setouttime}}]今日出发，请尽快集合哦！ <ion-text color=\"primary\" (click)=\"openOtherpage({type: 11, url: item.order_sn})\">去看看</ion-text></span>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <ion-card mode=\"ios\" class=\"cygj\">\r\n    <ion-card-header>\r\n      <ion-card-title>常用工具</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col (click)=\"openPage(8)\"><img src=\"./assets/jfsc.svg\"><span>购物车</span></ion-col>\r\n        <ion-col (click)=\"openPage(10)\"><img src=\"./assets/allorder.svg\"><span>全部订单</span></ion-col>\r\n        <ion-col (click)=\"openPage(16)\"><img src=\"./assets/allorder.svg\"><span>退款/售后</span></ion-col>\r\n        <ion-col (click)=\"openPage(4)\"><img src=\"./assets/wddp.svg\"><span>我的收藏</span></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col (click)=\"openPage(11)\"><img src=\"./assets/wdfb.svg\"><span>我的发布</span></ion-col>\r\n        <ion-col (click)=\"openPage(15)\"><img src=\"./assets/wdcg.svg\"><span>我的草稿</span></ion-col>\r\n        <ion-col (click)=\"openPage(9)\"><img src=\"./assets/lljl.svg\"><span>浏览记录</span></ion-col>\r\n        <ion-col><img src=\"./assets/kf.svg\"><span>客服服务</span></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"3\" (click)=\"hzqt()\"><img src=\"./assets/hzqt.svg\"><span>合作洽谈</span></ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card mode=\"ios\" class=\"hdbox\" *ngIf=\"centeruser && centeruser['advertisement'] && centeruser['advertisement'].length > 0\">\r\n    <ion-card-header>\r\n      <ion-card-title>活动中心</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let item of centeruser['advertisement']\" (click)=\"openOtherpage(item)\">\r\n          <!--<div class=\"box\">-->\r\n            <!--<div class=\"left\">-->\r\n              <!--<div class=\"title\">分享有礼</div>-->\r\n              <!--<div class=\"des\">邀请好友<ion-text color=\"danger\">得红包</ion-text></div>-->\r\n            <!--</div>-->\r\n            <!--<img src=\"../assets/share.svg\">-->\r\n          <!--</div>-->\r\n          <!--<div class=\"box\">-->\r\n            <!--<div class=\"left\">-->\r\n              <!--<div class=\"title\">有奖问卷</div>-->\r\n              <!--<div class=\"des\">快来参与问卷调查</div>-->\r\n            <!--</div>-->\r\n            <!--<img src=\"../assets/yjwd.svg\">-->\r\n          <!--</div>-->\r\n          <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n  --opacity: 0; }\n  ion-toolbar ion-buttons {\n    --opacity: 1; }\n  ion-toolbar ion-buttons img {\n      width: 20px; }\n  ion-toolbar ion-icon {\n    color: #fff; }\n  ion-toolbar ion-title {\n    color: #fff; }\n  .android-center-top {\n  background: url('centerhead.svg') left top no-repeat !important;\n  background-size: 100% 100% !important;\n  -webkit-background-size: 100% 100% !important; }\n  .center-top {\n  position: relative;\n  margin-top: calc(var(--ion-platform-margin-top) - 5px);\n  z-index: 0;\n  height: 215px;\n  background: url('centerhead.svg') left top no-repeat; }\n  .center-top .box {\n    position: absolute;\n    width: 100%;\n    top: calc(26px + var(--ion-android-padding-top));\n    display: flex;\n    height: calc(100% - 61px);\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    color: #fff; }\n  .center-top .box .header {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center; }\n  .center-top .box .right {\n      flex: 1;\n      padding-left: 10px; }\n  .center-top .box .name {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      font-size: var(--ion-big-title); }\n  .center-top .box .name ion-button {\n        font-size: var(--ion-sm-text);\n        --color: #fff; }\n  .center-top .box .name ion-button img {\n          width: 10px; }\n  .center-top .box .des {\n      font-size: var(--ion-sm-text); }\n  .center-top .box .des span {\n        background-color: rgba(255, 255, 255, 0.3);\n        padding: 1px 3px;\n        border-radius: 3px; }\n  .center-top .box .footer {\n      width: 100%; }\n  .center-top .box .footer ion-col {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; }\n  .center-top .box .footer ion-col span:first-of-type {\n          font-size: var(--ion-title); }\n  .center-top .box .footer ion-col span:last-of-type {\n          font-size: var(--ion-sm-text); }\n  .topnav {\n  margin-top: -40px;\n  position: relative;\n  z-index: 1; }\n  .topnav ion-card {\n    --background: #fff; }\n  .topnav ion-card ion-grid, .topnav ion-card ion-col {\n      padding: 0; }\n  .topnav ion-card ion-col {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: var(--ion-text); }\n  .topnav ion-card img {\n      width: 28px; }\n  .tis .my-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px; }\n  .tis .my-title img:first-of-type {\n    width: 73px; }\n  .tis .my-title img:last-of-type {\n    width: 14px; }\n  .tis ion-card-content {\n  font-size: var(--ion-text); }\n  ion-card {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  ion-card-title {\n  font-size: var(--ion-title); }\n  ion-card-header {\n  padding-bottom: 0; }\n  .hdbox ion-card-content ion-row ion-col {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative; }\n  .hdbox ion-card-content ion-row ion-col .box {\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .hdbox ion-card-content ion-row ion-col .box .title {\n      font-size: var(--ion-sm-text);\n      font-weight: 600;\n      color: var(--ion-color-dark); }\n  .hdbox ion-card-content ion-row ion-col .box .des {\n      font-size: var(--ion-sm-text);\n      color: var(--ion-color-medium); }\n  .hdbox ion-card-content ion-row ion-col .box img {\n      width: 45px; }\n  .cygj ion-card-content ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--ion-sm-text); }\n  .cygj ion-card-content ion-col img {\n    width: 26px; }\n  .show-0 {\n  --opacity: 0; }\n  .show-1 {\n  --opacity: 0.01; }\n  .show-2 {\n  --opacity: 0.02; }\n  .show-3 {\n  --opacity: 0.03; }\n  .show-4 {\n  --opacity: 0.04; }\n  .show-5 {\n  --opacity: 0.05; }\n  .show-6 {\n  --opacity: 0.06; }\n  .show-7 {\n  --opacity: 0.07; }\n  .show-8 {\n  --opacity: 0.08; }\n  .show-9 {\n  --opacity: 0.09; }\n  .show-10 {\n  --opacity: 0.1; }\n  .show-11 {\n  --opacity: 0.11; }\n  .show-12 {\n  --opacity: 0.12; }\n  .show-13 {\n  --opacity: 0.13; }\n  .show-14 {\n  --opacity: 0.14; }\n  .show-15 {\n  --opacity: 0.15; }\n  .show-16 {\n  --opacity: 0.16; }\n  .show-17 {\n  --opacity: 0.17; }\n  .show-18 {\n  --opacity: 0.18; }\n  .show-19 {\n  --opacity: 0.19; }\n  .show-20 {\n  --opacity: 0.2; }\n  .show-21 {\n  --opacity: 0.21; }\n  .show-22 {\n  --opacity: 0.22; }\n  .show-23 {\n  --opacity: 0.23; }\n  .show-24 {\n  --opacity: 0.24; }\n  .show-25 {\n  --opacity: 0.25; }\n  .show-26 {\n  --opacity: 0.26; }\n  .show-27 {\n  --opacity: 0.27; }\n  .show-28 {\n  --opacity: 0.28; }\n  .show-29 {\n  --opacity: 0.29; }\n  .show-30 {\n  --opacity: 0.3; }\n  .show-31 {\n  --opacity: 0.31; }\n  .show-32 {\n  --opacity: 0.32; }\n  .show-33 {\n  --opacity: 0.33; }\n  .show-34 {\n  --opacity: 0.34; }\n  .show-35 {\n  --opacity: 0.35; }\n  .show-36 {\n  --opacity: 0.36; }\n  .show-37 {\n  --opacity: 0.37; }\n  .show-38 {\n  --opacity: 0.38; }\n  .show-39 {\n  --opacity: 0.39; }\n  .show-40 {\n  --opacity: 0.4; }\n  .show-41 {\n  --opacity: 0.41; }\n  .show-42 {\n  --opacity: 0.42; }\n  .show-43 {\n  --opacity: 0.43; }\n  .show-44 {\n  --opacity: 0.44; }\n  .show-45 {\n  --opacity: 0.45; }\n  .show-46 {\n  --opacity: 0.46; }\n  .show-47 {\n  --opacity: 0.47; }\n  .show-48 {\n  --opacity: 0.48; }\n  .show-49 {\n  --opacity: 0.49; }\n  .show-50 {\n  --opacity: 0.5; }\n  .show-51 {\n  --opacity: 0.51; }\n  .show-52 {\n  --opacity: 0.52; }\n  .show-53 {\n  --opacity: 0.53; }\n  .show-54 {\n  --opacity: 0.54; }\n  .show-55 {\n  --opacity: 0.55; }\n  .show-56 {\n  --opacity: 0.56; }\n  .show-57 {\n  --opacity: 0.57; }\n  .show-58 {\n  --opacity: 0.58; }\n  .show-59 {\n  --opacity: 0.59; }\n  .show-60 {\n  --opacity: 0.6; }\n  .show-61 {\n  --opacity: 0.61; }\n  .show-62 {\n  --opacity: 0.62; }\n  .show-63 {\n  --opacity: 0.63; }\n  .show-64 {\n  --opacity: 0.64; }\n  .show-65 {\n  --opacity: 0.65; }\n  .show-66 {\n  --opacity: 0.66; }\n  .show-67 {\n  --opacity: 0.67; }\n  .show-68 {\n  --opacity: 0.68; }\n  .show-69 {\n  --opacity: 0.69; }\n  .show-70 {\n  --opacity: 0.7; }\n  .show-71 {\n  --opacity: 0.71; }\n  .show-72 {\n  --opacity: 0.72; }\n  .show-73 {\n  --opacity: 0.73; }\n  .show-74 {\n  --opacity: 0.74; }\n  .show-75 {\n  --opacity: 0.75; }\n  .show-76 {\n  --opacity: 0.76; }\n  .show-77 {\n  --opacity: 0.77; }\n  .show-78 {\n  --opacity: 0.78; }\n  .show-79 {\n  --opacity: 0.79; }\n  .show-80 {\n  --opacity: 0.8; }\n  .show-81 {\n  --opacity: 0.81; }\n  .show-82 {\n  --opacity: 0.82; }\n  .show-83 {\n  --opacity: 0.83; }\n  .show-84 {\n  --opacity: 0.84; }\n  .show-85 {\n  --opacity: 0.85; }\n  .show-86 {\n  --opacity: 0.86; }\n  .show-87 {\n  --opacity: 0.87; }\n  .show-88 {\n  --opacity: 0.88; }\n  .show-89 {\n  --opacity: 0.89; }\n  .show-90 {\n  --opacity: 0.9; }\n  .show-91 {\n  --opacity: 0.91; }\n  .show-92 {\n  --opacity: 0.92; }\n  .show-93 {\n  --opacity: 0.93; }\n  .show-94 {\n  --opacity: 0.94; }\n  .show-95 {\n  --opacity: 0.95; }\n  .show-96 {\n  --opacity: 0.96; }\n  .show-97 {\n  --opacity: 0.97; }\n  .show-98 {\n  --opacity: 0.98; }\n  .show-99 {\n  --opacity: 0.99; }\n  .show-100 {\n  --opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEZBQWE7RUFDYixZQUFVLEVBQUE7RUFGWjtJQUlJLFlBQVUsRUFBQTtFQUpkO01BTU0sV0FBVyxFQUFBO0VBTmpCO0lBVUksV0FBVyxFQUFBO0VBVmY7SUFhSSxXQUFXLEVBQUE7RUFHZjtFQUNFLCtEQUE0RTtFQUM1RSxxQ0FBcUM7RUFDckMsNkNBQTZDLEVBQUE7RUFFL0M7RUFDRSxrQkFBa0I7RUFDbEIsc0RBQXNEO0VBQ3RELFVBQVU7RUFDVixhQUFhO0VBQ2Isb0RBQWlFLEVBQUE7RUFMbkU7SUFpQkksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixXQUFXLEVBQUE7RUF6QmY7TUEyQk0sV0FBVztNQUNYLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLG1CQUFtQixFQUFBO0VBL0J6QjtNQWtDTSxPQUFPO01BQ1Asa0JBQWtCLEVBQUE7RUFuQ3hCO01Bc0NNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQiwrQkFBK0IsRUFBQTtFQTFDckM7UUE0Q1EsNkJBQTZCO1FBQzdCLGFBQVEsRUFBQTtFQTdDaEI7VUErQ1UsV0FBVyxFQUFBO0VBL0NyQjtNQW9ETSw2QkFBNkIsRUFBQTtFQXBEbkM7UUFzRFEsMENBQXNDO1FBQ3RDLGdCQUFnQjtRQUdoQixrQkFBa0IsRUFBQTtFQTFEMUI7TUE4RE0sV0FBVyxFQUFBO0VBOURqQjtRQWdFUSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTtFQW5FM0I7VUFzRVksMkJBQTJCLEVBQUE7RUF0RXZDO1VBeUVZLDZCQUE2QixFQUFBO0VBT3pDO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFIWjtJQUtJLGtCQUFhLEVBQUE7RUFMakI7TUFPTSxVQUFVLEVBQUE7RUFQaEI7TUFVTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsMEJBQTBCLEVBQUE7RUFkaEM7TUFpQk0sV0FBVyxFQUFBO0VBSWpCO0VBRUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0VBTnRCO0lBU1EsV0FBVyxFQUFBO0VBVG5CO0lBWVEsV0FBVyxFQUFBO0VBWm5CO0VBaUJJLDBCQUEwQixFQUFBO0VBRzlCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBRXJCO0VBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7RUFDRSxpQkFBaUIsRUFBQTtFQUVuQjtFQUlRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtFQVIxQjtJQVVVLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUIsRUFBQTtFQWQ3QjtNQWdCWSw2QkFBNkI7TUFDN0IsZ0JBQWdCO01BQ2hCLDRCQUE0QixFQUFBO0VBbEJ4QztNQXFCWSw2QkFBNkI7TUFDN0IsOEJBQThCLEVBQUE7RUF0QjFDO01BeUJZLFdBQVcsRUFBQTtFQU92QjtFQUdNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkIsRUFBQTtFQVBuQztJQVNRLFdBQVcsRUFBQTtFQU9qQjtFQUFnQixZQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsWUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gIC0tb3BhY2l0eTogMDtcclxuICBpb24tYnV0dG9ucyB7XHJcbiAgICAtLW9wYWNpdHk6IDE7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuLmFuZHJvaWQtY2VudGVyLXRvcCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2NlbnRlcmhlYWQuc3ZnXCIpIGxlZnQgdG9wIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5jZW50ZXItdG9wIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCkgLSA1cHgpO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgaGVpZ2h0OiAyMTVweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvY2VudGVyaGVhZC5zdmdcIikgbGVmdCB0b3Agbm8tcmVwZWF0O1xyXG4gIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIC8vIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgLy8gLnRvcC1iZyB7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICB3aWR0aDogMTAwJTtcclxuICAvLyAgIGhlaWdodDogMTAwJTtcclxuICAvLyAgIGxlZnQ6IDA7XHJcbiAgLy8gICB0b3A6IDA7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIC8vIH1cclxuICAuYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiBjYWxjKDI2cHggKyB2YXIoLS1pb24tYW5kcm9pZC1wYWRkaW5nLXRvcCkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjFweCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWJpZy10aXRsZSk7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcclxuICAgICAgICBwYWRkaW5nOiAxcHggM3B4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50b3BuYXYge1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGlvbi1ncmlkLCBpb24tY29sIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRpcyB7XHJcbiAgLm15LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGltZyB7XHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgd2lkdGg6IDczcHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxufVxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi5oZGJveCB7XHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jeWdqIHtcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAwIHtcclxuICAuc2hvdy0jeyRpfSB7ICAgLS1vcGFjaXR5OiAjeyRpIC8gMTAwfTsgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_usercenter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/usercenter.service */ "./src/app/services/usercenter.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_okgoods_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/okgoods.service */ "./src/app/services/okgoods.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-31 23:26:32
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-04 19:18:43
 * @Description: file content
 */









var Tab4Page = /** @class */ (function () {
    function Tab4Page(route, userfn, http, usercenter, toPage, native, okgoodsfn, alertController) {
        this.route = route;
        this.userfn = userfn;
        this.http = http;
        this.usercenter = usercenter;
        this.toPage = toPage;
        this.native = native;
        this.okgoodsfn = okgoodsfn;
        this.alertController = alertController;
    }
    Tab4Page.prototype.ngOnInit = function () {
        this.isshow = false;
        this.user = {};
        this.toolbaropacity = '0';
        this.isandroid = this.native.isandroid();
    };
    Tab4Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userfn.getUserp().then(function (res) {
            _this.user = res;
        }).catch(function (err) {
            console.log(err);
        });
        this.centeruser = this.usercenter.getUserdata();
        this.okgoodsfn.sendOkgoods(); // 发送确自动认收货请求
        // this.userfn.getGz().then(res => {
        //   console.log(res)
        // }).catch(error => {
        //   console.log(error)
        // })
    };
    Tab4Page.prototype.closeXlts = function (index) {
        this.centeruser.xclist.splice(index, 1);
    };
    // 活动做成两种类型，一种打开组件，一种打开网页
    Tab4Page.prototype.logScrolling = function ($event) {
        var top = $event.detail.scrollTop;
        // if (!this.scroolold) {
        //   this.scroolold = top;
        // } else {
        //   if (this.scroolold > 44 && top > 44) {
        //     this.scroolold = top;
        //     return false;
        //   }
        //   this.scroolold = top;
        // }
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
            this.isshow = false;
        }
        else {
            this.isshow = true;
            num = 1;
        }
        this.setNavstatus(num);
    };
    Tab4Page.prototype.setNavstatus = function (num) {
        this.toolbaropacity = (parseInt((num * 100).toString(), 10)).toString();
    };
    /**
     * @Author: wjy-mac
     * @description: 跳转页面方法
     * @Date: 2019-10-22 11:52:55
     * @param {type}
     * @return:
     */
    Tab4Page.prototype.openPage = function (type) {
        var _this = this;
        if (type === 9) {
            this.route.navigate(['/browse-records']);
        }
        else if (type === 8) {
            this.route.navigate(['/cart']);
        }
        else if (type === 3) {
            this.route.navigate(['/bouns']);
        }
        else if (type === 2) {
            this.route.navigate(['/xcsclist']);
        }
        else if (type === 4) {
            this.route.navigate(['/collelist']);
        }
        else if (type === 5) {
            this.route.navigate(['/center-more']);
        }
        else if (type === 10) {
            this.route.navigate(['/allorder']);
        }
        else if (type === 1) {
            this.route.navigate(['/xclist']);
        }
        else if (type === 11) {
            this.route.navigate(['/myrelease']);
        }
        else if (type === 12) {
            this.route.navigate(['/userlist'], { queryParams: { type: 1 } });
        }
        else if (type === 13) {
            this.route.navigate(['/userlist'], { queryParams: { type: 2 } });
        }
        else if (type === 14) {
            this.route.navigate(['/edmit-user']);
        }
        else if (type === 15) {
            // this.route.navigate(['/fbyj'], {queryParams: {type: res.data.type}});
            this.native.getStorage('yjcontent').then(function (res) {
                _this.route.navigate(['/fbyj'], { queryParams: { type: res.type - 1, iscg: 1 } });
            }).catch(function (error) {
                _this.native.presentAlert('没有草稿!');
            });
        }
        else if (type === 16) {
            this.route.navigate(['/after-salelist']);
        }
    };
    Tab4Page.prototype.openOtherpage = function (item) {
        this.toPage.toPage(item.type, item.url);
    };
    Tab4Page.prototype.hzqt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示',
                            message: '立即联系专属客服为您服务！',
                            buttons: [
                                {
                                    text: '考虑考虑',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: '立即拨打',
                                    handler: function () {
                                        _this.native.callTel('13982152738');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_usercenter_service__WEBPACK_IMPORTED_MODULE_5__["UsercenterService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"], _services_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"],
            _services_okgoods_service__WEBPACK_IMPORTED_MODULE_8__["OkgoodsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map