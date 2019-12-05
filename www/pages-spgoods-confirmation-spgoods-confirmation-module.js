(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-spgoods-confirmation-spgoods-confirmation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/selete-address/selete-address.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/selete-address/selete-address.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-contactlists (setItem)=\"clickitem($event)\" (addNew)=\"addNew()\"></app-contactlists>\n<div padding>\n  <ion-button color=\"danger\" expand=\"block\" shape=\"round\" (click)=\"close()\">确定</ion-button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>确认订单</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!--<app-pagetitle [myname]=\"'收货人信息'\" [smpadding]=\"true\"></app-pagetitle>-->\r\n  <div class=\"shperson-box\">\r\n    <div class=\"ts-box\" *ngIf=\"!activePerson || activePerson.length == 0\" (click)=\"seleteAddress()\">请选择收货人</div>\r\n    <ion-list inset=\"true\" line=\"none\">\r\n      <ion-item *ngFor=\"let item of activePerson\" (click)=\"seleteAddress()\" lines=\"none\">\r\n        <ion-label><h2>{{item.name}} <span style=\"font-size: 12px;color:#666;\">{{item.mobile}}</span></h2><p>{{item.address}}</p></ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n  <ion-list *ngFor=\"let item of goodsList; let i = index\" inset=\"true\" line=\"none\">\r\n    <ion-item lines=\"none\">\r\n      <app-pagetitle [myname]=\"item.supname\" [smpadding]=\"true\"></app-pagetitle>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let data of item.goodlist\" lines=\"none\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"http.domain + data.goods_thumb\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3 class=\"goods_title\">{{data.goods_name}}</h3>\r\n        <p class=\"goods_title\">{{data.goods_attr | goodsattr}}</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"end-price\">\r\n        <span>{{data.formated_goods_price}}</span>\r\n        <span>×{{data.goods_number}}</span>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"allowusebonus == 1 && item.redbag && item.redbag.length > 0\" lines=\"none\">\r\n      <select name=\"\" id=\"\" class=\"myselect\" [(ngModel)]=\"changebonus[i]\"\r\n              (change)=\"changeYhq(item['supplier_id'], i)\" placeholder=\"使用优惠券\">\r\n        <option value=\"\" selected>不使用优惠券</option>\r\n        <option *ngFor=\"let hbitem of item.redbag\" [value]=\"hbitem.bonus_id\">{{hbitem.type_name}}[{{hbitem.type_money}}]</option>\r\n      </select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>备注</ion-label>\r\n      <ion-input placeholder=\"如果需要请备注\" [(ngModel)]=\"bzarr[i]\"></ion-input>\r\n    </ion-item>\r\n    <!--<ion-item>-->\r\n      <!--<ion-label>使用线下优惠券</ion-label>-->\r\n      <!--<ion-toggle [(ngModel)]=\"isxxyhq[i]\"></ion-toggle>-->\r\n    <!--</ion-item>-->\r\n    <!--<ion-item *ngIf=\"isxxyhq[i]\" class=\"xxyhqbox\">-->\r\n      <!--<div class=\"left\">-->\r\n        <!--<input type=\"text\" [(ngModel)]=\"xxyhq[i]\" placeholder=\"请输入优惠券编码\">-->\r\n      <!--</div>-->\r\n      <!--<div class=\"right\">-->\r\n        <!--<ion-button expand=\"full\" (click)=\"subyhq(i, item.redbag[0]['supplier_id'])\">确定</ion-button>-->\r\n      <!--</div>-->\r\n    <!--</ion-item>-->\r\n    <ion-item *ngIf=\"item.zhekou\" lines=\"none\">\r\n      <div class=\"goods_title\" [innerHTML]=\"assembleHTML(item.zhekou.your_discount)\"></div>\r\n    </ion-item>\r\n    <!--<ion-item lines=\"none\">-->\r\n      <!--<span class=\"goods_title\">运费: </span>-->\r\n      <!--<div class=\"goods_title\" slot=\"end\" >-->\r\n        <!--&lt;!&ndash;{{item.shipping.shipping_desc}}&ndash;&gt;-->\r\n        <!--<span *ngIf=\"item.shipping && item.shipping.shipping_fee && item.shipping.format_shipping_fee && item.shipping.format_shipping_fee != '0.00'\">-->\r\n          <!--{{item.shipping.format_shipping_fee}}-->\r\n        <!--</span>-->\r\n        <!--<span *ngIf=\"!item.shipping.shipping_fee || item.shipping.format_shipping_fee == '0.00'\">-->\r\n          <!--包邮-->\r\n        <!--</span>-->\r\n      <!--</div>-->\r\n    <!--</ion-item>-->\r\n  </ion-list>\r\n  <ion-list *ngIf=\"pricearr\" inset=\"true\">\r\n    <ion-item  *ngFor=\"let item of pricearr['hdarr']\">\r\n      <ion-label>{{item.key}}</ion-label>\r\n      <div class=\"end\">{{item.value}}</div>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list *ngIf=\"pricearr\" inset=\"true\">\r\n    <ion-item  *ngFor=\"let item of pricearr['pricearr']; let i = index\">\r\n      <ion-label>{{item.key}}</ion-label>\r\n      <div class=\"end\" [ngClass]=\"{'red': i > 1}\">{{item.value}}</div>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"allowusesurplus == 1 && yoursurplusnum > 0\" inset=\"true\" line=\"none\">\r\n    <ion-item>\r\n      <ion-label>使用余额</ion-label>\r\n      <ion-toggle [(ngModel)]=\"kysyye\" (ionChange)=\"setissyye()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"kysyye\">\r\n      <ion-label>使用余额</ion-label>\r\n      <ion-input type=\"number\" mode=\"ios\" (ionChange)=\"setyechange()\" [max]=\"yoursurplus\" min=\"0\" [(ngModel)]=\"syye\" color=\"success\"></ion-input>\r\n      <ion-note>元</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <small>您当前的可用余额为{{yoursurplus}}</small>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list inset=\"true\" line=\"none\" *ngIf=\"payList && payList.length > 0\">\r\n    <ion-radio-group [(ngModel)]=\"payType\">\r\n      <ion-list-header>\r\n        支付方式\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let item of payList\" lines=\"none\" class=\"zftype\">\r\n        <ion-label><img [src]=\"item.pay_code == 'alipay' ? './assets/zfb.svg' : './assets/wechartpay.svg'\" alt=\"\">{{item.pay_name}}</ion-label>\r\n        <ion-radio slot=\"end\" value=\"{{item.pay_id}}\" color=\"success\" mode=\"md\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <app-footer [type]=\"3\" *ngIf=\"total\" [allprice]=\"total.amount_formated\" (sub)=\"submit($event)\"></app-footer>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/components/selete-address/selete-address.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/selete-address/selete-address.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZXRlLWFkZHJlc3Mvc2VsZXRlLWFkZHJlc3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/selete-address/selete-address.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/selete-address/selete-address.component.ts ***!
  \***********************************************************************/
/*! exports provided: SeleteAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleteAddressComponent", function() { return SeleteAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contactlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contactlist.service */ "./src/app/services/contactlist.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var SeleteAddressComponent = /** @class */ (function () {
    function SeleteAddressComponent(contactlist, modalController) {
        this.contactlist = contactlist;
        this.modalController = modalController;
    }
    SeleteAddressComponent.prototype.ngOnInit = function () { };
    SeleteAddressComponent.prototype.clickitem = function (item) {
        this.contactlist.setActive(item, 1);
    };
    SeleteAddressComponent.prototype.close = function () {
        this.modalController.dismiss();
    };
    SeleteAddressComponent.prototype.addNew = function () {
        this.close();
    };
    SeleteAddressComponent.ctorParameters = function () { return [
        { type: _services_contactlist_service__WEBPACK_IMPORTED_MODULE_2__["ContactlistService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    SeleteAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selete-address',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selete-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/selete-address/selete-address.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selete-address.component.scss */ "./src/app/components/selete-address/selete-address.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contactlist_service__WEBPACK_IMPORTED_MODULE_2__["ContactlistService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], SeleteAddressComponent);
    return SeleteAddressComponent;
}());



/***/ }),

/***/ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/spgoods-confirmation/spgoods-confirmation.module.ts ***!
  \***************************************************************************/
/*! exports provided: SpgoodsConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpgoodsConfirmationPageModule", function() { return SpgoodsConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _spgoods_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spgoods-confirmation.page */ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_selete_address_selete_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/selete-address/selete-address.component */ "./src/app/components/selete-address/selete-address.component.ts");










var routes = [
    {
        path: '',
        component: _spgoods_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["SpgoodsConfirmationPage"]
    }
];
var SpgoodsConfirmationPageModule = /** @class */ (function () {
    function SpgoodsConfirmationPageModule() {
    }
    SpgoodsConfirmationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_spgoods_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["SpgoodsConfirmationPage"], _components_selete_address_selete_address_component__WEBPACK_IMPORTED_MODULE_9__["SeleteAddressComponent"]],
            entryComponents: [_components_selete_address_selete_address_component__WEBPACK_IMPORTED_MODULE_9__["SeleteAddressComponent"]]
        })
    ], SpgoodsConfirmationPageModule);
    return SpgoodsConfirmationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ts-box {\n  height: 40px;\n  line-height: 40px;\n  background-color: var(--ion-color-light);\n  text-align: center;\n  font-size: var(--ion-sm-text);\n}\n.ts-box:active {\n  background-color: var(--ion-color-light-tint);\n}\n.end-price {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n.end-price span {\n  display: block;\n  text-align: right;\n}\n.goods_title {\n  white-space: normal;\n  font-size: var(--ion-sm-text);\n}\n.myselect {\n  border: 1px solid var(--ion-color-light);\n  background: none;\n  width: 100%;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 5px;\n  outline: none;\n}\nion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\n.ts-content {\n  width: 100%;\n  overflow: hidden;\n}\n.ts-content .zjts-box {\n  text-align: right;\n  margin-left: -30px;\n}\n.ts-content .zjts-box > ul {\n  margin-left: -10px;\n}\n.ts-content .zjts-box .order_total_li {\n  list-style: none;\n}\nion-content {\n  --background: var(--ion-gray-background-color);\n}\nion-content ion-list ion-item {\n  --border-width: 0;\n}\nion-content .list-ios.list-inset {\n  border-radius: 7px;\n}\nion-content .end.red {\n  color: var(--ion-color-danger);\n}\n.xxyhqbox {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.xxyhqbox .left {\n  flex: 1;\n  height: 2.1em;\n}\n.xxyhqbox .left input {\n  width: 100%;\n  font-size: var(--ion-sm-text);\n  margin-top: 4px;\n  margin-bottom: 4px;\n  padding: 4px 10px 6px;\n  box-sizing: border-box;\n  border: 1px solid var(--ion-color-light);\n}\n.zftype ion-label {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.zftype img {\n  width: 25px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zcGdvb2RzLWNvbmZpcm1hdGlvbi9zcGdvb2RzLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwZ29vZHMtY29uZmlybWF0aW9uL3NwZ29vZHMtY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0NGO0FEQUU7RUFDRSw2Q0FBQTtBQ0VKO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUNFRjtBRERFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDR0o7QURBQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUNHRjtBRERBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFHQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNJRjtBREZBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLRjtBREhBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDTUY7QURMRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNPSjtBRE5JO0VBQ0Usa0JBQUE7QUNRTjtBRE5JO0VBQ0UsZ0JBQUE7QUNRTjtBREhBO0VBQ0UsOENBQUE7QUNNRjtBREpJO0VBQ0UsaUJBQUE7QUNNTjtBREhFO0VBQ0Usa0JBQUE7QUNLSjtBREhFO0VBQ0UsOEJBQUE7QUNLSjtBREZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0tGO0FESkU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtBQ01KO0FETEk7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLHNCQUFBO0VBQ0Esd0NBQUE7QUNPTjtBRERFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0lKO0FERkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZ29vZHMtY29uZmlybWF0aW9uL3NwZ29vZHMtY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cy1ib3gge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbiAgfVxyXG59XHJcbi5lbmQtcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4uZ29vZHNfdGl0bGUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbn1cclxuLm15c2VsZWN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxufVxyXG4udHMtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAuemp0cy1ib3gge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICAmPnVsIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLm9yZGVyX3RvdGFsX2xpIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5saXN0LWlvcy5saXN0LWluc2V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbiAgLmVuZC5yZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIH1cclxufVxyXG4ueHh5aHFib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAubGVmdCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAyLjFlbTtcclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgcGFkZGluZzogNHB4IDEwcHggNnB4O1xyXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi56ZnR5cGUge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn0iLCIudHMtYm94IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbn1cbi50cy1ib3g6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuXG4uZW5kLXByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZW5kLXByaWNlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5nb29kc190aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xufVxuXG4ubXlzZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xufVxuXG4udHMtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRzLWNvbnRlbnQgLnpqdHMtYm94IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcbn1cbi50cy1jb250ZW50IC56anRzLWJveCA+IHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLnRzLWNvbnRlbnQgLnpqdHMtYm94IC5vcmRlcl90b3RhbF9saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5pb24tY29udGVudCAubGlzdC1pb3MubGlzdC1pbnNldCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbmlvbi1jb250ZW50IC5lbmQucmVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4ueHh5aHFib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ueHh5aHFib3ggLmxlZnQge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDIuMWVtO1xufVxuLnh4eWhxYm94IC5sZWZ0IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcGFkZGluZzogNHB4IDEwcHggNnB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnpmdHlwZSBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uemZ0eXBlIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.ts ***!
  \*************************************************************************/
/*! exports provided: SpgoodsConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpgoodsConfirmationPage", function() { return SpgoodsConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/contactlist.service */ "./src/app/services/contactlist.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _components_selete_address_selete_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/selete-address/selete-address.component */ "./src/app/components/selete-address/selete-address.component.ts");
/* harmony import */ var _components_paybox_paybox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/paybox/paybox.component */ "./src/app/components/paybox/paybox.component.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/ordersuccess.service */ "./src/app/services/ordersuccess.service.ts");
/* harmony import */ var _services_payment_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/payment-list.service */ "./src/app/services/payment-list.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");














var SpgoodsConfirmationPage = /** @class */ (function () {
    function SpgoodsConfirmationPage(http, route, nav, contactlist, sanitizer, activeroute, modalController, alertController, native, popoverController, orderdata, paylistfn, userfn, topage) {
        this.http = http;
        this.route = route;
        this.nav = nav;
        this.contactlist = contactlist;
        this.sanitizer = sanitizer;
        this.activeroute = activeroute;
        this.modalController = modalController;
        this.alertController = alertController;
        this.native = native;
        this.popoverController = popoverController;
        this.orderdata = orderdata;
        this.paylistfn = paylistfn;
        this.userfn = userfn;
        this.topage = topage;
    }
    SpgoodsConfirmationPage.prototype.ngOnInit = function () {
        this.reset();
        this.payList = this.paylistfn.getList();
        if (this.payList.length > 0) {
            this.payType = this.payList[0]['pay_id'];
        }
        this.bonusList = [];
        this.bzarr = [];
    };
    SpgoodsConfirmationPage.prototype.reset = function () {
        this.goodsList = [];
        this.changebonus = [];
        this.isxxyhq = [];
        this.xxyhq = [];
        this.pricearr = [];
        this.allowusesurplus = 0;
        // this.payList = [];
        this.total = 0;
        this.kysyye = false;
        var params = this.activeroute.snapshot.queryParams;
        this.id = params['catid'];
    };
    SpgoodsConfirmationPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.contactlist.getActive().then(function (res) {
            _this.activePerson = res;
            if (_this.activePerson.length > 0) {
                console.log(_this.activePerson);
                if (_this.id) {
                    _this.idlist = _this.id.split(',');
                    _this.getContent();
                }
                else {
                    _this.goBack();
                }
            }
        });
    };
    SpgoodsConfirmationPage.prototype.getContent = function (type) {
        var _this = this;
        var idlist = this.idlist;
        var obj = {
            address_id: this.activePerson[0] ? this.activePerson[0]['address_id'] : -1,
            sel_cartgoods: idlist
        };
        this.http.postformdata(this.http.qrorder, obj).subscribe(function (res) {
            console.log(res);
            if (!res['data']['goods_list']) {
                // this.alertfn();
                _this.goBack();
            }
            _this.goodsList = res['data']['goods_list'];
            _this.total = res['data']['total'];
            _this.order = res['data']['order'];
            _this.pricearr = res.data.pricearr;
            // if (res.data.is_surplus_open != 0) {
            //   this.kysyye = true;
            // }
            if (!type) {
                _this.allowusebonus = res['data']['allow_use_bonus'];
                // this.allowusesurplus = res['data']['allow_use_surplus']
                // this.allprice = res['data']['shopping_money'];
                _this.config = res['data']['config'];
                _this.yoursurplus = res.data.your_surplus;
                _this.yoursurplusnum = Number(_this.yoursurplus);
                _this.userfn.upData('your_surplus', _this.yoursurplusnum);
            }
            if (_this.payList.length == 0) {
                console.log('获得数据');
                // this.payList = res['data']['payment_list'];
                _this.paylistfn.setList(res['data']['payment_list']);
                console.log(_this.payList);
                _this.payType = _this.payList[0]['pay_id'];
            }
            for (var i = 0, j = _this.goodsList.length; i < j; i++) {
                _this.changebonus[i] = '';
            }
            _this.syye = _this.yoursurplusnum > _this.total.amount ? _this.total.amount : _this.yoursurplusnum;
            // for(let i = 0; i < this.payList.length; i++) {
            //   if (this.payList[i].pay_code === 'balance') {
            //     this.payList.splice(i, 1);
            //     break;
            //   }
            // }
            // if (goodslist && goodslist[0]) {
            //   const data = goodslist[0]['goodlist'][0];
            //   const suppid = data['supplier_id'];
            //   const recid = data['rec_id'];
            //   this.getallprice(recid, suppid);
            // }
        }, function (error2) { });
    };
    // getallprice (recid, suppid) {
    //   this.http.getData('flow.php?step=select_shipping', {recid: recid, suppid: suppid}).subscribe(res => {
    //     console.log(res);
    //     this.zjts = res['data']['content'];
    //   });
    // }
    SpgoodsConfirmationPage.prototype.changeYhq = function (id, index) {
        // if (this.isxxyhq[index]) {
        //   this.isxxyhq[index] = false;
        // }
        console.log(this.changebonus);
        // const arr = this.changebonus.filter(res => {
        //   if (res) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // })
        // console.log(arr);
        var obj = {
            bonus: this.changebonus[index],
            sel_cartgoods: this.idlist,
            suppid: id,
        };
        this.setHttp(this.http.changebonus, obj);
        this.bonusList[id] = this.changebonus[index];
    };
    SpgoodsConfirmationPage.prototype.subyhq = function (i, id) {
        if (this.changebonus[i]) {
            this.changebonus[i] = '';
        }
        var yhq = this.xxyhq[i];
        console.log(yhq);
        var obj = {
            bonus_sn: yhq,
            sel_cartgoods: this.idlist,
            suppid: id,
        };
        this.setHttp(this.http.setbonussn, obj);
    };
    SpgoodsConfirmationPage.prototype.seleteAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_selete_address_selete_address_component__WEBPACK_IMPORTED_MODULE_8__["SeleteAddressComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        if (this.activePerson.length > 0) {
                            this.getContent(1);
                        }
                        else {
                            this.reset();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpgoodsConfirmationPage.prototype.goBack = function () {
        this.nav.back();
    };
    SpgoodsConfirmationPage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    SpgoodsConfirmationPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var surplus, pwd, pwdright, err2_1, kypay, err2_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        surplus = this.kysyye ? this.syye : 0;
                        if (!(surplus > 0)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.syyepay()];
                    case 1:
                        pwd = _a.sent();
                        console.log(pwd);
                        if (!!pwd) return [3 /*break*/, 2];
                        return [2 /*return*/, false];
                    case 2:
                        pwdright = false;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.yzpaypwd(pwd)];
                    case 4:
                        pwdright = (_a.sent());
                        return [3 /*break*/, 6];
                    case 5:
                        err2_1 = _a.sent();
                        pwdright = false;
                        return [3 /*break*/, 6];
                    case 6:
                        if (!pwdright) { // 密码不争取
                            return [2 /*return*/, false];
                        }
                        kypay = false;
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, this.checksurplus()];
                    case 8:
                        kypay = (_a.sent());
                        return [3 /*break*/, 10];
                    case 9:
                        err2_2 = _a.sent();
                        kypay = false;
                        return [3 /*break*/, 10];
                    case 10:
                        if (!kypay) {
                            this.native.presentAlert('余额不足!');
                            return [2 /*return*/, false];
                        }
                        console.log(this.syye);
                        _a.label = 11;
                    case 11: return [3 /*break*/, 12];
                    case 12:
                        this.paysuccess(surplus);
                        // : todo 调用支付还未做
                        // alert('调用支付还未做')
                        console.log('准备唤醒支付');
                        return [2 /*return*/];
                }
            });
        });
    };
    SpgoodsConfirmationPage.prototype.checksurplus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.postformdataloading(_this.http.checksurplus, { surplus: _this.total.amount_formated }).subscribe(function (res) {
                            console.log('余额足够');
                            resolve(true);
                        }, function (error2) {
                            reject(false);
                        });
                    })];
            });
        });
    };
    SpgoodsConfirmationPage.prototype.syyepay = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover, pwd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_paybox_paybox_component__WEBPACK_IMPORTED_MODULE_9__["PayboxComponent"],
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
    SpgoodsConfirmationPage.prototype.yzpaypwd = function (password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.postformdataloading(_this.http.yzpaypwd, { password: password }).subscribe(function (res) {
                            console.log(res);
                            resolve(true);
                        }, function (error2) {
                            console.log(error2);
                            reject(false);
                        });
                    })];
            });
        });
    };
    SpgoodsConfirmationPage.prototype.paysuccess = function (surplus) {
        var _this = this;
        if (surplus === void 0) { surplus = 0; }
        var bonusarr = []; // 红包列表
        this.changebonus.map(function (res) {
            if (res) {
                bonusarr.push(res);
            }
        });
        var bzarr = []; // 备注列表
        this.bzarr.map(function (res, index) {
            if (res) {
                bzarr[_this.goodsList[index]['supplier_id']] = res;
            }
        });
        var obj = {
            sel_cartgoods: this.idlist,
            // how_oos, 缺货处理
            // card_message, // 贺卡内容
            // inv_type, 发票信息
            // inv_payee,
            // inv_content,
            postscript: JSON.stringify(bzarr),
            integral: 0,
            bonus: JSON.stringify(this.bonusList),
            bonus_sn: this.xxyhq,
            surplus: surplus,
            payment: this.payType
        };
        this.http.postformdataloading(this.http.scorder, obj).subscribe(function (res) {
            console.log(res);
            _this.orderdata.setData(res.data);
            bonusarr.map(function (res) {
                _this.goodsList.map(function (goodsdata) {
                    if (!goodsdata['redbag']) {
                        return;
                    }
                    var redbag = goodsdata['redbag'];
                    for (var i = 0; i < redbag.length; i++) {
                        if (redbag[i].bonus_id == res) {
                            redbag.splice(i, 1);
                            return;
                        }
                    }
                });
            });
            _this.orderId = res.data.order.order_id;
            _this.getPaymsg(res.data.order.order_id, res.data.order.order_sn);
            // this.route.navigate(['/ordersuccess'], {queryParams: {type: 1}});
        }, function (error2) { });
    };
    SpgoodsConfirmationPage.prototype.getPaymsg = function (order_id, order_sn) {
        var _this = this;
        var pay_code;
        for (var index = 0; index < this.payList.length; index++) {
            var element = this.payList[index];
            if (element.pay_id == this.payType) {
                console.log(element);
                pay_code = element['pay_code'];
                break;
            }
        }
        this.http.postformdataloading(this.http.acteditpayment, { order_id: order_id, pay_code: pay_code, is_pay: 1 }).subscribe(function (res) {
            console.log(pay_code);
            var gopay = true;
            var ispay = function () {
                setTimeout(function () {
                    if (gopay) {
                        _this.http.postformdataloading(_this.http.acteditpayment2, { order_id: order_id }).subscribe(function (res) {
                            _this.route.navigate(['/ordersuccess'], { queryParams: { type: 1 } });
                        }, function (err) {
                            // alert(JSON.stringify(err));
                            _this.closeOrder(order_id, order_sn);
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
                    _this.closeOrder(order_id, order_sn);
                }).finally(function () {
                    gopay = false;
                });
            }
            else {
                _this.native.wechatpayment(res.result).then(function (res) {
                    _this.getHttpayend(order_id, order_sn);
                }).catch(function (err) {
                    _this.closeOrder(order_id, order_sn);
                }).finally(function () {
                    gopay = false;
                });
            }
        }, function (error2) {
        });
    };
    SpgoodsConfirmationPage.prototype.closeOrder = function (order_id, order_sn) {
        this.topage.toPage(12, order_sn, -1);
        // this.http.postformdata(this.http.actionacteditpaymentclose, {order_id}).subscribe(res => {}, err => {});
    };
    SpgoodsConfirmationPage.prototype.getHttpayend = function (order_id, order_sn) {
        this.route.navigate(['/ordersuccess'], { queryParams: { type: 1 } });
        this.http.postformdataloading(this.http.acteditpayment2, { order_id: order_id }).subscribe(function (res) {
        }, function (err) {
            // this.topage.toPage(12, order_sn, -1);
        });
    };
    SpgoodsConfirmationPage.prototype.setPrice = function (res) {
        this.total = res.total;
        this.pricearr = res.pricearr;
        if (res.surplus) {
            this.syye = res.surplus;
        }
        else if (res.total.amount) {
            this.syye = res.total.amount;
        }
    };
    SpgoodsConfirmationPage.prototype.setissyye = function () {
        this.setyenum();
    };
    SpgoodsConfirmationPage.prototype.setyechange = function () {
        var _this = this;
        if (this.syyeset) {
            clearTimeout(this.syyeset);
            this.syyeset = null;
        }
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
        this.syyeset = setTimeout(function () {
            _this.syyeset = null;
            _this.setissyye();
        }, 500);
    };
    SpgoodsConfirmationPage.prototype.setyenum = function () {
        var obj = {
            surplus: this.kysyye ? this.syye : 0
        };
        this.setHttp(this.http.changesurplus, obj);
    };
    SpgoodsConfirmationPage.prototype.setHttp = function (src, obj) {
        var _this = this;
        // this.order['bonus_id'] = this.changebonus[0];
        var obj1 = {
            sel_cartgoods: this.idlist,
            order: JSON.stringify(this.order)
        };
        this.http.getpostformdata(src, obj, obj1).subscribe(function (res) {
            console.log(res);
            _this.setPrice(res);
            if (res['order']) {
                _this.order = res['order'];
            }
            // this.total = res.total;
            // this.pricearr = res.pricearr;
        }, function (error2) { });
    };
    SpgoodsConfirmationPage.prototype.alertfn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示!',
                            message: '没有找到订单商品!!!',
                            buttons: [
                                {
                                    text: '确定',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.goBack();
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
    SpgoodsConfirmationPage.ctorParameters = function () { return [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__["ContactlistService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_10__["NativeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
        { type: _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_11__["OrdersuccessService"] },
        { type: _services_payment_list_service__WEBPACK_IMPORTED_MODULE_12__["PaymentListService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_1__["TopageService"] }
    ]; };
    SpgoodsConfirmationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-spgoods-confirmation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spgoods-confirmation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spgoods-confirmation.page.scss */ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.scss")).default]
        })
        // : todo 暂未做发票
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__["ContactlistService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_10__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_11__["OrdersuccessService"], _services_payment_list_service__WEBPACK_IMPORTED_MODULE_12__["PaymentListService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_1__["TopageService"]])
    ], SpgoodsConfirmationPage);
    return SpgoodsConfirmationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-spgoods-confirmation-spgoods-confirmation-module.js.map