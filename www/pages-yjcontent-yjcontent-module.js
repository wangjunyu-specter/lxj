(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yjcontent-yjcontent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yjcontent/yjcontent.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yjcontent/yjcontent.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-06-22 21:52:44\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-26 23:59:37\n * @Description: file content\n -->\n<ion-header [translucent]=\"true\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\n    <div class=\"search-bar\">\n      <div class=\"left\" (click)=\"goBack()\">\n        <img src=\"/assets/backbg.svg\" alt=\"\">\n      </div>\n      <div class=\"center\">\n      </div>\n      <div class=\"right\">\n        <!--<img src=\"/assets/wechatbg.svg\" alt=\"\">-->\n        <div class=\"round\"><ion-icon name=\"more\" mode=\"ios\" (click)=\"edmit()\"></ion-icon></div>\n        <!--<div class=\"round\" (click)=\"toprightmore($event)\"><ion-icon name=\"more\" mode=\"ios\"></ion-icon></div>-->\n        <!--<img src=\"/assets/czbg.svg\" alt=\"\">-->\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <div class=\"banner\">\n    <img *ngIf=\"data\" [src]=\"data.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\n  </div>\n  <div class=\"top-content ion-padding-top ion-padding-start ion-padding-end\" *ngIf=\"data\">\n    <div class=\"title\">{{data.title}}</div>\n    <div class=\"des\">\n      <div class=\"left\">\n        <img src=\"../../../assets/tagleft.svg\" alt=\"\"><div class=\"box\" *ngIf=\"data.tag && data.tag != 'null'\">{{data.tag}}</div>\n      </div>\n      <div class=\"right\">\n        <ion-text color=\"medium\">{{data.readnum}}阅读</ion-text>\n      </div>\n    </div>\n    <ion-row>\n      <ion-col *ngIf=\"data.destination && data.destination != 'null'\">\n        <div class=\"top\">目的地</div>\n        <div class=\"footer\">{{data.destination}}</div>\n      </ion-col>\n      <ion-col *ngIf=\"data.outtime && data.outtime != 'null'\">\n        <div class=\"top\">出发时间</div>\n        <div class=\"footer\">{{data.outtime | time: '.'}}</div>\n      </ion-col>\n      <ion-col *ngIf=\"data.days && data.days != 'null'\">\n        <div class=\"top\">出行天数</div>\n        <div class=\"footer\">{{data.days}}天</div>\n      </ion-col>\n      <ion-col *ngIf=\"data.money && data.money != 'null' && data.money != '0'\">\n        <div class=\"top\">人均花费</div>\n        <div class=\"footer\">¥ {{data.money}}</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"line\"></div>\n  </div>\n  <div class=\"text-content\" padding #myBox>\n    <div *ngIf=\"data && data.content\" [innerHTML]=\"assembleHTML(data.content)\"></div>\n  </div>\n  <div *ngIf=\"data\" class=\"app-pllist ion-padding-bottom ion-margin-bottom\">\n    <div class=\"hfnum\">{{data.plnum}}条回复</div>\n    <app-pllist *ngFor=\"let item of pllist\" [data]=\"item\" [tid]=\"id\" (setItem)=\"setplItem($event)\"></app-pllist>\n  </div>\n  <ion-backdrop *ngIf=\"isshowDrop\" (ionBackdropTap)=\"clickdrop()\"></ion-backdrop>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <app-chatinputbox (sub)=\"sub($event)\" (myfous)=\"monfous()\" (mybulr)=\"monblur()\" [username]=\"seletename\"></app-chatinputbox>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/yjcontent/yjcontent.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/yjcontent/yjcontent.module.ts ***!
  \*****************************************************/
/*! exports provided: YjcontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YjcontentPageModule", function() { return YjcontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _yjcontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yjcontent.page */ "./src/app/pages/yjcontent/yjcontent.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _yjcontent_page__WEBPACK_IMPORTED_MODULE_6__["YjcontentPage"]
    }
];
var YjcontentPageModule = /** @class */ (function () {
    function YjcontentPageModule() {
    }
    YjcontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_yjcontent_page__WEBPACK_IMPORTED_MODULE_6__["YjcontentPage"]]
        })
    ], YjcontentPageModule);
    return YjcontentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yjcontent/yjcontent.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/yjcontent/yjcontent.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-0 {\n  --opacity: 0;\n}\n\n.show-1 {\n  --opacity: 0.01;\n}\n\n.show-2 {\n  --opacity: 0.02;\n}\n\n.show-3 {\n  --opacity: 0.03;\n}\n\n.show-4 {\n  --opacity: 0.04;\n}\n\n.show-5 {\n  --opacity: 0.05;\n}\n\n.show-6 {\n  --opacity: 0.06;\n}\n\n.show-7 {\n  --opacity: 0.07;\n}\n\n.show-8 {\n  --opacity: 0.08;\n}\n\n.show-9 {\n  --opacity: 0.09;\n}\n\n.show-10 {\n  --opacity: 0.1;\n}\n\n.show-11 {\n  --opacity: 0.11;\n}\n\n.show-12 {\n  --opacity: 0.12;\n}\n\n.show-13 {\n  --opacity: 0.13;\n}\n\n.show-14 {\n  --opacity: 0.14;\n}\n\n.show-15 {\n  --opacity: 0.15;\n}\n\n.show-16 {\n  --opacity: 0.16;\n}\n\n.show-17 {\n  --opacity: 0.17;\n}\n\n.show-18 {\n  --opacity: 0.18;\n}\n\n.show-19 {\n  --opacity: 0.19;\n}\n\n.show-20 {\n  --opacity: 0.2;\n}\n\n.show-21 {\n  --opacity: 0.21;\n}\n\n.show-22 {\n  --opacity: 0.22;\n}\n\n.show-23 {\n  --opacity: 0.23;\n}\n\n.show-24 {\n  --opacity: 0.24;\n}\n\n.show-25 {\n  --opacity: 0.25;\n}\n\n.show-26 {\n  --opacity: 0.26;\n}\n\n.show-27 {\n  --opacity: 0.27;\n}\n\n.show-28 {\n  --opacity: 0.28;\n}\n\n.show-29 {\n  --opacity: 0.29;\n}\n\n.show-30 {\n  --opacity: 0.3;\n}\n\n.show-31 {\n  --opacity: 0.31;\n}\n\n.show-32 {\n  --opacity: 0.32;\n}\n\n.show-33 {\n  --opacity: 0.33;\n}\n\n.show-34 {\n  --opacity: 0.34;\n}\n\n.show-35 {\n  --opacity: 0.35;\n}\n\n.show-36 {\n  --opacity: 0.36;\n}\n\n.show-37 {\n  --opacity: 0.37;\n}\n\n.show-38 {\n  --opacity: 0.38;\n}\n\n.show-39 {\n  --opacity: 0.39;\n}\n\n.show-40 {\n  --opacity: 0.4;\n}\n\n.show-41 {\n  --opacity: 0.41;\n}\n\n.show-42 {\n  --opacity: 0.42;\n}\n\n.show-43 {\n  --opacity: 0.43;\n}\n\n.show-44 {\n  --opacity: 0.44;\n}\n\n.show-45 {\n  --opacity: 0.45;\n}\n\n.show-46 {\n  --opacity: 0.46;\n}\n\n.show-47 {\n  --opacity: 0.47;\n}\n\n.show-48 {\n  --opacity: 0.48;\n}\n\n.show-49 {\n  --opacity: 0.49;\n}\n\n.show-50 {\n  --opacity: 0.5;\n}\n\n.show-51 {\n  --opacity: 0.51;\n}\n\n.show-52 {\n  --opacity: 0.52;\n}\n\n.show-53 {\n  --opacity: 0.53;\n}\n\n.show-54 {\n  --opacity: 0.54;\n}\n\n.show-55 {\n  --opacity: 0.55;\n}\n\n.show-56 {\n  --opacity: 0.56;\n}\n\n.show-57 {\n  --opacity: 0.57;\n}\n\n.show-58 {\n  --opacity: 0.58;\n}\n\n.show-59 {\n  --opacity: 0.59;\n}\n\n.show-60 {\n  --opacity: 0.6;\n}\n\n.show-61 {\n  --opacity: 0.61;\n}\n\n.show-62 {\n  --opacity: 0.62;\n}\n\n.show-63 {\n  --opacity: 0.63;\n}\n\n.show-64 {\n  --opacity: 0.64;\n}\n\n.show-65 {\n  --opacity: 0.65;\n}\n\n.show-66 {\n  --opacity: 0.66;\n}\n\n.show-67 {\n  --opacity: 0.67;\n}\n\n.show-68 {\n  --opacity: 0.68;\n}\n\n.show-69 {\n  --opacity: 0.69;\n}\n\n.show-70 {\n  --opacity: 0.7;\n}\n\n.show-71 {\n  --opacity: 0.71;\n}\n\n.show-72 {\n  --opacity: 0.72;\n}\n\n.show-73 {\n  --opacity: 0.73;\n}\n\n.show-74 {\n  --opacity: 0.74;\n}\n\n.show-75 {\n  --opacity: 0.75;\n}\n\n.show-76 {\n  --opacity: 0.76;\n}\n\n.show-77 {\n  --opacity: 0.77;\n}\n\n.show-78 {\n  --opacity: 0.78;\n}\n\n.show-79 {\n  --opacity: 0.79;\n}\n\n.show-80 {\n  --opacity: 0.8;\n}\n\n.show-81 {\n  --opacity: 0.81;\n}\n\n.show-82 {\n  --opacity: 0.82;\n}\n\n.show-83 {\n  --opacity: 0.83;\n}\n\n.show-84 {\n  --opacity: 0.84;\n}\n\n.show-85 {\n  --opacity: 0.85;\n}\n\n.show-86 {\n  --opacity: 0.86;\n}\n\n.show-87 {\n  --opacity: 0.87;\n}\n\n.show-88 {\n  --opacity: 0.88;\n}\n\n.show-89 {\n  --opacity: 0.89;\n}\n\n.show-90 {\n  --opacity: 0.9;\n}\n\n.show-91 {\n  --opacity: 0.91;\n}\n\n.show-92 {\n  --opacity: 0.92;\n}\n\n.show-93 {\n  --opacity: 0.93;\n}\n\n.show-94 {\n  --opacity: 0.94;\n}\n\n.show-95 {\n  --opacity: 0.95;\n}\n\n.show-96 {\n  --opacity: 0.96;\n}\n\n.show-97 {\n  --opacity: 0.97;\n}\n\n.show-98 {\n  --opacity: 0.98;\n}\n\n.show-99 {\n  --opacity: 0.99;\n}\n\n.show-100 {\n  --opacity: 1;\n}\n\nion-content {\n  --background: var(--ion-gray-background-color);\n}\n\nion-content .banner {\n  width: 100%;\n  margin-top: var(--ion-platform-margin-top);\n}\n\nion-content .banner img {\n  width: 100%;\n}\n\nion-content .top-content {\n  background-color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  margin-top: -15px;\n  z-index: 2;\n  position: relative;\n}\n\nion-content .top-content .title {\n  font-weight: 600;\n  font-size: var(--ion-big-title);\n}\n\nion-content .top-content .des {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-content .top-content .des .right {\n  font-size: var(--ion-sm-text);\n}\n\nion-content .top-content .des .left {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nion-content .top-content .des .left img {\n  width: 20px;\n  position: relative;\n  z-index: 1;\n}\n\nion-content .top-content .des .left .box {\n  line-height: 22px;\n  padding: 0 15px 0 20px;\n  font-size: var(--ion-text);\n  color: #fff;\n  background: var(--ion-color-linegradient);\n  border-radius: 13px;\n  margin-left: -10px;\n}\n\nion-content .top-content ion-row {\n  text-align: center;\n  margin-top: 10px;\n}\n\nion-content .top-content ion-row .top {\n  font-size: var(--ion-title);\n}\n\nion-content .top-content ion-row .footer {\n  font-size: var(--ion-text);\n  font-weight: 600;\n}\n\nion-content .top-content .line {\n  width: 100%;\n  height: 1px;\n  background-color: var(--ion-color-light);\n  margin-top: 15px;\n}\n\nion-content .text-content {\n  background-color: #fff;\n}\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n  height: 36px;\n}\n\n.search-bar .left {\n  width: var(--ion-statusbar-left);\n  font-size: var(--ion-icon-big);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.search-bar .left img {\n  width: 22px;\n  margin-left: 5px;\n}\n\n.search-bar .right {\n  width: 52px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.search-bar .right div.round {\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-bar .center {\n  display: -webkit-box;\n  flex: 1;\n  margin: 0 15px;\n  height: 27px;\n}\n\n.app-pllist {\n  padding-top: 1px;\n  margin-top: 15px;\n  background-color: #fff;\n}\n\n.app-pllist .hfnum {\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy95amNvbnRlbnQveWpjb250ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWpjb250ZW50L3lqY29udGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBZ0IsWUFBQTtBQ0NsQjs7QURERTtFQUFnQixlQUFBO0FDS2xCOztBRExFO0VBQWdCLGVBQUE7QUNTbEI7O0FEVEU7RUFBZ0IsZUFBQTtBQ2FsQjs7QURiRTtFQUFnQixlQUFBO0FDaUJsQjs7QURqQkU7RUFBZ0IsZUFBQTtBQ3FCbEI7O0FEckJFO0VBQWdCLGVBQUE7QUN5QmxCOztBRHpCRTtFQUFnQixlQUFBO0FDNkJsQjs7QUQ3QkU7RUFBZ0IsZUFBQTtBQ2lDbEI7O0FEakNFO0VBQWdCLGVBQUE7QUNxQ2xCOztBRHJDRTtFQUFnQixjQUFBO0FDeUNsQjs7QUR6Q0U7RUFBZ0IsZUFBQTtBQzZDbEI7O0FEN0NFO0VBQWdCLGVBQUE7QUNpRGxCOztBRGpERTtFQUFnQixlQUFBO0FDcURsQjs7QURyREU7RUFBZ0IsZUFBQTtBQ3lEbEI7O0FEekRFO0VBQWdCLGVBQUE7QUM2RGxCOztBRDdERTtFQUFnQixlQUFBO0FDaUVsQjs7QURqRUU7RUFBZ0IsZUFBQTtBQ3FFbEI7O0FEckVFO0VBQWdCLGVBQUE7QUN5RWxCOztBRHpFRTtFQUFnQixlQUFBO0FDNkVsQjs7QUQ3RUU7RUFBZ0IsY0FBQTtBQ2lGbEI7O0FEakZFO0VBQWdCLGVBQUE7QUNxRmxCOztBRHJGRTtFQUFnQixlQUFBO0FDeUZsQjs7QUR6RkU7RUFBZ0IsZUFBQTtBQzZGbEI7O0FEN0ZFO0VBQWdCLGVBQUE7QUNpR2xCOztBRGpHRTtFQUFnQixlQUFBO0FDcUdsQjs7QURyR0U7RUFBZ0IsZUFBQTtBQ3lHbEI7O0FEekdFO0VBQWdCLGVBQUE7QUM2R2xCOztBRDdHRTtFQUFnQixlQUFBO0FDaUhsQjs7QURqSEU7RUFBZ0IsZUFBQTtBQ3FIbEI7O0FEckhFO0VBQWdCLGNBQUE7QUN5SGxCOztBRHpIRTtFQUFnQixlQUFBO0FDNkhsQjs7QUQ3SEU7RUFBZ0IsZUFBQTtBQ2lJbEI7O0FEaklFO0VBQWdCLGVBQUE7QUNxSWxCOztBRHJJRTtFQUFnQixlQUFBO0FDeUlsQjs7QUR6SUU7RUFBZ0IsZUFBQTtBQzZJbEI7O0FEN0lFO0VBQWdCLGVBQUE7QUNpSmxCOztBRGpKRTtFQUFnQixlQUFBO0FDcUpsQjs7QURySkU7RUFBZ0IsZUFBQTtBQ3lKbEI7O0FEekpFO0VBQWdCLGVBQUE7QUM2SmxCOztBRDdKRTtFQUFnQixjQUFBO0FDaUtsQjs7QURqS0U7RUFBZ0IsZUFBQTtBQ3FLbEI7O0FEcktFO0VBQWdCLGVBQUE7QUN5S2xCOztBRHpLRTtFQUFnQixlQUFBO0FDNktsQjs7QUQ3S0U7RUFBZ0IsZUFBQTtBQ2lMbEI7O0FEakxFO0VBQWdCLGVBQUE7QUNxTGxCOztBRHJMRTtFQUFnQixlQUFBO0FDeUxsQjs7QUR6TEU7RUFBZ0IsZUFBQTtBQzZMbEI7O0FEN0xFO0VBQWdCLGVBQUE7QUNpTWxCOztBRGpNRTtFQUFnQixlQUFBO0FDcU1sQjs7QURyTUU7RUFBZ0IsY0FBQTtBQ3lNbEI7O0FEek1FO0VBQWdCLGVBQUE7QUM2TWxCOztBRDdNRTtFQUFnQixlQUFBO0FDaU5sQjs7QURqTkU7RUFBZ0IsZUFBQTtBQ3FObEI7O0FEck5FO0VBQWdCLGVBQUE7QUN5TmxCOztBRHpORTtFQUFnQixlQUFBO0FDNk5sQjs7QUQ3TkU7RUFBZ0IsZUFBQTtBQ2lPbEI7O0FEak9FO0VBQWdCLGVBQUE7QUNxT2xCOztBRHJPRTtFQUFnQixlQUFBO0FDeU9sQjs7QUR6T0U7RUFBZ0IsZUFBQTtBQzZPbEI7O0FEN09FO0VBQWdCLGNBQUE7QUNpUGxCOztBRGpQRTtFQUFnQixlQUFBO0FDcVBsQjs7QURyUEU7RUFBZ0IsZUFBQTtBQ3lQbEI7O0FEelBFO0VBQWdCLGVBQUE7QUM2UGxCOztBRDdQRTtFQUFnQixlQUFBO0FDaVFsQjs7QURqUUU7RUFBZ0IsZUFBQTtBQ3FRbEI7O0FEclFFO0VBQWdCLGVBQUE7QUN5UWxCOztBRHpRRTtFQUFnQixlQUFBO0FDNlFsQjs7QUQ3UUU7RUFBZ0IsZUFBQTtBQ2lSbEI7O0FEalJFO0VBQWdCLGVBQUE7QUNxUmxCOztBRHJSRTtFQUFnQixjQUFBO0FDeVJsQjs7QUR6UkU7RUFBZ0IsZUFBQTtBQzZSbEI7O0FEN1JFO0VBQWdCLGVBQUE7QUNpU2xCOztBRGpTRTtFQUFnQixlQUFBO0FDcVNsQjs7QURyU0U7RUFBZ0IsZUFBQTtBQ3lTbEI7O0FEelNFO0VBQWdCLGVBQUE7QUM2U2xCOztBRDdTRTtFQUFnQixlQUFBO0FDaVRsQjs7QURqVEU7RUFBZ0IsZUFBQTtBQ3FUbEI7O0FEclRFO0VBQWdCLGVBQUE7QUN5VGxCOztBRHpURTtFQUFnQixlQUFBO0FDNlRsQjs7QUQ3VEU7RUFBZ0IsY0FBQTtBQ2lVbEI7O0FEalVFO0VBQWdCLGVBQUE7QUNxVWxCOztBRHJVRTtFQUFnQixlQUFBO0FDeVVsQjs7QUR6VUU7RUFBZ0IsZUFBQTtBQzZVbEI7O0FEN1VFO0VBQWdCLGVBQUE7QUNpVmxCOztBRGpWRTtFQUFnQixlQUFBO0FDcVZsQjs7QURyVkU7RUFBZ0IsZUFBQTtBQ3lWbEI7O0FEelZFO0VBQWdCLGVBQUE7QUM2VmxCOztBRDdWRTtFQUFnQixlQUFBO0FDaVdsQjs7QURqV0U7RUFBZ0IsZUFBQTtBQ3FXbEI7O0FEcldFO0VBQWdCLGNBQUE7QUN5V2xCOztBRHpXRTtFQUFnQixlQUFBO0FDNldsQjs7QUQ3V0U7RUFBZ0IsZUFBQTtBQ2lYbEI7O0FEalhFO0VBQWdCLGVBQUE7QUNxWGxCOztBRHJYRTtFQUFnQixlQUFBO0FDeVhsQjs7QUR6WEU7RUFBZ0IsZUFBQTtBQzZYbEI7O0FEN1hFO0VBQWdCLGVBQUE7QUNpWWxCOztBRGpZRTtFQUFnQixlQUFBO0FDcVlsQjs7QURyWUU7RUFBZ0IsZUFBQTtBQ3lZbEI7O0FEellFO0VBQWdCLGVBQUE7QUM2WWxCOztBRDdZRTtFQUFnQixZQUFBO0FDaVpsQjs7QUQ5WUE7RUFDRSw4Q0FBQTtBQ2laRjs7QURoWkU7RUFDRSxXQUFBO0VBQ0EsMENBQUE7QUNrWko7O0FEalpJO0VBQ0UsV0FBQTtBQ21aTjs7QURoWkU7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2taSjs7QURqWkk7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0FDbVpOOztBRGpaSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ21aTjs7QURsWk07RUFDRSw2QkFBQTtBQ29aUjs7QURsWk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDb1pSOztBRG5aUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNxWlY7O0FEblpRO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3FaVjs7QURqWkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDbVpOOztBRGxaTTtFQUNFLDJCQUFBO0FDb1pSOztBRGxaTTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUNvWlI7O0FEalpJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FDbVpOOztBRGhaRTtFQUNFLHNCQUFBO0FDa1pKOztBRC9ZQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNrWkY7O0FEalpFO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNtWko7O0FEbFpJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDb1pOOztBRGpaRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ21aSjs7QURsWkk7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDb1pOOztBRDVZRTtFQUNFLG9CQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDOFlKOztBRDNZQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQzhZRjs7QUQ3WUU7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQytZSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lqY29udGVudC95amNvbnRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAxMDAge1xyXG4gIC5zaG93LSN7JGl9IHsgICAtLW9wYWNpdHk6ICN7JGkgLyAxMDB9OyB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIC5iYW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLnRvcC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1iaWctdGl0bGUpO1xyXG4gICAgfVxyXG4gICAgLmRlcyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgfVxyXG4gICAgICAubGVmdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAyMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQpO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIC50b3Age1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGluZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG4uc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogdmFyKC0taW9uLXN0YXR1c2Jhci1sZWZ0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWljb24tYmlnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBkaXYucm91bmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgICAgd2lkdGg6IDIxcHg7XHJcbiAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLy9pbWcge1xyXG4gICAgLy8gIHdpZHRoOiAyMnB4O1xyXG4gICAgLy8gIGhlaWdodDogMjJweDtcclxuICAgIC8vICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgLy99XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgfVxyXG59XHJcbi5hcHAtcGxsaXN0IHtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAuaGZudW0ge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gIH1cclxufVxyXG4iLCIuc2hvdy0wIHtcbiAgLS1vcGFjaXR5OiAwO1xufVxuXG4uc2hvdy0xIHtcbiAgLS1vcGFjaXR5OiAwLjAxO1xufVxuXG4uc2hvdy0yIHtcbiAgLS1vcGFjaXR5OiAwLjAyO1xufVxuXG4uc2hvdy0zIHtcbiAgLS1vcGFjaXR5OiAwLjAzO1xufVxuXG4uc2hvdy00IHtcbiAgLS1vcGFjaXR5OiAwLjA0O1xufVxuXG4uc2hvdy01IHtcbiAgLS1vcGFjaXR5OiAwLjA1O1xufVxuXG4uc2hvdy02IHtcbiAgLS1vcGFjaXR5OiAwLjA2O1xufVxuXG4uc2hvdy03IHtcbiAgLS1vcGFjaXR5OiAwLjA3O1xufVxuXG4uc2hvdy04IHtcbiAgLS1vcGFjaXR5OiAwLjA4O1xufVxuXG4uc2hvdy05IHtcbiAgLS1vcGFjaXR5OiAwLjA5O1xufVxuXG4uc2hvdy0xMCB7XG4gIC0tb3BhY2l0eTogMC4xO1xufVxuXG4uc2hvdy0xMSB7XG4gIC0tb3BhY2l0eTogMC4xMTtcbn1cblxuLnNob3ctMTIge1xuICAtLW9wYWNpdHk6IDAuMTI7XG59XG5cbi5zaG93LTEzIHtcbiAgLS1vcGFjaXR5OiAwLjEzO1xufVxuXG4uc2hvdy0xNCB7XG4gIC0tb3BhY2l0eTogMC4xNDtcbn1cblxuLnNob3ctMTUge1xuICAtLW9wYWNpdHk6IDAuMTU7XG59XG5cbi5zaG93LTE2IHtcbiAgLS1vcGFjaXR5OiAwLjE2O1xufVxuXG4uc2hvdy0xNyB7XG4gIC0tb3BhY2l0eTogMC4xNztcbn1cblxuLnNob3ctMTgge1xuICAtLW9wYWNpdHk6IDAuMTg7XG59XG5cbi5zaG93LTE5IHtcbiAgLS1vcGFjaXR5OiAwLjE5O1xufVxuXG4uc2hvdy0yMCB7XG4gIC0tb3BhY2l0eTogMC4yO1xufVxuXG4uc2hvdy0yMSB7XG4gIC0tb3BhY2l0eTogMC4yMTtcbn1cblxuLnNob3ctMjIge1xuICAtLW9wYWNpdHk6IDAuMjI7XG59XG5cbi5zaG93LTIzIHtcbiAgLS1vcGFjaXR5OiAwLjIzO1xufVxuXG4uc2hvdy0yNCB7XG4gIC0tb3BhY2l0eTogMC4yNDtcbn1cblxuLnNob3ctMjUge1xuICAtLW9wYWNpdHk6IDAuMjU7XG59XG5cbi5zaG93LTI2IHtcbiAgLS1vcGFjaXR5OiAwLjI2O1xufVxuXG4uc2hvdy0yNyB7XG4gIC0tb3BhY2l0eTogMC4yNztcbn1cblxuLnNob3ctMjgge1xuICAtLW9wYWNpdHk6IDAuMjg7XG59XG5cbi5zaG93LTI5IHtcbiAgLS1vcGFjaXR5OiAwLjI5O1xufVxuXG4uc2hvdy0zMCB7XG4gIC0tb3BhY2l0eTogMC4zO1xufVxuXG4uc2hvdy0zMSB7XG4gIC0tb3BhY2l0eTogMC4zMTtcbn1cblxuLnNob3ctMzIge1xuICAtLW9wYWNpdHk6IDAuMzI7XG59XG5cbi5zaG93LTMzIHtcbiAgLS1vcGFjaXR5OiAwLjMzO1xufVxuXG4uc2hvdy0zNCB7XG4gIC0tb3BhY2l0eTogMC4zNDtcbn1cblxuLnNob3ctMzUge1xuICAtLW9wYWNpdHk6IDAuMzU7XG59XG5cbi5zaG93LTM2IHtcbiAgLS1vcGFjaXR5OiAwLjM2O1xufVxuXG4uc2hvdy0zNyB7XG4gIC0tb3BhY2l0eTogMC4zNztcbn1cblxuLnNob3ctMzgge1xuICAtLW9wYWNpdHk6IDAuMzg7XG59XG5cbi5zaG93LTM5IHtcbiAgLS1vcGFjaXR5OiAwLjM5O1xufVxuXG4uc2hvdy00MCB7XG4gIC0tb3BhY2l0eTogMC40O1xufVxuXG4uc2hvdy00MSB7XG4gIC0tb3BhY2l0eTogMC40MTtcbn1cblxuLnNob3ctNDIge1xuICAtLW9wYWNpdHk6IDAuNDI7XG59XG5cbi5zaG93LTQzIHtcbiAgLS1vcGFjaXR5OiAwLjQzO1xufVxuXG4uc2hvdy00NCB7XG4gIC0tb3BhY2l0eTogMC40NDtcbn1cblxuLnNob3ctNDUge1xuICAtLW9wYWNpdHk6IDAuNDU7XG59XG5cbi5zaG93LTQ2IHtcbiAgLS1vcGFjaXR5OiAwLjQ2O1xufVxuXG4uc2hvdy00NyB7XG4gIC0tb3BhY2l0eTogMC40Nztcbn1cblxuLnNob3ctNDgge1xuICAtLW9wYWNpdHk6IDAuNDg7XG59XG5cbi5zaG93LTQ5IHtcbiAgLS1vcGFjaXR5OiAwLjQ5O1xufVxuXG4uc2hvdy01MCB7XG4gIC0tb3BhY2l0eTogMC41O1xufVxuXG4uc2hvdy01MSB7XG4gIC0tb3BhY2l0eTogMC41MTtcbn1cblxuLnNob3ctNTIge1xuICAtLW9wYWNpdHk6IDAuNTI7XG59XG5cbi5zaG93LTUzIHtcbiAgLS1vcGFjaXR5OiAwLjUzO1xufVxuXG4uc2hvdy01NCB7XG4gIC0tb3BhY2l0eTogMC41NDtcbn1cblxuLnNob3ctNTUge1xuICAtLW9wYWNpdHk6IDAuNTU7XG59XG5cbi5zaG93LTU2IHtcbiAgLS1vcGFjaXR5OiAwLjU2O1xufVxuXG4uc2hvdy01NyB7XG4gIC0tb3BhY2l0eTogMC41Nztcbn1cblxuLnNob3ctNTgge1xuICAtLW9wYWNpdHk6IDAuNTg7XG59XG5cbi5zaG93LTU5IHtcbiAgLS1vcGFjaXR5OiAwLjU5O1xufVxuXG4uc2hvdy02MCB7XG4gIC0tb3BhY2l0eTogMC42O1xufVxuXG4uc2hvdy02MSB7XG4gIC0tb3BhY2l0eTogMC42MTtcbn1cblxuLnNob3ctNjIge1xuICAtLW9wYWNpdHk6IDAuNjI7XG59XG5cbi5zaG93LTYzIHtcbiAgLS1vcGFjaXR5OiAwLjYzO1xufVxuXG4uc2hvdy02NCB7XG4gIC0tb3BhY2l0eTogMC42NDtcbn1cblxuLnNob3ctNjUge1xuICAtLW9wYWNpdHk6IDAuNjU7XG59XG5cbi5zaG93LTY2IHtcbiAgLS1vcGFjaXR5OiAwLjY2O1xufVxuXG4uc2hvdy02NyB7XG4gIC0tb3BhY2l0eTogMC42Nztcbn1cblxuLnNob3ctNjgge1xuICAtLW9wYWNpdHk6IDAuNjg7XG59XG5cbi5zaG93LTY5IHtcbiAgLS1vcGFjaXR5OiAwLjY5O1xufVxuXG4uc2hvdy03MCB7XG4gIC0tb3BhY2l0eTogMC43O1xufVxuXG4uc2hvdy03MSB7XG4gIC0tb3BhY2l0eTogMC43MTtcbn1cblxuLnNob3ctNzIge1xuICAtLW9wYWNpdHk6IDAuNzI7XG59XG5cbi5zaG93LTczIHtcbiAgLS1vcGFjaXR5OiAwLjczO1xufVxuXG4uc2hvdy03NCB7XG4gIC0tb3BhY2l0eTogMC43NDtcbn1cblxuLnNob3ctNzUge1xuICAtLW9wYWNpdHk6IDAuNzU7XG59XG5cbi5zaG93LTc2IHtcbiAgLS1vcGFjaXR5OiAwLjc2O1xufVxuXG4uc2hvdy03NyB7XG4gIC0tb3BhY2l0eTogMC43Nztcbn1cblxuLnNob3ctNzgge1xuICAtLW9wYWNpdHk6IDAuNzg7XG59XG5cbi5zaG93LTc5IHtcbiAgLS1vcGFjaXR5OiAwLjc5O1xufVxuXG4uc2hvdy04MCB7XG4gIC0tb3BhY2l0eTogMC44O1xufVxuXG4uc2hvdy04MSB7XG4gIC0tb3BhY2l0eTogMC44MTtcbn1cblxuLnNob3ctODIge1xuICAtLW9wYWNpdHk6IDAuODI7XG59XG5cbi5zaG93LTgzIHtcbiAgLS1vcGFjaXR5OiAwLjgzO1xufVxuXG4uc2hvdy04NCB7XG4gIC0tb3BhY2l0eTogMC44NDtcbn1cblxuLnNob3ctODUge1xuICAtLW9wYWNpdHk6IDAuODU7XG59XG5cbi5zaG93LTg2IHtcbiAgLS1vcGFjaXR5OiAwLjg2O1xufVxuXG4uc2hvdy04NyB7XG4gIC0tb3BhY2l0eTogMC44Nztcbn1cblxuLnNob3ctODgge1xuICAtLW9wYWNpdHk6IDAuODg7XG59XG5cbi5zaG93LTg5IHtcbiAgLS1vcGFjaXR5OiAwLjg5O1xufVxuXG4uc2hvdy05MCB7XG4gIC0tb3BhY2l0eTogMC45O1xufVxuXG4uc2hvdy05MSB7XG4gIC0tb3BhY2l0eTogMC45MTtcbn1cblxuLnNob3ctOTIge1xuICAtLW9wYWNpdHk6IDAuOTI7XG59XG5cbi5zaG93LTkzIHtcbiAgLS1vcGFjaXR5OiAwLjkzO1xufVxuXG4uc2hvdy05NCB7XG4gIC0tb3BhY2l0eTogMC45NDtcbn1cblxuLnNob3ctOTUge1xuICAtLW9wYWNpdHk6IDAuOTU7XG59XG5cbi5zaG93LTk2IHtcbiAgLS1vcGFjaXR5OiAwLjk2O1xufVxuXG4uc2hvdy05NyB7XG4gIC0tb3BhY2l0eTogMC45Nztcbn1cblxuLnNob3ctOTgge1xuICAtLW9wYWNpdHk6IDAuOTg7XG59XG5cbi5zaG93LTk5IHtcbiAgLS1vcGFjaXR5OiAwLjk5O1xufVxuXG4uc2hvdy0xMDAge1xuICAtLW9wYWNpdHk6IDE7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IC5iYW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xufVxuaW9uLWNvbnRlbnQgLmJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC50b3AtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgLnRvcC1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLWJpZy10aXRsZSk7XG59XG5pb24tY29udGVudCAudG9wLWNvbnRlbnQgLmRlcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC50b3AtY29udGVudCAuZGVzIC5yaWdodCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xufVxuaW9uLWNvbnRlbnQgLnRvcC1jb250ZW50IC5kZXMgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAudG9wLWNvbnRlbnQgLmRlcyAubGVmdCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuaW9uLWNvbnRlbnQgLnRvcC1jb250ZW50IC5kZXMgLmxlZnQgLmJveCB7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nOiAwIDE1cHggMCAyMHB4O1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuaW9uLWNvbnRlbnQgLnRvcC1jb250ZW50IGlvbi1yb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAudG9wLWNvbnRlbnQgaW9uLXJvdyAudG9wIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xufVxuaW9uLWNvbnRlbnQgLnRvcC1jb250ZW50IGlvbi1yb3cgLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWNvbnRlbnQgLnRvcC1jb250ZW50IC5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLnRleHQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMzZweDtcbn1cbi5zZWFyY2gtYmFyIC5sZWZ0IHtcbiAgd2lkdGg6IHZhcigtLWlvbi1zdGF0dXNiYXItbGVmdCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLWljb24tYmlnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1iYXIgLmxlZnQgaW1nIHtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2VhcmNoLWJhciAucmlnaHQge1xuICB3aWR0aDogNTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zZWFyY2gtYmFyIC5yaWdodCBkaXYucm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2gtYmFyIC5jZW50ZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGhlaWdodDogMjdweDtcbn1cblxuLmFwcC1wbGxpc3Qge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmFwcC1wbGxpc3QgLmhmbnVtIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG1hcmdpbjogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/yjcontent/yjcontent.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/yjcontent/yjcontent.page.ts ***!
  \***************************************************/
/*! exports provided: YjcontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YjcontentPage", function() { return YjcontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_editmyrelease_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/editmyrelease.service */ "./src/app/services/editmyrelease.service.ts");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_yjlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/yjlist.service */ "./src/app/services/yjlist.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_gzlist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/gzlist.service */ "./src/app/services/gzlist.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_emojiishow_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/emojiishow.service */ "./src/app/services/emojiishow.service.ts");
/* harmony import */ var _services_plitemclick_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/plitemclick.service */ "./src/app/services/plitemclick.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/deletemyrelease.service */ "./src/app/services/deletemyrelease.service.ts");




// import {ActivatedRoute} from "@angular/router";










var YjcontentPage = /** @class */ (function () {
    // isGetcontentimg: boolean; // 是否已获取详情内图片
    function YjcontentPage(nav, sanitizer, yjlist, http, gzlist, emojiishow, activeroute, mydeletefn, userfn, itemclickfn, native, alertController, actionSheetController, editMyrelease, route) {
        this.nav = nav;
        this.sanitizer = sanitizer;
        this.yjlist = yjlist;
        this.http = http;
        this.gzlist = gzlist;
        this.emojiishow = emojiishow;
        this.activeroute = activeroute;
        this.mydeletefn = mydeletefn;
        this.userfn = userfn;
        this.itemclickfn = itemclickfn;
        this.native = native;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.editMyrelease = editMyrelease;
        this.route = route;
        this.pageObj = {
            page: 1,
            num: 20
        };
    }
    YjcontentPage.prototype.ngOnInit = function () {
        this.isshowDrop = false;
        this.setPlitem = {};
        // this.isGetcontentimg = false;
        this.toolbaropacity = '0';
    };
    YjcontentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('进入新的');
        var params = this.activeroute.snapshot.queryParams;
        this.id = params['id'];
        this.type = params['type'] ? Number(params['type']) : 0;
        var item = this.editMyrelease.getData();
        if (item.data && item.data.id) {
            var ischage = this.editMyrelease.getIschage();
            if (item.data.id != this.id || !ischage || item.type - 1 != this.type) {
                this.editMyrelease.clear();
            }
            else {
                this.yjlist.editOne(this.id, this.type, item.data);
            }
        }
        this.data = this.yjlist.getPqone(this.id, this.type);
        this.getContent();
        this.userfn.getUserp().then(function (res) {
            _this.user = res;
        });
    };
    YjcontentPage.prototype.getContent = function () {
        var _this = this;
        var hasdata = 1;
        if (!this.data || this.data && !this.data.id) {
            hasdata = 2;
        }
        var obj = {
            tid: this.id,
            page: this.pageObj.page,
            num: this.pageObj.num,
            hasdata: hasdata,
            type: this.type + 2
        };
        this.http.getData(this.http.getpllist, obj).subscribe(function (res) {
            console.log(res);
            if (!_this.data) {
                _this.data = res.result.data.result;
                _this.gzlist.setList(res.result.data.users);
            }
            _this.pllist = res.result.result;
        }, function (err) {
            console.log(err);
        });
    };
    YjcontentPage.prototype.logScrolling = function ($event) {
        // this.itemclickfn.Source.emit(2);
        var top = $event.detail.scrollTop;
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
        }
        else {
            num = 1;
        }
        this.setNavstatus(num);
    };
    YjcontentPage.prototype.assembleHTML = function (strHTML) {
        // if (!this.isGetcontentimg) {
        //   setTimeout(() => {
        //     const imgs = this.mybox.nativeElement.getElementsByTagName('img');
        //     console.log(imgs.length)
        //     for (let index = 0; index < imgs.length; index++) {
        //       const img = imgs[index];
        //       console.log(img)
        //       img.addEventListener('click', () => {
        //         console.log(index);
        //         alert(index);
        //       })
        //     }
        //   }, 3000);
        //   this.isGetcontentimg = true;
        // }
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    YjcontentPage.prototype.setNavstatus = function (num) {
        this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();
    };
    YjcontentPage.prototype.goBack = function () {
        console.log('退出');
        this.nav.back();
    };
    YjcontentPage.prototype.monfous = function () {
        console.log('时候');
        this.isshowDrop = true;
        // const el = document.querySelector('ion-footer');
        // setTimeout(() => {
        //     el.scrollIntoView(false);
        // }, 200);
        // this.positionStyle = {
        //     position: 'absolute',
        //     bottom: 0
        // };
    };
    YjcontentPage.prototype.monblur = function () {
        if (!this.emojiishow.getIsshows()) {
            this.blurClear();
        }
        // const el = document.querySelector('ion-footer');
        // el.scrollIntoView(true);
        // this.positionStyle = {
        //     position: '',
        //     bottom: ''
        // };
    };
    YjcontentPage.prototype.sub = function (content) {
        var _this = this;
        console.log(content);
        console.log(this.setPlitem);
        console.log(this.data);
        console.log(this.user);
        var obj = {
            touid: this.setPlitem.userid || this.data.userid,
            tid: this.data.id,
            content: content,
        };
        if (this.setPlitem.uid != this.user.user_id && this.setPlitem.touid == this.user.user_id) {
            obj.ishf = 1;
        }
        else {
            obj.ishf = 0;
        }
        if (this.setPlitem.pid && this.setPlitem.pid != 0) {
            obj['pid'] = this.setPlitem.pid;
        }
        else if (this.setPlitem.id && this.setPlitem.id != 0) {
            obj['pid'] = this.setPlitem.id;
        }
        else {
            obj['pid'] = 0;
        }
        console.log(obj);
        this.blurClear(1);
        this.http.postformdataloading(this.http.setpl, obj).subscribe(function (res) {
            console.log(res);
            // : todo 差头像等数据
            obj.id = res.result.id;
            obj.time = Date.parse((new Date()).toString()) / 1000;
            obj.headimg = _this.user.headimg;
            obj.dznum = 0;
            obj.user_name = _this.user.user_name;
            obj.name = res.result.user.name;
            console.log(obj.pid);
            if (obj.pid == 0) {
                _this.pllist.unshift(obj);
            }
            else {
                for (var i = 0, j = _this.pllist.length; i < j; i++) {
                    console.log(_this.pllist[i].id);
                    if (_this.pllist[i].id == obj.pid) {
                        _this.pllist[i].chrild.unshift(obj);
                        _this.pllist[i].plnum += 1;
                        console.log(_this.pllist[i]);
                        return false;
                    }
                }
            }
        });
    };
    YjcontentPage.prototype.clickdrop = function () {
        this.blurClear(1);
        this.itemclickfn.Source.emit(2);
    };
    YjcontentPage.prototype.setplItem = function (item) {
        console.log(item);
        this.isshowDrop = true;
        this.seletename = item.user_name;
        this.setPlitem = item;
    };
    YjcontentPage.prototype.blurClear = function (type) {
        if (type) {
            this.emojiishow.setIsshow(2);
        }
        this.setPlitem = {};
        this.seletename = '';
        this.isshowDrop = false;
    };
    YjcontentPage.prototype.edmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var img, buttons, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        img = "";
                        if (this.data && this.data.thumb && this.data.thumb.length > 0) {
                            img = this.data.thumb[0];
                        }
                        buttons = [{
                                text: '分享微信好友',
                                role: '',
                                handler: function () {
                                    _this.native.wechatShare(_this.data.title, _this.data.des, img || _this.http.zdomain + 'logo108.png', 2);
                                }
                            },
                            {
                                text: '分享到朋友圈',
                                role: '',
                                handler: function () {
                                    _this.native.wechatShare(_this.data.title, _this.data.des, img || _this.http.zdomain + 'logo108.png', 1);
                                }
                            }
                        ];
                        if (this.user.user_id == this.data.userid) {
                            buttons.push.apply(buttons, [{
                                    text: '编辑',
                                    handler: function () {
                                        _this.editMyrelease.setData(_this.data, _this.type + 1);
                                        _this.route.navigate(['/fbyj'], { queryParams: { type: _this.type + 1, isedit: 1 } });
                                    }
                                }, {
                                    text: '删除',
                                    handler: function () {
                                        _this.sureDelete();
                                    }
                                }]);
                        }
                        buttons.push({
                            text: '取消',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        });
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: '操作',
                                buttons: buttons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 设置删除本条及保持删除的id
     * @Date: 2019-11-19 21:30:50
     * @param {type}
     * @return:
     */
    YjcontentPage.prototype.seleteItem = function () {
        var _this = this;
        console.log(this.data);
        this.http.getDataloading(this.http.deletepqitem, { id: this.id, type: this.type + 2 }).subscribe(function (res) {
            _this.yjlist.deleteone(_this.id, _this.type);
            _this.mydeletefn.setId(_this.id, _this.type + 1);
            _this.goBack();
        }, function (err) { });
    };
    YjcontentPage.prototype.sureDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示',
                            message: '删除后无法恢复!',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: '确定删除',
                                    handler: function () {
                                        _this.seleteItem();
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
    YjcontentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _services_yjlist_service__WEBPACK_IMPORTED_MODULE_6__["YjlistService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
        { type: _services_gzlist_service__WEBPACK_IMPORTED_MODULE_8__["GzlistService"] },
        { type: _services_emojiishow_service__WEBPACK_IMPORTED_MODULE_10__["EmojiishowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
        { type: src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_13__["DeletemyreleaseService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: _services_plitemclick_service__WEBPACK_IMPORTED_MODULE_11__["PlitemclickService"] },
        { type: src_app_services_native_service__WEBPACK_IMPORTED_MODULE_2__["NativeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _services_editmyrelease_service__WEBPACK_IMPORTED_MODULE_1__["EditmyreleaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("myBox", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], YjcontentPage.prototype, "mybox", void 0);
    YjcontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-yjcontent',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yjcontent.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yjcontent/yjcontent.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yjcontent.page.scss */ "./src/app/pages/yjcontent/yjcontent.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _services_yjlist_service__WEBPACK_IMPORTED_MODULE_6__["YjlistService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _services_gzlist_service__WEBPACK_IMPORTED_MODULE_8__["GzlistService"], _services_emojiishow_service__WEBPACK_IMPORTED_MODULE_10__["EmojiishowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_13__["DeletemyreleaseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _services_plitemclick_service__WEBPACK_IMPORTED_MODULE_11__["PlitemclickService"],
            src_app_services_native_service__WEBPACK_IMPORTED_MODULE_2__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _services_editmyrelease_service__WEBPACK_IMPORTED_MODULE_1__["EditmyreleaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], YjcontentPage);
    return YjcontentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yjcontent-yjcontent-module.js.map