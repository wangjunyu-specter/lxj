(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cancel-order-cancel-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel-order/cancel-order.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel-order/cancel-order.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-10-17 17:47:02\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-10-23 11:38:39\n * @Description: file content\n -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>退换/售后</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"data.back_type\" name=\"back_type\">\n      <ion-list-header>\n        <ion-label>服务类型:</ion-label>\n      </ion-list-header>\n      <ion-item *ngIf=\"!issh\">\n        <ion-label>退款（无需退货）</ion-label>\n        <ion-radio slot=\"start\" value=\"biff\" value=\"4\"></ion-radio>\n      </ion-item>\n      <ion-item *ngIf=\"data['order_all'] != 1 && !issh\">\n        <ion-label>退货退款</ion-label>\n        <ion-radio slot=\"start\" value=\"griff\" value=\"1\"></ion-radio>\n      </ion-item>\n      <ion-item *ngIf=\"data['order_all'] != 1\">\n        <ion-label>换货/维修</ion-label>\n        <ion-radio slot=\"start\" value=\"buford\" value=\"3\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-item>\n      <ion-label position=\"stacked\">\n        退款提示:\n      </ion-label>\n      <ion-note>\n        <ion-text>\n          <p class=\"tk-ts\">申请退款，将取消整笔订单，并退回您该笔订单款项，如有需要请重新下单。</p>\n        </ion-text>\n      </ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"allnum > 1\">\n      <ion-label position=\"stacked\">提交数量:</ion-label>\n      <ion-input [disabled]=\"data.order_all == 1\" [min]=\"0\" [max]=\"allnum\" [(ngModel)]=\"data.tui_goods_number\" name=\"tui_goods_number\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">问题描述<ion-text color=\"danger\">*</ion-text>:</ion-label>\n      <ion-textarea [rows]=\"6\" [maxlength]=\"500\" [(ngModel)]=\"data.back_reason\" name=\"back_reason\" placeholder=\"请您如实填写申请原因及商品情况，字数在500字内。\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">图片信息</ion-label>\n      <ion-note style=\"width: 100%;\">\n        <ion-row margin-top>\n          <ion-col size=\"4\" (click)=\"addimg()\">\n            <div class=\"img-box\">\n              <img src=\"../../../assets/add.png\" alt=\"\">\n            </div>\n          </ion-col>\n          <ion-col size=\"4\" *ngFor=\"let item of imgs; let i = index\" (click)=\"removeImg()\">\n            <div class=\"img-box\">\n              <img [src]=\"item\" alt=\"\">\n              <div class=\"loadEffect\" *ngIf=\"isupdate[i] === -1\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <p class=\"img-ts\">\n          <ion-text color=\"tertiary\">\n            为了帮助我们更好的解决问题，请您上传图片\n          </ion-text>\n          <br/>\n          <ion-text>\n            每张图片大小不超过2M，支持gif,jpg,png,jpeg格式文件\n          </ion-text>\n        </p>\n      </ion-note>\n    </ion-item>\n    <ion-item *ngIf=\"data.back_type == 3\">\n      <ion-label position=\"stacked\">收货人姓名:</ion-label>\n      <ion-input placeholder=\"请输入姓名\" required [(ngModel)]=\"data.back_consignee\" name=\"back_consignee\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"data.back_type == 3\">\n      <ion-label position=\"stacked\">收货人电话:</ion-label>\n      <ion-input placeholder=\"请输入有效手机号码\" required [(ngModel)]=\"data.back_mobile\" name=\"back_mobile\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"data.back_type == 3\">\n      <ion-label position=\"stacked\">省:</ion-label>\n      <ion-select placeholder=\"请选择省\" (ionChange)=\"selteaddress(2, data.province)\" required [(ngModel)]=\"data.province\" name=\"province\" cancelText=\"取消\" okText=\"确定\">\n        <ion-select-option *ngFor=\"let item of provincelist\" [value]=\"item.region_id\">{{item.region_name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf=\"data.back_type == 3\">\n      <ion-label position=\"stacked\">市:</ion-label>\n      <ion-select placeholder=\"请选择市\" (ionChange)=\"selteaddress(3, data.city)\" required [(ngModel)]=\"data.city\" name=\"city\" cancelText=\"取消\" okText=\"确定\">\n        <ion-select-option *ngFor=\"let item of citylist\" [value]=\"item.region_id\">{{item.region_name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf=\"data.back_type == 3\">\n      <ion-label position=\"stacked\">区:</ion-label>\n      <ion-select placeholder=\"请选择区\" required [(ngModel)]=\"data.district\" name=\"district\" cancelText=\"取消\" okText=\"确定\">\n        <ion-select-option *ngFor=\"let item of arealist\" [value]=\"item.region_id\">{{item.region_name}}</ion-select-option>\n      </ion-select>\n\n    </ion-item>\n    <ion-item *ngIf=\"data.back_type == 3\">\n      <ion-label position=\"stacked\">详细地址:</ion-label>\n      <ion-textarea placeholder=\"详细地址：如道路、门牌号、小区、楼栋号、单元室等\" required [(ngModel)]=\"data.back_address\" name=\"back_address\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <ion-button color=\"success\" expand=\"block\" (click)=\"sub()\">\n      提交\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/cancel-order/cancel-order.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cancel-order/cancel-order.module.ts ***!
  \***********************************************************/
/*! exports provided: CancelOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelOrderPageModule", function() { return CancelOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancel_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel-order.page */ "./src/app/pages/cancel-order/cancel-order.page.ts");







