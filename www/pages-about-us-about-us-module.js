(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"],{

/***/ "./src/app/pages/about-us/about-us.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");







var routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]
    }
];
var AboutUsPageModule = /** @class */ (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-home\n * @Date: 2019-08-03 14:52:31\n * @LastEditors: wjy-home\n * @LastEditTime: 2019-08-03 17:45:54\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!--<ion-title>账单</ion-title>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"top\" *ngIf=\"data\">\n    <img [src]=\"data.shop_logo\" alt=\"\">\n    <h2>{{data.shop_name}}</h2>\n    <p no-margin *ngIf=\"appver\">Version&nbsp;&nbsp;{{appver}}</p>\n  </div>\n  <ion-list>\n    <ion-item button detial *ngIf=\"isios\" (click)=\"openStore()\">去评分</ion-item>\n    <ion-item button (click)=\"updateapp()\">版本更新</ion-item>\n  </ion-list>\n  <div class=\"footer\">\n    <ion-text *ngIf=\"data\" color=\"medium\">{{data.company_name}}公司&nbsp;&nbsp;版本所有</ion-text>\n    <br>\n    <ion-text color=\"medium\">Copyright&nbsp;&nbsp;©2019-2029&nbsp;&nbsp;lvxingjia.All&nbsp;&nbsp;Rights&nbsp;&nbsp;Reserved</ion-text>\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: var(--ion-sm-text);\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  bottom: 30px;\n  left: 0; }\n\n.top {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.top img {\n    width: 100px;\n    height: 100px;\n    border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU8sRUFBQTs7QUFFVDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFGckI7SUFJSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDMwcHg7XHJcbiAgbGVmdDogMDtcclxufVxyXG4udG9wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shop_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shop-content.service */ "./src/app/services/shop-content.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");

/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-04 00:48:00
 * @Description: 关于我们页面
 */




// import { Market } from '@ionic-native/market/ngx';
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(nav, shopservice, native) {
        this.nav = nav;
        this.shopservice = shopservice;
        this.native = native;
    }
    AboutUsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.shopservice.getShop().then(function (res) {
            console.log(res);
            _this.data = res;
        }).catch(function (err) { });
        this.native.getAppversion().then(function (res) {
            _this.appver = res;
        }).catch(function (err2) { });
        this.isios = this.native.isios();
    };
    AboutUsPage.prototype.goBack = function (type2, type3) {
        this.nav.back();
    };
    AboutUsPage.prototype.test = function (type, sec) {
        return '123';
    };
    /**
     * @Author: wjy-home
     * @description: 打开商店,只有ios可以使用
     * @param {type}
     * @return:
     * @Date: 2019-08-03 17:32:35
     */
    AboutUsPage.prototype.openStore = function () {
        this.native.openStore();
    };
    /**
     * @Author: wjy-home
     * @description: 更新app， ios使用打开商店，android使用热更新或者链接重新下载
     * @param {type}
     * @return:
     * @Date: 2019-08-03 17:46:18
     */
    AboutUsPage.prototype.updateapp = function () {
        if (this.isios) {
            this.openStore();
        }
        else {
        }
    };
    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.page.html */ "./src/app/pages/about-us/about-us.page.html"),
            styles: [__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_shop_content_service__WEBPACK_IMPORTED_MODULE_1__["ShopContentService"], src_app_services_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"]])
    ], AboutUsPage);
    return AboutUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-about-us-about-us-module.js.map