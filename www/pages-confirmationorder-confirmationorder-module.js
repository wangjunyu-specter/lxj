(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confirmationorder-confirmationorder-module"],{

/***/ "./src/app/pages/confirmationorder/confirmationorder.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/confirmationorder/confirmationorder.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmationorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationorderPageModule", function() { return ConfirmationorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmationorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmationorder.page */ "./src/app/pages/confirmationorder/confirmationorder.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _confirmationorder_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationorderPage"]
    }
];
var ConfirmationorderPageModule = /** @class */ (function () {
    function ConfirmationorderPageModule() {
    }
    ConfirmationorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_confirmationorder_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationorderPage"]]
        })
    ], ConfirmationorderPageModule);
    return ConfirmationorderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/confirmationorder/confirmationorder.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/confirmationorder/confirmationorder.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>确认订单</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"orderContent\" padding *ngIf=\"data\">\r\n    <div class=\"title\">{{data.topData.name}}</div>\r\n    <!--<div class=\"day\">5天4晚</div>-->\r\n    <!--<div class=\"tc\">套餐类型：查汶中心·室外泳池]垂直酒店或同级</div>-->\r\n    <!--<div>出发日期：2019-01-24</div>-->\r\n    <div *ngFor=\"let item of activeData\">{{item}}</div>\r\n    <div>数量：{{num}}</div>\r\n  </div>\r\n\r\n  <div class=\"person\" padding *ngIf=\"activePerson && activePerson.length > 0\">\r\n    <app-pagetitle [myname]=\"'出行人信息'\" [nopadding]=\"true\"></app-pagetitle>\r\n    <div class=\"box\" *ngFor=\"let item of activePerson\">\r\n      <div class=\"left\">出行人</div>\r\n      <div class=\"center\">\r\n        <div class=\"des-name\">{{item.name}}</div>\r\n      </div>\r\n      <div class=\"right\">\r\n        <div (click)=\"getContact()\"><ion-icon name=\"add\"></ion-icon></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"person\" padding *ngIf=\"activePerson.length == 0\">\r\n    <app-pagetitle [myname]=\"'出行人信息'\" [nopadding]=\"true\"></app-pagetitle>\r\n    <div class=\"box\">\r\n      <div class=\"left\">出行人</div>\r\n      <div class=\"center\">\r\n        <div class=\"des-name\">请添加{{num}}位出行人</div>\r\n      </div>\r\n      <div class=\"right\">\r\n        <div (click)=\"getContact()\"><ion-icon name=\"add\"></ion-icon></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <ion-list no-margin>\r\n      <ion-item *ngIf=\"allowusebonus == 1 && redbag && redbag.length > 0\" lines=\"none\">\r\n        <select name=\"\" id=\"\" class=\"myselect\" [(ngModel)]=\"changebonus\"\r\n                (change)=\"changeYhq(redbag[0]['supplier_id'], i)\" placeholder=\"使用优惠券\">\r\n          <option value=\"\" selected>不使用优惠券</option>\r\n          <option *ngFor=\"let hbitem of redbag\" [value]=\"hbitem.bonus_id\">{{hbitem.type_name}}[{{hbitem.type_money}}]</option>\r\n        </select>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"bx-box\">\r\n    <div class=\"title\">\r\n      <app-pagetitle [myname]=\"'保险服务'\" [smpadding]=\"true\"></app-pagetitle>\r\n    </div>\r\n    <div class=\"des\">您购买的商品可能包含高风险性旅游项目，建议您购买旅游保险以保障 您的权益及出行安全。</div>\r\n    <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\r\n      安盛AXA·全球旅游险-150万总保障\r\n      <ion-icon name=\"information-circle-outline\" color=\"primary\"></ion-icon>\r\n    </ion-button>\r\n    <div class=\"box\">\r\n      <app-yhbox [color]=\"'yellow'\" [title]=\"'申根&全球保障推荐'\"></app-yhbox>\r\n      <app-yhbox [color]=\"'green'\" [title]=\"'80%购买选择'\"></app-yhbox>\r\n    </div>\r\n    <p>商家为您购买</p>\r\n  </div>\r\n  <div class=\"lxr\">\r\n    <div class=\"title\">\r\n      <app-pagetitle [myname]=\"'联系人'\" [smpadding]=\"true\"></app-pagetitle>\r\n    </div>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\"><ion-text color=\"danger\">*</ion-text>姓名</ion-label>\r\n        <ion-input required [(ngModel)]=\"username\"  placeholder=\"请输入联系人姓名\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\"><ion-text color=\"danger\">*</ion-text>手机</ion-label>\r\n        <ion-input type=\"tel\" [(ngModel)]=\"usertel\" placeholder=\"请输入联系人手机\"></ion-input>\r\n      </ion-item>\r\n      <!--<ion-item>-->\r\n      <!--<ion-label position=\"fixed\">微信</ion-label>-->\r\n      <!--<ion-input placeholder=\"请输入联系人微信\"></ion-input>-->\r\n      <!--</ion-item>-->\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">备注</ion-label>\r\n        <ion-input placeholder=\"如果需要请备注\" [(ngModel)]=\"bz\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div class=\"yhxx\">\r\n    <div padding-top padding-start padding-end>\r\n      <app-pagetitle [myname]=\"'优惠信息'\" [nopadding]=\"true\"></app-pagetitle>\r\n    </div>\r\n    <!--<p><ion-text color=\"danger\">优惠券自动抵扣¥300</ion-text></p>-->\r\n    <!--<p *ngIf=\"result_jf\"><ion-text color=\"primary\">赠送{{result_jf}}积分</ion-text></p>-->\r\n\r\n    <ion-list *ngIf=\"pricearr\" inset=\"true\">\r\n      <ion-item  *ngFor=\"let item of pricearr['pricearr']; let i = index\">\r\n        <ion-label>{{item.key}}</ion-label>\r\n        <div class=\"end\" [ngClass]=\"{'red': i > 1}\">{{item.value}}</div>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list *ngIf=\"pricearr\" inset=\"true\" no-margin>\r\n      <ion-item  *ngFor=\"let item of pricearr['hdarr']\">\r\n        <ion-label>{{item.key}}</ion-label>\r\n        <div class=\"end\"><ion-text color=\"primary\">{{item.value}}</ion-text></div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"ptxz\" padding>\r\n    点击“提交订单”表示已阅读并同意 <ion-text color=\"primary\">《旅行家平台服务协议》《旅游 安全须知》</ion-text>\r\n  </div>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <app-footer [type]=\"3\" [allprice]=\"total.amount_formated\" (sub)=\"submit($event)\" [disabled]=\"num != activePerson.length || !username || !usertel\"></app-footer>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/confirmationorder/confirmationorder.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/confirmationorder/confirmationorder.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orderContent {\n  font-size: var(--ion-sm-text); }\n  .orderContent .title {\n    font-weight: 600;\n    margin-bottom: 7px; }\n  ion-content {\n  --background: var(--ion-gray-background-color); }\n  ion-content > div {\n    background-color: #fff;\n    margin-bottom: 10px; }\n  .person .box {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start; }\n  .person .box .center {\n    flex: 1;\n    text-align: left;\n    margin-left: 15px;\n    margin-right: 10px; }\n  .person .box .center .des-name {\n      color: var(--ion-color-tertiary); }\n  .person .box .right div {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n    background-color: rgba(var(--ion-color-tertiary-rgb), 0.3);\n    font-weight: 400;\n    line-height: 16px; }\n  .bx-box {\n  padding-bottom: 1px; }\n  .bx-box .title {\n    padding: 0 15px; }\n  .bx-box .des {\n    background-color: #FEF8D7;\n    font-size: var(--ion-sm-text);\n    color: #9A6C21;\n    padding: 15px; }\n  .bx-box .box {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 0 15px; }\n  .bx-box .box app-yhbox {\n      margin-right: 10px; }\n  .bx-box p {\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-dark);\n    padding: 0 15px;\n    margin-top: 4px; }\n  .lxr .title {\n  padding: 0 15px; }\n  .lxr ion-list {\n  margin-bottom: 0; }\n  .yhxx p {\n  margin-top: 10px;\n  font-size: var(--ion-sm-text);\n  margin-bottom: 0; }\n  ion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0; }\n  .myselect {\n  border: 1px solid var(--ion-color-light);\n  background: none;\n  width: 100%;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 5px;\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9jb25maXJtYXRpb25vcmRlci9jb25maXJtYXRpb25vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkIsRUFBQTtFQUQvQjtJQUdJLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQUd0QjtFQUNFLDhDQUFhLEVBQUE7RUFEZjtJQUdJLHNCQUFzQjtJQUN0QixtQkFBbUIsRUFBQTtFQUd2QjtFQUVJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix1QkFBdUIsRUFBQTtFQU4zQjtJQVFNLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBWHhCO01BYVEsZ0NBQWdDLEVBQUE7RUFieEM7SUFrQlEsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMERBQXlEO0lBQ3pELGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQUt6QjtFQUNFLG1CQUFtQixFQUFBO0VBRHJCO0lBR0ksZUFBZSxFQUFBO0VBSG5CO0lBTUkseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUFBYSxFQUFBO0VBVGpCO0lBWUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlLEVBQUE7RUFqQm5CO01BbUJNLGtCQUFrQixFQUFBO0VBbkJ4QjtJQXVCSSw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixlQUFlLEVBQUE7RUFHbkI7RUFFSSxlQUFlLEVBQUE7RUFGbkI7RUFLSSxnQkFBZ0IsRUFBQTtFQUdwQjtFQUVJLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDRSxtQkFBaUI7RUFDakIsZ0JBQWM7RUFDZCxrQkFBZ0I7RUFDaEIsZ0JBQWMsRUFBQTtFQUVoQjtFQUNFLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsV0FBVztFQUdYLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpcm1hdGlvbm9yZGVyL2NvbmZpcm1hdGlvbm9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlckNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAmPmRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuLnBlcnNvbiB7XHJcbiAgLmJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIC5jZW50ZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAuZGVzLW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiksIC4zKTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5ieC1ib3gge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgLmRlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGOEQ3O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBjb2xvcjogIzlBNkMyMTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgYXBwLXloYm94IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICB9XHJcbn1cclxuLmx4ciB7XHJcbiAgLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuLnloeHgge1xyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxufVxyXG4ubXlzZWxlY3Qge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG91dGxpbmU6bm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/confirmationorder/confirmationorder.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/confirmationorder/confirmationorder.page.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmationorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationorderPage", function() { return ConfirmationorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_getproduct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getproduct.service */ "./src/app/services/getproduct.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_contactlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/contactlist.service */ "./src/app/services/contactlist.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_payorder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/payorder.service */ "./src/app/services/payorder.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");





