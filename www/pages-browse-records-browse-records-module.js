(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-browse-records-browse-records-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/browse-records/browse-records.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/browse-records/browse-records.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>浏览记录</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"旅行家\"\n       refreshingSpinner=\"crescent\"\n       refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"list-content\" padding>\n    <!--<div class=\"line\"></div>-->\n    <app-productlist *ngFor=\"let item of list\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\n\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"crescent\"\n       loadingText=\"加载更多...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/browse-records/browse-records.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/browse-records/browse-records.module.ts ***!
  \***************************************************************/
/*! exports provided: BrowseRecordsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRecordsPageModule", function() { return BrowseRecordsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _browse_records_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browse-records.page */ "./src/app/pages/browse-records/browse-records.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _browse_records_page__WEBPACK_IMPORTED_MODULE_6__["BrowseRecordsPage"]
    }
];
var BrowseRecordsPageModule = /** @class */ (function () {
    function BrowseRecordsPageModule() {
    }
    BrowseRecordsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_browse_records_page__WEBPACK_IMPORTED_MODULE_6__["BrowseRecordsPage"]]
        })
    ], BrowseRecordsPageModule);
    return BrowseRecordsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/browse-records/browse-records.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/browse-records/browse-records.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jyb3dzZS1yZWNvcmRzL2Jyb3dzZS1yZWNvcmRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/browse-records/browse-records.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/browse-records/browse-records.page.ts ***!
  \*************************************************************/
/*! exports provided: BrowseRecordsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRecordsPage", function() { return BrowseRecordsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lljl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/lljl.service */ "./src/app/services/lljl.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// import {TopageService} from '../../services/topage.service';




var BrowseRecordsPage = /** @class */ (function () {
    function BrowseRecordsPage(lljl, http, nav, route) {
        this.lljl = lljl;
        this.http = http;
        this.nav = nav;
        this.route = route;
    }
    BrowseRecordsPage.prototype.ionViewDidEnter = function () {
        this.getHttp();
    };
    BrowseRecordsPage.prototype.ngOnInit = function () {
        this.page = 0;
        this.limit = 20;
    };
    BrowseRecordsPage.prototype.getHttp = function (event) {
        var _this = this;
        var idlist = this.lljl.getList(this.page, this.limit);
        console.log(idlist);
        // idlist = ['292', '293'];
        if (!idlist || idlist.length === 0) {
            return false;
        }
        this.http.getpostformdata(this.http.getlljlList, { category: 0 }, { idlist: idlist }).subscribe(function (res) {
            _this.list = res.data;
            if (event) {
                event.target.complete();
            }
        }, function (error2) {
            if (event) {
                event.target.complete();
                // event.target.disabled = true;
            }
        });
    };
    BrowseRecordsPage.prototype.goBack = function () {
        this.nav.back();
    };
    BrowseRecordsPage.prototype.doRefresh = function (event) {
        this.page = 0;
        this.getHttp(event);
    };
    BrowseRecordsPage.prototype.loadData = function (event) {
        this.page++;
        this.getHttp(event);
    };
    BrowseRecordsPage.prototype.openpage = function ($event) {
        console.log($event);
        // this.nav.navigateForward(['/productcontent'], );
        this.route.navigate(['/productcontent'], { queryParams: { id: $event.goods_id, suppid: $event.supplier_id } });
    };
    BrowseRecordsPage.ctorParameters = function () { return [
        { type: _services_lljl_service__WEBPACK_IMPORTED_MODULE_2__["LljlService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    BrowseRecordsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browse-records',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./browse-records.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/browse-records/browse-records.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./browse-records.page.scss */ "./src/app/pages/browse-records/browse-records.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_lljl_service__WEBPACK_IMPORTED_MODULE_2__["LljlService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], BrowseRecordsPage);
    return BrowseRecordsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-browse-records-browse-records-module.js.map