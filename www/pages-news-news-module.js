(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-10-10 09:55:35\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-15 17:55:13\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{type === 1 ? '消息' : '通知' }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n        pullingIcon=\"arrow-dropdown\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"type-box ion-margin-bottom\">\n    <div [ngClass]=\"{active: type === 1}\" (click)=\"type = 1\">消息<ion-badge color=\"danger\" *ngIf=\"newslist.allnum > 0\">{{newslist.allnum}}</ion-badge></div>\n    <div [ngClass]=\"{active: type === 2}\" (click)=\"type = 2\">通知<ion-badge color=\"danger\" *ngIf=\"newslist.tzallnum > 0\">{{newslist.tzallnum}}</ion-badge></div>\n  </div>\n  <div [hidden]=\"type !== 1\">\n    <app-nomore *ngIf=\"list.length === 0\"></app-nomore>\n    <ion-list>\n      <ion-item-sliding *ngFor=\"let item of list\">\n          <ion-item (click)=\"goNews(item)\">\n            <ion-avatar slot=\"start\">\n              <img class=\"header\" [src]=\"item['arr'][0].theader | imgsrc: http.zdomain\" alt=\"\">\n            </ion-avatar>\n            <ion-label>\n              {{item['arr'][0].shopName || item['arr'][item['arr'].length - 1].tname}}\n              <p *ngIf=\"item['arr'][item['arr'].length - 1].type == 1\">{{item['arr'][item['arr'].length - 1].content}}</p>\n              <p *ngIf=\"item['arr'][item['arr'].length - 1].type == 2\">[图片]</p>\n              <p *ngIf=\"item['arr'][item['arr'].length - 1].type == 3\">[商品]</p>\n            </ion-label>\n            <ion-note slot=\"end\">\n              <div class=\"time\">{{item['arr'][item['arr'].length - 1].time  | newslisttime: item['arr']}}</div>\n              <ion-badge color=\"danger\" *ngIf=\"item.num && item.num > 0\">{{item['num']}}</ion-badge>\n            </ion-note>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"unread(item['arr'][item['arr'].length - 1].shopId)\">标为已读</ion-item-option>\n            <ion-item-option color=\"danger\" (click)=\"deleteItem(item['arr'][item['arr'].length - 1].shopId)\">删除</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div [hidden]=\"type !== 2\" class=\"tzgg\">\n    <app-nomore *ngIf=\"tzgglist.length === 0\"></app-nomore>\n    <div class=\"my-list\">\n      <div class=\"my-item ion-margin-bottom\" *ngFor=\"let item of tzgglist\" (click)=\"goTzcontent(item)\">\n        <div class=\"title\"><span><ion-text color=\"danger\" *ngIf=\"item.isread === '0'\">*</ion-text>平台通知</span> <ion-text color=\"tertiary\">{{item.last_send | time}}</ion-text></div>\n        <div class=\"tz-content\">\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\" alt=\"\">\n          <div class=\"right\">\n            <div class=\"name\">{{item.title || item.email_content}}</div>\n            <!-- <div class=\"ts\" [innerHTML]=\"assembleHTML(item.email_content)\"></div> -->\n            <ion-text color=\"tertiary\">来自平台</ion-text>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

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

/***/ "./src/app/pages/news/news.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".type-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.type-box > div {\n  font-size: var(--ion-text);\n  color: #333;\n  margin-right: 50px;\n  position: relative;\n}\n.type-box > div.active {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark);\n  font-weight: 600;\n}\n.type-box > div.active::after {\n  content: \"\";\n  display: block;\n  background: var(--ion-color-linegradient);\n  height: 3px;\n  width: 60%;\n  border-radius: 1.5px;\n  margin-left: 20%;\n}\n.type-box > div ion-badge {\n  position: absolute;\n  left: 110%;\n}\n.time {\n  text-align: center;\n  font-size: var(--ion-sm-text);\n  margin-bottom: 6px;\n}\n.my-item {\n  background-color: var(--ion-color-light);\n  border-radius: 5px;\n  padding: 8px;\n  width: 100%;\n}\n.my-item ion-text {\n  font-size: var(--ion-sm-text);\n}\n.my-item .title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 7px;\n}\n.my-item .title span {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark);\n}\n.my-item .tz-content {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n.my-item .tz-content img {\n  width: 70px;\n  height: 70px;\n}\n.my-item .tz-content .right {\n  flex: 1;\n  background-color: #fff;\n  overflow: hidden;\n}\n.my-item .tz-content .right .name {\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n  height: 40px;\n  line-height: 20px;\n  overflow: hidden;\n  margin: 10px 10px 0;\n  width: calc(100% - 20px);\n}\n.my-item .tz-content .right .ts {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n  margin: 0 10px 10px;\n  height: 20px;\n  line-height: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: calc(100% - 20px);\n}\n.my-item .tz-content .right .ts p {\n  margin: 0 !important;\n}\n.my-item .tz-content .right ion-text {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0dOO0FERk07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDSVI7QURESTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0dOO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNFRjtBREFBO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDR0Y7QURGRTtFQUNFLDZCQUFBO0FDSUo7QURGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0lKO0FESEk7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FDS047QURGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDSUo7QURISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDS047QURISTtFQUNFLE9BQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDS047QURKTTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNNUjtBREpNO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUNNUjtBRExRO0VBQ0Usb0JBQUE7QUNPVjtBREpNO0VBQ0UsaUJBQUE7QUNNUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICY+ZGl2IHtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQpO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1iYWRnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMTAlO1xuICAgIH1cbiAgfVxufVxuLnRpbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4ubXktaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICB9XG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuICB9XG4gIC50ei1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cbiAgICAucmlnaHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgfVxuICAgICAgLnRzIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIudHlwZS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHlwZS1ib3ggPiBkaXYge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnR5cGUtYm94ID4gZGl2LmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi50eXBlLWJveCA+IGRpdi5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQpO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDYwJTtcbiAgYm9yZGVyLXJhZGl1czogMS41cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG4udHlwZS1ib3ggPiBkaXYgaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMTAlO1xufVxuXG4udGltZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLm15LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubXktaXRlbSBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xufVxuLm15LWl0ZW0gLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4ubXktaXRlbSAudGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi5teS1pdGVtIC50ei1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4ubXktaXRlbSAudHotY29udGVudCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLm15LWl0ZW0gLnR6LWNvbnRlbnQgLnJpZ2h0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5teS1pdGVtIC50ei1jb250ZW50IC5yaWdodCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHggMTBweCAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4ubXktaXRlbSAudHotY29udGVudCAucmlnaHQgLnRzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi5teS1pdGVtIC50ei1jb250ZW50IC5yaWdodCAudHMgcCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLm15LWl0ZW0gLnR6LWNvbnRlbnQgLnJpZ2h0IGlvbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */");

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
    NewsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_news_list_service__WEBPACK_IMPORTED_MODULE_5__["NewsListService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }
    ]; };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.page.scss */ "./src/app/pages/news/news.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_news_list_service__WEBPACK_IMPORTED_MODULE_5__["NewsListService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-news-news-module.js.map