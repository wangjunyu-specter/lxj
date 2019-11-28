(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yjcontent-yjcontent-module"],{

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

/***/ "./src/app/pages/yjcontent/yjcontent.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/yjcontent/yjcontent.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-06-22 21:52:44\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-26 23:59:37\n * @Description: file content\n -->\n<ion-header [translucent]=\"true\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\n    <div class=\"search-bar\">\n      <div class=\"left\" (click)=\"goBack()\">\n        <img src=\"/assets/backbg.svg\" alt=\"\">\n      </div>\n      <div class=\"center\">\n      </div>\n      <div class=\"right\">\n        <!--<img src=\"/assets/wechatbg.svg\" alt=\"\">-->\n        <div class=\"round\"><ion-icon name=\"more\" mode=\"ios\" (click)=\"edmit()\"></ion-icon></div>\n        <!--<div class=\"round\" (click)=\"toprightmore($event)\"><ion-icon name=\"more\" mode=\"ios\"></ion-icon></div>-->\n        <!--<img src=\"/assets/czbg.svg\" alt=\"\">-->\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <div class=\"banner\">\n    <img *ngIf=\"data\" [src]=\"data.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\n  </div>\n  <div class=\"top-content ion-padding-top ion-padding-start ion-padding-end\" *ngIf=\"data\">\n    <div class=\"title\">{{data.title}}</div>\n    <div class=\"des\">\n      <div class=\"left\">\n        <img src=\"../../../assets/tagleft.svg\" alt=\"\"><div class=\"box\" *ngIf=\"data.tag && data.tag != 'null'\">{{data.tag}}</div>\n      </div>\n      <div class=\"right\">\n        <ion-text color=\"medium\">{{data.readnum}}阅读</ion-text>\n      </div>\n    </div>\n    <ion-row>\n      <ion-col *ngIf=\"data.destination && data.destination != 'null'\">\n        <div class=\"top\">目的地</div>\n        <div class=\"footer\">{{data.destination}}</div>\n      </ion-col>\n      <ion-col *ngIf=\"data.outtime && data.outtime != 'null'\">\n        <div class=\"top\">出发时间</div>\n        <div class=\"footer\">{{data.outtime | time: '.'}}</div>\n      </ion-col>\n      <ion-col *ngIf=\"data.days && data.days != 'null'\">\n        <div class=\"top\">出行天数</div>\n        <div class=\"footer\">{{data.days}}天</div>\n      </ion-col>\n      <ion-col *ngIf=\"data.money && data.money != 'null' && data.money != '0'\">\n        <div class=\"top\">人均花费</div>\n        <div class=\"footer\">¥ {{data.money}}</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"line\"></div>\n  </div>\n  <div class=\"text-content\" padding #myBox>\n    <div *ngIf=\"data && data.content\" [innerHTML]=\"assembleHTML(data.content)\"></div>\n  </div>\n  <div *ngIf=\"data\" class=\"app-pllist ion-padding-bottom ion-margin-bottom\">\n    <div class=\"hfnum\">{{data.plnum}}条回复</div>\n    <app-pllist *ngFor=\"let item of pllist\" [data]=\"item\" [tid]=\"id\" (setItem)=\"setplItem($event)\"></app-pllist>\n  </div>\n  <ion-backdrop *ngIf=\"isshowDrop\" (ionBackdropTap)=\"clickdrop()\"></ion-backdrop>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <app-chatinputbox (sub)=\"sub($event)\" (myfous)=\"monfous()\" (mybulr)=\"monblur()\" [username]=\"seletename\"></app-chatinputbox>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/yjcontent/yjcontent.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/yjcontent/yjcontent.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show-0 {\n  --opacity: 0; }\n\n.show-1 {\n  --opacity: 0.01; }\n\n.show-2 {\n  --opacity: 0.02; }\n\n.show-3 {\n  --opacity: 0.03; }\n\n.show-4 {\n  --opacity: 0.04; }\n\n.show-5 {\n  --opacity: 0.05; }\n\n.show-6 {\n  --opacity: 0.06; }\n\n.show-7 {\n  --opacity: 0.07; }\n\n.show-8 {\n  --opacity: 0.08; }\n\n.show-9 {\n  --opacity: 0.09; }\n\n.show-10 {\n  --opacity: 0.1; }\n\n.show-11 {\n  --opacity: 0.11; }\n\n.show-12 {\n  --opacity: 0.12; }\n\n.show-13 {\n  --opacity: 0.13; }\n\n.show-14 {\n  --opacity: 0.14; }\n\n.show-15 {\n  --opacity: 0.15; }\n\n.show-16 {\n  --opacity: 0.16; }\n\n.show-17 {\n  --opacity: 0.17; }\n\n.show-18 {\n  --opacity: 0.18; }\n\n.show-19 {\n  --opacity: 0.19; }\n\n.show-20 {\n  --opacity: 0.2; }\n\n.show-21 {\n  --opacity: 0.21; }\n\n.show-22 {\n  --opacity: 0.22; }\n\n.show-23 {\n  --opacity: 0.23; }\n\n.show-24 {\n  --opacity: 0.24; }\n\n.show-25 {\n  --opacity: 0.25; }\n\n.show-26 {\n  --opacity: 0.26; }\n\n.show-27 {\n  --opacity: 0.27; }\n\n.show-28 {\n  --opacity: 0.28; }\n\n.show-29 {\n  --opacity: 0.29; }\n\n.show-30 {\n  --opacity: 0.3; }\n\n.show-31 {\n  --opacity: 0.31; }\n\n.show-32 {\n  --opacity: 0.32; }\n\n.show-33 {\n  --opacity: 0.33; }\n\n.show-34 {\n  --opacity: 0.34; }\n\n.show-35 {\n  --opacity: 0.35; }\n\n.show-36 {\n  --opacity: 0.36; }\n\n.show-37 {\n  --opacity: 0.37; }\n\n.show-38 {\n  --opacity: 0.38; }\n\n.show-39 {\n  --opacity: 0.39; }\n\n.show-40 {\n  --opacity: 0.4; }\n\n.show-41 {\n  --opacity: 0.41; }\n\n.show-42 {\n  --opacity: 0.42; }\n\n.show-43 {\n  --opacity: 0.43; }\n\n.show-44 {\n  --opacity: 0.44; }\n\n.show-45 {\n  --opacity: 0.45; }\n\n.show-46 {\n  --opacity: 0.46; }\n\n.show-47 {\n  --opacity: 0.47; }\n\n.show-48 {\n  --opacity: 0.48; }\n\n.show-49 {\n  --opacity: 0.49; }\n\n.show-50 {\n  --opacity: 0.5; }\n\n.show-51 {\n  --opacity: 0.51; }\n\n.show-52 {\n  --opacity: 0.52; }\n\n.show-53 {\n  --opacity: 0.53; }\n\n.show-54 {\n  --opacity: 0.54; }\n\n.show-55 {\n  --opacity: 0.55; }\n\n.show-56 {\n  --opacity: 0.56; }\n\n.show-57 {\n  --opacity: 0.57; }\n\n.show-58 {\n  --opacity: 0.58; }\n\n.show-59 {\n  --opacity: 0.59; }\n\n.show-60 {\n  --opacity: 0.6; }\n\n.show-61 {\n  --opacity: 0.61; }\n\n.show-62 {\n  --opacity: 0.62; }\n\n.show-63 {\n  --opacity: 0.63; }\n\n.show-64 {\n  --opacity: 0.64; }\n\n.show-65 {\n  --opacity: 0.65; }\n\n.show-66 {\n  --opacity: 0.66; }\n\n.show-67 {\n  --opacity: 0.67; }\n\n.show-68 {\n  --opacity: 0.68; }\n\n.show-69 {\n  --opacity: 0.69; }\n\n.show-70 {\n  --opacity: 0.7; }\n\n.show-71 {\n  --opacity: 0.71; }\n\n.show-72 {\n  --opacity: 0.72; }\n\n.show-73 {\n  --opacity: 0.73; }\n\n.show-74 {\n  --opacity: 0.74; }\n\n.show-75 {\n  --opacity: 0.75; }\n\n.show-76 {\n  --opacity: 0.76; }\n\n.show-77 {\n  --opacity: 0.77; }\n\n.show-78 {\n  --opacity: 0.78; }\n\n.show-79 {\n  --opacity: 0.79; }\n\n.show-80 {\n  --opacity: 0.8; }\n\n.show-81 {\n  --opacity: 0.81; }\n\n.show-82 {\n  --opacity: 0.82; }\n\n.show-83 {\n  --opacity: 0.83; }\n\n.show-84 {\n  --opacity: 0.84; }\n\n.show-85 {\n  --opacity: 0.85; }\n\n.show-86 {\n  --opacity: 0.86; }\n\n.show-87 {\n  --opacity: 0.87; }\n\n.show-88 {\n  --opacity: 0.88; }\n\n.show-89 {\n  --opacity: 0.89; }\n\n.show-90 {\n  --opacity: 0.9; }\n\n.show-91 {\n  --opacity: 0.91; }\n\n.show-92 {\n  --opacity: 0.92; }\n\n.show-93 {\n  --opacity: 0.93; }\n\n.show-94 {\n  --opacity: 0.94; }\n\n.show-95 {\n  --opacity: 0.95; }\n\n.show-96 {\n  --opacity: 0.96; }\n\n.show-97 {\n  --opacity: 0.97; }\n\n.show-98 {\n  --opacity: 0.98; }\n\n.show-99 {\n  --opacity: 0.99; }\n\n.show-100 {\n  --opacity: 1; }\n\nion-content {\n  --background: var(--ion-gray-background-color); }\n\nion-content .banner {\n    width: 100%;\n    margin-top: var(--ion-platform-margin-top); }\n\nion-content .banner img {\n      width: 100%; }\n\nion-content .top-content {\n    background-color: #fff;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    margin-top: -15px;\n    z-index: 2;\n    position: relative; }\n\nion-content .top-content .title {\n      font-weight: 600;\n      font-size: var(--ion-big-title); }\n\nion-content .top-content .des {\n      margin-top: 10px;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center; }\n\nion-content .top-content .des .right {\n        font-size: var(--ion-sm-text); }\n\nion-content .top-content .des .left {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center; }\n\nion-content .top-content .des .left img {\n          width: 20px;\n          position: relative;\n          z-index: 1; }\n\nion-content .top-content .des .left .box {\n          line-height: 22px;\n          padding: 0 15px 0 20px;\n          font-size: var(--ion-text);\n          color: #fff;\n          background: var(--ion-color-linegradient);\n          border-radius: 13px;\n          margin-left: -10px; }\n\nion-content .top-content ion-row {\n      text-align: center;\n      margin-top: 10px; }\n\nion-content .top-content ion-row .top {\n        font-size: var(--ion-title); }\n\nion-content .top-content ion-row .footer {\n        font-size: var(--ion-text);\n        font-weight: 600; }\n\nion-content .top-content .line {\n      width: 100%;\n      height: 1px;\n      background-color: var(--ion-color-light);\n      margin-top: 15px; }\n\nion-content .text-content {\n    background-color: #fff; }\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n  height: 36px; }\n\n.search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n\n.search-bar .left img {\n      width: 22px;\n      margin-left: 5px; }\n\n.search-bar .right {\n    width: 52px;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end; }\n\n.search-bar .right div.round {\n      background-color: rgba(0, 0, 0, 0.6);\n      width: 21px;\n      height: 21px;\n      border-radius: 50%;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center; }\n\n.search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px; }\n\n.app-pllist {\n  padding-top: 1px;\n  margin-top: 15px;\n  background-color: #fff; }\n\n.app-pllist .hfnum {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark);\n    margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy95amNvbnRlbnQveWpjb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFnQixZQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGNBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixjQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGNBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixjQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGNBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixjQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLFlBQVUsRUFBQTs7QUFHNUI7RUFDRSw4Q0FBYSxFQUFBOztBQURmO0lBR0ksV0FBVztJQUNYLDBDQUEwQyxFQUFBOztBQUo5QztNQU1NLFdBQVcsRUFBQTs7QUFOakI7SUFVSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQixFQUFBOztBQWZ0QjtNQWlCTSxnQkFBZ0I7TUFDaEIsK0JBQStCLEVBQUE7O0FBbEJyQztNQXFCTSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsbUJBQW1CLEVBQUE7O0FBekJ6QjtRQTJCUSw2QkFBNkIsRUFBQTs7QUEzQnJDO1FBOEJRLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLG1CQUFtQixFQUFBOztBQWpDM0I7VUFtQ1UsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixVQUFVLEVBQUE7O0FBckNwQjtVQXdDVSxpQkFBaUI7VUFDakIsc0JBQXNCO1VBQ3RCLDBCQUEwQjtVQUMxQixXQUFXO1VBQ1gseUNBQXlDO1VBR3pDLG1CQUFtQjtVQUNuQixrQkFBa0IsRUFBQTs7QUFoRDVCO01BcURNLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTs7QUF0RHRCO1FBd0RRLDJCQUEyQixFQUFBOztBQXhEbkM7UUEyRFEsMEJBQTBCO1FBQzFCLGdCQUFnQixFQUFBOztBQTVEeEI7TUFnRU0sV0FBVztNQUNYLFdBQVc7TUFDWCx3Q0FBd0M7TUFDeEMsZ0JBQWdCLEVBQUE7O0FBbkV0QjtJQXVFSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBUGQ7SUFTSSxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBOztBQWR2QjtNQWdCTSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7O0FBakJ0QjtJQXFCSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBQTs7QUF4QjdCO01BMEJNLG9DQUFnQztNQUNoQyxXQUFXO01BQ1gsWUFBWTtNQUdaLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixtQkFBbUIsRUFBQTs7QUFuQ3pCO0lBNENJLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsY0FBYztJQUNkLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUh4QjtJQUtJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWpjb250ZW50L3lqY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9yICRpIGZyb20gMCB0aHJvdWdoIDEwMCB7XHJcbiAgLnNob3ctI3skaX0geyAgIC0tb3BhY2l0eTogI3skaSAvIDEwMH07IH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgLmJhbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4tdG9wKTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAudG9wLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWJpZy10aXRsZSk7XHJcbiAgICB9XHJcbiAgICAuZGVzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAucmlnaHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICB9XHJcbiAgICAgIC5sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDIwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudCk7XHJcbiAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgLnRvcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5saW5lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudGV4dC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcbi5zZWFyY2gtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiB2YXIoLS1pb24tc3RhdHVzYmFyLWxlZnQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24taWNvbi1iaWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGRpdi5yb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgICB3aWR0aDogMjFweDtcclxuICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAvL2ltZyB7XHJcbiAgICAvLyAgd2lkdGg6IDIycHg7XHJcbiAgICAvLyAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgLy8gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAvL31cclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICB9XHJcbn1cclxuLmFwcC1wbGxpc3Qge1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC5oZm51bSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
        this.isGetcontentimg = false;
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
        var _this = this;
        if (!this.isGetcontentimg) {
            setTimeout(function () {
                var imgs = _this.mybox.nativeElement.getElementsByTagName('img');
                console.log(imgs.length);
                var _loop_1 = function (index) {
                    var img = imgs[index];
                    console.log(img);
                    img.addEventListener('click', function () {
                        console.log(index);
                        alert(index);
                    });
                };
                for (var index = 0; index < imgs.length; index++) {
                    _loop_1(index);
                }
            }, 3000);
            this.isGetcontentimg = true;
        }
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
            var buttons, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [{
                                text: '分享到微信',
                                role: '',
                                handler: function () {
                                    _this.native.wechatShare();
                                }
                            }, {
                                text: '分享到微博',
                                handler: function () {
                                    _this.native.weboShare();
                                }
                            }];
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("myBox"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], YjcontentPage.prototype, "mybox", void 0);
    YjcontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-yjcontent',
            template: __webpack_require__(/*! ./yjcontent.page.html */ "./src/app/pages/yjcontent/yjcontent.page.html"),
            styles: [__webpack_require__(/*! ./yjcontent.page.scss */ "./src/app/pages/yjcontent/yjcontent.page.scss")]
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