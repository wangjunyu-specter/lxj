(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pqcontent-pqcontent-module"],{

/***/ "./src/app/pages/pqcontent/pqcontent.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pqcontent/pqcontent.module.ts ***!
  \*****************************************************/
/*! exports provided: PqcontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PqcontentPageModule", function() { return PqcontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pqcontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pqcontent.page */ "./src/app/pages/pqcontent/pqcontent.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _pqcontent_page__WEBPACK_IMPORTED_MODULE_6__["PqcontentPage"]
    }
];
var PqcontentPageModule = /** @class */ (function () {
    function PqcontentPageModule() {
    }
    PqcontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pqcontent_page__WEBPACK_IMPORTED_MODULE_6__["PqcontentPage"]]
        })
    ], PqcontentPageModule);
    return PqcontentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pqcontent/pqcontent.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/pqcontent/pqcontent.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <div class=\"search-bar\">\n      <div class=\"left\" (click)=\"goBack()\">\n        <img src=\"/assets/backbg.svg\" alt=\"\">\n      </div>\n      <div class=\"center\" *ngIf=\"data\">\n        <div class=\"person\">\n          <img [src]=\"data.headimg | imgsrc: http.zdomain\">\n          <div class=\"name-box\">\n            <div class=\"name\">{{data.user_name}} <app-yhbox [color]=\"'yellow'\" [title]=\"data.name\" [noborder]=\"true\"></app-yhbox></div>\n            <div class=\"des\">{{data.createtime | oldtonow}}</div>\n          </div>\n        </div>\n        <div class=\"gz\" *ngIf=\"data.userid | isgz: gzlistarr\">\n          <span>+关注</span>\n        </div>\n      </div>\n      <div class=\"right\">\n        <ion-icon name=\"more\" mode=\"ios\"></ion-icon>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"top-content\" padding *ngIf=\"data\">\n    <p *ngIf=\"data.content && data.content != 'null'\">{{data.content}}</p>\n    <app-pqimgbox [imglist]=\"data.thumb && data.thumb[0] ? data.thumb : data.imgarr\" [ytimglist]=\"data.imgarr\"></app-pqimgbox>\n    <div class=\"address-box\" *ngIf=\"data.address && data.address != 'null'\">\n      <div class=\"left\">\n        <div class=\"address\">\n          <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\n          <span>{{data.address}}</span>\n        </div>\n      </div>\n      <ion-text color=\"medium\">距你9053km</ion-text>\n    </div>\n    <div class=\"img-box\">\n      <img *ngFor=\"let src of data.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\n      {{data.dznum}}人觉得很赞\n    </div>\n  </div>\n  <div *ngIf=\"data\" class=\"app-pllist\" padding-bottom margin-bottom>\n    <div class=\"hfnum\">{{data.plnum}}条回复</div>\n    <app-pllist *ngFor=\"let item of pllist\" [data]=\"item\" [tid]=\"id\" [uid]=\"data.userid\" (setItem)=\"setplItem($event)\"></app-pllist>\n  </div>\n  <ion-backdrop *ngIf=\"isshowDrop\" (ionBackdropTap)=\"clickdrop()\"></ion-backdrop>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar no-padding>\n    <app-chatinputbox (sub)=\"sub($event)\" (myfous)=\"monfous()\" (mybulr)=\"monblur()\" [username]=\"seletename\"></app-chatinputbox>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/pqcontent/pqcontent.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/pqcontent/pqcontent.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #fff; }\n\nion-content {\n  --background: var(--ion-gray-background-color); }\n\nion-content .top-content {\n    background-color: #fff; }\n\nion-content .address-box {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    margin-top: 10px; }\n\nion-content .address-box .left {\n      margin-right: 10px; }\n\nion-content .address-box .left .address {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        background-color: var(--ion-color-light);\n        padding: 2px 5px;\n        border-radius: 5px;\n        font-size: var(--ion-sm-text); }\n\nion-content .address-box .left .address span {\n          flex: 1;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden; }\n\nion-content .address-box ion-text {\n      font-size: var(--ion-sm-text); }\n\nion-content .img-box {\n    margin-top: 15px;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-medium); }\n\nion-content .img-box img {\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      margin-right: 5px; }\n\nion-content .app-pllist {\n    padding-top: 1px;\n    margin-top: 15px;\n    background-color: #fff; }\n\nion-content .app-pllist .hfnum {\n      font-size: var(--ion-text);\n      color: var(--ion-color-dark);\n      margin: 15px; }\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n  height: 36px; }\n\n.search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n\n.search-bar .left img {\n      width: 22px;\n      margin-left: 5px; }\n\n.search-bar .right {\n    width: 25px;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end; }\n\n.search-bar .right ion-icon {\n      color: var(--ion-color-dark); }\n\n.search-bar .right div.round {\n      background-color: rgba(0, 0, 0, 0.6);\n      width: 21px;\n      height: 21px;\n      border-radius: 50%;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center; }\n\n.search-bar .center {\n    flex: 1;\n    margin: 0 15px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center; }\n\n.search-bar .center .person {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center; }\n\n.search-bar .center .person img {\n        width: 28px;\n        height: 28px;\n        border-radius: 50%;\n        margin-right: 10px; }\n\n.search-bar .center .person .name-box {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start; }\n\n.search-bar .center .person .name-box .name {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: flex-start;\n          font-size: var(--ion-title);\n          color: var(--ion-color-dark); }\n\n.search-bar .center .person .name-box .name app-yhbox {\n            margin-left: 10px; }\n\n.search-bar .center .person .name-box .des {\n          font-size: var(--ion-sm-text);\n          color: var(--ion-color-medium); }\n\n.search-bar .center .gz span {\n      background: var(--ion-color-linegradient);\n      font-size: var(--ion-sm-text);\n      height: 20px;\n      padding: 0 7px;\n      display: block;\n      line-height: 20px;\n      text-align: center;\n      border-radius: 10px; }\n\n.search-bar .center .gz span:active {\n        background: var(--ion-color-linegradient-active); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wcWNvbnRlbnQvcHFjb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFhLEVBQUE7O0FBRWY7RUFDRSw4Q0FBYSxFQUFBOztBQURmO0lBR0ksc0JBQXNCLEVBQUE7O0FBSDFCO0lBTUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBOztBQVZwQjtNQVlNLGtCQUFrQixFQUFBOztBQVp4QjtRQWNRLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQix3Q0FBd0M7UUFDeEMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQiw2QkFBNkIsRUFBQTs7QUFyQnJDO1VBd0JVLE9BQU87VUFDUCxtQkFBbUI7VUFDbkIsdUJBQXVCO1VBQ3ZCLGdCQUFnQixFQUFBOztBQTNCMUI7TUFpQ00sNkJBQTZCLEVBQUE7O0FBakNuQztJQXFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw4QkFBOEIsRUFBQTs7QUEzQ2xDO01BNkNNLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBOztBQWhEdkI7SUFvREksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTs7QUF0RDFCO01Bd0RNLDBCQUEwQjtNQUMxQiw0QkFBNEI7TUFDNUIsWUFBWSxFQUFBOztBQUlsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFQZDtJQVNJLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7O0FBZHZCO01BZ0JNLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTs7QUFqQnRCO0lBcUJJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBOztBQXhCN0I7TUEwQk0sNEJBQTRCLEVBQUE7O0FBMUJsQztNQTZCTSxvQ0FBZ0M7TUFDaEMsV0FBVztNQUNYLFlBQVk7TUFHWixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7O0FBdEN6QjtJQStDSSxPQUFPO0lBQ1AsY0FBYztJQUVkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBOztBQXJEdkI7TUF1RE0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiwyQkFBMkI7TUFDM0IsbUJBQW1CLEVBQUE7O0FBMUR6QjtRQTREUSxXQUFXO1FBQ1gsWUFBWTtRQUdaLGtCQUFrQjtRQUNsQixrQkFBa0IsRUFBQTs7QUFqRTFCO1FBb0VRLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QixFQUFBOztBQXZFL0I7VUF5RVUsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQixtQkFBbUI7VUFDbkIsMkJBQTJCO1VBQzNCLDJCQUEyQjtVQUMzQiw0QkFBNEIsRUFBQTs7QUE5RXRDO1lBZ0ZZLGlCQUFpQixFQUFBOztBQWhGN0I7VUFvRlUsNkJBQTZCO1VBQzdCLDhCQUE4QixFQUFBOztBQXJGeEM7TUEyRlEseUNBQXlDO01BQ3pDLDZCQUE2QjtNQUM3QixZQUFZO01BRVosY0FBYztNQUNkLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsa0JBQWtCO01BR2xCLG1CQUFtQixFQUFBOztBQXJHM0I7UUF1R1UsZ0RBQWdELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcWNvbnRlbnQvcHFjb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgLnRvcC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5hZGRyZXNzLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLmxlZnQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIC8vbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbiAgLmltZy1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmFwcC1wbGxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLmhmbnVtIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIG1hcmdpbjogMTVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNlYXJjaC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiB2YXIoLS1pb24tc3RhdHVzYmFyLWxlZnQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24taWNvbi1iaWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICAgIGRpdi5yb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgICB3aWR0aDogMjFweDtcclxuICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAvL2ltZyB7XHJcbiAgICAvLyAgd2lkdGg6IDIycHg7XHJcbiAgICAvLyAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgLy8gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAvL31cclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAvL2hlaWdodDogMjdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5wZXJzb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWUtYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIGFwcC15aGJveCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmd6IHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudCk7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIC8vd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGluZWdyYWRpZW50LWFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/pqcontent/pqcontent.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pqcontent/pqcontent.page.ts ***!
  \***************************************************/
