(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/products/products.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/products/products.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\"[ngClass]=\"'show-' + toolbaropacity\" [ngClass]=\"{nobanner: !bannerList || bannerList && bannerList.length == 0}\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\r\n      </div>\r\n      <div class=\"center\" (click)=\"searchModel()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span>{{'请输入搜索内容'}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"presentPopover($event)\" *ngIf=\"suppId === 0 && active && ishw\">\r\n        <span>{{active.navName}}</span> <ion-icon name=\"arrow-dropdown-circle\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n  <div class=\"listnav2 isfixed\" *ngIf=\"isshowtopnav\">\r\n    <app-hwcpsort *ngIf=\"ishw && togglelist\" [togglelist]=\"togglelist\" (sethwActivesortfn)=\"sethwActivesort($event)\"></app-hwcpsort>\r\n    <app-goodssort *ngIf=\"!ishw && togglelist\" [togglelist]=\"togglelist\"\r\n                   [isactivesortobj]=\"isactivesort\" (togglenavfn)=\"togglenav($event)\"></app-goodssort>\r\n  </div>\r\n</ion-header>\r\n<ion-backdrop *ngIf=\"setShow\" [visible]=\"true\" [stopPropagation]=\"false\"></ion-backdrop>\r\n\r\n<ion-content [scrollEvents]=\"bannerList && bannerList.length > 0\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n       pullingIcon=\"arrow-dropdown\"\r\n       pullingText=\"Pull to refresh\"\r\n       refreshingSpinner=\"circles\"\r\n       refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"top\" *ngIf=\"bannerList && bannerList.length > 0\">\r\n    <img src=\"./assets/listbg.svg\" alt=\"\">\r\n    <div class=\"banner\" padding *ngIf=\"suppId === 0 && bannerList && bannerList.length > 0\">\r\n      <ion-slides pager=\"true\">\r\n        <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.href_url)\">\r\n          <img src=\"{{http.zdomain +'data/catflashimg/' + item.img_url}}\">\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n  <ion-card class=\"tjnav\" *ngIf=\"suppId === 0 && navlist && navlist.length > 0\">\r\n    <ion-card-content>\r\n      <div class=\"card-title\">\r\n        <img src=\"./assets/fire.svg\" alt=\"\">热门潜水圣地\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\" *ngFor=\"let item of navlist\" size=\"4\" (click)=\"toPage(item.type, item.url)\">\r\n            <!--文本类型，先使用图片，后期需要再放开,还有css部分-->\r\n            <!--<div class=\"title\">仙本那</div>-->\r\n            <!--<span>已售2320</span>-->\r\n              <!--<img src=\"./assets/zrm.svg\" alt=\"\">-->\r\n            <img [src]=\"http.domain + item.image\" alt=\"\" style=\"width: 100%\">\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"tjnav\" *ngIf=\"childnav.length > 0\">\r\n    <ion-card-content>\r\n      <div class=\"card-title\">\r\n        <img src=\"./assets/fire.svg\" alt=\"\">更多分类\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\" *ngFor=\"let item of childnav\" size=\"4\" (click)=\"goothercate(item.id)\">\r\n            <!--文本类型，先使用图片，后期需要再放开,还有css部分-->\r\n            <div class=\"title\">{{item.name}}</div>\r\n            <!--<span>已售2320</span>-->\r\n              <!--<img src=\"./assets/zrm.svg\" alt=\"\">-->\r\n            <!--<img [src]=\"http.domain + item.image\" alt=\"\" style=\"width: 100%\">-->\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div class=\"list-content\" padding [ngClass]=\"{hastop: (!navlist || navlist && navlist.length == 0) && ( bannerList && bannerList.length > 0)}\">\r\n    <app-pagetitle *ngIf=\"suppId === 0 && listTitle\" [myname]=\"listTitle\" [type]=\"true\"></app-pagetitle>\r\n    <div class=\"listnav isabsolute\">\r\n      <app-hwcpsort *ngIf=\"ishw && togglelist\" [togglelist]=\"togglelist\" (sethwActivesortfn)=\"sethwActivesort($event)\"></app-hwcpsort>\r\n      <app-goodssort *ngIf=\"!ishw && togglelist\" [togglelist]=\"togglelist\"\r\n                     [isactivesortobj]=\"isactivesort\" (togglenavfn)=\"togglenav($event)\"></app-goodssort>\r\n    </div>\r\n\r\n    <!--<div class=\"line\"></div>-->\r\n    <div *ngIf=\"dataList\">\r\n      <app-productlist *ngFor=\"let item of dataList\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n\r\n    <!--<ion-virtual-scroll [items]=\"dataList\" approxItemHeight=\"153px\">-->\r\n      <!--<div *virtualItem=\"let item\">-->\r\n        <!--<app-productlist [data]=\"item\" (open)=\"openpage($event)\" [imgtype]=\"1\"></app-productlist>-->\r\n      <!--</div>-->\r\n    <!--</ion-virtual-scroll>-->\r\n    <div *ngIf=\"!dataList\">\r\n      <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n      <ion-row>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      </ion-row>\r\n      <ion-list>\r\n\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"crescent\"\r\n       loadingText=\"加载更多...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/products/products.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 50px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center; }\n  .search-bar .right span {\n      display: inline-block;\n      flex: 1;\n      line-height: 18px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .right ion-icon {\n      font-size: 13px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n  --opacity: 0; }\n  ion-toolbar.nobanner {\n    --opacity: 1; }\n  .show-0 {\n  --opacity: 0; }\n  .show-1 {\n  --opacity: 0.01; }\n  .show-2 {\n  --opacity: 0.02; }\n  .show-3 {\n  --opacity: 0.03; }\n  .show-4 {\n  --opacity: 0.04; }\n  .show-5 {\n  --opacity: 0.05; }\n  .show-6 {\n  --opacity: 0.06; }\n  .show-7 {\n  --opacity: 0.07; }\n  .show-8 {\n  --opacity: 0.08; }\n  .show-9 {\n  --opacity: 0.09; }\n  .show-10 {\n  --opacity: 0.1; }\n  .show-11 {\n  --opacity: 0.11; }\n  .show-12 {\n  --opacity: 0.12; }\n  .show-13 {\n  --opacity: 0.13; }\n  .show-14 {\n  --opacity: 0.14; }\n  .show-15 {\n  --opacity: 0.15; }\n  .show-16 {\n  --opacity: 0.16; }\n  .show-17 {\n  --opacity: 0.17; }\n  .show-18 {\n  --opacity: 0.18; }\n  .show-19 {\n  --opacity: 0.19; }\n  .show-20 {\n  --opacity: 0.2; }\n  .show-21 {\n  --opacity: 0.21; }\n  .show-22 {\n  --opacity: 0.22; }\n  .show-23 {\n  --opacity: 0.23; }\n  .show-24 {\n  --opacity: 0.24; }\n  .show-25 {\n  --opacity: 0.25; }\n  .show-26 {\n  --opacity: 0.26; }\n  .show-27 {\n  --opacity: 0.27; }\n  .show-28 {\n  --opacity: 0.28; }\n  .show-29 {\n  --opacity: 0.29; }\n  .show-30 {\n  --opacity: 0.3; }\n  .show-31 {\n  --opacity: 0.31; }\n  .show-32 {\n  --opacity: 0.32; }\n  .show-33 {\n  --opacity: 0.33; }\n  .show-34 {\n  --opacity: 0.34; }\n  .show-35 {\n  --opacity: 0.35; }\n  .show-36 {\n  --opacity: 0.36; }\n  .show-37 {\n  --opacity: 0.37; }\n  .show-38 {\n  --opacity: 0.38; }\n  .show-39 {\n  --opacity: 0.39; }\n  .show-40 {\n  --opacity: 0.4; }\n  .show-41 {\n  --opacity: 0.41; }\n  .show-42 {\n  --opacity: 0.42; }\n  .show-43 {\n  --opacity: 0.43; }\n  .show-44 {\n  --opacity: 0.44; }\n  .show-45 {\n  --opacity: 0.45; }\n  .show-46 {\n  --opacity: 0.46; }\n  .show-47 {\n  --opacity: 0.47; }\n  .show-48 {\n  --opacity: 0.48; }\n  .show-49 {\n  --opacity: 0.49; }\n  .show-50 {\n  --opacity: 0.5; }\n  .show-51 {\n  --opacity: 0.51; }\n  .show-52 {\n  --opacity: 0.52; }\n  .show-53 {\n  --opacity: 0.53; }\n  .show-54 {\n  --opacity: 0.54; }\n  .show-55 {\n  --opacity: 0.55; }\n  .show-56 {\n  --opacity: 0.56; }\n  .show-57 {\n  --opacity: 0.57; }\n  .show-58 {\n  --opacity: 0.58; }\n  .show-59 {\n  --opacity: 0.59; }\n  .show-60 {\n  --opacity: 0.6; }\n  .show-61 {\n  --opacity: 0.61; }\n  .show-62 {\n  --opacity: 0.62; }\n  .show-63 {\n  --opacity: 0.63; }\n  .show-64 {\n  --opacity: 0.64; }\n  .show-65 {\n  --opacity: 0.65; }\n  .show-66 {\n  --opacity: 0.66; }\n  .show-67 {\n  --opacity: 0.67; }\n  .show-68 {\n  --opacity: 0.68; }\n  .show-69 {\n  --opacity: 0.69; }\n  .show-70 {\n  --opacity: 0.7; }\n  .show-71 {\n  --opacity: 0.71; }\n  .show-72 {\n  --opacity: 0.72; }\n  .show-73 {\n  --opacity: 0.73; }\n  .show-74 {\n  --opacity: 0.74; }\n  .show-75 {\n  --opacity: 0.75; }\n  .show-76 {\n  --opacity: 0.76; }\n  .show-77 {\n  --opacity: 0.77; }\n  .show-78 {\n  --opacity: 0.78; }\n  .show-79 {\n  --opacity: 0.79; }\n  .show-80 {\n  --opacity: 0.8; }\n  .show-81 {\n  --opacity: 0.81; }\n  .show-82 {\n  --opacity: 0.82; }\n  .show-83 {\n  --opacity: 0.83; }\n  .show-84 {\n  --opacity: 0.84; }\n  .show-85 {\n  --opacity: 0.85; }\n  .show-86 {\n  --opacity: 0.86; }\n  .show-87 {\n  --opacity: 0.87; }\n  .show-88 {\n  --opacity: 0.88; }\n  .show-89 {\n  --opacity: 0.89; }\n  .show-90 {\n  --opacity: 0.9; }\n  .show-91 {\n  --opacity: 0.91; }\n  .show-92 {\n  --opacity: 0.92; }\n  .show-93 {\n  --opacity: 0.93; }\n  .show-94 {\n  --opacity: 0.94; }\n  .show-95 {\n  --opacity: 0.95; }\n  .show-96 {\n  --opacity: 0.96; }\n  .show-97 {\n  --opacity: 0.97; }\n  .show-98 {\n  --opacity: 0.98; }\n  .show-99 {\n  --opacity: 0.99; }\n  .show-100 {\n  --opacity: 1; }\n  ion-content {\n  position: relative; }\n  .top {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden; }\n  .top .banner {\n    position: relative;\n    margin-top: -106px;\n    width: 100%; }\n  .top ion-slides {\n    --bullet-background-active: #fff; }\n  .issupplier {\n  height: calc(var(--ion-platform-margin-height));\n  overflow: hidden; }\n  ion-card {\n  margin-top: 30px; }\n  ion-card ion-card-content {\n    padding: 0; }\n  ion-card ion-card-content .card-title {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      line-height: 30px;\n      font-size: var(--ion-text);\n      color: var(--ion-color-danger);\n      background-color: #F5F2DE;\n      padding-left: 15px; }\n  ion-card ion-card-content .card-title img {\n        width: 12px;\n        margin-right: 5px; }\n  ion-card ion-row ion-col {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px solid var(--ion-color-light);\n    border-bottom: 1px solid var(--ion-color-light); }\n  ion-card ion-row ion-col:nth-of-type(3n) {\n      border-right: none; }\n  ion-card ion-row ion-col .title {\n      color: var(--ion-color-dark);\n      font-size: var(--ion-title); }\n  ion-card ion-row ion-col span {\n      font-size: var(--ion-sm-text); }\n  ion-card ion-row:first-of-type ion-col span {\n    margin-bottom: 5px; }\n  ion-card ion-row:last-of-type ion-col .title {\n    margin-top: 5px; }\n  ion-card {\n  padding-bottom: 0;\n  margin-bottom: 0; }\n  .list-content {\n  padding-top: 0; }\n  .tjnav ion-grid {\n  padding-top: 0; }\n  .listnav2 {\n  background-color: #fff;\n  z-index: 100;\n  width: 100%;\n  left: 0;\n  position: fixed;\n  top: var(--ion-platform-margin-height);\n  border-bottom: 1px solid var(--ion-color-light); }\n  .listnav2 .title {\n    border-bottom: 1px solid var(--ion-color-light); }\n  .listnav {\n  min-height: 37px; }\n  .listnav.isabsolute {\n    position: relative; }\n  .line {\n  height: 1px;\n  background-color: var(--ion-color-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWUsRUFBQTtFQU5qQjtJQVFJLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFidkI7TUFlTSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFoQnRCO0lBb0JJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7RUF6QnZCO01BMkJNLHFCQUFxQjtNQUNyQixPQUFPO01BQ1AsaUJBQWlCLEVBQUE7RUE3QnZCO01BZ0NNLFdBQVcsRUFBQTtFQWhDakI7TUFtQ00sZUFBZSxFQUFBO0VBbkNyQjtJQXVDSSxvQkFBb0I7SUFDcEIsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBR3RCLHFCQUFxQjtJQUdyQixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7RUFsRHRCO01Bb0RNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsMEJBQTBCO01BQzFCLGlCQUFpQixFQUFBO0VBMUR2QjtRQTREUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBSzFCO0VBQ0UsOEZBQWE7RUFDYixZQUFVLEVBQUE7RUFGWjtJQUlJLFlBQVUsRUFBQTtFQUlaO0VBQWdCLFlBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixZQUFVLEVBQUE7RUFFNUI7RUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtFQUVFLDBDQUEwQztFQUMxQyxnQkFBZ0IsRUFBQTtFQUhsQjtJQUtJLGtCQUFrQjtJQUVsQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0VBUmY7SUFXSSxnQ0FBMkIsRUFBQTtFQU8vQjtFQUNFLCtDQUErQztFQUUvQyxnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBR0ksVUFBVSxFQUFBO0VBSGQ7TUFLTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLDBCQUEwQjtNQUMxQiw4QkFBOEI7TUFDOUIseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFBO0VBYnhCO1FBZVEsV0FBVztRQUNYLGlCQUFpQixFQUFBO0VBaEJ6QjtJQXNCTSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLCtDQUErQyxFQUFBO0VBM0JyRDtNQTZCUSxrQkFBa0IsRUFBQTtFQTdCMUI7TUFnQ1EsNEJBQTRCO01BQzVCLDJCQUEyQixFQUFBO0VBakNuQztNQW9DUSw2QkFBNkIsRUFBQTtFQXBDckM7SUEwQ1Usa0JBQWtCLEVBQUE7RUExQzVCO0lBaURVLGVBQWUsRUFBQTtFQU16QjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLGNBQWMsRUFBQTtFQUVoQjtFQUVJLGNBQWMsRUFBQTtFQWFsQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUVYLE9BQU87RUFDUCxlQUFlO0VBQ2Ysc0NBQXNDO0VBRXRDLCtDQUErQyxFQUFBO0VBVGpEO0lBV0ksK0NBQStDLEVBQUE7RUFJbkQ7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUdJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0UsV0FBVztFQUNYLHdDQUF3QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogdmFyKC0taW9uLXN0YXR1c2Jhci1sZWZ0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWljb24tYmlnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbiAgLS1vcGFjaXR5OiAwO1xyXG4gICYubm9iYW5uZXIge1xyXG4gICAgLS1vcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoIDEwMCB7XHJcbiAgLnNob3ctI3skaX0geyAgIC0tb3BhY2l0eTogI3skaSAvIDEwMH07IH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50b3Age1xyXG4gIC8vbWFyZ2luLXRvcDogLTQ0cHg7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLmJhbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL3RvcDogLTY4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTA2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmZjtcclxuICB9XHJcbn1cclxuLy8uaGFzdG9wIHtcclxuLy8gIG1hcmdpbi10b3A6IDMwcHg7XHJcbi8vfVxyXG5cclxuLmlzc3VwcGxpZXIge1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLWhlaWdodCkpO1xyXG4gIC8vdHJhbnNsYXRlWShjYWxjKDEwcHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMHB4KSkpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGMkRFO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAmOm50aC1vZi10eXBlKDNuKSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tY2FyZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ubGlzdC1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4udGpuYXYge1xyXG4gIGlvbi1ncmlkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuICAvL2lvbi1jb2wge1xyXG4gIC8vICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gIGltZyB7XHJcbiAgLy8gICAgd2lkdGg6IDMwcHg7XHJcbiAgLy8gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgIHRvcDogMDtcclxuICAvLyAgICByaWdodDogMDtcclxuICAvLyAgfVxyXG4gIC8vfVxyXG59XHJcblxyXG4ubGlzdG5hdjIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi1oZWlnaHQpO1xyXG4gIC8vbGVmdDogY2FsYygyMHB4IC0gNHB4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAudGl0bGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblxyXG4gIH1cclxufVxyXG4ubGlzdG5hdiB7XHJcbiAgbWluLWhlaWdodDogMzdweDtcclxuICAmLmlzYWJzb2x1dGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/products/products.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_shop_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shop-content.service */ "./src/app/services/shop-content.service.ts");
/* harmony import */ var _components_topnavlist_topnavlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/topnavlist/topnavlist.component */ "./src/app/components/topnavlist/topnavlist.component.ts");
/* harmony import */ var _services_shop_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shop-nav.service */ "./src/app/services/shop-nav.service.ts");
/* harmony import */ var _services_products_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/products-list.service */ "./src/app/services/products-list.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/search/search.component */ "./src/app/components/search/search.component.ts");











