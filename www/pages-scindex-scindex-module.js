(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scindex-scindex-module"],{

/***/ "./src/app/pages/scindex/scindex.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/scindex/scindex.module.ts ***!
  \*************************************************/
/*! exports provided: ScindexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScindexPageModule", function() { return ScindexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scindex_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scindex.page */ "./src/app/pages/scindex/scindex.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _scindex_page__WEBPACK_IMPORTED_MODULE_6__["ScindexPage"]
    }
];
var ScindexPageModule = /** @class */ (function () {
    function ScindexPageModule() {
    }
    ScindexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_scindex_page__WEBPACK_IMPORTED_MODULE_6__["ScindexPage"]]
        })
    ], ScindexPageModule);
    return ScindexPageModule;
}());



/***/ }),

/***/ "./src/app/pages/scindex/scindex.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/scindex/scindex.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [translucent]=\"true\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\n    <div class=\"search-bar\">\n      <div class=\"left\" (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </div>\n      <div class=\"center\" (click)=\"searchpage()\">\n        <div class=\"search-box\">\n          <img src=\"/assets/fdj.svg\"><span>{{keywords || '精彩等你发现'}}</span>\n        </div>\n      </div>\n      <!--<div class=\"right\">-->\n      <!--<img src=\"/assets/ewm.svg\" alt=\"\">-->\n      <!--</div>-->\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <div *ngIf=\"!bannerList\" class=\"page-top\">\n    <ion-skeleton-text animated style=\"height: 260px;\"></ion-skeleton-text>\n    <ion-row class=\"nav-skeleton\">\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\n    </ion-row>\n    <ion-row class=\"nav-skeleton\">\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\n    </ion-row>\n    <ion-skeleton-text animated style=\"width: 20%; height: 20px;\" ></ion-skeleton-text>\n    <ion-row class=\"nav-skeleton\">\n      <ion-col><ion-skeleton-text animated style=\"height: 80px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 80px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 80px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 80px;width: 100%\"></ion-skeleton-text></ion-col>\n    </ion-row>\n    <ion-skeleton-text animated style=\"height: 200px;margin-top: 10px;\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 20%; height: 20px;\" ></ion-skeleton-text>\n    <ion-row class=\"nav-skeleton\">\n      <ion-col><ion-skeleton-text animated style=\"height: 100px;width: 100%\"></ion-skeleton-text></ion-col>\n      <ion-col><ion-skeleton-text animated style=\"height: 100px;width: 100%\"></ion-skeleton-text></ion-col>\n    </ion-row>\n  </div>\n  <div class=\"myslides-box\" *ngIf=\"bannerList\">\n    <ion-slides pager=\"true\" id=\"myswiper\">\n      <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\">\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"margin-top: 10px\">\n    <ion-slide *ngFor=\"let item of navList\" (click)=\"toPage(item.type, item.menu_url)\">\n      <img class=\"nav-img\" src=\"{{http.domain + item.menu_img}}\">\n      <div>{{item.menu_name}}</div>\n    </ion-slide>\n  </ion-slides>\n  <ion-grid *ngIf=\"ggtj1\">\n    <ion-row *ngIf=\"ggtj1.length == 1\">\n      <ion-col size=\"12\" *ngFor=\"let item of ggtj1\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"ggtj1.length > 1\">\n      <ion-col size=\"6\" *ngFor=\"let item of ggtj1\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div padding>\n    <app-pagetitle *ngIf=\"titleList && titleList['title1']\" [nopadding]=\"true\" [myname]=\"titleList['title1']\" [type]=\"true\" [des]=\"titleList['desc1']\"></app-pagetitle>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\" *ngFor=\"let item of pptj\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let item of ggtj5\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div padding>\n    <app-pagetitle *ngIf=\"titleList && titleList['title2']\" [nopadding]=\"true\" [myname]=\"titleList['title2']\" [type]=\"true\" [des]=\"titleList['desc2']\"></app-pagetitle>\n  </div>\n  <ion-grid class=\"nopaddingbottom\">\n    <ion-row class=\"nopaddingbottom\">\n      <ion-col size=\"6\" *ngFor=\"let item of ggtj7\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"nopaddingtop\">\n    <ion-row class=\"nopaddingtop\">\n      <ion-col size=\"4\" *ngFor=\"let item of ggtj8\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div *ngIf=\"topgoods\" padding>\n    <app-productlist *ngFor=\"let citem of topgoods\" [data]=\"citem\"  (open)=\"openpage($event)\" type=\"2\"></app-productlist>\n  </div>\n  <div padding>\n    <app-pagetitle *ngIf=\"titleList && titleList['title3']\" [nopadding]=\"true\" [myname]=\"titleList['title3']\" [type]=\"true\" [des]=\"titleList['desc3']\"></app-pagetitle>\n  </div>\n  <ion-grid class=\"nopaddingbottom\">\n    <ion-row class=\"nopaddingbottom\">\n      <ion-col *ngFor=\"let item of ggtj2\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"nopaddingbottom nopaddingtop\">\n    <ion-row class=\"nopaddingbottom nopaddingtop\">\n      <ion-col size=\"6\" *ngFor=\"let item of ggtj3\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"nopaddingtop\">\n    <ion-row>\n      <ion-col size=\"4\" *ngFor=\"let item of ggtj4\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div padding>\n    <app-pagetitle *ngIf=\"titleList && titleList['title4']\" [nopadding]=\"true\" [myname]=\"titleList['title4']\" [type]=\"true\" [des]=\"titleList['desc4']\"></app-pagetitle>\n  </div>\n  <div *ngIf=\"tjgoods && tjgoods[0]\" padding>\n    <app-productlist *ngFor=\"let citem of tjgoods[0].arr\" [data]=\"citem\"  (open)=\"openpage($event)\" type=\"1\"></app-productlist>\n\n  </div>\n  <div padding>\n    <app-pagetitle *ngIf=\"titleList && titleList['title5']\" [nopadding]=\"true\" [myname]=\"titleList['title5']\" [type]=\"true\" [des]=\"titleList['desc5']\"></app-pagetitle>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let item of ggtj6\" (click)=\"toPage(item.type, item.url)\">\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div padding>\n    <app-pagetitle *ngIf=\"titleList && titleList['title6']\" [nopadding]=\"true\" [myname]=\"titleList['title6']\" [type]=\"true\" [des]=\"titleList['desc6']\"></app-pagetitle>\n  </div>\n  <div *ngIf=\"tjgoods && tjgoods[1]\" padding>\n    <app-productlist *ngFor=\"let citem of tjgoods[1].arr\" [data]=\"citem\"  (open)=\"openpage($event)\" type=\"3\"></app-productlist>\n\n  </div>\n  <div padding>\n    <app-pagetitle *ngIf=\"titleList && titleList['title7']\" [nopadding]=\"true\" [myname]=\"titleList['title7']\" [type]=\"true\" [des]=\"titleList['desc7']\"></app-pagetitle>\n  </div>\n  <div padding *ngIf=\"moreGoods\">\n    <app-productlist *ngFor=\"let item of moreGoods\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"crescent\"\n       loadingText=\"加载更多...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/scindex/scindex.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/scindex/scindex.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 50px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center; }\n  .search-bar .right span {\n      display: inline-block;\n      flex: 1;\n      line-height: 18px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .right ion-icon {\n      font-size: 13px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n  --opacity: 0; }\n  ion-content .nav-img {\n  width: 56px; }\n  ion-content #myswiper, ion-content .page-top {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden;\n  --bullet-background-active: #fff; }\n  ion-content ion-slide {\n  flex-direction: column;\n  font-size: var(--ion-text); }\n  ion-content ion-slides {\n  --bullet-background-active: var(--ion-color-secondary); }\n  ion-content .swiper-pagination2 {\n  text-align: center;\n  --bullet-background-active: var(--ion-color-secondary);\n  --bullet-background: #333; }\n  ion-content .swiper-pagination2 span {\n    margin: 0 5px !important; }\n  ion-content .swiper-pagination {\n  --bottom: 25px; }\n  ion-content .myslides-box {\n  position: relative; }\n  ion-content .myslides-box .footer {\n    left: -10%;\n    width: 120%;\n    position: absolute;\n    height: 8px;\n    z-index: 1000;\n    bottom: -5px;\n    overflow: hidden; }\n  ion-content .myslides-box .footer .footer-box {\n      border-radius: 50%;\n      height: 30px;\n      background-color: blue; }\n  ion-content .indexnav .four-nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n  padding: 7px 0px 0 5px; }\n  ion-content .indexnav .four-nav .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: flex-start;\n    font-size: var(--ion-sm-text); }\n  ion-content .indexnav .four-nav .footer img {\n      width: 20px; }\n  ion-content .xsqg .xsqg-right {\n  position: relative;\n  color: #fff; }\n  ion-content .xsqg .xsqg-right .name {\n    font-size: var(--ion-text);\n    position: absolute;\n    top: 33%;\n    margin-left: 15px;\n    margin-right: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  ion-content .xsqg .xsqg-right app-pricebutton {\n    position: absolute;\n    bottom: 12px;\n    left: 15px; }\n  ion-content .jx-nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  ion-content .jx-nav div {\n    font-size: var(--ion-text);\n    padding: 3px 7px;\n    border: 1px solid var(--ion-color-light);\n    border-radius: 5px;\n    margin-right: 5px;\n    color: var(--ion-color-dark); }\n  ion-content .jx-nav div.active {\n      background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n      color: #fff;\n      border: none;\n      position: relative; }\n  ion-content .jx-nav div.active::after {\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        border-width: 6px;\n        border-style: solid;\n        border-color: var(--ion-color-success) transparent transparent transparent;\n        position: absolute;\n        bottom: -11px;\n        left: 50%;\n        margin-left: -6px; }\n  ion-content .my-content {\n  margin-top: -10px;\n  --padding-top: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\n  ion-content .lxlg ion-slide {\n  color: #fff; }\n  ion-content .lxlg ion-slide .name {\n    position: absolute;\n    bottom: 50px;\n    padding: 5px 6px;\n    border-radius: 5px;\n    background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  ion-content .lxlg ion-slide p {\n    position: absolute;\n    bottom: 10px;\n    margin-top: 0; }\n  ion-content .rmzt2box {\n  margin-top: -15px; }\n  ion-content .wntj .title-img {\n  display: flex;\n  justify-content: center; }\n  ion-content .wntj .title-img img {\n    width: 75px; }\n  ion-content .wntj .yjfx {\n  color: var(--ion-color-secondary);\n  font-size: var(--ion-sm-text);\n  margin-top: 15px; }\n  ion-content .wntj p {\n  color: var(--ion-color-medium);\n  font-size: var(--ion-sm-text); }\n  .none {\n  display: none; }\n  .nopaddingbottom {\n  --padding-bottom: 0;\n  padding-bottom: 0; }\n  .nopaddingtop {\n  --padding-top: 0;\n  padding-top: 0; }\n  .show-0 {\n  --opacity: 0; }\n  .show-1 {\n  --opacity: 0.01; }\n  .show-2 {\n  --opacity: 0.02; }\n  .show-3 {\n  --opacity: 0.03; }\n  .show-4 {\n  --opacity: 0.04; }\n  .show-5 {\n  --opacity: 0.05; }\n  .show-6 {\n  --opacity: 0.06; }\n  .show-7 {\n  --opacity: 0.07; }\n  .show-8 {\n  --opacity: 0.08; }\n  .show-9 {\n  --opacity: 0.09; }\n  .show-10 {\n  --opacity: 0.1; }\n  .show-11 {\n  --opacity: 0.11; }\n  .show-12 {\n  --opacity: 0.12; }\n  .show-13 {\n  --opacity: 0.13; }\n  .show-14 {\n  --opacity: 0.14; }\n  .show-15 {\n  --opacity: 0.15; }\n  .show-16 {\n  --opacity: 0.16; }\n  .show-17 {\n  --opacity: 0.17; }\n  .show-18 {\n  --opacity: 0.18; }\n  .show-19 {\n  --opacity: 0.19; }\n  .show-20 {\n  --opacity: 0.2; }\n  .show-21 {\n  --opacity: 0.21; }\n  .show-22 {\n  --opacity: 0.22; }\n  .show-23 {\n  --opacity: 0.23; }\n  .show-24 {\n  --opacity: 0.24; }\n  .show-25 {\n  --opacity: 0.25; }\n  .show-26 {\n  --opacity: 0.26; }\n  .show-27 {\n  --opacity: 0.27; }\n  .show-28 {\n  --opacity: 0.28; }\n  .show-29 {\n  --opacity: 0.29; }\n  .show-30 {\n  --opacity: 0.3; }\n  .show-31 {\n  --opacity: 0.31; }\n  .show-32 {\n  --opacity: 0.32; }\n  .show-33 {\n  --opacity: 0.33; }\n  .show-34 {\n  --opacity: 0.34; }\n  .show-35 {\n  --opacity: 0.35; }\n  .show-36 {\n  --opacity: 0.36; }\n  .show-37 {\n  --opacity: 0.37; }\n  .show-38 {\n  --opacity: 0.38; }\n  .show-39 {\n  --opacity: 0.39; }\n  .show-40 {\n  --opacity: 0.4; }\n  .show-41 {\n  --opacity: 0.41; }\n  .show-42 {\n  --opacity: 0.42; }\n  .show-43 {\n  --opacity: 0.43; }\n  .show-44 {\n  --opacity: 0.44; }\n  .show-45 {\n  --opacity: 0.45; }\n  .show-46 {\n  --opacity: 0.46; }\n  .show-47 {\n  --opacity: 0.47; }\n  .show-48 {\n  --opacity: 0.48; }\n  .show-49 {\n  --opacity: 0.49; }\n  .show-50 {\n  --opacity: 0.5; }\n  .show-51 {\n  --opacity: 0.51; }\n  .show-52 {\n  --opacity: 0.52; }\n  .show-53 {\n  --opacity: 0.53; }\n  .show-54 {\n  --opacity: 0.54; }\n  .show-55 {\n  --opacity: 0.55; }\n  .show-56 {\n  --opacity: 0.56; }\n  .show-57 {\n  --opacity: 0.57; }\n  .show-58 {\n  --opacity: 0.58; }\n  .show-59 {\n  --opacity: 0.59; }\n  .show-60 {\n  --opacity: 0.6; }\n  .show-61 {\n  --opacity: 0.61; }\n  .show-62 {\n  --opacity: 0.62; }\n  .show-63 {\n  --opacity: 0.63; }\n  .show-64 {\n  --opacity: 0.64; }\n  .show-65 {\n  --opacity: 0.65; }\n  .show-66 {\n  --opacity: 0.66; }\n  .show-67 {\n  --opacity: 0.67; }\n  .show-68 {\n  --opacity: 0.68; }\n  .show-69 {\n  --opacity: 0.69; }\n  .show-70 {\n  --opacity: 0.7; }\n  .show-71 {\n  --opacity: 0.71; }\n  .show-72 {\n  --opacity: 0.72; }\n  .show-73 {\n  --opacity: 0.73; }\n  .show-74 {\n  --opacity: 0.74; }\n  .show-75 {\n  --opacity: 0.75; }\n  .show-76 {\n  --opacity: 0.76; }\n  .show-77 {\n  --opacity: 0.77; }\n  .show-78 {\n  --opacity: 0.78; }\n  .show-79 {\n  --opacity: 0.79; }\n  .show-80 {\n  --opacity: 0.8; }\n  .show-81 {\n  --opacity: 0.81; }\n  .show-82 {\n  --opacity: 0.82; }\n  .show-83 {\n  --opacity: 0.83; }\n  .show-84 {\n  --opacity: 0.84; }\n  .show-85 {\n  --opacity: 0.85; }\n  .show-86 {\n  --opacity: 0.86; }\n  .show-87 {\n  --opacity: 0.87; }\n  .show-88 {\n  --opacity: 0.88; }\n  .show-89 {\n  --opacity: 0.89; }\n  .show-90 {\n  --opacity: 0.9; }\n  .show-91 {\n  --opacity: 0.91; }\n  .show-92 {\n  --opacity: 0.92; }\n  .show-93 {\n  --opacity: 0.93; }\n  .show-94 {\n  --opacity: 0.94; }\n  .show-95 {\n  --opacity: 0.95; }\n  .show-96 {\n  --opacity: 0.96; }\n  .show-97 {\n  --opacity: 0.97; }\n  .show-98 {\n  --opacity: 0.98; }\n  .show-99 {\n  --opacity: 0.99; }\n  .show-100 {\n  --opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zY2luZGV4L3NjaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlLEVBQUE7RUFOakI7SUFRSSxnQ0FBZ0M7SUFDaEMsOEJBQStCO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0VBYnZCO01BZU0sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBaEJ0QjtJQW9CSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBO0VBekJ2QjtNQTJCTSxxQkFBcUI7TUFDckIsT0FBTztNQUNQLGlCQUFpQixFQUFBO0VBN0J2QjtNQWdDTSxXQUFXLEVBQUE7RUFoQ2pCO01BbUNNLGVBQWUsRUFBQTtFQW5DckI7SUF1Q0ksb0JBQW9CO0lBQ3BCLE9BQU87SUFDUCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHNCQUFzQjtJQUd0QixxQkFBcUI7SUFHckIsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFBO0VBbER0QjtNQW9ETSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLDBCQUEwQjtNQUMxQixpQkFBaUIsRUFBQTtFQTFEdkI7UUE0RFEsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0IsRUFBQTtFQUsxQjtFQUNFLDhGQUFhO0VBQ2IsWUFBVSxFQUFBO0VBR1o7RUFFSSxXQUFXLEVBQUE7RUFGZjtFQU1JLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsZ0NBQTJCLEVBQUE7RUFSL0I7RUFXSSxzQkFBc0I7RUFDdEIsMEJBQTBCLEVBQUE7RUFaOUI7RUFlSSxzREFBMkIsRUFBQTtF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QVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixZQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2luZGV4L3NjaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogdmFyKC0taW9uLXN0YXR1c2Jhci1sZWZ0KTtcclxuICAgIGZvbnQtc2l6ZTogIHZhcigtLWlvbi1pY29uLWJpZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gIC0tb3BhY2l0eTogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5uYXYtaW1nIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gIH1cclxuICAjbXlzd2lwZXIsIC5wYWdlLXRvcCB7XHJcbiAgICAvL21hcmdpbi10b3A6IC00NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmO1xyXG4gIH1cclxuICBpb24tc2xpZGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbjogMCA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICAtLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgLm15c2xpZGVzLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgbGVmdDogLTEwJTtcclxuICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmZvb3Rlci1ib3gge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaW5kZXhuYXYge1xyXG4gICAgLmZvdXItbmF2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogN3B4IDBweCAwIDVweDtcclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnhzcWcge1xyXG4gICAgLnhzcWctcmlnaHQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuICAgICAgYXBwLXByaWNlYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmp4LW5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMTFweDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubXktY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAubHhsZyB7XHJcbiAgICBpb24tc2xpZGUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDZweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbiAgICAgIH1cclxuICAgICAgcCAgIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJtenQyYm94IHtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAud250aiB7XHJcbiAgICAudGl0bGUtaW1nIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC55amZ4IHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubm9wYWRkaW5nYm90dG9tIHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi5ub3BhZGRpbmd0b3Age1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAwIHtcclxuICAuc2hvdy0jeyRpfSB7ICAgLS1vcGFjaXR5OiAjeyRpIC8gMTAwfTsgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/scindex/scindex.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/scindex/scindex.page.ts ***!
  \***********************************************/
