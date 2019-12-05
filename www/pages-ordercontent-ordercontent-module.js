(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ordercontent-ordercontent-module"],{

/***/ "./src/app/pages/ordercontent/ordercontent.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ordercontent/ordercontent.module.ts ***!
  \***********************************************************/
/*! exports provided: OrdercontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdercontentPageModule", function() { return OrdercontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordercontent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ordercontent.page */ "./src/app/pages/ordercontent/ordercontent.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-06 22:18:30
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-07-06 22:18:30
 * @Description: file content
 */








var routes = [
    {
        path: '',
        component: _ordercontent_page__WEBPACK_IMPORTED_MODULE_7__["OrdercontentPage"]
    }
];
var OrdercontentPageModule = /** @class */ (function () {
    function OrdercontentPageModule() {
    }
    OrdercontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_ordercontent_page__WEBPACK_IMPORTED_MODULE_7__["OrdercontentPage"]]
        })
    ], OrdercontentPageModule);
    return OrdercontentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ordercontent/ordercontent.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/ordercontent/ordercontent.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-07-07 02:44:20\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-12-03 22:02:00\n * @Description: 商品订单详情\n -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>我的订单</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"top\" *ngIf=\"data\">\n    <div class=\"status\">\n      <span *ngIf=\"(data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status == '0'\">等待买家付款</span>\n      <!-- <p *ngIf=\"(data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status == '0'\">剩{{endtime}}自动关闭</p> -->\n      <span>\n        <img *ngIf=\"data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status == '2'\" src=\"../../../assets/icon/gou.svg\" alt=\"\">\n        <img class=\"cancle\" *ngIf=\"data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status == '0'\" src=\"../../../assets/icon/cancle.svg\" alt=\"\">\n      </span>\n      <span *ngIf=\"!istkend\">订单{{data.order | orderstatus}}</span>\n      <span *ngIf=\"istkend\">订单已取消，已退款</span>\n      <span margin-top \n      *ngIf=\"data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status == '2' || \n      data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status == '0'\"><ion-button size=\"small\" color=\"secondary\" (click)=\"toPagefn(2, data.goods_list[0].goods_id)\">再次购买</ion-button></span>\n    </div>\n  </div>\n  <div class=\"address-box\" padding>\n    <div class=\"icon\">\n      <span>\n        <img src=\"../../../assets/icon/address2.svg\" alt=\"\">\n      </span>\n    </div>\n    <div class=\"right\" *ngIf=\"data\">\n      <div class=\"box\">{{data.order.consignee}} <ion-text color=\"medium\">{{data.order.mobile}}</ion-text></div>\n      <div class=\"box\">{{data.order.address}}</div>\n    </div>\n  </div>\n  <div *ngIf=\"data\" class=\"goods-content\" padding-bottom>\n    <app-ordercontentgoods [goods_list]=\"data.goods_list\" [shopname]=\"data.order.referer\" [supplier_id]=\"data.order.supplier_id\"></app-ordercontentgoods>\n    <ion-list lines=\"none\" no-padding no-margin>\n      <ion-item lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">商品总价</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.formated_goods_amount}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.extension_code === 'group_buy'\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">保证金</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.formated_goods_amount}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.discount != 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">折扣</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.discount}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.tax != 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">发票税额</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.tax}}</ion-note>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">运费</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.formated_shipping_fee}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.insure_fee > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">保价费用</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.insure_fee}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.pay_fee > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">改价</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.pay_fee}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.pack_fee > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">包装费用</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.pack_fee}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.card_fee > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">贺卡费用</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.card_fee}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.card_fee > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">贺卡费用</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.card_fee}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.money_paid > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">已付金额</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.formated_money_paid}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.surplus > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">使用余额</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.formated_surplus}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.integral_money > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">使用积分</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.formated_integral_money}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf=\"data.order.bonus > 0\" lines=\"none\">\n        <ion-label><p><ion-text color=\"dark\">使用红包</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.formated_bonus}}</ion-note>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"data.order.formated_order_amount != '0.00'\">\n        <ion-label><p><ion-text color=\"dark\">应付款总价</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.formated_order_amount}}</ion-note>\n      </ion-item>\n      <p *ngIf=\"data.order.extension_code == 'group_buy'\"><ion-text color=\"medum\">（备注：团购如果有保证金，第一次只需支付保证金和相应的支付费用）</ion-text></p>\n    </ion-list>\n  </div>\n  <div class=\"order-content\" *ngIf=\"data\" padding margin-top>\n    <div class=\"title\" margin-bottom>订单信息</div>\n    <div class=\"my-item\">\n      <div class=\"left\">订单编号:</div>\n      <div class=\"right\">{{data.order.order_sn}}</div>\n    </div>\n    <div class=\"my-item\" *ngIf=\"data.order.pay_name\">\n      <div class=\"left\">支付方式:</div>\n      <div class=\"right\">{{data.order.pay_name}}</div>\n    </div>\n    <div class=\"my-item\" *ngIf=\"data.order.shipping_id > 0\">\n      <div class=\"left\">配送方式:</div>\n      <div class=\"right\">{{data.order.shipping_name || '请咨询商家'}}</div>\n    </div>\n    <div class=\"my-item\" *ngIf=\"data.order.shipping_id > 0\">\n      <div class=\"left\">快递单号:</div>\n      <div class=\"right\">{{data.nu || '请咨询商家'}}</div>\n    </div>\n    <div class=\"my-item\">\n      <div class=\"left\">创建时间:</div>\n      <div class=\"right\">{{data.order.add_time | time}}</div>\n    </div>\n    <div class=\"my-item\" *ngIf=\"data.order.postscript\">\n      <div class=\"left\">订单留言:</div>\n      <div class=\"right\">{{data.order.postscript}}</div>\n    </div>\n    <div class=\"my-item\" *ngIf=\"data.order.to_buyer\">\n      <div class=\"left\">商家留言:</div>\n      <div class=\"right\">{{data.order.to_buyer}}</div>\n    </div>\n  </div>\n  <div class=\"yepay-box\" *ngIf=\"data && data.allow_edit_surplus == 1 && data.canchangepay  && data.order.order_status == '未确认' && data.order.pay_status === '未付款'\" margin-top>\n    <ion-list inset=\"true\" lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-label>使用余额</ion-label>\n        <ion-toggle [(ngModel)]=\"kysyye\" (ionChange)=\"setyenum()\" color=\"success\" [disabled]=\"isyepayend\"></ion-toggle>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"kysyye\">\n        <ion-label>输入金额</ion-label>\n        <ion-input type=\"number\" mode=\"ios\" (ionChange)=\"setyechange()\"  [disabled]=\"isyepayend\" min=\"0\" [(ngModel)]=\"syye\" color=\"success\"></ion-input>\n        <ion-note>元</ion-note>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label><p>您当前的可用余额为{{data.max_surplus}}</p></ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"zftype\" padding-end margin-top *ngIf=\"data && (data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status == '0'\">\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"payType\">\n        <ion-list-header>\n          支付方式\n        </ion-list-header>\n        <ion-item *ngFor=\"let item of payList\" lines=\"none\">\n          <ion-label><img [src]=\"item.pay_code == 'alipay' ? './assets/zfb.svg' : './assets/wechartpay.svg'\" alt=\"\">{{item.pay_name}}</ion-label>\n          <ion-radio color=\"success\" value=\"{{item.pay_code}}\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </div>\n  <ion-grid class=\"contact-box\" margin-top>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" fill=\"clear\" color=\"dark\" (click)=\"toMessage()\">\n          <img src=\"../../../assets/kf.png\" alt=\"\">\n          联系卖家\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" fill=\"clear\" color=\"dark\" (click)=\"call()\"><img src=\"../../../assets/tel.png\" alt=\"\">拨打电话</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer *ngIf=\"data && (data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status === '0'\">\n  <ion-toolbar>\n    <div class=\"footer-bar\">\n      <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder(1)\">取消订单</ion-button>\n      <ion-button size=\"small\" color=\"danger\" (click)=\"submit()\">付款</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n<ion-footer \n*ngIf=\"data && !isshing && (data.order.order_status == '1' || data.order.order_status == '0') && (data.order.shipping_status == '0' || data.order.shipping_status == '3') && data.order.pay_status === '2' ||\ndata && data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status === '2' && !istkend\">\n  <ion-toolbar>\n    <div class=\"footer-bar\">\n      <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder(2)\">退款</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n<ion-footer *ngIf=\"data && !isshing && data.order.order_status == '5' && data.order.shipping_status == '1' && data.order.pay_status === '2'\">\n  <ion-toolbar>\n    <div class=\"footer-bar\">\n      <ion-button size=\"small\" color=\"success\" (click)=\"confirmReceipt()\">确认收货</ion-button>\n      <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder()\">退换</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n<ion-footer *ngIf=\"data && data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status === '2'\">\n  <ion-toolbar>\n    <div class=\"footer-bar\">\n      <ion-button size=\"small\" color=\"danger\" *ngIf=\"comment > 0\" (click)=\"toPagefn(16, data.order.order_id)\">评价</ion-button>\n      <ion-button size=\"small\" *ngIf=\"!isshing\" color=\"light\" (click)=\"cancleOrder(4)\">售后</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/ordercontent/ordercontent.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/ordercontent/ordercontent.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  height: 120px;\n  background: var(--ion-color-linegradientback);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  font-size: var(--ion-title); }\n  .top span {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    color: #fff; }\n  .top span img {\n      width: 50px;\n      margin-right: 5px; }\n  .top span img.cancle {\n        width: 20px; }\n  .top .status p {\n    text-align: center;\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-white); }\n  ion-content {\n  --background: var(--ion-gray-background-color); }\n  .address-box {\n  background: var(--ion-color-white);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .address-box .icon {\n    margin-right: 10px; }\n  .address-box .icon span {\n      width: 30px;\n      height: 30px;\n      background: var(--ion-color-linegradient);\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50%; }\n  .address-box .icon span img {\n        width: 60%; }\n  .address-box .right {\n    font-size: var(--ion-text); }\n  .address-box .right ion-text {\n      font-size: var(--ion-sm-text); }\n  .goods-content {\n  background: var(--ion-color-white); }\n  .goods-content ion-item {\n    --min-height: 25px;\n    --inner-padding-top: 0px;\n    --inner-padding-bottom: 0;\n    --padding-top: 0;\n    --padding-bottom: 0; }\n  .goods-content ion-item ion-label {\n      padding: 0;\n      margin: 0; }\n  .order-content {\n  background: var(--ion-color-white); }\n  .order-content .title {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark);\n    border-left: 1px solid var(--ion-color-success);\n    padding-left: 5px; }\n  .order-content .my-item {\n    margin-bottom: 10px;\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-medium);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .order-content .my-item:last-of-type {\n      margin-bottom: 0; }\n  .order-content .my-item .left {\n      width: 65px; }\n  .zftype {\n  background-color: var(--ion-color-white); }\n  .zftype ion-label {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .zftype img {\n    width: 25px;\n    margin-right: 10px; }\n  .yepay-box {\n  background-color: var(--ion-color-white);\n  padding-top: 1px;\n  padding-bottom: 1px; }\n  .footer-bar {\n  text-align: right; }\n  .contact-box {\n  background-color: #fff;\n  font-size: var(--ion-text); }\n  .contact-box img {\n    width: 26px;\n    margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9vcmRlcmNvbnRlbnQvb3JkZXJjb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDJCQUEyQixFQUFBO0VBUDdCO0lBU0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUFkZjtNQWdCTSxXQUFXO01BQ1gsaUJBQWlCLEVBQUE7RUFqQnZCO1FBbUJRLFdBQVcsRUFBQTtFQW5CbkI7SUEwQk0sa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qiw2QkFBNkIsRUFBQTtFQUluQztFQUNFLDhDQUFhLEVBQUE7RUFFZjtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTtFQUxyQjtJQU9JLGtCQUFrQixFQUFBO0VBUHRCO01BU00sV0FBVztNQUNYLFlBQVk7TUFDWix5Q0FBeUM7TUFDekMsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BR25CLGtCQUFrQixFQUFBO0VBbEJ4QjtRQW9CUSxVQUFVLEVBQUE7RUFwQmxCO0lBeUJJLDBCQUEwQixFQUFBO0VBekI5QjtNQTJCTSw2QkFBNkIsRUFBQTtFQUluQztFQUNFLGtDQUFrQyxFQUFBO0VBRHBDO0lBR0ksa0JBQWE7SUFDYix3QkFBb0I7SUFDcEIseUJBQXVCO0lBQ3ZCLGdCQUFjO0lBQ2QsbUJBQWlCLEVBQUE7RUFQckI7TUFTTSxVQUFVO01BQ1YsU0FBUyxFQUFBO0VBS2Y7RUFDRSxrQ0FBa0MsRUFBQTtFQURwQztJQUdJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLGlCQUFpQixFQUFBO0VBTnJCO0lBU0ksbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFmdkI7TUFpQk0sZ0JBQWdCLEVBQUE7RUFqQnRCO01Bb0JNLFdBQVcsRUFBQTtFQUlqQjtFQUNFLHdDQUF3QyxFQUFBO0VBRDFDO0lBR0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFOdkI7SUFTSSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUFHdEI7RUFDRSx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBRXJCO0VBQ0UsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSxzQkFBc0I7RUFLdEIsMEJBQTBCLEVBQUE7RUFONUI7SUFHSSxXQUFXO0lBQ1gsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcmNvbnRlbnQvb3JkZXJjb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Age1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudGJhY2spO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICYuY2FuY2xlIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLnN0YXR1cyB7XHJcbiAgICBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG59XHJcbi5hZGRyZXNzLWJveCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5nb29kcy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tbWluLWhlaWdodDogMjVweDtcclxuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuICAubXktaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uemZ0eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuLnllcGF5LWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbn1cclxuLmZvb3Rlci1iYXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jb250YWN0LWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/ordercontent/ordercontent.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ordercontent/ordercontent.page.ts ***!
  \*********************************************************/
