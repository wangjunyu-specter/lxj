(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/components/pricebutton/pricebutton.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pricebutton/pricebutton.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{name || '无标题'}}</span>\r\n"

/***/ }),

/***/ "./src/app/components/pricebutton/pricebutton.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/pricebutton/pricebutton.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  background-color: var(--ion-color-danger);\n  font-size: var(--ion-sm-text);\n  padding: 2px 5px;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9jb21wb25lbnRzL3ByaWNlYnV0dG9uL3ByaWNlYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFHaEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaWNlYnV0dG9uL3ByaWNlYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pricebutton/pricebutton.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pricebutton/pricebutton.component.ts ***!
  \*****************************************************************/
/*! exports provided: PricebuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricebuttonComponent", function() { return PricebuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricebuttonComponent = /** @class */ (function () {
    function PricebuttonComponent() {
    }
    PricebuttonComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PricebuttonComponent.prototype, "name", void 0);
    PricebuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricebutton',
            template: __webpack_require__(/*! ./pricebutton.component.html */ "./src/app/components/pricebutton/pricebutton.component.html"),
            styles: [__webpack_require__(/*! ./pricebutton.component.scss */ "./src/app/components/pricebutton/pricebutton.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricebuttonComponent);
    return PricebuttonComponent;
}());



/***/ }),

/***/ "./src/app/index-scroll.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/index-scroll.directive.ts ***!
  \*******************************************/
/*! exports provided: IndexScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexScrollDirective", function() { return IndexScrollDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexScrollDirective = /** @class */ (function () {
    function IndexScrollDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        console.log(this.el.nativeElement);
    }
    IndexScrollDirective.prototype.onscroll = function (btn) {
        console.log(123);
        this.renderer.addClass(this.el.nativeElement, 'myclass');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IndexScrollDirective.prototype, "onscroll", null);
    IndexScrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appIndexScroll]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], IndexScrollDirective);
    return IndexScrollDirective;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _index_scroll_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index-scroll.directive */ "./src/app/index-scroll.directive.ts");
/* harmony import */ var _xsg_box_xsg_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../xsg-box/xsg-box.component */ "./src/app/xsg-box/xsg-box.component.ts");
/* harmony import */ var _components_pricebutton_pricebutton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/pricebutton/pricebutton.component */ "./src/app/components/pricebutton/pricebutton.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










// import { PagetitleComponent } from '../components/pagetitle/pagetitle.component';


