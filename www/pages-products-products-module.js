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
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-04-05 10:44:22
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-04-05 10:44:22
 * @Description: file content
 */








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
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
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

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-08-03 14:52:31\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-27 18:02:13\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar *ngIf=\"suppId === 0\" mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\" [ngClass]=\"{nobanner: !bannerList || bannerList && bannerList.length == 0}\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\r\n      </div>\r\n      <div class=\"center\" (click)=\"searchModel()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span>{{'请输入搜索内容'}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"presentPopover($event)\" *ngIf=\"suppId === 0 && active && ishw && active.navName\">\r\n        <span>{{active.navName}}</span> <ion-icon name=\"arrow-dropdown-circle\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n  <!-- <ion-toolbar mode=\"ios\" *ngIf=\"suppId !== 0\" [ngClass]=\"'show-' + toolbaropacity\" [ngClass]=\"{nobanner: !bannerList || bannerList && bannerList.length == 0}\"> -->\r\n  <ion-toolbar mode=\"ios\" *ngIf=\"suppId !== 0\" [ngClass]=\"'show-' + toolbaropacity\" class=\"nobanner\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>商品列表</ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"listnav2 isfixed\" *ngIf=\"isshowtopnav\">\r\n    <app-hwcpsort *ngIf=\"ishw && togglelist\" [togglelist]=\"togglelist\"\r\n                  (sethwActivesortfn)=\"sethwActivesort($event)\" [pricearea]=\"pricearea\"\r\n                  (seleteend)=\"seleteend($event)\" [allAddress]=\"allAddress\" [changeAddress]=\"changeAddress\"\r\n                  (isSetshowbg)=\"isSetshowbg($event)\" [setCloseattr]=\"setCloseattr\" [tjcity]=\"tjcity\"\r\n                  [jtjyList]=\"jtjyList\" [suppid]=\"suppId\"></app-hwcpsort>\r\n\r\n    <app-goodssort *ngIf=\"!ishw && togglelist\" [suppid]=\"suppId\" [togglelist]=\"togglelist\"\r\n                   [isactivesortobj]=\"isactivesort\" (togglenavfn)=\"togglenav($event)\"></app-goodssort>\r\n  </div>\r\n</ion-header>\r\n<ion-backdrop *ngIf=\"setShow\" [visible]=\"true\" [stopPropagation]=\"false\"></ion-backdrop>\r\n\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\" >\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n       pullingIcon=\"arrow-dropdown\"\r\n       pullingText=\"Pull to refresh\"\r\n       refreshingSpinner=\"circles\"\r\n       refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"top\" *ngIf=\"bannerList && bannerList.length > 0\">\r\n    <img src=\"./assets/listbg.svg\" alt=\"\">\r\n    <div class=\"banner\" padding *ngIf=\"suppId === 0 && bannerList && bannerList.length > 0\">\r\n      <ion-slides pager=\"true\">\r\n        <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.href_url)\">\r\n          <img src=\"{{http.zdomain +'data/catflashimg/' + item.img_url}}\">\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n  <div class=\"gdfl\" *ngIf=\"childnav.length > 0\">\r\n    <app-newpagetitle [title]=\"'更多分类'\"></app-newpagetitle>\r\n    <div padding-start padding-end>\r\n      <ion-slides [options]=\"slideOptslv\">\r\n          <ion-slide *ngFor=\"let item of childnav\" (click)=\"goothercate(item.id)\">\r\n            <div class=\"item-box\">\r\n              <img [src]=\"item.catimg | imgsrc: http.zdomain + 'data/catthumb/'\" alt=\"\">\r\n              <span>{{item.name}}</span>\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n    </div>\r\n  </div>\r\n  <div class=\"rmtj\">\r\n      <app-newpagetitle [title]=\"'热门推荐'\"></app-newpagetitle>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\" *ngFor=\"let item of navlist;\">\r\n            <div class=\"box\" (click)=\"setAddress(item.toaddress)\">\r\n              <div class=\"title\">{{item.toaddress}}</div>\r\n              <span>已售{{item.count}}</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </div>\r\n  <!-- <ion-card class=\"tjnav\" *ngIf=\"childnav.length > 0\">\r\n    <ion-card-content>\r\n      <div class=\"card-title\">\r\n        <img src=\"./assets/fire.svg\" alt=\"\">更多分类\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\" *ngFor=\"let item of childnav\" size=\"4\" (click)=\"goothercate(item.id)\">\r\n            <img *ngIf=\"item.catimg\" [src]=\"item.catimg | imgsrc: http.zdomain\" alt=\"\">\r\n            <div *ngIf=\"!item.catimg\" class=\"title\">{{item.name}}</div>\r\n            {{item | json}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n  <!-- <ion-card class=\"tjnav\" *ngIf=\"suppId === 0 && ishw && navlist && navlist.length > 0\">\r\n    <ion-card-content>\r\n      <div class=\"card-title\">\r\n        <img src=\"./assets/fire.svg\" alt=\"\">热门地点推荐\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\" *ngFor=\"let item of navlist; let i = index;\" size=\"4\" (click)=\"setAddress(item.toaddress)\">\r\n            文本类型，先使用图片，后期需要再放开,还有css部分\r\n            <div class=\"title\">{{item.toaddress}}</div>\r\n            <span>已售{{item.count}}</span>\r\n              <img *ngIf=\"i == 0\" src=\"./assets/zrm.svg\" alt=\"\">\r\n            <img [src]=\"http.domain + item.image\" alt=\"\" style=\"width: 100%\">\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n\r\n  <div class=\"list-content\" padding [ngClass]=\"{hastop: (!navlist || navlist && navlist.length == 0) && ( bannerList && bannerList.length > 0)}\">\r\n    <app-pagetitle *ngIf=\"suppId === 0 && listTitle\" [myname]=\"listTitle\" [type]=\"true\"></app-pagetitle>\r\n    <div class=\"listnav isabsolute\">\r\n      <app-hwcpsort *ngIf=\"ishw && togglelist\" [togglelist]=\"togglelist\"\r\n                    (sethwActivesortfn)=\"sethwActivesort($event)\" [pricearea]=\"pricearea\"\r\n                    (seleteend)=\"seleteend($event)\" [allAddress]=\"allAddress\" [changeAddress]=\"changeAddress\"\r\n                    (isSetshowbg)=\"isSetshowbg($event)\" [setCloseattr]=\"setCloseattr\" [tjcity]=\"tjcity\"\r\n                    [jtjyList]=\"jtjyList\" [suppid]=\"suppId\"></app-hwcpsort>\r\n      <app-goodssort *ngIf=\"!ishw && togglelist\" [suppid]=\"suppId\" [togglelist]=\"togglelist\"\r\n                     [isactivesortobj]=\"isactivesort\" (togglenavfn)=\"togglenav($event)\"></app-goodssort>\r\n    </div>\r\n\r\n    <!--<div class=\"line\"></div>-->\r\n    <div *ngIf=\"dataList\">\r\n      <app-productlist *ngFor=\"let item of dataList\" [data]=\"item\" [ishw]=\"ishw\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n\r\n    <!--<ion-virtual-scroll [items]=\"dataList\" approxItemHeight=\"153px\">-->\r\n      <!--<div *virtualItem=\"let item\">-->\r\n        <!--<app-productlist [data]=\"item\" (open)=\"openpage($event)\" [imgtype]=\"1\"></app-productlist>-->\r\n      <!--</div>-->\r\n    <!--</ion-virtual-scroll>-->\r\n    <div *ngIf=\"!dataList\">\r\n      <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n      <ion-row>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      </ion-row>\r\n      <ion-list>\r\n\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"crescent\"\r\n       loadingText=\"加载更多...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n<ion-backdrop *ngIf=\"isshowbg\" [visible]=\"false\" [tappable]=\"true\" (ionBackdropTap)=\"closeDrop()\"></ion-backdrop>\r\n"

