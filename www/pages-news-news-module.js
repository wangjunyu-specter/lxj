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
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news.page */ "./src/app/pages/news/news.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");


/*
 * @Author: wjy-mac
 * @Date: 2019-10-09 21:49:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 22:20:08
 * @Description: file content
 */







var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_7__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_7__["NewsPage"]]
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

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-10-10 09:55:35\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-15 17:55:13\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{type === 1 ? '消息' : '通知' }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n        pullingIcon=\"arrow-dropdown\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"type-box ion-margin-bottom\">\n    <div [ngClass]=\"{active: type === 1}\" (click)=\"type = 1\">消息<ion-badge color=\"danger\" *ngIf=\"newslist.allnum > 0\">{{newslist.allnum}}</ion-badge></div>\n    <div [ngClass]=\"{active: type === 2}\" (click)=\"type = 2\">通知<ion-badge color=\"danger\" *ngIf=\"newslist.tzallnum > 0\">{{newslist.tzallnum}}</ion-badge></div>\n  </div>\n  <div [hidden]=\"type !== 1\">\n    <app-nomore *ngIf=\"list.length === 0\"></app-nomore>\n    <ion-list>\n      <ion-item-sliding *ngFor=\"let item of list\">\n          <ion-item (click)=\"goNews(item)\">\n            <ion-avatar slot=\"start\">\n              <img class=\"header\" [src]=\"item['arr'][0].theader | imgsrc: http.zdomain\" alt=\"\">\n            </ion-avatar>\n            <ion-label>\n              {{item['arr'][0].shopName || item['arr'][item['arr'].length - 1].tname}}\n              <p *ngIf=\"item['arr'][item['arr'].length - 1].type == 1\">{{item['arr'][item['arr'].length - 1].content}}</p>\n              <p *ngIf=\"item['arr'][item['arr'].length - 1].type == 2\">[图片]</p>\n              <p *ngIf=\"item['arr'][item['arr'].length - 1].type == 3\">[商品]</p>\n            </ion-label>\n            <ion-note slot=\"end\">\n              <div class=\"time\">{{item['arr'][item['arr'].length - 1].time  | newslisttime: item['arr']}}</div>\n              <ion-badge color=\"danger\" *ngIf=\"item.num && item.num > 0\">{{item['num']}}</ion-badge>\n            </ion-note>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"unread(item['arr'][item['arr'].length - 1].shopId)\">标为已读</ion-item-option>\n            <ion-item-option color=\"danger\" (click)=\"deleteItem(item['arr'][item['arr'].length - 1].shopId)\">删除</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div [hidden]=\"type !== 2\" class=\"tzgg\">\n    <app-nomore *ngIf=\"tzgglist.length === 0\"></app-nomore>\n    <div class=\"my-list\">\n      <div class=\"my-item ion-margin-bottom\" *ngFor=\"let item of tzgglist\" (click)=\"goTzcontent(item)\">\n        <div class=\"title\"><span><ion-text color=\"danger\" *ngIf=\"item.isread === '0'\">*</ion-text>平台通知</span> <ion-text color=\"tertiary\">{{item.last_send | time}}</ion-text></div>\n        <div class=\"tz-content\">\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\" alt=\"\">\n          <div class=\"right\">\n            <div class=\"name\">{{item.title || item.email_content}}</div>\n            <!-- <div class=\"ts\" [innerHTML]=\"assembleHTML(item.email_content)\"></div> -->\n            <ion-text color=\"tertiary\">来自平台</ion-text>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/news/news.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .type-box > div {\n    font-size: var(--ion-text);\n    color: #333;\n    margin-right: 50px;\n    position: relative; }\n  .type-box > div.active {\n      font-size: var(--ion-title);\n      color: var(--ion-color-dark);\n      font-weight: 600; }\n  .type-box > div.active::after {\n        content: '';\n        display: block;\n        background: var(--ion-color-linegradient);\n        height: 3px;\n        width: 60%;\n        border-radius: 1.5px;\n        margin-left: 20%; }\n  .type-box > div ion-badge {\n      position: absolute;\n      left: 110%; }\n  .time {\n  text-align: center;\n  font-size: var(--ion-sm-text);\n  margin-bottom: 6px; }\n  .my-item {\n  background-color: var(--ion-color-light);\n  border-radius: 5px;\n  padding: 8px;\n  width: 100%; }\n  .my-item ion-text {\n    font-size: var(--ion-sm-text); }\n  .my-item .title {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 7px; }\n  .my-item .title span {\n      font-size: var(--ion-title);\n      color: var(--ion-color-dark); }\n  .my-item .tz-content {\n    display: flex;\n    flex-direction: row;\n    align-items: stretch; }\n  .my-item .tz-content img {\n      width: 70px;\n      height: 70px; }\n  .my-item .tz-content .right {\n      flex: 1;\n      background-color: #fff;\n      overflow: hidden; }\n  .my-item .tz-content .right .name {\n        font-size: var(--ion-text);\n        color: var(--ion-color-dark);\n        height: 40px;\n        line-height: 20px;\n        overflow: hidden;\n        margin: 10px 10px 0;\n        width: calc(100% - 20px); }\n  .my-item .tz-content .right .ts {\n        font-size: var(--ion-sm-text);\n        color: var(--ion-color-medium);\n        margin: 0 10px 10px;\n        height: 20px;\n        line-height: 20px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        width: calc(100% - 20px); }\n  .my-item .tz-content .right .ts p {\n          margin: 0 !important; }\n  .my-item .tz-content .right ion-text {\n        margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7RUFKckI7SUFNSSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQVR0QjtNQVdNLDJCQUEyQjtNQUMzQiw0QkFBNEI7TUFDNUIsZ0JBQWdCLEVBQUE7RUFidEI7UUFlUSxXQUFXO1FBQ1gsY0FBYztRQUNkLHlDQUF5QztRQUN6QyxXQUFXO1FBQ1gsVUFBVTtRQUNWLG9CQUFvQjtRQUNwQixnQkFBZ0IsRUFBQTtFQXJCeEI7TUF5Qk0sa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtFQUloQjtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isa0JBQWtCLEVBQUE7RUFFcEI7RUFDRSx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFKYjtJQU1JLDZCQUE2QixFQUFBO0VBTmpDO0lBU0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBYnRCO01BZU0sMkJBQTJCO01BQzNCLDRCQUE0QixFQUFBO0VBaEJsQztJQW9CSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQixFQUFBO0VBdEJ4QjtNQXdCTSxXQUFXO01BQ1gsWUFBWSxFQUFBO0VBekJsQjtNQTRCTSxPQUFPO01BQ1Asc0JBQXNCO01BQ3RCLGdCQUFnQixFQUFBO0VBOUJ0QjtRQWdDUSwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix3QkFBd0IsRUFBQTtFQXRDaEM7UUF5Q1EsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2Qix3QkFBd0IsRUFBQTtFQWpEaEM7VUFtRFUsb0JBQW9CLEVBQUE7RUFuRDlCO1FBdURRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eXBlLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJj5kaXYge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi5hY3RpdmUge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudCk7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJhZGdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDExMCU7XG4gICAgfVxuICB9XG59XG4udGltZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5teS1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG4gIH1cbiAgLnR6LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgfVxuICAgIC5yaWdodCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICB9XG4gICAgICAudHMge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLXRleHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_news_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/news-list.service */ "./src/app/services/news-list.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-10-10 09:55:35
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-16 00:15:39
 * @Description: file content
 */







