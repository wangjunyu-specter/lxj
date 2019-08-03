(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-searchendgoods-searchendgoods-module"],{

/***/ "./src/app/pages/searchendgoods/searchendgoods.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/searchendgoods/searchendgoods.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchendgoodsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchendgoodsPageModule", function() { return SearchendgoodsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchendgoods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchendgoods.page */ "./src/app/pages/searchendgoods/searchendgoods.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _searchendgoods_page__WEBPACK_IMPORTED_MODULE_6__["SearchendgoodsPage"]
    }
];
var SearchendgoodsPageModule = /** @class */ (function () {
    function SearchendgoodsPageModule() {
    }
    SearchendgoodsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchendgoods_page__WEBPACK_IMPORTED_MODULE_6__["SearchendgoodsPage"]]
        })
    ], SearchendgoodsPageModule);
    return SearchendgoodsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/searchendgoods/searchendgoods.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/searchendgoods/searchendgoods.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>搜索结果</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"data\">\n    <app-productlist *ngFor=\"let item of data.goods_list\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\n  </div>\n  <h2>周边推荐</h2>\n  <div *ngIf=\"data\">\n    <app-productlist *ngFor=\"let item of data.top_goods\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"crescent\"\n       loadingText=\"加载更多...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/searchendgoods/searchendgoods.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/searchendgoods/searchendgoods.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 50px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center; }\n  .search-bar .right span {\n      display: inline-block;\n      flex: 1;\n      line-height: 18px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .right ion-icon {\n      font-size: 13px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  .top {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden; }\n  .top .banner {\n    position: relative;\n    margin-top: -106px;\n    width: 100%; }\n  .top ion-slides {\n    --bullet-background-active: #fff; }\n  .issupplier {\n  height: calc(var(--ion-platform-margin-height));\n  overflow: hidden; }\n  ion-card {\n  margin-top: 30px; }\n  ion-card ion-card-content {\n    padding: 0; }\n  ion-card ion-card-content .card-title {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      line-height: 30px;\n      font-size: var(--ion-text);\n      color: var(--ion-color-danger);\n      background-color: #F5F2DE;\n      padding-left: 15px; }\n  ion-card ion-card-content .card-title img {\n        width: 12px;\n        margin-right: 5px; }\n  ion-card ion-row ion-col {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px solid var(--ion-color-light); }\n  ion-card ion-row ion-col:last-of-type {\n      border-right: none; }\n  ion-card ion-row ion-col .title {\n      color: var(--ion-color-dark);\n      font-size: var(--ion-title); }\n  ion-card ion-row ion-col span {\n      font-size: var(--ion-sm-text); }\n  ion-card ion-row:first-of-type {\n    border-bottom: 1px solid var(--ion-color-light); }\n  ion-card ion-row:first-of-type ion-col span {\n      margin-bottom: 5px; }\n  ion-card ion-row:last-of-type ion-col .title {\n    margin-top: 5px; }\n  ion-card {\n  padding-bottom: 0;\n  margin-bottom: 0; }\n  .list-content {\n  padding-top: 0; }\n  .tjnav ion-grid {\n  padding-top: 0; }\n  .listnav2 {\n  background-color: #fff;\n  z-index: 100;\n  width: 100%;\n  left: 0;\n  position: fixed;\n  top: var(--ion-platform-margin-height);\n  border-bottom: 1px solid var(--ion-color-light); }\n  .listnav2 .title {\n    border-bottom: 1px solid var(--ion-color-light); }\n  .listnav {\n  min-height: 37px; }\n  .listnav.isabsolute {\n    position: relative; }\n  .line {\n  height: 1px;\n  background-color: var(--ion-color-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zZWFyY2hlbmRnb29kcy9zZWFyY2hlbmRnb29kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWUsRUFBQTtFQU5qQjtJQVFJLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFidkI7TUFlTSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFoQnRCO0lBb0JJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7RUF6QnZCO01BMkJNLHFCQUFxQjtNQUNyQixPQUFPO01BQ1AsaUJBQWlCLEVBQUE7RUE3QnZCO01BZ0NNLFdBQVcsRUFBQTtFQWhDakI7TUFtQ00sZUFBZSxFQUFBO0VBbkNyQjtJQXVDSSxvQkFBb0I7SUFDcEIsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBR3RCLHFCQUFxQjtJQUdyQixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7RUFsRHRCO01Bb0RNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsMEJBQTBCO01BQzFCLGlCQUFpQixFQUFBO0VBMUR2QjtRQTREUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBTTFCO0VBRUUsMENBQTBDO0VBQzFDLGdCQUFnQixFQUFBO0VBSGxCO0lBS0ksa0JBQWtCO0lBRWxCLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFSZjtJQVdJLGdDQUEyQixFQUFBO0VBTy9CO0VBQ0UsK0NBQStDO0VBRS9DLGdCQUFnQixFQUFBO0VBRWxCO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFHSSxVQUFVLEVBQUE7RUFIZDtNQUtNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsMEJBQTBCO01BQzFCLDhCQUE4QjtNQUM5Qix5QkFBeUI7TUFDekIsa0JBQWtCLEVBQUE7RUFieEI7UUFlUSxXQUFXO1FBQ1gsaUJBQWlCLEVBQUE7RUFoQnpCO0lBc0JNLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4Q0FBOEMsRUFBQTtFQTFCcEQ7TUE0QlEsa0JBQWtCLEVBQUE7RUE1QjFCO01BK0JRLDRCQUE0QjtNQUM1QiwyQkFBMkIsRUFBQTtFQWhDbkM7TUFtQ1EsNkJBQTZCLEVBQUE7RUFuQ3JDO0lBdUNNLCtDQUErQyxFQUFBO0VBdkNyRDtNQTBDVSxrQkFBa0IsRUFBQTtFQTFDNUI7SUFpRFUsZUFBZSxFQUFBO0VBTXpCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBRWxCO0VBQ0UsY0FBYyxFQUFBO0VBRWhCO0VBRUksY0FBYyxFQUFBO0VBYWxCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBRVgsT0FBTztFQUNQLGVBQWU7RUFDZixzQ0FBc0M7RUFFdEMsK0NBQStDLEVBQUE7RUFUakQ7SUFXSSwrQ0FBK0MsRUFBQTtFQUluRDtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBR0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2hlbmRnb29kcy9zZWFyY2hlbmRnb29kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiB2YXIoLS1pb24tc3RhdHVzYmFyLWxlZnQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24taWNvbi1iaWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvcCB7XHJcbiAgLy9tYXJnaW4tdG9wOiAtNDRweDtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAuYmFubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vdG9wOiAtNjhweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMDZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmO1xyXG4gIH1cclxufVxyXG4vLy5oYXN0b3Age1xyXG4vLyAgbWFyZ2luLXRvcDogMzBweDtcclxuLy99XHJcblxyXG4uaXNzdXBwbGllciB7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4taGVpZ2h0KSk7XHJcbiAgLy90cmFuc2xhdGVZKGNhbGMoMTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwcHgpKSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUYyREU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tcm93IHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5saXN0LWNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi50am5hdiB7XHJcbiAgaW9uLWdyaWQge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIC8vaW9uLWNvbCB7XHJcbiAgLy8gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAgaW1nIHtcclxuICAvLyAgICB3aWR0aDogMzBweDtcclxuICAvLyAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICAgdG9wOiAwO1xyXG4gIC8vICAgIHJpZ2h0OiAwO1xyXG4gIC8vICB9XHJcbiAgLy99XHJcbn1cclxuXHJcbi5saXN0bmF2MiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy93aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLWhlaWdodCk7XHJcbiAgLy9sZWZ0OiBjYWxjKDIwcHggLSA0cHgpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIC50aXRsZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgfVxyXG59XHJcbi5saXN0bmF2IHtcclxuICBtaW4taGVpZ2h0OiAzN3B4O1xyXG4gICYuaXNhYnNvbHV0ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcbi5saW5lIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/searchendgoods/searchendgoods.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/searchendgoods/searchendgoods.page.ts ***!
  \*************************************************************/
