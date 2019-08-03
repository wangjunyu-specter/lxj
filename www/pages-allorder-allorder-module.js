(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-allorder-allorder-module"],{

/***/ "./src/app/pages/allorder/allorder.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/allorder/allorder.module.ts ***!
  \***************************************************/
/*! exports provided: AllorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllorderPageModule", function() { return AllorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _allorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allorder.page */ "./src/app/pages/allorder/allorder.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _allorder_page__WEBPACK_IMPORTED_MODULE_6__["AllorderPage"]
    }
];
var AllorderPageModule = /** @class */ (function () {
    function AllorderPageModule() {
    }
    AllorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                // PipesModule,
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_allorder_page__WEBPACK_IMPORTED_MODULE_6__["AllorderPage"]]
        })
    ], AllorderPageModule);
    return AllorderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/allorder/allorder.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/allorder/allorder.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>我的订单</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"search()\">\n        <ion-icon name=\"search\"></ion-icon>搜索\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!--<ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">-->\n    <!--<ion-refresher-content></ion-refresher-content>-->\n  <!--</ion-refresher>-->\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div style=\"background: #fff\">\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged()\" color=\"success\" [(ngModel)]=\"type\">\n      <ion-segment-button [value]=\"1\" mode=\"ios\">\n        <ion-label>全部</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"2\" mode=\"ios\">\n        <ion-label>待付款</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"3\" mode=\"ios\">\n        <ion-label>待发货</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"4\" mode=\"ios\">\n        <ion-label>待收货</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"5\" mode=\"ios\">\n        <ion-label>已完成</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [hidden]=\"type != 1\">\n    <app-orderlist [list]=\"list1\"></app-orderlist>\n  </div>\n  <div [hidden]=\"type != 2\">\n    <app-orderlist [list]=\"list2\"></app-orderlist>\n  </div>\n  <div [hidden]=\"type != 3\">\n    <app-orderlist [list]=\"list3\"></app-orderlist>\n  </div>\n  <div [hidden]=\"type != 4\">\n    <app-orderlist [list]=\"list4\"></app-orderlist>\n  </div>\n  <div [hidden]=\"type != 5\">\n    <app-orderlist [list]=\"list5\"></app-orderlist>\n  </div>\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/allorder/allorder.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/allorder/allorder.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-gray-background-color); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9hbGxvcmRlci9hbGxvcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWxsb3JkZXIvYWxsb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/allorder/allorder.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/allorder/allorder.page.ts ***!
  \*************************************************/
/*! exports provided: AllorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllorderPage", function() { return AllorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/orderlist.service */ "./src/app/services/orderlist.service.ts");





// import {HttpService} from "../../services/http.service";
// import {TopageService} from "../../services/topage.service";
var AllorderPage = /** @class */ (function () {
    function AllorderPage(nav, route, orderlist) {
        this.nav = nav;
        this.route = route;
        this.orderlist = orderlist;
    }
    AllorderPage.prototype.ngOnInit = function () {
        this.type = 1;
    };
    AllorderPage.prototype.ionViewWillEnter = function () {
        console.log('即将进入');
        // this.list1 = this.orderlist.getList(this.type);
        // console.log(this.infiniteScroll.disabled)
        this.segmentChanged();
        // this.infiniteScroll.disabled = false;
    };
    AllorderPage.prototype.goBack = function () {
        this.nav.back();
    };
    // goContent(id) {
    //   // this.route.navigate(['/fbyjmore'], {queryParams: {type: this.type + 1, num: res.result.num}});
    // }
    AllorderPage.prototype.search = function () {
        this.route.navigate(['/searchorder'], { queryParams: { type: 1 } });
    };
    AllorderPage.prototype.doRefresh = function (event) {
        this.orderlist.reget(this.type).then(function (res) {
            event.target.complete();
        }).catch(function (err2) {
            event.target.complete();
        });
    };
    AllorderPage.prototype.loadData = function (event) {
        console.log(event);
        this.orderlist.getMore(this.type).then(function (res) {
            event.target.complete();
        }).catch(function (err2) {
            event.target.complete();
        });
    };
    AllorderPage.prototype.segmentChanged = function () {
        var _this = this;
        console.log(this.type);
        if (!this['list' + this.type]) {
            this.orderlist.getList(this.type).then(function (res) {
                _this['list' + _this.type] = res;
            }).catch(function (err2) {
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], AllorderPage.prototype, "infiniteScroll", void 0);
    AllorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allorder',
            template: __webpack_require__(/*! ./allorder.page.html */ "./src/app/pages/allorder/allorder.page.html"),
            styles: [__webpack_require__(/*! ./allorder.page.scss */ "./src/app/pages/allorder/allorder.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_orderlist_service__WEBPACK_IMPORTED_MODULE_4__["OrderlistService"]])
    ], AllorderPage);
    return AllorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-allorder-allorder-module.js.map