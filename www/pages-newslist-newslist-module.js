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
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-03-21 22:31:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 16:49:37
 * @Description: file content
 */








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
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
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

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-06-16 01:50:44\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-15 17:21:17\r\n * @Description: file content\r\n -->\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{shopName}}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"shopId != '0'\">\r\n      <ion-button (click)=\"goTopage(7, shopId)\">\r\n        店铺\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" #content>\r\n  <div class=\"box\" *ngFor=\"let item of list\">\r\n    <div class=\"time\">{{item.time | newstime: list}}</div>\r\n    <div class=\"item\" *ngIf=\"item.isyh != 1\">\r\n      <div class=\"left\">\r\n        <img class=\"header\" [src]=\"shopHead | imgsrc: http.zdomain\" alt=\"\">\r\n      </div>\r\n      <div class=\"right\">\r\n        <div class=\"name\">{{item.tname || item.shopName}}</div>\r\n        <div class=\"content\" *ngIf=\"item.type === 1\">\r\n          {{item.content}}\r\n        </div>\r\n        <div class=\"img-content\" *ngIf=\"item.type === 2\">\r\n          <img (click)=\"scanImg(item.content)\" [src]=\"item.content | imgsrc: http.zdomain\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"me\" *ngIf=\"item.isyh == 1\">\r\n      <div class=\"left\">\r\n        <span class=\"content\" *ngIf=\"item.type === 1\">\r\n            {{item.content}}\r\n        </span>\r\n        <img class=\"img-content\" *ngIf=\"item.type === 2\" [src]=\"item.content | imgsrc: http.zdomain\" alt=\"\">\r\n      </div>\r\n      <div class=\"right\">\r\n        <img (click)=\"scanImg(item.content)\" [src]=\"userhead | imgsrc: http.zdomain\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-backdrop *ngIf=\"isshowDrop\" (ionBackdropTap)=\"clickdrop()\"></ion-backdrop>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"ion-no-padding\">\r\n    <div class=\"footer-news-box\">\r\n      <div class=\"left\" (click)=\"choiceImg()\">\r\n        <img src=\"../../../assets/imgk.svg\" alt=\"\">\r\n      </div>\r\n      <div class=\"right\">\r\n        <app-chatinputbox (sub)=\"sendMsg($event)\" (myfous)=\"monfous()\" (mybulr)=\"monblur()\"></app-chatinputbox>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/newslist/newslist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/newslist/newslist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box .time {\n  text-align: center;\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium); }\n\n.box .item {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-top: 20px; }\n\n.box .item .left {\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    margin-right: 8px;\n    overflow: hidden; }\n\n.box .item .left img {\n      width: 35px;\n      height: 35px; }\n\n.box .item .right {\n    flex: 1;\n    max-width: calc(100% - 50px); }\n\n.box .item .right .name {\n      line-height: 30px;\n      font-size: var(--ion-sm-text);\n      color: var(--ion-color-medium);\n      max-width: 100%;\n      overflow: hidden; }\n\n.box .item .right .content {\n      display: inline-block;\n      padding: 5px 15px;\n      min-height: 30px;\n      font-size: var(--ion-title);\n      background-color: var(--ion-color-light);\n      border-bottom-left-radius: 20px;\n      border-bottom-right-radius: 20px;\n      border-top-right-radius: 20px;\n      max-width: 100%; }\n\n.box .me {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start; }\n\n.box .me .right {\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    margin-left: 8px;\n    overflow: hidden; }\n\n.box .me .right img {\n      width: 35px; }\n\n.box .me .left {\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    max-width: calc(100% - 50px);\n    margin-top: 3px; }\n\n.box .me .left .content {\n      min-height: 30px;\n      padding: 5px 15px;\n      font-size: var(--ion-title);\n      background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n      display: inline-block;\n      max-width: 100%;\n      border-bottom-left-radius: 20px;\n      border-top-left-radius: 20px;\n      border-bottom-right-radius: 20px;\n      color: #fff; }\n\n.img-content {\n  width: 100px;\n  border-radius: 5px;\n  overflow: hidden; }\n\n.img-content img {\n    width: 100%; }\n\nion-footer {\n  padding: 0;\n  color: var(--ion-color-dark); }\n\nion-footer ion-toolbar {\n    padding: 0; }\n\nion-footer ion-searchbar {\n    height: 50px; }\n\nion-footer ion-button img {\n    width: 20px; }\n\n.footer-news-box {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start; }\n\n.footer-news-box .left {\n    width: 34px;\n    padding-left: 10px; }\n\n.footer-news-box .right {\n    flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9uZXdzbGlzdC9uZXdzbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDhCQUE4QixFQUFBOztBQUpsQztFQU9JLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTs7QUFYcEI7SUFhTSxXQWRNO0lBZU4sWUFmTTtJQWtCTixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQW5CdEI7TUFxQlEsV0F0Qkk7TUF1QkosWUF2QkksRUFBQTs7QUFDWjtJQTBCTSxPQUFPO0lBQ1AsNEJBQTRCLEVBQUE7O0FBM0JsQztNQTZCUSxpQkFBaUI7TUFDakIsNkJBQTZCO01BQzdCLDhCQUE4QjtNQUM5QixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBakN4QjtNQW9DUSxxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQiwyQkFBMkI7TUFDM0Isd0NBQXdDO01BQ3hDLCtCQUErQjtNQUMvQixnQ0FBZ0M7TUFDaEMsNkJBQTZCO01BQzdCLGVBQWUsRUFBQTs7QUE1Q3ZCO0VBaURJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix1QkFBdUIsRUFBQTs7QUFyRDNCO0lBdURNLFdBeERNO0lBeUROLFlBekRNO0lBNEROLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7O0FBN0R0QjtNQStEUSxXQWhFSSxFQUFBOztBQUNaO0lBbUVNLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGVBQWUsRUFBQTs7QUF6RXJCO01BMkVRLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsMkJBQTJCO01BQzNCLDRGQUE0RjtNQUM1RixxQkFBcUI7TUFDckIsZUFBZTtNQUNmLCtCQUErQjtNQUMvQiw0QkFBNEI7TUFDNUIsZ0NBQWdDO01BQ2hDLFdBQVcsRUFBQTs7QUFLbkI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUhsQjtJQUtJLFdBQVcsRUFBQTs7QUFHZjtFQUNFLFVBQVU7RUFDViw0QkFBNEIsRUFBQTs7QUFGOUI7SUFJSSxVQUFVLEVBQUE7O0FBSmQ7SUFXSSxZQUFZLEVBQUE7O0FBWGhCO0lBZU0sV0FBVyxFQUFBOztBQUtqQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQixFQUFBOztBQUo3QjtJQU1JLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUFQdEI7SUFVSSxPQUFPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdzbGlzdC9uZXdzbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2lkdGg6IDM1cHg7XHJcbi5ib3gge1xyXG4gIC50aW1lIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIH1cclxuICAuaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgICAgaGVpZ2h0OiAkd2lkdGg7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgICAgIGhlaWdodDogJHdpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgICAgaGVpZ2h0OiAkd2lkdGg7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7O1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmltZy1jb250ZW50IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5pb24tZm9vdGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAvL3BhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAvLy0tcGFkZGluZy10b3A6IDVweDtcclxuICAgIC8vLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci1uZXdzLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var src_app_services_emojiishow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/emojiishow.service */ "./src/app/services/emojiishow.service.ts");
/* harmony import */ var src_app_services_plitemclick_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/plitemclick.service */ "./src/app/services/plitemclick.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_news_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/news-list.service */ "./src/app/services/news-list.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var src_app_services_supplierlist_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/supplierlist.service */ "./src/app/services/supplierlist.service.ts");



