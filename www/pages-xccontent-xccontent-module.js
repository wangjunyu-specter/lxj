(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-xccontent-xccontent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/xccontent/xccontent.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/xccontent/xccontent.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-07-08 22:01:44\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-13 15:06:19\n * @Description: 行程订单详情\n -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>我的行程</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content\n     pullingIcon=\"arrow-dropdown\"\n     pullingText=\"Pull to refresh\"\n     refreshingSpinner=\"circles\"\n     refreshingText=\"Refreshing...\">\n  </ion-refresher-content>\n</ion-refresher>\n<!-- <div class=\"top\" *ngIf=\"data\">\n  <div class=\"status\" *ngIf=\"data.order.order_status !== '已取消' && data.order.order_status !== '已完成'\">\n    <span *ngIf=\"data.order.pay_status === '未付款'\">等待买家付款</span>\n    <p *ngIf=\"data.order.pay_status === '未付款'\">剩{{endtime}}自动关闭</p>\n    <span *ngIf=\"data.order.pay_status !== '未付款' && data.order.shipping_status == '未发货' || data.order.shipping_status == '配货中'\">\n      请等待商家确认\n    </span>\n    <span *ngIf=\"data.order.pay_status !== '未付款' && data.order.shipping_status == '已发货'\">\n      等待出行\n    </span>\n    <span *ngIf=\"data.order.pay_status !== '未付款' && data.order.shipping_status == '收货确认'\">\n      已完成\n    </span>\n  </div>\n  <div class=\"status\" *ngIf=\"data.order.order_status === '已取消' || data.order.order_status === '已完成'\">\n      <span>\n        <img *ngIf=\"data.order.order_status === '已完成'\" src=\"../../../assets/icon/gou.svg\" alt=\"\">\n        <img class=\"cancle\" *ngIf=\"data.order.order_status === '已取消'\" src=\"../../../assets/icon/cancle.svg\" alt=\"\">\n        订单{{data.order.order_status}}\n      </span>\n    <span margin-top><ion-button size=\"small\" color=\"secondary\" (click)=\"repurchase()\">再次购买</ion-button></span>\n  </div>\n</div> -->\n<div class=\"top\" *ngIf=\"data\">\n    <div class=\"status\">\n      <span *ngIf=\"(data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status == '0'\">等待买家付款</span>\n      <p *ngIf=\"(data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status == '0'\">剩{{endtime}}自动关闭</p>\n      <span>\n        <img *ngIf=\"data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status == '2'\" src=\"../../../assets/icon/gou.svg\" alt=\"\">\n        <img class=\"cancle\" *ngIf=\"data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status == '0'\" src=\"../../../assets/icon/cancle.svg\" alt=\"\">\n      </span>\n      <span>{{data.order | orderstatus: 1}}</span>\n      <span margin-top \n      *ngIf=\"data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status == '2' || \n      data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status == '0'\"><ion-button size=\"small\" color=\"secondary\" (click)=\"toPagefn(2, data.goods_list[0].goods_id)\">再次购买</ion-button></span>\n    </div>\n  </div>\n<div *ngIf=\"data\" class=\"goods-content\" padding-bottom>\n  <app-ordercontentgoods [goods_list]=\"data.goods_list\" [shopname]=\"data.order.referer\" [supplier_id]=\"data.order.supplier_id\"></app-ordercontentgoods>\n  <ion-list no-margin>\n    <ion-item *ngFor=\"let item of data.goods_list[0].goods_attr | xccontentsplit\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">{{item[0]}}</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{item[1]}}</ion-note>\n    </ion-item>\n  </ion-list>\n  <div class=\"line\"></div>\n  <ion-list lines=\"none\" no-padding no-margin>\n    <ion-item lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">商品总价</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_goods_amount}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.extension_code === 'group_buy'\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">保证金</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_goods_amount}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.discount != 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">折扣</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.discount}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.tax != 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">发票税额</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.tax}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.insure_fee > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">保价费用</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.insure_fee}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.pay_fee > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">手续费</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.pay_fee}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.money_paid > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">已付金额</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_money_paid}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.surplus > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">使用余额</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_surplus}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.integral_money > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">使用积分</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_integral_money}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.order.bonus > 0\" lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">使用红包</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_bonus}}</ion-note>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"data.order.formated_order_amount != '0.00'\">\n      <ion-label><p><ion-text color=\"dark\">应付款总价</ion-text></p></ion-label>\n      <ion-note slot=\"end\">{{data.order.formated_order_amount}}</ion-note>\n    </ion-item>\n    <p *ngIf=\"data.order.extension_code == 'group_buy'\"><ion-text color=\"medum\">（备注：团购如果有保证金，第一次只需支付保证金和相应的支付费用）</ion-text></p>\n  </ion-list>\n</div>\n  <div class=\"tksm\" *ngIf=\"data\" margin-top padding-top padding-bottom>\n    <div class=\"title\" margin-start margin-bottom>联系人</div>\n    <ion-list no-margin>\n      <ion-item lines=\"none\">\n        <ion-label no-padding no-margin><p><ion-text color=\"dark\">联系人</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.username}}</ion-note>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label no-padding no-margin><p><ion-text color=\"dark\">联系电话</ion-text></p></ion-label>\n        <ion-note slot=\"end\">{{data.order.usertel}}</ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"outperson\" *ngIf=\"data && data.outperson\" margin-top padding-top padding-bottom>\n    <div class=\"title\" margin-start margin-bottom>出行人</div>\n    <ion-list no-margin>\n      <ion-item *ngFor=\"let item of data.outperson\">\n        <ion-label>\n          <h3>{{item.consignee}} <span>{{item.mobile || item.tel}}</span></h3>\n          <p><ion-text color=\"dark\">{{item.card}}</ion-text></p>\n        </ion-label>\n        <!--<ion-note slot=\"end\">{{data.order.username}}</ion-note>-->\n      </ion-item>\n    </ion-list>\n  </div>\n<div class=\"tksm\" margin-top padding-top padding-bottom *ngIf=\"data && data.goods_list\">\n  <div class=\"title\" margin-start margin-bottom>退款说明</div>\n  <ion-list no-margin *ngIf=\"data.goods_list[0].istk == 2\">\n    <ion-item *ngFor=\"let item of data.goods_list[0].tksm\" lines=\"none\">\n      <ion-label no-padding no-margin><p><ion-text color=\"dark\">出发前{{item['beforetime']}}天</ion-text></p></ion-label>\n      <ion-note slot=\"end\">扣除{{item['kcbl']}}%</ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.goods_list[0].tksm && data.goods_list[0].tksm.length > 0\" lines=\"none\">\n      <ion-label no-padding no-margin><p><ion-text color=\"dark\">作为卖家损失费</ion-text></p></ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"!data.goods_list[0].tksm || data.goods_list[0].tksm.length === 0\" lines=\"none\">\n      <ion-label no-padding no-margin><p><ion-text color=\"dark\">出行前随时可退</ion-text></p></ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list no-margin *ngIf=\"data.goods_list[0].istk == 1\">\n    <ion-item lines=\"none\">\n      <ion-label><p><ion-text color=\"dark\">商家确认后不支持退款</ion-text></p></ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n<div class=\"order-content\" *ngIf=\"data\" padding margin-top>\n  <div class=\"title\" margin-bottom>订单信息</div>\n  <div class=\"my-item\">\n    <div class=\"left\">订单编号:</div>\n    <div class=\"right\">{{data.order.order_sn}}</div>\n  </div>\n  <div class=\"my-item\" *ngIf=\"data.order.pay_name && data.order.pay_fee != '0.00'\">\n    <div class=\"left\">支付方式:</div>\n    <div class=\"right\">{{data.order.pay_name}}</div>\n  </div>\n  <div class=\"my-item\" *ngIf=\"data.order.pay_fee == '0.00'\">\n    <div class=\"left\">支付方式:</div>\n    <div class=\"right\">余额支付</div>\n  </div>\n  <div class=\"my-item\">\n    <div class=\"left\">创建时间:</div>\n    <div class=\"right\">{{data.order.add_time | time}}</div>\n  </div>\n  <div class=\"my-item\" *ngIf=\"data.order.postscript\">\n    <div class=\"left\">留言:</div>\n    <div class=\"right\">{{data.order.postscript}}</div>\n  </div>\n  <div class=\"my-item\" *ngIf=\"data.order.to_buyer\">\n    <div class=\"left\">商家留言:</div>\n    <div class=\"right\">{{data.order.to_buyer}}</div>\n  </div>\n</div>\n<div class=\"yepay-box\" *ngIf=\"data && data.allow_edit_surplus == 1 && data.canchangepay  && data.order.order_status == '未确认' && data.order.pay_status === '未付款'\" margin-top>\n  <ion-list inset=\"true\" lines=\"none\">\n    <ion-item lines=\"none\">\n      <ion-label>使用余额</ion-label>\n      <ion-toggle [(ngModel)]=\"kysyye\" (ionChange)=\"setyenum()\" color=\"success\" [disabled]=\"isyepayend\"></ion-toggle>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"kysyye\">\n      <ion-label>输入金额</ion-label>\n      <ion-input type=\"number\" mode=\"ios\" (ionChange)=\"setyechange()\"  [disabled]=\"isyepayend\" min=\"0\" [(ngModel)]=\"syye\" color=\"success\"></ion-input>\n      <ion-note>元</ion-note>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label><p>您当前的可用余额为{{data.max_surplus}}</p></ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n<div class=\"zftype\" padding-end margin-top *ngIf=\"data && data.order.order_status == '未确认' && data.order.pay_status === '未付款'\">\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"payType\">\n      <ion-list-header>\n        支付方式\n      </ion-list-header>\n      <ion-item *ngFor=\"let item of payList\" lines=\"none\">\n        <ion-label><img [src]=\"item.pay_code == 'alipay' ? './assets/zfb.svg' : './assets/wechartpay.svg'\" alt=\"\">{{item.pay_name}}</ion-label>\n        <ion-radio color=\"success\" value=\"{{item.pay_code}}\" mode=\"md\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</div>\n<ion-grid class=\"contact-box\" margin-top>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" fill=\"clear\" color=\"dark\" (click)=\"toMessage()\">\n          <img src=\"../../../assets/kf.png\" alt=\"\">\n          联系卖家\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" fill=\"clear\" color=\"dark\" (click)=\"call()\"><img src=\"../../../assets/tel.png\" alt=\"\">拨打电话</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer *ngIf=\"data && (data.order.order_status == '0' || data.order.order_status == '1') && data.order.pay_status === '0'\">\n    <ion-toolbar>\n      <div class=\"footer-bar\">\n        <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder(1)\">取消订单</ion-button>\n        <ion-button size=\"small\" color=\"danger\" (click)=\"submit()\">付款</ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  <ion-footer \n  *ngIf=\"data && data.order.order_status == '1' && (data.order.shipping_status == '0' || data.order.shipping_status == '3') && data.order.pay_status === '2' ||\n  data && data.order.order_status == '2' && data.order.shipping_status == '0' && data.order.pay_status === '2'\">\n    <ion-toolbar>\n      <div class=\"footer-bar\">\n        <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder(1)\">退款</ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  <ion-footer *ngIf=\"data && data.order.order_status == '5' && data.order.shipping_status == '1' && data.order.pay_status === '2'\">\n    <ion-toolbar>\n      <div class=\"footer-bar\">\n        <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder()\">退款</ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  <ion-footer *ngIf=\"data && data.order.order_status == '5' && data.order.shipping_status == '2' && data.order.pay_status === '2'\">\n    <ion-toolbar>\n      <div class=\"footer-bar\">\n        <ion-button size=\"small\" color=\"danger\" *ngIf=\"comment > 0\" (click)=\"toPagefn(16, data.order.order_id, 1)\">评价</ion-button>\n        <ion-button size=\"small\" color=\"light\" (click)=\"cancleOrder()\">售后</ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>");

