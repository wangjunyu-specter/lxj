(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-articlecontent-articlecontent-module"],{

/***/ "./src/app/pages/articlecontent/articlecontent.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/articlecontent/articlecontent.module.ts ***!
  \***************************************************************/
/*! exports provided: ArticlecontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlecontentPageModule", function() { return ArticlecontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _articlecontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articlecontent.page */ "./src/app/pages/articlecontent/articlecontent.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _articlecontent_page__WEBPACK_IMPORTED_MODULE_6__["ArticlecontentPage"]
    }
];
var ArticlecontentPageModule = /** @class */ (function () {
    function ArticlecontentPageModule() {
    }
    ArticlecontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_articlecontent_page__WEBPACK_IMPORTED_MODULE_6__["ArticlecontentPage"]]
        })
    ], ArticlecontentPageModule);
    return ArticlecontentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/articlecontent/articlecontent.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/articlecontent/articlecontent.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [translucent]=\"true\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\n    <div class=\"search-bar\">\n      <div class=\"left\" (click)=\"goBack()\">\n        <img src=\"/assets/backbg.svg\" alt=\"\">\n      </div>\n      <div class=\"center\">\n      </div>\n      <div class=\"right\">\n        <!--<img src=\"/assets/wechatbg.svg\" alt=\"\">-->\n        <div class=\"round\"><ion-icon name=\"share\"></ion-icon></div>\n        <!--<div class=\"round\" (click)=\"toprightmore($event)\"><ion-icon name=\"more\" mode=\"ios\"></ion-icon></div>-->\n        <!--<img src=\"/assets/czbg.svg\" alt=\"\">-->\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <img class=\"banner\" *ngIf=\"data\" [src]=\"http.zdomain + data.img\" alt=\"\">\n  <div class=\"my-content\" padding>\n    <h2>{{data.title}}</h2>\n    <p *ngIf=\"data.goods && data.goods.length > 0\">{{data.goods.length}}款好货，{{data.author}}选择</p>\n    <!--<div class=\"des\">{{data.des}}</div>-->\n    <div *ngIf=\"data.content\" [innerHTML]=\"assembleHTML(data.content)\"></div>\n  </div>\n  <div class=\"jptj\" padding><span>精品推荐</span></div>\n  <div padding>\n    <app-productlist *ngFor=\"let item of data.goods\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/articlecontent/articlecontent.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/articlecontent/articlecontent.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show-0 {\n  --opacity: 0; }\n\n.show-1 {\n  --opacity: 0.01; }\n\n.show-2 {\n  --opacity: 0.02; }\n\n.show-3 {\n  --opacity: 0.03; }\n\n.show-4 {\n  --opacity: 0.04; }\n\n.show-5 {\n  --opacity: 0.05; }\n\n.show-6 {\n  --opacity: 0.06; }\n\n.show-7 {\n  --opacity: 0.07; }\n\n.show-8 {\n  --opacity: 0.08; }\n\n.show-9 {\n  --opacity: 0.09; }\n\n.show-10 {\n  --opacity: 0.1; }\n\n.show-11 {\n  --opacity: 0.11; }\n\n.show-12 {\n  --opacity: 0.12; }\n\n.show-13 {\n  --opacity: 0.13; }\n\n.show-14 {\n  --opacity: 0.14; }\n\n.show-15 {\n  --opacity: 0.15; }\n\n.show-16 {\n  --opacity: 0.16; }\n\n.show-17 {\n  --opacity: 0.17; }\n\n.show-18 {\n  --opacity: 0.18; }\n\n.show-19 {\n  --opacity: 0.19; }\n\n.show-20 {\n  --opacity: 0.2; }\n\n.show-21 {\n  --opacity: 0.21; }\n\n.show-22 {\n  --opacity: 0.22; }\n\n.show-23 {\n  --opacity: 0.23; }\n\n.show-24 {\n  --opacity: 0.24; }\n\n.show-25 {\n  --opacity: 0.25; }\n\n.show-26 {\n  --opacity: 0.26; }\n\n.show-27 {\n  --opacity: 0.27; }\n\n.show-28 {\n  --opacity: 0.28; }\n\n.show-29 {\n  --opacity: 0.29; }\n\n.show-30 {\n  --opacity: 0.3; }\n\n.show-31 {\n  --opacity: 0.31; }\n\n.show-32 {\n  --opacity: 0.32; }\n\n.show-33 {\n  --opacity: 0.33; }\n\n.show-34 {\n  --opacity: 0.34; }\n\n.show-35 {\n  --opacity: 0.35; }\n\n.show-36 {\n  --opacity: 0.36; }\n\n.show-37 {\n  --opacity: 0.37; }\n\n.show-38 {\n  --opacity: 0.38; }\n\n.show-39 {\n  --opacity: 0.39; }\n\n.show-40 {\n  --opacity: 0.4; }\n\n.show-41 {\n  --opacity: 0.41; }\n\n.show-42 {\n  --opacity: 0.42; }\n\n.show-43 {\n  --opacity: 0.43; }\n\n.show-44 {\n  --opacity: 0.44; }\n\n.show-45 {\n  --opacity: 0.45; }\n\n.show-46 {\n  --opacity: 0.46; }\n\n.show-47 {\n  --opacity: 0.47; }\n\n.show-48 {\n  --opacity: 0.48; }\n\n.show-49 {\n  --opacity: 0.49; }\n\n.show-50 {\n  --opacity: 0.5; }\n\n.show-51 {\n  --opacity: 0.51; }\n\n.show-52 {\n  --opacity: 0.52; }\n\n.show-53 {\n  --opacity: 0.53; }\n\n.show-54 {\n  --opacity: 0.54; }\n\n.show-55 {\n  --opacity: 0.55; }\n\n.show-56 {\n  --opacity: 0.56; }\n\n.show-57 {\n  --opacity: 0.57; }\n\n.show-58 {\n  --opacity: 0.58; }\n\n.show-59 {\n  --opacity: 0.59; }\n\n.show-60 {\n  --opacity: 0.6; }\n\n.show-61 {\n  --opacity: 0.61; }\n\n.show-62 {\n  --opacity: 0.62; }\n\n.show-63 {\n  --opacity: 0.63; }\n\n.show-64 {\n  --opacity: 0.64; }\n\n.show-65 {\n  --opacity: 0.65; }\n\n.show-66 {\n  --opacity: 0.66; }\n\n.show-67 {\n  --opacity: 0.67; }\n\n.show-68 {\n  --opacity: 0.68; }\n\n.show-69 {\n  --opacity: 0.69; }\n\n.show-70 {\n  --opacity: 0.7; }\n\n.show-71 {\n  --opacity: 0.71; }\n\n.show-72 {\n  --opacity: 0.72; }\n\n.show-73 {\n  --opacity: 0.73; }\n\n.show-74 {\n  --opacity: 0.74; }\n\n.show-75 {\n  --opacity: 0.75; }\n\n.show-76 {\n  --opacity: 0.76; }\n\n.show-77 {\n  --opacity: 0.77; }\n\n.show-78 {\n  --opacity: 0.78; }\n\n.show-79 {\n  --opacity: 0.79; }\n\n.show-80 {\n  --opacity: 0.8; }\n\n.show-81 {\n  --opacity: 0.81; }\n\n.show-82 {\n  --opacity: 0.82; }\n\n.show-83 {\n  --opacity: 0.83; }\n\n.show-84 {\n  --opacity: 0.84; }\n\n.show-85 {\n  --opacity: 0.85; }\n\n.show-86 {\n  --opacity: 0.86; }\n\n.show-87 {\n  --opacity: 0.87; }\n\n.show-88 {\n  --opacity: 0.88; }\n\n.show-89 {\n  --opacity: 0.89; }\n\n.show-90 {\n  --opacity: 0.9; }\n\n.show-91 {\n  --opacity: 0.91; }\n\n.show-92 {\n  --opacity: 0.92; }\n\n.show-93 {\n  --opacity: 0.93; }\n\n.show-94 {\n  --opacity: 0.94; }\n\n.show-95 {\n  --opacity: 0.95; }\n\n.show-96 {\n  --opacity: 0.96; }\n\n.show-97 {\n  --opacity: 0.97; }\n\n.show-98 {\n  --opacity: 0.98; }\n\n.show-99 {\n  --opacity: 0.99; }\n\n.show-100 {\n  --opacity: 1; }\n\nion-toolbar {\n  --background: #fff; }\n\nion-content .banner {\n  width: 100%;\n  margin-top: var(--ion-platform-margin-top); }\n\nion-content .jptj {\n  font-size: var(--ion-title);\n  border-bottom: 1px solid var(--ion-color-light);\n  box-shadow: 0 3px 8px #f2f2f2;\n  font-weight: 600; }\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n  height: 36px; }\n\n.search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n\n.search-bar .left img {\n      width: 22px;\n      margin-left: 5px; }\n\n.search-bar .right {\n    width: 52px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n\n.search-bar .right div.round {\n      background-color: rgba(0, 0, 0, 0.6);\n      width: 21px;\n      height: 21px;\n      border-radius: 50%;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center; }\n\n.search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9hcnRpY2xlY29udGVudC9hcnRpY2xlY29udGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBZ0IsWUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixjQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGNBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixjQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGNBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixjQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGNBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixlQUFVLEVBQUE7O0FBQTFCO0VBQWdCLGVBQVUsRUFBQTs7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBOztBQUExQjtFQUFnQixZQUFVLEVBQUE7O0FBRTVCO0VBQ0Usa0JBQWEsRUFBQTs7QUFFZjtFQUdJLFdBQVc7RUFDWCwwQ0FBMEMsRUFBQTs7QUFKOUM7RUFPSSwyQkFBMkI7RUFDM0IsK0NBQStDO0VBRy9DLDZCQUE2QjtFQUM3QixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBUGQ7SUFTSSxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBOztBQWR2QjtNQWdCTSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7O0FBakJ0QjtJQXFCSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTs7QUF4QmxDO01BMEJNLG9DQUFnQztNQUNoQyxXQUFXO01BQ1gsWUFBWTtNQUdaLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixtQkFBbUIsRUFBQTs7QUFuQ3pCO0lBNENJLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsY0FBYztJQUNkLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGljbGVjb250ZW50L2FydGljbGVjb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAwIHtcclxuICAuc2hvdy0jeyRpfSB7ICAgLS1vcGFjaXR5OiAjeyRpIC8gMTAwfTsgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC8vLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAuYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xyXG4gIH1cclxuICAuanB0aiB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggOHB4ICNmMmYyZjI7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDhweCAjZjJmMmYyO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4ICNmMmYyZjI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG4uc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogdmFyKC0taW9uLXN0YXR1c2Jhci1sZWZ0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWljb24tYmlnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGRpdi5yb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgICB3aWR0aDogMjFweDtcclxuICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAvL2ltZyB7XHJcbiAgICAvLyAgd2lkdGg6IDIycHg7XHJcbiAgICAvLyAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgLy8gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAvL31cclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/articlecontent/articlecontent.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/articlecontent/articlecontent.page.ts ***!
  \*************************************************************/