/*! exports provided: ScindexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScindexPage", function() { return ScindexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_scindex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/scindex.service */ "./src/app/services/scindex.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shop_content_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shop-content.service */ "./src/app/services/shop-content.service.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/search/search.component */ "./src/app/components/search/search.component.ts");








// import {ShopContentService} from "../../services/shop-content.service";

var ScindexPage = /** @class */ (function () {
    function ScindexPage(nav, getIndex, http, topage, route, shop, modalController) {
        this.nav = nav;
        this.getIndex = getIndex;
        this.http = http;
        this.topage = topage;
        this.route = route;
        this.shop = shop;
        this.modalController = modalController;
        // console.log(this.titleList);
    }
    ScindexPage.prototype.ngOnInit = function () {
        this.toolbaropacity = '0';
        this.slideOpts = {
            slidesPerView: 5,
            slidesPerGroup: 5,
            slidesPerColumn: 1,
            pagination: {
                el: '.swiper-pagination2'
            },
        };
        this.slideOptslv = {
            // slidesOffsetBefore : 50,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 10,
            pagination: ''
            // slidesOffsetAfter : 100,
        };
    };
    ScindexPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.moreGoods = this.getIndex.getMoregoods();
        this.getIndex.getScindex().then(function (res) {
            console.log(res);
            _this.bannerList = res['index_banner'];
            _this.navList = res['menu_list'];
            _this.ggtj1 = res['index_gg1'];
            _this.ggtj2 = res['index_gg2'];
            _this.ggtj3 = res['index_gg3'];
            _this.ggtj4 = res['index_gg4'];
            _this.ggtj5 = res['index_gg5'];
            _this.ggtj6 = res['index_gg6'];
            _this.ggtj7 = res['index_gg7'];
            _this.ggtj8 = res['index_gg8'];
            _this.titleList = res['index_title'];
            _this.pptj = res['index_gg9'];
            _this.tjgoods = res['tj_goods'];
            _this.topgoods = res['top_goods'];
            // console.log(this.titleList)
        }).catch(function (err) { });
        this.shop.getShop().then(function (res) {
            if (res.search_keywords) {
                var key = res.search_keywords.split('|');
                console.log(key);
                _this.keywords = key[1];
            }
            if (!_this.keywords) {
                _this.keywords = res.sckeywords[0];
            }
        }).catch(function (err2) { });
    };
    ScindexPage.prototype.goBack = function () {
        this.nav.navigateRoot('/tabs/tab1');
    };
    ScindexPage.prototype.logScrolling = function ($event) {
        var top = $event.detail.scrollTop;
        // if (!this.scroolold) {
        //   this.scroolold = top;
        // } else {
        //   if (this.scroolold > 44 && top > 44) {
        //     this.scroolold = top;
        //     return false;
        //   }
        //   this.scroolold = top;
        // }
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
        }
        else {
            num = 1;
        }
        this.setNavstatus(num);
    };
    ScindexPage.prototype.setNavstatus = function (num) {
        // const el = document.querySelector('ion-toolbar');
        // el.style.setProperty('--opacity', num);
        this.toolbaropacity = (parseInt((num * 100).toString(), 10)).toString();
    };
    ScindexPage.prototype.openpage = function ($event) {
        console.log($event);
        // this.nav.navigateForward(['/productcontent'], );
        this.route.navigate(['/productcontent'], { queryParams: { id: $event.goods_id, suppid: $event.supplier_id } });
    };
    ScindexPage.prototype.toPage = function (type, id, name) {
        this.topage.toPage(type, id, name);
    };
    ScindexPage.prototype.searchpage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                            componentProps: { type: 1 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ScindexPage.prototype.loadData = function (event) {
        var _this = this;
        this.getIndex.getMoregoodshttp().then(function (res) {
            console.log(_this.moreGoods);
            event.target.complete();
        }).catch(function (err) {
            event.target.complete();
            event.target.disabled = true;
        });
    };
    ScindexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scindex',
            template: __webpack_require__(/*! ./scindex.page.html */ "./src/app/pages/scindex/scindex.page.html"),
            styles: [__webpack_require__(/*! ./scindex.page.scss */ "./src/app/pages/scindex/scindex.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_scindex_service__WEBPACK_IMPORTED_MODULE_3__["ScindexService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_4__["TopageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_shop_content_service__WEBPACK_IMPORTED_MODULE_7__["ShopContentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ScindexPage);
    return ScindexPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-scindex-scindex-module.js.map