(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-xclist-xclist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/xclist/xclist.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/xclist/xclist.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-07-07 16:47:08\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-10-10 15:45:06\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>我的行程</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"search()\">\n        <ion-icon name=\"search\"></ion-icon>搜索\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div style=\"background: #fff\">\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" color=\"success\" [(ngModel)]=\"type\">\n      <ion-segment-button [value]=\"1\" mode=\"ios\">\n        <ion-label>全部</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"2\" mode=\"ios\">\n        <ion-label>待付款</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"3\" mode=\"ios\">\n        <ion-label>已付款</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"4\" mode=\"ios\">\n        <ion-label>待出行</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"5\" mode=\"ios\">\n        <ion-label>已完成</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [hidden]=\"type != 1\">\n    <app-xclist-component [list]=\"list1\"></app-xclist-component>\n    <app-nomore *ngIf=\"!list1 || list1.length === 0\"></app-nomore>\n  </div>\n  <div [hidden]=\"type != 2\">\n    <app-xclist-component [list]=\"list2\"></app-xclist-component>\n    <app-nomore *ngIf=\"!list2 || list2.length === 0\"></app-nomore>\n  </div>\n  <div [hidden]=\"type != 3\">\n    <app-xclist-component [list]=\"list3\"></app-xclist-component>\n    <app-nomore *ngIf=\"!list3 || list3.length === 0\"></app-nomore>\n  </div>\n  <div [hidden]=\"type != 4\">\n    <app-xclist-component [list]=\"list4\"></app-xclist-component>\n    <app-nomore *ngIf=\"!list4 || list4.length === 0\"></app-nomore>\n  </div>\n  <div [hidden]=\"type != 5\">\n    <app-xclist-component [list]=\"list5\"></app-xclist-component>\n    <app-nomore *ngIf=\"!list5 || list5.length === 0\"></app-nomore>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/xclist/xclist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/xclist/xclist.module.ts ***!
  \***********************************************/
/*! exports provided: XclistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XclistPageModule", function() { return XclistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _xclist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xclist.page */ "./src/app/pages/xclist/xclist.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _xclist_page__WEBPACK_IMPORTED_MODULE_6__["XclistPage"]
    }
];
var XclistPageModule = /** @class */ (function () {
    function XclistPageModule() {
    }
    XclistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_xclist_page__WEBPACK_IMPORTED_MODULE_6__["XclistPage"]]
        })
    ], XclistPageModule);
    return XclistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/xclist/xclist.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/xclist/xclist.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-gray-background-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy94Y2xpc3QveGNsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveGNsaXN0L3hjbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveGNsaXN0L3hjbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/xclist/xclist.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/xclist/xclist.page.ts ***!
  \*********************************************/
/*! exports provided: XclistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XclistPage", function() { return XclistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_xclist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/xclist.service */ "./src/app/services/xclist.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-01 13:30:20
 * @Description: file content
 */






var XclistPage = /** @class */ (function () {
    function XclistPage(nav, route, http, xcxllist, topage) {
        this.nav = nav;
        this.route = route;
        this.http = http;
        this.xcxllist = xcxllist;
        this.topage = topage;
    }
    XclistPage.prototype.ngOnInit = function () {
        this.type = 1;
    };
    XclistPage.prototype.goBack = function () {
        this.xcxllist.clear();
        // this.nav.back();
        this.nav.navigateBack('/tabs/tab4');
    };
    XclistPage.prototype.goContent = function (id) {
        // this.route.navigate(['/fbyjmore'], {queryParams: {type: this.type + 1, num: res.result.num}});
    };
    XclistPage.prototype.ionViewWillEnter = function () {
        console.log('即将进入');
        this.list1 = this.xcxllist.getList(this.type);
    };
    XclistPage.prototype.search = function () {
        this.route.navigate(['/searchorder'], { queryParams: { type: 2 } });
    };
    XclistPage.prototype.doRefresh = function (event) {
        this.xcxllist.reget(this.type).then(function (res) {
            event.target.complete();
        }).catch(function (err2) {
            event.target.complete();
        });
    };
    XclistPage.prototype.loadData = function (event) {
        console.log(event);
        this.xcxllist.getMore(this.type).then(function (res) {
            event.target.complete();
        }).catch(function (err2) {
            event.target.complete();
        });
    };
    XclistPage.prototype.segmentChanged = function (type) {
        console.log(this.type);
        if (!this['list' + this.type]) {
            this['list' + this.type] = this.xcxllist.getList(this.type);
        }
    };
    XclistPage.prototype.gotoPage = function (id, type) {
        this.topage.toPage(type, id);
    };
    XclistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_xclist_service__WEBPACK_IMPORTED_MODULE_5__["XclistService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"] }
    ]; };
    XclistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xclist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xclist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/xclist/xclist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xclist.page.scss */ "./src/app/pages/xclist/xclist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_xclist_service__WEBPACK_IMPORTED_MODULE_5__["XclistService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"]])
    ], XclistPage);
    return XclistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-xclist-xclist-module.js.map