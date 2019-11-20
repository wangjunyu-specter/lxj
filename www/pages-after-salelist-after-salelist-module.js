(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-after-salelist-after-salelist-module"],{

/***/ "./src/app/pages/after-salelist/after-salelist.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/after-salelist/after-salelist.module.ts ***!
  \***************************************************************/
/*! exports provided: AfterSalelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterSalelistPageModule", function() { return AfterSalelistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _after_salelist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./after-salelist.page */ "./src/app/pages/after-salelist/after-salelist.page.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-10-22 19:50:55
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-22 20:18:39
 * @Description: file content
 */







var routes = [
    {
        path: '',
        component: _after_salelist_page__WEBPACK_IMPORTED_MODULE_7__["AfterSalelistPage"]
    }
];
var AfterSalelistPageModule = /** @class */ (function () {
    function AfterSalelistPageModule() {
    }
    AfterSalelistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_after_salelist_page__WEBPACK_IMPORTED_MODULE_7__["AfterSalelistPage"]]
        })
    ], AfterSalelistPageModule);
    return AfterSalelistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/after-salelist/after-salelist.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/after-salelist/after-salelist.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-10-22 11:51:17\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-10-22 20:19:29\n * @Description: 售后列表页\n -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>退换/售后</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-nomore *ngIf=\"nolist\"></app-nomore>\n  <ion-list *ngFor=\"let item of list\">\n    <ion-item>\n      <div class=\"item-content\">\n        <div class=\"head\">\n          <span>订单:{{item.order_sn}}</span>\n          <span>{{item.order_time}}</span>\n        </div>\n        <div class=\"name\" *ngFor=\"let goods of item['goods_list']\">{{goods.goods_name}}</div>\n        <div class=\"footer\"><ion-text color=\"success\"><span>{{item.status_back}}</span></ion-text><ion-text color=\"danger\"><span>{{item.refund_money_1}}</span></ion-text></div>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-button fill=\"outline\" color=\"danger\" *ngIf=\"item.status_back_1 < 6 && item.status_back_1 != 3 && item.status_refund != 1\" (click)=\"cancle(item)\">取消</ion-button>\n      <ion-button fill=\"outline\" color=\"success\" (click)=\"openContent(item.back_id)\">查看详情</ion-button>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/after-salelist/after-salelist.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/after-salelist/after-salelist.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light); }\n\n.item-content {\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch; }\n\n.item-content .head, .item-content .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    font-size: var(--ion-text); }\n\n.item-content .name {\n    margin: 5px 0;\n    font-size: var(--ion-title); }\n\nion-list {\n  margin-bottom: 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9hZnRlci1zYWxlbGlzdC9hZnRlci1zYWxlbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBYSxFQUFBOztBQUVmO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixvQkFBb0IsRUFBQTs7QUFOdEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsMEJBQTBCLEVBQUE7O0FBWjlCO0lBZUksYUFBYTtJQUNiLDJCQUEyQixFQUFBOztBQUcvQjtFQUNFLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWZ0ZXItc2FsZWxpc3QvYWZ0ZXItc2FsZWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4uaXRlbS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgLmhlYWQsIC5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgfVxuICAubmFtZSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gIH1cbn1cbmlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/after-salelist/after-salelist.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/after-salelist/after-salelist.page.ts ***!
  \*************************************************************/
/*! exports provided: AfterSalelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterSalelistPage", function() { return AfterSalelistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


/*
 * @Author: wjy-mac
 * @Date: 2019-10-22 11:51:17
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-22 20:17:56
 * @Description: file content
 */




var AfterSalelistPage = /** @class */ (function () {
    function AfterSalelistPage(nav, http, native, route) {
        this.nav = nav;
        this.http = http;
        this.native = native;
        this.route = route;
    }
    AfterSalelistPage.prototype.ngOnInit = function () {
        this.list = [];
    };
    AfterSalelistPage.prototype.ionViewWillEnter = function () {
        this.nolist = false;
        this.page = {
            page: 0,
            size: 10
        };
        this.getList();
    };
    AfterSalelistPage.prototype.goBack = function () {
        this.list = [];
        this.nav.back();
    };
    AfterSalelistPage.prototype.getList = function (event) {
        var _this = this;
        this.http.getDataloading(this.http.zdomain + this.http.backList, this.page).subscribe(function (res) {
            var _a;
            console.log(res);
            if (event) {
                event.target.complete();
            }
            if (res['data'].length > 0) {
                (_a = _this.list).push.apply(_a, res['data']);
            }
            else {
                event.target.disabled = true;
                _this.native.presentToast('没有了！');
                if (_this.page['page'] == 0) {
                    _this.nolist = true;
                }
            }
        }, function (error2) {
            if (event) {
                event.target.complete();
            }
        });
    };
    AfterSalelistPage.prototype.cancle = function (item) {
        var _this = this;
        this.http.getDataloading(this.http.zdomain + this.http.delbackorder, { id: item.back_id }).subscribe(function (res) {
            item.status_back_1 = 8;
            item.status_back = '用户已取消';
            _this.native.presentToast((res['msg']));
        }, function (err3) {
        });
    };
    AfterSalelistPage.prototype.openContent = function (id) {
        this.route.navigate(['/after-sale'], { queryParams: { id: id } });
    };
    AfterSalelistPage.prototype.loadData = function (event) {
        this.page['page']++;
        this.getList(event);
    };
    AfterSalelistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-after-salelist',
            template: __webpack_require__(/*! ./after-salelist.page.html */ "./src/app/pages/after-salelist/after-salelist.page.html"),
            styles: [__webpack_require__(/*! ./after-salelist.page.scss */ "./src/app/pages/after-salelist/after-salelist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_native_service__WEBPACK_IMPORTED_MODULE_1__["NativeService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AfterSalelistPage);
    return AfterSalelistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-after-salelist-after-salelist-module.js.map