var routes = [
    {
        path: '',
        component: _cancel_order_page__WEBPACK_IMPORTED_MODULE_6__["CancelOrderPage"]
    }
];
var CancelOrderPageModule = /** @class */ (function () {
    function CancelOrderPageModule() {
    }
    CancelOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cancel_order_page__WEBPACK_IMPORTED_MODULE_6__["CancelOrderPage"]]
        })
    ], CancelOrderPageModule);
    return CancelOrderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cancel-order/cancel-order.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/cancel-order/cancel-order.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-box {\n  width: 100%;\n  position: relative;\n  padding-top: 100%;\n  background-color: #f1f1f1;\n  border: 1px solid #f1f1f1;\n  box-sizing: content-box;\n}\n.img-box img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.img-box .loadEffect {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.img-box .loadEffect span {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--ion-color-success);\n  position: absolute;\n  -webkit-animation: load 1.04s ease infinite;\n}\n.img-box .loadEffect span:nth-child(1) {\n  left: 0;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-animation-delay: 0.13s;\n}\n.img-box .loadEffect span:nth-child(2) {\n  left: 14px;\n  top: 14px;\n  -webkit-animation-delay: 0.26s;\n}\n.img-box .loadEffect span:nth-child(3) {\n  left: 50%;\n  top: 0;\n  margin-left: -10px;\n  -webkit-animation-delay: 0.39s;\n}\n.img-box .loadEffect span:nth-child(4) {\n  top: 14px;\n  right: 14px;\n  -webkit-animation-delay: 0.52s;\n}\n.img-box .loadEffect span:nth-child(5) {\n  right: 0;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-animation-delay: 0.65s;\n}\n.img-box .loadEffect span:nth-child(6) {\n  right: 14px;\n  bottom: 14px;\n  -webkit-animation-delay: 0.78s;\n}\n.img-box .loadEffect span:nth-child(7) {\n  bottom: 0;\n  left: 50%;\n  margin-left: -10px;\n  -webkit-animation-delay: 0.91s;\n}\n.img-box .loadEffect span:nth-child(8) {\n  bottom: 14px;\n  left: 14px;\n  -webkit-animation-delay: 1.04s;\n}\n@-webkit-keyframes load {\n  0% {\n    -webkit-transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.3);\n    opacity: 0.5;\n  }\n}\n.img-ts ion-text:first-of-type {\n  font-size: var(--ion-text);\n}\n.img-ts ion-text:last-of-type {\n  font-size: var(--ion-sm-text);\n}\n.tk-ts {\n  font-size: var(--ion-text);\n  margin-top: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9jYW5jZWwtb3JkZXIvY2FuY2VsLW9yZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FuY2VsLW9yZGVyL2NhbmNlbC1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNFSjtBREFFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7QUNFTjtBREFFO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDRU47QURBRTtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0VOO0FEQUU7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDRU47QURBRTtFQUNJLFNBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0VOO0FEQUU7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDRU47QURBRTtFQUNJLFFBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0VOO0FEQUU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDRU47QURBRTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0VOO0FEQUU7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FDRU47QURDQTtFQUNNO0lBQ0ksNkJBQUE7SUFDQSxVQUFBO0VDRVI7RURBSTtJQUNJLDZCQUFBO0lBQ0EsWUFBQTtFQ0VSO0FBQ0Y7QURFSTtFQUNFLDBCQUFBO0FDQU47QURFSTtFQUNFLDZCQUFBO0FDQU47QURJQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmNlbC1vcmRlci9jYW5jZWwtb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICAubG9hZEVmZmVjdHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIC4zKTtcbiAgfVxuICAubG9hZEVmZmVjdCBzcGFue1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZCAxLjA0cyBlYXNlIGluZmluaXRlO1xuICB9XG4gIC5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDEpe1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbWFyZ2luLXRvcDotMTBweDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuMTNzO1xuICB9XG4gIC5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDIpe1xuICAgICAgbGVmdDogMTRweDtcbiAgICAgIHRvcDogMTRweDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuMjZzO1xuICB9XG4gIC5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDMpe1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC4zOXM7XG4gIH1cbiAgLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNCl7XG4gICAgICB0b3A6IDE0cHg7XG4gICAgICByaWdodDoxNHB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC41MnM7XG4gIH1cbiAgLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNSl7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbWFyZ2luLXRvcDotMTBweDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuNjVzO1xuICB9XG4gIC5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDYpe1xuICAgICAgcmlnaHQ6IDE0cHg7XG4gICAgICBib3R0b206MTRweDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuNzhzO1xuICB9XG4gIC5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDcpe1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC45MXM7XG4gIH1cbiAgLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoOCl7XG4gICAgICBib3R0b206IDE0cHg7XG4gICAgICBsZWZ0OiAxNHB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MS4wNHM7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2Fke1xuICAgICAgMCV7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIDEwMCV7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4zKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG4gIH1cbi5pbWctdHMge1xuICBpb24tdGV4dCB7XG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICAgIH1cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgICB9XG4gIH1cbn1cbi50ay10cyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59IiwiLmltZy1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uaW1nLWJveCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5pbWctYm94IC5sb2FkRWZmZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5pbWctYm94IC5sb2FkRWZmZWN0IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkIDEuMDRzIGVhc2UgaW5maW5pdGU7XG59XG4uaW1nLWJveCAubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMTNzO1xufVxuLmltZy1ib3ggLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAxNHB4O1xuICB0b3A6IDE0cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjI2cztcbn1cbi5pbWctYm94IC5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMzlzO1xufVxuLmltZy1ib3ggLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNCkge1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiAxNHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC41MnM7XG59XG4uaW1nLWJveCAubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCg1KSB7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjY1cztcbn1cbi5pbWctYm94IC5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDYpIHtcbiAgcmlnaHQ6IDE0cHg7XG4gIGJvdHRvbTogMTRweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNzhzO1xufVxuLmltZy1ib3ggLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNykge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC45MXM7XG59XG4uaW1nLWJveCAubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCg4KSB7XG4gIGJvdHRvbTogMTRweDtcbiAgbGVmdDogMTRweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMDRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuLmltZy10cyBpb24tdGV4dDpmaXJzdC1vZi10eXBlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG59XG4uaW1nLXRzIGlvbi10ZXh0Omxhc3Qtb2YtdHlwZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xufVxuXG4udGstdHMge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/cancel-order/cancel-order.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cancel-order/cancel-order.page.ts ***!
  \*********************************************************/
/*! exports provided: CancelOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelOrderPage", function() { return CancelOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_thorder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/thorder.service */ "./src/app/services/thorder.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/contactlist.service */ "./src/app/services/contactlist.service.ts");


/*
 * @Author: wjy-mac
 * @Date: 2019-10-17 17:47:02
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-04 21:23:50
 * @Description: 取消订单
 */





var CancelOrderPage = /** @class */ (function () {
    function CancelOrderPage(nav, actionSheetController, native, http, thorder, contactlist) {
        this.nav = nav;
        this.actionSheetController = actionSheetController;
        this.native = native;
        this.http = http;
        this.thorder = thorder;
        this.contactlist = contactlist;
    }
    CancelOrderPage.prototype.ngOnInit = function () {
        var _this = this;
        this.imgs = [];
        this.isupdate = [];
        this.subimgs = [];
        var data = this.thorder.getData();
        console.log(data);
        if (!data['order'] || data['order'] == 'undefined') {
            console.log('没有数据');
            this.goBack();
        }
        this.data = {
            back_pay: 2,
            back_type: '4',
            act: 'back_order_act',
            order_id: data['order']['order_id'],
            country: data['order']['country'],
            province: data['order']['province'],
            city: data['order']['city'],
            district: data['order']['district'],
            back_address: data['order']['address'],
            back_consignee: data['order']['consignee'],
            back_mobile: data['order']['mobile'],
            back_zipcode: data['order']['zipcode'],
            back_postscript: '',
            // product_id_tui: 0,
            goods_attr_tui: '',
            tui_goods_number: data['goods']['goods_number'],
        };
        if (data['issh']) {
            this.issh = true;
            this.data['back_type'] = '3';
        }
        this.allnum = data['goods']['goods_number'];
        if (data['orderall']) {
            this.data['order_all'] = 1;
            this.data['tui_goods_price'] = data['order']['goods_amount'];
        }
        else {
            this.data['order_sn'] = data['order']['order_sn'];
            this.data['goods_id'] = data['goods']['goods_id'];
            this.data['goods_name'] = data['goods']['goods_name'];
            this.data['goods_sn'] = data['goods']['goods_sn'];
            this.data['tui_goods_price'] = data['goods']['goods_price'];
            // this.data['product_id_tui'] = 0; 产品属性，暂时不给
        }
        console.log(this.data);
        this.contactlist.getProasync().then(function (res) {
            _this.provincelist = res;
            _this.selteaddress(2, _this.data['province']);
            _this.selteaddress(3, _this.data['city']);
        }).catch(function (err2) { });
        // TODO: 状态还差2， 还差状态页面，差补快递单号页面
    };
    CancelOrderPage.prototype.addimg = function () {
        this.presentActionSheet();
    };
    CancelOrderPage.prototype.removeImg = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isupdate[index] === -1) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: '操作',
                                buttons: [{
                                        text: '删除',
                                        role: 'destructive',
                                        handler: function () {
                                            _this.imgs.splice(index, 1);
                                            _this.isupdate.splice(index, 1);
                                            _this.subimgs.splice(index, 1);
                                        }
                                    }, {
                                        text: '取消',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CancelOrderPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: '请选择来源',
                            buttons: [{
                                    text: '相机',
                                    role: 'destructive',
                                    handler: function () {
                                        console.log('Delete clicked');
                                        // this.native.captureImage().then(res => {
                                        //   this.addimgfn(res['fullPath']);
                                        // });
                                        _this.native.getPictureByCamera().then(function (res) {
                                            _this.basezfile(res);
                                        });
                                    }
                                }, {
                                    text: '相册',
                                    handler: function () {
                                        console.log('Share clicked');
                                        _this.native.getPictures(1).then(function (res) {
                                            var img = res[0];
                                            _this.basezfile(img);
                                        }, function (err) {
                                        });
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CancelOrderPage.prototype.basezfile = function (base64) {
        var _this = this;
        var index = this.imgs.length;
        this.imgs.push(base64);
        this.isupdate.push(-1);
        var file = this.native.getImgbase64tofile(base64, 'sh' + index, 'imgFile');
        this.imgupload(file).then(function (res) {
            //alert(res)
            //alert(JSON.stringify(res));
            _this.subimgs[index] = res;
            _this.isupdate[index] = 1;
            if (_this.issub) {
                _this.issubfn();
            }
        }).catch(function (err3) {
            _this.imgs.splice(index, 1);
            _this.isupdate.splice(index, 1);
        });
    };
    CancelOrderPage.prototype.sub = function () {
        if (!this.data['back_reason']) {
            this.native.presentAlert('请输入问题描述');
            return false;
        }
        else if (this.data['order_all'] < 0 || this.data['order_all'] > this.allnum) {
            this.native.presentAlert('请输入正确的数量');
            return false;
        }
        this.issub = true;
        this.issubfn();
    };
    CancelOrderPage.prototype.issubfn = function () {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.isupdate.length; i++) {
            if (this.isupdate[i] === -1) {
                return false;
            }
        }
        this.uploadEnd();
    };
    CancelOrderPage.prototype.uploadEnd = function () {
        var _this = this;
        var obj = Object.assign({ imgs: this.subimgs }, this.data);
        this.http.postformdataloading(this.http.zdomain + this.http.backorderact, obj).subscribe(function (res) {
            _this.native.presentToast('申请成功，请等待商家审核');
            _this.goBack();
        }, function (error2) { });
    };
    CancelOrderPage.prototype.imgupload = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var oReq = new XMLHttpRequest();
            oReq.open('POST', _this.http.zdomain + _this.http.shupdateimg);
            oReq.onreadystatechange = function (oEvent) {
                if (oReq.readyState == 4 && oReq.status == 200) {
                    var res = JSON.parse(oReq.response);
                    if (res.status == 1) {
                        resolve(res.url);
                    }
                    else {
                        reject('上传失败，请重试');
                    }
                }
            };
            oReq.onerror = function (err) {
                reject(err);
            };
            oReq.send(file);
        });
    };
    CancelOrderPage.prototype.goBack = function () {
        this.thorder.clearData();
        this.nav.back();
    };
    CancelOrderPage.prototype.selteaddress = function (type, id) {
        var _this = this;
        if (id === void 0) { id = '1'; }
        console.log('进来了');
        this.http.getData(this.http.getcity, { parent: id, type: type }).subscribe(function (res) {
            console.log(res);
            if (type === 1) {
                _this.contactlist.setPro(res['regions']);
            }
            else if (type === 2) {
                _this.citylist = res['regions'];
            }
            else {
                _this.arealist = res['regions'];
            }
        });
    };
    CancelOrderPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_3__["NativeService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_thorder_service__WEBPACK_IMPORTED_MODULE_1__["ThorderService"] },
        { type: _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__["ContactlistService"] }
    ]; };
    CancelOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cancel-order',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cancel-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel-order/cancel-order.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cancel-order.page.scss */ "./src/app/pages/cancel-order/cancel-order.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_3__["NativeService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_thorder_service__WEBPACK_IMPORTED_MODULE_1__["ThorderService"], _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__["ContactlistService"]])
    ], CancelOrderPage);
    return CancelOrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cancel-order-cancel-order-module.js.map