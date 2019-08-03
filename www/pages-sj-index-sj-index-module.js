(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sj-index-sj-index-module"],{

/***/ "./src/app/pages/sj-index/sj-index.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sj-index/sj-index.module.ts ***!
  \***************************************************/
/*! exports provided: SjIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjIndexPageModule", function() { return SjIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sj_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sj-index.page */ "./src/app/pages/sj-index/sj-index.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _sj_index_page__WEBPACK_IMPORTED_MODULE_6__["SjIndexPage"]
    }
];
var SjIndexPageModule = /** @class */ (function () {
    function SjIndexPageModule() {
    }
    SjIndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sj_index_page__WEBPACK_IMPORTED_MODULE_6__["SjIndexPage"]]
        })
    ], SjIndexPageModule);
    return SjIndexPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sj-index/sj-index.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/sj-index/sj-index.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--<img src=\"./assets/sjtop.png\" alt=\"\">-->\r\n    <app-sj-top (close)=\"goBack()\" (topage)=\"toPage()\"\r\n                [active]=\"isactive\" [supplier]=\"supplier\"\r\n                (toggle)=\"setNav($event)\" (setGz)=\"setGz()\"></app-sj-top>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"isindex\" *ngIf=\"isactive == 1\">\r\n    <ion-slides pager=\"true\" *ngIf=\"supplier\">\r\n      <ion-slide *ngFor=\"let item of supplier.banner\" (click)=\"open(item.url)\">\r\n        <img class=\"dplogo\" [src]=\"http.zdomain + item.src\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <div class=\"content\" padding *ngIf=\"supplier\">\r\n      <app-pagetitle [myname]=\"'店铺推荐'\" [type]=\"1\"></app-pagetitle>\r\n      <app-productlist  *ngFor=\"let item of supplier.best_goods\" [type]=\"1\" [data]=\"item\" (open)=\"goodsContent($event)\"></app-productlist>\r\n      <ion-virtual-scroll [items]=\"tjlist\">\r\n        <div *virtualItem=\"let item\">\r\n          <app-productlist  *ngFor=\"let item of tjlist\" [data]=\"item\" (open)=\"goodsContent($event)\" [imgtype]=\"1\"></app-productlist>\r\n        </div>\r\n      </ion-virtual-scroll>\r\n    </div>\r\n  </div>\r\n  <div class=\"isindex\" *ngIf=\"isactive == 2\">\r\n    <div class=\"content\" padding>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col [ngClass]=\"{active: isnavactive == 1}\" (click)=\"selectepx(1)\">综合</ion-col>\r\n          <ion-col [ngClass]=\"{active: isnavactive == 2}\" (click)=\"selectepx(2)\">销量</ion-col>\r\n          <ion-col [ngClass]=\"{active: isnavactive == 3}\" (click)=\"selectepx(3)\">价格</ion-col>\r\n          <ion-col [ngClass]=\"{active: isnavactive == 4}\" (click)=\"selectepx(4)\">新品</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <app-productlist *ngFor=\"let item of tjlist\" [data]=\"item\"></app-productlist>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-row>\r\n      <ion-col class=\"border\">\r\n        <ion-button *ngIf=\"supplier\" [routerLink]=\"['/sj-productnav', supplier.suppid]\" expand=\"full\">商品分类</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"full\">\r\n          <ion-icon name=\"happy\" color=\"primary\"></ion-icon>\r\n          联系客服\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/sj-index/sj-index.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/sj-index/sj-index.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: url('sjtop.png');\n  background-size: 100% 100%;\n  position: relative; }\n  ion-header ion-toolbar app-sj-top {\n    position: relative;\n    z-index: 1; }\n  ion-header ion-toolbar img {\n    position: absolute;\n    width: calc(100% + var(--ion-android-padding-top));\n    top: 0;\n    left: 0;\n    z-index: 0;\n    height: 100%; }\n  ion-footer ion-toolbar {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  box-shadow: 0px 0px 5px var(--ion-color-white-shade); }\n  ion-footer ion-toolbar ion-row, ion-footer ion-toolbar ion-col, ion-footer ion-toolbar ion-button {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-start: 0;\n    --padding-end: 0;\n    margin: 0;\n    padding: 0; }\n  ion-footer ion-toolbar ion-col {\n    position: relative; }\n  ion-footer ion-toolbar .border::after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 60%;\n    width: 1px;\n    background-color: var(--ion-color-white-shade);\n    right: 0;\n    top: 50%;\n    margin-top: -6%; }\n  ion-footer ion-toolbar ion-button {\n    --background: var(--ion-color-white);\n    --background-activated: var(--ion-color-white-tint);\n    --background-focused: var(--ion-color-white-tint);\n    --color: var(--ion-color-white-contrast);\n    --box-shadow: var(--ion-color-white-shade); }\n  ion-grid {\n  border-bottom: 1px solid var(--ion-color-light); }\n  ion-grid ion-col {\n    text-align: center;\n    font-size: var(--ion-title);\n    color: var(--ion-color-medium); }\n  ion-grid ion-col.active {\n      font-weight: 600;\n      color: var(--ion-color-dark); }\n  .dplogo {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zai1pbmRleC9zai1pbmRleC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTtFQUp0QjtJQU1NLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUFQaEI7SUFVTSxrQkFBa0I7SUFDbEIsa0RBQWtEO0lBQ2xELE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUlsQjtFQUVJLGdCQUFjO0VBQ2QsbUJBQWlCO0VBQ2pCLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLG9EQUFvRCxFQUFBO0VBTnhEO0lBUU0sZ0JBQWM7SUFDZCxtQkFBaUI7SUFDakIsa0JBQWdCO0lBQ2hCLGdCQUFjO0lBQ2QsU0FBUztJQUNULFVBQVUsRUFBQTtFQWJoQjtJQWdCTSxrQkFBa0IsRUFBQTtFQWhCeEI7SUFxQlEsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsUUFBUTtJQUNSLFFBQVE7SUFDUixlQUFlLEVBQUE7RUE3QnZCO0lBaUNNLG9DQUFhO0lBQ2IsbURBQXVCO0lBQ3ZCLGlEQUFxQjtJQUNyQix3Q0FBUTtJQUNSLDBDQUFhLEVBQUE7RUFJbkI7RUFDRSwrQ0FBK0MsRUFBQTtFQURqRDtJQUdJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsOEJBQThCLEVBQUE7RUFMbEM7TUFPTSxnQkFBZ0I7TUFDaEIsNEJBQTRCLEVBQUE7RUFJbEM7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zai1pbmRleC9zai1pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3NqdG9wLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhcHAtc2otdG9wIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlICsgdmFyKC0taW9uLWFuZHJvaWQtcGFkZGluZy10b3ApKTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWlvbi1jb2xvci13aGl0ZS1zaGFkZSk7XHJcbiAgICBpb24tcm93LCBpb24tY29sLCBpb24tYnV0dG9uIHtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIH1cclxuICAgIC5ib3JkZXIge1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlLXNoYWRlKTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNiU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZS10aW50KTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZS10aW50KTtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlLWNvbnRyYXN0KTtcclxuICAgICAgLS1ib3gtc2hhZG93OiB2YXIoLS1pb24tY29sb3Itd2hpdGUtc2hhZGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tZ3JpZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5kcGxvZ28ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sj-index/sj-index.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sj-index/sj-index.page.ts ***!
  \*************************************************/
