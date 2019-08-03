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

module.exports = "<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"toPage(4)\" *ngIf=\"location\">\r\n        <span>{{location.city}}</span>\r\n        <img src=\"/assets/index-arrow.svg\">\r\n      </div>\r\n      <div class=\"center\" (click)=\"presentModal()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span *ngIf=\"shopdata\">{{keywords}}</span>\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"right\">-->\r\n        <!--<img src=\"/assets/ewm.svg\" alt=\"\">-->\r\n      <!--</div>-->\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"myslides-box\">\r\n    <div class=\"banner-skeleton-text\" *ngIf=\"!bannerList\">\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n    </div>\r\n    <ion-slides pager=\"true\"  *ngIf=\"bannerList\" id=\"myswiper\" [options]=\"bannerslideopts\">\r\n      <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{item.image  | imgsrc: http.domain}}\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <ion-row *ngIf=\"!navList\" class=\"nav-skeleton\">\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"!navList\" class=\"nav-skeleton\">\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n  </ion-row>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"margin-top: 10px;\"  *ngIf=\"navList\">\r\n    <ion-slide *ngFor=\"let item of navList\" (click)=\"toPage(item.type, item.menu_url)\">\r\n      <img class=\"nav-img\" src=\"{{item.menu_img | imgsrc: http.domain}}\">\r\n      <div>{{item.menu_name}}</div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <!--<div class=\"swiper-pagination2\"></div>-->\r\n  <ion-grid class=\"indexnav\">\r\n    <ion-row *ngIf=\"!navList2\" class=\"nav-skeleton\">\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"navList2\">\r\n      <ion-col *ngFor=\"let item of navList2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"xsqgs\" padding *ngIf=\"hdbox1 || hdbox2\">\r\n    <div class=\"left\"  (click)=\"toPage(hdbox1.type, hdbox1.url)\">\r\n      <img *ngIf=\"hdbox1\" [src]=\"hdbox1.image | imgsrc: http.domain\" alt=\"\">\r\n    </div>\r\n    <div class=\"right\">\r\n      <div class=\"xsqg-box\" *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid class=\"xsqg\" *ngIf=\"!hdbox1 && !hdbox2\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <!--<app-xsg-box [src]=\"'./assets/index/xsqg.png'\" [name]=\"'菲律宾长滩岛6天自由行'\" [price]=\"300\"></app-xsg-box>-->\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div class=\"xsqg-right\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"xsqg-right\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </div>\r\n        <!--<div class=\"xsqg-right\">-->\r\n          <!--<img src=\"./assets/index/xsqg3.png\">-->\r\n          <!--<div class=\"name\">户外主题游乐园预定</div>-->\r\n          <!--<app-pricebutton [name]=\"'仅剩64张'\"></app-pricebutton>-->\r\n        <!--</div>-->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!--<ion-grid class=\"xsqg\">-->\r\n    <!--<ion-row>-->\r\n      <!--<ion-col *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">-->\r\n        <!--<img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">-->\r\n      <!--</ion-col>-->\r\n    <!--</ion-row>-->\r\n  <!--</ion-grid>-->\r\n  <div padding *ngIf=\"!bzjx\">\r\n    <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div padding class=\"my-content\" *ngIf=\"bzjx\">\r\n    <app-pagetitle [myname]=\"bzjx['title']\" [type]=\"true\" [des]=\"bzjx['desc']\"></app-pagetitle>\r\n    <div class=\"jx-nav\">\r\n      <div *ngFor=\"let item of bzjx.sort_goods_arr; let i = index\"  [ngClass]=\"{active: bzjxActive === i}\" (click)=\"bzjxActive = i\">{{item.name}}</div>\r\n    </div>\r\n  </div>\r\n  <ion-grid *ngIf=\"bzjx\">\r\n    <ion-row *ngFor=\"let item of bzjx.sort_goods_arr; let i = index\" [ngClass]=\"{none: bzjxActive !== i}\">\r\n      <ion-col size=\"6\" *ngFor=\"let goods of item.goods\">\r\n        <app-tjproduct [id]=\"goods.goods_id\" [price]=\"goods.org_price\" [dessubstr]=\"true\" [des]=\"goods.goods_brief || goods.short_name\"\r\n                       [src]=\"http.zdomain + goods.original_img\" [dessubstrnum]=\"15\" (tclick)=\"clickbzjx($event)\"></app-tjproduct>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!--<div padding  class=\"my-content\">暂时隐藏-->\r\n    <!--<app-pagetitle *ngIf=\"indexTitle\" [myname]=\"indexTitle.lxlgtitle\" [des]=\"indexTitle.lxlgdes\" [type]=\"true\"></app-pagetitle>-->\r\n    <!--<ion-slides pager=\"true\" [options]=\"slideOptslv\" class=\"lxlg\">-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n    <!--</ion-slides>-->\r\n  <!--</div>-->\r\n  <div padding class=\"my-content\">\r\n    <app-pagetitle *ngIf=\"indexTitle\" [myname]=\"indexTitle.rmzttitle\" [des]=\"indexTitle.rmztdes\" [type]=\"true\"></app-pagetitle>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <!--<app-tjproduct [name]=\"'租个海岛度假 我也可以当岛主'\"-->\r\n                       <!--[des]=\"'约上好友一起 人均很划算哦'\"-->\r\n                       <!--[src]=\"'./assets/index/rmzt.png'\"></app-tjproduct>-->\r\n        <img *ngIf=\"rmzt1\" [src]=\"rmzt1.image | imgsrc: http.domain\" alt=\"\" (click)=\"toPage(rmzt1.type, rmzt1.url)\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"rmzt2box\">\r\n    <ion-row *ngIf=\"rmzt2\">\r\n      <ion-col *ngFor=\"let item of rmzt2\" (click)=\"toPage(item.type, item.url)\">\r\n        <!--<app-tjproduct [name]=\"'亲子户外游'\"-->\r\n                       <!--[des]=\"'征服世界第一站'\"-->\r\n                       <!--[src]=\"'./assets/index/rmzt2.png'\"></app-tjproduct>-->\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"wntj\" padding>\r\n    <div  class=\"title-img\">\r\n      <img *ngIf=\"indexTitle\" [src]=\"indexTitle.wntj || './assets/wntj.svg'\" alt=\"\">\r\n    </div>\r\n    <div *ngFor=\"let item of catcalelist\">\r\n      <div class=\"yjfx\" *ngIf=\"item\">{{item.name}}</div>\r\n      <div *ngFor=\"let data of item.arr\">\r\n        <app-pagetitle [myname]=\"data.short_title\" [val]=\"data.id\" (setclick)=\"setopen($event)\" [type]=\"false\"></app-pagetitle>\r\n        <p  (click)=\"toPage(9, data.id)\">{{data.des}}</p>\r\n        <img (click)=\"toPage(9, data.id)\" *ngIf=\"data.img\" [src]=\"data.img | imgsrc: http.zdomain\">\r\n        <app-productlist *ngIf=\"data.goods && data.goods[0]\" [ishw]=\"true\" [data]=\"data.goods[0]\" (open)=\"openpage($event)\"></app-productlist>\r\n        <app-productlist *ngIf=\"data.goods && data.goods[1]\" [ishw]=\"true\" [data]=\"data.goods[1]\" (open)=\"openpage($event)\"></app-productlist>\r\n        <app-productlist *ngIf=\"data.goods && data.goods[2]\" [ishw]=\"true\" [data]=\"data.goods[2]\" (open)=\"openpage($event)\"></app-productlist>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let item of bestGood\">\r\n      <div class=\"yjfx\" *ngIf=\"item.arr && item.arr.length > 0\"> {{item.title}}</div>\r\n      <app-productlist *ngFor=\"let citem of item.arr\" [ishw]=\"true\" [data]=\"citem\" [type]=\"item.type\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n    <div *ngIf=\"moreGoods && moreGoods.length > 0\">\r\n      <div class=\"yjfx\">{{indexTitle.pttj}}</div>\r\n      <app-productlist *ngFor=\"let item of moreGoods\" [ishw]=\"true\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n    <!--<ion-virtual-scroll [items]=\"moreGoods\" approxItemHeight=\"153px\">-->\r\n      <!--<div *virtualItem=\"let item\">-->\r\n        <!--<app-productlist [data]=\"item\" [imgtype]=\"1\"></app-productlist>-->\r\n      <!--</div>-->\r\n    <!--</ion-virtual-scroll>-->\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"crescent\"\r\n       loadingText=\"加载更多...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    min-width: 48px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .left span {\n      max-width: 75px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      display: inline-block; }\n  .search-bar .right {\n    width: 20px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 15px;\n    overflow: hidden; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex: 1;\n      width: 100%;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box span {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  .show-0 {\n  --opacity: 0; }\n  .show-1 {\n  --opacity: 0.01; }\n  .show-2 {\n  --opacity: 0.02; }\n  .show-3 {\n  --opacity: 0.03; }\n  .show-4 {\n  --opacity: 0.04; }\n  .show-5 {\n  --opacity: 0.05; }\n  .show-6 {\n  --opacity: 0.06; }\n  .show-7 {\n  --opacity: 0.07; }\n  .show-8 {\n  --opacity: 0.08; }\n  .show-9 {\n  --opacity: 0.09; }\n  .show-10 {\n  --opacity: 0.1; }\n  .show-11 {\n  --opacity: 0.11; }\n  .show-12 {\n  --opacity: 0.12; }\n  .show-13 {\n  --opacity: 0.13; }\n  .show-14 {\n  --opacity: 0.14; }\n  .show-15 {\n  --opacity: 0.15; }\n  .show-16 {\n  --opacity: 0.16; }\n  .show-17 {\n  --opacity: 0.17; }\n  .show-18 {\n  --opacity: 0.18; }\n  .show-19 {\n  --opacity: 0.19; }\n  .show-20 {\n  --opacity: 0.2; }\n  .show-21 {\n  --opacity: 0.21; }\n  .show-22 {\n  --opacity: 0.22; }\n  .show-23 {\n  --opacity: 0.23; }\n  .show-24 {\n  --opacity: 0.24; }\n  .show-25 {\n  --opacity: 0.25; }\n  .show-26 {\n  --opacity: 0.26; }\n  .show-27 {\n  --opacity: 0.27; }\n  .show-28 {\n  --opacity: 0.28; }\n  .show-29 {\n  --opacity: 0.29; }\n  .show-30 {\n  --opacity: 0.3; }\n  .show-31 {\n  --opacity: 0.31; }\n  .show-32 {\n  --opacity: 0.32; }\n  .show-33 {\n  --opacity: 0.33; }\n  .show-34 {\n  --opacity: 0.34; }\n  .show-35 {\n  --opacity: 0.35; }\n  .show-36 {\n  --opacity: 0.36; }\n  .show-37 {\n  --opacity: 0.37; }\n  .show-38 {\n  --opacity: 0.38; }\n  .show-39 {\n  --opacity: 0.39; }\n  .show-40 {\n  --opacity: 0.4; }\n  .show-41 {\n  --opacity: 0.41; }\n  .show-42 {\n  --opacity: 0.42; }\n  .show-43 {\n  --opacity: 0.43; }\n  .show-44 {\n  --opacity: 0.44; }\n  .show-45 {\n  --opacity: 0.45; }\n  .show-46 {\n  --opacity: 0.46; }\n  .show-47 {\n  --opacity: 0.47; }\n  .show-48 {\n  --opacity: 0.48; }\n  .show-49 {\n  --opacity: 0.49; }\n  .show-50 {\n  --opacity: 0.5; }\n  .show-51 {\n  --opacity: 0.51; }\n  .show-52 {\n  --opacity: 0.52; }\n  .show-53 {\n  --opacity: 0.53; }\n  .show-54 {\n  --opacity: 0.54; }\n  .show-55 {\n  --opacity: 0.55; }\n  .show-56 {\n  --opacity: 0.56; }\n  .show-57 {\n  --opacity: 0.57; }\n  .show-58 {\n  --opacity: 0.58; }\n  .show-59 {\n  --opacity: 0.59; }\n  .show-60 {\n  --opacity: 0.6; }\n  .show-61 {\n  --opacity: 0.61; }\n  .show-62 {\n  --opacity: 0.62; }\n  .show-63 {\n  --opacity: 0.63; }\n  .show-64 {\n  --opacity: 0.64; }\n  .show-65 {\n  --opacity: 0.65; }\n  .show-66 {\n  --opacity: 0.66; }\n  .show-67 {\n  --opacity: 0.67; }\n  .show-68 {\n  --opacity: 0.68; }\n  .show-69 {\n  --opacity: 0.69; }\n  .show-70 {\n  --opacity: 0.7; }\n  .show-71 {\n  --opacity: 0.71; }\n  .show-72 {\n  --opacity: 0.72; }\n  .show-73 {\n  --opacity: 0.73; }\n  .show-74 {\n  --opacity: 0.74; }\n  .show-75 {\n  --opacity: 0.75; }\n  .show-76 {\n  --opacity: 0.76; }\n  .show-77 {\n  --opacity: 0.77; }\n  .show-78 {\n  --opacity: 0.78; }\n  .show-79 {\n  --opacity: 0.79; }\n  .show-80 {\n  --opacity: 0.8; }\n  .show-81 {\n  --opacity: 0.81; }\n  .show-82 {\n  --opacity: 0.82; }\n  .show-83 {\n  --opacity: 0.83; }\n  .show-84 {\n  --opacity: 0.84; }\n  .show-85 {\n  --opacity: 0.85; }\n  .show-86 {\n  --opacity: 0.86; }\n  .show-87 {\n  --opacity: 0.87; }\n  .show-88 {\n  --opacity: 0.88; }\n  .show-89 {\n  --opacity: 0.89; }\n  .show-90 {\n  --opacity: 0.9; }\n  .show-91 {\n  --opacity: 0.91; }\n  .show-92 {\n  --opacity: 0.92; }\n  .show-93 {\n  --opacity: 0.93; }\n  .show-94 {\n  --opacity: 0.94; }\n  .show-95 {\n  --opacity: 0.95; }\n  .show-96 {\n  --opacity: 0.96; }\n  .show-97 {\n  --opacity: 0.97; }\n  .show-98 {\n  --opacity: 0.98; }\n  .show-99 {\n  --opacity: 0.99; }\n  .show-100 {\n  --opacity: 1; }\n  ion-content .nav-img {\n  width: 56px; }\n  ion-content #myswiper {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden;\n  --bullet-background-active: #fff; }\n  ion-content .banner-skeleton-text {\n  margin-top: var(--ion-platform-margin-top);\n  height: 200px;\n  width: 100%; }\n  ion-content ion-slide {\n  flex-direction: column;\n  font-size: var(--ion-text); }\n  ion-content ion-slides {\n  --bullet-background-active: var(--ion-color-secondary); }\n  ion-content .swiper-pagination2 {\n  text-align: center;\n  --bullet-background-active: var(--ion-color-secondary);\n  --bullet-background: #333; }\n  ion-content .swiper-pagination2 span {\n    margin: 0 5px !important; }\n  ion-content .swiper-pagination {\n  --bottom: 25px; }\n  ion-content .myslides-box {\n  position: relative; }\n  ion-content .myslides-box .footer {\n    left: -10%;\n    width: 120%;\n    position: absolute;\n    height: 8px;\n    z-index: 1000;\n    bottom: -5px;\n    overflow: hidden; }\n  ion-content .myslides-box .footer .footer-box {\n      border-radius: 50%;\n      height: 30px;\n      background-color: blue; }\n  ion-content .indexnav .four-nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n  padding: 7px 0px 0 5px; }\n  ion-content .indexnav .four-nav .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: flex-start;\n    font-size: var(--ion-sm-text); }\n  ion-content .indexnav .four-nav .footer img {\n      width: 20px; }\n  ion-content .xsqgs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: stretch; }\n  ion-content .xsqgs img {\n    float: left; }\n  ion-content .xsqgs .left, ion-content .xsqgs .right {\n    flex: 1; }\n  ion-content .xsqgs .left {\n    margin-right: 4px; }\n  ion-content .xsqgs .left img {\n      width: 100%; }\n  ion-content .xsqgs .right {\n    margin-left: 4px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: stretch; }\n  ion-content .xsqgs .right .xsqg-box {\n      flex: 1;\n      position: relative; }\n  ion-content .xsqgs .right .xsqg-box img {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0; }\n  ion-content .xsqgs .right .xsqg-box:first-of-type {\n        margin-bottom: 4px; }\n  ion-content .xsqgs .right .xsqg-box:last-of-type {\n        margin-top: 4px; }\n  ion-content .xsqg ion-skeleton-text {\n  height: 204px; }\n  ion-content .xsqg .xsqg-right {\n  position: relative;\n  color: #fff; }\n  ion-content .xsqg .xsqg-right ion-skeleton-text {\n    height: 100px; }\n  ion-content .xsqg .xsqg-right .name {\n    font-size: var(--ion-text);\n    position: absolute;\n    top: 33%;\n    margin-left: 15px;\n    margin-right: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  ion-content .xsqg .xsqg-right app-pricebutton {\n    position: absolute;\n    bottom: 12px;\n    left: 15px; }\n  ion-content .jx-nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  ion-content .jx-nav div {\n    font-size: var(--ion-text);\n    padding: 3px 7px;\n    border: 1px solid var(--ion-color-light);\n    border-radius: 5px;\n    margin-right: 5px;\n    color: var(--ion-color-dark); }\n  ion-content .jx-nav div.active {\n      background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n      color: #fff;\n      border: none;\n      position: relative; }\n  ion-content .jx-nav div.active::after {\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        border-width: 6px;\n        border-style: solid;\n        border-color: var(--ion-color-success) transparent transparent transparent;\n        position: absolute;\n        bottom: -11px;\n        left: 50%;\n        margin-left: -6px; }\n  ion-content .my-content {\n  margin-top: -10px;\n  --padding-top: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\n  ion-content .lxlg ion-slide {\n  color: #fff; }\n  ion-content .lxlg ion-slide .name {\n    position: absolute;\n    bottom: 50px;\n    padding: 5px 6px;\n    border-radius: 5px;\n    background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  ion-content .lxlg ion-slide p {\n    position: absolute;\n    bottom: 10px;\n    margin-top: 0; }\n  ion-content .rmzt2box {\n  margin-top: -15px; }\n  ion-content .wntj .title-img {\n  display: flex;\n  justify-content: center; }\n  ion-content .wntj .title-img img {\n    width: 75px; }\n  ion-content .wntj .yjfx {\n  color: var(--ion-color-secondary);\n  font-size: var(--ion-sm-text);\n  margin-top: 15px; }\n  ion-content .wntj p {\n  color: var(--ion-color-medium);\n  font-size: var(--ion-sm-text); }\n  .none {\n  display: none; }\n  .nav-skeleton ion-skeleton-text {\n  height: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlLEVBQUE7RUFOakI7SUFRSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0VBYnZCO01BZU0sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBaEJ0QjtNQW1CTSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIscUJBQXFCLEVBQUE7RUF2QjNCO0lBMkJJLFdBQVcsRUFBQTtFQTNCZjtNQTZCTSxXQUFXLEVBQUE7RUE3QmpCO0lBaUNJLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsY0FBYztJQUNkLFlBQVk7SUFDWixzQkFBc0I7SUFHdEIscUJBQXFCO0lBR3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0VBOUNwQjtNQWdETSxhQUFhO01BQ2IsT0FBTztNQUNQLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsMEJBQTBCO01BQzFCLGlCQUFpQixFQUFBO0VBeER2QjtRQTJEUSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFBO0VBN0QvQjtRQWdFUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBSzFCO0VBQ0UsOEZBQWEsRUFBQTtFQUliO0VBQWdCLFlBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixZQUFVLEVBQUE7RUFFNUI7RUFFSSxXQUFXLEVBQUE7RUFGZjtFQUtJLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsZ0NBQTJCLEVBQUE7RUFQL0I7RUFVSSwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLFdBQVcsRUFBQTtFQVpmO0VBZUksc0JBQXNCO0VBQ3RCLDBCQUEwQixFQUFBO0VBaEI5QjtFQW1CSSxzREFBMkIsRUFBQTtFQW5CL0I7RUFzQkksa0JBQWtCO0VBQ2xCLHNEQUEyQjtFQUMzQix5QkFBb0IsRUFBQTtFQXhCeEI7SUEwQk0sd0JBQXdCLEVBQUE7RUExQjlCO0VBaUNJLGNBQVMsRUFBQTtFQWpDYjtFQW9DSSxrQkFBa0IsRUFBQTtFQXBDdEI7SUFzQ00sVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUE1Q3RCO01BZ0RRLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osc0JBQXNCLEVBQUE7RUFsRDlCO0VBd0RNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFHeEMsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBO0VBaEU1QjtJQWtFUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsNkJBQTZCLEVBQUE7RUF0RXJDO01Bd0VVLFdBQVcsRUFBQTtFQXhFckI7RUE4RUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isb0JBQW9CLEVBQUE7RUFqRnhCO0lBbUZNLFdBQVcsRUFBQTtFQW5GakI7SUFzRk0sT0FBTyxFQUFBO0VBdEZiO0lBeUZNLGlCQUFpQixFQUFBO0VBekZ2QjtNQTJGUSxXQUFXLEVBQUE7RUEzRm5CO0lBK0ZNLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixvQkFBb0IsRUFBQTtFQW5HMUI7TUFxR1EsT0FBTztNQUNQLGtCQUFrQixFQUFBO0VBdEcxQjtRQXdHVSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTyxFQUFBO0VBNUdqQjtRQStHVSxrQkFBa0IsRUFBQTtFQS9HNUI7UUFrSFUsZUFBZSxFQUFBO0VBbEh6QjtFQXlITSxhQUFhLEVBQUE7RUF6SG5CO0VBNEhNLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUE3SGpCO0lBK0hRLGFBQWEsRUFBQTtFQS9IckI7SUFrSVEsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0VBekkvQjtJQTRJUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVUsRUFBQTtFQTlJbEI7RUFtSkksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7RUF0SnZCO0lBd0pNLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBR3hDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCLEVBQUE7RUEvSmxDO01BaUtRLDRGQUE0RjtNQUM1RixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQixFQUFBO0VBcEsxQjtRQXNLVSxXQUFXO1FBQ1gsY0FBYztRQUNkLFFBQVE7UUFDUixTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQiwwRUFBeUU7UUFDekUsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixTQUFTO1FBQ1QsaUJBQWlCLEVBQUE7RUFoTDNCO0VBc0xJLGlCQUFpQjtFQUNqQixnQkFBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQXpMckI7RUE2TE0sV0FBVyxFQUFBO0VBN0xqQjtJQStMUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUdoQixrQkFBa0I7SUFDbEIsNEZBQTRGLEVBQUE7RUFyTXBHO0lBd01RLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBMU1yQjtFQStNSSxpQkFBaUIsRUFBQTtFQS9NckI7RUFtTk0sYUFBYTtFQUNiLHVCQUF1QixFQUFBO0VBcE43QjtJQXNOUSxXQUFXLEVBQUE7RUF0Tm5CO0VBME5NLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsZ0JBQWdCLEVBQUE7RUE1TnRCO0VBK05NLDhCQUE4QjtFQUM5Qiw2QkFBNkIsRUFBQTtFQUluQztFQUNFLGFBQWEsRUFBQTtFQUdmO0VBRUksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIG1pbi13aWR0aDogNDhweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1heC13aWR0aDogNzVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbiAgLy8tLW9wYWNpdHk6IDA7XHJcbn1cclxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAxMDAge1xyXG4gIC5zaG93LSN7JGl9IHsgICAtLW9wYWNpdHk6ICN7JGkgLyAxMDB9OyB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5uYXYtaW1nIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gIH1cclxuICAjbXlzd2lwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmO1xyXG4gIH1cclxuICAuYmFubmVyLXNrZWxldG9uLXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpb24tc2xpZGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbjogMCA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICAtLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgLm15c2xpZGVzLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgbGVmdDogLTEwJTtcclxuICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmZvb3Rlci1ib3gge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaW5kZXhuYXYge1xyXG4gICAgLmZvdXItbmF2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogN3B4IDBweCAwIDVweDtcclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnhzcWdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGltZyB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmxlZnQsIC5yaWdodCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgIC54c3FnLWJveCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAueHNxZyB7XHJcbiAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgIGhlaWdodDogMjA0cHg7XHJcbiAgICB9XHJcbiAgICAueHNxZy1yaWdodCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgfVxyXG4gICAgICBhcHAtcHJpY2VidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEycHg7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuangtbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpdiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC0xMXB4O1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5teS1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5seGxnIHtcclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNnB4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAgICAgfVxyXG4gICAgICBwICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucm16dDJib3gge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgfVxyXG4gIC53bnRqIHtcclxuICAgIC50aXRsZS1pbWcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnlqZngge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubmF2LXNrZWxldG9uIHtcclxuICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _ionic_native_app_update_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/app-update/ngx */ "./node_modules/@ionic-native/app-update/ngx/index.js");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/native.service */ "./src/app/services/native.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-15 22:18:06
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-04 00:52:05
 * @Description: file content
 */



