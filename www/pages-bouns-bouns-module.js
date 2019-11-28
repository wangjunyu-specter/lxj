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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bouns_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bouns.page */ "./src/app/pages/bouns/bouns.page.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-06-11 19:55:24
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-21 15:59:49
 * @Description: file content
 */







var routes = [
    {
        path: '',
        component: _bouns_page__WEBPACK_IMPORTED_MODULE_7__["BounsPage"]
    }
];
var BounsPageModule = /** @class */ (function () {
    function BounsPageModule() {
    }
    BounsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_bouns_page__WEBPACK_IMPORTED_MODULE_7__["BounsPage"]]
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

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-07-28 01:18:50\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-21 16:00:44\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>优惠券</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <app-nomore *ngIf=\"list && list.length === 0\"></app-nomore>\n  <div class=\"my-list\">\n    <div class=\"item\" *ngFor=\"let item of list\">\n      <div class=\"left\">\n        <div class=\"title\">{{item.type_name}}</div>\n        <div class=\"footer\">\n          <p>{{item.supplier_name}}</p>\n          <p>{{item.use_startdate}}-{{item.use_enddate}}</p>\n        </div>\n      </div>\n      <div class=\"center\">\n        <div class=\"text\">\n          <div class=\"top\">¥<span>{{item.type_money}}</span></div>\n          <p>满{{item.min_goods_amount}}元可用</p>\n        </div>\n      </div>\n      <div class=\"right\"></div>\n      <div class=\"tag\" [ngClass]=\"{nouse: item.status == '未使用', ygq: item.status == '已过期'}\">{{item.status}}</div>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"正在加载...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/bouns/bouns.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/bouns/bouns.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-list .item {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  box-shadow: 0 0 9px #f3f3f3;\n  margin-top: 15px;\n  overflow: hidden; }\n  .my-list .item .left {\n    flex: 1;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start; }\n  .my-list .item .left .title {\n      color: var(--ion-color-dark);\n      font-size: var(--ion-title);\n      margin-bottom: 30px; }\n  .my-list .item .left p {\n      color: var(--ion-color-medium);\n      font-size: var(--ion-sm-text);\n      margin: 0; }\n  .my-list .item .center {\n    width: 100px;\n    background: #E71F19;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  .my-list .item .center .top {\n      text-align: center;\n      font-weight: 600; }\n  .my-list .item .center .top span {\n        font-size: 24px; }\n  .my-list .item .center p {\n      font-size: var(--ion-sm-text);\n      text-align: center;\n      margin-top: 5px; }\n  .my-list .item .right {\n    width: 16px;\n    background: url('bonus_grey.png') top left repeat-y; }\n  .my-list .item .tag {\n    position: absolute;\n    top: 8px;\n    right: -16px;\n    font-size: var(--ion-sm-text);\n    background-color: var(--ion-color-success);\n    color: #fff;\n    transform: rotate(45deg);\n    width: 65px;\n    text-align: center; }\n  .my-list .item .tag.nouse {\n      background-color: var(--ion-color-primary); }\n  .my-list .item .tag.ygq {\n      background-color: var(--ion-color-medium); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9ib3Vucy9ib3Vucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBR3BCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFYcEI7SUFhTSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QixFQUFBO0VBbEI3QjtNQW9CUSw0QkFBNEI7TUFDNUIsMkJBQTJCO01BQzNCLG1CQUFtQixFQUFBO0VBdEIzQjtNQXlCUSw4QkFBOEI7TUFDOUIsNkJBQTZCO01BQzdCLFNBQVMsRUFBQTtFQTNCakI7SUErQk0sWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7RUFyQ3pCO01BdUNRLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTtFQXhDeEI7UUEwQ1UsZUFBZSxFQUFBO0VBMUN6QjtNQThDUSw2QkFBNkI7TUFDN0Isa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTtFQWhEdkI7SUFvRE0sV0FBVztJQUNYLG1EQUFtRSxFQUFBO0VBckR6RTtJQXdETSxrQkFBa0I7SUFDbEIsUUFBTztJQUNQLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsMENBQTBDO0lBQzFDLFdBQVc7SUFLWCx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBcEV4QjtNQXNFUSwwQ0FBMEMsRUFBQTtFQXRFbEQ7TUF5RVEseUNBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib3Vucy9ib3Vucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktbGlzdCB7XHJcbiAgLml0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAjZjNmM2YzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgOXB4ICNmM2YzZjM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4ICNmM2YzZjM7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jZW50ZXIge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNFNzFGMTk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLnRvcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYm9udXNfZ3JleS5wbmdcIikgdG9wIGxlZnQgcmVwZWF0LXk7XHJcbiAgICB9XHJcbiAgICAudGFnIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6OHB4O1xyXG4gICAgICByaWdodDogLTE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB3aWR0aDogNjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAmLm5vdXNlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgICAgJi55Z3Ege1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

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