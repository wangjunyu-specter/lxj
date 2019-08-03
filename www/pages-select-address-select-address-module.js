(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-select-address-select-address-module"],{

/***/ "./src/app/pages/select-address/select-address.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/select-address/select-address.module.ts ***!
  \***************************************************************/
/*! exports provided: SelectAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddressPageModule", function() { return SelectAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-address.page */ "./src/app/pages/select-address/select-address.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _select_address_page__WEBPACK_IMPORTED_MODULE_6__["SelectAddressPage"]
    }
];
var SelectAddressPageModule = /** @class */ (function () {
    function SelectAddressPageModule() {
    }
    SelectAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_select_address_page__WEBPACK_IMPORTED_MODULE_6__["SelectAddressPage"]]
        })
    ], SelectAddressPageModule);
    return SelectAddressPageModule;
}());



/***/ }),

/***/ "./src/app/pages/select-address/select-address.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/select-address/select-address.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>选择目的地</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <app-pagetitle [myname]=\"'GPS定位'\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"btn-box\">\r\n    <app-seletebtn [name]=\"'成都'\" (mclick)=\"seleteAddress($event)\" [graybg]=\"true\" [isactive]=\"isactive == '成都'\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"line\"></div>\r\n  <app-pagetitle [myname]=\"'最近浏览'\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"btn-box\">\r\n    <app-seletebtn [name]=\"'贵阳'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '贵阳'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'吉林'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '吉林'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'新疆'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '新疆'\" [graybg]=\"true\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"line\"></div>\r\n  <app-pagetitle [myname]=\"'其他推荐'\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"btn-box\">\r\n    <app-seletebtn [name]=\"'北京'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '北京'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'广东'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '广东'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'河北'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '河北'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'苏州'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '苏州'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'山西'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '山西'\" [graybg]=\"true\"></app-seletebtn>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/select-address/select-address.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/select-address/select-address.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap; }\n  .btn-box app-seletebtn {\n    margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zZWxlY3QtYWRkcmVzcy9zZWxlY3QtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0VBTGpCO0lBT0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxlY3QtYWRkcmVzcy9zZWxlY3QtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhcHAtc2VsZXRlYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/select-address/select-address.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/select-address/select-address.page.ts ***!
  \*************************************************************/
/*! exports provided: SelectAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddressPage", function() { return SelectAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SelectAddressPage = /** @class */ (function () {
    function SelectAddressPage(nav) {
        this.nav = nav;
    }
    SelectAddressPage.prototype.ngOnInit = function () {
        this.isactive = '成都';
    };
    SelectAddressPage.prototype.seleteAddress = function ($event) {
        this.isactive = $event.name;
        this.nav.back();
    };
    SelectAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-address',
            template: __webpack_require__(/*! ./select-address.page.html */ "./src/app/pages/select-address/select-address.page.html"),
            styles: [__webpack_require__(/*! ./select-address.page.scss */ "./src/app/pages/select-address/select-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SelectAddressPage);
    return SelectAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-select-address-select-address-module.js.map