/*! exports provided: SearchendgoodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchendgoodsPage", function() { return SearchendgoodsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_searchendgoods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/searchendgoods.service */ "./src/app/services/searchendgoods.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");






var SearchendgoodsPage = /** @class */ (function () {
    function SearchendgoodsPage(activeroute, nav, serchdata, http) {
        this.activeroute = activeroute;
        this.nav = nav;
        this.serchdata = serchdata;
        this.http = http;
    }
    SearchendgoodsPage.prototype.ngOnInit = function () {
        this.data = this.serchdata.getObj();
        this.serachhttpData = this.serchdata.getSearchdata();
        console.log(this.data);
    };
    SearchendgoodsPage.prototype.ionViewWillEnter = function () {
        if (!this.data) {
            this.goBack();
        }
        this.keyword = this.data['search_keywords'];
        this.page = 1;
    };
    SearchendgoodsPage.prototype.goBack = function () {
        this.nav.back();
    };
    SearchendgoodsPage.prototype.doRefresh = function (event) {
        this.page = 1;
        this.infiniteScroll.disabled = false;
        this.getHttp(event, 1);
    };
    SearchendgoodsPage.prototype.loadData = function (event) {
        this.page++;
        this.getHttp(event, 2);
    };
    SearchendgoodsPage.prototype.getHttp = function (event, type) {
        var _this = this;
        this.serachhttpData['page'] = this.page;
        this.http.postformdata(this.http.goodsSearch, this.serachhttpData).subscribe(function (res) {
            var _a;
            if (event) {
                event.target.complete();
            }
            if (_this.page === 1) {
                _this.data['goods_list'] = res.data.goods_list;
            }
            else {
                (_a = _this.data['goods_list']).push.apply(_a, res.data.goods_list);
            }
            if (type && type === 2 && (!res.data.goods_list || res.data.goods_list.length === 0 || res.data.goods_list.length < _this.serachhttpData['count'])) {
                _this.infiniteScroll.disabled = true;
            }
        }, function (err2) {
            if (event) {
                event.target.complete();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], SearchendgoodsPage.prototype, "infiniteScroll", void 0);
    SearchendgoodsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchendgoods',
            template: __webpack_require__(/*! ./searchendgoods.page.html */ "./src/app/pages/searchendgoods/searchendgoods.page.html"),
            styles: [__webpack_require__(/*! ./searchendgoods.page.scss */ "./src/app/pages/searchendgoods/searchendgoods.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_searchendgoods_service__WEBPACK_IMPORTED_MODULE_4__["SearchendgoodsService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], SearchendgoodsPage);
    return SearchendgoodsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-searchendgoods-searchendgoods-module.js.map