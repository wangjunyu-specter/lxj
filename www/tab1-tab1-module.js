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

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-07-23 20:09:34\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-10-09 21:54:42\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"toPage(4)\" *ngIf=\"location\">\r\n        <span>{{location.city}}</span>\r\n        <img src=\"/assets/index-arrow.svg\">\r\n      </div>\r\n      <div class=\"center\" (click)=\"presentModal()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span *ngIf=\"shopdata\">{{keywords}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"toPage(15)\">\r\n        <img src=\"/assets/topnews.svg\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"myslides-box\">\r\n    <div class=\"banner-skeleton-text\" *ngIf=\"!bannerList\">\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n    </div>\r\n    <ion-slides pager=\"false\"  *ngIf=\"bannerList\" id=\"myswiper\" [options]=\"bannerslideopts\">\r\n      <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{item.image  | imgsrc: http.domain}}\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <div class=\"top-radios\">\r\n  </div>\r\n  <ion-row *ngIf=\"!navList\" class=\"nav-skeleton\">\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"!navList\" class=\"nav-skeleton\">\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n  </ion-row>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"margin-top: 10px;\"  *ngIf=\"navList\">\r\n    <ion-slide *ngFor=\"let item of navList\" (click)=\"toPage(item.type, item.menu_url)\">\r\n      <img class=\"nav-img\" src=\"{{item.menu_img | imgsrc: http.domain}}\">\r\n      <div>{{item.menu_name}}</div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <!--<div class=\"swiper-pagination2\"></div>-->\r\n  <ion-grid class=\"indexnav\" style=\"margin-top: 10px;\">\r\n    <ion-row *ngIf=\"!navList2\" class=\"nav-skeleton\">\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"navList2\">\r\n      <ion-col *ngFor=\"let item of navList2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <div class=\"xsqgs\" padding *ngIf=\"hdbox1 || hdbox2\">\r\n    <div class=\"left\"  (click)=\"toPage(hdbox1.type, hdbox1.url)\">\r\n      <img *ngIf=\"hdbox1\" [src]=\"hdbox1.image | imgsrc: http.domain\" alt=\"\">\r\n    </div>\r\n    <div class=\"right\">\r\n      <div class=\"xsqg-box\" *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <ion-grid class=\"xsqgs-grid\">\r\n    <ion-row *ngIf=\"hdbox1 && hdbox1.length > 0\">\r\n      <ion-col [size]=\"hdbox1.length === 1 ? 12 : 8\" (click)=\"toPage(hdbox1[0].type, hdbox1[0].url)\">\r\n        <img [src]=\"hdbox1[0].image | imgsrc: http.domain\" alt=\"\">\r\n      </ion-col>\r\n      <ion-col *ngIf=\"hdbox1[1]\" size=\"4\" (click)=\"toPage(hdbox1[1].type, hdbox1[1].url)\">\r\n        <img [src]=\"hdbox1[1].image | imgsrc: http.domain\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"hdbox2 && hdbox2.length > 0\">\r\n      <ion-col *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"xsqg\" *ngIf=\"!hdbox1 && !hdbox2\">\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!--<ion-grid class=\"xsqg\">-->\r\n    <!--<ion-row>-->\r\n      <!--<ion-col *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">-->\r\n        <!--<img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">-->\r\n      <!--</ion-col>-->\r\n    <!--</ion-row>-->\r\n  <!--</ion-grid>-->\r\n  <div padding *ngIf=\"!bzjx\">\r\n    <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div padding class=\"my-content\" *ngIf=\"bzjx\">\r\n    <!-- <app-pagetitle [myname]=\"bzjx['title']\" [type]=\"true\" [des]=\"bzjx['desc']\"></app-pagetitle> -->\r\n    <app-newpagetitle [title]=\"bzjx['title']\"></app-newpagetitle>\r\n    <div class=\"jx-nav\">\r\n      <div *ngFor=\"let item of bzjx.sort_goods_arr; let i = index\"  [ngClass]=\"{active: bzjxActive === i}\" (click)=\"setBztjlist(i)\">{{item.name}}</div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-grid *ngIf=\"bzjx\">\r\n    <ion-row *ngFor=\"let item of bzjx.sort_goods_arr; let i = index\" [ngClass]=\"{none: bzjxActive !== i}\">\r\n      <ion-col size=\"6\" *ngFor=\"let goods of item.goods\">\r\n        <app-tjproduct [id]=\"goods.goods_id\" [price]=\"goods.org_price\" [dessubstr]=\"true\" [des]=\"goods.goods_brief || goods.short_name\"\r\n                       [src]=\"http.zdomain + goods.original_img\" [dessubstrnum]=\"15\" (tclick)=\"clickbzjx($event)\"></app-tjproduct>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <div class=\"bztj\" *ngIf=\"bzjx\" padding>\r\n    <ion-slides [options]=\"bztjslideOptslv\">\r\n      <ion-slide *ngFor=\"let goods of bztjlist\">\r\n          <app-bztjbox [id]=\"goods.goods_id\" [price]=\"goods.org_price\" [name]=\"goods.goods_brief || goods.short_name\"\r\n          [src]=\"goods.goods_thumb | imgsrc: http.zdomain\" [dessubstrnum]=\"15\" (tclick)=\"clickbzjx($event)\"></app-bztjbox>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <!--<div padding  class=\"my-content\">暂时隐藏-->\r\n    <!--<app-pagetitle *ngIf=\"indexTitle\" [myname]=\"indexTitle.lxlgtitle\" [des]=\"indexTitle.lxlgdes\" [type]=\"true\"></app-pagetitle>-->\r\n    <!--<ion-slides pager=\"true\" [options]=\"slideOptslv\" class=\"lxlg\">-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n    <!--</ion-slides>-->\r\n  <!--</div>-->\r\n  <div padding class=\"my-content\">\r\n    <app-newpagetitle *ngIf=\"indexTitle\" [title]=\"indexTitle.rmzttitle\"></app-newpagetitle>\r\n    <!-- <app-pagetitle *ngIf=\"indexTitle\" [myname]=\"indexTitle.rmzttitle\" [des]=\"indexTitle.rmztdes\" [type]=\"true\"></app-pagetitle> -->\r\n  </div>\r\n  <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        \r\n        <img *ngIf=\"rmzt1\" [src]=\"rmzt1.image | imgsrc: http.domain\" alt=\"\" (click)=\"toPage(rmzt1.type, rmzt1.url)\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <!-- <ion-grid class=\"rmzt2box\">\r\n    <ion-row *ngIf=\"rmzt2\">\r\n      <ion-col *ngFor=\"let item of rmzt2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <div class=\"rmztbox\">\r\n    <div class=\"bjbox\" padding>\r\n      <div class=\"title\">高人气榜单 <ion-text>最有人气的旅行主题</ion-text></div>\r\n    </div>\r\n    <div class=\"list-box\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col *ngFor=\"let item of rmzt1; let i = index\" (click)=\"toPage(item.type, item.url)\">\r\n            <app-rmztitem [data]=\"item\" [src]=\"item.image | imgsrc: http.domain\" [index]=\"i\"></app-rmztitem>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n  <div class=\"wntj\" padding-start padding-end>\r\n    <!-- <div  class=\"title-img\">\r\n      <img *ngIf=\"indexTitle\" [src]=\"indexTitle.wntj || './assets/wntj.svg'\" alt=\"\">\r\n    </div> -->\r\n    <app-newpagetitle [title]=\"'为你推荐'\"></app-newpagetitle>    \r\n    <div *ngFor=\"let item of catcalelist\">\r\n      <!-- <div class=\"yjfx\" *ngIf=\"item\">{{item.name}}</div> -->\r\n      <div *ngFor=\"let data of item.arr\">\r\n        <div *ngIf=\"data.img\" padding-top>\r\n          <app-articlecard [data]=\"data\" (setclick)=\"setopen($event)\" [src]=\"data.img | imgsrc: http.zdomain\"></app-articlecard>\r\n        </div>\r\n        <div *ngIf=\"!data.img\">\r\n          <app-pagetitle [myname]=\"data.short_title\" [val]=\"data.id\" (setclick)=\"setopen($event)\" [type]=\"false\"></app-pagetitle>\r\n          <p no-padding no-margin><ion-text color=\"success\">{{data.cat_name}}</ion-text></p>\r\n          <p  (click)=\"toPage(9, data.id)\">{{data.des}}</p>\r\n        </div>\r\n        <ion-slides [options]=\"bztjslideOptslv\">\r\n          <ion-slide *ngFor=\"let goods of data.goods\" (click)=\"toPage(2, goods.goods_id)\">\r\n            <app-goodsupanddown [data]=\"goods\" [src]=\"goods.goods_thumb | imgsrc: http.zdomain\" [tag]=\"goods.keywords | splitarr\"></app-goodsupanddown>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <!-- <app-pagetitle [myname]=\"data.short_title\" [val]=\"data.id\" (setclick)=\"setopen($event)\" [type]=\"false\"></app-pagetitle> -->\r\n        <!-- <p  (click)=\"toPage(9, data.id)\">{{data.des}}</p> -->\r\n        <!-- <img (click)=\"toPage(9, data.id)\" *ngIf=\"data.img\" [src]=\"data.img | imgsrc: http.zdomain\"> -->\r\n        <!-- <app-productlist *ngIf=\"data.goods && data.goods[0]\" [ishw]=\"true\" [data]=\"data.goods[0]\" (open)=\"openpage($event)\"></app-productlist> -->\r\n        <!-- <app-productlist *ngIf=\"data.goods && data.goods[1]\" [ishw]=\"true\" [data]=\"data.goods[1]\" (open)=\"openpage($event)\"></app-productlist> -->\r\n        <!-- <app-productlist *ngIf=\"data.goods && data.goods[2]\" [ishw]=\"true\" [data]=\"data.goods[2]\" (open)=\"openpage($event)\"></app-productlist> -->\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let item of bestGood\">\r\n      <div class=\"yjfx\" *ngIf=\"item.arr && item.arr.length > 0\"> {{item.title}}</div>\r\n      <app-productlist *ngFor=\"let citem of item.arr\" [ishw]=\"true\" [data]=\"citem\" [type]=\"item.type\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n    <div *ngIf=\"moreGoods && moreGoods.length > 0\">\r\n      <div class=\"yjfx\">{{indexTitle.pttj}}</div>\r\n      <app-productlist *ngFor=\"let item of moreGoods\" [ishw]=\"true\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n    <!--<ion-virtual-scroll [items]=\"moreGoods\" approxItemHeight=\"153px\">-->\r\n      <!--<div *virtualItem=\"let item\">-->\r\n        <!--<app-productlist [data]=\"item\" [imgtype]=\"1\"></app-productlist>-->\r\n      <!--</div>-->\r\n    <!--</ion-virtual-scroll>-->\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"crescent\"\r\n       loadingText=\"加载更多...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n.search-bar .left {\n    min-width: 48px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n.search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n.search-bar .left span {\n      max-width: 75px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      display: inline-block; }\n.search-bar .right {\n    width: 20px; }\n.search-bar .right img {\n      width: 19px; }\n.search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 15px;\n    overflow: hidden; }\n.search-bar .center .search-box {\n      display: flex;\n      flex: 1;\n      width: 100%;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n.search-bar .center .search-box span {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n.search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\nion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n.show-0 {\n  --opacity: 0; }\n.show-1 {\n  --opacity: 0.01; }\n.show-2 {\n  --opacity: 0.02; }\n.show-3 {\n  --opacity: 0.03; }\n.show-4 {\n  --opacity: 0.04; }\n.show-5 {\n  --opacity: 0.05; }\n.show-6 {\n  --opacity: 0.06; }\n.show-7 {\n  --opacity: 0.07; }\n.show-8 {\n  --opacity: 0.08; }\n.show-9 {\n  --opacity: 0.09; }\n.show-10 {\n  --opacity: 0.1; }\n.show-11 {\n  --opacity: 0.11; }\n.show-12 {\n  --opacity: 0.12; }\n.show-13 {\n  --opacity: 0.13; }\n.show-14 {\n  --opacity: 0.14; }\n.show-15 {\n  --opacity: 0.15; }\n.show-16 {\n  --opacity: 0.16; }\n.show-17 {\n  --opacity: 0.17; }\n.show-18 {\n  --opacity: 0.18; }\n.show-19 {\n  --opacity: 0.19; }\n.show-20 {\n  --opacity: 0.2; }\n.show-21 {\n  --opacity: 0.21; }\n.show-22 {\n  --opacity: 0.22; }\n.show-23 {\n  --opacity: 0.23; }\n.show-24 {\n  --opacity: 0.24; }\n.show-25 {\n  --opacity: 0.25; }\n.show-26 {\n  --opacity: 0.26; }\n.show-27 {\n  --opacity: 0.27; }\n.show-28 {\n  --opacity: 0.28; }\n.show-29 {\n  --opacity: 0.29; }\n.show-30 {\n  --opacity: 0.3; }\n.show-31 {\n  --opacity: 0.31; }\n.show-32 {\n  --opacity: 0.32; }\n.show-33 {\n  --opacity: 0.33; }\n.show-34 {\n  --opacity: 0.34; }\n.show-35 {\n  --opacity: 0.35; }\n.show-36 {\n  --opacity: 0.36; }\n.show-37 {\n  --opacity: 0.37; }\n.show-38 {\n  --opacity: 0.38; }\n.show-39 {\n  --opacity: 0.39; }\n.show-40 {\n  --opacity: 0.4; }\n.show-41 {\n  --opacity: 0.41; }\n.show-42 {\n  --opacity: 0.42; }\n.show-43 {\n  --opacity: 0.43; }\n.show-44 {\n  --opacity: 0.44; }\n.show-45 {\n  --opacity: 0.45; }\n.show-46 {\n  --opacity: 0.46; }\n.show-47 {\n  --opacity: 0.47; }\n.show-48 {\n  --opacity: 0.48; }\n.show-49 {\n  --opacity: 0.49; }\n.show-50 {\n  --opacity: 0.5; }\n.show-51 {\n  --opacity: 0.51; }\n.show-52 {\n  --opacity: 0.52; }\n.show-53 {\n  --opacity: 0.53; }\n.show-54 {\n  --opacity: 0.54; }\n.show-55 {\n  --opacity: 0.55; }\n.show-56 {\n  --opacity: 0.56; }\n.show-57 {\n  --opacity: 0.57; }\n.show-58 {\n  --opacity: 0.58; }\n.show-59 {\n  --opacity: 0.59; }\n.show-60 {\n  --opacity: 0.6; }\n.show-61 {\n  --opacity: 0.61; }\n.show-62 {\n  --opacity: 0.62; }\n.show-63 {\n  --opacity: 0.63; }\n.show-64 {\n  --opacity: 0.64; }\n.show-65 {\n  --opacity: 0.65; }\n.show-66 {\n  --opacity: 0.66; }\n.show-67 {\n  --opacity: 0.67; }\n.show-68 {\n  --opacity: 0.68; }\n.show-69 {\n  --opacity: 0.69; }\n.show-70 {\n  --opacity: 0.7; }\n.show-71 {\n  --opacity: 0.71; }\n.show-72 {\n  --opacity: 0.72; }\n.show-73 {\n  --opacity: 0.73; }\n.show-74 {\n  --opacity: 0.74; }\n.show-75 {\n  --opacity: 0.75; }\n.show-76 {\n  --opacity: 0.76; }\n.show-77 {\n  --opacity: 0.77; }\n.show-78 {\n  --opacity: 0.78; }\n.show-79 {\n  --opacity: 0.79; }\n.show-80 {\n  --opacity: 0.8; }\n.show-81 {\n  --opacity: 0.81; }\n.show-82 {\n  --opacity: 0.82; }\n.show-83 {\n  --opacity: 0.83; }\n.show-84 {\n  --opacity: 0.84; }\n.show-85 {\n  --opacity: 0.85; }\n.show-86 {\n  --opacity: 0.86; }\n.show-87 {\n  --opacity: 0.87; }\n.show-88 {\n  --opacity: 0.88; }\n.show-89 {\n  --opacity: 0.89; }\n.show-90 {\n  --opacity: 0.9; }\n.show-91 {\n  --opacity: 0.91; }\n.show-92 {\n  --opacity: 0.92; }\n.show-93 {\n  --opacity: 0.93; }\n.show-94 {\n  --opacity: 0.94; }\n.show-95 {\n  --opacity: 0.95; }\n.show-96 {\n  --opacity: 0.96; }\n.show-97 {\n  --opacity: 0.97; }\n.show-98 {\n  --opacity: 0.98; }\n.show-99 {\n  --opacity: 0.99; }\n.show-100 {\n  --opacity: 1; }\nion-content .nav-img {\n  width: 56px; }\nion-content #myswiper {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden;\n  --bullet-background-active: #fff; }\nion-content .banner-skeleton-text {\n  margin-top: var(--ion-platform-margin-top);\n  height: 200px;\n  width: 100%; }\nion-content ion-slide {\n  flex-direction: column;\n  font-size: var(--ion-text); }\nion-content ion-slides {\n  --bullet-background-active: var(--ion-color-secondary); }\nion-content .swiper-pagination2 {\n  text-align: center;\n  --bullet-background-active: var(--ion-color-secondary);\n  --bullet-background: #333; }\nion-content .swiper-pagination2 span {\n    margin: 0 5px !important; }\nion-content .swiper-pagination {\n  --bottom: 25px; }\nion-content .myslides-box {\n  position: relative; }\nion-content .myslides-box .footer {\n    left: -10%;\n    width: 120%;\n    position: absolute;\n    height: 8px;\n    z-index: 1000;\n    bottom: -5px;\n    overflow: hidden; }\nion-content .myslides-box .footer .footer-box {\n      border-radius: 50%;\n      height: 30px;\n      background-color: blue; }\nion-content .indexnav .four-nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n  padding: 7px 0px 0 5px; }\nion-content .indexnav .four-nav .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: flex-start;\n    font-size: var(--ion-sm-text); }\nion-content .indexnav .four-nav .footer img {\n      width: 20px; }\nion-content .xsqgs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: stretch; }\nion-content .xsqgs img {\n    float: left; }\nion-content .xsqgs .left, ion-content .xsqgs .right {\n    flex: 1; }\nion-content .xsqgs .left {\n    margin-right: 4px; }\nion-content .xsqgs .left img {\n      width: 100%; }\nion-content .xsqgs .right {\n    margin-left: 4px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: stretch; }\nion-content .xsqgs .right .xsqg-box {\n      flex: 1;\n      position: relative; }\nion-content .xsqgs .right .xsqg-box img {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0; }\nion-content .xsqgs .right .xsqg-box:first-of-type {\n        margin-bottom: 4px; }\nion-content .xsqgs .right .xsqg-box:last-of-type {\n        margin-top: 4px; }\nion-content .xsqg ion-skeleton-text {\n  height: 204px; }\nion-content .xsqg .xsqg-right {\n  position: relative;\n  color: #fff; }\nion-content .xsqg .xsqg-right ion-skeleton-text {\n    height: 100px; }\nion-content .xsqg .xsqg-right .name {\n    font-size: var(--ion-text);\n    position: absolute;\n    top: 33%;\n    margin-left: 15px;\n    margin-right: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\nion-content .xsqg .xsqg-right app-pricebutton {\n    position: absolute;\n    bottom: 12px;\n    left: 15px; }\nion-content .jx-nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\nion-content .jx-nav div {\n    font-size: var(--ion-text);\n    padding: 3px 7px;\n    border-radius: 11px;\n    margin-right: 5px;\n    background-color: #f7f4f8;\n    color: #666666; }\nion-content .jx-nav div.active {\n      background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n      color: #fff;\n      border: none;\n      position: relative; }\nion-content .my-content {\n  margin-top: -10px;\n  --padding-top: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\nion-content .lxlg ion-slide {\n  color: #fff; }\nion-content .lxlg ion-slide .name {\n    position: absolute;\n    bottom: 50px;\n    padding: 5px 6px;\n    border-radius: 5px;\n    background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\nion-content .lxlg ion-slide p {\n    position: absolute;\n    bottom: 10px;\n    margin-top: 0; }\nion-content .rmzt2box {\n  margin-top: -15px; }\nion-content .wntj .title-img {\n  display: flex;\n  justify-content: center; }\nion-content .wntj .title-img img {\n    width: 75px; }\nion-content .wntj .yjfx {\n  color: var(--ion-color-secondary);\n  font-size: var(--ion-sm-text);\n  margin-top: 15px; }\nion-content .wntj p {\n  color: var(--ion-color-medium);\n  font-size: var(--ion-sm-text); }\n.none {\n  display: none; }\n.nav-skeleton ion-skeleton-text {\n  height: 70px; }\n.top-radios {\n  height: 20px;\n  background-color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  position: relative;\n  z-index: 9;\n  margin-top: -15px; }\n.xsqgs-grid {\n  --ion-grid-column-padding: 5px; }\n.xsqgs-grid ion-col {\n    display: flex;\n    align-items: stretch; }\n.xsqgs-grid ion-col img {\n      box-shadow: 0 0 10px #f2f2f2; }\n.rmztbox {\n  position: relative; }\n.rmztbox .bjbox {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 150px;\n    /* Safari 5.1 - 6.0 */\n    /* Opera 11.1 - 12.0 */\n    /* Firefox 3.6 - 15 */\n    background: linear-gradient(#1fb1ce, #1ac4a6);\n    /* 标准的语法 */\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    border-bottom-left-radius: 38px;\n    border-bottom-right-radius: 38px; }\n.rmztbox .bjbox .title {\n      font-size: var(--ion-title);\n      font-family: \"PingFang SC\";\n      color: white;\n      line-height: 1.2; }\n.rmztbox .bjbox ion-text {\n      font-size: var(--ion-sm-text);\n      font-family: \"PingFang SC\";\n      color: white;\n      line-height: 1.2; }\n.rmztbox .list-box {\n    position: relative;\n    z-index: 2;\n    padding-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBTmpCO0lBUUksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUIsRUFBQTtBQWJ2QjtNQWVNLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtBQWhCdEI7TUFtQk0sZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLHFCQUFxQixFQUFBO0FBdkIzQjtJQTJCSSxXQUFXLEVBQUE7QUEzQmY7TUE2Qk0sV0FBVyxFQUFBO0FBN0JqQjtJQWlDSSxvQkFBb0I7SUFDcEIsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBR3RCLHFCQUFxQjtJQUdyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTtBQTlDcEI7TUFnRE0sYUFBYTtNQUNiLE9BQU87TUFDUCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLDBCQUEwQjtNQUMxQixpQkFBaUIsRUFBQTtBQXhEdkI7UUEyRFEsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBQTtBQTdEL0I7UUFnRVEsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0IsRUFBQTtBQUsxQjtFQUNFLDhGQUFhLEVBQUE7QUFJYjtFQUFnQixZQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGNBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixjQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGNBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixjQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGNBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixjQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsWUFBVSxFQUFBO0FBRTVCO0VBRUksV0FBVyxFQUFBO0FBRmY7RUFLSSwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGdDQUEyQixFQUFBO0FBUC9CO0VBVUksMENBQTBDO0VBQzFDLGFBQWE7RUFDYixXQUFXLEVBQUE7QUFaZjtFQWVJLHNCQUFzQjtFQUN0QiwwQkFBMEIsRUFBQTtBQWhCOUI7RUFtQkksc0RBQTJCLEVBQUE7QUFuQi9CO0VBc0JJLGtCQUFrQjtFQUNsQixzREFBMkI7RUFDM0IseUJBQW9CLEVBQUE7QUF4QnhCO0lBMEJNLHdCQUF3QixFQUFBO0FBMUI5QjtFQWlDSSxjQUFTLEVBQUE7QUFqQ2I7RUFvQ0ksa0JBQWtCLEVBQUE7QUFwQ3RCO0lBc0NNLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0FBNUN0QjtNQWdEUSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHNCQUFzQixFQUFBO0FBbEQ5QjtFQXdETSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBR3hDLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtBQWhFNUI7SUFrRVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDZCQUE2QixFQUFBO0FBdEVyQztNQXdFVSxXQUFXLEVBQUE7QUF4RXJCO0VBOEVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG9CQUFvQixFQUFBO0FBakZ4QjtJQW1GTSxXQUFXLEVBQUE7QUFuRmpCO0lBc0ZNLE9BQU8sRUFBQTtBQXRGYjtJQXlGTSxpQkFBaUIsRUFBQTtBQXpGdkI7TUEyRlEsV0FBVyxFQUFBO0FBM0ZuQjtJQStGTSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0Isb0JBQW9CLEVBQUE7QUFuRzFCO01BcUdRLE9BQU87TUFDUCxrQkFBa0IsRUFBQTtBQXRHMUI7UUF3R1UsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU8sRUFBQTtBQTVHakI7UUErR1Usa0JBQWtCLEVBQUE7QUEvRzVCO1FBa0hVLGVBQWUsRUFBQTtBQWxIekI7RUF5SE0sYUFBYSxFQUFBO0FBekhuQjtFQTRITSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBN0hqQjtJQStIUSxhQUFhLEVBQUE7QUEvSHJCO0lBa0lRLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTtBQXpJL0I7SUE0SVEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVLEVBQUE7QUE5SWxCO0VBbUpJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBO0FBdEp2QjtJQXdKTSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBSWhCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWMsRUFBQTtBQWhLcEI7TUFrS1EsNEZBQTRGO01BQzVGLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCLEVBQUE7QUFySzFCO0VBdUxJLGlCQUFpQjtFQUNqQixnQkFBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtBQTFMckI7RUE4TE0sV0FBVyxFQUFBO0FBOUxqQjtJQWdNUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUdoQixrQkFBa0I7SUFDbEIsNEZBQTRGLEVBQUE7QUF0TXBHO0lBeU1RLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBO0FBM01yQjtFQWdOSSxpQkFBaUIsRUFBQTtBQWhOckI7RUFvTk0sYUFBYTtFQUNiLHVCQUF1QixFQUFBO0FBck43QjtJQXVOUSxXQUFXLEVBQUE7QUF2Tm5CO0VBMk5NLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsZ0JBQWdCLEVBQUE7QUE3TnRCO0VBZ09NLDhCQUE4QjtFQUM5Qiw2QkFBNkIsRUFBQTtBQUluQztFQUNFLGFBQWEsRUFBQTtBQUdmO0VBRUksWUFBWSxFQUFBO0FBR2hCO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7QUFFbkI7RUFDRSw4QkFBMEIsRUFBQTtBQUQ1QjtJQUdJLGFBQWE7SUFDYixvQkFBb0IsRUFBQTtBQUp4QjtNQU1NLDRCQUE0QixFQUFBO0FBSWxDO0VBQ0Usa0JBQWtCLEVBQUE7QUFEcEI7SUFHSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDMEQscUJBQUE7SUFDTCxzQkFBQTtJQUNFLHFCQUFBO0lBQ3BFLDZDQUE2RDtJQUFFLFVBQUE7SUFDL0QsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsZ0NBQWdDLEVBQUE7QUFoQnBDO01Ba0JNLDJCQUEyQjtNQUMzQiwwQkFBMEI7TUFDMUIsWUFBeUI7TUFDekIsZ0JBQWdCLEVBQUE7QUFyQnRCO01Bd0JNLDZCQUE2QjtNQUM3QiwwQkFBMEI7TUFDMUIsWUFBeUI7TUFDekIsZ0JBQWdCLEVBQUE7QUEzQnRCO0lBK0JJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNlYXJjaC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTBweDsgfVxuICAuc2VhcmNoLWJhciAubGVmdCB7XG4gICAgbWluLXdpZHRoOiA0OHB4O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAuc2VhcmNoLWJhciAubGVmdCBpbWcge1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4OyB9XG4gICAgLnNlYXJjaC1iYXIgLmxlZnQgc3BhbiB7XG4gICAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5zZWFyY2gtYmFyIC5yaWdodCB7XG4gICAgd2lkdGg6IDIwcHg7IH1cbiAgICAuc2VhcmNoLWJhciAucmlnaHQgaW1nIHtcbiAgICAgIHdpZHRoOiAxOXB4OyB9XG4gIC5zZWFyY2gtYmFyIC5jZW50ZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMy41cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMy41cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTMuNXB4O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLnNlYXJjaC1iYXIgLmNlbnRlciAuc2VhcmNoLWJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4OyB9XG4gICAgICAuc2VhcmNoLWJhciAuY2VudGVyIC5zZWFyY2gtYm94IHNwYW4ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLnNlYXJjaC1iYXIgLmNlbnRlciAuc2VhcmNoLWJveCBpbWcge1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpOyB9XG5cbi5zaG93LTAge1xuICAtLW9wYWNpdHk6IDA7IH1cblxuLnNob3ctMSB7XG4gIC0tb3BhY2l0eTogMC4wMTsgfVxuXG4uc2hvdy0yIHtcbiAgLS1vcGFjaXR5OiAwLjAyOyB9XG5cbi5zaG93LTMge1xuICAtLW9wYWNpdHk6IDAuMDM7IH1cblxuLnNob3ctNCB7XG4gIC0tb3BhY2l0eTogMC4wNDsgfVxuXG4uc2hvdy01IHtcbiAgLS1vcGFjaXR5OiAwLjA1OyB9XG5cbi5zaG93LTYge1xuICAtLW9wYWNpdHk6IDAuMDY7IH1cblxuLnNob3ctNyB7XG4gIC0tb3BhY2l0eTogMC4wNzsgfVxuXG4uc2hvdy04IHtcbiAgLS1vcGFjaXR5OiAwLjA4OyB9XG5cbi5zaG93LTkge1xuICAtLW9wYWNpdHk6IDAuMDk7IH1cblxuLnNob3ctMTAge1xuICAtLW9wYWNpdHk6IDAuMTsgfVxuXG4uc2hvdy0xMSB7XG4gIC0tb3BhY2l0eTogMC4xMTsgfVxuXG4uc2hvdy0xMiB7XG4gIC0tb3BhY2l0eTogMC4xMjsgfVxuXG4uc2hvdy0xMyB7XG4gIC0tb3BhY2l0eTogMC4xMzsgfVxuXG4uc2hvdy0xNCB7XG4gIC0tb3BhY2l0eTogMC4xNDsgfVxuXG4uc2hvdy0xNSB7XG4gIC0tb3BhY2l0eTogMC4xNTsgfVxuXG4uc2hvdy0xNiB7XG4gIC0tb3BhY2l0eTogMC4xNjsgfVxuXG4uc2hvdy0xNyB7XG4gIC0tb3BhY2l0eTogMC4xNzsgfVxuXG4uc2hvdy0xOCB7XG4gIC0tb3BhY2l0eTogMC4xODsgfVxuXG4uc2hvdy0xOSB7XG4gIC0tb3BhY2l0eTogMC4xOTsgfVxuXG4uc2hvdy0yMCB7XG4gIC0tb3BhY2l0eTogMC4yOyB9XG5cbi5zaG93LTIxIHtcbiAgLS1vcGFjaXR5OiAwLjIxOyB9XG5cbi5zaG93LTIyIHtcbiAgLS1vcGFjaXR5OiAwLjIyOyB9XG5cbi5zaG93LTIzIHtcbiAgLS1vcGFjaXR5OiAwLjIzOyB9XG5cbi5zaG93LTI0IHtcbiAgLS1vcGFjaXR5OiAwLjI0OyB9XG5cbi5zaG93LTI1IHtcbiAgLS1vcGFjaXR5OiAwLjI1OyB9XG5cbi5zaG93LTI2IHtcbiAgLS1vcGFjaXR5OiAwLjI2OyB9XG5cbi5zaG93LTI3IHtcbiAgLS1vcGFjaXR5OiAwLjI3OyB9XG5cbi5zaG93LTI4IHtcbiAgLS1vcGFjaXR5OiAwLjI4OyB9XG5cbi5zaG93LTI5IHtcbiAgLS1vcGFjaXR5OiAwLjI5OyB9XG5cbi5zaG93LTMwIHtcbiAgLS1vcGFjaXR5OiAwLjM7IH1cblxuLnNob3ctMzEge1xuICAtLW9wYWNpdHk6IDAuMzE7IH1cblxuLnNob3ctMzIge1xuICAtLW9wYWNpdHk6IDAuMzI7IH1cblxuLnNob3ctMzMge1xuICAtLW9wYWNpdHk6IDAuMzM7IH1cblxuLnNob3ctMzQge1xuICAtLW9wYWNpdHk6IDAuMzQ7IH1cblxuLnNob3ctMzUge1xuICAtLW9wYWNpdHk6IDAuMzU7IH1cblxuLnNob3ctMzYge1xuICAtLW9wYWNpdHk6IDAuMzY7IH1cblxuLnNob3ctMzcge1xuICAtLW9wYWNpdHk6IDAuMzc7IH1cblxuLnNob3ctMzgge1xuICAtLW9wYWNpdHk6IDAuMzg7IH1cblxuLnNob3ctMzkge1xuICAtLW9wYWNpdHk6IDAuMzk7IH1cblxuLnNob3ctNDAge1xuICAtLW9wYWNpdHk6IDAuNDsgfVxuXG4uc2hvdy00MSB7XG4gIC0tb3BhY2l0eTogMC40MTsgfVxuXG4uc2hvdy00MiB7XG4gIC0tb3BhY2l0eTogMC40MjsgfVxuXG4uc2hvdy00MyB7XG4gIC0tb3BhY2l0eTogMC40MzsgfVxuXG4uc2hvdy00NCB7XG4gIC0tb3BhY2l0eTogMC40NDsgfVxuXG4uc2hvdy00NSB7XG4gIC0tb3BhY2l0eTogMC40NTsgfVxuXG4uc2hvdy00NiB7XG4gIC0tb3BhY2l0eTogMC40NjsgfVxuXG4uc2hvdy00NyB7XG4gIC0tb3BhY2l0eTogMC40NzsgfVxuXG4uc2hvdy00OCB7XG4gIC0tb3BhY2l0eTogMC40ODsgfVxuXG4uc2hvdy00OSB7XG4gIC0tb3BhY2l0eTogMC40OTsgfVxuXG4uc2hvdy01MCB7XG4gIC0tb3BhY2l0eTogMC41OyB9XG5cbi5zaG93LTUxIHtcbiAgLS1vcGFjaXR5OiAwLjUxOyB9XG5cbi5zaG93LTUyIHtcbiAgLS1vcGFjaXR5OiAwLjUyOyB9XG5cbi5zaG93LTUzIHtcbiAgLS1vcGFjaXR5OiAwLjUzOyB9XG5cbi5zaG93LTU0IHtcbiAgLS1vcGFjaXR5OiAwLjU0OyB9XG5cbi5zaG93LTU1IHtcbiAgLS1vcGFjaXR5OiAwLjU1OyB9XG5cbi5zaG93LTU2IHtcbiAgLS1vcGFjaXR5OiAwLjU2OyB9XG5cbi5zaG93LTU3IHtcbiAgLS1vcGFjaXR5OiAwLjU3OyB9XG5cbi5zaG93LTU4IHtcbiAgLS1vcGFjaXR5OiAwLjU4OyB9XG5cbi5zaG93LTU5IHtcbiAgLS1vcGFjaXR5OiAwLjU5OyB9XG5cbi5zaG93LTYwIHtcbiAgLS1vcGFjaXR5OiAwLjY7IH1cblxuLnNob3ctNjEge1xuICAtLW9wYWNpdHk6IDAuNjE7IH1cblxuLnNob3ctNjIge1xuICAtLW9wYWNpdHk6IDAuNjI7IH1cblxuLnNob3ctNjMge1xuICAtLW9wYWNpdHk6IDAuNjM7IH1cblxuLnNob3ctNjQge1xuICAtLW9wYWNpdHk6IDAuNjQ7IH1cblxuLnNob3ctNjUge1xuICAtLW9wYWNpdHk6IDAuNjU7IH1cblxuLnNob3ctNjYge1xuICAtLW9wYWNpdHk6IDAuNjY7IH1cblxuLnNob3ctNjcge1xuICAtLW9wYWNpdHk6IDAuNjc7IH1cblxuLnNob3ctNjgge1xuICAtLW9wYWNpdHk6IDAuNjg7IH1cblxuLnNob3ctNjkge1xuICAtLW9wYWNpdHk6IDAuNjk7IH1cblxuLnNob3ctNzAge1xuICAtLW9wYWNpdHk6IDAuNzsgfVxuXG4uc2hvdy03MSB7XG4gIC0tb3BhY2l0eTogMC43MTsgfVxuXG4uc2hvdy03MiB7XG4gIC0tb3BhY2l0eTogMC43MjsgfVxuXG4uc2hvdy03MyB7XG4gIC0tb3BhY2l0eTogMC43MzsgfVxuXG4uc2hvdy03NCB7XG4gIC0tb3BhY2l0eTogMC43NDsgfVxuXG4uc2hvdy03NSB7XG4gIC0tb3BhY2l0eTogMC43NTsgfVxuXG4uc2hvdy03NiB7XG4gIC0tb3BhY2l0eTogMC43NjsgfVxuXG4uc2hvdy03NyB7XG4gIC0tb3BhY2l0eTogMC43NzsgfVxuXG4uc2hvdy03OCB7XG4gIC0tb3BhY2l0eTogMC43ODsgfVxuXG4uc2hvdy03OSB7XG4gIC0tb3BhY2l0eTogMC43OTsgfVxuXG4uc2hvdy04MCB7XG4gIC0tb3BhY2l0eTogMC44OyB9XG5cbi5zaG93LTgxIHtcbiAgLS1vcGFjaXR5OiAwLjgxOyB9XG5cbi5zaG93LTgyIHtcbiAgLS1vcGFjaXR5OiAwLjgyOyB9XG5cbi5zaG93LTgzIHtcbiAgLS1vcGFjaXR5OiAwLjgzOyB9XG5cbi5zaG93LTg0IHtcbiAgLS1vcGFjaXR5OiAwLjg0OyB9XG5cbi5zaG93LTg1IHtcbiAgLS1vcGFjaXR5OiAwLjg1OyB9XG5cbi5zaG93LTg2IHtcbiAgLS1vcGFjaXR5OiAwLjg2OyB9XG5cbi5zaG93LTg3IHtcbiAgLS1vcGFjaXR5OiAwLjg3OyB9XG5cbi5zaG93LTg4IHtcbiAgLS1vcGFjaXR5OiAwLjg4OyB9XG5cbi5zaG93LTg5IHtcbiAgLS1vcGFjaXR5OiAwLjg5OyB9XG5cbi5zaG93LTkwIHtcbiAgLS1vcGFjaXR5OiAwLjk7IH1cblxuLnNob3ctOTEge1xuICAtLW9wYWNpdHk6IDAuOTE7IH1cblxuLnNob3ctOTIge1xuICAtLW9wYWNpdHk6IDAuOTI7IH1cblxuLnNob3ctOTMge1xuICAtLW9wYWNpdHk6IDAuOTM7IH1cblxuLnNob3ctOTQge1xuICAtLW9wYWNpdHk6IDAuOTQ7IH1cblxuLnNob3ctOTUge1xuICAtLW9wYWNpdHk6IDAuOTU7IH1cblxuLnNob3ctOTYge1xuICAtLW9wYWNpdHk6IDAuOTY7IH1cblxuLnNob3ctOTcge1xuICAtLW9wYWNpdHk6IDAuOTc7IH1cblxuLnNob3ctOTgge1xuICAtLW9wYWNpdHk6IDAuOTg7IH1cblxuLnNob3ctOTkge1xuICAtLW9wYWNpdHk6IDAuOTk7IH1cblxuLnNob3ctMTAwIHtcbiAgLS1vcGFjaXR5OiAxOyB9XG5cbmlvbi1jb250ZW50IC5uYXYtaW1nIHtcbiAgd2lkdGg6IDU2cHg7IH1cblxuaW9uLWNvbnRlbnQgI215c3dpcGVyIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmZjsgfVxuXG5pb24tY29udGVudCAuYmFubmVyLXNrZWxldG9uLXRleHQge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbmlvbi1jb250ZW50IGlvbi1zbGlkZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpOyB9XG5cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7IH1cblxuaW9uLWNvbnRlbnQgLnN3aXBlci1wYWdpbmF0aW9uMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMzMzOyB9XG4gIGlvbi1jb250ZW50IC5zd2lwZXItcGFnaW5hdGlvbjIgc3BhbiB7XG4gICAgbWFyZ2luOiAwIDVweCAhaW1wb3J0YW50OyB9XG5cbmlvbi1jb250ZW50IC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIC0tYm90dG9tOiAyNXB4OyB9XG5cbmlvbi1jb250ZW50IC5teXNsaWRlcy1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgaW9uLWNvbnRlbnQgLm15c2xpZGVzLWJveCAuZm9vdGVyIHtcbiAgICBsZWZ0OiAtMTAlO1xuICAgIHdpZHRoOiAxMjAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgaW9uLWNvbnRlbnQgLm15c2xpZGVzLWJveCAuZm9vdGVyIC5mb290ZXItYm94IHtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyB9XG5cbmlvbi1jb250ZW50IC5pbmRleG5hdiAuZm91ci1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA3cHggMHB4IDAgNXB4OyB9XG4gIGlvbi1jb250ZW50IC5pbmRleG5hdiAuZm91ci1uYXYgLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpOyB9XG4gICAgaW9uLWNvbnRlbnQgLmluZGV4bmF2IC5mb3VyLW5hdiAuZm9vdGVyIGltZyB7XG4gICAgICB3aWR0aDogMjBweDsgfVxuXG5pb24tY29udGVudCAueHNxZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgaW9uLWNvbnRlbnQgLnhzcWdzIGltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7IH1cbiAgaW9uLWNvbnRlbnQgLnhzcWdzIC5sZWZ0LCBpb24tY29udGVudCAueHNxZ3MgLnJpZ2h0IHtcbiAgICBmbGV4OiAxOyB9XG4gIGlvbi1jb250ZW50IC54c3FncyAubGVmdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cbiAgICBpb24tY29udGVudCAueHNxZ3MgLmxlZnQgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gIGlvbi1jb250ZW50IC54c3FncyAucmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgaW9uLWNvbnRlbnQgLnhzcWdzIC5yaWdodCAueHNxZy1ib3gge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgaW9uLWNvbnRlbnQgLnhzcWdzIC5yaWdodCAueHNxZy1ib3ggaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIGlvbi1jb250ZW50IC54c3FncyAucmlnaHQgLnhzcWctYm94OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7IH1cbiAgICAgIGlvbi1jb250ZW50IC54c3FncyAucmlnaHQgLnhzcWctYm94Omxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDsgfVxuXG5pb24tY29udGVudCAueHNxZyBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGhlaWdodDogMjA0cHg7IH1cblxuaW9uLWNvbnRlbnQgLnhzcWcgLnhzcWctcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmOyB9XG4gIGlvbi1jb250ZW50IC54c3FnIC54c3FnLXJpZ2h0IGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICBoZWlnaHQ6IDEwMHB4OyB9XG4gIGlvbi1jb250ZW50IC54c3FnIC54c3FnLXJpZ2h0IC5uYW1lIHtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMyU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICBpb24tY29udGVudCAueHNxZyAueHNxZy1yaWdodCBhcHAtcHJpY2VidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEycHg7XG4gICAgbGVmdDogMTVweDsgfVxuXG5pb24tY29udGVudCAuangtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIGlvbi1jb250ZW50IC5qeC1uYXYgZGl2IHtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjRmODtcbiAgICBjb2xvcjogIzY2NjY2NjsgfVxuICAgIGlvbi1jb250ZW50IC5qeC1uYXYgZGl2LmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbmlvbi1jb250ZW50IC5teS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxuXG5pb24tY29udGVudCAubHhsZyBpb24tc2xpZGUge1xuICBjb2xvcjogI2ZmZjsgfVxuICBpb24tY29udGVudCAubHhsZyBpb24tc2xpZGUgLm5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcGFkZGluZzogNXB4IDZweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7IH1cbiAgaW9uLWNvbnRlbnQgLmx4bGcgaW9uLXNsaWRlIHAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMDsgfVxuXG5pb24tY29udGVudCAucm16dDJib3gge1xuICBtYXJnaW4tdG9wOiAtMTVweDsgfVxuXG5pb24tY29udGVudCAud250aiAudGl0bGUtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgaW9uLWNvbnRlbnQgLndudGogLnRpdGxlLWltZyBpbWcge1xuICAgIHdpZHRoOiA3NXB4OyB9XG5cbmlvbi1jb250ZW50IC53bnRqIC55amZ4IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxuXG5pb24tY29udGVudCAud250aiBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTsgfVxuXG4ubm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLm5hdi1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGhlaWdodDogNzBweDsgfVxuXG4udG9wLXJhZGlvcyB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7IH1cblxuLnhzcWdzLWdyaWQge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiA1cHg7IH1cbiAgLnhzcWdzLWdyaWQgaW9uLWNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC54c3Fncy1ncmlkIGlvbi1jb2wgaW1nIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmMmYyZjI7IH1cblxuLnJtenRib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnJtenRib3ggLmJqYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMxZmIxY2UsICMxYWM0YTYpO1xuICAgIC8qIFNhZmFyaSA1LjEgLSA2LjAgKi9cbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoIzFmYjFjZSwgIzFhYzRhNik7XG4gICAgLyogT3BlcmEgMTEuMSAtIDEyLjAgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjMWZiMWNlLCAjMWFjNGE2KTtcbiAgICAvKiBGaXJlZm94IDMuNiAtIDE1ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxZmIxY2UsICMxYWM0YTYpO1xuICAgIC8qIOagh+WHhueahOivreazlSAqL1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzhweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzhweDsgfVxuICAgIC5ybXp0Ym94IC5iamJveCAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICAgICAgZm9udC1mYW1pbHk6IFwiUGluZ0ZhbmcgU0NcIjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7IH1cbiAgICAucm16dGJveCAuYmpib3ggaW9uLXRleHQge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gICAgICBmb250LWZhbWlseTogXCJQaW5nRmFuZyBTQ1wiO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjsgfVxuICAucm16dGJveCAubGlzdC1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4OyB9XG4iLCJcclxuLnNlYXJjaC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICAubGVmdCB7XHJcbiAgICBtaW4td2lkdGg6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gIC8vLS1vcGFjaXR5OiAwO1xyXG59XHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAwIHtcclxuICAuc2hvdy0jeyRpfSB7ICAgLS1vcGFjaXR5OiAjeyRpIC8gMTAwfTsgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAubmF2LWltZyB7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICB9XHJcbiAgI215c3dpcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4tdG9wKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmZjtcclxuICB9XHJcbiAgLmJhbm5lci1za2VsZXRvbi10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4tdG9wKTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaW9uLXNsaWRlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICB9XHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgfVxyXG4gIC5zd2lwZXItcGFnaW5hdGlvbjIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzMzMztcclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW46IDAgNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgLS1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIC5teXNsaWRlcy1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgIGxlZnQ6IC0xMCU7XHJcbiAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICBib3R0b206IC01cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC5mb290ZXItYm94IHtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmluZGV4bmF2IHtcclxuICAgIC5mb3VyLW5hdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDdweCAwcHggMCA1cHg7XHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC54c3FncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBpbWcge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5sZWZ0LCAucmlnaHQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmxlZnQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAueHNxZy1ib3gge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnhzcWcge1xyXG4gICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICBoZWlnaHQ6IDIwNHB4O1xyXG4gICAgfVxyXG4gICAgLnhzcWctcmlnaHQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuICAgICAgYXBwLXByaWNlYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmp4LW5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjRmODtcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vICY6OmFmdGVyIHtcclxuICAgICAgICAvLyAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gICB3aWR0aDogMDtcclxuICAgICAgICAvLyAgIGhlaWdodDogMDtcclxuICAgICAgICAvLyAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgICAgIC8vICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAvLyAgIGJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICBib3R0b206IC0xMXB4O1xyXG4gICAgICAgIC8vICAgbGVmdDogNTAlO1xyXG4gICAgICAgIC8vICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5teS1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5seGxnIHtcclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNnB4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAgICAgfVxyXG4gICAgICBwICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucm16dDJib3gge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgfVxyXG4gIC53bnRqIHtcclxuICAgIC50aXRsZS1pbWcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnlqZngge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubmF2LXNrZWxldG9uIHtcclxuICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG59XHJcbi50b3AtcmFkaW9zIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcbi54c3Fncy1ncmlkIHtcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiA1cHg7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZjJmMmYyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucm16dGJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5iamJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigzMSwxNzcsMjA2KSwgcmdiKDI2LDE5NiwxNjYpKTsgLyogU2FmYXJpIDUuMSAtIDYuMCAqL1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJnYigzMSwxNzcsMjA2KSwgcmdiKDI2LDE5NiwxNjYpKTsgLyogT3BlcmEgMTEuMSAtIDEyLjAgKi9cclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJnYigzMSwxNzcsMjA2KSwgcmdiKDI2LDE5NiwxNjYpKTsgLyogRmlyZWZveCAzLjYgLSAxNSAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigzMSwxNzcsMjA2KSwgcmdiKDI2LDE5NiwxNjYpKTsgLyog5qCH5YeG55qE6K+t5rOVICovXHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM4cHg7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBpbmdGYW5nIFNDXCI7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBmb250LWZhbWlseTogXCJQaW5nRmFuZyBTQ1wiO1xyXG4gICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGlzdC1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxufSJdfQ== */"

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
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/websocket.service */ "./src/app/services/websocket.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-15 22:18:06
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 14:51:55
 * @Description: file content
 */



