(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-after-sale-after-sale-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/after-sale/after-sale.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/after-sale/after-sale.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-10-22 09:40:41\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-10-28 21:58:22\n * @Description: 售后详情\n -->\n<ion-header>\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>退款/退换详情</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"backShipping\">\n    <ion-item>\n      <ion-label>\n        订单号\n      </ion-label>\n      <ion-note slot=\"end\">\n        {{backShipping.order_sn}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        商品名称\n        <p *ngFor=\"let item of backShipping.goods_list\">\n          {{item.goods_name}}\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        售后类型\n      </ion-label>\n      <ion-note slot=\"end\">\n        <span *ngIf=\"backShipping.back_type == 1\">\n          退货\n        </span>\n        <span *ngIf=\"backShipping.back_type == 2 || backShipping.back_type == 3\">\n          换货\n        </span>\n        <span *ngIf=\"backShipping.back_type == 4\">\n          退款（无需退货）\n        </span>\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  <div *ngIf=\"listBackgoods && listBackgoods['0']\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label>退回商品</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let bgoods of listBackgoods['0'].goods_list\">\n        <ion-label>\n          <div class=\"thconent\">\n            <p>\n              {{bgoods.goods_name}}\n            </p>\n            <div class=\"attr\" *ngIf=\"bgoods.goods_attr\">{{bgoods.goods_attr}}</div>\n            <div class=\"more\">\n              <span>类型</span>\n              <span>退货</span>\n            </div>\n            <div class=\"more\">\n              <span>数量</span>\n              <span>{{bgoods.back_goods_number}}</span>\n            </div>\n            <div class=\"more\">\n              <span> 付款金额</span>\n              <span>{{bgoods.back_goods_money}}</span>\n            </div>\n            <div class=\"more\">\n              <span>退款金额</span>\n              <span>{{bgoods.refund_money_2}}</span>\n            </div>\n            <ion-item>\n              <ion-label>\n                  支付运费\n              </ion-label>\n              <ion-note slot=\"end\">{{backShipping.shipping_fee}}</ion-note>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                  已退运费\n              </ion-label>\n              <ion-note slot=\"end\">{{backShipping.refund_shipping_fee}}</ion-note>\n            </ion-item>\n            <div class=\"more\">\n              <span>处理状态</span>\n              <span>{{bgoods.status_back}}</span>\n            </div>\n            <div class=\"more\">\n              <span>退款状态</span>\n              <span>{{bgoods.status_refund}}</span>\n            </div>\n          </div>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"listBackgoods && listBackgoods['3']\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label>退回商品</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let bgoods of listBackgoods['3'].goods_list\">\n        <ion-label>\n          <div class=\"thconent\">\n            <p>\n              {{bgoods.goods_name}}\n            </p>\n            <div class=\"attr\" *ngIf=\"bgoods.goods_attr\">{{bgoods.goods_attr}}</div>\n            <div class=\"more\">\n              <span>类型</span>\n              <span>申请换货/返修</span>\n            </div>\n            <div class=\"more\">\n              <span>数量</span>\n              <span>{{bgoods.back_goods_number}}</span>\n            </div>\n            <div class=\"more\">\n              <span>处理状态</span>\n              <span>{{bgoods.status_back}}</span>\n            </div>\n          </div>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"listBackgoods && listBackgoods['4']\">\n      <ion-list>\n        <ion-list-header>\n          <ion-label>退回商品</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let bgoods of listBackgoods['4'].goods_list\">\n          <ion-label>\n            <div class=\"thconent\">\n              <p>\n                {{bgoods.goods_name}}\n              </p>\n              <div class=\"attr\" *ngIf=\"bgoods.goods_attr\">{{bgoods.goods_attr}}</div>\n              <div class=\"more\">\n                <span>类型</span>\n                <span>退款（无需退货）</span>\n              </div>\n              <div class=\"more\">\n                <span>数量</span>\n                <span>{{bgoods.back_goods_number}}</span>\n              </div>\n              <div class=\"more\">\n                <span>商品金额</span>\n                <span>{{bgoods.back_goods_money}}</span>\n              </div>\n              <div class=\"more\">\n                <span>处理状态</span>\n                <span>{{bgoods.status_back}}</span>\n              </div>\n            </div>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            付款金额\n          </ion-label>\n          <ion-note slot=\"end\">{{backShipping.refund_money_1}}</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            退款金额\n          </ion-label>\n          <ion-note slot=\"end\">{{backShipping.refund_money_2}}</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n              支付运费\n          </ion-label>\n          <ion-note slot=\"end\">{{backShipping.shipping_fee}}</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n              已退运费\n          </ion-label>\n          <ion-note slot=\"end\">{{backShipping.refund_shipping_fee}}</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n              处理状态\n          </ion-label>\n          <ion-note slot=\"end\">{{backShipping.status_back}}</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n              退款状态\n          </ion-label>\n          <ion-note slot=\"end\">{{backShipping.status_refund}}</ion-note>\n        </ion-item>\n      </ion-list>\n    </div>\n    <p padding-start padding-end *ngIf=\"backShipping && backShipping.refund_desc\">退款说明：{{backShipping.refund_desc}}</p>\n    <!-- <div *ngIf=\"listBackgoods && listBackgoods['1']\">\n        <ion-list>\n          <ion-list-header>\n            <ion-label>退回商品</ion-label>\n          </ion-list-header>\n          <ion-item *ngFor=\"let bgoods of listBackgoods['1'].goods_list\">\n            <ion-label>\n              <div>\n                <div class=\"ts\"></div>\n                <p>\n                  {{bgoods.goods_name}}\n                </p>\n                <div class=\"attr\" *ngIf=\"bgoods.goods_attr\">{{bgoods.goods_attr}}</div>\n                <div class=\"footer\">\n                  <div>\n                    类型:<ion-text color=\"danger\">退货</ion-text>\n                  </div>\n                  <div>\n                    数量:<ion-text color=\"danger\">{{bgoods.back_goods_number}}</ion-text>\n                  </div>\n                </div>\n                <div class=\"more\">\n                  <span>退款金额</span>\n                  <span>{{bgoods.back_goods_money}}</span>\n                </div>\n                <div class=\"more\">\n                  <span>处理状态</span>\n                  <span>{{bgoods.status_back}}</span>\n                </div>\n              </div>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              退款金额\n            </ion-label>\n            <ion-note>{{backShipping.refund_money_1}}</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n                处理状态\n            </ion-label>\n            <ion-note>{{backShipping.status_back}}</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n                退款状态\n            </ion-label>\n            <ion-note>{{backShipping.status_refund}}</ion-note>\n          </ion-item>\n        </ion-list>\n      </div> -->\n  <div *ngIf=\"backShipping && backShipping.back_type != 4 && backShipping.status_back_1 < 1\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label>快递信息（请填写您寄回商品的快递信息）</ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label position=\"fixed\">快递公司</ion-label>\n        <ion-select placeholder=\"请选择快递公司\" [(ngModel)]=\"kddata.shipping_id\" cancelText=\"取消\" okText=\"确定\">\n          <ion-select-option \n          *ngFor=\"let shipping of shippingList\"\n          value=\"{{shipping.shipping_id}}\">\n            {{shipping.shipping_name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">快递运单号</ion-label>\n        <ion-input  [(ngModel)]=\"kddata.invoice_no\" placeholder=\"请输入快递单号\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <ion-button expand=\"block\" color=\"success\" [disabled]=\"backShipping.status_back > 0 && backShipping.status_back < 5\" (click)=\"subKd()\">确定</ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/after-sale/after-sale.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/after-sale/after-sale.module.ts ***!
  \*******************************************************/
/*! exports provided: AfterSalePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterSalePageModule", function() { return AfterSalePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _after_sale_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./after-sale.page */ "./src/app/pages/after-sale/after-sale.page.ts");