/***/ }),

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

/***/ "./src/app/pages/xccontent/xccontent.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/xccontent/xccontent.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top {\n  height: 120px;\n  background: var(--ion-color-linegradientback);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  font-size: var(--ion-title);\n}\n.top span {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  color: #fff;\n}\n.top span img {\n  width: 50px;\n  margin-right: 5px;\n}\n.top span img.cancle {\n  width: 20px;\n}\n.top .status p {\n  text-align: center;\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-white);\n}\nion-content {\n  --background: var(--ion-gray-background-color);\n}\n.address-box {\n  background: var(--ion-color-white);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.address-box .icon {\n  margin-right: 10px;\n}\n.address-box .icon span {\n  width: 30px;\n  height: 30px;\n  background: var(--ion-color-linegradient);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n.address-box .icon span img {\n  width: 60%;\n}\n.address-box .right {\n  font-size: var(--ion-text);\n}\n.address-box .right ion-text {\n  font-size: var(--ion-sm-text);\n}\n.goods-content {\n  background: var(--ion-color-white);\n}\n.goods-content ion-item {\n  --min-height: 25px;\n  --inner-padding-top: 0px;\n  --inner-padding-bottom: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n.goods-content ion-item ion-label {\n  padding: 0;\n  margin: 0;\n}\n.goods-content ion-item ion-note {\n  font-size: var(--ion-text);\n}\n.goods-content .line {\n  width: 100%;\n  height: 1px;\n  background-color: var(--ion-color-light);\n  margin: 5px 0;\n}\n.order-content {\n  background: var(--ion-color-white);\n}\n.order-content .title {\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n  border-left: 1px solid var(--ion-color-success);\n  padding-left: 5px;\n}\n.order-content .my-item {\n  margin-bottom: 10px;\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.order-content .my-item:last-of-type {\n  margin-bottom: 0;\n}\n.order-content .my-item .left {\n  width: 65px;\n}\n.zftype {\n  background-color: var(--ion-color-white);\n}\n.zftype ion-label {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.zftype img {\n  width: 25px;\n  margin-right: 10px;\n}\n.yepay-box {\n  background-color: var(--ion-color-white);\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.footer-bar {\n  text-align: right;\n}\n.tksm {\n  background-color: var(--ion-color-white);\n}\n.tksm .title {\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n  border-left: 1px solid var(--ion-color-success);\n  padding-left: 5px;\n}\n.tksm ion-item {\n  --min-height: 30px;\n}\n.outperson {\n  background-color: var(--ion-color-white);\n}\n.outperson .title {\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n  border-left: 1px solid var(--ion-color-success);\n  padding-left: 5px;\n}\n.contact-box {\n  background-color: #fff;\n  font-size: var(--ion-text);\n}\n.contact-box img {\n  width: 26px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy94Y2NvbnRlbnQveGNjb250ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveGNjb250ZW50L3hjY29udGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUo7QURESTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0dOO0FERk07RUFDRSxXQUFBO0FDSVI7QURFSTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQ0FOO0FESUE7RUFDRSw4Q0FBQTtBQ0RGO0FER0E7RUFDRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFHQSxrQkFBQTtBQ0VOO0FERE07RUFDRSxVQUFBO0FDR1I7QURDRTtFQUNFLDBCQUFBO0FDQ0o7QURBSTtFQUNFLDZCQUFBO0FDRU47QURFQTtFQUNFLGtDQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNHTjtBRERJO0VBQ0UsMEJBQUE7QUNHTjtBREFFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7QUNFSjtBREVBO0VBQ0Usa0NBQUE7QUNDRjtBREFFO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtDQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEREk7RUFDRSxXQUFBO0FDR047QURDQTtFQUNFLHdDQUFBO0FDRUY7QURERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNHSjtBRERFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDR0o7QURBQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dGO0FEREE7RUFDRSxpQkFBQTtBQ0lGO0FERkE7RUFDRSx3Q0FBQTtBQ0tGO0FESkU7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtBQ01KO0FESkU7RUFDRSxrQkFBQTtBQ01KO0FESEE7RUFDRSx3Q0FBQTtBQ01GO0FETEU7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtBQ09KO0FESkE7RUFDRSxzQkFBQTtFQUtBLDBCQUFBO0FDR0Y7QURQRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveGNjb250ZW50L3hjY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnRiYWNrKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAmLmNhbmNsZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIC5zdGF0dXMge1xyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG4uYWRkcmVzcy1ib3gge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGluZWdyYWRpZW50KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZ29vZHMtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDI1cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBpb24tbm90ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ub3JkZXItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLm15LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmxlZnQge1xyXG4gICAgICB3aWR0aDogNjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnpmdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICBpb24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi55ZXBheS1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcbi5mb290ZXItYmFyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGtzbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG4ub3V0cGVyc29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxufVxyXG4uY29udGFjdC1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG59IiwiLnRvcCB7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnRiYWNrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG59XG4udG9wIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRvcCBzcGFuIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi50b3Agc3BhbiBpbWcuY2FuY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4udG9wIC5zdGF0dXMgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5hZGRyZXNzLWJveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGRyZXNzLWJveCAuaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5hZGRyZXNzLWJveCAuaWNvbiBzcGFuIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hZGRyZXNzLWJveCAuaWNvbiBzcGFuIGltZyB7XG4gIHdpZHRoOiA2MCU7XG59XG4uYWRkcmVzcy1ib3ggLnJpZ2h0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG59XG4uYWRkcmVzcy1ib3ggLnJpZ2h0IGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59XG5cbi5nb29kcy1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbi5nb29kcy1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiAyNXB4O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG59XG4uZ29vZHMtY29udGVudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uZ29vZHMtY29udGVudCBpb24taXRlbSBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xufVxuLmdvb2RzLWNvbnRlbnQgLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5vcmRlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbi5vcmRlci1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4ub3JkZXItY29udGVudCAubXktaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vcmRlci1jb250ZW50IC5teS1pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ub3JkZXItY29udGVudCAubXktaXRlbSAubGVmdCB7XG4gIHdpZHRoOiA2NXB4O1xufVxuXG4uemZ0eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbi56ZnR5cGUgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnpmdHlwZSBpbWcge1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ueWVwYXktYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cblxuLmZvb3Rlci1iYXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRrc20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuLnRrc20gLnRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi50a3NtIGlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiAzMHB4O1xufVxuXG4ub3V0cGVyc29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbi5vdXRwZXJzb24gLnRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmNvbnRhY3QtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG59XG4uY29udGFjdC1ib3ggaW1nIHtcbiAgd2lkdGg6IDI2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */");

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
/* harmony import */ var src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/xclist.service */ "./src/app/services/xclist.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-07 23:49:04
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 11:26:03
 * @Description: file content
 */