// import { SearchPage } from '../search/search.page';





// import { ShopNavService } from '../services/shop-nav.service';
// import { GetshopService } from '../services/getshop.service';




var Tab1Page = /** @class */ (function () {
    function Tab1Page(modalController, http, shop, topage, user, route, appUpdate, native, alertController, ws) {
        this.modalController = modalController;
        this.http = http;
        this.shop = shop;
        this.topage = topage;
        this.user = user;
        this.route = route;
        this.appUpdate = appUpdate;
        this.native = native;
        this.alertController = alertController;
        this.ws = ws;
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
        this.bztjslideOptslv = {
            slidesPerView: 2.2,
            slidesPerGroup: 1,
            spaceBetween: 10,
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
        this.getShopcontent();
        this.location = this.user.getLocation();
        // this.wsfn();
    };
    Tab1Page.prototype.wsfn = function () {
        this.ws.createObservableSocket(this.http.wslink);
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
            console.log(_this.bannerList);
            _this.bzjx = _this.shop.getBzjx();
            if (_this.bzjx) {
                _this.bztjlist = _this.bzjx['sort_goods_arr'][0]['goods'];
                console.log(_this.bztjlist);
            }
            _this.rmzt1 = _this.shop.getRmzt();
            // this.rmzt2 = this.shop.getRmzt2();
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
    Tab1Page.prototype.setBztjlist = function (index) {
        this.bzjxActive = index;
        this.bztjlist = this.bzjx.sort_goods_arr[index]['goods'];
        console.log(this.bztjlist);
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
            _ionic_native_app_update_ngx__WEBPACK_IMPORTED_MODULE_9__["AppUpdate"], _services_native_service__WEBPACK_IMPORTED_MODULE_10__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_websocket_service__WEBPACK_IMPORTED_MODULE_11__["WebsocketService"]])
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