// import { ContactlistComponent } from '../../components/contactlist/contactlist.component';





var ConfirmationorderPage = /** @class */ (function () {
    function ConfirmationorderPage(route, getProduct, nav, contactlist, http, payorder, userfn, activeroute, native) {
        this.route = route;
        this.getProduct = getProduct;
        this.nav = nav;
        this.contactlist = contactlist;
        this.http = http;
        this.payorder = payorder;
        this.userfn = userfn;
        this.activeroute = activeroute;
        this.native = native;
    }
    ConfirmationorderPage.prototype.ngOnInit = function () {
        this.activePerson = [];
        this.pricearr = [];
        this.total = {};
        this.changebonus = '';
        console.log(this.activeroute.snapshot.queryParams);
        var params = this.activeroute.snapshot.queryParams;
        this.pid = params['id'];
        if (!this.pid) {
            this.goBack();
            return false;
        }
        var data = this.getProduct.getActiveorder(); // 获取加入购物车参数
        console.log(data);
        this.addcatobj = {
            quick: 0,
            spec: data.attr,
            goods_id: data.id,
            number: data.number,
            parent: 0,
            isls: 1
        };
    };
    ConfirmationorderPage.prototype.ionViewDidEnter = function () {
        if (!this.addcatobj.spec && !this.addcatobj.number && !this.addcatobj.goods_id) {
            this.native.presentToast('参数错误!');
            this.goBack();
            return false;
        }
        if (!this.data) {
            this.getData();
        }
        this.addCart();
        // this.getData();
        // this.contactlist.setData(this.num);
    };
    ConfirmationorderPage.prototype.getData = function () {
        var _this = this;
        this.getProduct.getProduct(this.pid).then(function (res) {
            _this.data = res;
            var activeData = _this.getProduct.getActiveobj(); // 获取选中对象
            _this.setProduct(activeData);
            _this.getYhq();
        }).catch(function (err) {
            console.log(err);
        });
        this.contactlist.getActive().then(function (res) {
            _this.activePerson = res;
            console.log(_this.activePerson);
            _this.addressId = res[0].address_id;
            console.log(_this.addressId);
            _this.getYhq();
        });
        this.userfn.getUserp().then(function (res) {
            console.log(res);
            _this.username = res.user_name;
            _this.usertel = res.mobile_phone;
        });
    };
    ConfirmationorderPage.prototype.addCart = function () {
        var _this = this;
        this.http.postformdata(this.http.addgwc, { goods: JSON.stringify(this.addcatobj) }).subscribe(function (res) {
            _this.cid = res['rec_id'];
            _this.getYhq();
        }, function (error2) { });
    };
    ConfirmationorderPage.prototype.getYhq = function () {
        var _this = this;
        if (!this.pid || !this.addressId || this.isgetContent || !this.cid) { // 因获取商品id和地址id都是异步
            return false;
        }
        this.isgetContent = true;
        var obj = {
            address_id: this.addressId,
            sel_cartgoods: [this.cid]
        };
        this.http.postformdata(this.http.qrorder, obj).subscribe(function (res) {
            // console.log(res)
            _this.total = res['data']['total'];
            _this.order = res['data']['order'];
            _this.pricearr = res.data.pricearr;
            _this.redbag = res['data']['goods_list'][0]['redbag'];
            _this.allowusebonus = res['data']['allow_use_bonus'];
        }, function (error2) { });
    };
    ConfirmationorderPage.prototype.changeYhq = function (id, index) {
        // if (this.isxxyhq[index]) {
        //   this.isxxyhq[index] = false;
        // }
        console.log(this.changebonus);
        var obj = {
            bonus: this.changebonus,
            sel_cartgoods: [this.cid],
            suppid: id,
        };
        this.setHttp(this.http.changebonus, obj);
    };
    ConfirmationorderPage.prototype.setHttp = function (src, obj) {
        var _this = this;
        var obj1 = {
            order: JSON.stringify(this.order)
        };
        this.http.getpostformdata(src, obj, obj1).subscribe(function (res) {
            console.log(res);
            // this.setPrice(res);
            _this.total = res.total;
            _this.pricearr = res.pricearr;
        }, function (error2) { });
    };
    ConfirmationorderPage.prototype.setProduct = function (activeData) {
        if (!activeData) {
            this.goBack();
            return false;
        }
        // goods_attr
        this.activeData = activeData.goods_attr.split('&nbsp;');
        this.num = activeData.qty;
        this.price = activeData.result;
        this.resultJf = activeData.result_jf;
    };
    ConfirmationorderPage.prototype.getContact = function () {
        this.route.navigate(['/contactlist'], { queryParams: { type: 1, num: this.num } });
    };
    ConfirmationorderPage.prototype.submit = function ($event) {
        var _this = this;
        console.log($event);
        if (!this.username || !this.username) {
            this.native.presentAlert('请输入联系人姓名或手机号码!');
            return false;
        }
        var tripid = '';
        var arr = [];
        this.activePerson.map(function (res) {
            arr.push(res.address_id);
        });
        tripid = arr.join(',');
        var obj = {
            sel_cartgoods: [this.cid],
            // how_oos, 缺货处理
            // card_message, // 贺卡内容
            // inv_type, 发票信息
            // inv_payee,
            // inv_content,
            postscript: this.bz,
            integral: 0,
            bonus: JSON.stringify([this.changebonus]),
            // bonus_sn: this.isxxyhq,
            surplus: 0,
            payment: 1,
            username: this.username,
            usertel: this.usertel,
            tripid: tripid
        };
        this.http.postformdataloading(this.http.scorder, obj).subscribe(function (res) {
            console.log(res);
            var id = res['data']['order']['order_id'];
            // this.orderdata.setData(res.data as object);
            // this.route.navigate(['/ordersuccess'], {queryParams: {type: 1}});
            if (_this.redbag && _this.redbag.length > 0) {
                for (var i = 0; i < _this.redbag.length; i++) {
                    if (_this.redbag[i].bonus_id == _this.changebonus) {
                        _this.redbag.splice(i, 1);
                        break;
                    }
                }
            }
            _this.userfn.upData('user_money', res['data']['user_money']);
            _this.payorder.setOrder(res['data']);
            _this.route.navigate(['/pay'], { queryParams: { id: id } });
        }, function (error2) {
            console.error(error2);
        });
    };
    ConfirmationorderPage.prototype.goBack = function () {
        this.nav.back();
    };
    ConfirmationorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmationorder',
            template: __webpack_require__(/*! ./confirmationorder.page.html */ "./src/app/pages/confirmationorder/confirmationorder.page.html"),
            styles: [__webpack_require__(/*! ./confirmationorder.page.scss */ "./src/app/pages/confirmationorder/confirmationorder.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_getproduct_service__WEBPACK_IMPORTED_MODULE_3__["GetproductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_contactlist_service__WEBPACK_IMPORTED_MODULE_5__["ContactlistService"], _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _services_payorder_service__WEBPACK_IMPORTED_MODULE_7__["PayorderService"], _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_9__["NativeService"]])
    ], ConfirmationorderPage);
    return ConfirmationorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-confirmationorder-confirmationorder-module.js.map