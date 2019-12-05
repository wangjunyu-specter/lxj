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

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-07-23 20:09:34\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-20 22:11:30\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"toPage(4)\" *ngIf=\"location\">\r\n        <span>{{location.city | location}}</span>\r\n        <img src=\"/assets/index-arrow.svg\">\r\n      </div>\r\n      <div class=\"center\" (click)=\"presentModal()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span *ngIf=\"shopdata\">{{keywords}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"toPage(15)\">\r\n        <img src=\"/assets/topnews.svg\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"myslides-box\">\r\n    <div class=\"banner-skeleton-text\" *ngIf=\"!bannerList\">\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n    </div>\r\n    <ion-slides pager=\"false\"  *ngIf=\"bannerList\" id=\"myswiper\" [options]=\"bannerslideopts\">\r\n      <ion-slide *ngFor=\"let item of bannerList\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{item.image  | imgsrc: http.domain}}\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <div class=\"top-radios\">\r\n  </div>\r\n  <ion-row *ngIf=\"!navList\" class=\"nav-skeleton\">\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"!navList\" class=\"nav-skeleton\">\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n  </ion-row>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"margin-top: 10px;\"  *ngIf=\"navList\">\r\n    <ion-slide *ngFor=\"let item of navList\" (click)=\"toPage(item.type, item.menu_url)\">\r\n      <img class=\"nav-img\" src=\"{{item.menu_img | imgsrc: http.domain}}\">\r\n      <div class=\"index-nav-op\">{{item.menu_name}}</div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <!--<div class=\"swiper-pagination2\"></div>-->\r\n  <ion-grid class=\"indexnav\" style=\"margin-top: 10px;\">\r\n    <ion-row *ngIf=\"!navList2\" class=\"nav-skeleton\">\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"navList2\">\r\n      <ion-col *ngFor=\"let item of navList2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img src=\"{{http.domain + item.image}}\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <div class=\"xsqgs\" padding *ngIf=\"hdbox1 || hdbox2\">\r\n    <div class=\"left\"  (click)=\"toPage(hdbox1.type, hdbox1.url)\">\r\n      <img *ngIf=\"hdbox1\" [src]=\"hdbox1.image | imgsrc: http.domain\" alt=\"\">\r\n    </div>\r\n    <div class=\"right\">\r\n      <div class=\"xsqg-box\" *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"xsqgs-grid-list\">\r\n    <div class=\"box\" [ngClass]=\"{two: hdbox1 && hdbox1[1]}\">\r\n      <div class=\"item\" *ngFor=\"let item of hdbox1\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image  | imgsrc: http.domain\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"box\">\r\n      <div class=\"item\" *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-grid class=\"xsqg\" *ngIf=\"!hdbox1 && !hdbox2\">\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!--<ion-grid class=\"xsqg\">-->\r\n    <!--<ion-row>-->\r\n      <!--<ion-col *ngFor=\"let item of hdbox2\" (click)=\"toPage(item.type, item.url)\">-->\r\n        <!--<img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">-->\r\n      <!--</ion-col>-->\r\n    <!--</ion-row>-->\r\n  <!--</ion-grid>-->\r\n  <div class=\"ion-padding\" *ngIf=\"!bzjx\">\r\n    <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%; height: 100px\"></ion-skeleton-text></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"ion-padding my-content\" *ngIf=\"bzjx\">\r\n    <!-- <app-pagetitle [myname]=\"bzjx['title']\" [type]=\"true\" [des]=\"bzjx['desc']\"></app-pagetitle> -->\r\n    <app-newpagetitle [title]=\"bzjx['title']\"></app-newpagetitle>\r\n    <div class=\"jx-nav\">\r\n      <div *ngFor=\"let item of bzjx.sort_goods_arr; let i = index\"  [ngClass]=\"{active: bzjxActive === i}\" (click)=\"setBztjlist(i)\">{{item.name}}</div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-grid *ngIf=\"bzjx\">\r\n    <ion-row *ngFor=\"let item of bzjx.sort_goods_arr; let i = index\" [ngClass]=\"{none: bzjxActive !== i}\">\r\n      <ion-col size=\"6\" *ngFor=\"let goods of item.goods\">\r\n        <app-tjproduct [id]=\"goods.goods_id\" [price]=\"goods.org_price\" [dessubstr]=\"true\" [des]=\"goods.goods_brief || goods.short_name\"\r\n                       [src]=\"http.zdomain + goods.original_img\" [dessubstrnum]=\"15\" (tclick)=\"clickbzjx($event)\"></app-tjproduct>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <div class=\"bztj ion-padding\" *ngIf=\"bzjx\">\r\n    <ion-slides [options]=\"bztjslideOptslv\">\r\n      <ion-slide *ngFor=\"let goods of bztjlist\">\r\n          <app-bztjbox [id]=\"goods.goods_id\" [price]=\"goods.org_price\" [name]=\"goods.goods_brief || goods.short_name\"\r\n          [src]=\"goods.goods_thumb | imgsrc: http.zdomain\" [dessubstrnum]=\"15\" (tclick)=\"clickbzjx($event)\"></app-bztjbox>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <!--<div padding  class=\"my-content\">暂时隐藏-->\r\n    <!--<app-pagetitle *ngIf=\"indexTitle\" [myname]=\"indexTitle.lxlgtitle\" [des]=\"indexTitle.lxlgdes\" [type]=\"true\"></app-pagetitle>-->\r\n    <!--<ion-slides pager=\"true\" [options]=\"slideOptslv\" class=\"lxlg\">-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n      <!--<ion-slide>-->\r\n        <!--<img src=\"./assets/index/tjcp.png\">-->\r\n        <!--<div class=\"name\">浪漫的蜜月之地</div>-->\r\n        <!--<p>体会爱情的浪门时刻</p>-->\r\n      <!--</ion-slide>-->\r\n    <!--</ion-slides>-->\r\n  <!--</div>-->\r\n  <div class=\"ion-padding my-content\">\r\n    <app-newpagetitle *ngIf=\"indexTitle\" [title]=\"indexTitle.rmzttitle\"></app-newpagetitle>\r\n    <!-- <app-pagetitle *ngIf=\"indexTitle\" [myname]=\"indexTitle.rmzttitle\" [des]=\"indexTitle.rmztdes\" [type]=\"true\"></app-pagetitle> -->\r\n  </div>\r\n  <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        \r\n        <img *ngIf=\"rmzt1\" [src]=\"rmzt1.image | imgsrc: http.domain\" alt=\"\" (click)=\"toPage(rmzt1.type, rmzt1.url)\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <!-- <ion-grid class=\"rmzt2box\">\r\n    <ion-row *ngIf=\"rmzt2\">\r\n      <ion-col *ngFor=\"let item of rmzt2\" (click)=\"toPage(item.type, item.url)\">\r\n        <img [src]=\"item.image | imgsrc: http.domain\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <div class=\"rmztbox\">\r\n    <div class=\"bjbox ion-padding\">\r\n      <div class=\"title\">高人气榜单 <ion-text>最有人气的旅行主题</ion-text></div>\r\n    </div>\r\n    <div class=\"list-box\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col *ngFor=\"let item of rmzt1; let i = index\" (click)=\"toPage(item.type, item.url)\">\r\n            <app-rmztitem [data]=\"item\" [src]=\"item.image | imgsrc: http.domain\" [index]=\"i\"></app-rmztitem>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n  <div class=\"wntj ion-padding-start ion-padding-end\">\r\n    <!-- <div  class=\"title-img\">\r\n      <img *ngIf=\"indexTitle\" [src]=\"indexTitle.wntj || './assets/wntj.svg'\" alt=\"\">\r\n    </div> -->\r\n    <app-newpagetitle [title]=\"'为你推荐'\"></app-newpagetitle>    \r\n    <div *ngFor=\"let item of catcalelist\">\r\n      <!-- <div class=\"yjfx\" *ngIf=\"item\">{{item.name}}</div> -->\r\n      <div *ngFor=\"let data of item.arr\">\r\n        <div *ngIf=\"data.img\" class=\"ion-padding-top\">\r\n          <app-articlecard [data]=\"data\" (setclick)=\"setopen($event)\" [src]=\"data.img | imgsrc: http.zdomain\"></app-articlecard>\r\n        </div>\r\n        <div *ngIf=\"!data.img\">\r\n          <app-pagetitle [myname]=\"data.short_title\" [val]=\"data.id\" (setclick)=\"setopen($event)\" [type]=\"false\"></app-pagetitle>\r\n          <p class=\"ion-no-padding ion-no-margin\"><ion-text color=\"success\">{{data.cat_name}}</ion-text></p>\r\n          <p  (click)=\"toPage(9, data.id)\">{{data.des}}</p>\r\n        </div>\r\n        <ion-slides [options]=\"bztjslideOptslv\">\r\n          <ion-slide *ngFor=\"let goods of data.goods\" (click)=\"toPage(2, goods.goods_id)\">\r\n            <app-goodsupanddown [data]=\"goods\" [src]=\"goods.goods_thumb | imgsrc: http.zdomain\" [tag]=\"goods.keywords | splitarr\"></app-goodsupanddown>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <!-- <app-pagetitle [myname]=\"data.short_title\" [val]=\"data.id\" (setclick)=\"setopen($event)\" [type]=\"false\"></app-pagetitle> -->\r\n        <!-- <p  (click)=\"toPage(9, data.id)\">{{data.des}}</p> -->\r\n        <!-- <img (click)=\"toPage(9, data.id)\" *ngIf=\"data.img\" [src]=\"data.img | imgsrc: http.zdomain\"> -->\r\n        <!-- <app-productlist *ngIf=\"data.goods && data.goods[0]\" [ishw]=\"true\" [data]=\"data.goods[0]\" (open)=\"openpage($event)\"></app-productlist> -->\r\n        <!-- <app-productlist *ngIf=\"data.goods && data.goods[1]\" [ishw]=\"true\" [data]=\"data.goods[1]\" (open)=\"openpage($event)\"></app-productlist> -->\r\n        <!-- <app-productlist *ngIf=\"data.goods && data.goods[2]\" [ishw]=\"true\" [data]=\"data.goods[2]\" (open)=\"openpage($event)\"></app-productlist> -->\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let item of bestGood\">\r\n      <div class=\"yjfx\" *ngIf=\"item.arr && item.arr.length > 0\"> {{item.title}}</div>\r\n      <app-productlist *ngFor=\"let citem of item.arr\" [ishw]=\"true\" [data]=\"citem\" [type]=\"item.type\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n    <div *ngIf=\"moreGoods && moreGoods.length > 0\">\r\n      <div class=\"yjfx\">{{indexTitle.pttj}}</div>\r\n      <app-productlist *ngFor=\"let item of moreGoods\" [ishw]=\"true\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\r\n    </div>\r\n    <!--<ion-virtual-scroll [items]=\"moreGoods\" approxItemHeight=\"153px\">-->\r\n      <!--<div *virtualItem=\"let item\">-->\r\n        <!--<app-productlist [data]=\"item\" [imgtype]=\"1\"></app-productlist>-->\r\n      <!--</div>-->\r\n    <!--</ion-virtual-scroll>-->\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"crescent\"\r\n       loadingText=\"加载更多...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n.search-bar .left {\n    min-width: 48px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n.search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n.search-bar .left span {\n      max-width: 75px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      display: inline-block; }\n.search-bar .right {\n    width: 20px; }\n.search-bar .right img {\n      width: 19px; }\n.search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 15px;\n    overflow: hidden; }\n.search-bar .center .search-box {\n      display: flex;\n      flex: 1;\n      width: 100%;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n.search-bar .center .search-box span {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n.search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\nion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n.show-0 {\n  --opacity: 0; }\n.show-1 {\n  --opacity: 0.01; }\n.show-2 {\n  --opacity: 0.02; }\n.show-3 {\n  --opacity: 0.03; }\n.show-4 {\n  --opacity: 0.04; }\n.show-5 {\n  --opacity: 0.05; }\n.show-6 {\n  --opacity: 0.06; }\n.show-7 {\n  --opacity: 0.07; }\n.show-8 {\n  --opacity: 0.08; }\n.show-9 {\n  --opacity: 0.09; }\n.show-10 {\n  --opacity: 0.1; }\n.show-11 {\n  --opacity: 0.11; }\n.show-12 {\n  --opacity: 0.12; }\n.show-13 {\n  --opacity: 0.13; }\n.show-14 {\n  --opacity: 0.14; }\n.show-15 {\n  --opacity: 0.15; }\n.show-16 {\n  --opacity: 0.16; }\n.show-17 {\n  --opacity: 0.17; }\n.show-18 {\n  --opacity: 0.18; }\n.show-19 {\n  --opacity: 0.19; }\n.show-20 {\n  --opacity: 0.2; }\n.show-21 {\n  --opacity: 0.21; }\n.show-22 {\n  --opacity: 0.22; }\n.show-23 {\n  --opacity: 0.23; }\n.show-24 {\n  --opacity: 0.24; }\n.show-25 {\n  --opacity: 0.25; }\n.show-26 {\n  --opacity: 0.26; }\n.show-27 {\n  --opacity: 0.27; }\n.show-28 {\n  --opacity: 0.28; }\n.show-29 {\n  --opacity: 0.29; }\n.show-30 {\n  --opacity: 0.3; }\n.show-31 {\n  --opacity: 0.31; }\n.show-32 {\n  --opacity: 0.32; }\n.show-33 {\n  --opacity: 0.33; }\n.show-34 {\n  --opacity: 0.34; }\n.show-35 {\n  --opacity: 0.35; }\n.show-36 {\n  --opacity: 0.36; }\n.show-37 {\n  --opacity: 0.37; }\n.show-38 {\n  --opacity: 0.38; }\n.show-39 {\n  --opacity: 0.39; }\n.show-40 {\n  --opacity: 0.4; }\n.show-41 {\n  --opacity: 0.41; }\n.show-42 {\n  --opacity: 0.42; }\n.show-43 {\n  --opacity: 0.43; }\n.show-44 {\n  --opacity: 0.44; }\n.show-45 {\n  --opacity: 0.45; }\n.show-46 {\n  --opacity: 0.46; }\n.show-47 {\n  --opacity: 0.47; }\n.show-48 {\n  --opacity: 0.48; }\n.show-49 {\n  --opacity: 0.49; }\n.show-50 {\n  --opacity: 0.5; }\n.show-51 {\n  --opacity: 0.51; }\n.show-52 {\n  --opacity: 0.52; }\n.show-53 {\n  --opacity: 0.53; }\n.show-54 {\n  --opacity: 0.54; }\n.show-55 {\n  --opacity: 0.55; }\n.show-56 {\n  --opacity: 0.56; }\n.show-57 {\n  --opacity: 0.57; }\n.show-58 {\n  --opacity: 0.58; }\n.show-59 {\n  --opacity: 0.59; }\n.show-60 {\n  --opacity: 0.6; }\n.show-61 {\n  --opacity: 0.61; }\n.show-62 {\n  --opacity: 0.62; }\n.show-63 {\n  --opacity: 0.63; }\n.show-64 {\n  --opacity: 0.64; }\n.show-65 {\n  --opacity: 0.65; }\n.show-66 {\n  --opacity: 0.66; }\n.show-67 {\n  --opacity: 0.67; }\n.show-68 {\n  --opacity: 0.68; }\n.show-69 {\n  --opacity: 0.69; }\n.show-70 {\n  --opacity: 0.7; }\n.show-71 {\n  --opacity: 0.71; }\n.show-72 {\n  --opacity: 0.72; }\n.show-73 {\n  --opacity: 0.73; }\n.show-74 {\n  --opacity: 0.74; }\n.show-75 {\n  --opacity: 0.75; }\n.show-76 {\n  --opacity: 0.76; }\n.show-77 {\n  --opacity: 0.77; }\n.show-78 {\n  --opacity: 0.78; }\n.show-79 {\n  --opacity: 0.79; }\n.show-80 {\n  --opacity: 0.8; }\n.show-81 {\n  --opacity: 0.81; }\n.show-82 {\n  --opacity: 0.82; }\n.show-83 {\n  --opacity: 0.83; }\n.show-84 {\n  --opacity: 0.84; }\n.show-85 {\n  --opacity: 0.85; }\n.show-86 {\n  --opacity: 0.86; }\n.show-87 {\n  --opacity: 0.87; }\n.show-88 {\n  --opacity: 0.88; }\n.show-89 {\n  --opacity: 0.89; }\n.show-90 {\n  --opacity: 0.9; }\n.show-91 {\n  --opacity: 0.91; }\n.show-92 {\n  --opacity: 0.92; }\n.show-93 {\n  --opacity: 0.93; }\n.show-94 {\n  --opacity: 0.94; }\n.show-95 {\n  --opacity: 0.95; }\n.show-96 {\n  --opacity: 0.96; }\n.show-97 {\n  --opacity: 0.97; }\n.show-98 {\n  --opacity: 0.98; }\n.show-99 {\n  --opacity: 0.99; }\n.show-100 {\n  --opacity: 1; }\nion-content .nav-img {\n  width: 50px; }\nion-content #myswiper {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden;\n  --bullet-background-active: #fff; }\nion-content .banner-skeleton-text {\n  margin-top: var(--ion-platform-margin-top);\n  height: 200px;\n  width: 100%; }\nion-content ion-slide {\n  flex-direction: column;\n  font-size: var(--ion-text); }\nion-content ion-slides {\n  --bullet-background-active: var(--ion-color-secondary); }\nion-content .swiper-pagination2 {\n  text-align: center;\n  --bullet-background-active: var(--ion-color-secondary);\n  --bullet-background: #333; }\nion-content .swiper-pagination2 span {\n    margin: 0 5px !important; }\nion-content .swiper-pagination {\n  --bottom: 25px; }\nion-content .myslides-box {\n  position: relative; }\nion-content .myslides-box .footer {\n    left: -10%;\n    width: 120%;\n    position: absolute;\n    height: 8px;\n    z-index: 1000;\n    bottom: -5px;\n    overflow: hidden; }\nion-content .myslides-box .footer .footer-box {\n      border-radius: 50%;\n      height: 30px;\n      background-color: blue; }\nion-content .indexnav .four-nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n  padding: 7px 0px 0 5px; }\nion-content .indexnav .four-nav .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: flex-start;\n    font-size: var(--ion-sm-text); }\nion-content .indexnav .four-nav .footer img {\n      width: 20px; }\nion-content .xsqgs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: stretch; }\nion-content .xsqgs img {\n    float: left; }\nion-content .xsqgs .left, ion-content .xsqgs .right {\n    flex: 1; }\nion-content .xsqgs .left {\n    margin-right: 4px; }\nion-content .xsqgs .left img {\n      width: 100%; }\nion-content .xsqgs .right {\n    margin-left: 4px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: stretch; }\nion-content .xsqgs .right .xsqg-box {\n      flex: 1;\n      position: relative; }\nion-content .xsqgs .right .xsqg-box img {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0; }\nion-content .xsqgs .right .xsqg-box:first-of-type {\n        margin-bottom: 4px; }\nion-content .xsqgs .right .xsqg-box:last-of-type {\n        margin-top: 4px; }\nion-content .xsqg ion-skeleton-text {\n  height: 204px; }\nion-content .xsqg .xsqg-right {\n  position: relative;\n  color: #fff; }\nion-content .xsqg .xsqg-right ion-skeleton-text {\n    height: 100px; }\nion-content .xsqg .xsqg-right .name {\n    font-size: var(--ion-text);\n    position: absolute;\n    top: 33%;\n    margin-left: 15px;\n    margin-right: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\nion-content .xsqg .xsqg-right app-pricebutton {\n    position: absolute;\n    bottom: 12px;\n    left: 15px; }\nion-content .jx-nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\nion-content .jx-nav div {\n    font-size: var(--ion-text);\n    padding: 3px 7px;\n    border-radius: 11px;\n    margin-right: 5px;\n    background-color: #f7f4f8;\n    color: #666666; }\nion-content .jx-nav div.active {\n      background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n      color: #fff;\n      border: none;\n      position: relative; }\nion-content .my-content {\n  margin-top: -10px;\n  --padding-top: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\nion-content .lxlg ion-slide {\n  color: #fff; }\nion-content .lxlg ion-slide .name {\n    position: absolute;\n    bottom: 50px;\n    padding: 5px 6px;\n    border-radius: 5px;\n    background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\nion-content .lxlg ion-slide p {\n    position: absolute;\n    bottom: 10px;\n    margin-top: 0; }\nion-content .rmzt2box {\n  margin-top: -15px; }\nion-content .wntj .title-img {\n  display: flex;\n  justify-content: center; }\nion-content .wntj .title-img img {\n    width: 75px; }\nion-content .wntj .yjfx {\n  color: var(--ion-color-secondary);\n  font-size: var(--ion-sm-text);\n  margin-top: 15px; }\nion-content .wntj p {\n  color: var(--ion-color-medium);\n  font-size: var(--ion-sm-text); }\n.none {\n  display: none; }\n.nav-skeleton ion-skeleton-text {\n  height: 70px; }\n.top-radios {\n  height: 20px;\n  background-color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  position: relative;\n  z-index: 9;\n  margin-top: -15px; }\n.xsqgs-grid {\n  --ion-grid-column-padding: 5px; }\n.xsqgs-grid ion-col {\n    display: flex;\n    align-items: stretch; }\n.xsqgs-grid ion-col img {\n      box-shadow: 0 0 10px #f2f2f2; }\n.xsqgs-grid-list {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch; }\n.xsqgs-grid-list .box {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: stretch; }\n.xsqgs-grid-list .box .item {\n      flex: 1;\n      margin: 5px;\n      box-shadow: 0 0 10px #f2f2f2; }\n.xsqgs-grid-list .two .item:first-of-type {\n    flex: 2 !important; }\n.xsqgs-grid-list img {\n    width: 100%; }\n.rmztbox {\n  position: relative; }\n.rmztbox .bjbox {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 150px;\n    /* Safari 5.1 - 6.0 */\n    /* Opera 11.1 - 12.0 */\n    /* Firefox 3.6 - 15 */\n    background: linear-gradient(#1fb1ce, #1ac4a6);\n    /* 标准的语法 */\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    border-bottom-left-radius: 38px;\n    border-bottom-right-radius: 38px; }\n.rmztbox .bjbox .title {\n      font-size: var(--ion-title);\n      font-family: \"PingFang SC\";\n      color: white;\n      line-height: 1.2; }\n.rmztbox .bjbox ion-text {\n      font-size: var(--ion-sm-text);\n      font-family: \"PingFang SC\";\n      color: white;\n      line-height: 1.2; }\n.rmztbox .list-box {\n    position: relative;\n    z-index: 2;\n    padding-top: 50px; }\n.index-nav-op {\n  font-size: var(--ion-text);\n  margin: 10px 0 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBTmpCO0lBUUksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUIsRUFBQTtBQWJ2QjtNQWVNLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtBQWhCdEI7TUFtQk0sZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLHFCQUFxQixFQUFBO0FBdkIzQjtJQTJCSSxXQUFXLEVBQUE7QUEzQmY7TUE2Qk0sV0FBVyxFQUFBO0FBN0JqQjtJQWlDSSxvQkFBb0I7SUFDcEIsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBR3RCLHFCQUFxQjtJQUdyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTtBQTlDcEI7TUFnRE0sYUFBYTtNQUNiLE9BQU87TUFDUCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLDBCQUEwQjtNQUMxQixpQkFBaUIsRUFBQTtBQXhEdkI7UUEyRFEsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBQTtBQTdEL0I7UUFnRVEsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0IsRUFBQTtBQUsxQjtFQUNFLDhGQUFhLEVBQUE7QUFJYjtFQUFnQixZQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGNBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixjQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGNBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixjQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGNBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixjQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0FBQTFCO0VBQWdCLGVBQVUsRUFBQTtBQUExQjtFQUFnQixlQUFVLEVBQUE7QUFBMUI7RUFBZ0IsWUFBVSxFQUFBO0FBRTVCO0VBRUksV0FBVyxFQUFBO0FBRmY7RUFLSSwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGdDQUEyQixFQUFBO0FBUC9CO0VBVUksMENBQTBDO0VBQzFDLGFBQWE7RUFDYixXQUFXLEVBQUE7QUFaZjtFQWVJLHNCQUFzQjtFQUN0QiwwQkFBMEIsRUFBQTtBQWhCOUI7RUFtQkksc0RBQTJCLEVBQUE7QUFuQi9CO0VBc0JJLGtCQUFrQjtFQUNsQixzREFBMkI7RUFDM0IseUJBQW9CLEVBQUE7QUF4QnhCO0lBMEJNLHdCQUF3QixFQUFBO0FBMUI5QjtFQWlDSSxjQUFTLEVBQUE7QUFqQ2I7RUFvQ0ksa0JBQWtCLEVBQUE7QUFwQ3RCO0lBc0NNLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0FBNUN0QjtNQWdEUSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHNCQUFzQixFQUFBO0FBbEQ5QjtFQXdETSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBR3hDLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtBQWhFNUI7SUFrRVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDZCQUE2QixFQUFBO0FBdEVyQztNQXdFVSxXQUFXLEVBQUE7QUF4RXJCO0VBOEVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG9CQUFvQixFQUFBO0FBakZ4QjtJQW1GTSxXQUFXLEVBQUE7QUFuRmpCO0lBc0ZNLE9BQU8sRUFBQTtBQXRGYjtJQXlGTSxpQkFBaUIsRUFBQTtBQXpGdkI7TUEyRlEsV0FBVyxFQUFBO0FBM0ZuQjtJQStGTSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0Isb0JBQW9CLEVBQUE7QUFuRzFCO01BcUdRLE9BQU87TUFDUCxrQkFBa0IsRUFBQTtBQXRHMUI7UUF3R1UsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU8sRUFBQTtBQTVHakI7UUErR1Usa0JBQWtCLEVBQUE7QUEvRzVCO1FBa0hVLGVBQWUsRUFBQTtBQWxIekI7RUF5SE0sYUFBYSxFQUFBO0FBekhuQjtFQTRITSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBN0hqQjtJQStIUSxhQUFhLEVBQUE7QUEvSHJCO0lBa0lRLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTtBQXpJL0I7SUE0SVEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVLEVBQUE7QUE5SWxCO0VBbUpJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBO0FBdEp2QjtJQXdKTSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBSWhCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWMsRUFBQTtBQWhLcEI7TUFrS1EsNEZBQTRGO01BQzVGLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCLEVBQUE7QUFySzFCO0VBdUxJLGlCQUFpQjtFQUNqQixnQkFBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtBQTFMckI7RUE4TE0sV0FBVyxFQUFBO0FBOUxqQjtJQWdNUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUdoQixrQkFBa0I7SUFDbEIsNEZBQTRGLEVBQUE7QUF0TXBHO0lBeU1RLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBO0FBM01yQjtFQWdOSSxpQkFBaUIsRUFBQTtBQWhOckI7RUFvTk0sYUFBYTtFQUNiLHVCQUF1QixFQUFBO0FBck43QjtJQXVOUSxXQUFXLEVBQUE7QUF2Tm5CO0VBMk5NLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsZ0JBQWdCLEVBQUE7QUE3TnRCO0VBZ09NLDhCQUE4QjtFQUM5Qiw2QkFBNkIsRUFBQTtBQUluQztFQUNFLGFBQWEsRUFBQTtBQUdmO0VBRUksWUFBWSxFQUFBO0FBR2hCO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7QUFFbkI7RUFDRSw4QkFBMEIsRUFBQTtBQUQ1QjtJQUdJLGFBQWE7SUFDYixvQkFBb0IsRUFBQTtBQUp4QjtNQU1NLDRCQUE0QixFQUFBO0FBS2xDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG9CQUFvQixFQUFBO0FBTHRCO0lBT0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isb0JBQW9CLEVBQUE7QUFWeEI7TUFZTSxPQUFPO01BQ1AsV0FBVztNQUNYLDRCQUE0QixFQUFBO0FBZGxDO0lBbUJNLGtCQUFrQixFQUFBO0FBbkJ4QjtJQXVCSSxXQUFXLEVBQUE7QUFHZjtFQUNFLGtCQUFrQixFQUFBO0FBRHBCO0lBR0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQzBELHFCQUFBO0lBQ0wsc0JBQUE7SUFDRSxxQkFBQTtJQUNwRSw2Q0FBNkQ7SUFBRSxVQUFBO0lBQy9ELDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGdDQUFnQyxFQUFBO0FBaEJwQztNQWtCTSwyQkFBMkI7TUFDM0IsMEJBQTBCO01BQzFCLFlBQXlCO01BQ3pCLGdCQUFnQixFQUFBO0FBckJ0QjtNQXdCTSw2QkFBNkI7TUFDN0IsMEJBQTBCO01BQzFCLFlBQXlCO01BQ3pCLGdCQUFnQixFQUFBO0FBM0J0QjtJQStCSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZWFyY2gtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDEwcHg7IH1cbiAgLnNlYXJjaC1iYXIgLmxlZnQge1xuICAgIG1pbi13aWR0aDogNDhweDtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLnNlYXJjaC1iYXIgLmxlZnQgaW1nIHtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDsgfVxuICAgIC5zZWFyY2gtYmFyIC5sZWZ0IHNwYW4ge1xuICAgICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuc2VhcmNoLWJhciAucmlnaHQge1xuICAgIHdpZHRoOiAyMHB4OyB9XG4gICAgLnNlYXJjaC1iYXIgLnJpZ2h0IGltZyB7XG4gICAgICB3aWR0aDogMTlweDsgfVxuICAuc2VhcmNoLWJhciAuY2VudGVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTMuNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTMuNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEzLjVweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5zZWFyY2gtYmFyIC5jZW50ZXIgLnNlYXJjaC1ib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gICAgICBsaW5lLWhlaWdodDogMjdweDsgfVxuICAgICAgLnNlYXJjaC1iYXIgLmNlbnRlciAuc2VhcmNoLWJveCBzcGFuIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5zZWFyY2gtYmFyIC5jZW50ZXIgLnNlYXJjaC1ib3ggaW1nIHtcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTsgfVxuXG4uc2hvdy0wIHtcbiAgLS1vcGFjaXR5OiAwOyB9XG5cbi5zaG93LTEge1xuICAtLW9wYWNpdHk6IDAuMDE7IH1cblxuLnNob3ctMiB7XG4gIC0tb3BhY2l0eTogMC4wMjsgfVxuXG4uc2hvdy0zIHtcbiAgLS1vcGFjaXR5OiAwLjAzOyB9XG5cbi5zaG93LTQge1xuICAtLW9wYWNpdHk6IDAuMDQ7IH1cblxuLnNob3ctNSB7XG4gIC0tb3BhY2l0eTogMC4wNTsgfVxuXG4uc2hvdy02IHtcbiAgLS1vcGFjaXR5OiAwLjA2OyB9XG5cbi5zaG93LTcge1xuICAtLW9wYWNpdHk6IDAuMDc7IH1cblxuLnNob3ctOCB7XG4gIC0tb3BhY2l0eTogMC4wODsgfVxuXG4uc2hvdy05IHtcbiAgLS1vcGFjaXR5OiAwLjA5OyB9XG5cbi5zaG93LTEwIHtcbiAgLS1vcGFjaXR5OiAwLjE7IH1cblxuLnNob3ctMTEge1xuICAtLW9wYWNpdHk6IDAuMTE7IH1cblxuLnNob3ctMTIge1xuICAtLW9wYWNpdHk6IDAuMTI7IH1cblxuLnNob3ctMTMge1xuICAtLW9wYWNpdHk6IDAuMTM7IH1cblxuLnNob3ctMTQge1xuICAtLW9wYWNpdHk6IDAuMTQ7IH1cblxuLnNob3ctMTUge1xuICAtLW9wYWNpdHk6IDAuMTU7IH1cblxuLnNob3ctMTYge1xuICAtLW9wYWNpdHk6IDAuMTY7IH1cblxuLnNob3ctMTcge1xuICAtLW9wYWNpdHk6IDAuMTc7IH1cblxuLnNob3ctMTgge1xuICAtLW9wYWNpdHk6IDAuMTg7IH1cblxuLnNob3ctMTkge1xuICAtLW9wYWNpdHk6IDAuMTk7IH1cblxuLnNob3ctMjAge1xuICAtLW9wYWNpdHk6IDAuMjsgfVxuXG4uc2hvdy0yMSB7XG4gIC0tb3BhY2l0eTogMC4yMTsgfVxuXG4uc2hvdy0yMiB7XG4gIC0tb3BhY2l0eTogMC4yMjsgfVxuXG4uc2hvdy0yMyB7XG4gIC0tb3BhY2l0eTogMC4yMzsgfVxuXG4uc2hvdy0yNCB7XG4gIC0tb3BhY2l0eTogMC4yNDsgfVxuXG4uc2hvdy0yNSB7XG4gIC0tb3BhY2l0eTogMC4yNTsgfVxuXG4uc2hvdy0yNiB7XG4gIC0tb3BhY2l0eTogMC4yNjsgfVxuXG4uc2hvdy0yNyB7XG4gIC0tb3BhY2l0eTogMC4yNzsgfVxuXG4uc2hvdy0yOCB7XG4gIC0tb3BhY2l0eTogMC4yODsgfVxuXG4uc2hvdy0yOSB7XG4gIC0tb3BhY2l0eTogMC4yOTsgfVxuXG4uc2hvdy0zMCB7XG4gIC0tb3BhY2l0eTogMC4zOyB9XG5cbi5zaG93LTMxIHtcbiAgLS1vcGFjaXR5OiAwLjMxOyB9XG5cbi5zaG93LTMyIHtcbiAgLS1vcGFjaXR5OiAwLjMyOyB9XG5cbi5zaG93LTMzIHtcbiAgLS1vcGFjaXR5OiAwLjMzOyB9XG5cbi5zaG93LTM0IHtcbiAgLS1vcGFjaXR5OiAwLjM0OyB9XG5cbi5zaG93LTM1IHtcbiAgLS1vcGFjaXR5OiAwLjM1OyB9XG5cbi5zaG93LTM2IHtcbiAgLS1vcGFjaXR5OiAwLjM2OyB9XG5cbi5zaG93LTM3IHtcbiAgLS1vcGFjaXR5OiAwLjM3OyB9XG5cbi5zaG93LTM4IHtcbiAgLS1vcGFjaXR5OiAwLjM4OyB9XG5cbi5zaG93LTM5IHtcbiAgLS1vcGFjaXR5OiAwLjM5OyB9XG5cbi5zaG93LTQwIHtcbiAgLS1vcGFjaXR5OiAwLjQ7IH1cblxuLnNob3ctNDEge1xuICAtLW9wYWNpdHk6IDAuNDE7IH1cblxuLnNob3ctNDIge1xuICAtLW9wYWNpdHk6IDAuNDI7IH1cblxuLnNob3ctNDMge1xuICAtLW9wYWNpdHk6IDAuNDM7IH1cblxuLnNob3ctNDQge1xuICAtLW9wYWNpdHk6IDAuNDQ7IH1cblxuLnNob3ctNDUge1xuICAtLW9wYWNpdHk6IDAuNDU7IH1cblxuLnNob3ctNDYge1xuICAtLW9wYWNpdHk6IDAuNDY7IH1cblxuLnNob3ctNDcge1xuICAtLW9wYWNpdHk6IDAuNDc7IH1cblxuLnNob3ctNDgge1xuICAtLW9wYWNpdHk6IDAuNDg7IH1cblxuLnNob3ctNDkge1xuICAtLW9wYWNpdHk6IDAuNDk7IH1cblxuLnNob3ctNTAge1xuICAtLW9wYWNpdHk6IDAuNTsgfVxuXG4uc2hvdy01MSB7XG4gIC0tb3BhY2l0eTogMC41MTsgfVxuXG4uc2hvdy01MiB7XG4gIC0tb3BhY2l0eTogMC41MjsgfVxuXG4uc2hvdy01MyB7XG4gIC0tb3BhY2l0eTogMC41MzsgfVxuXG4uc2hvdy01NCB7XG4gIC0tb3BhY2l0eTogMC41NDsgfVxuXG4uc2hvdy01NSB7XG4gIC0tb3BhY2l0eTogMC41NTsgfVxuXG4uc2hvdy01NiB7XG4gIC0tb3BhY2l0eTogMC41NjsgfVxuXG4uc2hvdy01NyB7XG4gIC0tb3BhY2l0eTogMC41NzsgfVxuXG4uc2hvdy01OCB7XG4gIC0tb3BhY2l0eTogMC41ODsgfVxuXG4uc2hvdy01OSB7XG4gIC0tb3BhY2l0eTogMC41OTsgfVxuXG4uc2hvdy02MCB7XG4gIC0tb3BhY2l0eTogMC42OyB9XG5cbi5zaG93LTYxIHtcbiAgLS1vcGFjaXR5OiAwLjYxOyB9XG5cbi5zaG93LTYyIHtcbiAgLS1vcGFjaXR5OiAwLjYyOyB9XG5cbi5zaG93LTYzIHtcbiAgLS1vcGFjaXR5OiAwLjYzOyB9XG5cbi5zaG93LTY0IHtcbiAgLS1vcGFjaXR5OiAwLjY0OyB9XG5cbi5zaG93LTY1IHtcbiAgLS1vcGFjaXR5OiAwLjY1OyB9XG5cbi5zaG93LTY2IHtcbiAgLS1vcGFjaXR5OiAwLjY2OyB9XG5cbi5zaG93LTY3IHtcbiAgLS1vcGFjaXR5OiAwLjY3OyB9XG5cbi5zaG93LTY4IHtcbiAgLS1vcGFjaXR5OiAwLjY4OyB9XG5cbi5zaG93LTY5IHtcbiAgLS1vcGFjaXR5OiAwLjY5OyB9XG5cbi5zaG93LTcwIHtcbiAgLS1vcGFjaXR5OiAwLjc7IH1cblxuLnNob3ctNzEge1xuICAtLW9wYWNpdHk6IDAuNzE7IH1cblxuLnNob3ctNzIge1xuICAtLW9wYWNpdHk6IDAuNzI7IH1cblxuLnNob3ctNzMge1xuICAtLW9wYWNpdHk6IDAuNzM7IH1cblxuLnNob3ctNzQge1xuICAtLW9wYWNpdHk6IDAuNzQ7IH1cblxuLnNob3ctNzUge1xuICAtLW9wYWNpdHk6IDAuNzU7IH1cblxuLnNob3ctNzYge1xuICAtLW9wYWNpdHk6IDAuNzY7IH1cblxuLnNob3ctNzcge1xuICAtLW9wYWNpdHk6IDAuNzc7IH1cblxuLnNob3ctNzgge1xuICAtLW9wYWNpdHk6IDAuNzg7IH1cblxuLnNob3ctNzkge1xuICAtLW9wYWNpdHk6IDAuNzk7IH1cblxuLnNob3ctODAge1xuICAtLW9wYWNpdHk6IDAuODsgfVxuXG4uc2hvdy04MSB7XG4gIC0tb3BhY2l0eTogMC44MTsgfVxuXG4uc2hvdy04MiB7XG4gIC0tb3BhY2l0eTogMC44MjsgfVxuXG4uc2hvdy04MyB7XG4gIC0tb3BhY2l0eTogMC44MzsgfVxuXG4uc2hvdy04NCB7XG4gIC0tb3BhY2l0eTogMC44NDsgfVxuXG4uc2hvdy04NSB7XG4gIC0tb3BhY2l0eTogMC44NTsgfVxuXG4uc2hvdy04NiB7XG4gIC0tb3BhY2l0eTogMC44NjsgfVxuXG4uc2hvdy04NyB7XG4gIC0tb3BhY2l0eTogMC44NzsgfVxuXG4uc2hvdy04OCB7XG4gIC0tb3BhY2l0eTogMC44ODsgfVxuXG4uc2hvdy04OSB7XG4gIC0tb3BhY2l0eTogMC44OTsgfVxuXG4uc2hvdy05MCB7XG4gIC0tb3BhY2l0eTogMC45OyB9XG5cbi5zaG93LTkxIHtcbiAgLS1vcGFjaXR5OiAwLjkxOyB9XG5cbi5zaG93LTkyIHtcbiAgLS1vcGFjaXR5OiAwLjkyOyB9XG5cbi5zaG93LTkzIHtcbiAgLS1vcGFjaXR5OiAwLjkzOyB9XG5cbi5zaG93LTk0IHtcbiAgLS1vcGFjaXR5OiAwLjk0OyB9XG5cbi5zaG93LTk1IHtcbiAgLS1vcGFjaXR5OiAwLjk1OyB9XG5cbi5zaG93LTk2IHtcbiAgLS1vcGFjaXR5OiAwLjk2OyB9XG5cbi5zaG93LTk3IHtcbiAgLS1vcGFjaXR5OiAwLjk3OyB9XG5cbi5zaG93LTk4IHtcbiAgLS1vcGFjaXR5OiAwLjk4OyB9XG5cbi5zaG93LTk5IHtcbiAgLS1vcGFjaXR5OiAwLjk5OyB9XG5cbi5zaG93LTEwMCB7XG4gIC0tb3BhY2l0eTogMTsgfVxuXG5pb24tY29udGVudCAubmF2LWltZyB7XG4gIHdpZHRoOiA1MHB4OyB9XG5cbmlvbi1jb250ZW50ICNteXN3aXBlciB7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4tdG9wKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7IH1cblxuaW9uLWNvbnRlbnQgLmJhbm5lci1za2VsZXRvbi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG5pb24tY29udGVudCBpb24tc2xpZGUge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTsgfVxuXG5pb24tY29udGVudCBpb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpOyB9XG5cbmlvbi1jb250ZW50IC5zd2lwZXItcGFnaW5hdGlvbjIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogIzMzMzsgfVxuICBpb24tY29udGVudCAuc3dpcGVyLXBhZ2luYXRpb24yIHNwYW4ge1xuICAgIG1hcmdpbjogMCA1cHggIWltcG9ydGFudDsgfVxuXG5pb24tY29udGVudCAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAtLWJvdHRvbTogMjVweDsgfVxuXG5pb24tY29udGVudCAubXlzbGlkZXMtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIGlvbi1jb250ZW50IC5teXNsaWRlcy1ib3ggLmZvb3RlciB7XG4gICAgbGVmdDogLTEwJTtcbiAgICB3aWR0aDogMTIwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBib3R0b206IC01cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIGlvbi1jb250ZW50IC5teXNsaWRlcy1ib3ggLmZvb3RlciAuZm9vdGVyLWJveCB7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgfVxuXG5pb24tY29udGVudCAuaW5kZXhuYXYgLmZvdXItbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogN3B4IDBweCAwIDVweDsgfVxuICBpb24tY29udGVudCAuaW5kZXhuYXYgLmZvdXItbmF2IC5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTsgfVxuICAgIGlvbi1jb250ZW50IC5pbmRleG5hdiAuZm91ci1uYXYgLmZvb3RlciBpbWcge1xuICAgICAgd2lkdGg6IDIwcHg7IH1cblxuaW9uLWNvbnRlbnQgLnhzcWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gIGlvbi1jb250ZW50IC54c3FncyBpbWcge1xuICAgIGZsb2F0OiBsZWZ0OyB9XG4gIGlvbi1jb250ZW50IC54c3FncyAubGVmdCwgaW9uLWNvbnRlbnQgLnhzcWdzIC5yaWdodCB7XG4gICAgZmxleDogMTsgfVxuICBpb24tY29udGVudCAueHNxZ3MgLmxlZnQge1xuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XG4gICAgaW9uLWNvbnRlbnQgLnhzcWdzIC5sZWZ0IGltZyB7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICBpb24tY29udGVudCAueHNxZ3MgLnJpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIGlvbi1jb250ZW50IC54c3FncyAucmlnaHQgLnhzcWctYm94IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIGlvbi1jb250ZW50IC54c3FncyAucmlnaHQgLnhzcWctYm94IGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICBpb24tY29udGVudCAueHNxZ3MgLnJpZ2h0IC54c3FnLWJveDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OyB9XG4gICAgICBpb24tY29udGVudCAueHNxZ3MgLnJpZ2h0IC54c3FnLWJveDpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7IH1cblxuaW9uLWNvbnRlbnQgLnhzcWcgaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDIwNHB4OyB9XG5cbmlvbi1jb250ZW50IC54c3FnIC54c3FnLXJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjsgfVxuICBpb24tY29udGVudCAueHNxZyAueHNxZy1yaWdodCBpb24tc2tlbGV0b24tdGV4dCB7XG4gICAgaGVpZ2h0OiAxMDBweDsgfVxuICBpb24tY29udGVudCAueHNxZyAueHNxZy1yaWdodCAubmFtZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzMlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgaW9uLWNvbnRlbnQgLnhzcWcgLnhzcWctcmlnaHQgYXBwLXByaWNlYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMnB4O1xuICAgIGxlZnQ6IDE1cHg7IH1cblxuaW9uLWNvbnRlbnQgLmp4LW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICBpb24tY29udGVudCAuangtbmF2IGRpdiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gICAgcGFkZGluZzogM3B4IDdweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y0Zjg7XG4gICAgY29sb3I6ICM2NjY2NjY7IH1cbiAgICBpb24tY29udGVudCAuangtbmF2IGRpdi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG5pb24tY29udGVudCAubXktY29udGVudCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cblxuaW9uLWNvbnRlbnQgLmx4bGcgaW9uLXNsaWRlIHtcbiAgY29sb3I6ICNmZmY7IH1cbiAgaW9uLWNvbnRlbnQgLmx4bGcgaW9uLXNsaWRlIC5uYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmc6IDVweCA2cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpOyB9XG4gIGlvbi1jb250ZW50IC5seGxnIGlvbi1zbGlkZSBwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7IH1cblxuaW9uLWNvbnRlbnQgLnJtenQyYm94IHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7IH1cblxuaW9uLWNvbnRlbnQgLndudGogLnRpdGxlLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIGlvbi1jb250ZW50IC53bnRqIC50aXRsZS1pbWcgaW1nIHtcbiAgICB3aWR0aDogNzVweDsgfVxuXG5pb24tY29udGVudCAud250aiAueWpmeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIG1hcmdpbi10b3A6IDE1cHg7IH1cblxuaW9uLWNvbnRlbnQgLndudGogcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7IH1cblxuLm5vbmUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5uYXYtc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDcwcHg7IH1cblxuLnRvcC1yYWRpb3Mge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIG1hcmdpbi10b3A6IC0xNXB4OyB9XG5cbi54c3Fncy1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogNXB4OyB9XG4gIC54c3Fncy1ncmlkIGlvbi1jb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAueHNxZ3MtZ3JpZCBpb24tY29sIGltZyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZjJmMmYyOyB9XG5cbi54c3Fncy1ncmlkLWxpc3Qge1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgLnhzcWdzLWdyaWQtbGlzdCAuYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLnhzcWdzLWdyaWQtbGlzdCAuYm94IC5pdGVtIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmMmYyZjI7IH1cbiAgLnhzcWdzLWdyaWQtbGlzdCAudHdvIC5pdGVtOmZpcnN0LW9mLXR5cGUge1xuICAgIGZsZXg6IDIgIWltcG9ydGFudDsgfVxuICAueHNxZ3MtZ3JpZC1saXN0IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7IH1cblxuLnJtenRib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnJtenRib3ggLmJqYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMxZmIxY2UsICMxYWM0YTYpO1xuICAgIC8qIFNhZmFyaSA1LjEgLSA2LjAgKi9cbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoIzFmYjFjZSwgIzFhYzRhNik7XG4gICAgLyogT3BlcmEgMTEuMSAtIDEyLjAgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjMWZiMWNlLCAjMWFjNGE2KTtcbiAgICAvKiBGaXJlZm94IDMuNiAtIDE1ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxZmIxY2UsICMxYWM0YTYpO1xuICAgIC8qIOagh+WHhueahOivreazlSAqL1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzhweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzhweDsgfVxuICAgIC5ybXp0Ym94IC5iamJveCAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICAgICAgZm9udC1mYW1pbHk6IFwiUGluZ0ZhbmcgU0NcIjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7IH1cbiAgICAucm16dGJveCAuYmpib3ggaW9uLXRleHQge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gICAgICBmb250LWZhbWlseTogXCJQaW5nRmFuZyBTQ1wiO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjsgfVxuICAucm16dGJveCAubGlzdC1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4OyB9XG5cbi5pbmRleC1uYXYtb3Age1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgbWFyZ2luOiAxMHB4IDAgMTVweDsgfVxuIiwiXHJcbi5zZWFyY2gtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgLmxlZnQge1xyXG4gICAgbWluLXdpZHRoOiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgbWF4LXdpZHRoOiA3NXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxuICAvLy0tb3BhY2l0eTogMDtcclxufVxyXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoIDEwMCB7XHJcbiAgLnNob3ctI3skaX0geyAgIC0tb3BhY2l0eTogI3skaSAvIDEwMH07IH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLm5hdi1pbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gICNteXN3aXBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7XHJcbiAgfVxyXG4gIC5iYW5uZXItc2tlbGV0b24tdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIH1cclxuICAuc3dpcGVyLXBhZ2luYXRpb24yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luOiAwIDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgIC0tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICAubXlzbGlkZXMtYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgICB3aWR0aDogMTIwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuZm9vdGVyLWJveCB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbmRleG5hdiB7XHJcbiAgICAuZm91ci1uYXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiA3cHggMHB4IDAgNXB4O1xyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAueHNxZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgaW1nIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAubGVmdCwgLnJpZ2h0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgLnhzcWctYm94IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC54c3FnIHtcclxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgaGVpZ2h0OiAyMDRweDtcclxuICAgIH1cclxuICAgIC54c3FnLXJpZ2h0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDMzJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgICAgIGFwcC1wcmljZWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTJweDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5qeC1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGl2IHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA3cHg7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y0Zjg7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyAmOjphZnRlciB7XHJcbiAgICAgICAgLy8gICBjb250ZW50OiAnJztcclxuICAgICAgICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vICAgd2lkdGg6IDA7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgICAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgLy8gICBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgYm90dG9tOiAtMTFweDtcclxuICAgICAgICAvLyAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAvLyAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubXktY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAubHhsZyB7XHJcbiAgICBpb24tc2xpZGUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDZweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbiAgICAgIH1cclxuICAgICAgcCAgIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJtenQyYm94IHtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAud250aiB7XHJcbiAgICAudGl0bGUtaW1nIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC55amZ4IHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1za2VsZXRvbiB7XHJcbiAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxufVxyXG4udG9wLXJhZGlvcyB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogOTtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4ueHNxZ3MtZ3JpZCB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogNXB4O1xyXG4gIGlvbi1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgaW1nIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2YyZjJmMjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn1cclxuLnhzcWdzLWdyaWQtbGlzdCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2YyZjJmMjtcclxuICAgIH1cclxuICB9XHJcbiAgLnR3byB7XHJcbiAgICAuaXRlbTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgZmxleDogMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5ybXp0Ym94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmJqYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDMxLDE3NywyMDYpLCByZ2IoMjYsMTk2LDE2NikpOyAvKiBTYWZhcmkgNS4xIC0gNi4wICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQocmdiKDMxLDE3NywyMDYpLCByZ2IoMjYsMTk2LDE2NikpOyAvKiBPcGVyYSAxMS4xIC0gMTIuMCAqL1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQocmdiKDMxLDE3NywyMDYpLCByZ2IoMjYsMTk2LDE2NikpOyAvKiBGaXJlZm94IDMuNiAtIDE1ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDMxLDE3NywyMDYpLCByZ2IoMjYsMTk2LDE2NikpOyAvKiDmoIflh4bnmoTor63ms5UgKi9cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzhweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUGluZ0ZhbmcgU0NcIjtcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBpbmdGYW5nIFNDXCI7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5saXN0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5pbmRleC1uYXYtb3Age1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gIG1hcmdpbjogMTBweCAwIDE1cHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _services_news_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/news-list.service */ "./src/app/services/news-list.service.ts");
/* harmony import */ var _jiguang_ionic_jpush_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @jiguang-ionic/jpush/ngx */ "./node_modules/@jiguang-ionic/jpush/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-15 22:18:06
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-04 18:00:56
 * @Description: file content
 */