/*! exports provided: OrdercontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdercontentPage", function() { return OrdercontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_thorder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/thorder.service */ "./src/app/services/thorder.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_payment_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/payment-list.service */ "./src/app/services/payment-list.service.ts");
/* harmony import */ var _components_paybox_paybox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/paybox/paybox.component */ "./src/app/components/paybox/paybox.component.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var src_app_services_orderlist_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/orderlist.service */ "./src/app/services/orderlist.service.ts");


/*
 * @Author: wjy-mac
 * @Date: 2019-07-29 22:29:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 11:27:10
 * @Description: file content
 */









var OrdercontentPage = /** @class */ (function () {
    function OrdercontentPage(activeroute, nav, http, native, paymentlist, alertController, popoverController, topage, route, thorder, orderList) {
        this.activeroute = activeroute;
        this.nav = nav;
        this.http = http;
        this.native = native;
        this.paymentlist = paymentlist;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.topage = topage;
        this.route = route;
        this.thorder = thorder;
        this.orderList = orderList;
    }
    OrdercontentPage.prototype.ngOnInit = function () {
        console.log('进入1');
        this.kysyye = false;
    };
    OrdercontentPage.prototype.goBack = function () {
        // this.nav.back();
        this.route.navigateByUrl('/allorder');
    };
    OrdercontentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('进入2');
        var params = this.activeroute.snapshot.queryParams;
        this.orderId = params['id'];
        this.comment = params['comment'] ? Number(params['comment']) : 0;
        var plid = this.orderList.getPlorderid(); // 获取上一次评论的订单id
        if (plid && plid == this.orderId && this.comment != 0) {
            this.comment = 0;
        }
        if (!this.orderId) {
            setTimeout(function () {
                _this.getDatahttp();
            }, 1000);
        }
        else {
            this.getDatahttp();
        }
        this.isshing = true;
        this.getData();
    };
    OrdercontentPage.prototype.getData = function () {
        var _this = this;
        this.paymentlist.getHlist().then(function (res) {
            _this.payList = res;
            _this.payType = res[0].pay_code;
        }).catch(function (err2) {
        });
    };
    OrdercontentPage.prototype.doRefresh = function (event) {
        this.getData();
        this.getDatahttp().then(function (res) {
            event.target.complete();
        }).catch(function (err2) {
            event.target.complete();
        });
    };
    OrdercontentPage.prototype.getDatahttp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.getDataloading(_this.http.orderDetail, { order_sn: _this.orderId }).subscribe(function (res) {
                            console.log(res);
                            _this.data = res.data;
                            if (_this.data.order.pay_name == '支付宝') {
                                _this.payType = 'alipay';
                            }
                            else if (_this.data.order.pay_name == '微信支付') {
                                _this.payType = 'weixin';
                            }
                            console.log(_this.data);
                            var istk = false;
                            for (var i = 0; i < _this.data['goods_list'].length; i++) {
                                var goods = _this.data['goods_list'][i];
                                if (goods['tkend'] != 1 && goods['isshing'] != 1 || goods['backnum'] != goods['goods_number']) {
                                    _this.isshing = false;
                                }
                                if (goods['tkend'] != 1 || goods['backnum'] != goods['goods_number']) {
                                    istk = true;
                                }
                            }
                            if (!istk) {
                                _this.istkend = true;
                            }
                            if ((res.data.order.order_status == '0' || res.data.order.order_status == '1') && res.data.order.pay_status == '0') {
                                var endDate = res.data['order'].add_time;
                                var nowDate = Date.parse((new Date()).toString()) / 1000;
                                var totalSeconds = parseInt(((Number(nowDate) - Number(endDate))).toString(), 10);
                                var modulo = totalSeconds % (60 * 60 * 24);
                                var hours = Math.floor(modulo / (60 * 60));
                                modulo = modulo % (60 * 60);
                                var minutes = Math.floor(modulo / 60);
                                var seconds = parseInt((modulo % 60).toString(), 10);
                                if (hours < 10) {
                                    hours = "0" + hours;
                                }
                                if (minutes < 10) {
                                    minutes = "0" + minutes;
                                }
                                _this.endtime = hours + '小时' + minutes + '分钟';
                            }
                            resolve(true);
                        }, function (error2) {
                            reject(false);
                        });
                    })];
            });
        });
    };
    OrdercontentPage.prototype.setyenum = function () {
        if (!this.syye) {
            var ye = Number(this.data.max_surplus);
            var price = Number(this.data.order.order_amount);
            this.syye = ye > price ? price : ye;
        }
    };
    // repurchase() {
    //   this.topage.toPage(2, this.data.goods_list[0].goods_id);
    // }
    OrdercontentPage.prototype.toPagefn = function (type, id) {
        this.topage.toPage(type, id);
    };
    OrdercontentPage.prototype.toMessage = function () {
        this.topage.toPage(17, this.data.order.supplier_id, this.data.order.referer, this.data.order.pay_status === '2' ? 2 : 1);
    };
    OrdercontentPage.prototype.call = function () {
        this.native.callTel(this.data.order.supplier_tel);
    };
    OrdercontentPage.prototype.cancleOrder = function (type) {
        if (type === void 0) { type = 3; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type === 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: '提示',
                                message: '是否确认退款',
                                buttons: [
                                    {
                                        text: '取消',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                        }
                                    }, {
                                        text: '退款',
                                        handler: function () {
                                            _this.cancleOrderfn();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        if (type === 2) {
                            this.thorder.setIsall();
                            this.CancelOrderdata();
                        }
                        else if (type === 3 || type === 4) {
                            if (type === 4) {
                                this.thorder.setIssh();
                            }
                            if (this.data['goods_list'].length === 1) {
                                this.CancelOrderdata();
                            }
                            else {
                                this.seleteCancelorder();
                            }
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrdercontentPage.prototype.seleteCancelorder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj, arr, ischecked, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.data['goods_list']);
                        obj = {
                            header: '提示!',
                            message: '请选择需要处理的商品！',
                            inputs: [],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function (e) {
                                        if (e) {
                                            _this.CancelOrderdata(_this.data['goods_list'][e - 1]);
                                        }
                                    }
                                }
                            ]
                        };
                        arr = [];
                        ischecked = false;
                        this.data['goods_list'].map(function (item, index) {
                            var obj = {
                                name: item['goods_name'],
                                type: 'radio',
                                label: item['goods_name'],
                                value: index + 1,
                                checked: false,
                                disabled: item.tkend == 1 || item.isshing == 1
                            };
                            var name = '';
                            if (item.tkend == 1) {
                                name = '[已退款]';
                            }
                            else if (item.isshing == 1) {
                                name = '[售后中]';
                            }
                            name += item['goods_name'];
                            obj.name = name;
                            obj.label = name;
                            if (!ischecked && item.tkend != 1 && item.isshing != 1) {
                                obj.checked = true;
                                ischecked = true;
                            }
                            arr.push(obj);
                        });
                        obj['inputs'] = arr;
                        return [4 /*yield*/, this.alertController.create(obj)];
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
    OrdercontentPage.prototype.CancelOrderdata = function (goods) {
        this.route.navigate(['/cancel-order']);
        this.thorder.setData(this.data['order'], goods || this.data['goods_list'][0]);
    };
    OrdercontentPage.prototype.cancleOrderfn = function () {
        var _this = this;
        this.http.getDataloading(this.http.cancelOrder, { order_id: this.data.order.order_id }).subscribe(function (res) {
            console.log(res);
            _this.presentAlert();
        }, function (error2) { });
    };
    OrdercontentPage.prototype.setyechange = function () {
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
        var ye = Number(this.data.max_surplus);
        var price = Number(this.data.order.order_amount);
        if (this.syye > ye || this.syye > price) {
            this.native.presentAlert('请输入正确的金额');
            this.syye = 0;
            return false;
        }
    };
    OrdercontentPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示',
                            message: '订单取消成功.',
                            buttons: [{
                                    text: '确定',
                                    handler: function () {
                                        _this.goBack();
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
    OrdercontentPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var surplus, pwd, kypay, err2_1, price;
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
                        price = Number(this.data.order.order_amount);
                        if (surplus == price) {
                            this.isyepayend = false;
                            // this.route.navigate(['/ordersuccess'], {queryParams: {type: 2}});
                            this.getDatahttp();
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
    OrdercontentPage.prototype.checksurplus = function (pwd) {
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
    OrdercontentPage.prototype.syyepay = function () {
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
    OrdercontentPage.prototype.payfn = function () {
        var _this = this;
        this.http.postformdataloading(this.http.acteditpayment, { order_id: this.data.order.order_id, pay_code: this.payType, is_pay: 1, repay: 1 }).subscribe(function (res) {
            var gopay = true;
            var ispay = function () {
                setTimeout(function () {
                    if (gopay) {
                        _this.getHttpayend(_this.data.order.order_id);
                    }
                    document.removeEventListener("resume", ispay, false);
                }, 1500);
            };
            if (_this.payType == 'alipay') {
                _this.native.alipayment(res.result).then(function (res) {
                    _this.getHttpayend(_this.data.order.order_id);
                }).catch(function (err) {
                    _this.native.presentToast('支付失败!');
                }).finally(function () {
                    gopay = false;
                });
            }
            else {
                _this.native.wechatpayment(res.result).then(function (res) {
                    _this.getHttpayend(_this.data.order.order_id);
                }).catch(function (err) {
                    // this.getDatahttp();
                    _this.native.presentToast('支付失败!');
                }).finally(function () {
                    gopay = false;
                });
            }
        }, function (error2) {
        });
    };
    OrdercontentPage.prototype.getHttpayend = function (order_id) {
        var _this = this;
        this.http.postformdataloading(this.http.acteditpayment2, { order_id: order_id }).subscribe(function (res) {
            _this.getDatahttp();
        }, function (err) {
            _this.native.presentToast('支付失败!');
        });
    };
    OrdercontentPage.prototype.confirmReceipt = function () {
        var _this = this;
        this.http.getDataloading(this.http.zdomain + this.http.affirmReceived, { order_id: this.data.order.order_id }).subscribe(function (res) {
            _this.data.order.shipping_status = 2;
            _this.presentAlertConfirm();
        }, function (err2) { });
    };
    OrdercontentPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '交易成功!',
                            message: '去评价一下本次的购物体验吧~',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: '评价',
                                    handler: function () {
                                        _this.toPagefn(16, _this.data.order.order_id);
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
    OrdercontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ordercontent',
            template: __webpack_require__(/*! ./ordercontent.page.html */ "./src/app/pages/ordercontent/ordercontent.page.html"),
            styles: [__webpack_require__(/*! ./ordercontent.page.scss */ "./src/app/pages/ordercontent/ordercontent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_native_service__WEBPACK_IMPORTED_MODULE_6__["NativeService"], _services_payment_list_service__WEBPACK_IMPORTED_MODULE_7__["PaymentListService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_9__["TopageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_thorder_service__WEBPACK_IMPORTED_MODULE_1__["ThorderService"],
            src_app_services_orderlist_service__WEBPACK_IMPORTED_MODULE_10__["OrderlistService"]])
    ], OrdercontentPage);
    return OrdercontentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ordercontent-ordercontent-module.js.map