/*! exports provided: SjIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjIndexPage", function() { return SjIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/supplierlist.service */ "./src/app/services/supplierlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_sjindextjgoods_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sjindextjgoods.service */ "./src/app/services/sjindextjgoods.service.ts");
/* harmony import */ var _services_collelist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/collelist.service */ "./src/app/services/collelist.service.ts");








var SjIndexPage = /** @class */ (function () {
    function SjIndexPage(nav, suppliserlist, activeroute, http, route, tjlistfn, collefn) {
        this.nav = nav;
        this.suppliserlist = suppliserlist;
        this.activeroute = activeroute;
        this.http = http;
        this.route = route;
        this.tjlistfn = tjlistfn;
        this.collefn = collefn;
    }
    SjIndexPage.prototype.ngOnInit = function () {
        this.tjlist = [];
        this.isactive = 1;
        this.isnavactive = 1;
    };
    SjIndexPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.activeroute.queryParams.subscribe(function (params) {
            var id = params['id'];
            _this.suppliserlist.getData(id).then(function (res) {
                _this.supplier = res;
                // this.tjlist.push(...this.supplier['best_goods'])
            }).catch(function (err) { });
            console.log(_this.supplier);
            _this.getIndextj(id);
        });
    };
    SjIndexPage.prototype.getIndextj = function (id) {
        var _this = this;
        this.tjlistfn.getData(id).then(function (res) {
            var _a, _b, _c, _d;
            console.log(res);
            (_a = _this.tjlist).push.apply(_a, res['best_goods']);
            (_b = _this.tjlist).push.apply(_b, res['hot_goods']);
            (_c = _this.tjlist).push.apply(_c, res['new_goods']);
            (_d = _this.tjlist).push.apply(_d, res['tjgoods']);
        }).catch(function (err) { });
    };
    SjIndexPage.prototype.goBack = function () {
        this.nav.back();
        // this.nav.navigateBack('/productcontent');
    };
    SjIndexPage.prototype.setNav = function ($event) {
        this.isactive = $event;
    };
    SjIndexPage.prototype.selectepx = function (type) {
        this.isnavactive = type;
    };
    SjIndexPage.prototype.toPage = function () {
        this.nav.navigateForward('/sjdpyx');
    };
    SjIndexPage.prototype.setGz = function () {
        var _this = this;
        console.log(this.supplier);
        this.suppliserlist.setData(this.supplier['suppid'], 'is_guanzhu', true);
        this.http.getData(this.http.scshop, { suppId: this.supplier['suppid'] }).subscribe(function (res) {
            _this.collefn.reset();
        }, function (error2) {
            _this.collefn.reset();
        });
    };
    SjIndexPage.prototype.goodsContent = function ($event) {
        console.log($event);
        this.open($event.goods_id || $event.id);
    };
    SjIndexPage.prototype.open = function (id) {
        if (isNaN(Number(id))) {
            return false;
        }
        this.route.navigate(['/productcontent'], { queryParams: { id: id, suppid: this.supplier.suppid } });
    };
    SjIndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sj-index',
            template: __webpack_require__(/*! ./sj-index.page.html */ "./src/app/pages/sj-index/sj-index.page.html"),
            styles: [__webpack_require__(/*! ./sj-index.page.scss */ "./src/app/pages/sj-index/sj-index.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_3__["SupplierlistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_sjindextjgoods_service__WEBPACK_IMPORTED_MODULE_6__["SjindextjgoodsService"], _services_collelist_service__WEBPACK_IMPORTED_MODULE_7__["CollelistService"]])
    ], SjIndexPage);
    return SjIndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sj-index-sj-index-module.js.map