(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-zt-zt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/zt/zt.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/zt/zt.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <div class=\"search-bar\">\n      <div class=\"left\" (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </div>\n      <div class=\"center\" (click)=\"toPage(5)\">\n        {{title || '专题页'}}\n        <!--<div class=\"search-box\">-->\n          <!--<img src=\"/assets/fdj.svg\"><span *ngIf=\"shopdata\">{{shopdata.search_keywords}}</span>-->\n        <!--</div>-->\n      </div>\n      <div class=\"right\">\n        <ion-icon name=\"more\" mode=\"ios\"></ion-icon>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <div class=\"top-box\" padding>\n    <div class=\"banner\">\n      <img *ngIf=\"banner\" [src]=\"http.zdomain + banner\" alt=\"\">\n      <img *ngIf=\"!banner\" [src]=\"http.zdomain + banner1\" alt=\"\">\n    </div>\n    <div class=\"yhtime-box\" *ngIf=\"topone && topone.promote_price && topone.promote_price !== '0' && topone.promote_end_date\">\n      <img src=\"./assets/cxbar.svg\" alt=\"\">\n      <div class=\"text-content\">\n        <div class=\"left\"><span>限时价</span><span>¥</span><span>{{topone.promote_price}}</span></div>\n        <div class=\"right\">\n          <span>剩余时间</span>\n          <div class=\"time-box\">\n            <span *ngIf=\"xsday && xsday != 0\">{{xsday}}</span><span *ngIf=\"xsday && xsday != 0\">:</span><span>{{xsHouse}}</span><span>:</span><span>{{xsMin}}</span><span>:</span><span>{{xsSec}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"title-box\" *ngIf=\"topone\" [ngClass]=\"{'title-top': !topone.promote_price || topone.promote_price == '0' || !topone.promote_end_date}\">\n      <app-productlist *ngIf=\"topone\" [data]=\"topone\"></app-productlist>\n    </div>\n  </div>\n  <div padding-start padding-end padding-top *ngFor=\"let item of list\">\n    <app-pagetitle [myname]=\"item['title']\" [type]=\"true\" [nopadding]=\"true\"></app-pagetitle>\n    <app-productlist *ngFor=\"let citem of item.goods\" [data]=\"citem\" (open)=\"openpage($event)\"></app-productlist>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/zt/zt.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/zt/zt.module.ts ***!
  \***************************************/
/*! exports provided: ZtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZtPageModule", function() { return ZtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _zt_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zt.page */ "./src/app/pages/zt/zt.page.ts");








var routes = [
    {
        path: '',
        component: _zt_page__WEBPACK_IMPORTED_MODULE_7__["ZtPage"]
    }
];
var ZtPageModule = /** @class */ (function () {
    function ZtPageModule() {
    }
    ZtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_zt_page__WEBPACK_IMPORTED_MODULE_7__["ZtPage"]]
        })
    ], ZtPageModule);
    return ZtPageModule;
}());



/***/ }),

