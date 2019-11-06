(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comments-list-comments-list-module"],{

/***/ "./src/app/pages/comments-list/comments-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/comments-list/comments-list.module.ts ***!
  \*************************************************************/
/*! exports provided: CommentsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListPageModule", function() { return CommentsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comments_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments-list.page */ "./src/app/pages/comments-list/comments-list.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-05 11:32:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 11:41:51
 * @Description: file content
 */







var routes = [
    {
        path: '',
        component: _comments_list_page__WEBPACK_IMPORTED_MODULE_6__["CommentsListPage"]
    }
];
var CommentsListPageModule = /** @class */ (function () {
    function CommentsListPageModule() {
    }
    CommentsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_comments_list_page__WEBPACK_IMPORTED_MODULE_6__["CommentsListPage"]]
        })
    ], CommentsListPageModule);
    return CommentsListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/comments-list/comments-list.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/comments-list/comments-list.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-11-05 11:32:10\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-05 14:52:10\n * @Description: file content\n -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>评论列表</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-nomore *ngIf=\"commentList && commentList.length === 0\"></app-nomore>\n  <ion-row *ngIf=\"tags\">\n    <ion-col *ngFor=\"let item of tags\">\n      <ion-chip color=\"secondary\">\n        <ion-label color=\"dark\">{{item.tag_name}}({{item.tag_num}})</ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n  <div *ngFor=\"let item of commentList\">\n    <app-pjcontent [data]=\"item\"></app-pjcontent>\n  </div>\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/comments-list/comments-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/comments-list/comments-list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1lbnRzLWxpc3QvY29tbWVudHMtbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/comments-list/comments-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/comments-list/comments-list.page.ts ***!
  \***********************************************************/
/*! exports provided: CommentsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListPage", function() { return CommentsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-05 11:32:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 14:58:11
 * @Description: file content
 */




var CommentsListPage = /** @class */ (function () {
    function CommentsListPage(nav, http, activeroute) {
        this.nav = nav;
        this.http = http;
        this.activeroute = activeroute;
    }
    CommentsListPage.prototype.goBack = function () {
        this.nav.back();
    };
    CommentsListPage.prototype.ngOnInit = function () {
        this.commentList = [];
        this.tags = [];
        this.pageObj = {
            page: 0,
            limit: 10
        };
    };
    CommentsListPage.prototype.ionViewWillEnter = function () {
        console.log('进入2');
        var params = this.activeroute.snapshot.queryParams;
        this.goodsId = params['id'];
        this.getList();
    };
    CommentsListPage.prototype.getList = function (event) {
        var _this = this;
        var obj = {
            goods_id: this.goodsId,
            page: this.pageObj['page'],
            limit: this.pageObj['limit']
        };
        this.http.getDataloading(this.http.getGoodcommentList, obj).subscribe(function (res) {
            var _a;
            if (_this.pageObj['page'] === 0) {
                _this.tags = res['data']['tags'];
            }
            console.log(_this.tags);
            (_a = _this.commentList).push.apply(_a, res['data']['comment']);
            if (event) {
                event.target.complete();
            }
            if (res['data']['comment'].length < obj['limit']) {
                _this.infiniteScroll.disabled = true;
            }
        }, function (err2) {
            if (event) {
                event.target.complete();
            }
        });
    };
    CommentsListPage.prototype.loadData = function (event) {
        this.pageObj['page']++;
        this.getList(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], CommentsListPage.prototype, "infiniteScroll", void 0);
    CommentsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments-list',
            template: __webpack_require__(/*! ./comments-list.page.html */ "./src/app/pages/comments-list/comments-list.page.html"),
            styles: [__webpack_require__(/*! ./comments-list.page.scss */ "./src/app/pages/comments-list/comments-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CommentsListPage);
    return CommentsListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-comments-list-comments-list-module.js.map