var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"], _index_scroll_directive__WEBPACK_IMPORTED_MODULE_7__["IndexScrollDirective"],
                _xsg_box_xsg_box_component__WEBPACK_IMPORTED_MODULE_8__["XsgBoxComponent"], _components_pricebutton_pricebutton_component__WEBPACK_IMPORTED_MODULE_9__["PricebuttonComponent"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"toPage(4)\" *ngIf=\"location\">\r\n        {{location.city}}\r\n        <img src=\"/assets/index-arrow.svg\">\r\n      </div>\r\n      <div class=\"center\" (click)=\"presentModal()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span *ngIf=\"shopdata\">{{keywords}}</span>\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"right\">-->\r\n        <!--<img src=\"/assets/ewm.svg\" alt=\"\">-->\r\n      <!--</div>-->\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"myslides-box\">\r\n    <div class=\"banner-skeleton-text\" *ngIf=\"!bannerList\">\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n    </div>\r\n    <ion-slides pager=\"true\"  *ngIf=\"bannerList\" id=\"myswiper\" [options]=\"bannerslideopts\">\r\n      <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{item.image  | imgsrc: http.domain}}\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <ion-row *ngIf=\"!navList\" class=\"nav-skeleton\">\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"!navList\" class=\"nav-skeleton\">\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n  </ion-row>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"margin-top: 10px;\"  *ngIf=\"navList\">\r\n    <ion-slide *ngFor=\"let item of navList\" (click)=\"toPage(item.type, item.menu_url)\">\r\n      <img class=\"nav-img\" src=\"{{item.menu_img | imgsrc: http.domain}}\">\r\n      <div>{{item.menu_name}}</div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <!--<div class=\"swiper-pagination2\"></div>-->\r\n  <ion-grid class=\"indexnav\">\r\n    <ion-row *ngIf=\"!navList2\" class=\"nav-skeleton\">\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"navList2\">\r\n      <ion-col *ngFor=\"let item of navList2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"xsqgs\" padding *ngIf=\"hdbox1 || hdbox2\">\r\n    <div class=\"left\"  (click)=\"toPage(hdbox1.type, hdbox1.url)\">\r\n      <img *ngIf=\"hdbox1\" [src]=\"hdbox1.image | imgsrc: http.domain\" alt=\"\">\r\n    </div>\r\n    <div class=\"right\">\r\n      <div class=\"xsqg-box\" *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid class=\"xsqg\" *ngIf=\"!hdbox1 && !hdbox2\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <!--<app-xsg-box [src]=\"'./assets/index/xsqg.png'\" [name]=\"'菲律宾长滩岛6天自由行'\" [price]=\"300\"></app-xsg-box>-->\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"xsqg-right\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"xsqg-right\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </div>\r\n        <!--<div class=\"xsqg-right\">-->\r\n          <!--<img src=\"./assets/index/xsqg3.png\">-->\r\n          <!--<div class=\"name\">户外主题游乐园预定</div>-->\r\n          <!--<app-pricebutton [name]=\"'仅剩64张'\"></app-pricebutton>-->\r\n        <!--</div>-->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!--<ion-grid class=\"xsqg\">-->\r\n    <!--<ion-row>-->\r\n      <!--<ion-col *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">-->\r\n        <!--<img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">-->\r\n      <!--</ion-col>-->\r\n    <!--</ion-row>-->\r\n  <!--</ion-grid>-->\r\n  <div padding *ngIf=\"!bzjx\">\r\n    <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div padding class=\"my-content\" *ngIf=\"bzjx\">\r\n    <app-pagetitle [myname]=\"bzjx['title']\" [type]=\"true\" [des]=\"bzjx['desc']\"></app-pagetitle>\r\n    <div class=\"jx-nav\">\r\n      <div *ngFor=\"let item of bzjx.sort_goods_arr; let i = index\"  [ngClass]=\"{active: bzjxActive === i}\" (click)=\"bzjxActive = i\">{{item.name}}</div>\r\n    </div>\r\n  </div>\r\n  <ion-grid *ngIf=\"bzjx\">\r\n    <ion-row *ngFor=\"let item of bzjx.sort_goods_arr; let i = index\" [ngClass]=\"{none: bzjxActive !== i}\">\r\n      <ion-col size=\"4\" *ngFor=\"let goods of item.goods\">\r\n        <app-tjproduct [id]=\"goods.goods_id\" [price]=\"goods.org_price\" [dessubstr]=\"true\" [des]=\"goods.goods_brief || goods.short_name\"\r\n                       [src]=\"http.zdomain + goods.original_img\" (tclick)=\"clickbzjx($event)\"></app-tjproduct>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!--<div padding  class=\"my-content\">暂时隐藏-->\r\n    <!--<app-pagetitle *ngIf=\"indexTitle\" [myname]=\"indexTitle.lxlgtitle\" [des]=\"indexTitle.lxlgdes\" [type]=\"true\"></app-pagetitle>-->\r\n    <!--<ion-slides pager=\"true\" [options]=\"slideOptslv\" class=\"lxlg\">-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n    <!--</ion-slides>-->\r\n  <!--</div>-->\r\n  <div padding class=\"my-content\">\r\n    <app-pagetitle *ngIf=\"indexTitle\" [myname]=\"indexTitle.rmzttitle\" [des]=\"indexTitle.rmztdes\" [type]=\"true\"></app-pagetitle>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <!--<app-tjproduct [name]=\"'租个海岛度假 我也可以当岛主'\"-->\r\n                       <!--[des]=\"'约上好友一起 人均很划算哦'\"-->\r\n                       <!--[src]=\"'./assets/index/rmzt.png'\"></app-tjproduct>-->\r\n        <img *ngIf=\"rmzt1\" [src]=\"rmzt1.image | imgsrc: http.domain\" alt=\"\" (click)=\"toPage(rmzt1.type, rmzt1.url)\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"rmzt2box\">\r\n    <ion-row *ngIf=\"rmzt2\">\r\n      <ion-col *ngFor=\"let item of rmzt2\" (click)=\"toPage(item.type, item.url)\">\r\n        <!--<app-tjproduct [name]=\"'亲子户外游'\"-->\r\n                       <!--[des]=\"'征服世界第一站'\"-->\r\n                       <!--[src]=\"'./assets/index/rmzt2.png'\"></app-tjproduct>-->\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"wntj\" padding>\r\n    <div  class=\"title-img\">\r\n      <img *ngIf=\"indexTitle\" [src]=\"indexTitle.wntj || './assets/wntj.svg'\" alt=\"\">\r\n    </div>\r\n    <div *ngFor=\"let item of catcalelist\">\r\n      <div class=\"yjfx\" *ngIf=\"item\">{{item.name}}</div>\r\n      <div *ngFor=\"let data of item.arr\">\r\n        <app-pagetitle [myname]=\"data.short_title\" [val]=\"data.id\" (setclick)=\"setopen($event)\" [type]=\"false\"></app-pagetitle>\r\n        <p  (click)=\"toPage(9, data.id)\">{{data.des}}</p>\r\n        <img (click)=\"toPage(9, data.id)\" *ngIf=\"data.img\" [src]=\"data.img | imgsrc: http.zdomain\">\r\n        <app-productlist *ngIf=\"data.goods && data.goods[0]\" [data]=\"data.goods[0]\" (open)=\"openpage($event)\"></app-productlist>\r\n        <app-productlist *ngIf=\"data.goods && data.goods[1]\" [data]=\"data.goods[1]\" (open)=\"openpage($event)\"></app-productlist>\r\n        <app-productlist *ngIf=\"data.goods && data.goods[2]\" [data]=\"data.goods[2]\" (open)=\"openpage($event)\"></app-productlist>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let item of bestGood\">\r\n      <div class=\"yjfx\" *ngIf=\"item.arr && item.arr.length > 0\"> {{item.title}}</div>\r\n      <app-productlist *ngFor=\"let citem of item.arr\" [data]=\"citem\" [type]=\"item.type\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n    <div *ngIf=\"moreGoods && moreGoods.length > 0\">\r\n      <div class=\"yjfx\">{{indexTitle.pttj}}</div>\r\n      <app-productlist *ngFor=\"let item of moreGoods\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n    <!--<ion-virtual-scroll [items]=\"moreGoods\" approxItemHeight=\"153px\">-->\r\n      <!--<div *virtualItem=\"let item\">-->\r\n        <!--<app-productlist [data]=\"item\" [imgtype]=\"1\"></app-productlist>-->\r\n      <!--</div>-->\r\n    <!--</ion-virtual-scroll>-->\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"crescent\"\r\n       loadingText=\"加载更多...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    width: 48px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 20px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 15px;\n    overflow: hidden; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex: 1;\n      width: 100%;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box span {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  .show-0 {\n  --opacity: 0; }\n  .show-1 {\n  --opacity: 0.01; }\n  .show-2 {\n  --opacity: 0.02; }\n  .show-3 {\n  --opacity: 0.03; }\n  .show-4 {\n  --opacity: 0.04; }\n  .show-5 {\n  --opacity: 0.05; }\n  .show-6 {\n  --opacity: 0.06; }\n  .show-7 {\n  --opacity: 0.07; }\n  .show-8 {\n  --opacity: 0.08; }\n  .show-9 {\n  --opacity: 0.09; }\n  .show-10 {\n  --opacity: 0.1; }\n  .show-11 {\n  --opacity: 0.11; }\n  .show-12 {\n  --opacity: 0.12; }\n  .show-13 {\n  --opacity: 0.13; }\n  .show-14 {\n  --opacity: 0.14; }\n  .show-15 {\n  --opacity: 0.15; }\n  .show-16 {\n  --opacity: 0.16; }\n  .show-17 {\n  --opacity: 0.17; }\n  .show-18 {\n  --opacity: 0.18; }\n  .show-19 {\n  --opacity: 0.19; }\n  .show-20 {\n  --opacity: 0.2; }\n  .show-21 {\n  --opacity: 0.21; }\n  .show-22 {\n  --opacity: 0.22; }\n  .show-23 {\n  --opacity: 0.23; }\n  .show-24 {\n  --opacity: 0.24; }\n  .show-25 {\n  --opacity: 0.25; }\n  .show-26 {\n  --opacity: 0.26; }\n  .show-27 {\n  --opacity: 0.27; }\n  .show-28 {\n  --opacity: 0.28; }\n  .show-29 {\n  --opacity: 0.29; }\n  .show-30 {\n  --opacity: 0.3; }\n  .show-31 {\n  --opacity: 0.31; }\n  .show-32 {\n  --opacity: 0.32; }\n  .show-33 {\n  --opacity: 0.33; }\n  .show-34 {\n  --opacity: 0.34; }\n  .show-35 {\n  --opacity: 0.35; }\n  .show-36 {\n  --opacity: 0.36; }\n  .show-37 {\n  --opacity: 0.37; }\n  .show-38 {\n  --opacity: 0.38; }\n  .show-39 {\n  --opacity: 0.39; }\n  .show-40 {\n  --opacity: 0.4; }\n  .show-41 {\n  --opacity: 0.41; }\n  .show-42 {\n  --opacity: 0.42; }\n  .show-43 {\n  --opacity: 0.43; }\n  .show-44 {\n  --opacity: 0.44; }\n  .show-45 {\n  --opacity: 0.45; }\n  .show-46 {\n  --opacity: 0.46; }\n  .show-47 {\n  --opacity: 0.47; }\n  .show-48 {\n  --opacity: 0.48; }\n  .show-49 {\n  --opacity: 0.49; }\n  .show-50 {\n  --opacity: 0.5; }\n  .show-51 {\n  --opacity: 0.51; }\n  .show-52 {\n  --opacity: 0.52; }\n  .show-53 {\n  --opacity: 0.53; }\n  .show-54 {\n  --opacity: 0.54; }\n  .show-55 {\n  --opacity: 0.55; }\n  .show-56 {\n  --opacity: 0.56; }\n  .show-57 {\n  --opacity: 0.57; }\n  .show-58 {\n  --opacity: 0.58; }\n  .show-59 {\n  --opacity: 0.59; }\n  .show-60 {\n  --opacity: 0.6; }\n  .show-61 {\n  --opacity: 0.61; }\n  .show-62 {\n  --opacity: 0.62; }\n  .show-63 {\n  --opacity: 0.63; }\n  .show-64 {\n  --opacity: 0.64; }\n  .show-65 {\n  --opacity: 0.65; }\n  .show-66 {\n  --opacity: 0.66; }\n  .show-67 {\n  --opacity: 0.67; }\n  .show-68 {\n  --opacity: 0.68; }\n  .show-69 {\n  --opacity: 0.69; }\n  .show-70 {\n  --opacity: 0.7; }\n  .show-71 {\n  --opacity: 0.71; }\n  .show-72 {\n  --opacity: 0.72; }\n  .show-73 {\n  --opacity: 0.73; }\n  .show-74 {\n  --opacity: 0.74; }\n  .show-75 {\n  --opacity: 0.75; }\n  .show-76 {\n  --opacity: 0.76; }\n  .show-77 {\n  --opacity: 0.77; }\n  .show-78 {\n  --opacity: 0.78; }\n  .show-79 {\n  --opacity: 0.79; }\n  .show-80 {\n  --opacity: 0.8; }\n  .show-81 {\n  --opacity: 0.81; }\n  .show-82 {\n  --opacity: 0.82; }\n  .show-83 {\n  --opacity: 0.83; }\n  .show-84 {\n  --opacity: 0.84; }\n  .show-85 {\n  --opacity: 0.85; }\n  .show-86 {\n  --opacity: 0.86; }\n  .show-87 {\n  --opacity: 0.87; }\n  .show-88 {\n  --opacity: 0.88; }\n  .show-89 {\n  --opacity: 0.89; }\n  .show-90 {\n  --opacity: 0.9; }\n  .show-91 {\n  --opacity: 0.91; }\n  .show-92 {\n  --opacity: 0.92; }\n  .show-93 {\n  --opacity: 0.93; }\n  .show-94 {\n  --opacity: 0.94; }\n  .show-95 {\n  --opacity: 0.95; }\n  .show-96 {\n  --opacity: 0.96; }\n  .show-97 {\n  --opacity: 0.97; }\n  .show-98 {\n  --opacity: 0.98; }\n  .show-99 {\n  --opacity: 0.99; }\n  .show-100 {\n  --opacity: 1; }\n  ion-content .nav-img {\n  width: 56px; }\n  ion-content #myswiper {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden;\n  --bullet-background-active: #fff; }\n  ion-content .banner-skeleton-text {\n  margin-top: var(--ion-platform-margin-top);\n  height: 200px;\n  width: 100%; }\n  ion-content ion-slide {\n  flex-direction: column;\n  font-size: var(--ion-text); }\n  ion-content ion-slides {\n  --bullet-background-active: var(--ion-color-secondary); }\n  ion-content .swiper-pagination2 {\n  text-align: center;\n  --bullet-background-active: var(--ion-color-secondary);\n  --bullet-background: #333; }\n  ion-content .swiper-pagination2 span {\n    margin: 0 5px !important; }\n  ion-content .swiper-pagination {\n  --bottom: 25px; }\n  ion-content .myslides-box {\n  position: relative; }\n  ion-content .myslides-box .footer {\n    left: -10%;\n    width: 120%;\n    position: absolute;\n    height: 8px;\n    z-index: 1000;\n    bottom: -5px;\n    overflow: hidden; }\n  ion-content .myslides-box .footer .footer-box {\n      border-radius: 50%;\n      height: 30px;\n      background-color: blue; }\n  ion-content .indexnav .four-nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n  padding: 7px 0px 0 5px; }\n  ion-content .indexnav .four-nav .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: flex-start;\n    font-size: var(--ion-sm-text); }\n  ion-content .indexnav .four-nav .footer img {\n      width: 20px; }\n  ion-content .xsqgs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: stretch; }\n  ion-content .xsqgs img {\n    float: left; }\n  ion-content .xsqgs .left, ion-content .xsqgs .right {\n    flex: 1; }\n  ion-content .xsqgs .left {\n    margin-right: 4px; }\n  ion-content .xsqgs .left img {\n      width: 100%; }\n  ion-content .xsqgs .right {\n    margin-left: 4px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: stretch; }\n  ion-content .xsqgs .right .xsqg-box {\n      flex: 1;\n      position: relative; }\n  ion-content .xsqgs .right .xsqg-box img {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0; }\n  ion-content .xsqgs .right .xsqg-box:first-of-type {\n        margin-bottom: 4px; }\n  ion-content .xsqgs .right .xsqg-box:last-of-type {\n        margin-top: 4px; }\n  ion-content .xsqg ion-skeleton-text {\n  height: 204px; }\n  ion-content .xsqg .xsqg-right {\n  position: relative;\n  color: #fff; }\n  ion-content .xsqg .xsqg-right ion-skeleton-text {\n    height: 100px; }\n  ion-content .xsqg .xsqg-right .name {\n    font-size: var(--ion-text);\n    position: absolute;\n    top: 33%;\n    margin-left: 15px;\n    margin-right: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  ion-content .xsqg .xsqg-right app-pricebutton {\n    position: absolute;\n    bottom: 12px;\n    left: 15px; }\n  ion-content .jx-nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  ion-content .jx-nav div {\n    font-size: var(--ion-text);\n    padding: 3px 7px;\n    border: 1px solid var(--ion-color-light);\n    border-radius: 5px;\n    margin-right: 5px;\n    color: var(--ion-color-dark); }\n  ion-content .jx-nav div.active {\n      background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n      color: #fff;\n      border: none;\n      position: relative; }\n  ion-content .jx-nav div.active::after {\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        border-width: 6px;\n        border-style: solid;\n        border-color: var(--ion-color-success) transparent transparent transparent;\n        position: absolute;\n        bottom: -11px;\n        left: 50%;\n        margin-left: -6px; }\n  ion-content .my-content {\n  margin-top: -10px;\n  --padding-top: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\n  ion-content .lxlg ion-slide {\n  color: #fff; }\n  ion-content .lxlg ion-slide .name {\n    position: absolute;\n    bottom: 50px;\n    padding: 5px 6px;\n    border-radius: 5px;\n    background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  ion-content .lxlg ion-slide p {\n    position: absolute;\n    bottom: 10px;\n    margin-top: 0; }\n  ion-content .rmzt2box {\n  margin-top: -15px; }\n  ion-content .wntj .title-img {\n  display: flex;\n  justify-content: center; }\n  ion-content .wntj .title-img img {\n    width: 75px; }\n  ion-content .wntj .yjfx {\n  color: var(--ion-color-secondary);\n  font-size: var(--ion-sm-text);\n  margin-top: 15px; }\n  ion-content .wntj p {\n  color: var(--ion-color-medium);\n  font-size: var(--ion-sm-text); }\n  .none {\n  display: none; }\n  .nav-skeleton ion-skeleton-text {\n  height: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlLEVBQUE7RUFOakI7SUFRSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0VBYnZCO01BZU0sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBaEJ0QjtJQW9CSSxXQUFXLEVBQUE7RUFwQmY7TUFzQk0sV0FBVyxFQUFBO0VBdEJqQjtJQTBCSSxvQkFBb0I7SUFDcEIsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBR3RCLHFCQUFxQjtJQUdyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTtFQXZDcEI7TUF5Q00sYUFBYTtNQUNiLE9BQU87TUFDUCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLDBCQUEwQjtNQUMxQixpQkFBaUIsRUFBQTtFQWpEdkI7UUFvRFEsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBQTtFQXREL0I7UUF5RFEsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0IsRUFBQTtFQUsxQjtFQUNFLDhGQUFhLEVBQUE7RUFJYjtFQUFnQixZQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsWUFBVSxFQUFBO0VBRTVCO0VBRUksV0FBVyxFQUFBO0VBRmY7RUFLSSwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGdDQUEyQixFQUFBO0VBUC9CO0VBVUksMENBQTBDO0VBQzFDLGFBQWE7RUFDYixXQUFXLEVBQUE7RUFaZjtFQWVJLHNCQUFzQjtFQUN0QiwwQkFBMEIsRUFBQTtFQWhCOUI7RUFtQkksc0RBQTJCLEVBQUE7RUFuQi9CO0VBc0JJLGtCQUFrQjtFQUNsQixzREFBMkI7RUFDM0IseUJBQW9CLEVBQUE7RUF4QnhCO0lBMEJNLHdCQUF3QixFQUFBO0VBMUI5QjtFQWlDSSxjQUFTLEVBQUE7RUFqQ2I7RUFvQ0ksa0JBQWtCLEVBQUE7RUFwQ3RCO0lBc0NNLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBNUN0QjtNQWdEUSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHNCQUFzQixFQUFBO0VBbEQ5QjtFQXdETSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBR3hDLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtFQWhFNUI7SUFrRVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDZCQUE2QixFQUFBO0VBdEVyQztNQXdFVSxXQUFXLEVBQUE7RUF4RXJCO0VBOEVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG9CQUFvQixFQUFBO0VBakZ4QjtJQW1GTSxXQUFXLEVBQUE7RUFuRmpCO0lBc0ZNLE9BQU8sRUFBQTtFQXRGYjtJQXlGTSxpQkFBaUIsRUFBQTtFQXpGdkI7TUEyRlEsV0FBVyxFQUFBO0VBM0ZuQjtJQStGTSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0Isb0JBQW9CLEVBQUE7RUFuRzFCO01BcUdRLE9BQU87TUFDUCxrQkFBa0IsRUFBQTtFQXRHMUI7UUF3R1UsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU8sRUFBQTtFQTVHakI7UUErR1Usa0JBQWtCLEVBQUE7RUEvRzVCO1FBa0hVLGVBQWUsRUFBQTtFQWxIekI7RUF5SE0sYUFBYSxFQUFBO0VBekhuQjtFQTRITSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBN0hqQjtJQStIUSxhQUFhLEVBQUE7RUEvSHJCO0lBa0lRLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTtFQXpJL0I7SUE0SVEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVLEVBQUE7RUE5SWxCO0VBbUpJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBO0VBdEp2QjtJQXdKTSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUd4QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDRCQUE0QixFQUFBO0VBL0psQztNQWlLUSw0RkFBNEY7TUFDNUYsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtFQXBLMUI7UUFzS1UsV0FBVztRQUNYLGNBQWM7UUFDZCxRQUFRO1FBQ1IsU0FBUztRQUNULGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsMEVBQXlFO1FBQ3pFLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsU0FBUztRQUNULGlCQUFpQixFQUFBO0VBaEwzQjtFQXNMSSxpQkFBaUI7RUFDakIsZ0JBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7RUF6THJCO0VBNkxNLFdBQVcsRUFBQTtFQTdMakI7SUErTFEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFHaEIsa0JBQWtCO0lBQ2xCLDRGQUE0RixFQUFBO0VBck1wRztJQXdNUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQTFNckI7RUErTUksaUJBQWlCLEVBQUE7RUEvTXJCO0VBbU5NLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFQXBON0I7SUFzTlEsV0FBVyxFQUFBO0VBdE5uQjtFQTBOTSxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLGdCQUFnQixFQUFBO0VBNU50QjtFQStOTSw4QkFBOEI7RUFDOUIsNkJBQTZCLEVBQUE7RUFJbkM7RUFDRSxhQUFhLEVBQUE7RUFHZjtFQUVJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlYXJjaC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAvLy0tb3BhY2l0eTogMDtcclxufVxyXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoIDEwMCB7XHJcbiAgLnNob3ctI3skaX0geyAgIC0tb3BhY2l0eTogI3skaSAvIDEwMH07IH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLm5hdi1pbWcge1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgfVxyXG4gICNteXN3aXBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7XHJcbiAgfVxyXG4gIC5iYW5uZXItc2tlbGV0b24tdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIH1cclxuICAuc3dpcGVyLXBhZ2luYXRpb24yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luOiAwIDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgIC0tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICAubXlzbGlkZXMtYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgICB3aWR0aDogMTIwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuZm9vdGVyLWJveCB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbmRleG5hdiB7XHJcbiAgICAuZm91ci1uYXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiA3cHggMHB4IDAgNXB4O1xyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAueHNxZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgaW1nIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAubGVmdCwgLnJpZ2h0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgLnhzcWctYm94IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC54c3FnIHtcclxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgaGVpZ2h0OiAyMDRweDtcclxuICAgIH1cclxuICAgIC54c3FnLXJpZ2h0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDMzJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgICAgIGFwcC1wcmljZWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTJweDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5qeC1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGl2IHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA3cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogLTExcHg7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm15LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmx4bGcge1xyXG4gICAgaW9uLXNsaWRlIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA2cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ybXp0MmJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcbiAgLndudGoge1xyXG4gICAgLnRpdGxlLWltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAueWpmeCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtc2tlbGV0b24ge1xyXG4gIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_shop_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/shop-content.service */ "./src/app/services/shop-content.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




// import { SearchPage } from '../search/search.page';





// import { ShopNavService } from '../services/shop-nav.service';
// import { GetshopService } from '../services/getshop.service';

var Tab1Page = /** @class */ (function () {
    function Tab1Page(modalController, http, shop, topage, user, route) {
        this.modalController = modalController;
        this.http = http;
        this.shop = shop;
        this.topage = topage;
        this.user = user;
        this.route = route;
    }
    Tab1Page.prototype.ngOnInit = function () {
        // this.shopdata = {}
        this.toolbaropacity = '0';
        this.bzjxActive = 0;
        this.bestGood = [];
        this.slideOpts = {
            slidesPerView: 5,
            slidesPerGroup: 5,
            slidesPerColumn: 2,
            pagination: {
            // el: '.swiper-pagination2'
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
        this.bannerslideopts = {
        // pagination: {
        //   el: '.swiper-pagination',
        //   // bulletClass: 'my-swiper-item'
        //   renderBullet: function (index, className) {
        //     console.log(className)
        //     return '<span class="' + className + '" style="margin: 0 5px;">&nbsp;</span>';
        //   }
        // },
        };
        this.location = this.user.getLocation();
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        this.moreGoods = this.shop.getMoregoods();
        console.log(this.moreGoods);
        this.getShopcontent();
    };
    Tab1Page.prototype.getShopcontent = function () {
        var _this = this;
        this.shop.getShop().then(function (res) {
            _this.shopdata = res;
            console.log(res);
            _this.navList = _this.shop.getIndexnav();
            _this.bannerList = _this.shop.getIndexbanner();
            _this.bzjx = _this.shop.getBzjx();
            _this.rmzt1 = _this.shop.getRmzt();
            _this.rmzt2 = _this.shop.getRmzt2();
            _this.indexTitle = _this.shop.getIndextitle();
            _this.hdbox1 = _this.shop.getHdbox1();
            _this.hdbox2 = _this.shop.getHdbox2();
            _this.bestGood = _this.shop.getBest();
            // alert(JSON.stringify(this.bestGood))
            _this.navList2 = _this.shop.getIndex3box();
            _this.catcalelist = _this.shop.getCaticle();
            if (_this.shopdata.search_keywords) {
                var key = _this.shopdata.search_keywords.split('|')[0];
                _this.keywords = key.split(',')[0];
            }
            else {
                _this.keywords = _this.shopdata['keywords'][0];
            }
        }).catch(function (err) { });
    };
    Tab1Page.prototype.doRefresh = function (event) {
        var _this = this;
        console.log('Begin async operation');
        this.shop.resetgetShop().then(function () {
            event.target.complete();
            _this.getShopcontent();
        }, function () {
            event.target.complete();
        }).catch(function (err) {
            event.target.complete();
        });
    };
    Tab1Page.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                            componentProps: { type: 2 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.logScrolling = function ($event) {
        var top = $event.detail.scrollTop;
        if (!this.scroolold) {
            this.scroolold = top;
        }
        else {
            if (this.scroolold > 44 && top > 44) {
                this.scroolold = top;
                return false;
            }
            this.scroolold = top;
        }
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
        }
        else {
            num = 1;
        }
        this.setNavstatus(num);
    };
    Tab1Page.prototype.setNavstatus = function (num) {
        // const el = document.querySelector('ion-toolbar');
        // el.style.setProperty('--opacity', num);
        this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();
    };
    Tab1Page.prototype.clickbzjx = function ($event) {
        console.log($event);
        this.toPage(2, $event);
    };
    Tab1Page.prototype.openpage = function ($event) {
        console.log($event);
        // this.nav.navigateForward(['/productcontent'], );
        this.route.navigate(['/productcontent'], { queryParams: { id: $event.goods_id || $event.id, suppid: $event.supplier_id } });
    };
    Tab1Page.prototype.setopen = function ($event) {
        console.log($event);
        this.toPage(9, $event.value);
    };
    /**
     * type 1 商品分类列表 2 商品详情 3 主题 4 选择选择地址 5 搜索 6 商城首页 7 店铺首页
     * @param type
     * @param id
     */
    Tab1Page.prototype.toPage = function (type, id, name) {
        this.topage.toPage(type, id, name);
    };
    Tab1Page.prototype.loadData = function (event) {
        this.shop.getMoregoodshttp().then(function (res) {
            event.target.complete();
        }).catch(function (err) {
            event.target.complete();
            event.target.disabled = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], Tab1Page.prototype, "infiniteScroll", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_shop_content_service__WEBPACK_IMPORTED_MODULE_6__["ShopContentService"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_7__["TopageService"], _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ }),

/***/ "./src/app/xsg-box/xsg-box.component.html":
/*!************************************************!*\
  !*** ./src/app/xsg-box/xsg-box.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <img src=\"{{src}}\">\r\n  <img class=\"qgbj\" src=\"./assets/xsqgbg.svg\" />\r\n  <img class=\"qgtext\" src=\"./assets/xsqgtext.svg\" />\r\n  <div class=\"time\"><span>10</span>:<span>10</span>:<span>10</span></div>\r\n  <div class=\"title\">{{name}}</div>\r\n  <span class=\"price\">¥ {{price}}起</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/xsg-box/xsg-box.component.scss":
/*!************************************************!*\
  !*** ./src/app/xsg-box/xsg-box.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  .box .qgbj {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 84%;\n    --padding: 0;\n    --margin: 0; }\n  .box .qgtext {\n    position: absolute;\n    top: 2%;\n    width: 25%;\n    left: 5%; }\n  .box div.time {\n    position: absolute;\n    top: 2px;\n    left: 40%;\n    font-size: var(--ion-sm-text);\n    color: #fff; }\n  .box div.time span {\n      padding: 0 2px;\n      background-color: #fff;\n      display: inline-block;\n      color: var(--ion-color-danger);\n      margin-right: 1px;\n      margin-left: 1px;\n      border-radius: 3px; }\n  .box .title {\n    font-size: var(--ion-text);\n    position: absolute;\n    bottom: 30px;\n    color: #fff;\n    margin-left: 15px;\n    margin-right: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .box .price {\n    position: absolute;\n    display: block;\n    font-size: var(--ion-sm-text);\n    color: #fff;\n    background-color: var(--ion-color-danger);\n    bottom: 10px;\n    border-radius: 5px;\n    padding: 2px 5px;\n    margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC94c2ctYm94L3hzZy1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTtFQUhkO0lBS0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVU7SUFDVixXQUFTLEVBQUE7RUFWYjtJQWFJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFFBQVEsRUFBQTtFQWhCWjtJQW1CSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsV0FBVyxFQUFBO0VBdkJmO01BeUJNLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIscUJBQXFCO01BQ3JCLDhCQUE4QjtNQUM5QixpQkFBaUI7TUFDakIsZ0JBQWdCO01BR2hCLGtCQUFrQixFQUFBO0VBakN4QjtJQXFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0VBN0MzQjtJQWdESSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLFlBQVk7SUFHWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAveHNnLWJveC94c2ctYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAucWdiaiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDg0JTtcclxuICAgIC0tcGFkZGluZzogMDtcclxuICAgIC0tbWFyZ2luOiAwO1xyXG4gIH1cclxuICAucWd0ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMiU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgfVxyXG4gIGRpdi50aW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIC5wcmljZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/xsg-box/xsg-box.component.ts":
/*!**********************************************!*\
  !*** ./src/app/xsg-box/xsg-box.component.ts ***!
  \**********************************************/
/*! exports provided: XsgBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XsgBoxComponent", function() { return XsgBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XsgBoxComponent = /** @class */ (function () {
    function XsgBoxComponent() {
    }
    XsgBoxComponent.prototype.ngOnInit = function () {
        this.type = 1;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], XsgBoxComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], XsgBoxComponent.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], XsgBoxComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], XsgBoxComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], XsgBoxComponent.prototype, "price", void 0);
    XsgBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xsg-box',
            template: __webpack_require__(/*! ./xsg-box.component.html */ "./src/app/xsg-box/xsg-box.component.html"),
            styles: [__webpack_require__(/*! ./xsg-box.component.scss */ "./src/app/xsg-box/xsg-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], XsgBoxComponent);
    return XsgBoxComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map