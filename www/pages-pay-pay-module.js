(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pay-pay-module"],{

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

/***/ "./src/app/pages/pay/pay.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/pay/pay.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-07-07 02:05:04\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-28 22:44:16\r\n * @Description: 支付页面\r\n -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <!--<ion-back-button></ion-back-button>-->\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>收银台</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"pay-box\">\r\n    <div class=\"title\">支付剩余时间</div>\r\n    <div class=\"time\">\r\n      <div class=\"box\">0</div>\r\n      <div class=\"box\">0</div>:\r\n      <div class=\"box\">4</div>\r\n      <div class=\"box\">7</div>:\r\n      <div class=\"box\">3</div>\r\n      <div class=\"box\">2</div>\r\n    </div>\r\n    <div class=\"des\">支付成功后客服会与您取得联系</div>\r\n  </div>\r\n  <div class=\"order\" padding>\r\n    <div>\r\n      <div class=\"box\">订单号：</div>\r\n      <div class=\"box\">{{ordersn}}</div>\r\n    </div>\r\n    <div>\r\n      <div class=\"box\">应付金额:</div>\r\n      <div class=\"box\"><ion-text color=\"danger\">¥ {{price}}</ion-text></div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"yepay\" class=\"line\"></div>\r\n  <ion-list *ngIf=\"yepay\" inset=\"true\" line=\"none\" style=\"display: none;\">\r\n    <ion-item>\r\n      <ion-label>使用余额</ion-label>\r\n      <ion-toggle [(ngModel)]=\"kysyye\" (ionChange)=\"setyenum()\" color=\"success\" [disabled]=\"isyepayend\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"kysyye\">\r\n      <ion-label>输入金额</ion-label>\r\n      <ion-input type=\"number\" mode=\"ios\" (ionChange)=\"setyechange()\" [disabled]=\"isyepayend\" [max]=\"yoursurplus\" min=\"0\" [(ngModel)]=\"syye\" color=\"success\"></ion-input>\r\n      <ion-note>元</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <small>您当前的可用余额为{{yoursurplus}}</small>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"line\"></div>\r\n  <div class=\"zftype\">\r\n    <ion-list>\r\n      <ion-radio-group [(ngModel)]=\"dataObj.payType\" (ionChange)=\"toggle()\">\r\n        <ion-list-header>\r\n          支付方式\r\n        </ion-list-header>\r\n        <ion-item *ngFor=\"let item of payList\">\r\n          <ion-label><img [src]=\"item.pay_code == 'alipay' ? './assets/zfb.svg' : './assets/wechartpay.svg'\" alt=\"\">{{item.pay_name}}</ion-label>\r\n          <ion-radio color=\"success\" value=\"{{item.pay_code}}\" mode=\"md\" checked></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <app-footer [type]=\"2\" [allprice]=\"price\" (sub)=\"submit($event)\"></app-footer>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/pay/pay.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/pay/pay.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pay-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px; }\n  .pay-box .time {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--ion-title);\n    margin: 10px 0; }\n  .pay-box .time .box {\n      width: 24px;\n      height: 24px;\n      background-color: #eff0f3;\n      border-radius: 5px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-right: 3px;\n      margin-left: 3px; }\n  .pay-box .title, .pay-box .des {\n    font-size: var(--ion-sm-text); }\n  .pay-box .des {\n    color: var(--ion-color-medium); }\n  .order > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark);\n  padding: 5px 0; }\n  .line {\n  height: 15px;\n  background-color: var(--ion-gray-background-color); }\n  .zftype ion-label {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .zftype img {\n  width: 25px;\n  margin-right: 10px; }\n  ion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wYXkvcGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTtFQUxsQjtJQU9JLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsY0FBYyxFQUFBO0VBWmxCO01BY00sV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBd0M7TUFHeEMsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBQTtFQXhCdEI7SUE0QkksNkJBQTZCLEVBQUE7RUE1QmpDO0lBK0JJLDhCQUE4QixFQUFBO0VBR2xDO0VBRUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsY0FBYyxFQUFBO0VBR2xCO0VBQ0UsWUFBWTtFQUNaLGtEQUFrRCxFQUFBO0VBRXBEO0VBRUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7RUFMdkI7RUFRSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFHdEI7RUFDRSxtQkFBaUI7RUFDakIsZ0JBQWM7RUFDZCxrQkFBZ0I7RUFDaEIsZ0JBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheS9wYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheS1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLnRpbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIC5ib3gge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjQwLCAyNDMsIDEpO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGUsIC5kZXMge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgfVxyXG4gIC5kZXMge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIH1cclxufVxyXG4ub3JkZXIge1xyXG4gICY+ZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbn1cclxuLmxpbmUge1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG4uemZ0eXBlIHtcclxuICBpb24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbn1cclxuIl19 */"

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
 * @LastEditTime: 2019-11-30 14:42:14
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
        this.http.postformdataloading(this.http.acteditpayment, { order_id: this.orderId, pay_code: this.dataObj.payType, is_pay: 1 }).subscribe(function (res) {
            console.log('余额支付成功');
            console.log(res);
            _this.native.wechatpayment(res.result).then(function (res) {
            }).catch(function (err) {
            });
            // this.gotosucess();
        }, function (error2) {
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
    PayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay',
            template: __webpack_require__(/*! ./pay.page.html */ "./src/app/pages/pay/pay.page.html"),
            styles: [__webpack_require__(/*! ./pay.page.scss */ "./src/app/pages/pay/pay.page.scss")]
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