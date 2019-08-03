(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ordersuccess-ordersuccess-module"],{

/***/ "./src/app/pages/ordersuccess/ordersuccess.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ordersuccess/ordersuccess.module.ts ***!
  \***********************************************************/
/*! exports provided: OrdersuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersuccessPageModule", function() { return OrdersuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordersuccess_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordersuccess.page */ "./src/app/pages/ordersuccess/ordersuccess.page.ts");







var routes = [
    {
        path: '',
        component: _ordersuccess_page__WEBPACK_IMPORTED_MODULE_6__["OrdersuccessPage"]
    }
];
var OrdersuccessPageModule = /** @class */ (function () {
    function OrdersuccessPageModule() {
    }
    OrdersuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ordersuccess_page__WEBPACK_IMPORTED_MODULE_6__["OrdersuccessPage"]]
        })
    ], OrdersuccessPageModule);
    return OrdersuccessPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ordersuccess/ordersuccess.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/ordersuccess/ordersuccess.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goIndex()\">\n        完成\n      </ion-button>\n    </ion-buttons>\n    <ion-title>支付成功</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"nohw\" *ngIf=\"!ishw\">\n    <div class=\"top\" padding>\n      <h2>订单提交成功!</h2>\n      <p>您的包裹整装待发~~~</p>\n    </div>\n    <div class=\"content\" padding *ngFor=\"let item of data\">\n      <div class=\"title\">\n        <p>您的商品将由{{item.shipping_name}}为您配送</p>\n      </div>\n      <p>订单号：<ion-text>{{item.order_sn}}</ion-text></p>\n      <p>{{item.pay_name}}：<ion-text>{{item.order_amount_formated}}</ion-text></p>\n      <p>配送方式：<ion-text color=\"danger\">{{item.shipping_name}}</ion-text></p>\n      <ion-row>\n        <!--<ion-col>-->\n          <!--<ion-button expand=\"block\" color=\"light\" (click)=\"goIndex()\">返回首页</ion-button>-->\n        <!--</ion-col>-->\n        <ion-col>\n          <ion-button expand=\"block\" color=\"success\"  (click)=\"gotoPage(12, item.order_sn)\">查看订单</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"hw\" *ngIf=\"ishw\">\n    <div>\n      <div class=\"top\" padding>\n        <h2>您的订单已经提交!</h2>\n        <p>请注意出发时间及商家消息~~~</p>\n      </div>\n      <div class=\"content\" padding *ngFor=\"let item of data\">\n        <p>订单号：<ion-text>{{item.order_sn}}</ion-text></p>\n        <p>{{item.pay_name}}：<ion-text>{{item.order_amount_formated}}</ion-text></p>\n      </div>\n      <ion-row>\n        <!--<ion-col>-->\n          <!--<ion-button expand=\"block\" color=\"light\" (click)=\"goIndex()\">返回首页</ion-button>-->\n        <!--</ion-col>-->\n        <ion-col>\n          <ion-button expand=\"block\" color=\"success\" (click)=\"getContent()\" (click)=\"gotoPage(11, item.order_sn)\">查看订单</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div padding>\n      <p>户外旅行有一定的风险性，请随时注意安全，如发生任何情况，请尽快拨打救援电话或直接拨打110求救：</p>\n      <p>救援电话1：123123</p>\n      <p>救援电话1：123123</p>\n      <p>救援电话1：123123</p>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/ordersuccess/ordersuccess.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/ordersuccess/ordersuccess.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  background: url('paysuccess.jpg') left top no-repeat;\n  background-size: 100% 100%;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9vcmRlcnN1Y2Nlc3Mvb3JkZXJzdWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9EQUFvRTtFQUNwRSwwQkFBMEI7RUFDMUIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJzdWNjZXNzL29yZGVyc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcGF5c3VjY2Vzcy5qcGdcIikgbGVmdCB0b3Agbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/ordersuccess/ordersuccess.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ordersuccess/ordersuccess.page.ts ***!
  \*********************************************************/
/*! exports provided: OrdersuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersuccessPage", function() { return OrdersuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ordersuccess.service */ "./src/app/services/ordersuccess.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");






var OrdersuccessPage = /** @class */ (function () {
    function OrdersuccessPage(nav, route, activeroute, order, topage) {
        this.nav = nav;
        this.route = route;
        this.activeroute = activeroute;
        this.order = order;
        this.topage = topage;
    }
    OrdersuccessPage.prototype.ngOnInit = function () {
        this.ishw = true;
        this.res = this.order.getData();
        var params = this.activeroute.snapshot.queryParams;
        if (params && params['type'] == 1) {
            this.ishw = false;
        }
        // this.activeroute.queryParams.subscribe(params => {
        //
        // });
    };
    OrdersuccessPage.prototype.ionViewDidEnter = function () {
        console.log(this.res);
        if (!this.res) {
            this.goIndex();
        }
        this.orderId = this.res['order'].order_id;
        if (this.res && this.res['split_order']) {
            this.data = this.res['split_order']['suborder_list'];
        }
    };
    OrdersuccessPage.prototype.ionViewDidLeave = function () {
        this.order.clearData();
    };
    OrdersuccessPage.prototype.goIndex = function () {
        this.nav.navigateBack('tabs/tab1');
    };
    OrdersuccessPage.prototype.getContent = function () {
        // this.route.navigate(['/spgoods-confirmation'], {queryParams: {catid: res['rec_id']}});
    };
    OrdersuccessPage.prototype.gotoPage = function (type, sn) {
        this.topage.toPage(type, sn);
    };
    OrdersuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ordersuccess',
            template: __webpack_require__(/*! ./ordersuccess.page.html */ "./src/app/pages/ordersuccess/ordersuccess.page.html"),
            styles: [__webpack_require__(/*! ./ordersuccess.page.scss */ "./src/app/pages/ordersuccess/ordersuccess.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_4__["OrdersuccessService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_5__["TopageService"]])
    ], OrdersuccessPage);
    return OrdersuccessPage;
}());

// suborder_list: [,…]
// 0: {order_sn: "2019070255876", pay_name: "余额支付", shipping_name: "申通快递", order_amount_formated: "872.00"}
// order_amount_formated: "872.00"
// order_sn: "2019070255876"
// pay_name: "余额支付"
// shipping_name: "申通快递"


/***/ })

}]);
//# sourceMappingURL=pages-ordersuccess-ordersuccess-module.js.map