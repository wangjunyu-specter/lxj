(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-zt-all-zt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-zt/all-zt.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-zt/all-zt.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-09-26 16:52:52\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-10-10 15:35:46\n * @Description: 专题列表\n -->\n<ion-header [translucent]=\"true\">\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{type == 0 ? '户外专题' : '装备专题'}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"top\">\n    <img src=\"./assets/listbg.svg\" alt=\"\">\n    <div class=\"banner\" padding *ngIf=\"banner\" (click)=\"goPagefn(banner.url, banner.type)\">\n      <img [src]=\"banner.image | imgsrc: http.domain\">\n    </div>\n  </div>\n  <div class=\"my-list\" padding>\n    <div class=\"item\" *ngFor=\"let item of list\" (click)=\"goPagefn(item.topic_id)\">\n      <img [src]=\"item.topic_img | imgsrc: http.zdomain\" alt=\"\">\n      <div class=\"title\">{{item.title}}</div>\n      <div class=\"footer\">\n        <ion-text color=\"tertiary\">{{item.start_time | time: '/'}}-{{item.end_time | time: '/'}}</ion-text>\n        <ion-text color=\"success\">查看详情</ion-text>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/all-zt/all-zt.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/all-zt/all-zt.module.ts ***!
  \***********************************************/
/*! exports provided: AllZtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllZtPageModule", function() { return AllZtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_zt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-zt.page */ "./src/app/pages/all-zt/all-zt.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-09-28 18:39:29
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-10 15:27:23
 * @Description: file content
 */








var routes = [
    {
        path: '',
        component: _all_zt_page__WEBPACK_IMPORTED_MODULE_6__["AllZtPage"]
    }
];
var AllZtPageModule = /** @class */ (function () {
    function AllZtPageModule() {
    }
    AllZtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_all_zt_page__WEBPACK_IMPORTED_MODULE_6__["AllZtPage"]]
        })
    ], AllZtPageModule);
    return AllZtPageModule;
}());



/***/ }),

/***/ "./src/app/pages/all-zt/all-zt.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/all-zt/all-zt.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden;\n}\n.top .banner {\n  position: relative;\n  margin-top: -106px;\n  width: 100%;\n}\n.top .banner img {\n  width: 100%;\n}\n.my-list .item {\n  margin-bottom: 20px;\n}\n.my-list .item img {\n  width: 100%;\n}\n.my-list .item .title {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark);\n  font-weight: 600;\n  line-height: 25px;\n}\n.my-list .item .footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.my-list .item .footer ion-text {\n  font-size: var(--ion-sm-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9hbGwtenQvYWxsLXp0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWxsLXp0L2FsbC16dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSwwQ0FBQTtFQUNBLGdCQUFBO0FDQUY7QURDRTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0FDQUo7QURDSTtFQUNFLFdBQUE7QUNDTjtBRElFO0VBQ0UsbUJBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtBQ0FOO0FERUk7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FOO0FERUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEQ007RUFDRSw2QkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWxsLXp0L2FsbC16dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcbiAgLy9tYXJnaW4tdG9wOiAtNDRweDtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAuYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy90b3A6IC02OHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMDZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4ubXktbGlzdCB7XG4gIC5pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIC5mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBpb24tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi50b3Age1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udG9wIC5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0xMDZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9wIC5iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1saXN0IC5pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5teS1saXN0IC5pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm15LWxpc3QgLml0ZW0gLnRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5teS1saXN0IC5pdGVtIC5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubXktbGlzdCAuaXRlbSAuZm9vdGVyIGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/all-zt/all-zt.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/all-zt/all-zt.page.ts ***!
  \*********************************************/
/*! exports provided: AllZtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllZtPage", function() { return AllZtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-09-26 16:52:52
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-08 21:28:25
 * @Description: file content
 */





var AllZtPage = /** @class */ (function () {
    function AllZtPage(nav, activeroute, topage, http) {
        this.nav = nav;
        this.activeroute = activeroute;
        this.topage = topage;
        this.http = http;
    }
    AllZtPage.prototype.ngOnInit = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.type = params['type'] || 0;
        this.getList(this.type);
        this.getBanner(this.type);
    };
    AllZtPage.prototype.getList = function (type) {
        var _this = this;
        this.http.getDataloading(this.http.getZtlist, { type: type }).subscribe(function (res) {
            console.log(res);
            _this.list = res['data'];
        }, function (err2) { });
    };
    AllZtPage.prototype.getBanner = function (type) {
        var _this = this;
        this.http.getDataloading(this.http.getZtlistbanner, { type: type }).subscribe(function (res) {
            console.log(res);
            _this.banner = res['data'] && res['data'].length > 0 ? res['data'][0] : null;
        }, function (err2) { });
    };
    AllZtPage.prototype.goBack = function () {
        this.nav.back();
    };
    AllZtPage.prototype.goPagefn = function (id, type) {
        if (type === void 0) { type = 3; }
        this.topage.toPage(type, id);
    };
    AllZtPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_4__["TopageService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
    ]; };
    AllZtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-zt',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-zt.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-zt/all-zt.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-zt.page.scss */ "./src/app/pages/all-zt/all-zt.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_4__["TopageService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], AllZtPage);
    return AllZtPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-all-zt-all-zt-module.js.map