(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-spgoods-confirmation-spgoods-confirmation-module"],{

/***/ "./src/app/components/selete-address/selete-address.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/selete-address/selete-address.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-contactlists (setItem)=\"clickitem($event)\" (addNew)=\"addNew()\"></app-contactlists>\n<div padding>\n  <ion-button color=\"danger\" expand=\"block\" shape=\"round\" (click)=\"close()\">确定</ion-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/selete-address/selete-address.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/selete-address/selete-address.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZXRlLWFkZHJlc3Mvc2VsZXRlLWFkZHJlc3MuY29tcG9uZW50LnNjc3MifQ== */"

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
    SeleteAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selete-address',
            template: __webpack_require__(/*! ./selete-address.component.html */ "./src/app/components/selete-address/selete-address.component.html"),
            styles: [__webpack_require__(/*! ./selete-address.component.scss */ "./src/app/components/selete-address/selete-address.component.scss")]
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

/***/ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>确认订单</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!--<app-pagetitle [myname]=\"'收货人信息'\" [smpadding]=\"true\"></app-pagetitle>-->\r\n  <div class=\"shperson-box\">\r\n    <div class=\"ts-box\" *ngIf=\"!activePerson || activePerson.length == 0\" (click)=\"seleteAddress()\">请选择收货人</div>\r\n    <ion-list inset=\"true\" line=\"none\">\r\n      <ion-item *ngFor=\"let item of activePerson\" (click)=\"seleteAddress()\" lines=\"none\">\r\n        <ion-label><h2>{{item.name}} <span style=\"font-size: 12px;color:#666;\">{{item.mobile}}</span></h2><p>{{item.address}}</p></ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n  <ion-list *ngFor=\"let item of goodsList; let i = index\" inset=\"true\" line=\"none\">\r\n    <ion-item lines=\"none\">\r\n      <app-pagetitle [myname]=\"item.supname\" [smpadding]=\"true\"></app-pagetitle>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let data of item.goodlist\" lines=\"none\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"http.domain + data.goods_thumb\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3 class=\"goods_title\">{{data.goods_name}}</h3>\r\n        <p class=\"goods_title\">{{data.goods_attr | goodsattr}}</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"end-price\">\r\n        <span>{{data.formated_goods_price}}</span>\r\n        <span>×{{data.goods_number}}</span>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"allowusebonus == 1 && item.redbag && item.redbag.length > 0\" lines=\"none\">\r\n      <select name=\"\" id=\"\" class=\"myselect\" [(ngModel)]=\"changebonus[i]\"\r\n              (change)=\"changeYhq(item['supplier_id'], i)\" placeholder=\"使用优惠券\">\r\n        <option value=\"\" selected>不使用优惠券</option>\r\n        <option *ngFor=\"let hbitem of item.redbag\" [value]=\"hbitem.bonus_id\">{{hbitem.type_name}}[{{hbitem.type_money}}]</option>\r\n      </select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>备注</ion-label>\r\n      <ion-input placeholder=\"如果需要请备注\" [(ngModel)]=\"bzarr[i]\"></ion-input>\r\n    </ion-item>\r\n    <!--<ion-item>-->\r\n      <!--<ion-label>使用线下优惠券</ion-label>-->\r\n      <!--<ion-toggle [(ngModel)]=\"isxxyhq[i]\"></ion-toggle>-->\r\n    <!--</ion-item>-->\r\n    <!--<ion-item *ngIf=\"isxxyhq[i]\" class=\"xxyhqbox\">-->\r\n      <!--<div class=\"left\">-->\r\n        <!--<input type=\"text\" [(ngModel)]=\"xxyhq[i]\" placeholder=\"请输入优惠券编码\">-->\r\n      <!--</div>-->\r\n      <!--<div class=\"right\">-->\r\n        <!--<ion-button expand=\"full\" (click)=\"subyhq(i, item.redbag[0]['supplier_id'])\">确定</ion-button>-->\r\n      <!--</div>-->\r\n    <!--</ion-item>-->\r\n    <ion-item *ngIf=\"item.zhekou\" lines=\"none\">\r\n      <div class=\"goods_title\" [innerHTML]=\"assembleHTML(item.zhekou.your_discount)\"></div>\r\n    </ion-item>\r\n    <!--<ion-item lines=\"none\">-->\r\n      <!--<span class=\"goods_title\">运费: </span>-->\r\n      <!--<div class=\"goods_title\" slot=\"end\" >-->\r\n        <!--&lt;!&ndash;{{item.shipping.shipping_desc}}&ndash;&gt;-->\r\n        <!--<span *ngIf=\"item.shipping && item.shipping.shipping_fee && item.shipping.format_shipping_fee && item.shipping.format_shipping_fee != '0.00'\">-->\r\n          <!--{{item.shipping.format_shipping_fee}}-->\r\n        <!--</span>-->\r\n        <!--<span *ngIf=\"!item.shipping.shipping_fee || item.shipping.format_shipping_fee == '0.00'\">-->\r\n          <!--包邮-->\r\n        <!--</span>-->\r\n      <!--</div>-->\r\n    <!--</ion-item>-->\r\n  </ion-list>\r\n  <ion-list *ngIf=\"pricearr\" inset=\"true\">\r\n    <ion-item  *ngFor=\"let item of pricearr['hdarr']\">\r\n      <ion-label>{{item.key}}</ion-label>\r\n      <div class=\"end\">{{item.value}}</div>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list *ngIf=\"pricearr\" inset=\"true\">\r\n    <ion-item  *ngFor=\"let item of pricearr['pricearr']; let i = index\">\r\n      <ion-label>{{item.key}}</ion-label>\r\n      <div class=\"end\" [ngClass]=\"{'red': i > 1}\">{{item.value}}</div>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"allowusesurplus == 1 && yoursurplusnum > 0\" inset=\"true\" line=\"none\">\r\n    <ion-item>\r\n      <ion-label>使用余额</ion-label>\r\n      <ion-toggle [(ngModel)]=\"kysyye\" (ionChange)=\"setissyye()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"kysyye\">\r\n      <ion-label>使用余额</ion-label>\r\n      <ion-input type=\"number\" mode=\"ios\" (ionChange)=\"setyechange()\" [max]=\"yoursurplus\" min=\"0\" [(ngModel)]=\"syye\" color=\"success\"></ion-input>\r\n      <ion-note>元</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <small>您当前的可用余额为{{yoursurplus}}</small>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list inset=\"true\" line=\"none\" *ngIf=\"payList && payList.length > 0\">\r\n    <ion-radio-group [(ngModel)]=\"payType\">\r\n      <ion-list-header>\r\n        支付方式\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let item of payList\" lines=\"none\">\r\n        <ion-label>{{item.pay_name}}</ion-label>\r\n        <ion-radio slot=\"start\" value=\"{{item.pay_id}}\" mode=\"md\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <app-footer [type]=\"3\" *ngIf=\"total\" [allprice]=\"total.amount_formated\" (sub)=\"submit($event)\"></app-footer>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ts-box {\n  height: 40px;\n  line-height: 40px;\n  background-color: var(--ion-color-light);\n  text-align: center;\n  font-size: var(--ion-sm-text); }\n  .ts-box:active {\n    background-color: var(--ion-color-light-tint); }\n  .end-price {\n  font-size: 12px;\n  color: var(--ion-color-medium); }\n  .end-price span {\n    display: block;\n    text-align: right; }\n  .goods_title {\n  white-space: normal;\n  font-size: var(--ion-sm-text); }\n  .myselect {\n  border: 1px solid var(--ion-color-light);\n  background: none;\n  width: 100%;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 5px;\n  outline: none; }\n  ion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0; }\n  .ts-content {\n  width: 100%;\n  overflow: hidden; }\n  .ts-content .zjts-box {\n    text-align: right;\n    margin-left: -30px; }\n  .ts-content .zjts-box > ul {\n      margin-left: -10px; }\n  .ts-content .zjts-box .order_total_li {\n      list-style: none; }\n  ion-content {\n  --background: var(--ion-gray-background-color); }\n  ion-content ion-list ion-item {\n    --border-width: 0; }\n  ion-content .list-ios.list-inset {\n    border-radius: 7px; }\n  ion-content .end.red {\n    color: var(--ion-color-danger); }\n  .xxyhqbox {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .xxyhqbox .left {\n    flex: 1;\n    height: 2.1em; }\n  .xxyhqbox .left input {\n      width: 100%;\n      font-size: var(--ion-sm-text);\n      margin-top: 4px;\n      margin-bottom: 4px;\n      padding: 4px 10px 6px;\n      box-sizing: border-box;\n      border: 1px solid var(--ion-color-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zcGdvb2RzLWNvbmZpcm1hdGlvbi9zcGdvb2RzLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7RUFML0I7SUFPSSw2Q0FBNkMsRUFBQTtFQUdqRDtFQUNFLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTtFQUZoQztJQUlJLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtFQUdyQjtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkIsRUFBQTtFQUUvQjtFQUNFLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsV0FBVztFQUdYLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQVksRUFBQTtFQUVkO0VBQ0UsbUJBQWlCO0VBQ2pCLGdCQUFjO0VBQ2Qsa0JBQWdCO0VBQ2hCLGdCQUFjLEVBQUE7RUFFaEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFGbEI7SUFJSSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFMdEI7TUFPTSxrQkFBa0IsRUFBQTtFQVB4QjtNQVVNLGdCQUFnQixFQUFBO0VBS3RCO0VBQ0UsOENBQWEsRUFBQTtFQURmO0lBSU0saUJBQWUsRUFBQTtFQUpyQjtJQVFJLGtCQUFrQixFQUFBO0VBUnRCO0lBV0ksOEJBQThCLEVBQUE7RUFHbEM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTtFQUpyQjtJQU1JLE9BQU87SUFDUCxhQUFhLEVBQUE7RUFQakI7TUFTTSxXQUFXO01BQ1gsNkJBQTZCO01BQzdCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIscUJBQXFCO01BR3JCLHNCQUFzQjtNQUN0Qix3Q0FBd0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZ29vZHMtY29uZmlybWF0aW9uL3NwZ29vZHMtY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cy1ib3gge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbiAgfVxyXG59XHJcbi5lbmQtcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4uZ29vZHNfdGl0bGUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbn1cclxuLm15c2VsZWN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxufVxyXG4udHMtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAuemp0cy1ib3gge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICAmPnVsIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLm9yZGVyX3RvdGFsX2xpIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5saXN0LWlvcy5saXN0LWluc2V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbiAgLmVuZC5yZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIH1cclxufVxyXG4ueHh5aHFib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAubGVmdCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAyLjFlbTtcclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgcGFkZGluZzogNHB4IDEwcHggNnB4O1xyXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_contactlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/contactlist.service */ "./src/app/services/contactlist.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _components_selete_address_selete_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/selete-address/selete-address.component */ "./src/app/components/selete-address/selete-address.component.ts");
/* harmony import */ var _components_paybox_paybox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/paybox/paybox.component */ "./src/app/components/paybox/paybox.component.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/ordersuccess.service */ "./src/app/services/ordersuccess.service.ts");
/* harmony import */ var _services_payment_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/payment-list.service */ "./src/app/services/payment-list.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");













