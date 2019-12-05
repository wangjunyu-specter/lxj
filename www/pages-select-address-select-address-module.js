(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-select-address-select-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-address/select-address.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-address/select-address.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-03-20 21:01:10\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-21 15:56:09\r\n * @Description: file content\r\n -->\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>选择目的地</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <app-pagetitle [myname]=\"'GPS定位'\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"btn-box\" *ngIf=\"loaction\">\r\n    <app-seletebtn [name]=\"loaction.city\" (mclick)=\"seleteAddress($event)\" [graybg]=\"true\" [isactive]=\"true\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"line\"></div>\r\n  <!-- <app-pagetitle [myname]=\"'最近浏览'\" [smpadding]=\"true\"></app-pagetitle> 暂时隐藏 其他城市暂未开放 所以隐藏\r\n  <div class=\"btn-box\">\r\n    <app-seletebtn [name]=\"'贵阳'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '贵阳'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'吉林'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '吉林'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'新疆'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '新疆'\" [graybg]=\"true\"></app-seletebtn>\r\n  </div> -->\r\n  <!-- <div class=\"line\"></div>\r\n  <app-pagetitle [myname]=\"'其他推荐'\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"btn-box\">\r\n    <app-seletebtn [name]=\"'北京'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '北京'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'广东'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '广东'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'河北'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '河北'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'苏州'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '苏州'\" [graybg]=\"true\"></app-seletebtn>\r\n    <app-seletebtn [name]=\"'山西'\" (mclick)=\"seleteAddress($event)\" [isactive]=\"isactive == '山西'\" [graybg]=\"true\"></app-seletebtn>\r\n  </div> -->\r\n</ion-content>\r\n");

/***/ }),

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

/***/ "./src/app/pages/select-address/select-address.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/select-address/select-address.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.btn-box app-seletebtn {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zZWxlY3QtYWRkcmVzcy9zZWxlY3QtYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbGVjdC1hZGRyZXNzL3NlbGVjdC1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxlY3QtYWRkcmVzcy9zZWxlY3QtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhcHAtc2VsZXRlYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG4iLCIuYnRuLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmJ0bi1ib3ggYXBwLXNlbGV0ZWJ0biB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */");

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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-03-21 23:15:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-21 15:57:52
 * @Description: file content
 */



var SelectAddressPage = /** @class */ (function () {
    function SelectAddressPage(nav, userfn) {
        this.nav = nav;
        this.userfn = userfn;
    }
    SelectAddressPage.prototype.ngOnInit = function () {
        this.isactive = '成都';
        this.loaction = this.userfn.getLocation();
    };
    SelectAddressPage.prototype.seleteAddress = function ($event) {
        this.isactive = $event.name;
        this.nav.back();
    };
    SelectAddressPage.prototype.goBack = function () {
        this.nav.back();
    };
    SelectAddressPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    SelectAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-address',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-address/select-address.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-address.page.scss */ "./src/app/pages/select-address/select-address.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SelectAddressPage);
    return SelectAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-select-address-select-address-module.js.map