/***/ }),

/***/ "./src/app/pages/products/products.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 50px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center; }\n  .search-bar .right span {\n      display: inline-block;\n      flex: 1;\n      line-height: 18px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .right ion-icon {\n      font-size: 13px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n  --opacity: 0; }\n  ion-toolbar.nobanner {\n    --opacity: 1; }\n  .show-0 {\n  --opacity: 0; }\n  .show-1 {\n  --opacity: 0.01; }\n  .show-2 {\n  --opacity: 0.02; }\n  .show-3 {\n  --opacity: 0.03; }\n  .show-4 {\n  --opacity: 0.04; }\n  .show-5 {\n  --opacity: 0.05; }\n  .show-6 {\n  --opacity: 0.06; }\n  .show-7 {\n  --opacity: 0.07; }\n  .show-8 {\n  --opacity: 0.08; }\n  .show-9 {\n  --opacity: 0.09; }\n  .show-10 {\n  --opacity: 0.1; }\n  .show-11 {\n  --opacity: 0.11; }\n  .show-12 {\n  --opacity: 0.12; }\n  .show-13 {\n  --opacity: 0.13; }\n  .show-14 {\n  --opacity: 0.14; }\n  .show-15 {\n  --opacity: 0.15; }\n  .show-16 {\n  --opacity: 0.16; }\n  .show-17 {\n  --opacity: 0.17; }\n  .show-18 {\n  --opacity: 0.18; }\n  .show-19 {\n  --opacity: 0.19; }\n  .show-20 {\n  --opacity: 0.2; }\n  .show-21 {\n  --opacity: 0.21; }\n  .show-22 {\n  --opacity: 0.22; }\n  .show-23 {\n  --opacity: 0.23; }\n  .show-24 {\n  --opacity: 0.24; }\n  .show-25 {\n  --opacity: 0.25; }\n  .show-26 {\n  --opacity: 0.26; }\n  .show-27 {\n  --opacity: 0.27; }\n  .show-28 {\n  --opacity: 0.28; }\n  .show-29 {\n  --opacity: 0.29; }\n  .show-30 {\n  --opacity: 0.3; }\n  .show-31 {\n  --opacity: 0.31; }\n  .show-32 {\n  --opacity: 0.32; }\n  .show-33 {\n  --opacity: 0.33; }\n  .show-34 {\n  --opacity: 0.34; }\n  .show-35 {\n  --opacity: 0.35; }\n  .show-36 {\n  --opacity: 0.36; }\n  .show-37 {\n  --opacity: 0.37; }\n  .show-38 {\n  --opacity: 0.38; }\n  .show-39 {\n  --opacity: 0.39; }\n  .show-40 {\n  --opacity: 0.4; }\n  .show-41 {\n  --opacity: 0.41; }\n  .show-42 {\n  --opacity: 0.42; }\n  .show-43 {\n  --opacity: 0.43; }\n  .show-44 {\n  --opacity: 0.44; }\n  .show-45 {\n  --opacity: 0.45; }\n  .show-46 {\n  --opacity: 0.46; }\n  .show-47 {\n  --opacity: 0.47; }\n  .show-48 {\n  --opacity: 0.48; }\n  .show-49 {\n  --opacity: 0.49; }\n  .show-50 {\n  --opacity: 0.5; }\n  .show-51 {\n  --opacity: 0.51; }\n  .show-52 {\n  --opacity: 0.52; }\n  .show-53 {\n  --opacity: 0.53; }\n  .show-54 {\n  --opacity: 0.54; }\n  .show-55 {\n  --opacity: 0.55; }\n  .show-56 {\n  --opacity: 0.56; }\n  .show-57 {\n  --opacity: 0.57; }\n  .show-58 {\n  --opacity: 0.58; }\n  .show-59 {\n  --opacity: 0.59; }\n  .show-60 {\n  --opacity: 0.6; }\n  .show-61 {\n  --opacity: 0.61; }\n  .show-62 {\n  --opacity: 0.62; }\n  .show-63 {\n  --opacity: 0.63; }\n  .show-64 {\n  --opacity: 0.64; }\n  .show-65 {\n  --opacity: 0.65; }\n  .show-66 {\n  --opacity: 0.66; }\n  .show-67 {\n  --opacity: 0.67; }\n  .show-68 {\n  --opacity: 0.68; }\n  .show-69 {\n  --opacity: 0.69; }\n  .show-70 {\n  --opacity: 0.7; }\n  .show-71 {\n  --opacity: 0.71; }\n  .show-72 {\n  --opacity: 0.72; }\n  .show-73 {\n  --opacity: 0.73; }\n  .show-74 {\n  --opacity: 0.74; }\n  .show-75 {\n  --opacity: 0.75; }\n  .show-76 {\n  --opacity: 0.76; }\n  .show-77 {\n  --opacity: 0.77; }\n  .show-78 {\n  --opacity: 0.78; }\n  .show-79 {\n  --opacity: 0.79; }\n  .show-80 {\n  --opacity: 0.8; }\n  .show-81 {\n  --opacity: 0.81; }\n  .show-82 {\n  --opacity: 0.82; }\n  .show-83 {\n  --opacity: 0.83; }\n  .show-84 {\n  --opacity: 0.84; }\n  .show-85 {\n  --opacity: 0.85; }\n  .show-86 {\n  --opacity: 0.86; }\n  .show-87 {\n  --opacity: 0.87; }\n  .show-88 {\n  --opacity: 0.88; }\n  .show-89 {\n  --opacity: 0.89; }\n  .show-90 {\n  --opacity: 0.9; }\n  .show-91 {\n  --opacity: 0.91; }\n  .show-92 {\n  --opacity: 0.92; }\n  .show-93 {\n  --opacity: 0.93; }\n  .show-94 {\n  --opacity: 0.94; }\n  .show-95 {\n  --opacity: 0.95; }\n  .show-96 {\n  --opacity: 0.96; }\n  .show-97 {\n  --opacity: 0.97; }\n  .show-98 {\n  --opacity: 0.98; }\n  .show-99 {\n  --opacity: 0.99; }\n  .show-100 {\n  --opacity: 1; }\n  ion-content {\n  position: relative; }\n  .top {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden; }\n  .top .banner {\n    position: relative;\n    margin-top: -106px;\n    width: 100%; }\n  .top ion-slides {\n    --bullet-background-active: #fff; }\n  .issupplier {\n  height: calc(var(--ion-platform-margin-height));\n  overflow: hidden; }\n  ion-card {\n  margin-top: 30px; }\n  ion-card ion-card-content {\n    padding: 0; }\n  ion-card ion-card-content .card-title {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      line-height: 30px;\n      font-size: var(--ion-text);\n      color: var(--ion-color-danger);\n      background-color: #F5F2DE;\n      padding-left: 15px; }\n  ion-card ion-card-content .card-title img {\n        width: 12px;\n        margin-right: 5px; }\n  ion-card ion-row ion-col {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px solid var(--ion-color-light);\n    border-bottom: 1px solid var(--ion-color-light); }\n  ion-card ion-row ion-col:nth-of-type(3n) {\n      border-right: none; }\n  ion-card ion-row ion-col .title {\n      color: var(--ion-color-dark);\n      font-size: var(--ion-title); }\n  ion-card ion-row ion-col span {\n      font-size: var(--ion-sm-text); }\n  ion-card ion-row:first-of-type ion-col span {\n    margin-bottom: 5px; }\n  ion-card ion-row:last-of-type ion-col .title {\n    margin-top: 5px; }\n  ion-card {\n  padding-bottom: 0;\n  margin-bottom: 0; }\n  .list-content {\n  padding-top: 0; }\n  .tjnav ion-grid {\n  padding-top: 0; }\n  .tjnav .title {\n  font-weight: 600; }\n  .tjnav ion-col {\n  position: relative; }\n  .tjnav ion-col img {\n    width: 34px;\n    position: absolute;\n    top: 0;\n    right: 0; }\n  .listnav2 {\n  background-color: #fff;\n  z-index: 100;\n  width: 100%;\n  left: 0;\n  position: fixed;\n  top: var(--ion-platform-margin-height);\n  border-bottom: 1px solid var(--ion-color-light); }\n  .listnav2 .title {\n    border-bottom: 1px solid var(--ion-color-light); }\n  .listnav {\n  min-height: 37px; }\n  .listnav.isabsolute {\n    position: relative; }\n  .line {\n  height: 1px;\n  background-color: var(--ion-color-light); }\n  .item-box {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: #ccc;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative; }\n  .item-box::after {\n    content: '';\n    display: block;\n    padding-top: 100%; }\n  .item-box img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1; }\n  .item-box span {\n    font-size: var(--ion-text);\n    color: #fff;\n    position: relative;\n    z-index: 2;\n    font-family: \"PingFang SC\";\n    color: white;\n    line-height: 1.2;\n    margin-bottom: 10px; }\n  .rmtj .box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0px 0px 24px 0px rgba(238, 238, 238, 0.7);\n  padding: 10px 0; }\n  .rmtj .box .title {\n    font-size: var(--ion-title);\n    font-family: \"PingFang\";\n    color: #333333;\n    font-weight: bold;\n    line-height: 1.4; }\n  .rmtj .box span {\n    font-size: var(--ion-sm-text);\n    font-family: \"PingFang\";\n    color: #999999;\n    line-height: 1.75; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWUsRUFBQTtFQU5qQjtJQVFJLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFidkI7TUFlTSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFoQnRCO0lBb0JJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7RUF6QnZCO01BMkJNLHFCQUFxQjtNQUNyQixPQUFPO01BQ1AsaUJBQWlCLEVBQUE7RUE3QnZCO01BZ0NNLFdBQVcsRUFBQTtFQWhDakI7TUFtQ00sZUFBZSxFQUFBO0VBbkNyQjtJQXVDSSxvQkFBb0I7SUFDcEIsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBR3RCLHFCQUFxQjtJQUdyQixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7RUFsRHRCO01Bb0RNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsMEJBQTBCO01BQzFCLGlCQUFpQixFQUFBO0VBMUR2QjtRQTREUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBSzFCO0VBQ0UsOEZBQWE7RUFDYixZQUFVLEVBQUE7RUFGWjtJQUlJLFlBQVUsRUFBQTtFQUlaO0VBQWdCLFlBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixZQUFVLEVBQUE7RUFFNUI7RUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtFQUVFLDBDQUEwQztFQUMxQyxnQkFBZ0IsRUFBQTtFQUhsQjtJQUtJLGtCQUFrQjtJQUVsQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0VBUmY7SUFXSSxnQ0FBMkIsRUFBQTtFQU8vQjtFQUNFLCtDQUErQztFQUUvQyxnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBR0ksVUFBVSxFQUFBO0VBSGQ7TUFLTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLDBCQUEwQjtNQUMxQiw4QkFBOEI7TUFDOUIseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFBO0VBYnhCO1FBZVEsV0FBVztRQUNYLGlCQUFpQixFQUFBO0VBaEJ6QjtJQXNCTSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLCtDQUErQyxFQUFBO0VBM0JyRDtNQTZCUSxrQkFBa0IsRUFBQTtFQTdCMUI7TUFnQ1EsNEJBQTRCO01BQzVCLDJCQUEyQixFQUFBO0VBakNuQztNQW9DUSw2QkFBNkIsRUFBQTtFQXBDckM7SUEwQ1Usa0JBQWtCLEVBQUE7RUExQzVCO0lBaURVLGVBQWUsRUFBQTtFQU16QjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLGNBQWMsRUFBQTtFQUVoQjtFQUVJLGNBQWMsRUFBQTtFQUZsQjtFQUtJLGdCQUFnQixFQUFBO0VBTHBCO0VBUUksa0JBQWtCLEVBQUE7RUFSdEI7SUFVTSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRLEVBQUE7RUFLZDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUVYLE9BQU87RUFDUCxlQUFlO0VBQ2Ysc0NBQXNDO0VBRXRDLCtDQUErQyxFQUFBO0VBVGpEO0lBV0ksK0NBQStDLEVBQUE7RUFJbkQ7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUdJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0UsV0FBVztFQUNYLHdDQUF3QyxFQUFBO0VBRTFDO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQVRwQjtJQVdJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUFickI7SUFnQkksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFyQmQ7SUF3QkksMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixZQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFHdkI7RUFFSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUFvQztFQUNwQyxxREFBcUQ7RUFDckQsZUFBZSxFQUFBO0VBVG5CO0lBV00sMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixjQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFmdEI7SUFrQk0sNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixjQUF5QjtJQUN6QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IHZhcigtLWlvbi1zdGF0dXNiYXItbGVmdCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1pY29uLWJpZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gIC0tb3BhY2l0eTogMDtcclxuICAmLm5vYmFubmVyIHtcclxuICAgIC0tb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAxMDAge1xyXG4gIC5zaG93LSN7JGl9IHsgICAtLW9wYWNpdHk6ICN7JGkgLyAxMDB9OyB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udG9wIHtcclxuICAvL21hcmdpbi10b3A6IC00NHB4O1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4tdG9wKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC5iYW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy90b3A6IC02OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7XHJcbiAgfVxyXG59XHJcbi8vLmhhc3RvcCB7XHJcbi8vICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4vL31cclxuXHJcbi5pc3N1cHBsaWVyIHtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi1oZWlnaHQpKTtcclxuICAvL3RyYW5zbGF0ZVkoY2FsYygxMHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDBweCkpKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjJERTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1yb3cge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgJjpudGgtb2YtdHlwZSgzbikge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmxpc3QtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuLnRqbmF2IHtcclxuICBpb24tZ3JpZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIGlvbi1jb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saXN0bmF2MiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy93aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLWhlaWdodCk7XHJcbiAgLy9sZWZ0OiBjYWxjKDIwcHggLSA0cHgpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIC50aXRsZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgfVxyXG59XHJcbi5saXN0bmF2IHtcclxuICBtaW4taGVpZ2h0OiAzN3B4O1xyXG4gICYuaXNhYnNvbHV0ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcbi5saW5lIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbi5pdGVtLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMCU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUGluZ0ZhbmcgU0NcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuLnJtdGoge1xyXG4gIC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyNHB4IDBweCByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBpbmdGYW5nXCI7XHJcbiAgICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBmb250LWZhbWlseTogXCJQaW5nRmFuZ1wiO1xyXG4gICAgICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/supplierlist.service */ "./src/app/services/supplierlist.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-27 18:05:04
 * @Description: file content
 */











