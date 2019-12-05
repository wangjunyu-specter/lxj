(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-collelist-collelist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/collelist/collelist.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/collelist/collelist.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>我的收藏</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content padding>\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"goods\" checked>\n      <ion-label>商品</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"shops\">\n      <ion-label>店铺</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"type === 'goods'\">\n    <app-productlist *ngFor=\"let item of goodslist\" [data]=\"item\" (open)=\"openpage($event)\"></app-productlist>\n  </div>\n  <div *ngIf=\"type === 'shops'\" style=\"margin-top: 15px\">\n    <ion-list>\n      <ion-item-sliding *ngFor=\"let item of shoplist\" (click)=\"openpage(item)\">\n\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"http.zdomain + item.shop_logo\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>{{item.shop_name}}</ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"unread(item.id)\">取消关注</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"正在加载...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/collelist/collelist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/collelist/collelist.module.ts ***!
  \*****************************************************/
/*! exports provided: CollelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollelistPageModule", function() { return CollelistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _collelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collelist.page */ "./src/app/pages/collelist/collelist.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _collelist_page__WEBPACK_IMPORTED_MODULE_6__["CollelistPage"]
    }
];
var CollelistPageModule = /** @class */ (function () {
    function CollelistPageModule() {
    }
    CollelistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_collelist_page__WEBPACK_IMPORTED_MODULE_6__["CollelistPage"]]
        })
    ], CollelistPageModule);
    return CollelistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/collelist/collelist.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/collelist/collelist.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGxlbGlzdC9jb2xsZWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/collelist/collelist.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/collelist/collelist.page.ts ***!
  \***************************************************/
/*! exports provided: CollelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollelistPage", function() { return CollelistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_collelist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/collelist.service */ "./src/app/services/collelist.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");






// import {Router} from "@angular/router";
var CollelistPage = /** @class */ (function () {
    function CollelistPage(nav, collefn, http, topage) {
        this.nav = nav;
        this.collefn = collefn;
        this.http = http;
        this.topage = topage;
    }
    CollelistPage.prototype.ngOnInit = function () {
        this.type = 'goods';
    };
    CollelistPage.prototype.ionViewDidEnter = function () {
        this.goodslist = this.collefn.getgoodslist();
        this.shoplist = this.collefn.getshoplist();
    };
    CollelistPage.prototype.goBack = function () {
        this.nav.back();
    };
    CollelistPage.prototype.segmentChanged = function (val) {
        console.log(val.detail.value);
        this.type = val.detail.value;
    };
    CollelistPage.prototype.openpage = function ($event) {
        // this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id}});
        var type = 1;
        var id;
        if (this.type === 'goods') {
            type = 2;
            id = $event.goods_id;
        }
        else {
            type = 7;
            id = $event.supplierid;
        }
        this.topage.toPage(type, id);
    };
    CollelistPage.prototype.loadData = function (event) {
        var type = 1;
        if (this.type === 'goods') {
            type = 1;
        }
        else {
            type = 2;
        }
        this.collefn.addPage(type);
        if (type === 1) {
            this.collefn.getListhttp(1).then(function (res) {
                event.target.complete();
            }).catch(function (err) {
                event.target.complete();
                // event.target.disabled = true;
            });
        }
        else {
            this.collefn.getList2http(1).then(function (res) {
                event.target.complete();
            }).catch(function (err) {
                event.target.complete();
                // event.target.disabled = true;
            });
        }
    };
    CollelistPage.prototype.unread = function (id) {
        var type = 1;
        if (this.type === 'goods') {
            type = 1;
        }
        else {
            type = 2;
        }
        this.collefn.deleteitem(id, type);
    };
    CollelistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_collelist_service__WEBPACK_IMPORTED_MODULE_3__["CollelistService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_5__["TopageService"] }
    ]; };
    CollelistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collelist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collelist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/collelist/collelist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collelist.page.scss */ "./src/app/pages/collelist/collelist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_collelist_service__WEBPACK_IMPORTED_MODULE_3__["CollelistService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_5__["TopageService"]])
    ], CollelistPage);
    return CollelistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-collelist-collelist-module.js.map