var routes = [
    {
        path: '',
        component: _after_sale_page__WEBPACK_IMPORTED_MODULE_6__["AfterSalePage"]
    }
];
var AfterSalePageModule = /** @class */ (function () {
    function AfterSalePageModule() {
    }
    AfterSalePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_after_sale_page__WEBPACK_IMPORTED_MODULE_6__["AfterSalePage"]]
        })
    ], AfterSalePageModule);
    return AfterSalePageModule;
}());



/***/ }),

/***/ "./src/app/pages/after-sale/after-sale.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/after-sale/after-sale.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thconent p {\n  font-size: var(--ion-title);\n}\n.thconent div {\n  font-size: var(--ion-text);\n}\n.thconent .more {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9hZnRlci1zYWxlL2FmdGVyLXNhbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZnRlci1zYWxlL2FmdGVyLXNhbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkJBQUE7QUNBSjtBREVFO0VBQ0UsMEJBQUE7QUNBSjtBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZnRlci1zYWxlL2FmdGVyLXNhbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoY29uZW50IHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICB9XG4gIGRpdiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIH1cbiAgLm1vcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH1cbn0iLCIudGhjb25lbnQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbn1cbi50aGNvbmVudCBkaXYge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbn1cbi50aGNvbmVudCAubW9yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/after-sale/after-sale.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/after-sale/after-sale.page.ts ***!
  \*****************************************************/
/*! exports provided: AfterSalePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterSalePage", function() { return AfterSalePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



/*
 * @Author: wjy-mac
 * @Date: 2019-10-22 09:40:41
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-14 12:06:50
 * @Description: file content
 */



var AfterSalePage = /** @class */ (function () {
    function AfterSalePage(nav, activeroute, http, native) {
        this.nav = nav;
        this.activeroute = activeroute;
        this.http = http;
        this.native = native;
    }
    AfterSalePage.prototype.ngOnInit = function () {
        this.kddata = {
            invoice_no: '',
            shipping_id: ''
        };
    };
    AfterSalePage.prototype.ionViewWillEnter = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.backId = params['id'];
        this.getData();
    };
    AfterSalePage.prototype.goBack = function () {
        this.nav.back();
    };
    AfterSalePage.prototype.getData = function () {
        var _this = this;
        this.http.getDataloading(this.http.zdomain + this.http.backorderdetail, { id: this.backId }).subscribe(function (res) {
            console.log(res);
            var data = res['data'];
            _this.backShipping = data['back_shipping'];
            _this.shippingList = data['shipping_list'];
            _this.listBackgoods = data['list_backgoods'];
            if (_this.backShipping['shipping_id'] > 0) {
                _this.kddata['invoice_no'] = _this.backShipping['invoice_no'];
            }
            if (_this.backShipping['invoice_no']) {
                _this.kddata['shipping_id'] = _this.backShipping['shipping_id'];
            }
        }, function (err2) { });
    };
    AfterSalePage.prototype.subKd = function () {
        var _this = this;
        var obj = Object.assign({ back_id: this.backId }, this.kddata);
        this.http.postformdataloading(this.http.zdomain + this.http.backorderdetailedit, obj).subscribe(function (res) {
            console.log(res);
            _this.native.presentToast(res['msg']);
        }, function (err2) { });
    };
    AfterSalePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_1__["NativeService"] }
    ]; };
    AfterSalePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-after-sale',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./after-sale.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/after-sale/after-sale.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./after-sale.page.scss */ "./src/app/pages/after-sale/after-sale.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_native_service__WEBPACK_IMPORTED_MODULE_1__["NativeService"]])
    ], AfterSalePage);
    return AfterSalePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-after-sale-after-sale-module.js.map