// import { GetshopService } from '../../services/getshop.service';
var ProductsPage = /** @class */ (function () {
    function ProductsPage(nav, route, http, activeroute, shopservice, popoverController, shopnav, productslist, topage, el, modalController, changeDetectorRef, supplierfn) {
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
        this.changeDetectorRef = changeDetectorRef;
        this.supplierfn = supplierfn;
    }
    ProductsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('加载完了');
        this.slideOptslv = {
            // slidesOffsetBefore : 50,
            slidesPerView: 4.2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            pagination: ''
            // slidesOffsetAfter : 100,
        };
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
    ProductsPage.prototype.setDefualsort = function () {
        this.getObj.brand = 0;
        this.getObj.price_min = 0;
        this.getObj.price_max = 0;
        this.getObj.filter_attr = 0;
        this.getObj.page = 1;
        this.getObj.sort = '';
        this.getObj.order = '';
        this.getObj.other_has = 1;
        this.isactivesort.id = this.togglelist[0].id;
        this.isactivesort.sortname = this.togglelist[0].type || ''; // 排序方式
        this.isactivesort.sort = ''; // 排序顺序
    };
    ProductsPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj, data, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Begin async operation');
                        this.isshowbg = false;
                        this.setdefalt();
                        obj = {
                            last: this.last,
                            amount: this.amount,
                        };
                        this.last = this.amount;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.gethttp(obj)];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        this.dataList = data;
                        // this.dataList.push(...data);
                        if (event) {
                            this.closeDrop();
                            event.target.complete();
                            console.log('执行了');
                        }
                        else {
                            this.changeDetectorRef.detectChanges();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        if (event) {
                            event.target.complete();
                            console.log('执行了');
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
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
                    id: params['listid'],
                    category: params['listid']
                };
            }
            if (_this.suppId == 0) {
                var ishwobj = _this.shopnav.ishw(params['listid']);
                _this.ishw = ishwobj['ishw'];
                _this.childnav = ishwobj['childarr'];
            }
            else {
                _this.supplierfn.getData(_this.suppId).then(function (res) {
                    console.log(res);
                    if (res.ishw == 1) {
                        _this.ishw = true;
                    }
                }).catch(function (err2) { });
            }
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
        }
        this.getBanner();
        this.getTj();
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
            console.log(res);
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
        if (this.suppId == 0) {
            this.productslist.getNavlist(this.getObj.category).then(function (res) {
                // this.bannerList = res;
                console.log(res);
                _this.setTj(res);
            }).catch(function (err) { });
        }
        else {
            this.http.getData(this.http.getProductListtj, { id: this.getObj.category, suppid: this.suppId }).subscribe(function (res) {
                console.log(res);
                _this.setTj(res.data);
                // this.newGoods = data['new_goods'];
            }, function (err) {
                console.log(err);
            });
        }
    };
    ProductsPage.prototype.setTj = function (res) {
        var _this = this;
        res = Object.assign({}, res);
        console.log(res);
        this.navlist = res['banner'];
        // this.price_grade = res['price_grade']; 改为下方设置 this.pricearea
        this.tjcity = res['tjcity'];
        var arr = Array.from(res['jtjy']);
        arr.unshift({ 'attr_value': '全部', active: true });
        this.jtjyList = arr;
        if (res['category'] && res['category']['grade_define']) {
            var item = res['category']['grade_define'];
            var pricearr = void 0;
            if (item.includes(',')) {
                pricearr = item.split(',');
            }
            else if (item.includes('，')) {
                pricearr = item.split('，');
            }
            if (pricearr && pricearr.length > 0) {
                this.pricearea = [{
                        end: 0,
                        price_range: '全部',
                        selected: 1,
                        start: 0
                    }];
                pricearr.forEach(function (element) {
                    var start;
                    var end;
                    if (element.includes('-')) {
                        var arr_1 = element.split('-');
                        start = arr_1[0];
                        end = arr_1[1];
                    }
                    else if (element.includes('以上')) {
                        var arr_2 = element.split('以');
                        start = arr_2[0];
                        end = 999999999;
                    }
                    var obj = {
                        end: end,
                        price_range: element,
                        selected: 0,
                        start: start,
                    };
                    _this.pricearea.push(obj);
                });
            }
        }
        // pricearea
        // if (this.jtjyList) {
        //   this.jtjyList.unshift({'attr_value': '全部', active: true})
        // }
        var carr = [];
        var contryarr = [];
        var addressarr = res['address'];
        addressarr.map(function (res) {
            if (!contryarr.includes(res['tocountry']['id'])) {
                contryarr.push(res['tocountry']['id']);
                carr.push({ name: res['tocountry']['name'], arr: [] });
            }
            for (var i = 0; i < carr.length; i++) {
                if (carr[i]['name'] == res['tocountry']['name']) {
                    carr[i].arr.push({ name: res['tocity']['name'], id: res['tocity']['id'], active: false });
                    break;
                }
            }
        });
        console.log(carr);
        this.allAddress = carr;
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
    ProductsPage.prototype.seleteend = function (data) {
        this.getObj.time_start = data.start || '';
        this.getObj.jtjy = data.time || '';
        this.getObj.end_time = data.end || '';
        this.getObj.price_min = data.startprice || 0;
        this.getObj.price_max = data.endprice || 0;
        this.getObj.address = data.address || '';
        this.doRefresh();
    };
    ProductsPage.prototype.setAddress = function (name) {
        this.getObj.address = name;
        this.changeAddress = !this.changeAddress;
        this.doRefresh();
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
    ProductsPage.prototype.isSetshowbg = function (bool) {
        console.log(bool);
        this.isshowbg = bool;
    };
    ProductsPage.prototype.closeDrop = function () {
        this.isshowbg = false;
        this.setCloseattr = !this.setCloseattr;
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
            _services_topage_service__WEBPACK_IMPORTED_MODULE_9__["TopageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_11__["SupplierlistService"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module.js.map