/*
 * @Author: wjy-mac
 * @Date: 2019-06-16 01:51:24
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-15 17:39:18
 * @Description: file content
 */











var NewslistPage = /** @class */ (function () {
    function NewslistPage(nav, activeroute, ws, emojiishow, itemclickfn, newslist, userfn, http, native, actionSheetController, photoViewer, suppliserlist, toPage) {
        this.nav = nav;
        this.activeroute = activeroute;
        this.ws = ws;
        this.emojiishow = emojiishow;
        this.itemclickfn = itemclickfn;
        this.newslist = newslist;
        this.userfn = userfn;
        this.http = http;
        this.native = native;
        this.actionSheetController = actionSheetController;
        this.photoViewer = photoViewer;
        this.suppliserlist = suppliserlist;
        this.toPage = toPage;
    }
    NewslistPage.prototype.ngOnInit = function () {
        this.ws.testOnline();
    };
    NewslistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var params = this.activeroute.snapshot.queryParams;
        this.shopId = params['id'];
        this.shopName = params['name'];
        this.kftype = params['kftype'] || 1;
        this.suppliserlist.getData(this.shopId).then(function (res) {
            _this.shopHead = res['shoplogo'];
        }).catch(function (err) { });
        this.list = this.newslist.getOnelist(this.shopId);
        this.scrollToBottom(1); // 如果已有数据，则直接滚往底部
        this.userfn.getUser().then(function (res) {
            _this.uid = res['user_id'];
            _this.userhead = res['headimg'];
            _this.username = res['user_name'];
        }).catch(function () { });
        this.newslist.Source.subscribe(function (num) {
            _this.scrollToBottom(1);
        });
        if (!this.newslist.getIsshopconetnt(this.shopId)) {
            this.getContentlist();
        }
    };
    NewslistPage.prototype.ionViewWillLeave = function () {
        console.log('即将离开');
        this.newslist.clearShopid();
        this.setListyd();
    };
    NewslistPage.prototype.getContentlist = function () {
        var _this = this;
        this.http.getDataloading(this.http.getMynewscontent, { shopId: this.shopId }).subscribe(function (res) {
            _this.newslist.setShopcontent(_this.shopId);
            console.log(res);
            _this.newslist.setShophistorynews(_this.shopId, res.data);
        }, function (err) { });
    };
    /**
     * @Author: wjy-mac
     * @description: 设置服务器聊天对象消息已读
     * @Date: 2019-11-14 23:48:15
     * @param {type}
     * @return:
     */
    NewslistPage.prototype.setListyd = function () {
        this.http.getData(this.http.setMynewsList, { shopId: this.shopId }).subscribe(function (res) {
        }, function (err) { });
    };
    NewslistPage.prototype.choiceImg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: '请选择来源',
                            buttons: [{
                                    text: '相机',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.native.getPictureByCamera().then(function (res) {
                                            _this.basezfile(res);
                                        });
                                    }
                                }, {
                                    text: '相册',
                                    handler: function () {
                                        _this.native.getPictures(length).then(function (res) {
                                            res.map(function (img) {
                                                _this.basezfile(img);
                                            });
                                        }, function (err) {
                                        });
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewslistPage.prototype.basezfile = function (base64) {
        var _this = this;
        var file = this.native.getImgbase64tofile(base64, 'news', 'file');
        this.setTargetId();
        var news = this.addNews(base64);
        this.newslist.setList(this.shopId, Object.assign({}, news));
        news.wd = -1;
        this.imgupload(file).then(function (res) {
            news.content = res;
            _this.ws.sendMessage(news, 'usersend');
        }).catch(function (err3) {
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 上传图片方法
     * @Date: 2019-11-05 17:12:29
     * @param {type} file 图片对象
     * @return:
     */
    NewslistPage.prototype.imgupload = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var oReq = new XMLHttpRequest();
            oReq.open('POST', _this.http.domain + _this.http.updateimg);
            oReq.onreadystatechange = function (oEvent) {
                if (oReq.readyState == 4 && oReq.status == 200) {
                    var res = JSON.parse(oReq.response);
                    resolve(res.result);
                }
            };
            oReq.onerror = function (err) {
                reject(err);
            };
            oReq.send(file);
        });
    };
    NewslistPage.prototype.sendMsg = function (msg) {
        this.setTargetId();
        var news = this.addNews(msg);
        this.newslist.setList(this.shopId, Object.assign({}, news));
        news.wd = -1;
        this.ws.sendMessage(news, 'usersend');
    };
    NewslistPage.prototype.setTargetId = function () {
        if (!this.targetId && this.list.length > 0) { // 获取最近一次是和哪个客服聊天
            for (var index = this.list.length - 1; index >= 0; index--) {
                var element = this.list[index];
                if (element.uid != this.uid) {
                    if (element.kftype == this.kftype || Number(element.kftype) === 0) {
                        this.targetId = element.uid;
                        this.tname = element.tname;
                    }
                    break;
                }
            }
        }
    };
    NewslistPage.prototype.addNews = function (msg, type) {
        if (type === void 0) { type = 1; }
        var obj = {
            uid: this.uid,
            uname: this.username,
            tid: this.targetId || -1,
            content: decodeURIComponent(msg),
            time: Date.parse(new Date()),
            type: type,
            tname: this.tname || this.shopName,
            uheader: this.userhead,
            theader: this.shopHead,
            shopId: this.shopId,
            shopName: this.shopName,
            wd: 1,
            kftype: this.kftype,
            isyh: 1
        };
        return obj;
    };
    /**
     * @Author: wjy-mac
     * @description: 获取焦点时设置灰色背景显示 阻止滑动
     * @Date: 2019-11-07 15:24:31
     * @param {type}
     * @return:
     */
    NewslistPage.prototype.monfous = function () {
        this.isshowDrop = true;
    };
    /**
     * @Author: wjy-mac
     * @description: 当失去焦点时
     * @Date: 2019-11-07 15:24:54
     * @param {type}
     * @return:
     */
    NewslistPage.prototype.monblur = function () {
        if (!this.emojiishow.getIsshows()) {
            this.blurClear();
        }
    };
    NewslistPage.prototype.blurClear = function (type) {
        if (type) {
            this.emojiishow.setIsshow(2);
        }
        this.isshowDrop = false;
    };
    /**
     * @Author: wjy-mac
     * @description: 点击灰色背景触发
     * @Date: 2019-11-07 15:25:21
     * @param {type}
     * @return:
     */
    NewslistPage.prototype.clickdrop = function () {
        this.blurClear(1);
        this.itemclickfn.Source.emit(2);
    };
    NewslistPage.prototype.goBack = function () {
        this.nav.back();
    };
    /**
     * @Author: wjy-mac
     * @description: 全屏查看图片
     * @Date: 2019-11-13 10:28:27
     * @param {type}
     * @return:
     */
    NewslistPage.prototype.scanImg = function (src) {
        if (src.includes('http') || src.includes('www')) {
            this.photoViewer.show(src);
        }
        else {
            this.photoViewer.show(this.http.domain + src);
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 滚动到底部 使用延时是为了防抖
     * @Date: 2019-11-12 15:35:06
     * @param {type}
     * @return:
     */
    NewslistPage.prototype.scrollToBottom = function (int) {
        var _this = this;
        console.log('开始滚动了');
        setTimeout(function () {
            _this.content.scrollToBottom(1);
        }, int);
    };
    /**
     * @Author: wjy-mac
     * @description: 页面跳转
     * @Date: 2019-11-13 10:28:39
     * @param {type}
     * @return:
     */
    NewslistPage.prototype.goTopage = function (type, id) {
        this.toPage.toPage(type, id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], NewslistPage.prototype, "content", void 0);
    NewslistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-newslist',
            template: __webpack_require__(/*! ./newslist.page.html */ "./src/app/pages/newslist/newslist.page.html"),
            styles: [__webpack_require__(/*! ./newslist.page.scss */ "./src/app/pages/newslist/newslist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"], src_app_services_emojiishow_service__WEBPACK_IMPORTED_MODULE_7__["EmojiishowService"], src_app_services_plitemclick_service__WEBPACK_IMPORTED_MODULE_8__["PlitemclickService"],
            _services_news_list_service__WEBPACK_IMPORTED_MODULE_11__["NewsListService"], _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
            src_app_services_native_service__WEBPACK_IMPORTED_MODULE_2__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__["PhotoViewer"], src_app_services_supplierlist_service__WEBPACK_IMPORTED_MODULE_13__["SupplierlistService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_1__["TopageService"]])
    ], NewslistPage);
    return NewslistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-newslist-newslist-module.js.map