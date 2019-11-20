(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-moreyhtc-moreyhtc-module"],{

/***/ "./src/app/pages/moreyhtc/moreyhtc.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/moreyhtc/moreyhtc.module.ts ***!
  \***************************************************/
/*! exports provided: MoreyhtcPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreyhtcPageModule", function() { return MoreyhtcPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _moreyhtc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moreyhtc.page */ "./src/app/pages/moreyhtc/moreyhtc.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _moreyhtc_page__WEBPACK_IMPORTED_MODULE_6__["MoreyhtcPage"]
    }
];
var MoreyhtcPageModule = /** @class */ (function () {
    function MoreyhtcPageModule() {
    }
    MoreyhtcPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_moreyhtc_page__WEBPACK_IMPORTED_MODULE_6__["MoreyhtcPage"]]
        })
    ], MoreyhtcPageModule);
    return MoreyhtcPageModule;
}());



/***/ }),

/***/ "./src/app/pages/moreyhtc/moreyhtc.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/moreyhtc/moreyhtc.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\" slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>优惠套餐</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor=\"let item of list\">\n    <app-pagetitle [myname]=\"item.act_name\" [type]=\"true\" [smpadding]=\"true\"></app-pagetitle>\n    <app-productlist *ngFor=\"let data of item.goods_list\" [data]=\"data\" [isshowattr]=\"true\" [noshowmore]=\"true\" [showyj]=\"true\" (open)=\"openpage($event)\"></app-productlist>\n    <div class=\"price-box\">\n      <div>套餐优惠价：<span>{{item.package_price}}</span> 原价：<span>{{item.subtotal}}</span></div>\n      <div>节省：{{item.saving}}</div>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"success\" expand=\"block\" (click)=\"add(item, 1)\">加入购物车</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"danger\" expand=\"block\" (click)=\"add(item, 2)\">立即购买</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/moreyhtc/moreyhtc.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/moreyhtc/moreyhtc.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".price-box {\n  padding: 15px 0;\n  font-size: var(--ion-text); }\n  .price-box > div:first-of-type span:first-of-type {\n    color: var(--ion-color-danger);\n    font-size: var(--ion-title); }\n  .price-box > div:first-of-type span:last-of-type {\n    color: var(--ion-color-medium);\n    text-decoration: line-through; }\n  .price-box > div:last-of-type {\n    border: 1px solid var(--ion-color-danger);\n    border-radius: 5px;\n    display: inline-block;\n    padding: 3px 7px;\n    margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9tb3JleWh0Yy9tb3JleWh0Yy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7RUFGNUI7SUFPVSw4QkFBOEI7SUFDOUIsMkJBQTJCLEVBQUE7RUFSckM7SUFXVSw4QkFBOEI7SUFDOUIsNkJBQTRCLEVBQUE7RUFadEM7SUFpQk0seUNBQXlDO0lBR3pDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vcmV5aHRjL21vcmV5aHRjLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZS1ib3gge1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAmPmRpdiB7XHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/moreyhtc/moreyhtc.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/moreyhtc/moreyhtc.page.ts ***!
  \*************************************************/
/*! exports provided: MoreyhtcPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreyhtcPage", function() { return MoreyhtcPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_yhtclist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/yhtclist.service */ "./src/app/services/yhtclist.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");








var MoreyhtcPage = /** @class */ (function () {
    function MoreyhtcPage(nav, yhtcfn, http, activeroute, topage, route, native) {
        this.nav = nav;
        this.yhtcfn = yhtcfn;
        this.http = http;
        this.activeroute = activeroute;
        this.topage = topage;
        this.route = route;
        this.native = native;
    }
    MoreyhtcPage.prototype.ngOnInit = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.goodsid = params['id'] || '-1';
    };
    MoreyhtcPage.prototype.ionViewDidEnter = function () {
        this.getList();
    };
    MoreyhtcPage.prototype.getList = function () {
        var _this = this;
        this.yhtcfn.getData(this.goodsid).then(function (res) {
            console.log(res);
            _this.list = res;
        }).catch(function (err) {
        });
    };
    MoreyhtcPage.prototype.goBack = function () {
        this.nav.back();
    };
    MoreyhtcPage.prototype.add = function (item, type) {
        var _this = this;
        var obj = {
            package_id: item.act_id,
            number: 1,
            isls: type - 1
        };
        this.http.postformdata(this.http.addtc, { package_info: JSON.stringify(obj) }).subscribe(function (res) {
            console.log(res);
            if (res.status == 1 && res.rec_id) {
                if (type == 1) {
                    _this.native.presentToast('已加入购物车');
                }
                else if (type == 2) {
                    _this.route.navigate(['/spgoods-confirmation'], { queryParams: { catid: res['rec_id'] } });
                }
            }
        }, function (error2) { });
    };
    MoreyhtcPage.prototype.openpage = function ($event) {
        console.log($event);
        this.topage.toPage(2, $event.goods_id, name);
    };
    MoreyhtcPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-moreyhtc',
            template: __webpack_require__(/*! ./moreyhtc.page.html */ "./src/app/pages/moreyhtc/moreyhtc.page.html"),
            styles: [__webpack_require__(/*! ./moreyhtc.page.scss */ "./src/app/pages/moreyhtc/moreyhtc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_yhtclist_service__WEBPACK_IMPORTED_MODULE_4__["YhtclistService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_6__["TopageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"]])
    ], MoreyhtcPage);
    return MoreyhtcPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-moreyhtc-moreyhtc-module.js.map