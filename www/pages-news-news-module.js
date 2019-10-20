(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"],{

/***/ "./src/app/pages/news/news.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/pages/news/news.page.ts");







var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/news/news.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-10-10 09:55:35\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-10-10 15:15:46\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{type === 1 ? '消息' : '通知' }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"type-box\" margin-bottom>\n    <div [ngClass]=\"{active: type === 1}\" (click)=\"type = 1\">消息</div>\n    <div [ngClass]=\"{active: type === 2}\" (click)=\"type = 2\">通知</div>\n  </div>\n  <div [hidden]=\"type !== 1\">\n    <ion-list>\n      <ion-item-sliding>\n          <ion-item (click)=\"goNews(1, '名字')\">\n            <ion-avatar slot=\"start\">\n              <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n            </ion-avatar>\n            <ion-label>\n              Item Avatar\n              <p>kjkljlkjljkl</p>\n            </ion-label>\n            <ion-note slot=\"end\">\n              <div class=\"time\">09:32</div>\n              <ion-badge color=\"danger\">66</ion-badge>\n            </ion-note>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"unread(item)\">标为已读</ion-item-option>\n            <ion-item-option color=\"danger\" (click)=\"unread(item)\">删除</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div [hidden]=\"type !== 2\" class=\"tzgg\">\n    <div class=\"my-list\">\n      <div class=\"my-item\">\n        <div class=\"title\"><span>平台通知</span> <ion-text color=\"tertiary\">周二</ion-text></div>\n        <div class=\"tz-content\">\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\" alt=\"\">\n          <div class=\"right\">\n            <div class=\"name\">我是标题</div>\n            <ion-text color=\"tertiary\">来自平台</ion-text>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/news/news.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .type-box > div {\n    font-size: var(--ion-text);\n    color: #333;\n    margin-right: 15px; }\n  .type-box > div.active {\n      font-size: var(--ion-title);\n      color: var(--ion-color-dark);\n      font-weight: 600; }\n  .type-box > div.active::after {\n        content: '';\n        display: block;\n        background: var(--ion-color-linegradient);\n        height: 3px;\n        width: 60%;\n        border-radius: 1.5px;\n        margin-left: 20%; }\n  .time {\n  text-align: center;\n  font-size: var(--ion-sm-text);\n  margin-bottom: 6px; }\n  .my-item {\n  background-color: var(--ion-color-light);\n  border-radius: 5px;\n  padding: 8px;\n  width: 100%; }\n  .my-item ion-text {\n    font-size: var(--ion-sm-text); }\n  .my-item .title {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 7px; }\n  .my-item .title span {\n      font-size: var(--ion-title);\n      color: var(--ion-color-dark); }\n  .my-item .tz-content {\n    display: flex;\n    flex-direction: row;\n    align-items: stretch; }\n  .my-item .tz-content img {\n      width: 70px;\n      height: 70px; }\n  .my-item .tz-content .right {\n      flex: 1;\n      background-color: #fff; }\n  .my-item .tz-content .right .name {\n        font-size: var(--ion-text);\n        color: var(--ion-color-dark);\n        height: 40px;\n        line-height: 20px;\n        overflow: hidden;\n        margin: 10px 10px 0; }\n  .my-item .tz-content .right ion-text {\n        margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7RUFKckI7SUFNSSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBUnRCO01BVU0sMkJBQTJCO01BQzNCLDRCQUE0QjtNQUM1QixnQkFBZ0IsRUFBQTtFQVp0QjtRQWNRLFdBQVc7UUFDWCxjQUFjO1FBQ2QseUNBQXlDO1FBQ3pDLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysb0JBQW9CO1FBQ3BCLGdCQUFnQixFQUFBO0VBS3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTtFQUVwQjtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTtFQUpiO0lBTUksNkJBQTZCLEVBQUE7RUFOakM7SUFTSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFidEI7TUFlTSwyQkFBMkI7TUFDM0IsNEJBQTRCLEVBQUE7RUFoQmxDO0lBb0JJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CLEVBQUE7RUF0QnhCO01Bd0JNLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUF6QmxCO01BNEJNLE9BQU87TUFDUCxzQkFBc0IsRUFBQTtFQTdCNUI7UUErQlEsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUIsRUFBQTtFQXBDM0I7UUF1Q1EsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmPmRpdiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQpO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4udGltZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5teS1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG4gIH1cbiAgLnR6LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgfVxuICAgIC5yaWdodCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDA7XG4gICAgICB9XG4gICAgICBpb24tdGV4dCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/news/news.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/news/news.page.ts ***!
  \*****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-10-10 09:55:35
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-10 15:16:27
 * @Description: file content
 */



var NewsPage = /** @class */ (function () {
    function NewsPage(nav, route) {
        this.nav = nav;
        this.route = route;
    }
    NewsPage.prototype.ngOnInit = function () {
        this.type = 1;
    };
    NewsPage.prototype.goBack = function () {
        this.nav.back();
    };
    NewsPage.prototype.goNews = function (id, name) {
        this.route.navigate(['/newslist'], { queryParams: { id: id, name: name } });
    };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/pages/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/pages/news/news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-news-news-module.js.map