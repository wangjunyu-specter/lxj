(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bouns-bouns-module"],{

/***/ "./src/app/pages/bouns/bouns.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/bouns/bouns.module.ts ***!
  \*********************************************/
/*! exports provided: BounsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BounsPageModule", function() { return BounsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bouns_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bouns.page */ "./src/app/pages/bouns/bouns.page.ts");







var routes = [
    {
        path: '',
        component: _bouns_page__WEBPACK_IMPORTED_MODULE_6__["BounsPage"]
    }
];
var BounsPageModule = /** @class */ (function () {
    function BounsPageModule() {
    }
    BounsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bouns_page__WEBPACK_IMPORTED_MODULE_6__["BounsPage"]]
        })
    ], BounsPageModule);
    return BounsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bouns/bouns.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/bouns/bouns.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>优惠券</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"my-list\">\n    <div class=\"item\" *ngFor=\"let item of list\">\n      <div class=\"left\">\n        <div class=\"title\">{{item.type_name}}</div>\n        <div class=\"footer\">\n          <p>{{item.supplier_name}}</p>\n          <p>{{item.use_startdate}}-{{item.use_enddate}}</p>\n        </div>\n      </div>\n      <div class=\"center\">\n        <div class=\"text\">\n          <div class=\"top\">¥<span>{{item.type_money}}</span></div>\n          <p>满{{item.min_goods_amount}}元可用</p>\n        </div>\n      </div>\n      <div class=\"right\"></div>\n      <div class=\"tag\">{{item.status}}</div>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"正在加载...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/bouns/bouns.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/bouns/bouns.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-list .item {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  box-shadow: 0 0 9px #f3f3f3;\n  margin-top: 15px;\n  overflow: hidden; }\n  .my-list .item .left {\n    flex: 1;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start; }\n  .my-list .item .left .title {\n      color: var(--ion-color-dark);\n      font-size: var(--ion-title);\n      margin-bottom: 30px; }\n  .my-list .item .left p {\n      color: var(--ion-color-medium);\n      font-size: var(--ion-sm-text);\n      margin: 0; }\n  .my-list .item .center {\n    width: 100px;\n    background: #E71F19;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  .my-list .item .center .top {\n      text-align: center;\n      font-weight: 600; }\n  .my-list .item .center .top span {\n        font-size: 24px; }\n  .my-list .item .center p {\n      font-size: var(--ion-sm-text);\n      text-align: center;\n      margin-top: 5px; }\n  .my-list .item .right {\n    width: 16px;\n    background: url('bonus_grey.png') top left repeat-y; }\n  .my-list .item .tag {\n    position: absolute;\n    top: 8px;\n    right: -16px;\n    font-size: var(--ion-sm-text);\n    background-color: var(--ion-color-primary);\n    color: #fff;\n    transform: rotate(45deg);\n    width: 65px;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9ib3Vucy9ib3Vucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBR3BCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFYcEI7SUFhTSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QixFQUFBO0VBbEI3QjtNQW9CUSw0QkFBNEI7TUFDNUIsMkJBQTJCO01BQzNCLG1CQUFtQixFQUFBO0VBdEIzQjtNQXlCUSw4QkFBOEI7TUFDOUIsNkJBQTZCO01BQzdCLFNBQVMsRUFBQTtFQTNCakI7SUErQk0sWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7RUFyQ3pCO01BdUNRLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTtFQXhDeEI7UUEwQ1UsZUFBZSxFQUFBO0VBMUN6QjtNQThDUSw2QkFBNkI7TUFDN0Isa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTtFQWhEdkI7SUFvRE0sV0FBVztJQUNYLG1EQUFtRSxFQUFBO0VBckR6RTtJQXdETSxrQkFBa0I7SUFDbEIsUUFBTztJQUNQLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsMENBQTBDO0lBQzFDLFdBQVc7SUFLWCx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm91bnMvYm91bnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWxpc3Qge1xyXG4gIC5pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggI2YzZjNmMztcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDlweCAjZjNmM2YzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDlweCAjZjNmM2YzO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2VudGVyIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRTcxRjE5O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC50b3Age1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JvbnVzX2dyZXkucG5nXCIpIHRvcCBsZWZ0IHJlcGVhdC15O1xyXG4gICAgfVxyXG4gICAgLnRhZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOjhweDtcclxuICAgICAgcmlnaHQ6IC0xNnB4O1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/bouns/bouns.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/bouns/bouns.page.ts ***!
  \*******************************************/
/*! exports provided: BounsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BounsPage", function() { return BounsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bounslist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bounslist.service */ "./src/app/services/bounslist.service.ts");




var BounsPage = /** @class */ (function () {
    function BounsPage(nav, bounlistfn) {
        this.nav = nav;
        this.bounlistfn = bounlistfn;
    }
    BounsPage.prototype.ionViewDidEnter = function () {
        this.list = this.bounlistfn.getList();
    };
    BounsPage.prototype.ngOnInit = function () {
    };
    BounsPage.prototype.doRefresh = function (event) {
        this.bounlistfn.refresh().then(function (res) {
            event.target.complete();
        }).catch(function (err) {
            event.target.complete();
        });
    };
    BounsPage.prototype.goBack = function () {
        this.nav.back();
    };
    BounsPage.prototype.loadData = function (event) {
        this.bounlistfn.addPage();
        this.bounlistfn.getListhttp(1).then(function (res) {
            event.target.complete();
        }).catch(function (err) {
            event.target.complete();
            event.target.disabled = true;
        });
    };
    BounsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bouns',
            template: __webpack_require__(/*! ./bouns.page.html */ "./src/app/pages/bouns/bouns.page.html"),
            styles: [__webpack_require__(/*! ./bouns.page.scss */ "./src/app/pages/bouns/bouns.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_bounslist_service__WEBPACK_IMPORTED_MODULE_3__["BounslistService"]])
    ], BounsPage);
    return BounsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bouns-bouns-module.js.map