(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-xccontent-xccontent-module"],{

/***/ "./src/app/pages/xccontent/xccontent.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/xccontent/xccontent.module.ts ***!
  \*****************************************************/
/*! exports provided: XccontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XccontentPageModule", function() { return XccontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _xccontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xccontent.page */ "./src/app/pages/xccontent/xccontent.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _xccontent_page__WEBPACK_IMPORTED_MODULE_6__["XccontentPage"]
    }
];
var XccontentPageModule = /** @class */ (function () {
    function XccontentPageModule() {
    }
    XccontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_xccontent_page__WEBPACK_IMPORTED_MODULE_6__["XccontentPage"]]
        })
    ], XccontentPageModule);
    return XccontentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/xccontent/xccontent.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/xccontent/xccontent.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-07-08 22:01:44\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-10-17 17:36:33\n * @Description: 行程订单详情\n -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>我的行程</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content\n     pullingIcon=\"arrow-dropdown\"\n     pullingText=\"Pull to refresh\"\n     refreshingSpinner=\"circles\"\n     refreshingText=\"Refreshing...\">\n  </ion-refresher-content>\n</ion-refresher>\n<!-- <div class=\"top\" *ngIf=\"data\">\n  <div class=\"status\" *ngIf=\"data.order.order_status !== '已取消' && data.order.order_status !== '已完成'\">\n    <span *ngIf=\"data.order.pay_status === '未付款'\">等待买家付款</span>\n    <p *ngIf=\"data.order.pay_status === '未付款'\">剩{{endtime}}自动关闭</p>\n    <span *ngIf=\"data.order.pay_status !== '未付款' && data.order.shipping_status == '未发货' || data.order.shipping_status == '配货中'\">\n      请等待商家确认\n    </span>\n    <span *ngIf=\"data.order.pay_status !== '未付款' && data.order.shipping_status == '已发货'\">\n      等待出行\n    </span>\n    <span *ngIf=\"data.order.pay_status !== '未付款' && data.order.shipping_status == '收货确认'\">\n      已完成\n    </span>\n  </div>\n  <div class=\"status\" *ngIf=\"data.order.order_status === '已取消' || data.order.order_status === '已完成'\">\n      <span>\n        <img *ngIf=\"data.order.order_status === '已完成'\" src=\"../../../assets/icon/gou.svg\" alt=\"\">\n        <img class=\"cancle\" *ngIf=\"data.order.order_status === '已取消'\" src=\"../../../assets/icon/cancle.svg\" alt=\"\">\n        订单{{data.order.order_status}}\n      </span>\n    <span margin-top><ion-button size=\"small\" color=\"secondary\" (click)=\"repurchase()\">再次购买</ion-button></span>\n  </div>\n</div> -->\n<div class=\"top\" *ngIf=\"data\">\n    <div class=\"status\">\n      <span *ngIf=\"(data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status == '0'\">等待买家付款</span>\n      <p *ngIf=\"(data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status == '0'\">剩{{endtime}}自动关闭</p>\n      <span>\n        <img *ngIf=\"data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status == '2'\" src=\"../../../assets/icon/gou.svg\" alt=\"\">\n        <img class=\"cancle\" *ngIf=\"data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status == '0'\" src=\"../../../assets/icon/cancle.svg\" alt=\"\">\n      </span>\n      <span>{{data.order | orderstatus: 1}}</span>\n      <span margin-top \n      *ngIf=\"data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status == '2' || \n      data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status == '0'\"><ion-button size=\"small\" color=\"secondary\" (click)=\"repurchase()\">再次购买</ion-button></span>\n    </div>\n  </div>\n<div *ngIf=\"data\" class=\"goods-content\" padding-bottom>\n  <app-ordercontentgoods [goods_list]=\"data.goods_list\" [shopname]=\"data.order.referer\" [supplier_id]=\"data.order.supplier_id\"></app-ordercontentgoods>\n  <ion-list no-margin>\n    <ion-item *ngFor=\"let item of data.goods_list[0].goods_attr | xccontentsplit\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">{{item[0]}}</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{item[1]}}</ion-note>\n    </ion-item>\n  </ion-list>\n  <div class=\"line\"></div>\n  <ion-list lines=\"none\" no-padding no-margin>\n    <ion-item lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">商品总价</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_goods_amount}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.extension_code === 'group_buy'\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">保证金</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_goods_amount}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.discount != 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">折扣</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.discount}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.tax != 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">发票税额</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.tax}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.insure_fee > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">保价费用</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.insure_fee}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.pay_fee > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">手续费</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.pay_fee}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.money_paid > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">已付金额</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_money_paid}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.surplus > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">使用余额</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_surplus}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.integral_money > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">使用积分</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_integral_money}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.bonus > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">使用红包</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_bonus}}</ion-note>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"data.order.formated_order_amount != '0.00'\">\n      <ion-label><p><ion-text color=\"dark\">应付款总价</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_order_amount}}</ion-note>\n    </ion-item>\n    <p *ngIf=\"data.order.extension_code == 'group_buy'\"><ion-text color=\"medum\">（备注：团购如果有保证金，第一次只需支付保证金和相应的支付费用）</ion-text></p>\n  </ion-list>\n</div>\n  <div class=\"tksm\" *ngIf=\"data\" margin-top padding-top padding-bottom>\n    <div class=\"title\" margin-start margin-bottom>联系人</div>\n    <ion-list no-margin>\n      <ion-item lines=\"none\">\n        <ion-label no-padding no-margin><p><ion-text color=\"dark\">联系人</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.username}}</ion-note>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label no-padding no-margin><p><ion-text color=\"dark\">联系电话</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.usertel}}</ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"outperson\" *ngIf=\"data && data.outperson\" margin-top padding-top padding-bottom>\n    <div class=\"title\" margin-start margin-bottom>出行人</div>\n    <ion-list no-margin>\n      <ion-item *ngFor=\"let item of data.outperson\">\n        <ion-label>\n          <h3>{{item.consignee}} <span>{{item.mobile || item.tel}}</span></h3>\n          <p><ion-text color=\"dark\">{{item.card}}</ion-text></p>\n        </ion-label>\n        <!--<ion-note slot=\"end\">{{data.order.username}}</ion-note>-->\n      </ion-item>\n    </ion-list>\n  </div>\n<div class=\"tksm\" margin-top padding-top padding-bottom *ngIf=\"data && data.goods_list\">\n  <div class=\"title\" margin-start margin-bottom>退款说明</div>\n  <ion-list no-margin *ngIf=\"data.goods_list[0].istk == 2\">\n    <ion-item *ngFor=\"let item of data.goods_list[0].tksm\" lines=\"none\">\n      <ion-label no-padding no-margin><p><ion-text color=\"dark\">出发前{{item['beforetime']}}天</ion-text></p></ion-label>\n      <ion-note slot=\"end\">扣除{{item['kcbl']}}%</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.goods_list[0].tksm && data.goods_list[0].tksm.length > 0\" lines=\"none\">\n      <ion-label no-padding no-margin><p><ion-text color=\"dark\">作为卖家损失费</ion-text></p></ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"!data.goods_list[0].tksm || data.goods_list[0].tksm.length === 0\" lines=\"none\">\n      <ion-label no-padding no-margin><p><ion-text color=\"dark\">出行前随时可退</ion-text></p></ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list no-margin *ngIf=\"data.goods_list[0].istk == 1\">\n    <ion-item lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">商家确认后不支持退款</ion-text></p></ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n<div class=\"order-content\" *ngIf=\"data\" padding margin-top>\n  <div class=\"title\" margin-bottom>订单信息</div>\n  <div class=\"my-item\">\n    <div class=\"left\">订单编号:</div>\n    <div class=\"right\">{{data.order.order_sn}}</div>\n  </div>\n  <div class=\"my-item\" *ngIf=\"data.order.pay_name && data.order.pay_fee != '0.00'\">\n    <div class=\"left\">支付方式:</div>\n    <div class=\"right\">{{data.order.pay_name}}</div>\n  </div>\n  <div class=\"my-item\" *ngIf=\"data.order.pay_fee == '0.00'\">\n    <div class=\"left\">支付方式:</div>\n    <div class=\"right\">余额支付</div>\n  </div>\n  <div class=\"my-item\">\n    <div class=\"left\">创建时间:</div>\n    <div class=\"right\">{{data.order.add_time | time}}</div>\n  </div>\n  <div class=\"my-item\" *ngIf=\"data.order.postscript\">\n    <div class=\"left\">留言:</div>\n    <div class=\"right\">{{data.order.postscript}}</div>\n  </div>\n  <div class=\"my-item\" *ngIf=\"data.order.to_buyer\">\n    <div class=\"left\">商家留言:</div>\n    <div class=\"right\">{{data.order.to_buyer}}</div>\n  </div>\n</div>\n<div class=\"yepay-box\" *ngIf=\"data && data.allow_edit_surplus == 1 && data.canchangepay  && data.order.order_status == '未确认' && data.order.pay_status === '未付款'\" margin-top>\n  <ion-list inset=\"true\" lines=\"none\">\n    <ion-item lines=\"none\">\n      <ion-label>使用余额</ion-label>\n      <ion-toggle [(ngModel)]=\"kysyye\" (ionChange)=\"setyenum()\" color=\"success\" [disabled]=\"isyepayend\"></ion-toggle>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"kysyye\">\n      <ion-label>输入金额</ion-label>\n      <ion-input type=\"number\" mode=\"ios\" (ionChange)=\"setyechange()\"  [disabled]=\"isyepayend\" min=\"0\" [(ngModel)]=\"syye\" color=\"success\"></ion-input>\n      <ion-note>元</ion-note>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label><p>您当前的可用余额为{{data.max_surplus}}</p></ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n<div class=\"zftype\" padding-end margin-top *ngIf=\"data && data.order.order_status == '未确认' && data.order.pay_status === '未付款'\">\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"payType\">\n      <ion-list-header>\n        支付方式\n      </ion-list-header>\n      <ion-item *ngFor=\"let item of payList\" lines=\"none\">\n        <ion-label><img [src]=\"item.pay_code == 'alipay' ? './assets/zfb.svg' : './assets/wechartpay.svg'\" alt=\"\">{{item.pay_name}}</ion-label>\n        <ion-radio color=\"success\" value=\"{{item.pay_code}}\" mode=\"md\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</div>\n</ion-content>\n\n<ion-footer *ngIf=\"data && (data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status === '0'\">\n    <ion-toolbar>\n      <div class=\"footer-bar\">\n        <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder(1)\">取消订单</ion-button>\n        <ion-button size=\"small\" color=\"danger\" (click)=\"submit()\">付款</ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  <ion-footer \n  *ngIf=\"data && data.order.order_status == '1' && (data.order.shipping_status == '0' || data.order.shipping_status == '3') && data.order.pay_status === '2' ||\n  data && data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status === '2'\">\n    <ion-toolbar>\n      <div class=\"footer-bar\">\n        <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder(1)\">退款</ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  <ion-footer *ngIf=\"data && data.order.order_status == '5' && data.order.shipping_status == '1' && data.order.pay_status === '2'\">\n    <ion-toolbar>\n      <div class=\"footer-bar\">\n        <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder()\">退款</ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  <ion-footer *ngIf=\"data && data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status === '2'\">\n    <ion-toolbar>\n      <div class=\"footer-bar\">\n        <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder()\">售后</ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/xccontent/xccontent.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/xccontent/xccontent.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  height: 120px;\n  background: var(--ion-color-linegradientback);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  font-size: var(--ion-title); }\n  .top span {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    color: #fff; }\n  .top span img {\n      width: 50px;\n      margin-right: 5px; }\n  .top span img.cancle {\n        width: 20px; }\n  .top .status p {\n    text-align: center;\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-white); }\n  ion-content {\n  --background: var(--ion-gray-background-color); }\n  .address-box {\n  background: var(--ion-color-white);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .address-box .icon {\n    margin-right: 10px; }\n  .address-box .icon span {\n      width: 30px;\n      height: 30px;\n      background: var(--ion-color-linegradient);\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50%; }\n  .address-box .icon span img {\n        width: 60%; }\n  .address-box .right {\n    font-size: var(--ion-text); }\n  .address-box .right ion-text {\n      font-size: var(--ion-sm-text); }\n  .goods-content {\n  background: var(--ion-color-white); }\n  .goods-content ion-item {\n    --min-height: 25px;\n    --inner-padding-top: 0px;\n    --inner-padding-bottom: 0;\n    --padding-top: 0;\n    --padding-bottom: 0; }\n  .goods-content ion-item ion-label {\n      padding: 0;\n      margin: 0; }\n  .goods-content ion-item ion-note {\n      font-size: var(--ion-text); }\n  .goods-content .line {\n    width: 100%;\n    height: 1px;\n    background-color: var(--ion-color-light);\n    margin: 5px 0; }\n  .order-content {\n  background: var(--ion-color-white); }\n  .order-content .title {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark);\n    border-left: 1px solid var(--ion-color-success);\n    padding-left: 5px; }\n  .order-content .my-item {\n    margin-bottom: 10px;\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-medium);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .order-content .my-item:last-of-type {\n      margin-bottom: 0; }\n  .order-content .my-item .left {\n      width: 65px; }\n  .zftype {\n  background-color: var(--ion-color-white); }\n  .zftype ion-label {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .zftype img {\n    width: 25px;\n    margin-right: 10px; }\n  .yepay-box {\n  background-color: var(--ion-color-white);\n  padding-top: 1px;\n  padding-bottom: 1px; }\n  .footer-bar {\n  text-align: right; }\n  .tksm {\n  background-color: var(--ion-color-white); }\n  .tksm .title {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark);\n    border-left: 1px solid var(--ion-color-success);\n    padding-left: 5px; }\n  .tksm ion-item {\n    --min-height: 30px; }\n  .outperson {\n  background-color: var(--ion-color-white); }\n  .outperson .title {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark);\n    border-left: 1px solid var(--ion-color-success);\n    padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy94Y2NvbnRlbnQveGNjb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDJCQUEyQixFQUFBO0VBUDdCO0lBU0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUFkZjtNQWdCTSxXQUFXO01BQ1gsaUJBQWlCLEVBQUE7RUFqQnZCO1FBbUJRLFdBQVcsRUFBQTtFQW5CbkI7SUEwQk0sa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qiw2QkFBNkIsRUFBQTtFQUluQztFQUNFLDhDQUFhLEVBQUE7RUFFZjtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTtFQUxyQjtJQU9JLGtCQUFrQixFQUFBO0VBUHRCO01BU00sV0FBVztNQUNYLFlBQVk7TUFDWix5Q0FBeUM7TUFDekMsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BR25CLGtCQUFrQixFQUFBO0VBbEJ4QjtRQW9CUSxVQUFVLEVBQUE7RUFwQmxCO0lBeUJJLDBCQUEwQixFQUFBO0VBekI5QjtNQTJCTSw2QkFBNkIsRUFBQTtFQUluQztFQUNFLGtDQUFrQyxFQUFBO0VBRHBDO0lBR0ksa0JBQWE7SUFDYix3QkFBb0I7SUFDcEIseUJBQXVCO0lBQ3ZCLGdCQUFjO0lBQ2QsbUJBQWlCLEVBQUE7RUFQckI7TUFTTSxVQUFVO01BQ1YsU0FBUyxFQUFBO0VBVmY7TUFhTSwwQkFBMEIsRUFBQTtFQWJoQztJQWlCSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxhQUFhLEVBQUE7RUFJakI7RUFDRSxrQ0FBa0MsRUFBQTtFQURwQztJQUdJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLGlCQUFpQixFQUFBO0VBTnJCO0lBU0ksbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFmdkI7TUFpQk0sZ0JBQWdCLEVBQUE7RUFqQnRCO01Bb0JNLFdBQVcsRUFBQTtFQUlqQjtFQUNFLHdDQUF3QyxFQUFBO0VBRDFDO0lBR0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFOdkI7SUFTSSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUFHdEI7RUFDRSx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBRXJCO0VBQ0UsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSx3Q0FBd0MsRUFBQTtFQUQxQztJQUdJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLGlCQUFpQixFQUFBO0VBTnJCO0lBU0ksa0JBQWEsRUFBQTtFQUdqQjtFQUNFLHdDQUF3QyxFQUFBO0VBRDFDO0lBR0ksMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwrQ0FBK0M7SUFDL0MsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy94Y2NvbnRlbnQveGNjb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Age1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudGJhY2spO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICYuY2FuY2xlIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLnN0YXR1cyB7XHJcbiAgICBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG59XHJcbi5hZGRyZXNzLWJveCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5nb29kcy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tbWluLWhlaWdodDogMjVweDtcclxuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5saW5lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuICAubXktaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uemZ0eXBlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuLnllcGF5LWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbn1cclxuLmZvb3Rlci1iYXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50a3NtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcbi5vdXRwZXJzb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/xccontent/xccontent.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/xccontent/xccontent.page.ts ***!
  \***************************************************/
