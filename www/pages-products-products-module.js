(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-08-03 14:52:31\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-27 18:02:13\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar *ngIf=\"suppId === 0\" mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\" [ngClass]=\"{nobanner: !bannerList || bannerList && bannerList.length == 0}\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\r\n      </div>\r\n      <div class=\"center\" (click)=\"searchModel()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span>{{'请输入搜索内容'}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"presentPopover($event)\" *ngIf=\"suppId === 0 && active && ishw && active.navName\">\r\n        <span>{{active.navName}}</span> <ion-icon name=\"arrow-dropdown-circle\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n  <!-- <ion-toolbar mode=\"ios\" *ngIf=\"suppId !== 0\" [ngClass]=\"'show-' + toolbaropacity\" [ngClass]=\"{nobanner: !bannerList || bannerList && bannerList.length == 0}\"> -->\r\n  <ion-toolbar mode=\"ios\" *ngIf=\"suppId !== 0\" [ngClass]=\"'show-' + toolbaropacity\" class=\"nobanner\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>商品列表</ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"listnav2 isfixed\" *ngIf=\"isshowtopnav\">\r\n    <app-hwcpsort *ngIf=\"ishw && togglelist\" [togglelist]=\"togglelist\"\r\n                  (sethwActivesortfn)=\"sethwActivesort($event)\" [pricearea]=\"pricearea\"\r\n                  (seleteend)=\"seleteend($event)\" [allAddress]=\"allAddress\" [changeAddress]=\"changeAddress\"\r\n                  (isSetshowbg)=\"isSetshowbg($event)\" [setCloseattr]=\"setCloseattr\" [tjcity]=\"tjcity\"\r\n                  [jtjyList]=\"jtjyList\" [suppid]=\"suppId\"></app-hwcpsort>\r\n\r\n    <app-goodssort *ngIf=\"!ishw && togglelist\" [suppid]=\"suppId\" [togglelist]=\"togglelist\"\r\n                   [isactivesortobj]=\"isactivesort\" (togglenavfn)=\"togglenav($event)\"></app-goodssort>\r\n  </div>\r\n</ion-header>\r\n<ion-backdrop *ngIf=\"setShow\" [visible]=\"true\" [stopPropagation]=\"false\"></ion-backdrop>\r\n\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\" >\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n       pullingIcon=\"arrow-dropdown\"\r\n       pullingText=\"Pull to refresh\"\r\n       refreshingSpinner=\"circles\"\r\n       refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"top\" *ngIf=\"bannerList && bannerList.length > 0\">\r\n    <img src=\"./assets/listbg.svg\" alt=\"\">\r\n    <div class=\"banner\" padding *ngIf=\"suppId === 0 && bannerList && bannerList.length > 0\">\r\n      <ion-slides pager=\"true\">\r\n        <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.href_url)\">\r\n          <img src=\"{{http.zdomain +'data/catflashimg/' + item.img_url}}\">\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n  <div class=\"gdfl\" *ngIf=\"childnav.length > 0\">\r\n    <app-newpagetitle [title]=\"'更多分类'\"></app-newpagetitle>\r\n    <div padding-start padding-end>\r\n      <ion-slides [options]=\"slideOptslv\">\r\n          <ion-slide *ngFor=\"let item of childnav\" (click)=\"goothercate(item.id)\">\r\n            <div class=\"item-box\">\r\n              <img [src]=\"item.catimg | imgsrc: http.zdomain + 'data/catthumb/'\" alt=\"\">\r\n              <span>{{item.name}}</span>\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n    </div>\r\n  </div>\r\n  <div class=\"rmtj\">\r\n      <app-newpagetitle [title]=\"'热门推荐'\"></app-newpagetitle>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\" *ngFor=\"let item of navlist;\">\r\n            <div class=\"box\" (click)=\"setAddress(item.toaddress)\">\r\n              <div class=\"title\">{{item.toaddress}}</div>\r\n              <span>已售{{item.count}}</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </div>\r\n  <!-- <ion-card class=\"tjnav\" *ngIf=\"childnav.length > 0\">\r\n    <ion-card-content>\r\n      <div class=\"card-title\">\r\n        <img src=\"./assets/fire.svg\" alt=\"\">更多分类\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\" *ngFor=\"let item of childnav\" size=\"4\" (click)=\"goothercate(item.id)\">\r\n            <img *ngIf=\"item.catimg\" [src]=\"item.catimg | imgsrc: http.zdomain\" alt=\"\">\r\n            <div *ngIf=\"!item.catimg\" class=\"title\">{{item.name}}</div>\r\n            {{item | json}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n  <!-- <ion-card class=\"tjnav\" *ngIf=\"suppId === 0 && ishw && navlist && navlist.length > 0\">\r\n    <ion-card-content>\r\n      <div class=\"card-title\">\r\n        <img src=\"./assets/fire.svg\" alt=\"\">热门地点推荐\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\" *ngFor=\"let item of navlist; let i = index;\" size=\"4\" (click)=\"setAddress(item.toaddress)\">\r\n            文本类型，先使用图片，后期需要再放开,还有css部分\r\n            <div class=\"title\">{{item.toaddress}}</div>\r\n            <span>已售{{item.count}}</span>\r\n              <img *ngIf=\"i == 0\" src=\"./assets/zrm.svg\" alt=\"\">\r\n            <img [src]=\"http.domain + item.image\" alt=\"\" style=\"width: 100%\">\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n\r\n  <div class=\"list-content\" padding [ngClass]=\"{hastop: (!navlist || navlist && navlist.length == 0) && ( bannerList && bannerList.length > 0)}\">\r\n    <app-pagetitle *ngIf=\"suppId === 0 && listTitle\" [myname]=\"listTitle\" [type]=\"true\"></app-pagetitle>\r\n    <div class=\"listnav isabsolute\">\r\n      <app-hwcpsort *ngIf=\"ishw && togglelist\" [togglelist]=\"togglelist\"\r\n                    (sethwActivesortfn)=\"sethwActivesort($event)\" [pricearea]=\"pricearea\"\r\n                    (seleteend)=\"seleteend($event)\" [allAddress]=\"allAddress\" [changeAddress]=\"changeAddress\"\r\n                    (isSetshowbg)=\"isSetshowbg($event)\" [setCloseattr]=\"setCloseattr\" [tjcity]=\"tjcity\"\r\n                    [jtjyList]=\"jtjyList\" [suppid]=\"suppId\"></app-hwcpsort>\r\n      <app-goodssort *ngIf=\"!ishw && togglelist\" [suppid]=\"suppId\" [togglelist]=\"togglelist\"\r\n                     [isactivesortobj]=\"isactivesort\" (togglenavfn)=\"togglenav($event)\"></app-goodssort>\r\n    </div>\r\n\r\n    <!--<div class=\"line\"></div>-->\r\n    <div *ngIf=\"dataList\">\r\n      <app-productlist *ngFor=\"let item of dataList\" [data]=\"item\" [ishw]=\"ishw\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n\r\n    <!--<ion-virtual-scroll [items]=\"dataList\" approxItemHeight=\"153px\">-->\r\n      <!--<div *virtualItem=\"let item\">-->\r\n        <!--<app-productlist [data]=\"item\" (open)=\"openpage($event)\" [imgtype]=\"1\"></app-productlist>-->\r\n      <!--</div>-->\r\n    <!--</ion-virtual-scroll>-->\r\n    <div *ngIf=\"!dataList\">\r\n      <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n      <ion-row>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n        <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      </ion-row>\r\n      <ion-list>\r\n\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"crescent\"\r\n       loadingText=\"加载更多...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n<ion-backdrop *ngIf=\"isshowbg\" [visible]=\"false\" [tappable]=\"true\" (ionBackdropTap)=\"closeDrop()\"></ion-backdrop>\r\n");

