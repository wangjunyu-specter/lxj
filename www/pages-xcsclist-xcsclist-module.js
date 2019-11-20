(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-xcsclist-xcsclist-module"],{

/***/ "./src/app/pages/xcsclist/xcsclist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/xcsclist/xcsclist.module.ts ***!
  \***************************************************/
/*! exports provided: XcsclistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XcsclistPageModule", function() { return XcsclistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _xcsclist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xcsclist.page */ "./src/app/pages/xcsclist/xcsclist.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _xcsclist_page__WEBPACK_IMPORTED_MODULE_6__["XcsclistPage"]
    }
];
var XcsclistPageModule = /** @class */ (function () {
    function XcsclistPageModule() {
    }
    XcsclistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_xcsclist_page__WEBPACK_IMPORTED_MODULE_6__["XcsclistPage"]]
        })
    ], XcsclistPageModule);
    return XcsclistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/xcsclist/xcsclist.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/xcsclist/xcsclist.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>行程收藏</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <app-productlist *ngFor=\"let item of goodslist\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"正在加载...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/xcsclist/xcsclist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/xcsclist/xcsclist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3hjc2NsaXN0L3hjc2NsaXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/xcsclist/xcsclist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/xcsclist/xcsclist.page.ts ***!
  \*************************************************/
/*! exports provided: XcsclistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XcsclistPage", function() { return XcsclistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_xcsclist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/xcsclist.service */ "./src/app/services/xcsclist.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");



// import {Router} from "@angular/router";



var XcsclistPage = /** @class */ (function () {
    function XcsclistPage(nav, xcxlfn, http, topage) {
        this.nav = nav;
        this.xcxlfn = xcxlfn;
        this.http = http;
        this.topage = topage;
    }
    XcsclistPage.prototype.ngOnInit = function () {
        this.goodslist = this.xcxlfn.getgoodslist();
    };
    XcsclistPage.prototype.goBack = function () {
        this.nav.back();
    };
    XcsclistPage.prototype.loadData = function (event) {
        this.xcxlfn.addPage();
        this.xcxlfn.getListhttp(1).then(function (res) {
            event.target.complete();
        }).catch(function (err) {
            event.target.complete();
            // event.target.disabled = true;
        });
    };
    XcsclistPage.prototype.doRefresh = function (event) {
        this.xcxlfn.doRefresh();
        this.xcxlfn.getListhttp(1).then(function (res) {
            event.target.complete();
        }).catch(function (err) {
            event.target.complete();
            // event.target.disabled = true;
        });
    };
    XcsclistPage.prototype.openpage = function (data) {
        console.log(data);
        this.topage.toPage(2, data.goods_id);
    };
    XcsclistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xcsclist',
            template: __webpack_require__(/*! ./xcsclist.page.html */ "./src/app/pages/xcsclist/xcsclist.page.html"),
            styles: [__webpack_require__(/*! ./xcsclist.page.scss */ "./src/app/pages/xcsclist/xcsclist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_xcsclist_service__WEBPACK_IMPORTED_MODULE_4__["XcsclistService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_5__["TopageService"]])
    ], XcsclistPage);
    return XcsclistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-xcsclist-xcsclist-module.js.map