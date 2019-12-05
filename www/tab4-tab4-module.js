(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-08-03 14:52:31\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-12-04 19:20:32\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar  mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <ion-title *ngIf=\"isshow\">{{user.user_name}}</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"openPage(5)\">\r\n        <!--<ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>-->\r\n        <img src=\"./assets/center-arrow.svg\">\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n\r\n  <div class=\"center-top\" [ngClass]=\"{'android-center-top': isandroid}\">\r\n    <!--<div class=\"top-right\">-->\r\n      <!--<ion-button fill=\"clear\">-->\r\n        <!--&lt;!&ndash;<ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>&ndash;&gt;-->\r\n        <!--<img src=\"./assets/center-arrow.svg\">-->\r\n      <!--</ion-button>-->\r\n    <!--</div>-->\r\n    <!--<img src=\"./assets/centerhead.svg\">-->\r\n    <!-- <img src=\"../../assets/centerhead.svg\" class=\"top-bg\" alt=\"\"> -->\r\n    <div class=\"box\" padding>\r\n      <div class=\"header\">\r\n        <ion-avatar>\r\n          <img [src]=\"user.headimg  | imgsrc: http.domain\">\r\n        </ion-avatar>\r\n        <div class=\"right\">\r\n          <div class=\"name\">\r\n            {{user.user_name}}\r\n            <ion-button fill=\"clear\" size=\"small\" (click)=\"openPage(14)\">\r\n              修改资料\r\n              <img src=\"./assets/centerarrow.svg\">\r\n            </ion-button>\r\n          </div>\r\n          <div class=\"des\">\r\n            <span>LV.{{user.user_rank}}</span>\r\n            {{user.lxdj}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer\">\r\n        <ion-grid>\r\n          <ion-row *ngIf=\"centeruser\">\r\n            <ion-col (click)=\"openPage(12)\">\r\n              <span>{{centeruser.gznum | setnum}}</span><span>关注</span>\r\n            </ion-col>\r\n            <ion-col (click)=\"openPage(13)\">\r\n              <span>{{centeruser.fsnum | setnum}}</span><span>粉丝</span>\r\n            </ion-col>\r\n            <ion-col>\r\n              <span>{{centeruser.dznum | setnum}}</span><span>获赞</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"topnav\">\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col (click)=\"openPage(1)\"><img src=\"./assets/wdxc.svg\"><span>我的行程</span></ion-col>\r\n            <ion-col (click)=\"openPage(2)\"><img src=\"./assets/wdsc.svg\"><span>行程收藏</span></ion-col>\r\n            <ion-col (click)=\"openPage(3)\"><img src=\"./assets/yhq.svg\"><span>优惠券</span></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"xcts-box\" *ngIf=\"centeruser\">\r\n    <ion-card class=\"tis\" mode=\"ios\" *ngFor=\"let item of centeruser.xclist; let i = index\">\r\n      <ion-card-content>\r\n        <div class=\"my-title\">\r\n          <img src=\"../assets/znxl.png\">\r\n          <img src=\"../assets/centercha.svg\" (click)=\"closeXlts(i)\">\r\n        </div>\r\n        <span *ngIf=\"item.timeend>0 && item.timetype == 2\">距离行程[{{item.setouttime}}]出发还有<ion-text color=\"success\">{{item.timeend}}</ion-text>天，请做好安排哦！ <ion-text color=\"primary\" (click)=\"openOtherpage({type: 11, url: item.order_sn})\">去看看</ion-text></span>\r\n        <span *ngIf=\"item.timeend>0 && item.timetype == 1 && item.timeend > 2\">距离行程[{{item.setouttime}}]出发还有<ion-text color=\"success\">{{item.timeend}}</ion-text>小时，请做好安排哦！ <ion-text color=\"primary\" (click)=\"openOtherpage({type: 11, url: item.order_sn})\">去看看</ion-text></span>\r\n        <span *ngIf=\"item.timeend>0 && item.timetype == 1 && item.timeend <= 2\">行程[{{item.setouttime}}]<ion-text color=\"danger\">即将出发</ion-text>，请做好安排哦！ <ion-text color=\"primary\" (click)=\"openOtherpage({type: 11, url: item.order_sn})\">去看看</ion-text></span>\r\n        <span *ngIf=\"item.timeend == 0\">行程[{{item.setouttime}}]今日出发，请尽快集合哦！ <ion-text color=\"primary\" (click)=\"openOtherpage({type: 11, url: item.order_sn})\">去看看</ion-text></span>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <ion-card mode=\"ios\" class=\"cygj\">\r\n    <ion-card-header>\r\n      <ion-card-title>常用工具</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col (click)=\"openPage(8)\"><img src=\"./assets/jfsc.svg\"><span>购物车</span></ion-col>\r\n        <ion-col (click)=\"openPage(10)\"><img src=\"./assets/allorder.svg\"><span>全部订单</span></ion-col>\r\n        <ion-col (click)=\"openPage(16)\"><img src=\"./assets/allorder.svg\"><span>退款/售后</span></ion-col>\r\n        <ion-col (click)=\"openPage(4)\"><img src=\"./assets/wddp.svg\"><span>我的收藏</span></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col (click)=\"openPage(11)\"><img src=\"./assets/wdfb.svg\"><span>我的发布</span></ion-col>\r\n        <ion-col (click)=\"openPage(15)\"><img src=\"./assets/wdcg.svg\"><span>我的草稿</span></ion-col>\r\n        <ion-col (click)=\"openPage(9)\"><img src=\"./assets/lljl.svg\"><span>浏览记录</span></ion-col>\r\n        <ion-col><img src=\"./assets/kf.svg\"><span>客服服务</span></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"3\" (click)=\"hzqt()\"><img src=\"./assets/hzqt.svg\"><span>合作洽谈</span></ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card mode=\"ios\" class=\"hdbox\" *ngIf=\"centeruser && centeruser['advertisement'] && centeruser['advertisement'].length > 0\">\r\n    <ion-card-header>\r\n      <ion-card-title>活动中心</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let item of centeruser['advertisement']\" (click)=\"openOtherpage(item)\">\r\n          <!--<div class=\"box\">-->\r\n            <!--<div class=\"left\">-->\r\n              <!--<div class=\"title\">分享有礼</div>-->\r\n              <!--<div class=\"des\">邀请好友<ion-text color=\"danger\">得红包</ion-text></div>-->\r\n            <!--</div>-->\r\n            <!--<img src=\"../assets/share.svg\">-->\r\n          <!--</div>-->\r\n          <!--<div class=\"box\">-->\r\n            <!--<div class=\"left\">-->\r\n              <!--<div class=\"title\">有奖问卷</div>-->\r\n              <!--<div class=\"des\">快来参与问卷调查</div>-->\r\n            <!--</div>-->\r\n            <!--<img src=\"../assets/yjwd.svg\">-->\r\n          <!--</div>-->\r\n          <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

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

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n  --opacity: 0;\n}\nion-toolbar ion-buttons {\n  --opacity: 1;\n}\nion-toolbar ion-buttons img {\n  width: 20px;\n}\nion-toolbar ion-icon {\n  color: #fff;\n}\nion-toolbar ion-title {\n  color: #fff;\n}\n.android-center-top {\n  background: url('centerhead.svg') left top no-repeat !important;\n  background-size: 100% 100% !important;\n  -webkit-background-size: 100% 100% !important;\n}\n.center-top {\n  position: relative;\n  margin-top: calc(var(--ion-platform-margin-top) - 5px);\n  z-index: 0;\n  height: 215px;\n  background: url('centerhead.svg') left top no-repeat;\n}\n.center-top .box {\n  position: absolute;\n  width: 100%;\n  top: calc(26px + var(--ion-android-padding-top));\n  display: flex;\n  height: calc(100% - 61px);\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  color: #fff;\n}\n.center-top .box .header {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.center-top .box .right {\n  flex: 1;\n  padding-left: 10px;\n}\n.center-top .box .name {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: var(--ion-big-title);\n}\n.center-top .box .name ion-button {\n  font-size: var(--ion-sm-text);\n  --color: #fff;\n}\n.center-top .box .name ion-button img {\n  width: 10px;\n}\n.center-top .box .des {\n  font-size: var(--ion-sm-text);\n}\n.center-top .box .des span {\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 1px 3px;\n  border-radius: 3px;\n}\n.center-top .box .footer {\n  width: 100%;\n}\n.center-top .box .footer ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.center-top .box .footer ion-col span:first-of-type {\n  font-size: var(--ion-title);\n}\n.center-top .box .footer ion-col span:last-of-type {\n  font-size: var(--ion-sm-text);\n}\n.topnav {\n  margin-top: -40px;\n  position: relative;\n  z-index: 1;\n}\n.topnav ion-card {\n  --background: #fff;\n}\n.topnav ion-card ion-grid, .topnav ion-card ion-col {\n  padding: 0;\n}\n.topnav ion-card ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--ion-text);\n}\n.topnav ion-card img {\n  width: 28px;\n}\n.tis .my-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n}\n.tis .my-title img:first-of-type {\n  width: 73px;\n}\n.tis .my-title img:last-of-type {\n  width: 14px;\n}\n.tis ion-card-content {\n  font-size: var(--ion-text);\n}\nion-card {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\nion-card-title {\n  font-size: var(--ion-title);\n}\nion-card-header {\n  padding-bottom: 0;\n}\n.hdbox ion-card-content ion-row ion-col {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n}\n.hdbox ion-card-content ion-row ion-col .box {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.hdbox ion-card-content ion-row ion-col .box .title {\n  font-size: var(--ion-sm-text);\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.hdbox ion-card-content ion-row ion-col .box .des {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n}\n.hdbox ion-card-content ion-row ion-col .box img {\n  width: 45px;\n}\n.cygj ion-card-content ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--ion-sm-text);\n}\n.cygj ion-card-content ion-col img {\n  width: 26px;\n}\n.show-0 {\n  --opacity: 0;\n}\n.show-1 {\n  --opacity: 0.01;\n}\n.show-2 {\n  --opacity: 0.02;\n}\n.show-3 {\n  --opacity: 0.03;\n}\n.show-4 {\n  --opacity: 0.04;\n}\n.show-5 {\n  --opacity: 0.05;\n}\n.show-6 {\n  --opacity: 0.06;\n}\n.show-7 {\n  --opacity: 0.07;\n}\n.show-8 {\n  --opacity: 0.08;\n}\n.show-9 {\n  --opacity: 0.09;\n}\n.show-10 {\n  --opacity: 0.1;\n}\n.show-11 {\n  --opacity: 0.11;\n}\n.show-12 {\n  --opacity: 0.12;\n}\n.show-13 {\n  --opacity: 0.13;\n}\n.show-14 {\n  --opacity: 0.14;\n}\n.show-15 {\n  --opacity: 0.15;\n}\n.show-16 {\n  --opacity: 0.16;\n}\n.show-17 {\n  --opacity: 0.17;\n}\n.show-18 {\n  --opacity: 0.18;\n}\n.show-19 {\n  --opacity: 0.19;\n}\n.show-20 {\n  --opacity: 0.2;\n}\n.show-21 {\n  --opacity: 0.21;\n}\n.show-22 {\n  --opacity: 0.22;\n}\n.show-23 {\n  --opacity: 0.23;\n}\n.show-24 {\n  --opacity: 0.24;\n}\n.show-25 {\n  --opacity: 0.25;\n}\n.show-26 {\n  --opacity: 0.26;\n}\n.show-27 {\n  --opacity: 0.27;\n}\n.show-28 {\n  --opacity: 0.28;\n}\n.show-29 {\n  --opacity: 0.29;\n}\n.show-30 {\n  --opacity: 0.3;\n}\n.show-31 {\n  --opacity: 0.31;\n}\n.show-32 {\n  --opacity: 0.32;\n}\n.show-33 {\n  --opacity: 0.33;\n}\n.show-34 {\n  --opacity: 0.34;\n}\n.show-35 {\n  --opacity: 0.35;\n}\n.show-36 {\n  --opacity: 0.36;\n}\n.show-37 {\n  --opacity: 0.37;\n}\n.show-38 {\n  --opacity: 0.38;\n}\n.show-39 {\n  --opacity: 0.39;\n}\n.show-40 {\n  --opacity: 0.4;\n}\n.show-41 {\n  --opacity: 0.41;\n}\n.show-42 {\n  --opacity: 0.42;\n}\n.show-43 {\n  --opacity: 0.43;\n}\n.show-44 {\n  --opacity: 0.44;\n}\n.show-45 {\n  --opacity: 0.45;\n}\n.show-46 {\n  --opacity: 0.46;\n}\n.show-47 {\n  --opacity: 0.47;\n}\n.show-48 {\n  --opacity: 0.48;\n}\n.show-49 {\n  --opacity: 0.49;\n}\n.show-50 {\n  --opacity: 0.5;\n}\n.show-51 {\n  --opacity: 0.51;\n}\n.show-52 {\n  --opacity: 0.52;\n}\n.show-53 {\n  --opacity: 0.53;\n}\n.show-54 {\n  --opacity: 0.54;\n}\n.show-55 {\n  --opacity: 0.55;\n}\n.show-56 {\n  --opacity: 0.56;\n}\n.show-57 {\n  --opacity: 0.57;\n}\n.show-58 {\n  --opacity: 0.58;\n}\n.show-59 {\n  --opacity: 0.59;\n}\n.show-60 {\n  --opacity: 0.6;\n}\n.show-61 {\n  --opacity: 0.61;\n}\n.show-62 {\n  --opacity: 0.62;\n}\n.show-63 {\n  --opacity: 0.63;\n}\n.show-64 {\n  --opacity: 0.64;\n}\n.show-65 {\n  --opacity: 0.65;\n}\n.show-66 {\n  --opacity: 0.66;\n}\n.show-67 {\n  --opacity: 0.67;\n}\n.show-68 {\n  --opacity: 0.68;\n}\n.show-69 {\n  --opacity: 0.69;\n}\n.show-70 {\n  --opacity: 0.7;\n}\n.show-71 {\n  --opacity: 0.71;\n}\n.show-72 {\n  --opacity: 0.72;\n}\n.show-73 {\n  --opacity: 0.73;\n}\n.show-74 {\n  --opacity: 0.74;\n}\n.show-75 {\n  --opacity: 0.75;\n}\n.show-76 {\n  --opacity: 0.76;\n}\n.show-77 {\n  --opacity: 0.77;\n}\n.show-78 {\n  --opacity: 0.78;\n}\n.show-79 {\n  --opacity: 0.79;\n}\n.show-80 {\n  --opacity: 0.8;\n}\n.show-81 {\n  --opacity: 0.81;\n}\n.show-82 {\n  --opacity: 0.82;\n}\n.show-83 {\n  --opacity: 0.83;\n}\n.show-84 {\n  --opacity: 0.84;\n}\n.show-85 {\n  --opacity: 0.85;\n}\n.show-86 {\n  --opacity: 0.86;\n}\n.show-87 {\n  --opacity: 0.87;\n}\n.show-88 {\n  --opacity: 0.88;\n}\n.show-89 {\n  --opacity: 0.89;\n}\n.show-90 {\n  --opacity: 0.9;\n}\n.show-91 {\n  --opacity: 0.91;\n}\n.show-92 {\n  --opacity: 0.92;\n}\n.show-93 {\n  --opacity: 0.93;\n}\n.show-94 {\n  --opacity: 0.94;\n}\n.show-95 {\n  --opacity: 0.95;\n}\n.show-96 {\n  --opacity: 0.96;\n}\n.show-97 {\n  --opacity: 0.97;\n}\n.show-98 {\n  --opacity: 0.98;\n}\n.show-99 {\n  --opacity: 0.99;\n}\n.show-100 {\n  --opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEZBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtBQ0dOO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7QUNFSjtBRENBO0VBQ0UsK0RBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0FDRUY7QURBQTtFQUNFLGtCQUFBO0VBQ0Esc0RBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0FDR0Y7QURRRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ05KO0FET0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0xOO0FET0k7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUNMTjtBRE9JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDTE47QURNTTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtBQ0pSO0FES1E7RUFDRSxXQUFBO0FDSFY7QURPSTtFQUNFLDZCQUFBO0FDTE47QURNTTtFQUNFLDBDQUFBO0VBQ0EsZ0JBQUE7RUFHQSxrQkFBQTtBQ0pSO0FET0k7RUFDRSxXQUFBO0FDTE47QURNTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKUjtBRE1VO0VBQ0UsMkJBQUE7QUNKWjtBRE1VO0VBQ0UsNkJBQUE7QUNKWjtBRFdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNSRjtBRFNFO0VBQ0Usa0JBQUE7QUNQSjtBRFFJO0VBQ0UsVUFBQTtBQ05OO0FEUUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNOTjtBRFFJO0VBQ0UsV0FBQTtBQ05OO0FEV0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFVNO0VBQ0UsV0FBQTtBQ1JSO0FEVU07RUFDRSxXQUFBO0FDUlI7QURZRTtFQUNFLDBCQUFBO0FDVko7QURhQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNWRjtBRFlBO0VBQ0UsMkJBQUE7QUNURjtBRFdBO0VBQ0UsaUJBQUE7QUNSRjtBRGFNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVlI7QURXUTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDVFY7QURVVTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ1JaO0FEVVU7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDUlo7QURVVTtFQUNFLFdBQUE7QUNSWjtBRGlCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ2ROO0FEZU07RUFDRSxXQUFBO0FDYlI7QURvQkU7RUFBZ0IsWUFBQTtBQ2hCbEI7QURnQkU7RUFBZ0IsZUFBQTtBQ1psQjtBRFlFO0VBQWdCLGVBQUE7QUNSbEI7QURRRTtFQUFnQixlQUFBO0FDSmxCO0FESUU7RUFBZ0IsZUFBQTtBQ0FsQjtBREFFO0VBQWdCLGVBQUE7QUNJbEI7QURKRTtFQUFnQixlQUFBO0FDUWxCO0FEUkU7RUFBZ0IsZUFBQTtBQ1lsQjtBRFpFO0VBQWdCLGVBQUE7QUNnQmxCO0FEaEJFO0VBQWdCLGVBQUE7QUNvQmxCO0FEcEJFO0VBQWdCLGNBQUE7QUN3QmxCO0FEeEJFO0VBQWdCLGVBQUE7QUM0QmxCO0FENUJFO0VBQWdCLGVBQUE7QUNnQ2xCO0FEaENFO0VBQWdCLGVBQUE7QUNvQ2xCO0FEcENFO0VBQWdCLGVBQUE7QUN3Q2xCO0FEeENFO0VBQWdCLGVBQUE7QUM0Q2xCO0FENUNFO0VBQWdCLGVBQUE7QUNnRGxCO0FEaERFO0VBQWdCLGVBQUE7QUNvRGxCO0FEcERFO0VBQWdCLGVBQUE7QUN3RGxCO0FEeERFO0VBQWdCLGVBQUE7QUM0RGxCO0FENURFO0VBQWdCLGNBQUE7QUNnRWxCO0FEaEVFO0VBQWdCLGVBQUE7QUNvRWxCO0FEcEVFO0VBQWdCLGVBQUE7QUN3RWxCO0FEeEVFO0VBQWdCLGVBQUE7QUM0RWxCO0FENUVFO0VBQWdCLGVBQUE7QUNnRmxCO0FEaEZFO0VBQWdCLGVBQUE7QUNvRmxCO0FEcEZFO0VBQWdCLGVBQUE7QUN3RmxCO0FEeEZFO0VBQWdCLGVBQUE7QUM0RmxCO0FENUZFO0VBQWdCLGVBQUE7QUNnR2xCO0FEaEdFO0VBQWdCLGVBQUE7QUNvR2xCO0FEcEdFO0VBQWdCLGNBQUE7QUN3R2xCO0FEeEdFO0VBQWdCLGVBQUE7QUM0R2xCO0FENUdFO0VBQWdCLGVBQUE7QUNnSGxCO0FEaEhFO0VBQWdCLGVBQUE7QUNvSGxCO0FEcEhFO0VBQWdCLGVBQUE7QUN3SGxCO0FEeEhFO0VBQWdCLGVBQUE7QUM0SGxCO0FENUhFO0VBQWdCLGVBQUE7QUNnSWxCO0FEaElFO0VBQWdCLGVBQUE7QUNvSWxCO0FEcElFO0VBQWdCLGVBQUE7QUN3SWxCO0FEeElFO0VBQWdCLGVBQUE7QUM0SWxCO0FENUlFO0VBQWdCLGNBQUE7QUNnSmxCO0FEaEpFO0VBQWdCLGVBQUE7QUNvSmxCO0FEcEpFO0VBQWdCLGVBQUE7QUN3SmxCO0FEeEpFO0VBQWdCLGVBQUE7QUM0SmxCO0FENUpFO0VBQWdCLGVBQUE7QUNnS2xCO0FEaEtFO0VBQWdCLGVBQUE7QUNvS2xCO0FEcEtFO0VBQWdCLGVBQUE7QUN3S2xCO0FEeEtFO0VBQWdCLGVBQUE7QUM0S2xCO0FENUtFO0VBQWdCLGVBQUE7QUNnTGxCO0FEaExFO0VBQWdCLGVBQUE7QUNvTGxCO0FEcExFO0VBQWdCLGNBQUE7QUN3TGxCO0FEeExFO0VBQWdCLGVBQUE7QUM0TGxCO0FENUxFO0VBQWdCLGVBQUE7QUNnTWxCO0FEaE1FO0VBQWdCLGVBQUE7QUNvTWxCO0FEcE1FO0VBQWdCLGVBQUE7QUN3TWxCO0FEeE1FO0VBQWdCLGVBQUE7QUM0TWxCO0FENU1FO0VBQWdCLGVBQUE7QUNnTmxCO0FEaE5FO0VBQWdCLGVBQUE7QUNvTmxCO0FEcE5FO0VBQWdCLGVBQUE7QUN3TmxCO0FEeE5FO0VBQWdCLGVBQUE7QUM0TmxCO0FENU5FO0VBQWdCLGNBQUE7QUNnT2xCO0FEaE9FO0VBQWdCLGVBQUE7QUNvT2xCO0FEcE9FO0VBQWdCLGVBQUE7QUN3T2xCO0FEeE9FO0VBQWdCLGVBQUE7QUM0T2xCO0FENU9FO0VBQWdCLGVBQUE7QUNnUGxCO0FEaFBFO0VBQWdCLGVBQUE7QUNvUGxCO0FEcFBFO0VBQWdCLGVBQUE7QUN3UGxCO0FEeFBFO0VBQWdCLGVBQUE7QUM0UGxCO0FENVBFO0VBQWdCLGVBQUE7QUNnUWxCO0FEaFFFO0VBQWdCLGVBQUE7QUNvUWxCO0FEcFFFO0VBQWdCLGNBQUE7QUN3UWxCO0FEeFFFO0VBQWdCLGVBQUE7QUM0UWxCO0FENVFFO0VBQWdCLGVBQUE7QUNnUmxCO0FEaFJFO0VBQWdCLGVBQUE7QUNvUmxCO0FEcFJFO0VBQWdCLGVBQUE7QUN3UmxCO0FEeFJFO0VBQWdCLGVBQUE7QUM0UmxCO0FENVJFO0VBQWdCLGVBQUE7QUNnU2xCO0FEaFNFO0VBQWdCLGVBQUE7QUNvU2xCO0FEcFNFO0VBQWdCLGVBQUE7QUN3U2xCO0FEeFNFO0VBQWdCLGVBQUE7QUM0U2xCO0FENVNFO0VBQWdCLGNBQUE7QUNnVGxCO0FEaFRFO0VBQWdCLGVBQUE7QUNvVGxCO0FEcFRFO0VBQWdCLGVBQUE7QUN3VGxCO0FEeFRFO0VBQWdCLGVBQUE7QUM0VGxCO0FENVRFO0VBQWdCLGVBQUE7QUNnVWxCO0FEaFVFO0VBQWdCLGVBQUE7QUNvVWxCO0FEcFVFO0VBQWdCLGVBQUE7QUN3VWxCO0FEeFVFO0VBQWdCLGVBQUE7QUM0VWxCO0FENVVFO0VBQWdCLGVBQUE7QUNnVmxCO0FEaFZFO0VBQWdCLGVBQUE7QUNvVmxCO0FEcFZFO0VBQWdCLGNBQUE7QUN3VmxCO0FEeFZFO0VBQWdCLGVBQUE7QUM0VmxCO0FENVZFO0VBQWdCLGVBQUE7QUNnV2xCO0FEaFdFO0VBQWdCLGVBQUE7QUNvV2xCO0FEcFdFO0VBQWdCLGVBQUE7QUN3V2xCO0FEeFdFO0VBQWdCLGVBQUE7QUM0V2xCO0FENVdFO0VBQWdCLGVBQUE7QUNnWGxCO0FEaFhFO0VBQWdCLGVBQUE7QUNvWGxCO0FEcFhFO0VBQWdCLGVBQUE7QUN3WGxCO0FEeFhFO0VBQWdCLGVBQUE7QUM0WGxCO0FENVhFO0VBQWdCLFlBQUE7QUNnWWxCIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gIC0tb3BhY2l0eTogMDtcclxuICBpb24tYnV0dG9ucyB7XHJcbiAgICAtLW9wYWNpdHk6IDE7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuLmFuZHJvaWQtY2VudGVyLXRvcCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2NlbnRlcmhlYWQuc3ZnXCIpIGxlZnQgdG9wIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5jZW50ZXItdG9wIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCkgLSA1cHgpO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgaGVpZ2h0OiAyMTVweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvY2VudGVyaGVhZC5zdmdcIikgbGVmdCB0b3Agbm8tcmVwZWF0O1xyXG4gIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIC8vIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgLy8gLnRvcC1iZyB7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICB3aWR0aDogMTAwJTtcclxuICAvLyAgIGhlaWdodDogMTAwJTtcclxuICAvLyAgIGxlZnQ6IDA7XHJcbiAgLy8gICB0b3A6IDA7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIC8vIH1cclxuICAuYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiBjYWxjKDI2cHggKyB2YXIoLS1pb24tYW5kcm9pZC1wYWRkaW5nLXRvcCkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjFweCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWJpZy10aXRsZSk7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcclxuICAgICAgICBwYWRkaW5nOiAxcHggM3B4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50b3BuYXYge1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGlvbi1ncmlkLCBpb24tY29sIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRpcyB7XHJcbiAgLm15LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGltZyB7XHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgd2lkdGg6IDczcHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxufVxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi5oZGJveCB7XHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jeWdqIHtcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAwIHtcclxuICAuc2hvdy0jeyRpfSB7ICAgLS1vcGFjaXR5OiAjeyRpIC8gMTAwfTsgfVxyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcbiAgLS1vcGFjaXR5OiAwO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICAtLW9wYWNpdHk6IDE7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbmlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFuZHJvaWQtY2VudGVyLXRvcCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9jZW50ZXJoZWFkLnN2Z1wiKSBsZWZ0IHRvcCBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyLXRvcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCkgLSA1cHgpO1xuICB6LWluZGV4OiAwO1xuICBoZWlnaHQ6IDIxNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvY2VudGVyaGVhZC5zdmdcIikgbGVmdCB0b3Agbm8tcmVwZWF0O1xufVxuLmNlbnRlci10b3AgLmJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogY2FsYygyNnB4ICsgdmFyKC0taW9uLWFuZHJvaWQtcGFkZGluZy10b3ApKTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MXB4KTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2VudGVyLXRvcCAuYm94IC5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNlbnRlci10b3AgLmJveCAucmlnaHQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY2VudGVyLXRvcCAuYm94IC5uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWlvbi1iaWctdGl0bGUpO1xufVxuLmNlbnRlci10b3AgLmJveCAubmFtZSBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIC0tY29sb3I6ICNmZmY7XG59XG4uY2VudGVyLXRvcCAuYm94IC5uYW1lIGlvbi1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDEwcHg7XG59XG4uY2VudGVyLXRvcCAuYm94IC5kZXMge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbn1cbi5jZW50ZXItdG9wIC5ib3ggLmRlcyBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBwYWRkaW5nOiAxcHggM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5jZW50ZXItdG9wIC5ib3ggLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNlbnRlci10b3AgLmJveCAuZm9vdGVyIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jZW50ZXItdG9wIC5ib3ggLmZvb3RlciBpb24tY29sIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbn1cbi5jZW50ZXItdG9wIC5ib3ggLmZvb3RlciBpb24tY29sIHNwYW46bGFzdC1vZi10eXBlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59XG5cbi50b3BuYXYge1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLnRvcG5hdiBpb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbi50b3BuYXYgaW9uLWNhcmQgaW9uLWdyaWQsIC50b3BuYXYgaW9uLWNhcmQgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4udG9wbmF2IGlvbi1jYXJkIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG59XG4udG9wbmF2IGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGlzIC5teS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLnRpcyAubXktdGl0bGUgaW1nOmZpcnN0LW9mLXR5cGUge1xuICB3aWR0aDogNzNweDtcbn1cbi50aXMgLm15LXRpdGxlIGltZzpsYXN0LW9mLXR5cGUge1xuICB3aWR0aDogMTRweDtcbn1cbi50aXMgaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmhkYm94IGlvbi1jYXJkLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGRib3ggaW9uLWNhcmQtY29udGVudCBpb24tcm93IGlvbi1jb2wgLmJveCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZGJveCBpb24tY2FyZC1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAuYm94IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLmhkYm94IGlvbi1jYXJkLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIC5ib3ggLmRlcyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uaGRib3ggaW9uLWNhcmQtY29udGVudCBpb24tcm93IGlvbi1jb2wgLmJveCBpbWcge1xuICB3aWR0aDogNDVweDtcbn1cblxuLmN5Z2ogaW9uLWNhcmQtY29udGVudCBpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xufVxuLmN5Z2ogaW9uLWNhcmQtY29udGVudCBpb24tY29sIGltZyB7XG4gIHdpZHRoOiAyNnB4O1xufVxuXG4uc2hvdy0wIHtcbiAgLS1vcGFjaXR5OiAwO1xufVxuXG4uc2hvdy0xIHtcbiAgLS1vcGFjaXR5OiAwLjAxO1xufVxuXG4uc2hvdy0yIHtcbiAgLS1vcGFjaXR5OiAwLjAyO1xufVxuXG4uc2hvdy0zIHtcbiAgLS1vcGFjaXR5OiAwLjAzO1xufVxuXG4uc2hvdy00IHtcbiAgLS1vcGFjaXR5OiAwLjA0O1xufVxuXG4uc2hvdy01IHtcbiAgLS1vcGFjaXR5OiAwLjA1O1xufVxuXG4uc2hvdy02IHtcbiAgLS1vcGFjaXR5OiAwLjA2O1xufVxuXG4uc2hvdy03IHtcbiAgLS1vcGFjaXR5OiAwLjA3O1xufVxuXG4uc2hvdy04IHtcbiAgLS1vcGFjaXR5OiAwLjA4O1xufVxuXG4uc2hvdy05IHtcbiAgLS1vcGFjaXR5OiAwLjA5O1xufVxuXG4uc2hvdy0xMCB7XG4gIC0tb3BhY2l0eTogMC4xO1xufVxuXG4uc2hvdy0xMSB7XG4gIC0tb3BhY2l0eTogMC4xMTtcbn1cblxuLnNob3ctMTIge1xuICAtLW9wYWNpdHk6IDAuMTI7XG59XG5cbi5zaG93LTEzIHtcbiAgLS1vcGFjaXR5OiAwLjEzO1xufVxuXG4uc2hvdy0xNCB7XG4gIC0tb3BhY2l0eTogMC4xNDtcbn1cblxuLnNob3ctMTUge1xuICAtLW9wYWNpdHk6IDAuMTU7XG59XG5cbi5zaG93LTE2IHtcbiAgLS1vcGFjaXR5OiAwLjE2O1xufVxuXG4uc2hvdy0xNyB7XG4gIC0tb3BhY2l0eTogMC4xNztcbn1cblxuLnNob3ctMTgge1xuICAtLW9wYWNpdHk6IDAuMTg7XG59XG5cbi5zaG93LTE5IHtcbiAgLS1vcGFjaXR5OiAwLjE5O1xufVxuXG4uc2hvdy0yMCB7XG4gIC0tb3BhY2l0eTogMC4yO1xufVxuXG4uc2hvdy0yMSB7XG4gIC0tb3BhY2l0eTogMC4yMTtcbn1cblxuLnNob3ctMjIge1xuICAtLW9wYWNpdHk6IDAuMjI7XG59XG5cbi5zaG93LTIzIHtcbiAgLS1vcGFjaXR5OiAwLjIzO1xufVxuXG4uc2hvdy0yNCB7XG4gIC0tb3BhY2l0eTogMC4yNDtcbn1cblxuLnNob3ctMjUge1xuICAtLW9wYWNpdHk6IDAuMjU7XG59XG5cbi5zaG93LTI2IHtcbiAgLS1vcGFjaXR5OiAwLjI2O1xufVxuXG4uc2hvdy0yNyB7XG4gIC0tb3BhY2l0eTogMC4yNztcbn1cblxuLnNob3ctMjgge1xuICAtLW9wYWNpdHk6IDAuMjg7XG59XG5cbi5zaG93LTI5IHtcbiAgLS1vcGFjaXR5OiAwLjI5O1xufVxuXG4uc2hvdy0zMCB7XG4gIC0tb3BhY2l0eTogMC4zO1xufVxuXG4uc2hvdy0zMSB7XG4gIC0tb3BhY2l0eTogMC4zMTtcbn1cblxuLnNob3ctMzIge1xuICAtLW9wYWNpdHk6IDAuMzI7XG59XG5cbi5zaG93LTMzIHtcbiAgLS1vcGFjaXR5OiAwLjMzO1xufVxuXG4uc2hvdy0zNCB7XG4gIC0tb3BhY2l0eTogMC4zNDtcbn1cblxuLnNob3ctMzUge1xuICAtLW9wYWNpdHk6IDAuMzU7XG59XG5cbi5zaG93LTM2IHtcbiAgLS1vcGFjaXR5OiAwLjM2O1xufVxuXG4uc2hvdy0zNyB7XG4gIC0tb3BhY2l0eTogMC4zNztcbn1cblxuLnNob3ctMzgge1xuICAtLW9wYWNpdHk6IDAuMzg7XG59XG5cbi5zaG93LTM5IHtcbiAgLS1vcGFjaXR5OiAwLjM5O1xufVxuXG4uc2hvdy00MCB7XG4gIC0tb3BhY2l0eTogMC40O1xufVxuXG4uc2hvdy00MSB7XG4gIC0tb3BhY2l0eTogMC40MTtcbn1cblxuLnNob3ctNDIge1xuICAtLW9wYWNpdHk6IDAuNDI7XG59XG5cbi5zaG93LTQzIHtcbiAgLS1vcGFjaXR5OiAwLjQzO1xufVxuXG4uc2hvdy00NCB7XG4gIC0tb3BhY2l0eTogMC40NDtcbn1cblxuLnNob3ctNDUge1xuICAtLW9wYWNpdHk6IDAuNDU7XG59XG5cbi5zaG93LTQ2IHtcbiAgLS1vcGFjaXR5OiAwLjQ2O1xufVxuXG4uc2hvdy00NyB7XG4gIC0tb3BhY2l0eTogMC40Nztcbn1cblxuLnNob3ctNDgge1xuICAtLW9wYWNpdHk6IDAuNDg7XG59XG5cbi5zaG93LTQ5IHtcbiAgLS1vcGFjaXR5OiAwLjQ5O1xufVxuXG4uc2hvdy01MCB7XG4gIC0tb3BhY2l0eTogMC41O1xufVxuXG4uc2hvdy01MSB7XG4gIC0tb3BhY2l0eTogMC41MTtcbn1cblxuLnNob3ctNTIge1xuICAtLW9wYWNpdHk6IDAuNTI7XG59XG5cbi5zaG93LTUzIHtcbiAgLS1vcGFjaXR5OiAwLjUzO1xufVxuXG4uc2hvdy01NCB7XG4gIC0tb3BhY2l0eTogMC41NDtcbn1cblxuLnNob3ctNTUge1xuICAtLW9wYWNpdHk6IDAuNTU7XG59XG5cbi5zaG93LTU2IHtcbiAgLS1vcGFjaXR5OiAwLjU2O1xufVxuXG4uc2hvdy01NyB7XG4gIC0tb3BhY2l0eTogMC41Nztcbn1cblxuLnNob3ctNTgge1xuICAtLW9wYWNpdHk6IDAuNTg7XG59XG5cbi5zaG93LTU5IHtcbiAgLS1vcGFjaXR5OiAwLjU5O1xufVxuXG4uc2hvdy02MCB7XG4gIC0tb3BhY2l0eTogMC42O1xufVxuXG4uc2hvdy02MSB7XG4gIC0tb3BhY2l0eTogMC42MTtcbn1cblxuLnNob3ctNjIge1xuICAtLW9wYWNpdHk6IDAuNjI7XG59XG5cbi5zaG93LTYzIHtcbiAgLS1vcGFjaXR5OiAwLjYzO1xufVxuXG4uc2hvdy02NCB7XG4gIC0tb3BhY2l0eTogMC42NDtcbn1cblxuLnNob3ctNjUge1xuICAtLW9wYWNpdHk6IDAuNjU7XG59XG5cbi5zaG93LTY2IHtcbiAgLS1vcGFjaXR5OiAwLjY2O1xufVxuXG4uc2hvdy02NyB7XG4gIC0tb3BhY2l0eTogMC42Nztcbn1cblxuLnNob3ctNjgge1xuICAtLW9wYWNpdHk6IDAuNjg7XG59XG5cbi5zaG93LTY5IHtcbiAgLS1vcGFjaXR5OiAwLjY5O1xufVxuXG4uc2hvdy03MCB7XG4gIC0tb3BhY2l0eTogMC43O1xufVxuXG4uc2hvdy03MSB7XG4gIC0tb3BhY2l0eTogMC43MTtcbn1cblxuLnNob3ctNzIge1xuICAtLW9wYWNpdHk6IDAuNzI7XG59XG5cbi5zaG93LTczIHtcbiAgLS1vcGFjaXR5OiAwLjczO1xufVxuXG4uc2hvdy03NCB7XG4gIC0tb3BhY2l0eTogMC43NDtcbn1cblxuLnNob3ctNzUge1xuICAtLW9wYWNpdHk6IDAuNzU7XG59XG5cbi5zaG93LTc2IHtcbiAgLS1vcGFjaXR5OiAwLjc2O1xufVxuXG4uc2hvdy03NyB7XG4gIC0tb3BhY2l0eTogMC43Nztcbn1cblxuLnNob3ctNzgge1xuICAtLW9wYWNpdHk6IDAuNzg7XG59XG5cbi5zaG93LTc5IHtcbiAgLS1vcGFjaXR5OiAwLjc5O1xufVxuXG4uc2hvdy04MCB7XG4gIC0tb3BhY2l0eTogMC44O1xufVxuXG4uc2hvdy04MSB7XG4gIC0tb3BhY2l0eTogMC44MTtcbn1cblxuLnNob3ctODIge1xuICAtLW9wYWNpdHk6IDAuODI7XG59XG5cbi5zaG93LTgzIHtcbiAgLS1vcGFjaXR5OiAwLjgzO1xufVxuXG4uc2hvdy04NCB7XG4gIC0tb3BhY2l0eTogMC44NDtcbn1cblxuLnNob3ctODUge1xuICAtLW9wYWNpdHk6IDAuODU7XG59XG5cbi5zaG93LTg2IHtcbiAgLS1vcGFjaXR5OiAwLjg2O1xufVxuXG4uc2hvdy04NyB7XG4gIC0tb3BhY2l0eTogMC44Nztcbn1cblxuLnNob3ctODgge1xuICAtLW9wYWNpdHk6IDAuODg7XG59XG5cbi5zaG93LTg5IHtcbiAgLS1vcGFjaXR5OiAwLjg5O1xufVxuXG4uc2hvdy05MCB7XG4gIC0tb3BhY2l0eTogMC45O1xufVxuXG4uc2hvdy05MSB7XG4gIC0tb3BhY2l0eTogMC45MTtcbn1cblxuLnNob3ctOTIge1xuICAtLW9wYWNpdHk6IDAuOTI7XG59XG5cbi5zaG93LTkzIHtcbiAgLS1vcGFjaXR5OiAwLjkzO1xufVxuXG4uc2hvdy05NCB7XG4gIC0tb3BhY2l0eTogMC45NDtcbn1cblxuLnNob3ctOTUge1xuICAtLW9wYWNpdHk6IDAuOTU7XG59XG5cbi5zaG93LTk2IHtcbiAgLS1vcGFjaXR5OiAwLjk2O1xufVxuXG4uc2hvdy05NyB7XG4gIC0tb3BhY2l0eTogMC45Nztcbn1cblxuLnNob3ctOTgge1xuICAtLW9wYWNpdHk6IDAuOTg7XG59XG5cbi5zaG93LTk5IHtcbiAgLS1vcGFjaXR5OiAwLjk5O1xufVxuXG4uc2hvdy0xMDAge1xuICAtLW9wYWNpdHk6IDE7XG59Il19 */");

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
    Tab4Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_usercenter_service__WEBPACK_IMPORTED_MODULE_5__["UsercenterService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"] },
        { type: _services_okgoods_service__WEBPACK_IMPORTED_MODULE_8__["OkgoodsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] }
    ]; };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")).default]
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