/*! exports provided: PqcontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PqcontentPage", function() { return PqcontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_pqlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pqlist.service */ "./src/app/services/pqlist.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_gzlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/gzlist.service */ "./src/app/services/gzlist.service.ts");
/* harmony import */ var _services_emojiishow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/emojiishow.service */ "./src/app/services/emojiishow.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_plitemclick_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/plitemclick.service */ "./src/app/services/plitemclick.service.ts");










// import {Keyboard} from "@ionic-native/keyboard/ngx";
var PqcontentPage = /** @class */ (function () {
    function PqcontentPage(activeroute, nav, pqlistfn, http, gzlist, emojiishow, userfn, itemclickfn) {
        this.activeroute = activeroute;
        this.nav = nav;
        this.pqlistfn = pqlistfn;
        this.http = http;
        this.gzlist = gzlist;
        this.emojiishow = emojiishow;
        this.userfn = userfn;
        this.itemclickfn = itemclickfn;
        this.pageObj = {
            page: 1,
            num: 20
        };
    }
    PqcontentPage.prototype.ngOnInit = function () {
        this.isshowDrop = false;
        this.setPlitem = {};
    };
    PqcontentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.gzlist.getList().then(function (res) {
            _this.gzlistarr = res;
        }).catch(function (err2) {
            _this.gzlistarr = [];
        });
        this.activeroute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.id = params['id'];
            _this.type = params['type'] ? Number(params['type']) : 0;
            _this.data = _this.pqlistfn.getPqone(_this.id, _this.type);
            _this.getContent();
        });
        this.userfn.getUserp().then(function (res) {
            _this.user = res;
        });
    };
    PqcontentPage.prototype.getContent = function () {
        var _this = this;
        var hasdata = 1;
        if (!this.data) {
            hasdata = 2;
        }
        this.http.getData(this.http.getpllist, { tid: this.id, page: this.pageObj.page, num: this.pageObj.num, hasdata: hasdata }).subscribe(function (res) {
            console.log(res);
            if (!_this.data) {
                _this.data = res.result.data.result;
                _this.gzlist.setList(res.result.data.users);
            }
            _this.pllist = res.result.result;
        }, function (err) {
            console.log(err);
        });
    };
    PqcontentPage.prototype.goBack = function () {
        this.nav.back();
    };
    PqcontentPage.prototype.monfous = function () {
        console.log('时候');
        this.isshowDrop = true;
        // const el = document.querySelector('ion-footer');
        // setTimeout(() => {
        //     el.scrollIntoView(false);
        // }, 200);
        // this.positionStyle = {
        //     position: 'absolute',
        //     bottom: 0
        // };
    };
    PqcontentPage.prototype.monblur = function () {
        if (!this.emojiishow.getIsshows()) {
            this.blurClear();
        }
        // const el = document.querySelector('ion-footer');
        // el.scrollIntoView(true);
        // this.positionStyle = {
        //     position: '',
        //     bottom: ''
        // };
    };
    PqcontentPage.prototype.sub = function (content) {
        var _this = this;
        if (!content) {
            return false;
        }
        console.log(content);
        var item = Object.assign({}, this.setPlitem);
        var obj = {
            touid: item.userid || this.data.userid,
            tid: this.data.id,
            content: content,
        };
        if (item.uid != this.user.user_id && item.touid == this.user.user_id) {
            obj.ishf = 1;
        }
        else {
            obj.ishf = 0;
        }
        console.log(item);
        if (item.pid && item.pid != 0) {
            obj['pid'] = item.pid;
        }
        else if (item.id && item.id != 0) {
            obj['pid'] = item.id;
        }
        else {
            obj['pid'] = 0;
        }
        console.log(obj);
        this.blurClear(1);
        this.http.postformdataloading(this.http.setpl, obj).subscribe(function (res) {
            console.log(res);
            // : todo 差头像等数据
            obj.id = res.result.id;
            obj.time = Date.parse((new Date()).toString()) / 1000;
            obj.headimg = _this.user.headimg;
            obj.dznum = 0;
            obj.user_name = _this.user.user_name;
            obj.name = res.result.user.name;
            console.log(obj.pid);
            if (obj.pid == 0) {
                _this.pllist.unshift(obj);
            }
            else {
                for (var i = 0, j = _this.pllist.length; i < j; i++) {
                    console.log(_this.pllist[i].id);
                    if (_this.pllist[i].id == obj.pid) {
                        _this.pllist[i].chrild.unshift(obj);
                        _this.pllist[i].plnum += 1;
                        return false;
                    }
                }
            }
        });
    };
    PqcontentPage.prototype.clickdrop = function () {
        this.blurClear(1);
        this.itemclickfn.Source.emit(2);
    };
    PqcontentPage.prototype.setplItem = function (item) {
        console.log(item);
        this.isshowDrop = true;
        this.seletename = item.user_name;
        this.setPlitem = item;
    };
    PqcontentPage.prototype.blurClear = function (type) {
        var _this = this;
        if (type) {
            this.emojiishow.setIsshow(2);
        }
        this.isclear = setTimeout(function () {
            _this.setPlitem = {};
            _this.isclear = null;
        }, 1000);
        this.seletename = '';
        this.isshowDrop = false;
    };
    PqcontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pqcontent',
            template: __webpack_require__(/*! ./pqcontent.page.html */ "./src/app/pages/pqcontent/pqcontent.page.html"),
            styles: [__webpack_require__(/*! ./pqcontent.page.scss */ "./src/app/pages/pqcontent/pqcontent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_pqlist_service__WEBPACK_IMPORTED_MODULE_4__["PqlistService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _services_gzlist_service__WEBPACK_IMPORTED_MODULE_6__["GzlistService"], _services_emojiishow_service__WEBPACK_IMPORTED_MODULE_7__["EmojiishowService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _services_plitemclick_service__WEBPACK_IMPORTED_MODULE_9__["PlitemclickService"]])
    ], PqcontentPage);
    return PqcontentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pqcontent-pqcontent-module.js.map