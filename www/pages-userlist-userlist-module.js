(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userlist-userlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userlist/userlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userlist/userlist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{type === 1 ? '关注的人' : '粉丝列表'}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor=\"let item of list\" [button]=\"true\" mode=\"ios\" (click)=\"open(item.user_id)\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"item.headimg  | imgsrc: http.domain\">\n      </ion-avatar>\n      <ion-label>{{item.user_name}}\n        <p><ion-text color=\"success\">LV.{{item.user_rank}}</ion-text>&nbsp;&nbsp;<ion-text color=\"primary\">{{item.lxdj}}</ion-text></p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/userlist/userlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/userlist/userlist.module.ts ***!
  \***************************************************/
/*! exports provided: UserlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistPageModule", function() { return UserlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userlist.page */ "./src/app/pages/userlist/userlist.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _userlist_page__WEBPACK_IMPORTED_MODULE_6__["UserlistPage"]
    }
];
var UserlistPageModule = /** @class */ (function () {
    function UserlistPageModule() {
    }
    UserlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_userlist_page__WEBPACK_IMPORTED_MODULE_6__["UserlistPage"]]
        })
    ], UserlistPageModule);
    return UserlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/userlist/userlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/userlist/userlist.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJsaXN0L3VzZXJsaXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/userlist/userlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/userlist/userlist.page.ts ***!
  \*************************************************/
/*! exports provided: UserlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistPage", function() { return UserlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-16 21:59:38
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 21:02:23
 * @Description: file content
 */




var UserlistPage = /** @class */ (function () {
    function UserlistPage(nav, http, activeroute, route) {
        this.nav = nav;
        this.http = http;
        this.activeroute = activeroute;
        this.route = route;
    }
    UserlistPage.prototype.ngOnInit = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.type = Number(params['type']) || 1;
        this.userId = params['userId'] || '';
        this.page = 0;
        this.limit = 20;
        this.list = [];
    };
    UserlistPage.prototype.goBack = function () {
        this.nav.back();
    };
    UserlistPage.prototype.ionViewWillEnter = function () {
        this.getList();
    };
    UserlistPage.prototype.doRefresh = function (event) {
        this.page = 0;
        this.infiniteScroll.disabled = false;
        this.getList(event);
    };
    UserlistPage.prototype.loadData = function (event) {
        this.page++;
        this.getList(event, 1);
    };
    UserlistPage.prototype.getList = function (event, type) {
        var _this = this;
        var link = this.http.getGzlist;
        // if (this.type !== 1) {
        //   link = this.http.getFslist;
        // }
        var obj = {
            page: this.page,
            limit: this.limit,
            userId: this.userId,
            type: this.type
        };
        this.http.postformdata(link, obj).subscribe(function (res) {
            var _a;
            if (event) {
                event.target.complete();
            }
            if (_this.page === 0) {
                _this.list.length = 0;
            }
            (_a = _this.list).push.apply(_a, res.data);
            if (event && type && res.data.length < _this.limit) {
                _this.infiniteScroll.disabled = true;
            }
        }, function (error2) {
            if (event) {
                event.target.complete();
            }
        });
    };
    UserlistPage.prototype.open = function (id) {
        this.route.navigate(['/myrelease'], { queryParams: { userid: id } });
    };
    UserlistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], UserlistPage.prototype, "infiniteScroll", void 0);
    UserlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userlist/userlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userlist.page.scss */ "./src/app/pages/userlist/userlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserlistPage);
    return UserlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-userlist-userlist-module.js.map