var SpgoodsConfirmationPage = /** @class */ (function () {
    function SpgoodsConfirmationPage(http, route, nav, contactlist, sanitizer, activeroute, modalController, alertController, native, popoverController, orderdata, paylistfn, userfn) {
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
                _this.alertfn();
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
                _this.allowusesurplus = res['data']['allow_use_surplus'];
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
                            component: _components_selete_address_selete_address_component__WEBPACK_IMPORTED_MODULE_7__["SeleteAddressComponent"]
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
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        this.native.presentAlert('暂未开通支付，请选择余额支付');
                        return [2 /*return*/, false];
                    case 13:
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
        console.log('支付成功');
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
            _this.route.navigate(['/ordersuccess'], { queryParams: { type: 1 } });
        }, function (error2) { });
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
    SpgoodsConfirmationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spgoods-confirmation',
            template: __webpack_require__(/*! ./spgoods-confirmation.page.html */ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.html"),
            styles: [__webpack_require__(/*! ./spgoods-confirmation.page.scss */ "./src/app/pages/spgoods-confirmation/spgoods-confirmation.page.scss")]
        })
        // : todo 暂未做发票
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_contactlist_service__WEBPACK_IMPORTED_MODULE_5__["ContactlistService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_9__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_10__["OrdersuccessService"], _services_payment_list_service__WEBPACK_IMPORTED_MODULE_11__["PaymentListService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]])
    ], SpgoodsConfirmationPage);
    return SpgoodsConfirmationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-spgoods-confirmation-spgoods-confirmation-module.js.map