// import { GetshopService } from '../../services/getshop.service';
var ProductsPage = /** @class */ (function () {
    function ProductsPage(nav, route, http, activeroute, shopservice, popoverController, shopnav, productslist, topage, el, modalController) {
        this.nav = nav;
        this.route = route;
        this.http = http;
        this.activeroute = activeroute;
        this.shopservice = shopservice;
        this.popoverController = popoverController;
        this.shopnav = shopnav;
        this.productslist = productslist;
        this.topage = topage;
        this.el = el;
        this.modalController = modalController;
    }
    ProductsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('加载完了');
        this.shopservice.getShop().then(function (res) {
            _this.shop = res;
            _this.getParam();
        }).catch(function (err) { });
    };
    ProductsPage.prototype.ngOnInit = function () {
        this.childnav = [];
        this.toolbaropacity = '0';
        this.yhqdata = false;
        this.setShow = false;
        this.getObj = {
            category: 368,
            display: 'grid',
            brand: 0,
            price_min: 0,
            price_max: 0,
            filter_attr: 0,
            page: 1,
            sort: '',
            order: '',
            other_has: 1
        };
        this.suppId = 0;
        this.active = {};
        this.setdefalt();
    };
    ProductsPage.prototype.doRefresh = function (event) {
        var _this = this;
        console.log('Begin async operation');
        this.setdefalt();
        var obj = {
            last: this.last,
            amount: this.amount,
        };
        this.last = this.amount;
        this.gethttp(obj).then(function (res) {
            _this.dataList = res;
            if (event) {
                event.target.complete();
                console.log('执行了');
            }
        }, function () {
            if (event) {
                event.target.complete();
                console.log('执行了');
            }
        }).catch(function (err) {
            if (event) {
                event.target.complete();
                console.log('执行了');
            }
        });
    };
    ProductsPage.prototype.setdefalt = function () {
        this.dataList = null;
        this.last = 0;
        this.amount = 20;
    };
    ProductsPage.prototype.getParam = function () {
        var _this = this;
        this.activeroute.queryParams.subscribe(function (params) {
            console.log(_this.yhqdata);
            if (_this.yhqdata) {
                return false;
            }
            _this.yhqdata = true;
            console.log(4444);
            console.log(params);
            // this.getObj.category = params['id'];
            // this.active.id = params['id'];
            if (params['suppId']) {
                _this.suppId = params['suppId'];
            }
            else {
                _this.suppId = 0;
            }
            if (_this.suppId === 0) {
                _this.link = _this.http.getProductList;
            }
            else {
                _this.link = _this.http.getsjflgoods;
                _this.getObj = {
                    suppId: _this.suppId,
                    id: params['listid']
                };
            }
            var ishwobj = _this.shopnav.ishw(params['listid']);
            _this.ishw = ishwobj['ishw'];
            _this.childnav = ishwobj['childarr'];
            console.log(_this.childnav);
            _this.setsortfn();
            _this.setData(params['listid']);
        });
    };
    ProductsPage.prototype.setsortfn = function () {
        this.togglelist = this.shopservice.getSort(this.ishw);
        console.log(this.togglelist);
        this.isactivesort = {
            id: this.togglelist[0].id,
            sortname: this.togglelist[0].type || '',
            sort: '' // 排序顺序
        };
        if (typeof this.togglelist[0].sort === 'string') {
            this.isactivesort.sort = this.togglelist[0].sort;
        }
        else {
            this.isactivesort.sort = this.togglelist[0].sort[0];
        }
    };
    ProductsPage.prototype.searchModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                            componentProps: { type: this.ishw ? 2 : 1, category: this.getObj.category }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductsPage.prototype.setData = function (id) {
        var _this = this;
        if (this.suppId === 0) {
            this.getObj.category = id;
            this.shopservice.getNavname(id).then(function (res) {
                console.log(res);
                _this.active = res;
            }).catch(function (err) { });
            console.log(this.active);
            this.getTj();
        }
        this.getBanner();
        this.getList();
    };
    ProductsPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_topnavlist_topnavlist_component__WEBPACK_IMPORTED_MODULE_6__["TopnavlistComponent"],
                            event: ev,
                            mode: 'ios',
                            componentProps: { id: this.getObj.category },
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (res) {
                            if (!res.data) {
                                return false;
                            }
                            var item = res.data;
                            // this.yhqdata = false;
                            // this.setdefalt();
                            // // this.setData(item.menu_url);
                            // this.route.navigate(['/products'], {queryParams: {listid: item.menu_url}});
                            _this.goothercate(item.menu_url);
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductsPage.prototype.goothercate = function (id) {
        this.yhqdata = false;
        this.setdefalt();
        this.route.navigate(['/products'], { queryParams: { listid: id } });
    };
    ProductsPage.prototype.getList = function (obj) {
        var _this = this;
        if (!obj) {
            obj = {
                last: this.last,
                amount: this.amount
            };
        }
        this.last = this.amount;
        console.log(obj);
        // this.http.getpostformdata(this.http.getProductList, this.getObj, obj).subscribe(res => {
        //   console.log(res);
        //   this.dataList = res['data'];
        // }, err => {
        //
        // });
        this.gethttp(obj).then(function (res) {
            _this.dataList = res;
        }).catch(function (err) {
        });
    };
    ProductsPage.prototype.gethttp = function (obj) {
        var _this = this;
        // obj['type'] = this.type;
        if (this.suppId !== 0) {
            obj['page'] = obj.last / this.amount;
            obj['page_size'] = this.amount;
        }
        this.getObj.sort = this.isactivesort.sortname;
        this.getObj.order = this.isactivesort.sort;
        return new Promise(function (resolve, reject) {
            _this.http.getpostformdataloading(_this.link, _this.getObj, obj).subscribe(function (res) {
                console.log(res);
                resolve(res['data']);
                // this.dataList = res['data'];
            }, function (err) {
                reject(false);
            });
        });
    };
    ProductsPage.prototype.getBanner = function () {
        var _this = this;
        // const obj: any = {
        //   id: this.getObj.category
        // }
        this.productslist.getBanner(this.getObj.category).then(function (res) {
            console.log(res);
            _this.bannerList = res['banner'];
            if (!_this.bannerList || _this.bannerList && _this.bannerList.length == 0) {
                _this.toolbaropacity = '100';
            }
            _this.listTitle = res['title'];
        }).catch(function (err) { });
    };
    ProductsPage.prototype.getTj = function () {
        var _this = this;
        this.productslist.getNavlist(this.getObj.category).then(function (res) {
            // this.bannerList = res;
            console.log(res);
            _this.navlist = res;
        }).catch(function (err) { });
    };
    ProductsPage.prototype.loadData = function (event) {
        var _this = this;
        var obj = {
            last: this.last,
            amount: this.amount
        };
        this.last += this.amount;
        this.gethttp(obj).then(function (res) {
            var _a;
            // this.dataList = res;
            (_a = _this.dataList).push.apply(_a, res);
            event.target.complete();
            if (res['data'].length < 10) {
                event.target.disabled = true;
            }
        }).catch(function (err) {
            event.target.complete();
            event.target.disabled = true;
        });
    };
    ProductsPage.prototype.goBack = function () {
        this.yhqdata = false;
        this.setdefalt();
        this.nav.back();
        // this.getParam();
    };
    ProductsPage.prototype.logScrolling = function ($event) {
        console.log('滚动');
        var top = $event.detail.scrollTop;
        this.setShowtopnav(top);
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
        }
        else {
            num = 1;
        }
        this.setNavstatus(num);
    };
    ProductsPage.prototype.setShowtopnav = function (nowtop) {
        console.log('nowtop:' + nowtop);
        var top = this.getPointtop();
        console.log('top:' + top);
        if (nowtop > top) {
            this.isshowtopnav = true;
        }
        else {
            this.isshowtopnav = false;
        }
    };
    ProductsPage.prototype.getPointtop = function () {
        if (!this.navtop) {
            this.navtop = this.el.nativeElement.querySelector('.listnav').offsetTop - 10 - 70;
        }
        return this.navtop;
    };
    ProductsPage.prototype.setNavstatus = function (num) {
        // console.log(num)
        // const el = document.querySelector('ion-toolbar');
        // el.style.setProperty('--opacity', num);
        if (!this.bannerList || this.bannerList && this.bannerList.length == 0) {
            return false;
        }
        this.toolbaropacity = (parseInt((num * 100).toString(), 10)).toString();
    };
    ProductsPage.prototype.sethwActivesort = function (item) {
        this.isactivesort.id = item.id;
        this.isactivesort.sortname = item.type;
        this.isactivesort.sort = item.sort;
        this.doRefresh();
    };
    ProductsPage.prototype.togglenav = function (item) {
        console.log(item);
        this.isactivesort.id = item.id;
        this.isactivesort.sortname = item.sortname;
        this.isactivesort.sort = item.sort;
        this.doRefresh();
    };
    ProductsPage.prototype.openpage = function ($event) {
        console.log($event);
        // this.nav.navigateForward(['/productcontent'], );
        this.route.navigate(['/productcontent'], { queryParams: { id: $event.goods_id, suppid: $event.supplier_id } });
    };
    /**
     * type 1 商品分类列表 2 商品详情 3 主题 4 选择选择地址 5 搜索 6 商城首页
     * @param type
     * @param id
     */
    ProductsPage.prototype.toPage = function (type, id, name) {
        console.log(type);
        if (typeof type === 'string') {
            type = Number(type);
        }
        this.topage.toPage(type, id, name);
    };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.page.html */ "./src/app/pages/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/pages/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_shop_content_service__WEBPACK_IMPORTED_MODULE_5__["ShopContentService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _services_shop_nav_service__WEBPACK_IMPORTED_MODULE_7__["ShopNavService"], _services_products_list_service__WEBPACK_IMPORTED_MODULE_8__["ProductsListService"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_9__["TopageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module.js.map