/*! exports provided: ArticlecontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlecontentPage", function() { return ArticlecontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_articelist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/articelist.service */ "./src/app/services/articelist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");








var ArticlecontentPage = /** @class */ (function () {
    function ArticlecontentPage(nav, articlelist, activeroute, http, sanitizer, topage) {
        this.nav = nav;
        this.articlelist = articlelist;
        this.activeroute = activeroute;
        this.http = http;
        this.sanitizer = sanitizer;
        this.topage = topage;
    }
    ArticlecontentPage.prototype.ionViewDidEnter = function () {
        console.log('加载完了');
        this.getContent();
    };
    ArticlecontentPage.prototype.ngOnInit = function () {
        this.data = {};
        this.toolbaropacity = '0';
        var params = this.activeroute.snapshot.queryParams;
        this.aid = params['id'];
    };
    ArticlecontentPage.prototype.getContent = function () {
        var _this = this;
        this.articlelist.getContent(this.aid).then(function (res) {
            console.log(res);
            _this.data = res;
        });
    };
    ArticlecontentPage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    ArticlecontentPage.prototype.logScrolling = function ($event) {
        var top = $event.detail.scrollTop;
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
        }
        else {
            num = 1;
        }
        this.setNavstatus(num);
    };
    ArticlecontentPage.prototype.setNavstatus = function (num) {
        this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();
    };
    ArticlecontentPage.prototype.goBack = function () {
        this.nav.back();
    };
    ArticlecontentPage.prototype.openpage = function ($event) {
        // this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id, suppid: $event.supplier_id}});
        this.toPage(2, $event.goods_id);
    };
    ArticlecontentPage.prototype.toPage = function (type, id, name) {
        console.log(type);
        if (typeof type === 'string') {
            type = Number(type);
        }
        this.topage.toPage(type, id, name);
    };
    ArticlecontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articlecontent',
            template: __webpack_require__(/*! ./articlecontent.page.html */ "./src/app/pages/articlecontent/articlecontent.page.html"),
            styles: [__webpack_require__(/*! ./articlecontent.page.scss */ "./src/app/pages/articlecontent/articlecontent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_articelist_service__WEBPACK_IMPORTED_MODULE_3__["ArticelistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_7__["TopageService"]])
    ], ArticlecontentPage);
    return ArticlecontentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-articlecontent-articlecontent-module.js.map