(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sjdpyx-sjdpyx-module"],{

/***/ "./src/app/pages/sjdpyx/sjdpyx.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sjdpyx/sjdpyx.module.ts ***!
  \***********************************************/
/*! exports provided: SjdpyxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjdpyxPageModule", function() { return SjdpyxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sjdpyx_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sjdpyx.page */ "./src/app/pages/sjdpyx/sjdpyx.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _sjdpyx_page__WEBPACK_IMPORTED_MODULE_6__["SjdpyxPage"]
    }
];
var SjdpyxPageModule = /** @class */ (function () {
    function SjdpyxPageModule() {
    }
    SjdpyxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sjdpyx_page__WEBPACK_IMPORTED_MODULE_6__["SjdpyxPage"]]
        })
    ], SjdpyxPageModule);
    return SjdpyxPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sjdpyx/sjdpyx.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/sjdpyx/sjdpyx.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-title>店铺印象</ion-title>\r\n    <ion-buttons slot=\"start\" color=\"light\">\r\n      <ion-back-button color=\"light\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"none\" class=\"top\">\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>骆驼户外旅游旗舰店</h2>\r\n        <p><span><img class=\"kb\" src=\"./assets/kb.svg\" alt=\"\">认证商家</span><span><img src=\"./assets/dz.svg\" alt=\"\">金牌口碑</span></p>\r\n      </ion-label>\r\n      <app-mybutton [bname]=\"'收藏'\" slot=\"end\"></app-mybutton>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"line\"></div>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label class=\"flexlabel\">\r\n        <div>用户点评</div>\r\n        <h2>99%满意</h2>\r\n        <p>高于同行99%</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-label class=\"flexlabel\">\r\n        <div>店铺标签</div>\r\n        <h2>认证商家</h2>\r\n        <h2>金牌口碑</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"line\"></div>\r\n  <ion-list class=\"list-end\">\r\n    <ion-item>\r\n      <ion-label>在线咨询</ion-label>\r\n      <p slot=\"end\">凌妹子<img src=\"./assets/xb.svg\" alt=\"\"></p>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>资质</ion-label>\r\n      <p slot=\"end\"><img src=\"./assets/xb.svg\" alt=\"\">已签署消保协议</p>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>企业资质</ion-label>\r\n      <p slot=\"end\"><img src=\"./assets/xb.svg\" alt=\"\">营业执照</p>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>开店时间</ion-label>\r\n      <p slot=\"end\">2018-10-20 17:20:34</p>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/sjdpyx/sjdpyx.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/sjdpyx/sjdpyx.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  ion-toolbar ion-title {\n    --color: #fff; }\n  .line {\n  height: 8px;\n  background-color: var(--ion-gray-background-color); }\n  ion-list {\n  margin-bottom: 0; }\n  .flexlabel {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .flexlabel h2 {\n    font-weight: 600; }\n  .flexlabel div, .flexlabel h2 {\n    margin-right: 15px; }\n  .top {\n  padding: 10px 0; }\n  .top ion-label span {\n    margin-right: 10px; }\n  .top ion-label img {\n    width: 15px;\n    margin-right: 5px; }\n  .top ion-label img.kb {\n      margin-bottom: -2px; }\n  .list-end ion-item p {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center; }\n  .list-end img {\n  width: 20px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zamRweXgvc2pkcHl4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhGQUFhLEVBQUE7RUFEZjtJQUdJLGFBQVEsRUFBQTtFQUdaO0VBQ0UsV0FBVztFQUNYLGtEQUFrRCxFQUFBO0VBRXBEO0VBQ0UsZ0JBQWdCLEVBQUE7RUFFbEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTtFQUpyQjtJQU1JLGdCQUFnQixFQUFBO0VBTnBCO0lBU0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDRSxlQUFlLEVBQUE7RUFEakI7SUFJTSxrQkFBa0IsRUFBQTtFQUp4QjtJQU9NLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQVJ2QjtNQVVRLG1CQUFtQixFQUFBO0VBSzNCO0VBR00sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7RUFOekI7RUFVSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zamRweXgvc2pkcHl4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmZsZXhsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIGRpdiwgaDJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcbi50b3Age1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBpb24tbGFiZWwge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgJi5rYiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubGlzdC1lbmQge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIHAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sjdpyx/sjdpyx.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/sjdpyx/sjdpyx.page.ts ***!
  \*********************************************/
/*! exports provided: SjdpyxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjdpyxPage", function() { return SjdpyxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SjdpyxPage = /** @class */ (function () {
    function SjdpyxPage() {
    }
    SjdpyxPage.prototype.ngOnInit = function () {
    };
    SjdpyxPage.prototype.sc = function () {
    };
    SjdpyxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sjdpyx',
            template: __webpack_require__(/*! ./sjdpyx.page.html */ "./src/app/pages/sjdpyx/sjdpyx.page.html"),
            styles: [__webpack_require__(/*! ./sjdpyx.page.scss */ "./src/app/pages/sjdpyx/sjdpyx.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SjdpyxPage);
    return SjdpyxPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sjdpyx-sjdpyx-module.js.map