/***/ }),

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

/***/ "./src/app/pages/products/products.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n}\n.search-bar .left {\n  width: var(--ion-statusbar-left);\n  font-size: var(--ion-icon-big);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.search-bar .left img {\n  width: 12px;\n  margin-left: 5px;\n}\n.search-bar .right {\n  width: 50px;\n  font-size: var(--ion-title);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.search-bar .right span {\n  display: inline-block;\n  flex: 1;\n  line-height: 18px;\n}\n.search-bar .right img {\n  width: 19px;\n}\n.search-bar .right ion-icon {\n  font-size: 13px;\n}\n.search-bar .center {\n  display: -webkit-box;\n  flex: 1;\n  margin: 0 15px;\n  height: 27px;\n  background-color: #fff;\n  border-radius: 13.5px;\n  box-sizing: border-box;\n  padding-left: 10px;\n}\n.search-bar .center .search-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--ion-color-medium);\n  font-size: var(--ion-text);\n  line-height: 27px;\n}\n.search-bar .center .search-box img {\n  width: 17px;\n  height: 20px;\n  margin-right: 10px;\n}\nion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n  --opacity: 0;\n}\nion-toolbar.nobanner {\n  --opacity: 1;\n}\n.show-0 {\n  --opacity: 0;\n}\n.show-1 {\n  --opacity: 0.01;\n}\n.show-2 {\n  --opacity: 0.02;\n}\n.show-3 {\n  --opacity: 0.03;\n}\n.show-4 {\n  --opacity: 0.04;\n}\n.show-5 {\n  --opacity: 0.05;\n}\n.show-6 {\n  --opacity: 0.06;\n}\n.show-7 {\n  --opacity: 0.07;\n}\n.show-8 {\n  --opacity: 0.08;\n}\n.show-9 {\n  --opacity: 0.09;\n}\n.show-10 {\n  --opacity: 0.1;\n}\n.show-11 {\n  --opacity: 0.11;\n}\n.show-12 {\n  --opacity: 0.12;\n}\n.show-13 {\n  --opacity: 0.13;\n}\n.show-14 {\n  --opacity: 0.14;\n}\n.show-15 {\n  --opacity: 0.15;\n}\n.show-16 {\n  --opacity: 0.16;\n}\n.show-17 {\n  --opacity: 0.17;\n}\n.show-18 {\n  --opacity: 0.18;\n}\n.show-19 {\n  --opacity: 0.19;\n}\n.show-20 {\n  --opacity: 0.2;\n}\n.show-21 {\n  --opacity: 0.21;\n}\n.show-22 {\n  --opacity: 0.22;\n}\n.show-23 {\n  --opacity: 0.23;\n}\n.show-24 {\n  --opacity: 0.24;\n}\n.show-25 {\n  --opacity: 0.25;\n}\n.show-26 {\n  --opacity: 0.26;\n}\n.show-27 {\n  --opacity: 0.27;\n}\n.show-28 {\n  --opacity: 0.28;\n}\n.show-29 {\n  --opacity: 0.29;\n}\n.show-30 {\n  --opacity: 0.3;\n}\n.show-31 {\n  --opacity: 0.31;\n}\n.show-32 {\n  --opacity: 0.32;\n}\n.show-33 {\n  --opacity: 0.33;\n}\n.show-34 {\n  --opacity: 0.34;\n}\n.show-35 {\n  --opacity: 0.35;\n}\n.show-36 {\n  --opacity: 0.36;\n}\n.show-37 {\n  --opacity: 0.37;\n}\n.show-38 {\n  --opacity: 0.38;\n}\n.show-39 {\n  --opacity: 0.39;\n}\n.show-40 {\n  --opacity: 0.4;\n}\n.show-41 {\n  --opacity: 0.41;\n}\n.show-42 {\n  --opacity: 0.42;\n}\n.show-43 {\n  --opacity: 0.43;\n}\n.show-44 {\n  --opacity: 0.44;\n}\n.show-45 {\n  --opacity: 0.45;\n}\n.show-46 {\n  --opacity: 0.46;\n}\n.show-47 {\n  --opacity: 0.47;\n}\n.show-48 {\n  --opacity: 0.48;\n}\n.show-49 {\n  --opacity: 0.49;\n}\n.show-50 {\n  --opacity: 0.5;\n}\n.show-51 {\n  --opacity: 0.51;\n}\n.show-52 {\n  --opacity: 0.52;\n}\n.show-53 {\n  --opacity: 0.53;\n}\n.show-54 {\n  --opacity: 0.54;\n}\n.show-55 {\n  --opacity: 0.55;\n}\n.show-56 {\n  --opacity: 0.56;\n}\n.show-57 {\n  --opacity: 0.57;\n}\n.show-58 {\n  --opacity: 0.58;\n}\n.show-59 {\n  --opacity: 0.59;\n}\n.show-60 {\n  --opacity: 0.6;\n}\n.show-61 {\n  --opacity: 0.61;\n}\n.show-62 {\n  --opacity: 0.62;\n}\n.show-63 {\n  --opacity: 0.63;\n}\n.show-64 {\n  --opacity: 0.64;\n}\n.show-65 {\n  --opacity: 0.65;\n}\n.show-66 {\n  --opacity: 0.66;\n}\n.show-67 {\n  --opacity: 0.67;\n}\n.show-68 {\n  --opacity: 0.68;\n}\n.show-69 {\n  --opacity: 0.69;\n}\n.show-70 {\n  --opacity: 0.7;\n}\n.show-71 {\n  --opacity: 0.71;\n}\n.show-72 {\n  --opacity: 0.72;\n}\n.show-73 {\n  --opacity: 0.73;\n}\n.show-74 {\n  --opacity: 0.74;\n}\n.show-75 {\n  --opacity: 0.75;\n}\n.show-76 {\n  --opacity: 0.76;\n}\n.show-77 {\n  --opacity: 0.77;\n}\n.show-78 {\n  --opacity: 0.78;\n}\n.show-79 {\n  --opacity: 0.79;\n}\n.show-80 {\n  --opacity: 0.8;\n}\n.show-81 {\n  --opacity: 0.81;\n}\n.show-82 {\n  --opacity: 0.82;\n}\n.show-83 {\n  --opacity: 0.83;\n}\n.show-84 {\n  --opacity: 0.84;\n}\n.show-85 {\n  --opacity: 0.85;\n}\n.show-86 {\n  --opacity: 0.86;\n}\n.show-87 {\n  --opacity: 0.87;\n}\n.show-88 {\n  --opacity: 0.88;\n}\n.show-89 {\n  --opacity: 0.89;\n}\n.show-90 {\n  --opacity: 0.9;\n}\n.show-91 {\n  --opacity: 0.91;\n}\n.show-92 {\n  --opacity: 0.92;\n}\n.show-93 {\n  --opacity: 0.93;\n}\n.show-94 {\n  --opacity: 0.94;\n}\n.show-95 {\n  --opacity: 0.95;\n}\n.show-96 {\n  --opacity: 0.96;\n}\n.show-97 {\n  --opacity: 0.97;\n}\n.show-98 {\n  --opacity: 0.98;\n}\n.show-99 {\n  --opacity: 0.99;\n}\n.show-100 {\n  --opacity: 1;\n}\nion-content {\n  position: relative;\n}\n.top {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden;\n}\n.top .banner {\n  position: relative;\n  margin-top: -106px;\n  width: 100%;\n}\n.top ion-slides {\n  --bullet-background-active: #fff;\n}\n.issupplier {\n  height: calc(var(--ion-platform-margin-height));\n  overflow: hidden;\n}\nion-card {\n  margin-top: 30px;\n}\nion-card ion-card-content {\n  padding: 0;\n}\nion-card ion-card-content .card-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  line-height: 30px;\n  font-size: var(--ion-text);\n  color: var(--ion-color-danger);\n  background-color: #F5F2DE;\n  padding-left: 15px;\n}\nion-card ion-card-content .card-title img {\n  width: 12px;\n  margin-right: 5px;\n}\nion-card ion-row ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid var(--ion-color-light);\n  border-bottom: 1px solid var(--ion-color-light);\n}\nion-card ion-row ion-col:nth-of-type(3n) {\n  border-right: none;\n}\nion-card ion-row ion-col .title {\n  color: var(--ion-color-dark);\n  font-size: var(--ion-title);\n}\nion-card ion-row ion-col span {\n  font-size: var(--ion-sm-text);\n}\nion-card ion-row:first-of-type ion-col span {\n  margin-bottom: 5px;\n}\nion-card ion-row:last-of-type ion-col .title {\n  margin-top: 5px;\n}\nion-card {\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.list-content {\n  padding-top: 0;\n}\n.tjnav ion-grid {\n  padding-top: 0;\n}\n.tjnav .title {\n  font-weight: 600;\n}\n.tjnav ion-col {\n  position: relative;\n}\n.tjnav ion-col img {\n  width: 34px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.listnav2 {\n  background-color: #fff;\n  z-index: 100;\n  width: 100%;\n  left: 0;\n  position: fixed;\n  top: var(--ion-platform-margin-height);\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.listnav2 .title {\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.listnav {\n  min-height: 37px;\n}\n.listnav.isabsolute {\n  position: relative;\n}\n.line {\n  height: 1px;\n  background-color: var(--ion-color-light);\n}\n.item-box {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: #ccc;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n}\n.item-box::after {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n.item-box img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.item-box span {\n  font-size: var(--ion-text);\n  color: #fff;\n  position: relative;\n  z-index: 2;\n  font-family: \"PingFang SC\";\n  color: white;\n  line-height: 1.2;\n  margin-bottom: 10px;\n}\n.rmtj .box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0px 0px 24px 0px rgba(238, 238, 238, 0.7);\n  padding: 10px 0;\n}\n.rmtj .box .title {\n  font-size: var(--ion-title);\n  font-family: \"PingFang\";\n  color: #333333;\n  font-weight: bold;\n  line-height: 1.4;\n}\n.rmtj .box span {\n  font-size: var(--ion-sm-text);\n  font-family: \"PingFang\";\n  color: #999999;\n  line-height: 1.75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBREFFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQ0dOO0FEREk7RUFDRSxXQUFBO0FDR047QURESTtFQUNFLGVBQUE7QUNHTjtBREFFO0VBQ0Usb0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBR0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDR047QURGTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNJUjtBRENBO0VBQ0UsOEZBQUE7RUFDQSxZQUFBO0FDRUY7QURERTtFQUNFLFlBQUE7QUNHSjtBRENFO0VBQWdCLFlBQUE7QUNHbEI7QURIRTtFQUFnQixlQUFBO0FDT2xCO0FEUEU7RUFBZ0IsZUFBQTtBQ1dsQjtBRFhFO0VBQWdCLGVBQUE7QUNlbEI7QURmRTtFQUFnQixlQUFBO0FDbUJsQjtBRG5CRTtFQUFnQixlQUFBO0FDdUJsQjtBRHZCRTtFQUFnQixlQUFBO0FDMkJsQjtBRDNCRTtFQUFnQixlQUFBO0FDK0JsQjtBRC9CRTtFQUFnQixlQUFBO0FDbUNsQjtBRG5DRTtFQUFnQixlQUFBO0FDdUNsQjtBRHZDRTtFQUFnQixjQUFBO0FDMkNsQjtBRDNDRTtFQUFnQixlQUFBO0FDK0NsQjtBRC9DRTtFQUFnQixlQUFBO0FDbURsQjtBRG5ERTtFQUFnQixlQUFBO0FDdURsQjtBRHZERTtFQUFnQixlQUFBO0FDMkRsQjtBRDNERTtFQUFnQixlQUFBO0FDK0RsQjtBRC9ERTtFQUFnQixlQUFBO0FDbUVsQjtBRG5FRTtFQUFnQixlQUFBO0FDdUVsQjtBRHZFRTtFQUFnQixlQUFBO0FDMkVsQjtBRDNFRTtFQUFnQixlQUFBO0FDK0VsQjtBRC9FRTtFQUFnQixjQUFBO0FDbUZsQjtBRG5GRTtFQUFnQixlQUFBO0FDdUZsQjtBRHZGRTtFQUFnQixlQUFBO0FDMkZsQjtBRDNGRTtFQUFnQixlQUFBO0FDK0ZsQjtBRC9GRTtFQUFnQixlQUFBO0FDbUdsQjtBRG5HRTtFQUFnQixlQUFBO0FDdUdsQjtBRHZHRTtFQUFnQixlQUFBO0FDMkdsQjtBRDNHRTtFQUFnQixlQUFBO0FDK0dsQjtBRC9HRTtFQUFnQixlQUFBO0FDbUhsQjtBRG5IRTtFQUFnQixlQUFBO0FDdUhsQjtBRHZIRTtFQUFnQixjQUFBO0FDMkhsQjtBRDNIRTtFQUFnQixlQUFBO0FDK0hsQjtBRC9IRTtFQUFnQixlQUFBO0FDbUlsQjtBRG5JRTtFQUFnQixlQUFBO0FDdUlsQjtBRHZJRTtFQUFnQixlQUFBO0FDMklsQjtBRDNJRTtFQUFnQixlQUFBO0FDK0lsQjtBRC9JRTtFQUFnQixlQUFBO0FDbUpsQjtBRG5KRTtFQUFnQixlQUFBO0FDdUpsQjtBRHZKRTtFQUFnQixlQUFBO0FDMkpsQjtBRDNKRTtFQUFnQixlQUFBO0FDK0psQjtBRC9KRTtFQUFnQixjQUFBO0FDbUtsQjtBRG5LRTtFQUFnQixlQUFBO0FDdUtsQjtBRHZLRTtFQUFnQixlQUFBO0FDMktsQjtBRDNLRTtFQUFnQixlQUFBO0FDK0tsQjtBRC9LRTtFQUFnQixlQUFBO0FDbUxsQjtBRG5MRTtFQUFnQixlQUFBO0FDdUxsQjtBRHZMRTtFQUFnQixlQUFBO0FDMkxsQjtBRDNMRTtFQUFnQixlQUFBO0FDK0xsQjtBRC9MRTtFQUFnQixlQUFBO0FDbU1sQjtBRG5NRTtFQUFnQixlQUFBO0FDdU1sQjtBRHZNRTtFQUFnQixjQUFBO0FDMk1sQjtBRDNNRTtFQUFnQixlQUFBO0FDK01sQjtBRC9NRTtFQUFnQixlQUFBO0FDbU5sQjtBRG5ORTtFQUFnQixlQUFBO0FDdU5sQjtBRHZORTtFQUFnQixlQUFBO0FDMk5sQjtBRDNORTtFQUFnQixlQUFBO0FDK05sQjtBRC9ORTtFQUFnQixlQUFBO0FDbU9sQjtBRG5PRTtFQUFnQixlQUFBO0FDdU9sQjtBRHZPRTtFQUFnQixlQUFBO0FDMk9sQjtBRDNPRTtFQUFnQixlQUFBO0FDK09sQjtBRC9PRTtFQUFnQixjQUFBO0FDbVBsQjtBRG5QRTtFQUFnQixlQUFBO0FDdVBsQjtBRHZQRTtFQUFnQixlQUFBO0FDMlBsQjtBRDNQRTtFQUFnQixlQUFBO0FDK1BsQjtBRC9QRTtFQUFnQixlQUFBO0FDbVFsQjtBRG5RRTtFQUFnQixlQUFBO0FDdVFsQjtBRHZRRTtFQUFnQixlQUFBO0FDMlFsQjtBRDNRRTtFQUFnQixlQUFBO0FDK1FsQjtBRC9RRTtFQUFnQixlQUFBO0FDbVJsQjtBRG5SRTtFQUFnQixlQUFBO0FDdVJsQjtBRHZSRTtFQUFnQixjQUFBO0FDMlJsQjtBRDNSRTtFQUFnQixlQUFBO0FDK1JsQjtBRC9SRTtFQUFnQixlQUFBO0FDbVNsQjtBRG5TRTtFQUFnQixlQUFBO0FDdVNsQjtBRHZTRTtFQUFnQixlQUFBO0FDMlNsQjtBRDNTRTtFQUFnQixlQUFBO0FDK1NsQjtBRC9TRTtFQUFnQixlQUFBO0FDbVRsQjtBRG5URTtFQUFnQixlQUFBO0FDdVRsQjtBRHZURTtFQUFnQixlQUFBO0FDMlRsQjtBRDNURTtFQUFnQixlQUFBO0FDK1RsQjtBRC9URTtFQUFnQixjQUFBO0FDbVVsQjtBRG5VRTtFQUFnQixlQUFBO0FDdVVsQjtBRHZVRTtFQUFnQixlQUFBO0FDMlVsQjtBRDNVRTtFQUFnQixlQUFBO0FDK1VsQjtBRC9VRTtFQUFnQixlQUFBO0FDbVZsQjtBRG5WRTtFQUFnQixlQUFBO0FDdVZsQjtBRHZWRTtFQUFnQixlQUFBO0FDMlZsQjtBRDNWRTtFQUFnQixlQUFBO0FDK1ZsQjtBRC9WRTtFQUFnQixlQUFBO0FDbVdsQjtBRG5XRTtFQUFnQixlQUFBO0FDdVdsQjtBRHZXRTtFQUFnQixjQUFBO0FDMldsQjtBRDNXRTtFQUFnQixlQUFBO0FDK1dsQjtBRC9XRTtFQUFnQixlQUFBO0FDbVhsQjtBRG5YRTtFQUFnQixlQUFBO0FDdVhsQjtBRHZYRTtFQUFnQixlQUFBO0FDMlhsQjtBRDNYRTtFQUFnQixlQUFBO0FDK1hsQjtBRC9YRTtFQUFnQixlQUFBO0FDbVlsQjtBRG5ZRTtFQUFnQixlQUFBO0FDdVlsQjtBRHZZRTtFQUFnQixlQUFBO0FDMllsQjtBRDNZRTtFQUFnQixlQUFBO0FDK1lsQjtBRC9ZRTtFQUFnQixZQUFBO0FDbVpsQjtBRGpaQTtFQUNFLGtCQUFBO0FDb1pGO0FEbFpBO0VBRUUsMENBQUE7RUFDQSxnQkFBQTtBQ29aRjtBRG5aRTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0FDb1pKO0FEbFpFO0VBQ0UsZ0NBQUE7QUNvWko7QUQ3WUE7RUFDRSwrQ0FBQTtFQUVBLGdCQUFBO0FDK1lGO0FEN1lBO0VBQ0UsZ0JBQUE7QUNnWkY7QUQvWUU7RUFDRSxVQUFBO0FDaVpKO0FEaFpJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNrWk47QURqWk07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNtWlI7QUQ5WUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSwrQ0FBQTtBQ2daTjtBRC9ZTTtFQUNFLGtCQUFBO0FDaVpSO0FEL1lNO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQ2laUjtBRC9ZTTtFQUNFLDZCQUFBO0FDaVpSO0FENVlRO0VBQ0Usa0JBQUE7QUM4WVY7QUR4WVE7RUFDRSxlQUFBO0FDMFlWO0FEcFlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ3VZRjtBRHJZQTtFQUNFLGNBQUE7QUN3WUY7QURyWUU7RUFDRSxjQUFBO0FDd1lKO0FEdFlFO0VBQ0UsZ0JBQUE7QUN3WUo7QUR0WUU7RUFDRSxrQkFBQTtBQ3dZSjtBRHZZSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDeVlOO0FEcFlBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLE9BQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFFQSwrQ0FBQTtBQ3FZRjtBRHBZRTtFQUNFLCtDQUFBO0FDc1lKO0FEbFlBO0VBQ0UsZ0JBQUE7QUNxWUY7QURwWUU7RUFDRSxrQkFBQTtBQ3NZSjtBRG5ZQTtFQUNFLFdBQUE7RUFDQSx3Q0FBQTtBQ3NZRjtBRHBZQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN1WUY7QUR0WUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDd1lKO0FEdFlFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3dZSjtBRHRZRTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUN3WUo7QURwWUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFEQUFBO0VBQ0EsZUFBQTtBQ3VZSjtBRHRZSTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3dZTjtBRHRZSTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUN3WU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiB2YXIoLS1pb24tc3RhdHVzYmFyLWxlZnQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24taWNvbi1iaWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAtLW9wYWNpdHk6IDA7XHJcbiAgJi5ub2Jhbm5lciB7XHJcbiAgICAtLW9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAwIHtcclxuICAuc2hvdy0jeyRpfSB7ICAgLS1vcGFjaXR5OiAjeyRpIC8gMTAwfTsgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRvcCB7XHJcbiAgLy9tYXJnaW4tdG9wOiAtNDRweDtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAuYmFubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vdG9wOiAtNjhweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMDZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmO1xyXG4gIH1cclxufVxyXG4vLy5oYXN0b3Age1xyXG4vLyAgbWFyZ2luLXRvcDogMzBweDtcclxuLy99XHJcblxyXG4uaXNzdXBwbGllciB7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4taGVpZ2h0KSk7XHJcbiAgLy90cmFuc2xhdGVZKGNhbGMoMTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwcHgpKSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUYyREU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tcm93IHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoM24pIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5saXN0LWNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi50am5hdiB7XHJcbiAgaW9uLWdyaWQge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBpb24tY29sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdG5hdjIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi1oZWlnaHQpO1xyXG4gIC8vbGVmdDogY2FsYygyMHB4IC0gNHB4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAudGl0bGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblxyXG4gIH1cclxufVxyXG4ubGlzdG5hdiB7XHJcbiAgbWluLWhlaWdodDogMzdweDtcclxuICAmLmlzYWJzb2x1dGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG4uaXRlbS1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBpbmdGYW5nIFNDXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5ybXRqIHtcclxuICAuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAwcHggcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjcpO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICBmb250LWZhbWlseTogXCJQaW5nRmFuZ1wiO1xyXG4gICAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUGluZ0ZhbmdcIjtcclxuICAgICAgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLnNlYXJjaC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5zZWFyY2gtYmFyIC5sZWZ0IHtcbiAgd2lkdGg6IHZhcigtLWlvbi1zdGF0dXNiYXItbGVmdCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLWljb24tYmlnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1iYXIgLmxlZnQgaW1nIHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2VhcmNoLWJhciAucmlnaHQge1xuICB3aWR0aDogNTBweDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1iYXIgLnJpZ2h0IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLnNlYXJjaC1iYXIgLnJpZ2h0IGltZyB7XG4gIHdpZHRoOiAxOXB4O1xufVxuLnNlYXJjaC1iYXIgLnJpZ2h0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNlYXJjaC1iYXIgLmNlbnRlciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgMTVweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMy41cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzLjVweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zZWFyY2gtYmFyIC5jZW50ZXIgLnNlYXJjaC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuLnNlYXJjaC1iYXIgLmNlbnRlciAuc2VhcmNoLWJveCBpbWcge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcbiAgLS1vcGFjaXR5OiAwO1xufVxuaW9uLXRvb2xiYXIubm9iYW5uZXIge1xuICAtLW9wYWNpdHk6IDE7XG59XG5cbi5zaG93LTAge1xuICAtLW9wYWNpdHk6IDA7XG59XG5cbi5zaG93LTEge1xuICAtLW9wYWNpdHk6IDAuMDE7XG59XG5cbi5zaG93LTIge1xuICAtLW9wYWNpdHk6IDAuMDI7XG59XG5cbi5zaG93LTMge1xuICAtLW9wYWNpdHk6IDAuMDM7XG59XG5cbi5zaG93LTQge1xuICAtLW9wYWNpdHk6IDAuMDQ7XG59XG5cbi5zaG93LTUge1xuICAtLW9wYWNpdHk6IDAuMDU7XG59XG5cbi5zaG93LTYge1xuICAtLW9wYWNpdHk6IDAuMDY7XG59XG5cbi5zaG93LTcge1xuICAtLW9wYWNpdHk6IDAuMDc7XG59XG5cbi5zaG93LTgge1xuICAtLW9wYWNpdHk6IDAuMDg7XG59XG5cbi5zaG93LTkge1xuICAtLW9wYWNpdHk6IDAuMDk7XG59XG5cbi5zaG93LTEwIHtcbiAgLS1vcGFjaXR5OiAwLjE7XG59XG5cbi5zaG93LTExIHtcbiAgLS1vcGFjaXR5OiAwLjExO1xufVxuXG4uc2hvdy0xMiB7XG4gIC0tb3BhY2l0eTogMC4xMjtcbn1cblxuLnNob3ctMTMge1xuICAtLW9wYWNpdHk6IDAuMTM7XG59XG5cbi5zaG93LTE0IHtcbiAgLS1vcGFjaXR5OiAwLjE0O1xufVxuXG4uc2hvdy0xNSB7XG4gIC0tb3BhY2l0eTogMC4xNTtcbn1cblxuLnNob3ctMTYge1xuICAtLW9wYWNpdHk6IDAuMTY7XG59XG5cbi5zaG93LTE3IHtcbiAgLS1vcGFjaXR5OiAwLjE3O1xufVxuXG4uc2hvdy0xOCB7XG4gIC0tb3BhY2l0eTogMC4xODtcbn1cblxuLnNob3ctMTkge1xuICAtLW9wYWNpdHk6IDAuMTk7XG59XG5cbi5zaG93LTIwIHtcbiAgLS1vcGFjaXR5OiAwLjI7XG59XG5cbi5zaG93LTIxIHtcbiAgLS1vcGFjaXR5OiAwLjIxO1xufVxuXG4uc2hvdy0yMiB7XG4gIC0tb3BhY2l0eTogMC4yMjtcbn1cblxuLnNob3ctMjMge1xuICAtLW9wYWNpdHk6IDAuMjM7XG59XG5cbi5zaG93LTI0IHtcbiAgLS1vcGFjaXR5OiAwLjI0O1xufVxuXG4uc2hvdy0yNSB7XG4gIC0tb3BhY2l0eTogMC4yNTtcbn1cblxuLnNob3ctMjYge1xuICAtLW9wYWNpdHk6IDAuMjY7XG59XG5cbi5zaG93LTI3IHtcbiAgLS1vcGFjaXR5OiAwLjI3O1xufVxuXG4uc2hvdy0yOCB7XG4gIC0tb3BhY2l0eTogMC4yODtcbn1cblxuLnNob3ctMjkge1xuICAtLW9wYWNpdHk6IDAuMjk7XG59XG5cbi5zaG93LTMwIHtcbiAgLS1vcGFjaXR5OiAwLjM7XG59XG5cbi5zaG93LTMxIHtcbiAgLS1vcGFjaXR5OiAwLjMxO1xufVxuXG4uc2hvdy0zMiB7XG4gIC0tb3BhY2l0eTogMC4zMjtcbn1cblxuLnNob3ctMzMge1xuICAtLW9wYWNpdHk6IDAuMzM7XG59XG5cbi5zaG93LTM0IHtcbiAgLS1vcGFjaXR5OiAwLjM0O1xufVxuXG4uc2hvdy0zNSB7XG4gIC0tb3BhY2l0eTogMC4zNTtcbn1cblxuLnNob3ctMzYge1xuICAtLW9wYWNpdHk6IDAuMzY7XG59XG5cbi5zaG93LTM3IHtcbiAgLS1vcGFjaXR5OiAwLjM3O1xufVxuXG4uc2hvdy0zOCB7XG4gIC0tb3BhY2l0eTogMC4zODtcbn1cblxuLnNob3ctMzkge1xuICAtLW9wYWNpdHk6IDAuMzk7XG59XG5cbi5zaG93LTQwIHtcbiAgLS1vcGFjaXR5OiAwLjQ7XG59XG5cbi5zaG93LTQxIHtcbiAgLS1vcGFjaXR5OiAwLjQxO1xufVxuXG4uc2hvdy00MiB7XG4gIC0tb3BhY2l0eTogMC40Mjtcbn1cblxuLnNob3ctNDMge1xuICAtLW9wYWNpdHk6IDAuNDM7XG59XG5cbi5zaG93LTQ0IHtcbiAgLS1vcGFjaXR5OiAwLjQ0O1xufVxuXG4uc2hvdy00NSB7XG4gIC0tb3BhY2l0eTogMC40NTtcbn1cblxuLnNob3ctNDYge1xuICAtLW9wYWNpdHk6IDAuNDY7XG59XG5cbi5zaG93LTQ3IHtcbiAgLS1vcGFjaXR5OiAwLjQ3O1xufVxuXG4uc2hvdy00OCB7XG4gIC0tb3BhY2l0eTogMC40ODtcbn1cblxuLnNob3ctNDkge1xuICAtLW9wYWNpdHk6IDAuNDk7XG59XG5cbi5zaG93LTUwIHtcbiAgLS1vcGFjaXR5OiAwLjU7XG59XG5cbi5zaG93LTUxIHtcbiAgLS1vcGFjaXR5OiAwLjUxO1xufVxuXG4uc2hvdy01MiB7XG4gIC0tb3BhY2l0eTogMC41Mjtcbn1cblxuLnNob3ctNTMge1xuICAtLW9wYWNpdHk6IDAuNTM7XG59XG5cbi5zaG93LTU0IHtcbiAgLS1vcGFjaXR5OiAwLjU0O1xufVxuXG4uc2hvdy01NSB7XG4gIC0tb3BhY2l0eTogMC41NTtcbn1cblxuLnNob3ctNTYge1xuICAtLW9wYWNpdHk6IDAuNTY7XG59XG5cbi5zaG93LTU3IHtcbiAgLS1vcGFjaXR5OiAwLjU3O1xufVxuXG4uc2hvdy01OCB7XG4gIC0tb3BhY2l0eTogMC41ODtcbn1cblxuLnNob3ctNTkge1xuICAtLW9wYWNpdHk6IDAuNTk7XG59XG5cbi5zaG93LTYwIHtcbiAgLS1vcGFjaXR5OiAwLjY7XG59XG5cbi5zaG93LTYxIHtcbiAgLS1vcGFjaXR5OiAwLjYxO1xufVxuXG4uc2hvdy02MiB7XG4gIC0tb3BhY2l0eTogMC42Mjtcbn1cblxuLnNob3ctNjMge1xuICAtLW9wYWNpdHk6IDAuNjM7XG59XG5cbi5zaG93LTY0IHtcbiAgLS1vcGFjaXR5OiAwLjY0O1xufVxuXG4uc2hvdy02NSB7XG4gIC0tb3BhY2l0eTogMC42NTtcbn1cblxuLnNob3ctNjYge1xuICAtLW9wYWNpdHk6IDAuNjY7XG59XG5cbi5zaG93LTY3IHtcbiAgLS1vcGFjaXR5OiAwLjY3O1xufVxuXG4uc2hvdy02OCB7XG4gIC0tb3BhY2l0eTogMC42ODtcbn1cblxuLnNob3ctNjkge1xuICAtLW9wYWNpdHk6IDAuNjk7XG59XG5cbi5zaG93LTcwIHtcbiAgLS1vcGFjaXR5OiAwLjc7XG59XG5cbi5zaG93LTcxIHtcbiAgLS1vcGFjaXR5OiAwLjcxO1xufVxuXG4uc2hvdy03MiB7XG4gIC0tb3BhY2l0eTogMC43Mjtcbn1cblxuLnNob3ctNzMge1xuICAtLW9wYWNpdHk6IDAuNzM7XG59XG5cbi5zaG93LTc0IHtcbiAgLS1vcGFjaXR5OiAwLjc0O1xufVxuXG4uc2hvdy03NSB7XG4gIC0tb3BhY2l0eTogMC43NTtcbn1cblxuLnNob3ctNzYge1xuICAtLW9wYWNpdHk6IDAuNzY7XG59XG5cbi5zaG93LTc3IHtcbiAgLS1vcGFjaXR5OiAwLjc3O1xufVxuXG4uc2hvdy03OCB7XG4gIC0tb3BhY2l0eTogMC43ODtcbn1cblxuLnNob3ctNzkge1xuICAtLW9wYWNpdHk6IDAuNzk7XG59XG5cbi5zaG93LTgwIHtcbiAgLS1vcGFjaXR5OiAwLjg7XG59XG5cbi5zaG93LTgxIHtcbiAgLS1vcGFjaXR5OiAwLjgxO1xufVxuXG4uc2hvdy04MiB7XG4gIC0tb3BhY2l0eTogMC44Mjtcbn1cblxuLnNob3ctODMge1xuICAtLW9wYWNpdHk6IDAuODM7XG59XG5cbi5zaG93LTg0IHtcbiAgLS1vcGFjaXR5OiAwLjg0O1xufVxuXG4uc2hvdy04NSB7XG4gIC0tb3BhY2l0eTogMC44NTtcbn1cblxuLnNob3ctODYge1xuICAtLW9wYWNpdHk6IDAuODY7XG59XG5cbi5zaG93LTg3IHtcbiAgLS1vcGFjaXR5OiAwLjg3O1xufVxuXG4uc2hvdy04OCB7XG4gIC0tb3BhY2l0eTogMC44ODtcbn1cblxuLnNob3ctODkge1xuICAtLW9wYWNpdHk6IDAuODk7XG59XG5cbi5zaG93LTkwIHtcbiAgLS1vcGFjaXR5OiAwLjk7XG59XG5cbi5zaG93LTkxIHtcbiAgLS1vcGFjaXR5OiAwLjkxO1xufVxuXG4uc2hvdy05MiB7XG4gIC0tb3BhY2l0eTogMC45Mjtcbn1cblxuLnNob3ctOTMge1xuICAtLW9wYWNpdHk6IDAuOTM7XG59XG5cbi5zaG93LTk0IHtcbiAgLS1vcGFjaXR5OiAwLjk0O1xufVxuXG4uc2hvdy05NSB7XG4gIC0tb3BhY2l0eTogMC45NTtcbn1cblxuLnNob3ctOTYge1xuICAtLW9wYWNpdHk6IDAuOTY7XG59XG5cbi5zaG93LTk3IHtcbiAgLS1vcGFjaXR5OiAwLjk3O1xufVxuXG4uc2hvdy05OCB7XG4gIC0tb3BhY2l0eTogMC45ODtcbn1cblxuLnNob3ctOTkge1xuICAtLW9wYWNpdHk6IDAuOTk7XG59XG5cbi5zaG93LTEwMCB7XG4gIC0tb3BhY2l0eTogMTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b3Age1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udG9wIC5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0xMDZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9wIGlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmZjtcbn1cblxuLmlzc3VwcGxpZXIge1xuICBoZWlnaHQ6IGNhbGModmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi1oZWlnaHQpKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjJERTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuY2FyZC10aXRsZSBpbWcge1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5pb24tY2FyZCBpb24tcm93IGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tY2FyZCBpb24tcm93IGlvbi1jb2w6bnRoLW9mLXR5cGUoM24pIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuaW9uLWNhcmQgaW9uLXJvdyBpb24tY29sIC50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbn1cbmlvbi1jYXJkIGlvbi1yb3cgaW9uLWNvbCBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59XG5pb24tY2FyZCBpb24tcm93OmZpcnN0LW9mLXR5cGUgaW9uLWNvbCBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWNhcmQgaW9uLXJvdzpsYXN0LW9mLXR5cGUgaW9uLWNvbCAudGl0bGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5saXN0LWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnRqbmF2IGlvbi1ncmlkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4udGpuYXYgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi50am5hdiBpb24tY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRqbmF2IGlvbi1jb2wgaW1nIHtcbiAgd2lkdGg6IDM0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cblxuLmxpc3RuYXYyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4taGVpZ2h0KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ubGlzdG5hdjIgLnRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5saXN0bmF2IHtcbiAgbWluLWhlaWdodDogMzdweDtcbn1cbi5saXN0bmF2LmlzYWJzb2x1dGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5pdGVtLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pdGVtLWJveDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDEwMCU7XG59XG4uaXRlbS1ib3ggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG4uaXRlbS1ib3ggc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBmb250LWZhbWlseTogXCJQaW5nRmFuZyBTQ1wiO1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ybXRqIC5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAwcHggcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjcpO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ucm10aiAuYm94IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgZm9udC1mYW1pbHk6IFwiUGluZ0ZhbmdcIjtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuLnJtdGogLmJveCBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiBcIlBpbmdGYW5nXCI7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBsaW5lLWhlaWdodDogMS43NTtcbn0iXX0= */");

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
    ProductsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_shop_content_service__WEBPACK_IMPORTED_MODULE_5__["ShopContentService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _services_shop_nav_service__WEBPACK_IMPORTED_MODULE_7__["ShopNavService"] },
        { type: _services_products_list_service__WEBPACK_IMPORTED_MODULE_8__["ProductsListService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_9__["TopageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_11__["SupplierlistService"] }
    ]; };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.page.scss */ "./src/app/pages/products/products.page.scss")).default]
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