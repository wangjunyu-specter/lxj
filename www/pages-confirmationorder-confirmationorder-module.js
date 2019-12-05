(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confirmationorder-confirmationorder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirmationorder/confirmationorder.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirmationorder/confirmationorder.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>确认订单</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"orderContent\" padding *ngIf=\"data\">\r\n    <div class=\"title\">{{data.topData.name}}</div>\r\n    <!--<div class=\"day\">5天4晚</div>-->\r\n    <!--<div class=\"tc\">套餐类型：查汶中心·室外泳池]垂直酒店或同级</div>-->\r\n    <!--<div>出发日期：2019-01-24</div>-->\r\n    <div *ngFor=\"let item of activeData\">{{item}}</div>\r\n    <div>数量：{{num}}</div>\r\n  </div>\r\n\r\n  <div class=\"person\" padding *ngIf=\"activePerson && activePerson.length > 0\">\r\n    <app-pagetitle [myname]=\"'出行人信息'\" [nopadding]=\"true\"></app-pagetitle>\r\n    <div class=\"box\" *ngFor=\"let item of activePerson\">\r\n      <div class=\"left\">出行人</div>\r\n      <div class=\"center\">\r\n        <div class=\"des-name\">{{item.name}}</div>\r\n      </div>\r\n      <div class=\"right\">\r\n        <div (click)=\"getContact()\"><ion-icon name=\"add\"></ion-icon></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"person\" padding *ngIf=\"activePerson.length == 0\">\r\n    <app-pagetitle [myname]=\"'出行人信息'\" [nopadding]=\"true\"></app-pagetitle>\r\n    <div class=\"box\">\r\n      <div class=\"left\">出行人</div>\r\n      <div class=\"center\">\r\n        <div class=\"des-name\">请添加{{num}}位出行人</div>\r\n      </div>\r\n      <div class=\"right\">\r\n        <div (click)=\"getContact()\"><ion-icon name=\"add\"></ion-icon></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <ion-list no-margin>\r\n      <ion-item *ngIf=\"allowusebonus == 1 && redbag && redbag.length > 0\" lines=\"none\">\r\n        <select name=\"\" id=\"\" class=\"myselect\" [(ngModel)]=\"changebonus\"\r\n                (change)=\"changeYhq(redbag[0]['supplier_id'], i)\" placeholder=\"使用优惠券\">\r\n          <option value=\"\" selected>不使用优惠券</option>\r\n          <option *ngFor=\"let hbitem of redbag\" [value]=\"hbitem.bonus_id\">{{hbitem.type_name}}[{{hbitem.type_money}}]</option>\r\n        </select>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"bx-box\">\r\n    <div class=\"title\">\r\n      <app-pagetitle [myname]=\"'保险服务'\" [smpadding]=\"true\"></app-pagetitle>\r\n    </div>\r\n    <div class=\"des\">您购买的商品可能包含高风险性旅游项目，建议您购买旅游保险以保障 您的权益及出行安全。</div>\r\n    <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\r\n      安盛AXA·全球旅游险-150万总保障\r\n      <ion-icon name=\"information-circle-outline\" color=\"primary\"></ion-icon>\r\n    </ion-button>\r\n    <div class=\"box\">\r\n      <app-yhbox [color]=\"'yellow'\" [title]=\"'申根&全球保障推荐'\"></app-yhbox>\r\n      <app-yhbox [color]=\"'green'\" [title]=\"'80%购买选择'\"></app-yhbox>\r\n    </div>\r\n    <p>商家为您购买</p>\r\n  </div>\r\n  <div class=\"lxr\">\r\n    <div class=\"title\">\r\n      <app-pagetitle [myname]=\"'联系人'\" [smpadding]=\"true\"></app-pagetitle>\r\n    </div>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\"><ion-text color=\"danger\">*</ion-text>姓名</ion-label>\r\n        <ion-input required [(ngModel)]=\"username\"  placeholder=\"请输入联系人姓名\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"fixed\"><ion-text color=\"danger\">*</ion-text>手机</ion-label>\r\n        <ion-input type=\"tel\" [(ngModel)]=\"usertel\" placeholder=\"请输入联系人手机\"></ion-input>\r\n      </ion-item>\r\n      <!--<ion-item>-->\r\n      <!--<ion-label position=\"fixed\">微信</ion-label>-->\r\n      <!--<ion-input placeholder=\"请输入联系人微信\"></ion-input>-->\r\n      <!--</ion-item>-->\r\n      <ion-item>\r\n        <ion-label position=\"fixed\">备注</ion-label>\r\n        <ion-input placeholder=\"如果需要请备注\" [(ngModel)]=\"bz\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div class=\"yhxx\">\r\n    <div padding-top padding-start padding-end>\r\n      <app-pagetitle [myname]=\"'优惠信息'\" [nopadding]=\"true\"></app-pagetitle>\r\n    </div>\r\n    <!--<p><ion-text color=\"danger\">优惠券自动抵扣¥300</ion-text></p>-->\r\n    <!--<p *ngIf=\"result_jf\"><ion-text color=\"primary\">赠送{{result_jf}}积分</ion-text></p>-->\r\n\r\n    <ion-list *ngIf=\"pricearr\" inset=\"true\">\r\n      <ion-item  *ngFor=\"let item of pricearr['pricearr']; let i = index\">\r\n        <ion-label>{{item.key}}</ion-label>\r\n        <div class=\"end\" [ngClass]=\"{'red': i > 1}\">{{item.value}}</div>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list *ngIf=\"pricearr\" inset=\"true\" no-margin>\r\n      <ion-item  *ngFor=\"let item of pricearr['hdarr']\">\r\n        <ion-label>{{item.key}}</ion-label>\r\n        <div class=\"end\"><ion-text color=\"primary\">{{item.value}}</ion-text></div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"ptxz\" padding>\r\n    点击“提交订单”表示已阅读并同意 <ion-text color=\"primary\">《旅行家平台服务协议》《旅游 安全须知》</ion-text>\r\n  </div>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <app-footer [type]=\"3\" [allprice]=\"total.amount_formated\" (sub)=\"submit($event)\" [disabled]=\"num != activePerson.length || !username || !usertel\"></app-footer>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

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

/***/ "./src/app/pages/confirmationorder/confirmationorder.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/confirmationorder/confirmationorder.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orderContent {\n  font-size: var(--ion-sm-text);\n}\n.orderContent .title {\n  font-weight: 600;\n  margin-bottom: 7px;\n}\nion-content {\n  --background: var(--ion-gray-background-color);\n}\nion-content > div {\n  background-color: #fff;\n  margin-bottom: 10px;\n}\n.person .box {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.person .box .center {\n  flex: 1;\n  text-align: left;\n  margin-left: 15px;\n  margin-right: 10px;\n}\n.person .box .center .des-name {\n  color: var(--ion-color-tertiary);\n}\n.person .box .right div {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n  background-color: rgba(var(--ion-color-tertiary-rgb), 0.3);\n  font-weight: 400;\n  line-height: 16px;\n}\n.bx-box {\n  padding-bottom: 1px;\n}\n.bx-box .title {\n  padding: 0 15px;\n}\n.bx-box .des {\n  background-color: #FEF8D7;\n  font-size: var(--ion-sm-text);\n  color: #9A6C21;\n  padding: 15px;\n}\n.bx-box .box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0 15px;\n}\n.bx-box .box app-yhbox {\n  margin-right: 10px;\n}\n.bx-box p {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-dark);\n  padding: 0 15px;\n  margin-top: 4px;\n}\n.lxr .title {\n  padding: 0 15px;\n}\n.lxr ion-list {\n  margin-bottom: 0;\n}\n.yhxx p {\n  margin-top: 10px;\n  font-size: var(--ion-sm-text);\n  margin-bottom: 0;\n}\nion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\n.myselect {\n  border: 1px solid var(--ion-color-light);\n  background: none;\n  width: 100%;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 5px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9jb25maXJtYXRpb25vcmRlci9jb25maXJtYXRpb25vcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpcm1hdGlvbm9yZGVyL2NvbmZpcm1hdGlvbm9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENBO0VBQ0UsOENBQUE7QUNFRjtBRERFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNFSjtBRERJO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dOO0FERk07RUFDRSxnQ0FBQTtBQ0lSO0FEQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDBEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VSO0FER0E7RUFDRSxtQkFBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURDRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjtBREFJO0VBQ0Usa0JBQUE7QUNFTjtBRENFO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0o7QURHRTtFQUNFLGVBQUE7QUNBSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDREo7QURJQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBR0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maXJtYXRpb25vcmRlci9jb25maXJtYXRpb25vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJDb250ZW50IHtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgJj5kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5wZXJzb24ge1xyXG4gIC5ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAuY2VudGVyIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgLmRlcy1uYW1lIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IpLCAuMyk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYngtYm94IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIC50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gIC5kZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRjhENztcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgY29sb3I6ICM5QTZDMjE7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGFwcC15aGJveCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG59XHJcbi5seHIge1xyXG4gIC50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gIGlvbi1saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbi55aHh4IHtcclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbn1cclxuLm15c2VsZWN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdXRsaW5lOm5vbmU7XHJcbn0iLCIub3JkZXJDb250ZW50IHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59XG4ub3JkZXJDb250ZW50IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucGVyc29uIC5ib3gge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnBlcnNvbiAuYm94IC5jZW50ZXIge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnBlcnNvbiAuYm94IC5jZW50ZXIgLmRlcy1uYW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG4ucGVyc29uIC5ib3ggLnJpZ2h0IGRpdiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiksIDAuMyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uYngtYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cbi5ieC1ib3ggLnRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmJ4LWJveCAuZGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRjhENztcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIGNvbG9yOiAjOUE2QzIxO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmJ4LWJveCAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5ieC1ib3ggLmJveCBhcHAteWhib3gge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYngtYm94IHAge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5seHIgLnRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmx4ciBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi55aHh4IHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG59XG5cbi5teXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");

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
            console.log(res);
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
        var bounsarr = [];
        bounsarr[this.data.suppId] = this.changebonus;
        var bzarr = [];
        bzarr[this.data.suppId] = this.bz;
        var obj = {
            sel_cartgoods: [this.cid],
            // how_oos, 缺货处理
            // card_message, // 贺卡内容
            // inv_type, 发票信息
            // inv_payee,
            // inv_content,
            postscript: JSON.stringify(bzarr),
            integral: 0,
            bonus: JSON.stringify(bounsarr),
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
    ConfirmationorderPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_getproduct_service__WEBPACK_IMPORTED_MODULE_3__["GetproductService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _services_contactlist_service__WEBPACK_IMPORTED_MODULE_5__["ContactlistService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: _services_payorder_service__WEBPACK_IMPORTED_MODULE_7__["PayorderService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_9__["NativeService"] }
    ]; };
    ConfirmationorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmationorder',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmationorder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirmationorder/confirmationorder.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmationorder.page.scss */ "./src/app/pages/confirmationorder/confirmationorder.page.scss")).default]
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