/*! exports provided: XccontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XccontentPage", function() { return XccontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_payment_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/payment-list.service */ "./src/app/services/payment-list.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _components_paybox_paybox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/paybox/paybox.component */ "./src/app/components/paybox/paybox.component.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-07 23:49:04
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-18 10:56:17
 * @Description: file content
 */








var XccontentPage = /** @class */ (function () {
    function XccontentPage(activeroute, nav, http, native, paymentlist, alertController, popoverController, topage) {
        this.activeroute = activeroute;
        this.nav = nav;
        this.http = http;
        this.native = native;
        this.paymentlist = paymentlist;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.topage = topage;
    }
    XccontentPage.prototype.ngOnInit = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.orderId = params['id'];
        this.kysyye = false;
        console.log(this.orderId);
    };
    XccontentPage.prototype.goBack = function () {
        this.nav.back();
    };
    XccontentPage.prototype.ionViewWillEnter = function () {
        this.getDatahttp();
        this.getData();
    };
    XccontentPage.prototype.getData = function () {
        var _this = this;
        this.paymentlist.getHlist().then(function (res) {
            _this.payList = res;
            _this.payType = res[0].pay_code;
        }).catch(function (err2) {
        });
    };
    XccontentPage.prototype.doRefresh = function (event) {
        this.getData();
        this.getDatahttp().then(function (res) {
            event.target.complete();
        }).catch(function (err2) {
            event.target.complete();
        });
    };
    XccontentPage.prototype.getDatahttp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.getDataloading(_this.http.orderDetail, { order_id: _this.orderId }).subscribe(function (res) {
                            console.log(res);
                            _this.data = res.data;
                            console.log(_this.data);
                            if (res.data.order.order_status !== '已取消' && res.data.order.order_status !== '已完成') {
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
                            _this.setouttime = _this.data.order.setouttime;
                            console.log(transdate(_this.setouttime));
                            console.log((new Date()).valueOf());
                            var now = (new Date()).valueOf();
                            var outime = transdate(_this.setouttime);
                            if (now >= outime) {
                                _this.nowistimeout = true;
                            }
                            else {
                                _this.nowistimeout = false;
                            }
                            resolve(true);
                        }, function (error2) {
                            reject(false);
                        });
                    })];
            });
        });
    };
    XccontentPage.prototype.setyenum = function () {
        if (!this.syye) {
            var ye = Number(this.data.max_surplus);
            var price = Number(this.data.order.order_amount);
            this.syye = ye > price ? price : ye;
        }
    };
    XccontentPage.prototype.cancleOrder = function (type) {
        if (type === void 0) { type = -1; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示',
                            message: type === -1 ? '退款可能会产生商家损失费，详情请注意退款说明.' : '是否确认退款',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: '坚持退款',
                                    handler: function () {
                                        _this.cancleOrderfn();
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
    XccontentPage.prototype.cancleOrderfn = function () {
        var _this = this;
        this.http.getDataloading(this.http.cancelOrderxc, { order_id: this.orderId }).subscribe(function (res) {
            console.log(res);
            _this.presentAlert(); // TODO: 需要在php文件添加给商家打款的代码
        }, function (error2) { });
    };
    XccontentPage.prototype.setyechange = function () {
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
    XccontentPage.prototype.presentAlert = function () {
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
    XccontentPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var surplus, pwd, kypay, err2_1, price;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        surplus = this.kysyye ? this.syye : 0;
                        if (!(surplus > 0 && !this.isyepayend)) return [3 /*break*/, 7];
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
    XccontentPage.prototype.checksurplus = function (pwd) {
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
    XccontentPage.prototype.syyepay = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover, pwd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_paybox_paybox_component__WEBPACK_IMPORTED_MODULE_7__["PayboxComponent"],
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
    XccontentPage.prototype.payfn = function () {
        this.http.postformdataloading(this.http.acteditpayment, { order_id: this.orderId, pay_code: this.payType, is_pay: 1 }).subscribe(function (res) {
            console.log('余额支付成功');
            console.log(res);
        }, function (error2) {
        });
    };
    XccontentPage.prototype.repurchase = function () {
        this.topage.toPage(2, this.data.goods_list[0].goods_id);
    };
    XccontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xccontent',
            template: __webpack_require__(/*! ./xccontent.page.html */ "./src/app/pages/xccontent/xccontent.page.html"),
            styles: [__webpack_require__(/*! ./xccontent.page.scss */ "./src/app/pages/xccontent/xccontent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _services_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"], _services_payment_list_service__WEBPACK_IMPORTED_MODULE_3__["PaymentListService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _services_topage_service__WEBPACK_IMPORTED_MODULE_8__["TopageService"]])
    ], XccontentPage);
    return XccontentPage;
}());

function transdate(endTime) {
    var date = new Date();
    date.setFullYear(endTime.substring(0, 4));
    date.setMonth(endTime.substring(5, 7) - 1);
    date.setDate(endTime.substring(8, 10));
    date.setHours(endTime.substring(11, 13));
    date.setMinutes(endTime.substring(14, 16));
    date.setSeconds(endTime.substring(17, 19));
    return Date.parse(date.toDateString());
}


/***/ })

}]);
//# sourceMappingURL=pages-xccontent-xccontent-module.js.map