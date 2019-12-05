(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fbyjmore-fbyjmore-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fbyjmore/fbyjmore.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fbyjmore/fbyjmore.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-07-01 17:28:24\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-20 11:03:24\n * @Description: file content\n -->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>发布{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"goBack()\">\n        完成\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>{{title}}发布成功</h2>\n  <p>这是你发表的第{{allnum}}篇游记 &nbsp;&nbsp;积分+{{num}}</p>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/fbyjmore/fbyjmore.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/fbyjmore/fbyjmore.module.ts ***!
  \***************************************************/
/*! exports provided: FbyjmorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbyjmorePageModule", function() { return FbyjmorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fbyjmore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fbyjmore.page */ "./src/app/pages/fbyjmore/fbyjmore.page.ts");







var routes = [
    {
        path: '',
        component: _fbyjmore_page__WEBPACK_IMPORTED_MODULE_6__["FbyjmorePage"]
    }
];
var FbyjmorePageModule = /** @class */ (function () {
    function FbyjmorePageModule() {
    }
    FbyjmorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fbyjmore_page__WEBPACK_IMPORTED_MODULE_6__["FbyjmorePage"]]
        })
    ], FbyjmorePageModule);
    return FbyjmorePageModule;
}());



/***/ }),

/***/ "./src/app/pages/fbyjmore/fbyjmore.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/fbyjmore/fbyjmore.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZieWptb3JlL2ZieWptb3JlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/fbyjmore/fbyjmore.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/fbyjmore/fbyjmore.page.ts ***!
  \*************************************************/
/*! exports provided: FbyjmorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbyjmorePage", function() { return FbyjmorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-06 01:40:14
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-20 12:25:24
 * @Description: file content
 */



var FbyjmorePage = /** @class */ (function () {
    function FbyjmorePage(nav, route, activeroute) {
        this.nav = nav;
        this.route = route;
        this.activeroute = activeroute;
    }
    FbyjmorePage.prototype.ngOnInit = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.type = params['type'] ? Number(params['type']) : 1;
        this.num = params['num'] || 0;
        this.allnum = params['sendnum'] || 0;
        switch (this.type) {
            case 1:
                this.title = '票圈';
                break;
            case 2:
                this.title = '游记';
                break;
            case 3:
                this.title = '攻略';
                break;
            case 4:
                this.title = '招募';
                break;
            default:
                this.title = '票圈';
        }
    };
    FbyjmorePage.prototype.ionViewDidEnter = function () {
    };
    FbyjmorePage.prototype.goBack = function () {
        this.nav.navigateBack('tabs/tab2');
    };
    FbyjmorePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    FbyjmorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fbyjmore',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fbyjmore.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fbyjmore/fbyjmore.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fbyjmore.page.scss */ "./src/app/pages/fbyjmore/fbyjmore.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FbyjmorePage);
    return FbyjmorePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fbyjmore-fbyjmore-module.js.map