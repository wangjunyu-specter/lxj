(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-center-more-center-more-module"],{

/***/ "./src/app/pages/center-more/center-more.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/center-more/center-more.module.ts ***!
  \*********************************************************/
/*! exports provided: CenterMorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterMorePageModule", function() { return CenterMorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _center_more_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./center-more.page */ "./src/app/pages/center-more/center-more.page.ts");







// import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: _center_more_page__WEBPACK_IMPORTED_MODULE_6__["CenterMorePage"]
    }
];
var CenterMorePageModule = /** @class */ (function () {
    function CenterMorePageModule() {
    }
    CenterMorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                // ComponentsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_center_more_page__WEBPACK_IMPORTED_MODULE_6__["CenterMorePage"]]
        })
    ], CenterMorePageModule);
    return CenterMorePageModule;
}());



/***/ }),

/***/ "./src/app/pages/center-more/center-more.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/center-more/center-more.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>更多设置</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngIf=\"user && user.is_surplus_open == 0\" button (click)=\"setPaypwd()\">设置支付密码</ion-item>\n    <ion-item *ngIf=\"user && user.is_surplus_open == 1\" button (click)=\"setPaypwd()\">修改支付密码</ion-item>\n    <ion-item *ngIf=\"user\" button (click)=\"gotopage(1)\">地址管理</ion-item>\n    <!-- <ion-item button (click)=\"tobill()\">账单</ion-item> 感觉无用 wjy -->\n    <ion-item button>修改登录密码</ion-item>\n    <ion-item button (click)=\"toabout()\" *ngIf=\"ismobile\">关于我们</ion-item>\n  </ion-list>\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"loginout()\">退出登录</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/center-more/center-more.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/center-more/center-more.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NlbnRlci1tb3JlL2NlbnRlci1tb3JlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/center-more/center-more.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/center-more/center-more.page.ts ***!
  \*******************************************************/
/*! exports provided: CenterMorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterMorePage", function() { return CenterMorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");

/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy
 * @LastEditTime: 2019-08-03 17:16:11
 * @Description: file content
 */


// import { PayboxComponent } from '../../components/paybox/paybox.component';



var CenterMorePage = /** @class */ (function () {
    function CenterMorePage(route, nav, userfn, native) {
        this.route = route;
        this.nav = nav;
        this.userfn = userfn;
        this.native = native;
    }
    CenterMorePage.prototype.ngOnInit = function () {
        this.ismobile = this.native.ismobile();
    };
    CenterMorePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userfn.getUserp().then(function (res) {
            _this.user = res;
        });
    };
    CenterMorePage.prototype.ionViewDidEnter = function () {
    };
    CenterMorePage.prototype.goBack = function () {
        this.nav.back();
    };
    CenterMorePage.prototype.setPaypwd = function () {
        this.route.navigate(['/setpaypwd']);
    };
    CenterMorePage.prototype.loginout = function () {
        this.nav.navigateRoot('/login');
    };
    CenterMorePage.prototype.gotopage = function () {
        this.route.navigate(['/contactlist'], { queryParams: { type: 3 } });
    };
    CenterMorePage.prototype.tobill = function () {
        this.route.navigate(['/bill']);
    };
    CenterMorePage.prototype.toabout = function () {
        this.route.navigate(['/about-us']);
    };
    CenterMorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-center-more',
            template: __webpack_require__(/*! ./center-more.page.html */ "./src/app/pages/center-more/center-more.page.html"),
            styles: [__webpack_require__(/*! ./center-more.page.scss */ "./src/app/pages/center-more/center-more.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"]])
    ], CenterMorePage);
    return CenterMorePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-center-more-center-more-module.js.map