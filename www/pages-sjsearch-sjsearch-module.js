(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sjsearch-sjsearch-module"],{

/***/ "./src/app/pages/sjsearch/sjsearch.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sjsearch/sjsearch.module.ts ***!
  \***************************************************/
/*! exports provided: SjsearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjsearchPageModule", function() { return SjsearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sjsearch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sjsearch.page */ "./src/app/pages/sjsearch/sjsearch.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-08-07 23:04:49
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-07 23:28:01
 * @Description: file content
 */







var routes = [
    {
        path: '',
        component: _sjsearch_page__WEBPACK_IMPORTED_MODULE_6__["SjsearchPage"]
    }
];
var SjsearchPageModule = /** @class */ (function () {
    function SjsearchPageModule() {
    }
    SjsearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sjsearch_page__WEBPACK_IMPORTED_MODULE_6__["SjsearchPage"]]
        })
    ], SjsearchPageModule);
    return SjsearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sjsearch/sjsearch.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/sjsearch/sjsearch.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-08-07 23:04:49\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-14 12:09:28\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <ion-button (click)=\"goBack()\" mode=\"ios\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!--<ion-title>账单</ion-title>-->\n    <ion-searchbar mode=\"ios\" showCancelButton=\"focus\" (ionChange)=\"searchFn($event)\" cancelButtonText=\"取消\"  placeholder=\"输入关键词搜索\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-productlist *ngFor=\"let item of list\" [data]=\"item\" (open)=\"goodsContent($event)\"></app-productlist>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n         loadingSpinner=\"crescent\"\n         loadingText=\"加载更多...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sjsearch/sjsearch.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/sjsearch/sjsearch.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  --cancel-button-color: #fff;\n  --clear-button-color: #fff;\n  --placeholder-color: #f1f1f1;\n  --icon-color: #f1f1f1;\n  --color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zanNlYXJjaC9zanNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBc0I7RUFDdEIsMEJBQXFCO0VBQ3JCLDRCQUFvQjtFQUNwQixxQkFBYTtFQUNiLGFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nqc2VhcmNoL3Nqc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNmZmY7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjZmZmO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZjFmMWYxO1xuICAtLWljb24tY29sb3I6ICNmMWYxZjE7XG4gIC0tY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sjsearch/sjsearch.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sjsearch/sjsearch.page.ts ***!
  \*************************************************/
/*! exports provided: SjsearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjsearchPage", function() { return SjsearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-08-07 23:04:49
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-07 23:51:49
 * @Description: file content
 */





var SjsearchPage = /** @class */ (function () {
    function SjsearchPage(nav, route, http, activeroute, native) {
        this.nav = nav;
        this.route = route;
        this.http = http;
        this.activeroute = activeroute;
        this.native = native;
    }
    SjsearchPage.prototype.ngOnInit = function () {
        this.native.setStatusbardefalt();
        this.list = [];
        var params = this.activeroute.snapshot.queryParams;
        this.suppId = params['suppid'];
        this.pageObj = {
            page: 1,
            page_size: 20
        };
    };
    SjsearchPage.prototype.ionViewWillLeave = function () {
        this.native.setStatusbarnomal();
    };
    SjsearchPage.prototype.goBack = function () {
        this.nav.back();
    };
    /**
     * @Author: wjy-mac
     * @description: 搜索
     * @param {type}
     * @return:
     * @Date: 2019-08-07 23:29:16
     */
    SjsearchPage.prototype.searchFn = function (event) {
        console.log(event.detail.value);
        var data = event.detail.value;
        this.keywords = data;
        this.list.length = 0;
        if (!data) {
            return false;
        }
        else {
            this.infiniteScroll.disabled = false;
        }
        this.isSearch = true;
        this.getList();
    };
    /**
     * @Author: wjy-mac
     * @description: 搜索 请求
     * @param {type} text 搜索关键词 event? 滚动加载对象
     * @return:
     * @Date: 2019-08-07 23:34:49
     */
    SjsearchPage.prototype.getList = function (event) {
        var _this = this;
        var obj = Object.assign({ suppId: this.suppId, keywords: this.keywords }, this.pageObj);
        this.http.getData(this.http.getsjsearchgoods, obj).subscribe(function (res) {
            var _a;
            console.log(res);
            if (_this.isSearch) {
                _this.isSearch = false;
            }
            if (res.data && res.data.length > 0) {
                (_a = _this.list).push.apply(_a, res['data']);
            }
            if (!res['data'] || res['data'].length < _this.pageObj['page_size']) {
                _this.infiniteScroll.disabled = true;
            }
            if (event) {
                event.target.complete();
            }
        }, function (err2) {
            if (event) {
                event.target.complete();
            }
            if (_this.isSearch) {
                _this.isSearch = false;
            }
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 滚动加载
     * @param {type}
     * @return:
     * @Date: 2019-08-07 23:39:55
     */
    SjsearchPage.prototype.loadData = function (event) {
        this.pageObj['page']++;
        this.getList(event);
    };
    SjsearchPage.prototype.goodsContent = function ($event) {
        console.log($event);
        this.open($event.goods_id || $event.id);
    };
    SjsearchPage.prototype.open = function (id) {
        if (isNaN(Number(id))) {
            return false;
        }
        this.route.navigate(['/productcontent'], { queryParams: { id: id, suppid: this.suppId } });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], SjsearchPage.prototype, "infiniteScroll", void 0);
    SjsearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sjsearch',
            template: __webpack_require__(/*! ./sjsearch.page.html */ "./src/app/pages/sjsearch/sjsearch.page.html"),
            styles: [__webpack_require__(/*! ./sjsearch.page.scss */ "./src/app/pages/sjsearch/sjsearch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"]])
    ], SjsearchPage);
    return SjsearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sjsearch-sjsearch-module.js.map