// import { SearchPage } from '../search/search.page';





// import { ShopNavService } from '../services/shop-nav.service';
// import { GetshopService } from '../services/getshop.service';







// declare var mycheckAppUpdate;
var Tab1Page = /** @class */ (function () {
    function Tab1Page(modalController, http, shop, topage, user, route, appUpdate, native, alertController, ws, newslist, jPush, nav, statusBar) {
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
        this.newslist = newslist;
        this.jPush = jPush;
        this.nav = nav;
        this.statusBar = statusBar;
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
        if (this.native.isandroid()) {
            this.statusBar.overlaysWebView(true);
        }
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!this.shopdata) {
            this.moreGoods = this.shop.getMoregoods();
            this.getShopcontent();
        }
        if (this.newslist.getList().length === 0) {
            this.getNewslist().then(function (res) {
                if (res < _this.newslist.newsPageobj.limit) {
                    _this.newslist.setNewsall();
                }
                _this.wsfn();
            }).catch(function (err) {
                _this.wsfn();
            });
        }
    };
    Tab1Page.prototype.getJpushid = function () {
        var _this = this;
        this.jPush.getRegistrationID().then(function (res) {
            if (!res) {
                setTimeout(function () {
                    _this.getJpushid();
                }, 1000);
            }
            else {
                _this.zcJpush();
            }
        }).catch(function (err2) {
            console.error(JSON.stringify(err2));
        });
    };
    Tab1Page.prototype.zcJpush = function () {
        var _this = this;
        this.user.getUser().then(function (res) {
            var uid = res['user_id'];
            _this.jPush.setAlias({ sequence: 1, alias: uid.toString() }).then(function (res) {
                console.log(res);
            }).catch(function (err2) {
            });
            _this.jPush.getUserNotificationSettings().then(function (res) {
                if (res == 0) {
                    _this.openQx();
                }
            }).catch(function (err2) {
                _this.native.presentAlert('打开通知获取更多优惠！!');
            });
        }).catch(function (err) { });
    };
    /**
     * @Author: wjy-mac
     * @description: 是否打开推送设置
     * @Date: 2019-11-16 23:29:23
     * @param {type}
     * @return:
     */
    Tab1Page.prototype.openQx = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示!',
                            message: '打开通知获取更多优惠！!!!',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: '去设置',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.native.openNativeSettingfn(1);
                                    }
                                }
                            ]
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
    /**
     * @Author: wjy-mac
     * @description: 获取聊天消息列表
     * @Date: 2019-11-14 23:44:54
     * @param {type}
     * @return:
     */
    Tab1Page.prototype.getNewslist = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var obj = _this.newslist.getNewspage();
            _this.http.getData(_this.http.getMynewslist, obj).subscribe(function (res) {
                if (obj.page === 0) {
                    _this.newslist.setNewsnum(Number(res.num));
                }
                _this.newslist.setNewslist(res.data);
                resolve(res.data.length);
            }, function (err) {
                reject();
            });
        });
    };
    Tab1Page.prototype.wsfn = function () {
        this.ws.createObservableSocket();
    };
    Tab1Page.prototype.getShopcontent = function () {
        var _this = this;
        this.shop.getShop().then(function (res) {
            if (!_this.shopdata) {
                _this.shopdata = res;
                _this.getJpushid();
                _this.location = _this.user.getLocation();
                _this.jPush.setApplicationIconBadgeNumber(0);
            }
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
            if (_this.bzjx && _this.bzjx['sort_goods_arr'].length > 0) {
                _this.bztjlist = _this.bzjx['sort_goods_arr'][0]['goods'];
                console.log(_this.bztjlist);
            }
            _this.rmzt1 = _this.shop.getRmzt();
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
            _services_websocket_service__WEBPACK_IMPORTED_MODULE_11__["WebsocketService"], _services_news_list_service__WEBPACK_IMPORTED_MODULE_12__["NewsListService"], _jiguang_ionic_jpush_ngx__WEBPACK_IMPORTED_MODULE_13__["JPush"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"]])
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