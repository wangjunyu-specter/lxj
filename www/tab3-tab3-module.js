(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-14 22:04:38
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-07-14 22:04:38
 * @Description: file content
 */








var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-07-14 22:01:42\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-10-09 21:36:21\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <div class=\"search-bar\">\r\n      <!--<div class=\"left\" (click)=\"goBack()\">-->\r\n        <!--<ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>-->\r\n      <!--</div>-->\r\n      <div class=\"center\" (click)=\"searchpage()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span>{{keywords || '精彩等你发现'}}</span>\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"right\">-->\r\n      <!--<img src=\"/assets/ewm.svg\" alt=\"\">-->\r\n      <!--</div>-->\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <div *ngIf=\"!bannerList\" class=\"page-top\">\r\n    <ion-skeleton-text animated style=\"height: 260px;\"></ion-skeleton-text>\r\n    <ion-row class=\"nav-skeleton\">\r\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"nav-skeleton\">\r\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 50px;width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-skeleton-text animated style=\"width: 20%; height: 20px;\" ></ion-skeleton-text>\r\n    <ion-row class=\"nav-skeleton\">\r\n      <ion-col><ion-skeleton-text animated style=\"height: 80px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 80px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 80px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 80px;width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-skeleton-text animated style=\"height: 200px;margin-top: 10px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"width: 20%; height: 20px;\" ></ion-skeleton-text>\r\n    <ion-row class=\"nav-skeleton\">\r\n      <ion-col><ion-skeleton-text animated style=\"height: 100px;width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"height: 100px;width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"myslides-box\" *ngIf=\"bannerList\">\r\n    <ion-slides pager=\"true\" id=\"myswiper\">\r\n      <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"margin-top: 10px\">\r\n    <ion-slide *ngFor=\"let item of navList\" (click)=\"toPage(item.type, item.menu_url)\">\r\n      <img class=\"nav-img\" src=\"{{http.domain + item.menu_img}}\">\r\n      <div style=\"margin: 10px 0 15px;\">{{item.menu_name}}</div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-grid *ngIf=\"ggtj1\">\r\n    <ion-row *ngIf=\"ggtj1.length == 1\">\r\n      <ion-col size=\"12\" *ngFor=\"let item of ggtj1\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"ggtj1.length > 1\">\r\n      <ion-col size=\"6\" *ngFor=\"let item of ggtj1\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div padding>\r\n    <app-scnewtitle *ngIf=\"titleList && titleList['title1']\" [title]=\"titleList['title1']\"></app-scnewtitle>\r\n    <!-- <app-pagetitle *ngIf=\"titleList && titleList['title1']\" [nopadding]=\"true\" [myname]=\"titleList['title1']\" [type]=\"true\" [des]=\"titleList['desc1']\"></app-pagetitle> -->\r\n  </div>\r\n  <div padding>\r\n    <div class=\"my-pptj\">\r\n      <div class=\"left\" *ngIf=\"pptj && pptj[0]\" (click)=\"toPage(pptj[0].type, pptj[0].url)\">\r\n          <img src=\"{{http.domain + pptj[0].image}}\" alt=\"\">\r\n      </div>\r\n      <div class=\"right\" *ngIf=\"pptj\">\r\n        <div class=\"top\" *ngIf=\"pptj[1]\" (click)=\"toPage(pptj[1].type, pptj[1].url)\">\r\n            <img src=\"{{http.domain + pptj[1].image}}\" alt=\"\">\r\n        </div>\r\n        <div class=\"footer\" *ngIf=\"pptj[2]\" (click)=\"toPage(pptj[2].type, pptj[2].url)\">\r\n            <img src=\"{{http.domain + pptj[2].image}}\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"3\" *ngFor=\"let item of pptj\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let item of ggtj5\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div padding>\r\n    <app-scnewtitle *ngIf=\"xsms && xsms.sort_goods_arr[0].goods.length > 0\" [title]=\"xsms['title']\"></app-scnewtitle>\r\n    <!-- <app-pagetitle *ngIf=\"titleList && titleList['title2']\" [nopadding]=\"true\" [myname]=\"titleList['title2']\" [type]=\"true\" [des]=\"titleList['desc2']\"></app-pagetitle> -->\r\n  </div>\r\n  <div padding class=\"xsms-content\">\r\n    <ion-slides [options]=\"xsmsOptslv\" style=\"margin-top: 10px\" *ngIf=\"xsms && xsms.sort_goods_arr[0].goods.length > 0\">\r\n      <ion-slide *ngFor=\"let item of xsms.sort_goods_arr[0].goods\" (click)=\"toPage(2, item.goods_id)\">\r\n        <app-scindextjgoods\r\n          [src]=\"item.goods_thumb | imgsrc: http.zdomain\"\r\n          [name]=\"item.goods_brief\" [nowprice]=\"item.shop_price\"\r\n          [oldPrice]=\"item.market_price\"></app-scindextjgoods>\r\n        <!-- <img src=\"{{item.goods_thumb | imgsrc: http.zdomain}}\">\r\n        <div class=\"title\">{{item.goods_brief}}</div>\r\n        <div class=\"price\">\r\n          <ion-text color=\"danger\">￥{{item.shop_price}}</ion-text>\r\n          <span>￥{{item.market_price}}</span>\r\n        </div> -->\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <p class=\"xsms-more\" (click)=\"toPage(3, xsms.id)\">查看更多>></p>\r\n  <!-- <ion-grid class=\"nopaddingbottom\">\r\n    <ion-row class=\"nopaddingbottom\">\r\n      <ion-col size=\"6\" *ngFor=\"let item of ggtj7\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"nopaddingtop\">\r\n    <ion-row class=\"nopaddingtop\">\r\n      <ion-col size=\"4\" *ngFor=\"let item of ggtj8\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <div padding>\r\n      <app-scnewtitle *ngIf=\"titleList && titleList['title2']\" [title]=\"titleList['title2']\"></app-scnewtitle>\r\n      <!-- <app-pagetitle *ngIf=\"titleList && titleList['title2']\" [nopadding]=\"true\" [myname]=\"titleList['title2']\" [type]=\"true\" [des]=\"titleList['desc2']\"></app-pagetitle> -->\r\n    </div>\r\n  <div *ngIf=\"topgoods\" padding>\r\n    <!-- <app-productlist *ngFor=\"let citem of topgoods\" [data]=\"citem\"  (open)=\"openpage($event)\" type=\"2\"></app-productlist> -->\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\" *ngFor=\"let data of topgoods\" (click)=\"toPage(2, data.goods_id)\">\r\n              <app-scindextjgoods\r\n              [src]=\"data.thumb | imgsrc: http.zdomain\"\r\n              [name]=\"data.short_name\" [nowprice]=\"data.shop_price\"\r\n              [type]=\"2\" [shadow]=\"2\"></app-scindextjgoods>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </div>\r\n  <div padding>\r\n    <app-scnewtitle *ngIf=\"titleList && titleList['title3']\" [title]=\"titleList['title3']\"></app-scnewtitle>\r\n    <!-- <app-pagetitle *ngIf=\"titleList && titleList['title3']\" [nopadding]=\"true\" [myname]=\"titleList['title3']\" [type]=\"true\" [des]=\"titleList['desc3']\"></app-pagetitle> -->\r\n  </div>\r\n  <ion-grid class=\"nopaddingbottom\">\r\n    <ion-row class=\"nopaddingbottom\">\r\n      <ion-col *ngFor=\"let item of ggtj2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"nopaddingbottom nopaddingtop\">\r\n    <ion-row class=\"nopaddingbottom nopaddingtop\">\r\n      <ion-col size=\"6\" *ngFor=\"let item of ggtj3\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"nopaddingtop\">\r\n    <ion-row>\r\n      <ion-col size=\"4\" *ngFor=\"let item of ggtj4\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div padding>\r\n    <app-scnewtitle *ngIf=\"titleList && titleList['title4']\" [title]=\"titleList['title4']\"></app-scnewtitle>\r\n    <!-- <app-pagetitle *ngIf=\"titleList && titleList['title4']\" [nopadding]=\"true\" [myname]=\"titleList['title4']\" [type]=\"true\" [des]=\"titleList['desc4']\"></app-pagetitle> -->\r\n  </div>\r\n  <div *ngIf=\"tjgoods && tjgoods[0]\" padding>\r\n    <!-- <app-productlist *ngFor=\"let citem of tjgoods[0].arr\" [data]=\"citem\"  (open)=\"openpage($event)\" type=\"1\"></app-productlist> -->\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\" *ngFor=\"let data of tjgoods[0].arr\" (click)=\"toPage(2, data.id)\">\r\n              <app-scindextjgoods\r\n              [src]=\"data.thumb | imgsrc: http.zdomain\"\r\n              [name]=\"data.short_name\" [nowprice]=\"data.shop_price\"\r\n              [oldPrice]=\"data.market_price\" [type]=\"2\" [shadow]=\"2\"></app-scindextjgoods>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </div>\r\n  <div padding>\r\n    <app-scnewtitle *ngIf=\"titleList && titleList['title5']\" [title]=\"titleList['title5']\"></app-scnewtitle>\r\n    <!-- <app-pagetitle *ngIf=\"titleList && titleList['title5']\" [nopadding]=\"true\" [myname]=\"titleList['title5']\" [type]=\"true\" [des]=\"titleList['desc5']\"></app-pagetitle> -->\r\n  </div>\r\n  <div class=\"tjzt-list\">\r\n    <div class=\"tjzt-item\" *ngFor=\"let item of tjzt\">\r\n      <img [src]=\"item.topic_img | imgsrc: http.zdomain \" alt=\"\">\r\n      <div class=\"goods-box\" padding-start>\r\n          <ion-slides [options]=\"xsmsOptslv\" style=\"margin-top: 10px\" *ngIf=\"item.sort_goods_arr[0] && item.sort_goods_arr[0].goods.length > 0\">\r\n              <ion-slide *ngFor=\"let data of item.sort_goods_arr[0].goods\" (click)=\"toPage(2, data.goods_id)\">\r\n                  <app-scindextjgoods\r\n                  [src]=\"data.goods_thumb | imgsrc: http.zdomain\"\r\n                  [name]=\"data.goods_brief\" [nowprice]=\"data.shop_price\"\r\n                  [oldPrice]=\"data.market_price\"></app-scindextjgoods>\r\n              </ion-slide>\r\n            </ion-slides>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let item of ggtj6\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div padding>\r\n    <app-scnewtitle *ngIf=\"titleList && titleList['title6']\" [title]=\"titleList['title6']\"></app-scnewtitle>\r\n    <!-- <app-pagetitle *ngIf=\"titleList && titleList['title6']\" [nopadding]=\"true\" [myname]=\"titleList['title6']\" [type]=\"true\" [des]=\"titleList['desc6']\"></app-pagetitle> -->\r\n  </div>\r\n  <div *ngIf=\"tjgoods && tjgoods[1]\" padding>\r\n    <!-- <app-productlist *ngFor=\"let citem of tjgoods[1].arr\" [data]=\"citem\"  (open)=\"openpage($event)\" type=\"3\"></app-productlist> -->\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\" *ngFor=\"let data of tjgoods[1].arr\" (click)=\"toPage(2, data.id)\">\r\n            <app-scindextjgoods\r\n            [src]=\"data.thumb | imgsrc: http.zdomain\"\r\n            [name]=\"data.short_name\" [nowprice]=\"data.shop_price\"\r\n            [oldPrice]=\"data.market_price\" [type]=\"2\" [shadow]=\"2\"></app-scindextjgoods>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div padding>\r\n    <app-scnewtitle *ngIf=\"titleList && titleList['title7']\" [title]=\"titleList['title7']\"></app-scnewtitle>\r\n    <!-- <app-pagetitle *ngIf=\"titleList && titleList['title7']\" [nopadding]=\"true\" [myname]=\"titleList['title7']\" [type]=\"true\" [des]=\"titleList['desc7']\"></app-pagetitle> -->\r\n  </div>\r\n  <div padding *ngIf=\"moreGoods\">\r\n    <!-- <app-productlist *ngFor=\"let item of moreGoods\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist> -->\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\" *ngFor=\"let data of moreGoods\" (click)=\"toPage(2, data.id)\">\r\n              <app-scindextjgoods\r\n              [src]=\"data.thumb | imgsrc: http.zdomain\"\r\n              [name]=\"data.short_name\" [nowprice]=\"data.shop_price\"\r\n              [oldPrice]=\"data.market_price\" [type]=\"2\" [shadow]=\"2\"></app-scindextjgoods>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"crescent\"\r\n       loadingText=\"加载更多...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 50px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center; }\n  .search-bar .right span {\n      display: inline-block;\n      flex: 1;\n      line-height: 18px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .right ion-icon {\n      font-size: 13px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n  --opacity: 0; }\n  ion-content .nav-img {\n  width: 56px; }\n  ion-content #myswiper, ion-content .page-top {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden;\n  --bullet-background-active: #fff; }\n  ion-content ion-slide {\n  flex-direction: column;\n  font-size: var(--ion-text); }\n  ion-content ion-slides {\n  --bullet-background-active: var(--ion-color-secondary); }\n  ion-content .swiper-pagination2 {\n  text-align: center;\n  --bullet-background-active: var(--ion-color-secondary);\n  --bullet-background: #333; }\n  ion-content .swiper-pagination2 span {\n    margin: 0 5px !important; }\n  ion-content .swiper-pagination {\n  --bottom: 25px; }\n  ion-content .myslides-box {\n  position: relative; }\n  ion-content .myslides-box .footer {\n    left: -10%;\n    width: 120%;\n    position: absolute;\n    height: 8px;\n    z-index: 1000;\n    bottom: -5px;\n    overflow: hidden; }\n  ion-content .myslides-box .footer .footer-box {\n      border-radius: 50%;\n      height: 30px;\n      background-color: blue; }\n  ion-content .indexnav .four-nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n  padding: 7px 0px 0 5px; }\n  ion-content .indexnav .four-nav .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: flex-start;\n    font-size: var(--ion-sm-text); }\n  ion-content .indexnav .four-nav .footer img {\n      width: 20px; }\n  ion-content .xsqg .xsqg-right {\n  position: relative;\n  color: #fff; }\n  ion-content .xsqg .xsqg-right .name {\n    font-size: var(--ion-text);\n    position: absolute;\n    top: 33%;\n    margin-left: 15px;\n    margin-right: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  ion-content .xsqg .xsqg-right app-pricebutton {\n    position: absolute;\n    bottom: 12px;\n    left: 15px; }\n  ion-content .jx-nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  ion-content .jx-nav div {\n    font-size: var(--ion-text);\n    padding: 3px 7px;\n    border: 1px solid var(--ion-color-light);\n    border-radius: 5px;\n    margin-right: 5px;\n    color: var(--ion-color-dark); }\n  ion-content .jx-nav div.active {\n      background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n      color: #fff;\n      border: none;\n      position: relative; }\n  ion-content .jx-nav div.active::after {\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        border-width: 6px;\n        border-style: solid;\n        border-color: var(--ion-color-success) transparent transparent transparent;\n        position: absolute;\n        bottom: -11px;\n        left: 50%;\n        margin-left: -6px; }\n  ion-content .my-content {\n  margin-top: -10px;\n  --padding-top: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\n  ion-content .lxlg ion-slide {\n  color: #fff; }\n  ion-content .lxlg ion-slide .name {\n    position: absolute;\n    bottom: 50px;\n    padding: 5px 6px;\n    border-radius: 5px;\n    background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  ion-content .lxlg ion-slide p {\n    position: absolute;\n    bottom: 10px;\n    margin-top: 0; }\n  ion-content .rmzt2box {\n  margin-top: -15px; }\n  ion-content .wntj .title-img {\n  display: flex;\n  justify-content: center; }\n  ion-content .wntj .title-img img {\n    width: 75px; }\n  ion-content .wntj .yjfx {\n  color: var(--ion-color-secondary);\n  font-size: var(--ion-sm-text);\n  margin-top: 15px; }\n  ion-content .wntj p {\n  color: var(--ion-color-medium);\n  font-size: var(--ion-sm-text); }\n  .none {\n  display: none; }\n  .nopaddingbottom {\n  --padding-bottom: 0;\n  padding-bottom: 0; }\n  .nopaddingtop {\n  --padding-top: 0;\n  padding-top: 0; }\n  .show-0 {\n  --opacity: 0; }\n  .show-1 {\n  --opacity: 0.01; }\n  .show-2 {\n  --opacity: 0.02; }\n  .show-3 {\n  --opacity: 0.03; }\n  .show-4 {\n  --opacity: 0.04; }\n  .show-5 {\n  --opacity: 0.05; }\n  .show-6 {\n  --opacity: 0.06; }\n  .show-7 {\n  --opacity: 0.07; }\n  .show-8 {\n  --opacity: 0.08; }\n  .show-9 {\n  --opacity: 0.09; }\n  .show-10 {\n  --opacity: 0.1; }\n  .show-11 {\n  --opacity: 0.11; }\n  .show-12 {\n  --opacity: 0.12; }\n  .show-13 {\n  --opacity: 0.13; }\n  .show-14 {\n  --opacity: 0.14; }\n  .show-15 {\n  --opacity: 0.15; }\n  .show-16 {\n  --opacity: 0.16; }\n  .show-17 {\n  --opacity: 0.17; }\n  .show-18 {\n  --opacity: 0.18; }\n  .show-19 {\n  --opacity: 0.19; }\n  .show-20 {\n  --opacity: 0.2; }\n  .show-21 {\n  --opacity: 0.21; }\n  .show-22 {\n  --opacity: 0.22; }\n  .show-23 {\n  --opacity: 0.23; }\n  .show-24 {\n  --opacity: 0.24; }\n  .show-25 {\n  --opacity: 0.25; }\n  .show-26 {\n  --opacity: 0.26; }\n  .show-27 {\n  --opacity: 0.27; }\n  .show-28 {\n  --opacity: 0.28; }\n  .show-29 {\n  --opacity: 0.29; }\n  .show-30 {\n  --opacity: 0.3; }\n  .show-31 {\n  --opacity: 0.31; }\n  .show-32 {\n  --opacity: 0.32; }\n  .show-33 {\n  --opacity: 0.33; }\n  .show-34 {\n  --opacity: 0.34; }\n  .show-35 {\n  --opacity: 0.35; }\n  .show-36 {\n  --opacity: 0.36; }\n  .show-37 {\n  --opacity: 0.37; }\n  .show-38 {\n  --opacity: 0.38; }\n  .show-39 {\n  --opacity: 0.39; }\n  .show-40 {\n  --opacity: 0.4; }\n  .show-41 {\n  --opacity: 0.41; }\n  .show-42 {\n  --opacity: 0.42; }\n  .show-43 {\n  --opacity: 0.43; }\n  .show-44 {\n  --opacity: 0.44; }\n  .show-45 {\n  --opacity: 0.45; }\n  .show-46 {\n  --opacity: 0.46; }\n  .show-47 {\n  --opacity: 0.47; }\n  .show-48 {\n  --opacity: 0.48; }\n  .show-49 {\n  --opacity: 0.49; }\n  .show-50 {\n  --opacity: 0.5; }\n  .show-51 {\n  --opacity: 0.51; }\n  .show-52 {\n  --opacity: 0.52; }\n  .show-53 {\n  --opacity: 0.53; }\n  .show-54 {\n  --opacity: 0.54; }\n  .show-55 {\n  --opacity: 0.55; }\n  .show-56 {\n  --opacity: 0.56; }\n  .show-57 {\n  --opacity: 0.57; }\n  .show-58 {\n  --opacity: 0.58; }\n  .show-59 {\n  --opacity: 0.59; }\n  .show-60 {\n  --opacity: 0.6; }\n  .show-61 {\n  --opacity: 0.61; }\n  .show-62 {\n  --opacity: 0.62; }\n  .show-63 {\n  --opacity: 0.63; }\n  .show-64 {\n  --opacity: 0.64; }\n  .show-65 {\n  --opacity: 0.65; }\n  .show-66 {\n  --opacity: 0.66; }\n  .show-67 {\n  --opacity: 0.67; }\n  .show-68 {\n  --opacity: 0.68; }\n  .show-69 {\n  --opacity: 0.69; }\n  .show-70 {\n  --opacity: 0.7; }\n  .show-71 {\n  --opacity: 0.71; }\n  .show-72 {\n  --opacity: 0.72; }\n  .show-73 {\n  --opacity: 0.73; }\n  .show-74 {\n  --opacity: 0.74; }\n  .show-75 {\n  --opacity: 0.75; }\n  .show-76 {\n  --opacity: 0.76; }\n  .show-77 {\n  --opacity: 0.77; }\n  .show-78 {\n  --opacity: 0.78; }\n  .show-79 {\n  --opacity: 0.79; }\n  .show-80 {\n  --opacity: 0.8; }\n  .show-81 {\n  --opacity: 0.81; }\n  .show-82 {\n  --opacity: 0.82; }\n  .show-83 {\n  --opacity: 0.83; }\n  .show-84 {\n  --opacity: 0.84; }\n  .show-85 {\n  --opacity: 0.85; }\n  .show-86 {\n  --opacity: 0.86; }\n  .show-87 {\n  --opacity: 0.87; }\n  .show-88 {\n  --opacity: 0.88; }\n  .show-89 {\n  --opacity: 0.89; }\n  .show-90 {\n  --opacity: 0.9; }\n  .show-91 {\n  --opacity: 0.91; }\n  .show-92 {\n  --opacity: 0.92; }\n  .show-93 {\n  --opacity: 0.93; }\n  .show-94 {\n  --opacity: 0.94; }\n  .show-95 {\n  --opacity: 0.95; }\n  .show-96 {\n  --opacity: 0.96; }\n  .show-97 {\n  --opacity: 0.97; }\n  .show-98 {\n  --opacity: 0.98; }\n  .show-99 {\n  --opacity: 0.99; }\n  .show-100 {\n  --opacity: 1; }\n  .my-pptj {\n  background-color: white;\n  box-shadow: 0px 0px 24px 0px rgba(238, 238, 238, 0.7);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch; }\n  .my-pptj > div {\n    flex: 1; }\n  .my-pptj > div img {\n      width: 100%; }\n  .my-pptj .left {\n    border-right: 1px solid whitesmoke; }\n  .my-pptj .right .top {\n    border-bottom: 1px solid whitesmoke; }\n  .xsms-more {\n  text-align: center;\n  margin-top: 0;\n  font-size: var(--ion-sm-text);\n  color: #333333;\n  line-height: 1.75; }\n  app-scindextjgoods {\n  width: 100%; }\n  .tjzt-list .tjzt-item .goods-box {\n  margin-top: -40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlLEVBQUE7RUFOakI7SUFRSSxnQ0FBZ0M7SUFDaEMsOEJBQStCO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0VBYnZCO01BZU0sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBaEJ0QjtJQW9CSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBO0VBekJ2QjtNQTJCTSxxQkFBcUI7TUFDckIsT0FBTztNQUNQLGlCQUFpQixFQUFBO0VBN0J2QjtNQWdDTSxXQUFXLEVBQUE7RUFoQ2pCO01BbUNNLGVBQWUsRUFBQTtFQW5DckI7SUF1Q0ksb0JBQW9CO0lBQ3BCLE9BQU87SUFDUCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHNCQUFzQjtJQUd0QixxQkFBcUI7SUFHckIsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFBO0VBbER0QjtNQW9ETSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLDBCQUEwQjtNQUMxQixpQkFBaUIsRUFBQTtFQTFEdkI7UUE0RFEsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0IsRUFBQTtFQUsxQjtFQUNFLDhGQUFhO0VBQ2IsWUFBVSxFQUFBO0VBR1o7RUFFSSxXQUFXLEVBQUE7RUFGZjtFQU1JLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsZ0NBQTJCLEVBQUE7RUFSL0I7RUFXSSxzQkFBc0I7RUFDdEIsMEJBQTBCLEVBQUE7RUFaOUI7RUFlSSxzREFBMkIsRUFBQTtFQWYvQjtFQWtCSSxr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QjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixZQUFVLEVBQUE7RUFHNUI7RUFDRSx1QkFBb0M7RUFDcEMscURBQXFEO0VBQ3JELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG9CQUFvQixFQUFBO0VBTnRCO0lBUUksT0FBTyxFQUFBO0VBUlg7TUFVTSxXQUFXLEVBQUE7RUFWakI7SUFjSSxrQ0FBMEMsRUFBQTtFQWQ5QztJQW1CTSxtQ0FBMkMsRUFBQTtFQUtqRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGNBQXNCO0VBQ3RCLGlCQUFpQixFQUFBO0VBRW5CO0VBQ0UsV0FBVyxFQUFBO0VBRWI7RUFHTSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiB2YXIoLS1pb24tc3RhdHVzYmFyLWxlZnQpO1xyXG4gICAgZm9udC1zaXplOiAgdmFyKC0taW9uLWljb24tYmlnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbiAgLS1vcGFjaXR5OiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLm5hdi1pbWcge1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgfVxyXG4gICNteXN3aXBlciwgLnBhZ2UtdG9wIHtcclxuICAgIC8vbWFyZ2luLXRvcDogLTQ0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIH1cclxuICAuc3dpcGVyLXBhZ2luYXRpb24yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luOiAwIDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgIC0tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICAubXlzbGlkZXMtYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgICB3aWR0aDogMTIwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuZm9vdGVyLWJveCB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbmRleG5hdiB7XHJcbiAgICAuZm91ci1uYXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiA3cHggMHB4IDAgNXB4O1xyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAueHNxZyB7XHJcbiAgICAueHNxZy1yaWdodCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgfVxyXG4gICAgICBhcHAtcHJpY2VidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEycHg7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuangtbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpdiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC0xMXB4O1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5teS1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5seGxnIHtcclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNnB4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAgICAgfVxyXG4gICAgICBwICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucm16dDJib3gge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgfVxyXG4gIC53bnRqIHtcclxuICAgIC50aXRsZS1pbWcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnlqZngge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ub3BhZGRpbmdib3R0b20ge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLm5vcGFkZGluZ3RvcCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAxMDAge1xyXG4gIC5zaG93LSN7JGl9IHsgICAtLW9wYWNpdHk6ICN7JGkgLyAxMDB9OyB9XHJcbn1cclxuXHJcbi5teS1wcHRqIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNHB4IDBweCByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAmPmRpdiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sZWZ0IHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICAgIFxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgLnRvcCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ueHNtcy1tb3JlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG59XHJcbmFwcC1zY2luZGV4dGpnb29kcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRqenQtbGlzdCB7XHJcbiAgLnRqenQtaXRlbSB7XHJcbiAgICAuZ29vZHMtYm94IHtcclxuICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_scindex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scindex.service */ "./src/app/services/scindex.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shop_content_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shop-content.service */ "./src/app/services/shop-content.service.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/search/search.component */ "./src/app/components/search/search.component.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-23 20:29:06
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-14 12:09:49
 * @Description: file content
 */







// import {ShopContentService} from "../../services/shop-content.service";

var Tab3Page = /** @class */ (function () {
    function Tab3Page(nav, getIndex, http, topage, route, shop, modalController) {
        this.nav = nav;
        this.getIndex = getIndex;
        this.http = http;
        this.topage = topage;
        this.route = route;
        this.shop = shop;
        this.modalController = modalController;
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.toolbaropacity = '0';
        this.slideOpts = {
            slidesPerView: 5,
            slidesPerGroup: 5,
            slidesPerColumn: 2,
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
        this.xsmsOptslv = {
            // slidesOffsetBefore : 50,
            slidesPerView: 2.6,
            slidesPerGroup: 1,
            spaceBetween: 10,
            pagination: ''
            // slidesOffsetAfter : 100,
        };
    };
    Tab3Page.prototype.ionViewDidEnter = function () {
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
            // this.ggtj7 = res['index_gg7'];
            // this.ggtj8 = res['index_gg8'];
            _this.titleList = res['index_title'];
            _this.pptj = res['index_gg9'];
            console.log(_this.pptj);
            _this.tjgoods = res['tj_goods'];
            _this.topgoods = res['top_goods'];
            _this.xsms = res['xsms'];
            _this.tjzt = res['tjzt'];
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
    Tab3Page.prototype.logScrolling = function ($event) {
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
    Tab3Page.prototype.setNavstatus = function (num) {
        // const el = document.querySelector('ion-toolbar');
        // el.style.setProperty('--opacity', num);
        this.toolbaropacity = (parseInt((num * 100).toString(), 10)).toString();
    };
    Tab3Page.prototype.openpage = function ($event) {
        console.log($event);
        // this.nav.navigateForward(['/productcontent'], );
        this.route.navigate(['/productcontent'], { queryParams: { id: $event.goods_id || $event.id, suppid: $event.supplier_id } });
    };
    Tab3Page.prototype.toPage = function (type, id, name) {
        this.topage.toPage(type, id, name);
    };
    Tab3Page.prototype.searchpage = function () {
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
    Tab3Page.prototype.loadData = function (event) {
        var _this = this;
        this.getIndex.getMoregoodshttp().then(function (res) {
            console.log(_this.moreGoods);
            event.target.complete();
        }).catch(function (err) {
            event.target.complete();
            event.target.disabled = true;
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_scindex_service__WEBPACK_IMPORTED_MODULE_3__["ScindexService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_4__["TopageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_shop_content_service__WEBPACK_IMPORTED_MODULE_7__["ShopContentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map