var XccontentPage = /** @class */ (function () {
    function XccontentPage(activeroute, nav, http, native, paymentlist, alertController, popoverController, topage, xcxllist) {
        this.activeroute = activeroute;
        this.nav = nav;
        this.http = http;
        this.native = native;
        this.paymentlist = paymentlist;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.topage = topage;
        this.xcxllist = xcxllist;
    }
    XccontentPage.prototype.ngOnInit = function () {
        this.kysyye = false;
        console.log(this.orderId);
    };
    XccontentPage.prototype.goBack = function () {
        this.nav.back();
    };
    XccontentPage.prototype.ionViewWillEnter = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.orderId = params['id'];
        this.comment = params['comment'] ? Number(params['comment']) : 0;
        var plid = this.xcxllist.getPlorderid(); // 获取上一次评论的订单id
        if (plid && plid == this.orderId && this.comment != 0) {
            this.comment = 0;
        }
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
                            message: type === -1 ? '退款可能会产生商家损失费,详情请注意退款说明,是否确认退款?' : '是否确认退款?',
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
            _this.presentAlert();
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
        var _this = this;
        this.http.postformdataloading(this.http.acteditpayment, { order_id: this.data.order.order_id, pay_code: this.payType, is_pay: 1 }).subscribe(function (res) {
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
    XccontentPage.prototype.getHttpayend = function (order_id) {
        var _this = this;
        this.http.postformdataloading(this.http.acteditpayment2, { order_id: order_id }).subscribe(function (res) {
            _this.getDatahttp();
        }, function (err) {
            _this.native.presentToast('支付失败!');
        });
    };
    // repurchase() {
    //   this.topage.toPage(2, this.data.goods_list[0].goods_id);
    // }
    XccontentPage.prototype.toPagefn = function (type, id) {
        var _a;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        (_a = this.topage).toPage.apply(_a, [type, id].concat(args));
    };
    XccontentPage.prototype.toMessage = function () {
        this.topage.toPage(17, this.data.order.supplier_id, this.data.order.referer, this.data.order.pay_status == '2' ? 2 : 1);
    };
    XccontentPage.prototype.call = function () {
        this.native.callTel(this.data.order.supplier_tel);
    };
    XccontentPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"] },
        { type: _services_payment_list_service__WEBPACK_IMPORTED_MODULE_3__["PaymentListService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_8__["TopageService"] },
        { type: src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_9__["XclistService"] }
    ]; };
    XccontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xccontent',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xccontent.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/xccontent/xccontent.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xccontent.page.scss */ "./src/app/pages/xccontent/xccontent.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _services_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"], _services_payment_list_service__WEBPACK_IMPORTED_MODULE_3__["PaymentListService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _services_topage_service__WEBPACK_IMPORTED_MODULE_8__["TopageService"],
            src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_9__["XclistService"]])
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