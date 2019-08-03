(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newslist-newslist-module"],{

/***/ "./src/app/pages/newslist/newslist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/newslist/newslist.module.ts ***!
  \***************************************************/
/*! exports provided: NewslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewslistPageModule", function() { return NewslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newslist.page */ "./src/app/pages/newslist/newslist.page.ts");







var routes = [
    {
        path: '',
        component: _newslist_page__WEBPACK_IMPORTED_MODULE_6__["NewslistPage"]
    }
];
var NewslistPageModule = /** @class */ (function () {
    function NewslistPageModule() {
    }
    NewslistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newslist_page__WEBPACK_IMPORTED_MODULE_6__["NewslistPage"]]
        })
    ], NewslistPageModule);
    return NewslistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/newslist/newslist.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/newslist/newslist.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>四川知行逸旅行社</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div class=\"box\">\r\n    <div class=\"time\">上午 09:32</div>\r\n    <div class=\"item\">\r\n      <div class=\"left\">\r\n        <img class=\"header\" src=\"./assets/icon/favicon.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"right\">\r\n        <div class=\"name\">凌妹子</div>\r\n        <div class=\"content\">\r\n          您好，请问需要什么帮助啊\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"me\">\r\n      <div class=\"left\">\r\n        <span class=\"content\">\r\n          这次去苏梅岛你们\r\n        </span>\r\n      </div>\r\n      <div class=\"right\">\r\n        <img src=\"./assets/icon/favicon.png\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-searchbar searchIcon=\"create\" mode=\"ios\" placeholder=\"请输入消息\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\" mode=\"ios\">\r\n      <ion-button color=\"dark\" (click)=\"close()\">\r\n        <img class=\"happyface\" src=\"./assets/hanpyface.svg\" alt=\"\">\r\n      </ion-button>\r\n      <ion-button color=\"dark\" (click)=\"close()\">\r\n        <img src=\"./assets/imgk.svg\" alt=\"\">\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/newslist/newslist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/newslist/newslist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box .time {\n  text-align: center;\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium); }\n\n.box .item {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-top: 20px; }\n\n.box .item .left {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 8px;\n    overflow: hidden; }\n\n.box .item .left img {\n      width: 30px; }\n\n.box .item .right {\n    flex: 1; }\n\n.box .item .right .name {\n      line-height: 30px;\n      font-size: var(--ion-sm-text);\n      color: var(--ion-color-medium); }\n\n.box .item .right .content {\n      display: inline-block;\n      padding: 5px 15px;\n      min-height: 30px;\n      font-size: var(--ion-title);\n      background-color: var(--ion-color-light);\n      border-bottom-left-radius: 20px;\n      border-bottom-right-radius: 20px;\n      border-top-right-radius: 20px; }\n\n.box .me {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start; }\n\n.box .me .right {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-left: 8px;\n    overflow: hidden; }\n\n.box .me .right img {\n      width: 30px; }\n\n.box .me .left {\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end; }\n\n.box .me .left .content {\n      min-height: 30px;\n      padding: 5px 15px;\n      font-size: var(--ion-title);\n      background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n      display: inline-block;\n      border-bottom-left-radius: 20px;\n      border-top-left-radius: 20px;\n      border-bottom-right-radius: 20px;\n      color: #fff; }\n\nion-footer {\n  padding: 0;\n  color: var(--ion-color-dark); }\n\nion-footer ion-toolbar {\n    padding: 0; }\n\nion-footer ion-searchbar {\n    height: 50px; }\n\nion-footer ion-button img {\n    width: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9uZXdzbGlzdC9uZXdzbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDhCQUE4QixFQUFBOztBQUpsQztFQU9JLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTs7QUFYcEI7SUFhTSxXQUFXO0lBQ1gsWUFBWTtJQUdaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBbkJ0QjtNQXFCUSxXQUFXLEVBQUE7O0FBckJuQjtJQXlCTSxPQUFPLEVBQUE7O0FBekJiO01BMkJRLGlCQUFpQjtNQUNqQiw2QkFBNkI7TUFDN0IsOEJBQThCLEVBQUE7O0FBN0J0QztNQWdDUSxxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQiwyQkFBMkI7TUFDM0Isd0NBQXdDO01BQ3hDLCtCQUErQjtNQUMvQixnQ0FBZ0M7TUFDaEMsNkJBQTZCLEVBQUE7O0FBdkNyQztFQTRDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBaEQzQjtJQWtETSxXQUFXO0lBQ1gsWUFBWTtJQUdaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7O0FBeER0QjtNQTBEUSxXQUFXLEVBQUE7O0FBMURuQjtJQThETSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBQTs7QUFqRS9CO01BbUVRLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsMkJBQTJCO01BQzNCLDRGQUE0RjtNQUM1RixxQkFBcUI7TUFDckIsK0JBQStCO01BQy9CLDRCQUE0QjtNQUM1QixnQ0FBZ0M7TUFDaEMsV0FBVyxFQUFBOztBQUtuQjtFQUNFLFVBQVU7RUFDViw0QkFBNEIsRUFBQTs7QUFGOUI7SUFJSSxVQUFVLEVBQUE7O0FBSmQ7SUFXSSxZQUFZLEVBQUE7O0FBWGhCO0lBZU0sV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3c2xpc3QvbmV3c2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgLnRpbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG4gIC5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLmxlZnQge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1lIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC8vcGFkZGluZy10b3A6IDVweDtcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIC8vLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgLy8tLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/newslist/newslist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/newslist/newslist.page.ts ***!
  \*************************************************/
/*! exports provided: NewslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewslistPage", function() { return NewslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var NewslistPage = /** @class */ (function () {
    function NewslistPage(nav) {
        this.nav = nav;
    }
    NewslistPage.prototype.ngOnInit = function () {
    };
    NewslistPage.prototype.goBack = function () {
        this.nav.back();
    };
    NewslistPage.prototype.close = function () { };
    NewslistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newslist',
            template: __webpack_require__(/*! ./newslist.page.html */ "./src/app/pages/newslist/newslist.page.html"),
            styles: [__webpack_require__(/*! ./newslist.page.scss */ "./src/app/pages/newslist/newslist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], NewslistPage);
    return NewslistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-newslist-newslist-module.js.map