// import { SearchPage } from '../search/search.page';





// import { ShopNavService } from '../services/shop-nav.service';
// import { GetshopService } from '../services/getshop.service';



var Tab1Page = /** @class */ (function () {
    function Tab1Page(modalController, http, shop, topage, user, route, appUpdate, native, alertController) {
        this.modalController = modalController;
        this.http = http;
        this.shop = shop;
        this.topage = topage;
        this.user = user;
        this.route = route;
        this.appUpdate = appUpdate;
        this.native = native;
        this.alertController = alertController;
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
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        this.moreGoods = this.shop.getMoregoods();
        console.log(this.moreGoods);
        this.getShopcontent();
        this.location = this.user.getLocation();
    };
    Tab1Page.prototype.getShopcontent = function () {
        var _this = this;
        this.shop.getShop().then(function (res) {
            _this.shopdata = res;
            if (_this.native.isandroid()) { // 安卓版本更新
                var updateUrl = _this.http.zdomain + 'update.xml';
                _this.appUpdate.checkAppUpdate(updateUrl).then(function () { console.log('Update available'); }).catch(function (err2) {
                    console.error(2);
                });
            }
            else if (_this.native.isios()) { // ios 版本更新
                _this.native.getAppversion().then(function (version) {
                    if (version != res.iosapp_verson) {
                        _this.updateios();
                    }
                });
            }
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
    Tab1Page.prototype.updateios = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示',
                            message: '有新版了，为了更好的服务将立即更新!.',
                            buttons: [{
                                    text: '确定',
                                    handler: function () {
                                        _this.native.openStore();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
            _services_topage_service__WEBPACK_IMPORTED_MODULE_7__["TopageService"], _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_app_update_ngx__WEBPACK_IMPORTED_MODULE_9__["AppUpdate"], _services_native_service__WEBPACK_IMPORTED_MODULE_10__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
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