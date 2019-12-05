(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sj-index-sj-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sj-index/sj-index.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sj-index/sj-index.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-08-03 14:52:31\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-13 14:31:39\r\n * @Description: file content\r\n -->\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--<img src=\"./assets/sjtop.png\" alt=\"\">-->\r\n    <app-sj-top (close)=\"goBack()\" (topage)=\"toPage()\"\r\n                [active]=\"isactive\" [supplier]=\"supplier\"\r\n                (toggle)=\"setNav($event)\" (setGz)=\"setGz()\" (tosearch)=\"toSearch()\"></app-sj-top>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"isindex\" *ngIf=\"isactive == 1\">\r\n    <ion-slides pager=\"true\" *ngIf=\"supplier\">\r\n      <ion-slide *ngFor=\"let item of supplier.banner\" (click)=\"open(item.url)\">\r\n        <img class=\"dplogo\" [src]=\"http.zdomain + item.src\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <div class=\"content\" padding *ngIf=\"supplier\">\r\n      <app-productlist  *ngFor=\"let item of supplier.best_goods\" [type]=\"1\" [data]=\"item\" (open)=\"goodsContent($event)\"></app-productlist>\r\n      <div>\r\n        <app-pagetitle [myname]=\"'精品推荐'\"></app-pagetitle>\r\n        <app-productlist *ngFor=\"let item of tjlist1\" [data]=\"item\" (open)=\"goodsContent($event)\"></app-productlist>\r\n      </div>\r\n      <div>\r\n        <app-pagetitle [myname]=\"'热销推荐'\"></app-pagetitle>\r\n        <app-productlist *ngFor=\"let item of tjlist2\" [data]=\"item\" (open)=\"goodsContent($event)\"></app-productlist>\r\n      </div>\r\n      <div>\r\n        <app-pagetitle [myname]=\"'新品推荐'\"></app-pagetitle>\r\n        <app-productlist *ngFor=\"let item of tjlist3\" [data]=\"item\" (open)=\"goodsContent($event)\"></app-productlist>\r\n      </div>\r\n      <div *ngFor=\"let item of tjlist\">\r\n        <app-pagetitle [myname]=\"item['cat_name']\"></app-pagetitle>\r\n        <app-productlist  *ngFor=\"let item of item['goods']\" [data]=\"item\" (open)=\"goodsContent($event)\"></app-productlist>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"isindex\" *ngIf=\"isactive == 2\">\r\n    <div class=\"content\" padding>\r\n      <!-- <ion-grid>\r\n        <ion-row>\r\n          <ion-col [ngClass]=\"{active: isnavactive == 1}\" (click)=\"selectepx(1)\">综合</ion-col>\r\n          <ion-col [ngClass]=\"{active: isnavactive == 2}\" (click)=\"selectepx(2)\">销量</ion-col>\r\n          <ion-col [ngClass]=\"{active: isnavactive == 3}\" (click)=\"selectepx(3)\">价格</ion-col>\r\n          <ion-col [ngClass]=\"{active: isnavactive == 4}\" (click)=\"selectepx(4)\">新品</ion-col>\r\n        </ion-row>\r\n      </ion-grid> -->\r\n      <app-productlist *ngFor=\"let item of all\" [data]=\"item\" (open)=\"goodsContent($event)\"></app-productlist>\r\n    </div>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\" [disabled]=\"isactive != 2\">\r\n      <ion-infinite-scroll-content\r\n         loadingSpinner=\"crescent\"\r\n         loadingText=\"加载更多...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-row>\r\n      <ion-col class=\"border\">\r\n        <ion-button *ngIf=\"supplier\" [routerLink]=\"['/sj-productnav', supplier.suppid]\" expand=\"full\">商品分类</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" (click)=\"toOtherpage(17, supplier.suppid, supplier.shopname, 1)\">\r\n          <ion-icon name=\"happy\" color=\"primary\"></ion-icon>\r\n          联系客服\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/sj-index/sj-index.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sj-index/sj-index.module.ts ***!
  \***************************************************/
/*! exports provided: SjIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjIndexPageModule", function() { return SjIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sj_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sj-index.page */ "./src/app/pages/sj-index/sj-index.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _sj_index_page__WEBPACK_IMPORTED_MODULE_6__["SjIndexPage"]
    }
];
var SjIndexPageModule = /** @class */ (function () {
    function SjIndexPageModule() {
    }
    SjIndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sj_index_page__WEBPACK_IMPORTED_MODULE_6__["SjIndexPage"]]
        })
    ], SjIndexPageModule);
    return SjIndexPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sj-index/sj-index.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/sj-index/sj-index.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: url('sjtop.png');\n  background-size: 100% 100%;\n  position: relative;\n}\nion-header ion-toolbar app-sj-top {\n  position: relative;\n  z-index: 1;\n}\nion-header ion-toolbar img {\n  position: absolute;\n  width: calc(100% + var(--ion-android-padding-top));\n  top: 0;\n  left: 0;\n  z-index: 0;\n  height: 100%;\n}\nion-footer ion-toolbar {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  box-shadow: 0px 0px 5px var(--ion-color-white-shade);\n}\nion-footer ion-toolbar ion-row, ion-footer ion-toolbar ion-col, ion-footer ion-toolbar ion-button {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  padding: 0;\n}\nion-footer ion-toolbar ion-col {\n  position: relative;\n}\nion-footer ion-toolbar .border::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 60%;\n  width: 1px;\n  background-color: var(--ion-color-white-shade);\n  right: 0;\n  top: 50%;\n  margin-top: -6%;\n}\nion-footer ion-toolbar ion-button {\n  --background: var(--ion-color-white);\n  --background-activated: var(--ion-color-white-tint);\n  --background-focused: var(--ion-color-white-tint);\n  --color: var(--ion-color-white-contrast);\n  --box-shadow: var(--ion-color-white-shade);\n}\nion-grid {\n  border-bottom: 1px solid var(--ion-color-light);\n}\nion-grid ion-col {\n  text-align: center;\n  font-size: var(--ion-title);\n  color: var(--ion-color-medium);\n}\nion-grid ion-col.active {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.dplogo {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zai1pbmRleC9zai1pbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NqLWluZGV4L3NqLWluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDTjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxrREFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDTjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtBQ0RKO0FERUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQU47QURFSTtFQUNFLGtCQUFBO0FDQU47QURJTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhDQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDRlI7QURLSTtFQUNFLG9DQUFBO0VBQ0EsbURBQUE7RUFDQSxpREFBQTtFQUNBLHdDQUFBO0VBQ0EsMENBQUE7QUNITjtBRE9BO0VBQ0UsK0NBQUE7QUNKRjtBREtFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDSEo7QURJSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QUNGTjtBRE1BO0VBQ0UsV0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2otaW5kZXgvc2otaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zanRvcC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYXBwLXNqLXRvcCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIHZhcigtLWlvbi1hbmRyb2lkLXBhZGRpbmctdG9wKSk7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tZm9vdGVyIHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1pb24tY29sb3Itd2hpdGUtc2hhZGUpO1xyXG4gICAgaW9uLXJvdywgaW9uLWNvbCwgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB9XHJcbiAgICAuYm9yZGVyIHtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZS1zaGFkZSk7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTYlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUtdGludCk7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUtdGludCk7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZS1jb250cmFzdCk7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogdmFyKC0taW9uLWNvbG9yLXdoaXRlLXNoYWRlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWdyaWQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGlvbi1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZHBsb2dvIHtcclxuICB3aWR0aDogMTAwJTtcclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zanRvcC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGFwcC1zai10b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIHZhcigtLWlvbi1hbmRyb2lkLXBhZGRpbmctdG9wKSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1pb24tY29sb3Itd2hpdGUtc2hhZGUpO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tcm93LCBpb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1jb2wsIGlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciAuYm9yZGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNjAlO1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUtc2hhZGUpO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC02JTtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlLXRpbnQpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlLXRpbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUtY29udHJhc3QpO1xuICAtLWJveC1zaGFkb3c6IHZhcigtLWlvbi1jb2xvci13aGl0ZS1zaGFkZSk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tZ3JpZCBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1ncmlkIGlvbi1jb2wuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmRwbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/sj-index/sj-index.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sj-index/sj-index.page.ts ***!
  \*************************************************/
/*! exports provided: SjIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjIndexPage", function() { return SjIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/supplierlist.service */ "./src/app/services/supplierlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_sjindextjgoods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/sjindextjgoods.service */ "./src/app/services/sjindextjgoods.service.ts");
/* harmony import */ var _services_collelist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/collelist.service */ "./src/app/services/collelist.service.ts");


/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 21:02:09
 * @Description: file content
 */







var SjIndexPage = /** @class */ (function () {
    function SjIndexPage(nav, suppliserlist, activeroute, http, route, tjlistfn, collefn, topagefn) {
        this.nav = nav;
        this.suppliserlist = suppliserlist;
        this.activeroute = activeroute;
        this.http = http;
        this.route = route;
        this.tjlistfn = tjlistfn;
        this.collefn = collefn;
        this.topagefn = topagefn;
    }
    SjIndexPage.prototype.ngOnInit = function () {
        this.pageObj = {
            page: 1,
            page_size: 20
        };
        this.all = [];
        this.tjlist = [];
        this.tjlist1 = [];
        this.tjlist2 = [];
        this.tjlist3 = [];
        this.isactive = 1;
        this.isnavactive = 1;
    };
    SjIndexPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.activeroute.queryParams.subscribe(function (params) {
            var id = params['id'];
            _this.suppliserlist.getData(id).then(function (res) {
                _this.supplier = res;
                // this.tjlist.push(...this.supplier['best_goods'])
            }).catch(function (err) { });
            console.log(_this.supplier);
            _this.getIndextj(id);
        });
    };
    SjIndexPage.prototype.getIndextj = function (id) {
        var _this = this;
        this.suppId = id;
        this.tjlistfn.getData(id).then(function (res) {
            var _a, _b, _c, _d;
            console.log(res);
            (_a = _this.tjlist1).push.apply(_a, res['best_goods']);
            (_b = _this.tjlist2).push.apply(_b, res['hot_goods']);
            (_c = _this.tjlist3).push.apply(_c, res['new_goods']);
            (_d = _this.tjlist).push.apply(_d, res['tjgoods']);
        }).catch(function (err) { });
    };
    SjIndexPage.prototype.goBack = function () {
        this.nav.back();
        // this.nav.navigateBack('/productcontent');
    };
    SjIndexPage.prototype.setNav = function ($event) {
        this.isactive = $event;
        if ($event == 2 && this.all.length === 0) {
            this.getAll();
        }
    };
    SjIndexPage.prototype.loadData = function (event) {
        this.pageObj['page']++;
        this.getAll(event);
    };
    SjIndexPage.prototype.getAll = function (event) {
        var _this = this;
        var obj = Object.assign({ suppId: this.suppId }, this.pageObj);
        this.http.getDataloading(this.http.getsjsearchgoods, obj).subscribe(function (res) {
            var _a;
            console.log(res);
            if (res.data && res.data.length > 0) {
                (_a = _this.all).push.apply(_a, res['data']);
            }
            if (!res['data'] || res['data'].length < _this.pageObj['page_size']) {
                _this.infiniteScroll.disabled = true;
            }
            if (event) {
                event.target.complete();
            }
        }, function (err2) {
            if (event) {
                event.target.complete();
            }
        });
    };
    SjIndexPage.prototype.selectepx = function (type) {
        this.isnavactive = type;
    };
    SjIndexPage.prototype.toOtherpage = function (type, id) {
        var _a;
        var tid = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            tid[_i - 2] = arguments[_i];
        }
        (_a = this.topagefn).toPage.apply(_a, [type, id].concat(tid));
    };
    SjIndexPage.prototype.toPage = function () {
        this.nav.navigateForward('/sjdpyx');
    };
    SjIndexPage.prototype.toSearch = function () {
        this.nav.navigateForward('/sjsearch', { queryParams: { suppid: this.suppId } });
    };
    SjIndexPage.prototype.setGz = function () {
        var _this = this;
        console.log(this.supplier);
        this.suppliserlist.setData(this.supplier['suppid'], 'is_guanzhu', true);
        this.http.getData(this.http.scshop, { suppId: this.supplier['suppid'] }).subscribe(function (res) {
            _this.collefn.reset();
        }, function (error2) {
            _this.collefn.reset();
        });
    };
    SjIndexPage.prototype.goodsContent = function ($event) {
        console.log($event);
        this.open($event.goods_id || $event.id);
    };
    SjIndexPage.prototype.open = function (id) {
        if (isNaN(Number(id))) {
            return false;
        }
        this.route.navigate(['/productcontent'], { queryParams: { id: id, suppid: this.supplier.suppid } });
    };
    SjIndexPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_4__["SupplierlistService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_sjindextjgoods_service__WEBPACK_IMPORTED_MODULE_7__["SjindextjgoodsService"] },
        { type: _services_collelist_service__WEBPACK_IMPORTED_MODULE_8__["CollelistService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_1__["TopageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], SjIndexPage.prototype, "infiniteScroll", void 0);
    SjIndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sj-index',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sj-index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sj-index/sj-index.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sj-index.page.scss */ "./src/app/pages/sj-index/sj-index.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_4__["SupplierlistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_sjindextjgoods_service__WEBPACK_IMPORTED_MODULE_7__["SjindextjgoodsService"], _services_collelist_service__WEBPACK_IMPORTED_MODULE_8__["CollelistService"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_1__["TopageService"]])
    ], SjIndexPage);
    return SjIndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sj-index-sj-index-module.js.map