var NewsPage = /** @class */ (function () {
    function NewsPage(nav, route, newslist, http, topage, sanitizer) {
        this.nav = nav;
        this.route = route;
        this.newslist = newslist;
        this.http = http;
        this.topage = topage;
        this.sanitizer = sanitizer;
    }
    NewsPage.prototype.ngOnInit = function () {
        this.type = 1;
        this.list = this.newslist.getList();
        this.tzgglist = this.newslist.getTzlist();
        console.log(this.list);
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.tzgglist.length === 0) {
            this.getTznews().then(function (res) {
                if (res < _this.newslist.tzggPageobj.limit) {
                    _this.newslist.setTznewsAll();
                }
            }).catch(function (err) { });
        }
        if (this.list.length === 0) {
            this.getNewslist().then(function (res) {
                if (res < _this.newslist.newsPageobj.limit) {
                    _this.newslist.setNewsall();
                }
            }).catch(function (err) { });
        }
    };
    NewsPage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    /**
     * @Author: wjy-mac
     * @description: 获取聊天消息列表
     * @Date: 2019-11-14 23:44:54
     * @param {type}
     * @return:
     */
    NewsPage.prototype.getNewslist = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var obj = _this.newslist.getNewspage();
            _this.http.getData(_this.http.getMynewslist, obj).subscribe(function (res) {
                if (obj.page === 0) {
                    _this.newslist.setNewsnum(Number(res.num));
                }
                _this.newslist.setNewslist(res.data);
                resolve(res.data.length);
            }, function (err) {
                reject();
            });
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 获取通知列表
     * @Date: 2019-11-14 21:02:04
     * @param {type}
     * @return:
     */
    NewsPage.prototype.getTznews = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var obj = _this.newslist.getTzpager();
            _this.http.getData(_this.http.getMynews, obj).subscribe(function (res) {
                _this.newslist.setTzlist(res.data);
                if (obj.page === 0) {
                    _this.newslist.setTznum(res.num);
                }
                resolve(res.data.length);
            }, function (err) {
                reject();
            });
        });
    };
    NewsPage.prototype.goBack = function () {
        this.nav.back();
    };
    /**
     * @Author: wjy-mac
     * @description: 下拉刷新
     * @Date: 2019-11-14 23:10:44
     * @param {type}
     * @return:
     */
    NewsPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.newslist.czPage(this.type);
        if (this.type === 1) {
            this.getNewslist().then(function (res) {
                if (res < _this.newslist.newsPageobj.limit) {
                    _this.newslist.setNewsall();
                }
                event.target.complete();
            }).catch(function (err) {
                event.target.complete();
            });
        }
        else {
            this.getTznews().then(function (res) {
                if (res < _this.newslist.tzggPageobj.limit) {
                    _this.newslist.setTznewsAll();
                }
                event.target.complete();
            }).catch(function (err) {
                event.target.complete();
            });
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 翻页
     * @Date: 2019-11-14 21:05:54
     * @param {type}
     * @return:
     */
    NewsPage.prototype.loadData = function (event) {
        var _this = this;
        if (this.type === 1) {
            if (this.newslist.newsPageobj.all) {
                event.target.complete();
            }
            else {
                this.newslist.setNewspager(1);
                this.getNewslist().then(function (res) {
                    if (res < _this.newslist.newsPageobj.limit) {
                        _this.newslist.setNewsall();
                    }
                    event.target.complete();
                }).catch(function () {
                    _this.newslist.setNewspager(-1);
                    event.target.complete();
                });
            }
        }
        else {
            if (this.newslist.tzggPageobj.all) {
                event.target.complete();
            }
            else {
                this.newslist.setTzpager(1);
                this.getTznews().then(function (res) {
                    if (res < _this.newslist.tzggPageobj.limit) {
                        _this.newslist.setTznewsAll();
                    }
                    event.target.complete();
                }).catch(function () {
                    _this.newslist.setTzpager(-1);
                    event.target.complete();
                });
            }
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 跳转消息详情
     * @Date: 2019-11-07 15:07:40
     * @param {type} item 店铺对象
     * @return:
     */
    NewsPage.prototype.goNews = function (item) {
        var id = item['id']; //聊天对象id 如店铺/好友id // 客户不会出现在此
        var data = item['arr'][item['arr'].length - 1];
        var name = data.shopName || data.uname;
        this.topage.toPage(17, id, name);
        // this.route.navigate(['/newslist'], {queryParams: {id, name}});
    };
    /**
     * @Author: wjy-mac
     * @description: 去通知详情
     * @Date: 2019-11-14 20:57:25
     * @param {type}
     * @return:
     */
    NewsPage.prototype.goTzcontent = function (item) {
        if (item.isread === '0') {
            this.setisread(item.id);
        }
        this.topage.toPage(18, item.id);
    };
    /**
     * @Author: wjy-mac
     * @description: 设置聊天已读
     * @Date: 2019-11-14 20:03:17
     * @param {type}
     * @return:
     */
    NewsPage.prototype.unread = function (id) {
        var _this = this;
        this.http.getData(this.http.setMynewsList, { shopId: id }).subscribe(function (res) {
            _this.newslist.clearShopid(id);
        }, function (err) { });
    };
    /**
     * @Author: wjy-mac
     * @description: 设置通知消息已读
     * @Date: 2019-11-14 21:12:23
     * @param {type}
     * @return:
     */
    NewsPage.prototype.setisread = function (id) {
        var _this = this;
        this.http.getData(this.http.setMynews, { id: id }).subscribe(function (res) {
            _this.newslist.setTzyd(id);
        }, function (err2) { });
    };
    /**
     * @Author: wjy-mac
     * @description: 删除目标聊天消息
     * @Date: 2019-11-14 20:01:02
     * @param {type}
     * @return:
     */
    NewsPage.prototype.deleteItem = function (id) {
        var _this = this;
        this.http.getData(this.http.DeleteMynewslist, { shopId: id }).subscribe(function (res) {
            _this.newslist.deleteItem(id);
        }, function (err2) { });
    };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/pages/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/pages/news/news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_news_list_service__WEBPACK_IMPORTED_MODULE_5__["NewsListService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-news-news-module.js.map