/***/ "./src/app/pages/zt/zt.page.scss":
/*!***************************************!*\
  !*** ./src/app/pages/zt/zt.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n}\n.search-bar .left {\n  font-size: var(--ion-title);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.search-bar .left img {\n  width: 12px;\n  margin-left: 5px;\n}\n.search-bar .right img {\n  width: 19px;\n}\n.search-bar .center {\n  flex: 1;\n  margin: 0 15px;\n  height: 27px;\n  box-sizing: border-box;\n  text-align: center;\n  line-height: 27px;\n}\nion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n  --opacity: 0;\n}\n.yhtime-box {\n  margin-top: -20px;\n  position: relative;\n  z-index: 100;\n  width: 100%;\n}\n.yhtime-box img {\n  width: 100%;\n}\n.yhtime-box .text-content {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  top: 10%;\n  left: 0;\n  display: flex;\n  align-items: stretch;\n}\n.yhtime-box .text-content > div {\n  flex: 1;\n}\n.yhtime-box .text-content .left {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-end;\n  color: #fff;\n}\n.yhtime-box .text-content .left span {\n  display: inline-block;\n  font-size: var(--ion-text);\n}\n.yhtime-box .text-content .left span:first-of-type {\n  padding-left: 15px;\n  margin-right: 10px;\n}\n.yhtime-box .text-content .left span:last-of-type {\n  font-size: 26px;\n  font-weight: 600;\n  margin-bottom: -3px;\n}\n.yhtime-box .text-content .right {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n  font-size: var(--ion-text);\n  color: #fff;\n  padding-right: 15px;\n}\n.yhtime-box .text-content .right .time-box {\n  margin-left: 5px;\n}\n.yhtime-box .text-content .right .time-box span:nth-of-type(odd) {\n  background-color: #fff;\n  padding: 0 2px;\n  border-radius: 3px;\n  color: #1DB9BD;\n  margin: 0 3px;\n}\n.title-box {\n  box-shadow: 0 5px 5px #f1f1f1;\n  background-color: #fff;\n  position: relative;\n  margin-top: -15px;\n  z-index: 0;\n}\n.title-box.title-top {\n  margin-top: -12px;\n}\n.top-box {\n  margin-top: -44px;\n  background-color: #fff;\n  background: url(\"/assets/ztbg.png\") left top no-repeat;\n  background-size: 100% 80%;\n  background-size: 100% calc(100% - 50px);\n  background-size: 100% -webkit-calc(100% - 50px);\n}\n.top-box .banner {\n  margin-top: 35px;\n}\n.top-box img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy96dC96dC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3p0L3p0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDR047QURDSTtFQUNFLFdBQUE7QUNDTjtBREVFO0VBQ0UsT0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBR0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNFLDhGQUFBO0VBQ0EsWUFBQTtBQ0FGO0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNFSjtBRERJO0VBQ0UsT0FBQTtBQ0dOO0FEREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0dOO0FERk07RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0FDSVI7QURIUTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNLVjtBREhRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNLVjtBREFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRU47QURETTtFQUNFLGdCQUFBO0FDR1I7QURGUTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNJVjtBREVBO0VBR0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURDQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzREFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtBQ0VGO0FEREU7RUFDRSxnQkFBQTtBQ0dKO0FEREU7RUFDRSxXQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy96dC96dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAtLW9wYWNpdHk6IDA7XHJcbn1cclxuLnlodGltZS1ib3gge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGV4dC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAmPmRpdiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG4gICAgICAgICAgLy9tYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgIC50aW1lLWJveCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBzcGFuOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgY29sb3I6ICMxREI5QkQ7XHJcbiAgICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udGl0bGUtYm94IHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDVweCAjZjFmMWYxO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggNXB4ICNmMWYxZjE7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4ICNmMWYxZjE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgei1pbmRleDogMDtcclxuICAmLnRpdGxlLXRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICB9XHJcbn1cclxuLnRvcC1ib3gge1xyXG4gIG1hcmdpbi10b3A6IC00NHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy96dGJnLnBuZ1wiKSBsZWZ0IHRvcCBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDgwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIC13ZWJraXQtY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgLmJhbm5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59IiwiLnNlYXJjaC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5zZWFyY2gtYmFyIC5sZWZ0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VhcmNoLWJhciAubGVmdCBpbWcge1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zZWFyY2gtYmFyIC5yaWdodCBpbWcge1xuICB3aWR0aDogMTlweDtcbn1cbi5zZWFyY2gtYmFyIC5jZW50ZXIge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgMTVweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjdweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xuICAtLW9wYWNpdHk6IDA7XG59XG5cbi55aHRpbWUtYm94IHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi55aHRpbWUtYm94IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnlodGltZS1ib3ggLnRleHQtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4ueWh0aW1lLWJveCAudGV4dC1jb250ZW50ID4gZGl2IHtcbiAgZmxleDogMTtcbn1cbi55aHRpbWUtYm94IC50ZXh0LWNvbnRlbnQgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgY29sb3I6ICNmZmY7XG59XG4ueWh0aW1lLWJveCAudGV4dC1jb250ZW50IC5sZWZ0IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xufVxuLnlodGltZS1ib3ggLnRleHQtY29udGVudCAubGVmdCBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi55aHRpbWUtYm94IC50ZXh0LWNvbnRlbnQgLmxlZnQgc3BhbjpsYXN0LW9mLXR5cGUge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG59XG4ueWh0aW1lLWJveCAudGV4dC1jb250ZW50IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLnlodGltZS1ib3ggLnRleHQtY29udGVudCAucmlnaHQgLnRpbWUtYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi55aHRpbWUtYm94IC50ZXh0LWNvbnRlbnQgLnJpZ2h0IC50aW1lLWJveCBzcGFuOm50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzFEQjlCRDtcbiAgbWFyZ2luOiAwIDNweDtcbn1cblxuLnRpdGxlLWJveCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggNXB4ICNmMWYxZjE7XG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggNXB4ICNmMWYxZjE7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAjZjFmMWYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICB6LWluZGV4OiAwO1xufVxuLnRpdGxlLWJveC50aXRsZS10b3Age1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbn1cblxuLnRvcC1ib3gge1xuICBtYXJnaW4tdG9wOiAtNDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy96dGJnLnBuZ1wiKSBsZWZ0IHRvcCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA4MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIC13ZWJraXQtY2FsYygxMDAlIC0gNTBweCk7XG59XG4udG9wLWJveCAuYmFubmVyIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi50b3AtYm94IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/zt/zt.page.ts":
/*!*************************************!*\
  !*** ./src/app/pages/zt/zt.page.ts ***!
  \*************************************/
