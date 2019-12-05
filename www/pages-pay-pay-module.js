(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pay-pay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-07-07 02:05:04\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-12-04 14:41:17\r\n * @Description: 支付页面\r\n -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <!--<ion-back-button></ion-back-button>-->\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>收银台</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"pay-box\">\r\n    <div class=\"title\">支付剩余时间</div>\r\n    <div class=\"time\">\r\n      <div class=\"box\">0</div>\r\n      <div class=\"box\">0</div>:\r\n      <div class=\"box\">4</div>\r\n      <div class=\"box\">7</div>:\r\n      <div class=\"box\">3</div>\r\n      <div class=\"box\">2</div>\r\n    </div>\r\n    <div class=\"des\">支付成功后客服会与您取得联系</div>\r\n  </div>\r\n  <div class=\"order\" padding>\r\n    <div>\r\n      <div class=\"box\">订单号：</div>\r\n      <div class=\"box\">{{ordersn}}</div>\r\n    </div>\r\n    <div>\r\n      <div class=\"box\">应付金额:</div>\r\n      <div class=\"box\"><ion-text color=\"danger\">¥ {{price}}</ion-text></div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"yepay\" class=\"line\"></div>\r\n  <!-- <ion-list *ngIf=\"yepay\" inset=\"true\" line=\"none\"> -->\r\n  <ion-list *ngIf=\"yepay\" inset=\"true\" line=\"none\" style=\"display: none;\">\r\n    <ion-item>\r\n      <ion-label>使用余额</ion-label>\r\n      <ion-toggle [(ngModel)]=\"kysyye\" (ionChange)=\"setyenum()\" color=\"success\" [disabled]=\"isyepayend\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"kysyye\">\r\n      <ion-label>输入金额</ion-label>\r\n      <ion-input type=\"number\" mode=\"ios\" (ionChange)=\"setyechange()\" [disabled]=\"isyepayend\" [max]=\"yoursurplus\" min=\"0\" [(ngModel)]=\"syye\" color=\"success\"></ion-input>\r\n      <ion-note>元</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <small>您当前的可用余额为{{yoursurplus}}</small>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"line\"></div>\r\n  <div class=\"zftype\">\r\n    <ion-list>\r\n      <ion-radio-group [(ngModel)]=\"dataObj.payType\" (ionChange)=\"toggle()\">\r\n        <ion-list-header>\r\n          支付方式\r\n        </ion-list-header>\r\n        <ion-item *ngFor=\"let item of payList\">\r\n          <ion-label><img [src]=\"item.pay_code == 'alipay' ? './assets/zfb.svg' : './assets/wechartpay.svg'\" alt=\"\">{{item.pay_name}}</ion-label>\r\n          <ion-radio color=\"success\" value=\"{{item.pay_code}}\" mode=\"md\" checked></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <app-footer [type]=\"2\" [allprice]=\"price\" (sub)=\"submit($event)\"></app-footer>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/pay/pay.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/pay/pay.module.ts ***!
  \*****************************************/
/*! exports provided: PayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageModule", function() { return PayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay.page */ "./src/app/pages/pay/pay.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _pay_page__WEBPACK_IMPORTED_MODULE_6__["PayPage"]
    }
];
var PayPageModule = /** @class */ (function () {
    function PayPageModule() {
    }
    PayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pay_page__WEBPACK_IMPORTED_MODULE_6__["PayPage"]]
        })
    ], PayPageModule);
    return PayPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pay/pay.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/pay/pay.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pay-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n.pay-box .time {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--ion-title);\n  margin: 10px 0;\n}\n.pay-box .time .box {\n  width: 24px;\n  height: 24px;\n  background-color: #eff0f3;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 3px;\n  margin-left: 3px;\n}\n.pay-box .title, .pay-box .des {\n  font-size: var(--ion-sm-text);\n}\n.pay-box .des {\n  color: var(--ion-color-medium);\n}\n.order > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark);\n  padding: 5px 0;\n}\n.line {\n  height: 15px;\n  background-color: var(--ion-gray-background-color);\n}\n.zftype ion-label {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.zftype img {\n  width: 25px;\n  margin-right: 10px;\n}\nion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wYXkvcGF5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5L3BheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBR0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBREFFO0VBQ0UsNkJBQUE7QUNFSjtBREFFO0VBQ0UsOEJBQUE7QUNFSjtBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FDQ0o7QURFQTtFQUNFLFlBQUE7RUFDQSxrREFBQTtBQ0NGO0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5L3BheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5LWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICAudGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgLmJveCB7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCAyNDAsIDI0MywgMSk7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aXRsZSwgLmRlcyB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICB9XHJcbiAgLmRlcyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcbi5vcmRlciB7XHJcbiAgJj5kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIH1cclxufVxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG59XHJcbi56ZnR5cGUge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxufVxyXG4iLCIucGF5LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBheS1ib3ggLnRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5wYXktYm94IC50aW1lIC5ib3gge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYzO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLnBheS1ib3ggLnRpdGxlLCAucGF5LWJveCAuZGVzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59XG4ucGF5LWJveCAuZGVzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4ub3JkZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnpmdHlwZSBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uemZ0eXBlIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/pay/pay.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pay/pay.page.ts ***!
  \***************************************/
/*! exports provided: PayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPage", function() { return PayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_payment_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/payment-list.service */ "./src/app/services/payment-list.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_payorder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/payorder.service */ "./src/app/services/payorder.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_paybox_paybox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/paybox/paybox.component */ "./src/app/components/paybox/paybox.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/ordersuccess.service */ "./src/app/services/ordersuccess.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 11:21:29
 * @Description: file content
 */










var PayPage = /** @class */ (function () {
    function PayPage(nav, http, paymentlist, native, payorder, userfn, popoverController, route, alertController, orderdatafn) {
        this.nav = nav;
        this.http = http;
        this.paymentlist = paymentlist;
        this.native = native;
        this.payorder = payorder;
        this.userfn = userfn;
        this.popoverController = popoverController;
        this.route = route;
        this.alertController = alertController;
        this.orderdatafn = orderdatafn;
    }
    PayPage.prototype.ngOnInit = function () {
        this.isyepayend = false;
        this.yoursurplus = 3000;
        this.price = 300;
        this.dataObj = {
            payType: '1'
        };
        this.orderData = this.payorder.getOrder();
        console.log(this.orderData);
        if (!this.orderData) {
            this.backfn();
        }
        else {
            var order = this.orderData.order;
            this.price = order.order_amount;
            this.ordersn = order.order_sn;
            this.orderId = order.order_id;
            this.addtime = order.add_time;
        }
        // this.http.getData(this.http.getpaymentlist).subscribe(res => {
        //   console.log(res);
        // });
    };
    PayPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.paymentlist.getHlist().then(function (res) {
            _this.payList = res;
            _this.dataObj.payType = _this.payList[0].pay_code;
            _this.yepay = _this.paymentlist.getyepay();
        });
        this.userfn.getUserp().then(function (res) {
            _this.yoursurplus = res.user_money;
        }).catch(function (err2) { });
    };
    PayPage.prototype.toggle = function () {
        console.log(this.dataObj.payType);
    };
    PayPage.prototype.setyenum = function () {
        if (!this.syye) {
            var ye = Number(this.yoursurplus);
            var price = Number(this.price);
            this.syye = ye > price ? price : ye;
        }
    };
    PayPage.prototype.submit = function ($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var surplus, pwd, kypay, err2_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        surplus = this.kysyye ? this.syye : 0;
                        if (true) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.syyepay()];
                    case 1:
                        pwd = _a.sent();
                        console.log(pwd);
                        if (!!pwd) return [3 /*break*/, 2];
                        return [2 /*return*/, false];
                    case 2:
                        kypay = false;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.checksurplus(pwd)];
                    case 4:
                        kypay = (_a.sent());
                        return [3 /*break*/, 6];
                    case 5:
                        err2_1 = _a.sent();
                        kypay = false;
                        return [3 /*break*/, 6];
                    case 6:
                        if (!kypay) {
                            return [2 /*return*/, false];
                        }
                        this.isyepayend = true;
                        console.log(this.syye);
                        if (surplus == this.price) {
                            this.isyepayend = false;
                            this.gotosucess();
                            return [2 /*return*/, false];
                        }
                        _a.label = 7;
                    case 7:
                        this.payfn();
                        return [2 /*return*/];
                }
            });
        });
    };
    PayPage.prototype.payfn = function () {
        var _this = this;
        var pay_code = this.dataObj.payType;
        var order_sn = this.ordersn;
        var order_id = this.orderId;
        console.log(order_sn);
        this.http.postformdataloading(this.http.acteditpayment, { order_id: order_id, pay_code: pay_code, is_pay: 1 }).subscribe(function (res) {
            var gopay = true;
            var ispay = function () {
                setTimeout(function () {
                    if (gopay) {
                        _this.http.postformdataloading(_this.http.acteditpayment2, { order_id: order_id }).subscribe(function (res) {
                            _this.gotosucess();
                        }, function (err) {
                            _this.native.presentToast('支付失败!');
                        });
                    }
                    document.removeEventListener("resume", ispay, false);
                }, 1500);
            };
            document.addEventListener("resume", ispay, false);
            if (pay_code == 'alipay') {
                _this.native.alipayment(res.result).then(function (res) {
                    _this.getHttpayend(order_id, order_sn);
                }).catch(function (err) {
                    _this.native.presentToast('支付失败!');
                }).finally(function () {
                    gopay = false;
                });
            }
            else {
                _this.native.wechatpayment(res.result).then(function (res) {
                    _this.getHttpayend(order_id, order_sn);
                }).catch(function (err) {
                    _this.native.presentToast('支付失败!');
                }).finally(function () {
                    gopay = false;
                });
            }
            // this.gotosucess();
        }, function (error2) {
        });
    };
    PayPage.prototype.getHttpayend = function (order_id, order_sn) {
        this.gotosucess();
        this.http.postformdataloading(this.http.acteditpayment2, { order_id: order_id }).subscribe(function (res) {
        }, function (err) {
        });
    };
    PayPage.prototype.gotosucess = function (res) {
        var obj = res;
        if (!obj) {
            obj = {
                order: {
                    order_id: this.ordersn
                }
            };
        }
        this.orderdatafn.setData(obj);
        this.route.navigate(['/ordersuccess'], { queryParams: { type: 2 } });
    };
    PayPage.prototype.syyepay = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover, pwd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_paybox_paybox_component__WEBPACK_IMPORTED_MODULE_8__["PayboxComponent"],
                            translucent: false,
                            cssClass: 'payboxcontent',
                            componentProps: {
                                // src: this.http.domain + this.productData.goods_thumb,
                                price: this.syye,
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onDidDismiss().then(function (res) {
                                console.log(res);
                                if (!res.data) {
                                    return false;
                                }
                                return res.data;
                            })];
                    case 3:
                        pwd = _a.sent();
                        return [2 /*return*/, pwd];
                }
            });
        });
    };
    PayPage.prototype.checksurplus = function (pwd) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.postformdataloading(_this.http.editsurplus, { order_id: _this.orderId, surplus: _this.syye, password: pwd }).subscribe(function (res) {
                            console.log('余额支付成功');
                            console.log(res);
                            resolve(true);
                        }, function (error2) {
                            reject(false);
                        });
                    })];
            });
        });
    };
    PayPage.prototype.setyechange = function () {
        if (this.syye < 0) {
            this.native.presentAlert('请输入正确的金额');
            this.syye = 0;
            return false;
        }
        if (this.syye && this.syye.toString().includes('.')) {
            var str = this.syye.toString().split('.');
            if (str[1].length > 2) {
                this.native.presentAlert('最小支持金额为分');
                this.syye = 0;
                console.log(this.syye);
                return false;
            }
        }
        if (this.syye > this.yoursurplus || this.syye > this.price) {
            this.native.presentAlert('请输入正确的金额');
            this.syye = 0;
            return false;
        }
    };
    PayPage.prototype.goBack = function () {
        this.presentAlertConfirm();
    };
    // async presentAlert() {
    //   const alert = await this.alertController.create({
    //     header: '提示',
    //     message: '余额支付已成功，30分钟内未继续支付将原路返还.',
    //     buttons: [ {
    //       text: '确定',
    //       handler: () => {
    //         console.log('Confirm Okay');
    //         this.backfn();
    //       }
    //     }]
    //   });
    //
    //   await alert.present();
    // }
    PayPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '是否取消支付!',
                            message: '请在30分钟内到行程中继续支付，否则将取消订单!',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        // this.backfn();
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.backfn();
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
    PayPage.prototype.backfn = function () {
        this.nav.back();
    };
    PayPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_payment_list_service__WEBPACK_IMPORTED_MODULE_4__["PaymentListService"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"] },
        { type: _services_payorder_service__WEBPACK_IMPORTED_MODULE_6__["PayorderService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_10__["OrdersuccessService"] }
    ]; };
    PayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pay.page.scss */ "./src/app/pages/pay/pay.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_payment_list_service__WEBPACK_IMPORTED_MODULE_4__["PaymentListService"], _services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"],
            _services_payorder_service__WEBPACK_IMPORTED_MODULE_6__["PayorderService"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_10__["OrdersuccessService"]])
    ], PayPage);
    return PayPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pay-pay-module.js.map