/*! exports provided: ZtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZtPage", function() { return ZtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_zt_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/zt-list.service */ "./src/app/services/zt-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");







var ZtPage = /** @class */ (function () {
    function ZtPage(nav, ztlist, activeroute, http, topage) {
        this.nav = nav;
        this.ztlist = ztlist;
        this.activeroute = activeroute;
        this.http = http;
        this.topage = topage;
    }
    ZtPage.prototype.ngOnInit = function () {
        // this.getData
    };
    ZtPage.prototype.ionViewDidEnter = function () {
        this.getParam();
    };
    ZtPage.prototype.getParam = function () {
        var _this = this;
        this.activeroute.queryParams.subscribe(function (params) {
            console.log(params['id']);
            _this.ztlist.getData(params['id']).then(function (res) {
                _this.setData(res);
            }).catch(function (err) {
                console.log(err);
                _this.nav.back();
            });
        }, function (err) { });
    };
    ZtPage.prototype.setData = function (data) {
        console.log(data);
        this.title = data['title'];
        this.banner = data['pic'];
        var res = data['sort_goods_arr'];
        if (res[0] && res[0]['goods'] && res[0]['goods'].length > 0) {
            if (res[0]['goods'].length === 1) {
                this.settopone(res[0]['goods'][0]);
                if (!this.banner) {
                    this.banner1 = this.topone['goods_img'];
                }
            }
            else {
                this.settopone(res[0]['goods'].splice(0, 1)[0]);
            }
        }
        this.list = res;
    };
    ZtPage.prototype.settopone = function (data) {
        delete data['goods_thumb'];
        this.topone = data;
        if (this.topone.promote_price && this.topone.promote_price !== '0'
            && this.topone.promote_end_date) {
            this.setXstime();
        }
    };
    ZtPage.prototype.setXstime = function () {
        var _this = this;
        var setTime = setInterval(function () {
            var endDate = _this.topone.promote_end_date;
            var nowDate = Date.parse((new Date()).toString());
            var totalSeconds = parseInt(((Number(endDate) - Number(nowDate)) / 1000).toString(), 10);
            var days = Math.floor(totalSeconds / (60 * 60 * 24));
            var modulo = totalSeconds % (60 * 60 * 24);
            var hours = Math.floor(modulo / (60 * 60));
            modulo = modulo % (60 * 60);
            var minutes = Math.floor(modulo / 60);
            var seconds = parseInt((modulo % 60).toString(), 10);
            if (hours >= 10) {
                _this.xsHouse = hours.toString();
            }
            else {
                _this.xsHouse = "0" + hours;
            }
            if (minutes >= 10) {
                _this.xsMin = minutes.toString();
            }
            else {
                _this.xsMin = "0" + minutes;
            }
            if (seconds >= 10) {
                _this.xsSec = seconds.toString();
            }
            else {
                _this.xsSec = "0" + seconds;
            }
            _this.xsday = days.toString();
            if (days === 0 && hours === 0 && minutes === 0 && seconds <= 0) {
                clearInterval(setTime);
            }
        }, 1000);
    };
    ZtPage.prototype.logScrolling = function ($event) {
        var top = $event.detail.scrollTop;
        if (!this.scroolold) {
            this.scroolold = top;
        }
        else {
            if (this.scroolold > 44 && top > 44) {
                this.scroolold = top;
                return false;
            }
            this.scroolold = top;
        }
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
        }
        else {
            num = 1;
        }
        this.setNavstatus(num.toString());
    };
    ZtPage.prototype.setNavstatus = function (num) {
        var el = document.querySelector('ion-toolbar');
        el.style.setProperty('--opacity', num);
    };
    ZtPage.prototype.goBack = function () {
        this.nav.back();
    };
    ZtPage.prototype.openpage = function ($event) {
        this.toPage(2, $event['goods_id']);
    };
    /**
     * type 1 商品分类列表 2 商品详情 3 主题 4 选择选择地址 5 搜索 6 商城首页
     * @param type
     * @param id
     */
    ZtPage.prototype.toPage = function (type, id, name) {
        console.log(type);
        if (typeof type === 'string') {
            type = Number(type);
        }
        // if (type === 2) {
        //   console.log(type)
        //   this.route.navigate(['/productcontent'], {queryParams: {id: id}});
        // } else if (type === 3) {
        //
        // }
        this.topage.toPage(type, id, name);
    };
    ZtPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_zt_list_service__WEBPACK_IMPORTED_MODULE_3__["ZtListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"] }
    ]; };
    ZtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zt',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zt.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/zt/zt.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./zt.page.scss */ "./src/app/pages/zt/zt.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_zt_list_service__WEBPACK_IMPORTED_MODULE_3__["ZtListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"]])
    ], ZtPage);
    return ZtPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-zt-zt-module.js.map